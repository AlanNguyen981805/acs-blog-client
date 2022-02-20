import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import DisplayBlog from '../../components/blog/DisplayBlog';
import { getDetailBlog } from '../../utils/api';
import { IParams } from '../../utils/TypeScript';

const DetailBLog = ({dataBlog}: any) => {
    const { query } = useRouter();

    useEffect(() => {
    }, [query])
    return (
        <div>
            <DisplayBlog detailBlog={dataBlog} />
        </div>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const param: any = context.params

    const resBlog = await fetch(`http://localhost:5000/api/blog/${param.slug}`)
    const dataBlog = await resBlog.json()
    
    return {
      props: {
        dataBlog
    }, 
    }
}

export default DetailBLog;