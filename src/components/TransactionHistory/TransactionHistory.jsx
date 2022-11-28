import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { Table, Heading, Row } from './TransactionHistory.styled';

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
            <Transaction type={type} amount={amount} currency={currency} />
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
    })
  ),
};
