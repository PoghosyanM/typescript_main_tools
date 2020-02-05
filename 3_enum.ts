// when we don't note the value of properties, in that case value became its index
enum Member {
  Simple, // 0
  Premium, // 1
  Standart // 2
}

const member = Member[1]; // Premium
const memberReverse = Member.Standart; // index of property --- 2

// when we note the value of properties, value became that value
enum SocialMedia {
  INSTAGRAM = "INSTAGRAM",
  TWITTER = "TWITTER",
  FACEBOOK = "FACEBOOK"
}

const socialMediaInstagram = SocialMedia.INSTAGRAM; // INSTAGRAM
const socialMediaFacebook = SocialMedia.FACEBOOK; // FACEBOOK
