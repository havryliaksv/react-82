import PaymentList from "./PaymentList";
import PageTitle from "./PageTitle";
import initialPayments from "../payments.json";
export default function App() {
  return (
    <>
      <PageTitle text="List of Payments" />
      <PageTitle text="Profile" />
      <PaymentList payments={initialPayments} />

      {/* <PaymentCard payment={data1} />
      <PaymentCard payment={data2} /> */}
    </>
  );
}
