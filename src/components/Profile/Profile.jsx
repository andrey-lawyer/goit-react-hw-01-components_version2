import PropTypes from 'prop-types';
import {
  ProfileUser,
  DescriptionUser,
  ImgUser,
  NameUser,
  TagUser,
  LocationUser,
  StatsListUser,
  StatsItemtUser,
  StatsLabelUser,
  StatsquantityUser
} from './Profile.styled';

export const Profile = (
  // {cardUser}
  props
) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: {followers, views, likes },} = props.cardUser;
  return (
    <ProfileUser>
   <DescriptionUser> 
    <ImgUser
      src={avatar}
      alt= "User avatar"     
    />
        <NameUser>{username}</NameUser>
        <TagUser>@{tag}</TagUser>
        <LocationUser>{location}</LocationUser>
  </DescriptionUser>

  <StatsListUser>
     <StatsItemtUser>
        <StatsLabelUser>Followers</StatsLabelUser>
        <StatsquantityUser>{followers}</StatsquantityUser>
     </StatsItemtUser>
        
    <StatsItemtUser>
          <StatsLabelUser>Views</StatsLabelUser>
          <StatsquantityUser>{views}</StatsquantityUser>
    </StatsItemtUser>
    <StatsItemtUser>
          <StatsLabelUser>Likes</StatsLabelUser>
      <StatsquantityUser>{likes}</StatsquantityUser>
    </StatsItemtUser> 
  </StatsListUser>
</ProfileUser>    
  );
};

Profile.propTypes = {
  cardUser:PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }), 
}),
};


