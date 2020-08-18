import axios from 'axios';

export default async function getProfileImageURL(username: string) {
  const {
    data: {
      graphql: {
        user: {
          profile_pic_url: profileImageURL,
        },
      },
    },
  } = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
  return profileImageURL;
}
