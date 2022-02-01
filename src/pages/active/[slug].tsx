import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import axiosClient from '../../utils/axiosClient';
import { IParams } from '../../utils/TypeScript';

const ActiveAccount = () => {
    const {query}: IParams = useRouter();
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if(query.slug) {
            axiosClient.post('api/active', {active_token: query.slug})
            .then(res => {
                setSuccess(res.data.msg)
            })
            .catch(err => {
                setError(err.response.data.msg)
            })
        }
    }, [query.slug])

    return (
        <Layout>
            {error && <h3>Token đã hết hạn</h3>}
            {success && <h3>{success}</h3>}
        </Layout>
    );
};

export default ActiveAccount;