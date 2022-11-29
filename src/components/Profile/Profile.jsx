import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsList,
} from './Profile.styled';
import { iconSize } from 'constans/iconSizes';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <Description>
        <img src={avatar} alt={username} width={iconSize.m} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <Stats>
          <span>Followers</span>
          <b>{followers}</b>
        </Stats>
        <Stats>
          <span>Views</span>
          <b>{views}</b>
        </Stats>
        <Stats>
          <span>likes</span>
          <b>{likes}</b>
        </Stats>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
