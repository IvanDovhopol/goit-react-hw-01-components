import PropTypes from 'prop-types';
import { Card, Title, StatList, Stats } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Stats key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </Stats>
        ))}
      </StatList>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
