import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { List, Card } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Card key={id}>
          <Friend avatar={avatar} name={name} isOnline={isOnline} />
        </Card>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
