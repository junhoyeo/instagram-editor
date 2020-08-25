import axios from 'axios';

export default async function getProfileImageURL(username: string) {
  try {
    const { data: html } = await axios.get(`https://images${~~(Math.random()*3333)}-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/${username}/`);
    const regex = /_sharedData = ({.*);<\/script>/m;
    const regexResults = regex.exec(html);
    if (regexResults) {
      const json = JSON.parse(regexResults[1]);
      const {
        graphql: {
          user: {
            profile_pic_url: profileImageURL,
          },
        },
      } = json.entry_data.ProfilePage[0];
      return profileImageURL;
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
}
