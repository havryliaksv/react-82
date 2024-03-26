export default function PaymentCard({
  payment: {
    amount,
    cardOwner,
    isPaid,
    description,
    cardNumber,
    cardType,
    date,
  },
}) {
  return (
    <div>
      <p>Amount: {amount}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <p>Status: {isPaid ? "Paid" : "Pending"}</p>
      <p>Description: {description}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Payment Date: {date}</p>
      <hr />
    </div>
  );
}
