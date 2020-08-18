import getProfileImageURL from './getProfileImageURL';

describe('Get profile image URL from username', () => {
  test('Get profile image URL', async () => {
    const url = await getProfileImageURL('jyeo_official');
    expect(url).toStartWith('https://scontent-ssn1-1.cdninstagram.com/');
  });
});
