import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleErrorMessage = (error) => {
  let keyError;

  const networkErrorMessage =
    error?.code === 'ERR_NETWORK' ? 'Error: Cannot connect to server' : '';

  for (const [key, value] of Object.entries(error?.response?.data)) {
    keyError = `${value}`;
    // keyError = `${key}: ${value}`;
  }

  const msg =
    networkErrorMessage ||
    error?.response?.data?.detail ||
    error?.response?.data?.message ||
    keyError;

  //  ||
  // error?.response?.data?.email[0] ||
  if (msg) {
    errorMsg(msg || 'Something went wrong');
  }

  // return Promise.reject(error)
};

export const successMsg = (msg) =>
  toast.success(msg, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
export const errorMsg = (msg) => {
  toast.error(msg, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

export const warnMsg = (msg) => {
  toast.warn(msg, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

export const getToken = () => localStorage.getItem('token');

export { handleErrorMessage };
