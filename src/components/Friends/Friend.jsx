import PropTypes from 'prop-types';
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from 'react-icons/hi';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span>
        {isOnline === true ? (
          <HiOutlineStatusOnline size={20} />
        ) : (
          <HiOutlineStatusOffline size={20} />
        )}
      </span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
