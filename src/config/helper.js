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
      alert(error.response.data.non_field_errors[0]);
    }
  } else if (error.request) {
    alert('Something Went Wrong!');

    // ErrorHelper.handleErrors('Something Went Wrong!', true);
  } else {
    // ErrorHelper.handleErrors('Something Went Wrong!', true);
    alert('Something Went Wrong!');
  }
};

export { handleErrorMessage };
