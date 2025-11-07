import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/bookingform.css";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      testType: "",
      date: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    try {
      // Send to WhatsApp
      const whatsappMsg = `New Booking App:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nTest: ${data.testType}\nDate: ${data.date}\nMessage: ${data.message}`;
      window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(whatsappMsg)}`, "_blank");

      // You can also send via EmailJS here

      alert("Your booking has been submitted successfully.");
      reset();
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        <h2 className="booking-title">Book an Appointment</h2>
        <p className="booking-subtitle">
          Please fill in your details below and we’ll get back to you soon.
        </p>

        {isSubmitSuccessful && <div className="success-message">Thank you — we’ve received your booking request.</div>}

        <form className="booking-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required", minLength: { value: 3, message: "At least 3 characters" } })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Mobile Number *</label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter 10 digit number" } })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="testType">Select Test Type *</label>
            <select id="testType" {...register("testType", { required: "Please select a test type" })}>
              <option value="">-- Select Test --</option>
              <option value="Blood Test">Blood Test</option>
              <option value="MRI Scan">MRI Scan</option>
              <option value="CT Scan">CT Scan</option>
              <option value="Ultrasound">Ultrasound</option>
              <option value="ECG / Cardiology">ECG / Cardiology</option>
              <option value="Full Body Checkup">Full Body Checkup</option>
            </select>
            {errors.testType && <p className="error">{errors.testType.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Date *</label>
            <input
              id="date"
              type="date"
              {...register("date", { required: "Preferred date is required" })}
            />
            {errors.date && <p className="error">{errors.date.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              rows="4"
              {...register("message", { maxLength: { value: 500, message: "Max 500 characters" } })}
              placeholder="Optional message..."
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Submit Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}
