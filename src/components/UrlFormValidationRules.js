export default function validate(values) {
  let errors = {};
  const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
  console.log(values);
  if (!values.url) {
    errors.url = "URL is required";
  } else if (!url.test(values.url)) {
    errors.url = "URL is invalid";
  }
  return errors;
}
