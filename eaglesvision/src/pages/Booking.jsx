import BookingForm from "../components/BookingForm";
import "../styles/main.css";

export default function Booking() {
  return (
    <section className="booking">
      <h2>Book a Service</h2>
      <BookingForm />
    </section>
  );
}
