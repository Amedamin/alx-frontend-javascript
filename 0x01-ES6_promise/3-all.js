import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([PH, USER]) => {
      console.log(`${PH.body} ${USER.firstName} ${USER.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
