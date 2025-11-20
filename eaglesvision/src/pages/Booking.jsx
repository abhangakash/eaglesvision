import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaMobileAlt,
  FaStethoscope,
  FaCheckCircle,
  FaHospital,
  FaHome,
  FaCalendarAlt,
  FaClock,
  FaStickyNote,
} from "react-icons/fa";

import "../styles/bookingform.css";

const LAB_WHATSAPP = "919607109962";
const XRAY_WHATSAPP = "919405109962";
const ICON_SIZE = 18;

export default function Booking() {
  const [serviceOther, setServiceOther] = useState(false);
  const [visitType, setVisitType] = useState("center");
  const [availableTimes, setAvailableTimes] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const LAB_SERVICES = [
    "Blood tests",
    "Urine tests",
    "Stool tests",
    "Sputum tests",
    "Biochemistry tests",
    "Hematology tests",
    "Serology tests",
    "Immunology tests",
    "Microbiology tests",
    "Pathology / Histopathology",
    "Cytology (Pap smear, FNAC)",
    "Molecular diagnostics (PCR, DNA/RNA tests)",
    "Allergy testing",
    "Hormone assays",
    "Vitamin and mineral tests",
    "Tumor marker tests",
    "Health check-up packages",
    "Preventive health screening",
    "Corporate / executive check-ups",
    "Women’s health packages",
    "Senior citizen health packages",
    "Home sample collection",
    "Online report delivery",
    "Infectious disease testing",
    "Autoimmune disorder testing",
  ];

  const XRAY_SERVICES = ["X-ray", "ECG", "Echocardiography"];

 const onSubmit = (data) => {
  const selectedServicesArray = data.services || [];

  const servicesList = selectedServicesArray
    .filter((s) => s !== "Other")
    .join(", ");

  const otherServiceText = data.otherService
    ? ` & Other: ${data.otherService}`
    : "";

  const selectedServices = `${servicesList}${otherServiceText}`;

  const hasLab = selectedServicesArray.some((s) => LAB_SERVICES.includes(s));
  const hasXray = selectedServicesArray.some((s) => XRAY_SERVICES.includes(s));
  const hasOnlyOther =
    selectedServicesArray.length === 1 &&
    selectedServicesArray.includes("Other");

  let targetNumbers = [];

  if (hasLab) targetNumbers.push(LAB_WHATSAPP);
  if (hasXray) targetNumbers.push(XRAY_WHATSAPP);

  if (!hasLab && !hasXray && hasOnlyOther) {
    targetNumbers = [LAB_WHATSAPP];
  }

  let locationDetails;

  if (data.visitType === "center") {
    locationDetails = `📍 Center: ${data.centerLocation}`;
  } else {
    const fullAddress = `${data.addressLine1}${
      data.addressLine2 ? ", " + data.addressLine2 : ""
    }, ${data.city} - ${data.pin}`;
    locationDetails = `🏠 Home Address: ${fullAddress}`;
  }

  // iPhone Safe Message
  const messageLines = [
    "*✨ New Appointment Request! ✨*",
    "-------------------------------------------------",
    `👤 *Name*: ${data.name}`,
    `📱 *Phone*: ${data.phone}`,
    `📝 *Service(s)*: ${selectedServices}`,
    `✅ *Visit Type*: ${data.visitType === "center" ? "At Centre" : "At Home"}`,
    `🗺️ ${locationDetails}`,
    `📅 *Date & Time*: ${data.date} at ${data.time}`,
    `💬 *Notes*: ${data.notes || "None provided"}`,
    "-------------------------------------------------"
  ];

  const message = messageLines.join("%0A");
  const encodedMessage = encodeURIComponent(message);

  targetNumbers.forEach((num) => {
    window.open(`https://wa.me/${num}?text=${encodedMessage}`, "_blank");
  });

  alert("A new WhatsApp tab has opened. Please send the message to complete your booking!");

  // 👉 KEEP ONLY THIS RESET (AFTER WhatsApp opens)
  reset();
  setServiceOther(false);
  setVisitType("center");
};


  const validateName = (value) => {
    if (!/^[A-Za-z ]+$/.test(value)) return "Only letters and spaces allowed";
    if (value.trim().length < 3) return "Name must be at least 3 characters";
    return true;
  };

  const validatePhone = (value) =>
    /^[6-9][0-9]{9}$/.test(value) ||
    "Must be 10 digits, starting with 6, 7, 8, or 9";

  const handleNameKeyPress = (e) => {
    if (!/^[a-zA-Z\s]$/.test(e.key)) e.preventDefault();
  };

  const handleAddressKeyPress = (e) => {
    if (!/^[a-zA-Z0-9\s,.-]$/.test(e.key)) e.preventDefault();
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
  };

  const handleOtherChange = (e) => {
    const checked = e.target.checked;
    setServiceOther(checked);
    if (!checked) setValue("otherService", "");
  };

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  const generateTimes = (startHour, endHour) => {
    const times = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute of [0, 30]) {
        const time = new Date();
        time.setHours(hour, minute, 0);
        const formatted = time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        times.push(formatted);
      }
    }
    return times;
  };

  useEffect(() => {
    if (visitType === "center") {
      setAvailableTimes(generateTimes(0, 23));
    } else {
      setAvailableTimes(generateTimes(7, 20));
    }
  }, [visitType]);

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        <h2 className="booking-title">Book an Appointment</h2>
        <p className="booking-subtitle">
          Schedule your diagnostic test with our experienced team. We'll confirm your appointment via WhatsApp.
        </p>

        {isSubmitSuccessful && (
          <div className="success-message">
            Thank you — your appointment request has been prepared! **A new tab has opened with WhatsApp. Please send the message to complete your booking.**
          </div>
        )}

        <form className="booking-form" onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* NAME */}
          <div className="form-group">
            <label htmlFor="name">
              <FaUser size={ICON_SIZE} style={{ marginRight: "8px" }} />
              Patient Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Patient Full Name"
              onKeyPress={handleNameKeyPress}
              {...register("name", {
                required: "Full name is required",
                validate: validateName,
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          {/* PHONE */}
          <div className="form-group">
            <label htmlFor="phone">
              <FaMobileAlt size={ICON_SIZE} style={{ marginRight: "8px" }} />
              Mobile Number <span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter 10 Digit Valid Mobile Number"
              onInput={handlePhoneInput}
              {...register("phone", {
                required: "Mobile number is required",
                validate: validatePhone,
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          {/* SERVICES */}
          <div className="form-group">
            <label>
              <FaStethoscope size={ICON_SIZE} style={{ marginRight: "8px" }} />
              Select Service Type <span style={{ color: "red" }}>*</span>
            </label>

            {/* ✅ X-ray Services ABOVE Lab Services */}
            <h4 style={{ marginTop: "10px" }}>🩻 X-ray Services</h4>
            <div className="checkbox-group">
              {XRAY_SERVICES.map((service) => (
                <label key={service}>
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services")}
                  />
                  {service}
                </label>
              ))}
            </div>

            <h4 style={{ marginTop: "10px" }}>🧪 Lab Services</h4>
            <div className="checkbox-group">
              {LAB_SERVICES.map((service) => (
                <label key={service}>
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services", {
                      validate: (val) =>
                        val.length > 0 || "Select at least one service",
                    })}
                  />
                  {service}
                </label>
              ))}
            </div>

            <label style={{ marginTop: "10px" }}>
              <input
                type="checkbox"
                value="Other"
                {...register("services")}
                onChange={handleOtherChange}
              />
              Other
            </label>

            {errors.services && (
              <p className="error">{errors.services.message}</p>
            )}

            {serviceOther && (
              <input
                type="text"
                placeholder="Enter other service"
                {...register("otherService", {
                  required: "Other service cannot be empty",
                })}
              />
            )}

            {errors.otherService && (
              <p className="error">{errors.otherService.message}</p>
            )}
          </div>

          {/* VISIT TYPE */}
          <div className="form-group horizontal-group">
            <label>
              <FaCheckCircle size={ICON_SIZE} style={{ marginRight: "8px" }} />
              Visit Type <span style={{ color: "red" }}>*</span>
            </label>

            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  value="center"
                  {...register("visitType", { required: true })}
                  onChange={() => setVisitType("center")}
                  defaultChecked
                />
                At Centre
              </label>

              <label>
                <input
                  type="radio"
                  value="home"
                  {...register("visitType", { required: true })}
                  onChange={() => setVisitType("home")}
                />
                At Home
              </label>
            </div>

            {errors.visitType && <p className="error">Select a visit type</p>}
          </div>

          {/* CENTER */}
          {visitType === "center" && (
            <div className="form-group">
              <label>
                <FaHospital size={ICON_SIZE} style={{ marginRight: "8px" }} />
                Centre Location <span style={{ color: "red" }}>*</span>
              </label>

              <select {...register("centerLocation", { required: true })}>
                <option value="Shop No. 10, 1st Floor, Ganesh Bella Montana, Shinde Wasti Chowk, Ravet, Pune-412101">
                  Shop No. 10, 1st Floor, Ganesh Bella Montana, Shinde Wasti Chowk, Ravet, Pune-412101
                </option>
                <option disabled>Other locations - Coming soon</option>
              </select>

              {errors.centerLocation && (
                <p className="error">Centre location is required</p>
              )}
            </div>
          )}

          {/* HOME ADDRESS */}
          {visitType === "home" && (
            <div className="form-group">
              <label>
                <FaHome size={ICON_SIZE} style={{ marginRight: "8px" }} />
                Home Address <span style={{ color: "red" }}>*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Address Line 1"
                onKeyPress={handleAddressKeyPress}
                {...register("addressLine1", {
                  required: "Address Line 1 is required",
                })}
              />
              {errors.addressLine1 && (
                <p className="error">{errors.addressLine1.message}</p>
              )}

              <input
                type="text"
                placeholder="Enter Address Line 2 (Optional)"
                onKeyPress={handleAddressKeyPress}
                {...register("addressLine2")}
              />

              <input
                type="text"
                placeholder="Enter City Name"
                onKeyPress={handleAddressKeyPress}
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <p className="error">{errors.city.message}</p>}

              <input
                type="text"
                placeholder="Enter PIN Code"
                {...register("pin", {
                  required: "PIN is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "6 digit PIN only",
                  },
                })}
                onInput={(e) => {
                  e.target.value = e.target.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 6);
                }}
              />
              {errors.pin && <p className="error">{errors.pin.message}</p>}
            </div>
          )}

          {/* DATE + TIME */}
          <div className="form-group horizontal-group">
            <div>
              <label>
                <FaCalendarAlt size={ICON_SIZE} style={{ marginRight: "8px" }} />
                Date <span style={{ color: "red" }}>*</span>
              </label>

              <input
                type="date"
                min={minDate}
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && <p className="error">{errors.date.message}</p>}
            </div>

            <div>
              <label>
                <FaClock size={ICON_SIZE} style={{ marginRight: "8px" }} />
                Time <span style={{ color: "red" }}>*</span>
              </label>

              <select {...register("time", { required: "Time is required" })}>
                <option value="">Select Time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              {errors.time && <p className="error">{errors.time.message}</p>}
            </div>
          </div>

          {/* NOTES */}
          <div className="form-group">
            <label>
              <FaStickyNote size={ICON_SIZE} style={{ marginRight: "8px" }} />
              Additional Instructions (Optional)
            </label>

            <textarea
              placeholder="Enter Additional Instructions If Any "
              rows="4"
              {...register("notes", {
                maxLength: { value: 500, message: "Max 500 characters" },
              })}
            ></textarea>

            {errors.notes && <p className="error">{errors.notes.message}</p>}
          </div>

          {/* SUBMIT */}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting
              ? "Generating WhatsApp Message…"
              : "Submit Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}
