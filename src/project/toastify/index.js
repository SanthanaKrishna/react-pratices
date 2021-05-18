import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = () => {
    return (
        <div>
            Something went wrong!
            <button onClick={closeToast}></button>
        </div>
    )
}

toast.configure();
export const Toast = () => {
    const notify = () => {
        toast("basic notification", { position: toast.POSITION.TOP_CENTER, autoClose: 8000 })
        toast.success("success notification", { position: toast.POSITION.TOP_RIGHT })
        toast.info("info notification", { position: toast.POSITION.BOTTOM_CENTER, autoClose: false })
        toast.warn(<CustomToast />, { position: toast.POSITION.BOTTOM_RIGHT })
        toast.error("error notification", { position: toast.POSITION.TOP_LEFT });
    };

    return (
        <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
        </div>
    )
}
