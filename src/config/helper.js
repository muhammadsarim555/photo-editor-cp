import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleErrorMessage = (error) => {
  console.log(
    '🚀 ~ file: helper.js:6 ~ handleErrorMessage ~ error.response.data.msg',
    error.response.data.non_field_errors[0]
  );
  if (error.response) {
    // ErrorHelper.handleErrors(error.response.data.non_field_errors[0], true);

    console.log(
      '🚀 ~ file: helper.js:11 ~ handleErrorMessage ~ (error.response.data',
      error.response.data
    );
    if (error.response.data.non_field_errors.length) {
      errorMsg(error.response.data.non_field_errors[0]);
    }
  } else if (error.request) {
    errorMsg('Something Went Wrong!');

    // ErrorHelper.handleErrors('Something Went Wrong!', true);
  } else {
    // ErrorHelper.handleErrors('Something Went Wrong!', true);
    errorMsg('Something Went Wrong!');
  }
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

export { handleErrorMessage };
