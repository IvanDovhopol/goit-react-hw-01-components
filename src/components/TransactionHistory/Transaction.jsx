import PropTypes from 'prop-types';
import { Body } from './TransactionHistory.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <Body>{type}</Body>
      <Body>{amount}</Body>
      <Body>{currency}</Body>
    </>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
