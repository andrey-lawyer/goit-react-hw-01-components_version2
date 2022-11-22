import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
    return (
        <ul className={css["friend-list"]}>   
      {friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}        
        />
      ))}  
        </ul>
  );
};

FriendList.propTypes = {
     friends: PropTypes.arrayOf(
      PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired, 
      isOnline: PropTypes.bool.isRequired,
      }),
    ),
}