import PropTypes from 'prop-types';
import { FriendItem, Status, AvatarUser, NameUser  } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (       
        <FriendItem>        
          <Status isOnline={isOnline}></Status>            
          <AvatarUser src={avatar} alt="User avatar" width="48" />
          <NameUser >{name}</NameUser >
        </FriendItem>      
  );
};

FriendListItem.propTypes = {      
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired, 
      isOnline: PropTypes.bool.isRequired,    
}