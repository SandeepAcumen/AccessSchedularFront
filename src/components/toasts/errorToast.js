import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const errorToast = (message = "error") => {
    toast.error(message, {
        position: "bottom-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: 'custom-toast'
    });
}

export default errorToast