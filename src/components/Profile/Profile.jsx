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
import { iconSize } from 'components/constans/iconSizes';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
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
          <b>{stats.followers}</b>
        </Stats>
        <Stats>
          <span>Views</span>
          <b>{stats.views}</b>
        </Stats>
        <Stats>
          <span>likes</span>
          <b>{stats.likes}</b>
        </Stats>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
