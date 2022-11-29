import PropTypes from 'prop-types';
import { Table, Heading, Row } from './TransactionHistory.styled';
import { Body } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Heading>Type</Heading>
          <Heading>Amount</Heading>
          <Heading>Currency</Heading>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <Body>{type}</Body>
            <Body>{amount}</Body>
            <Body>{currency}</Body>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
