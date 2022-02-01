import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../utils/TypeScript';
import toast, { Toaster } from 'react-hot-toast';

const Alert = () => {
    const { alert }: any = useSelector((state: RootStore) => state)
    const dispatch = useDispatch()

    console.log(alert)
    useEffect(() => {
        if(!alert.error) return

        toast.error('hihiii')
    }, [alert.error, alert.loading])

    useEffect(() => {
        if(!alert.success) return

        toast.success("Thanh cong")
    }, [alert.success, alert.loading])

    return (
        <div>
            {alert?.error && (
                <h1>{alert?.error}</h1>
            )}
                <h1>ssss</h1>
            {alert?.success && (
                <h1>Successsssss</h1>
            )}
            {/* <Toaster /> */}
        </div>
    );
};

export default Alert;