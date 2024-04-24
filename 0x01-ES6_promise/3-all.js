import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  return Promise.all([uploadPhoto, createUser])
    .then((values) => {
      console.log(
        `${values[0].body} ${values[1].firstname} ${values[1].lastname}`
      );
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
