import PropTypes from 'prop-types';
import {
  TableHistory,
  TitleLines,
  TitleSells,
  LinesColumns,
  Sells,
  Lines
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TableHistory>
  <thead>
    <TitleLines>
      <TitleSells>Type</TitleSells>
      <TitleSells>Amount</TitleSells>
      <TitleSells>Currency</TitleSells>
    </TitleLines>
  </thead>
            <LinesColumns>
                {items.map(({ id, type, amount, currency }, index) => (
                  <Lines index={index % 2}  key={id} >
                        <Sells>{type}</Sells>
                        <Sells>{amount}</Sells>
                        <Sells>{currency}</Sells>
                    </Lines>))}         
  </LinesColumns>
</TableHistory>    
  );
};

TransactionHistory.propTypes = {
     items: PropTypes.arrayOf(
      PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      }),
    ),
}