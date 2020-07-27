const validate = (values) => {
  let errors = {};
  const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
  if (!values.url) {
    console.log("Website address is required");
    errors.url = "Website address is required";
  } else if (!url.test(values.url)) {
    console.log("URL is invalid");
    errors.url = "URL is invalid";
  }
  return errors;
};

export default validate;
