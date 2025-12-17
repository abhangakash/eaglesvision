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
  } = useForm({
    shouldUnregister: false,
    defaultValues: { visitType: "center" },
  });

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

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  const generateTimes = (startHour, endHour) => {
    const times = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute of [0, 30]) {
        const t = new Date();
        t.setHours(hour, minute, 0);
        times.push(
          t.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
        );
      }
    }
    return times;
  };

  useEffect(() => {
    setAvailableTimes(
      visitType === "center"
        ? generateTimes(0, 23)
        : generateTimes(7, 20)
    );
  }, [visitType]);

  const onSubmit = (data) => {
    const selectedServicesArray = data.services || [];

    const servicesList = selectedServicesArray
      .filter((s) => s !== "Other")
      .join(", ");

    const otherServiceText = data.otherService
      ? ` & Other: ${data.otherService}`
      : "";

    const selectedServices = `${servicesList}${otherServiceText}`;

    const hasLab = selectedServicesArray.some((s) =>
      LAB_SERVICES.includes(s)
    );
    const hasXray = selectedServicesArray.some((s) =>
      XRAY_SERVICES.includes(s)
    );
    const hasOnlyOther =
      selectedServicesArray.length === 1 &&
      selectedServicesArray.includes("Other");

    let targetNumbers = [];
    if (hasLab) targetNumbers.push(LAB_WHATSAPP);
    if (hasXray) targetNumbers.push(XRAY_WHATSAPP);
    if (!hasLab && !hasXray && hasOnlyOther) {
      targetNumbers = [LAB_WHATSAPP];
    }

    if (targetNumbers.length === 0) return;

    let locationDetails;
    if (data.visitType === "center") {
      locationDetails = `📍 Center: ${data.centerLocation}`;
    } else {
      const fullAddress = `${data.addressLine1 || ""}${
        data.addressLine2 ? ", " + data.addressLine2 : ""
      }, ${data.city || ""} - ${data.pin || ""}`;
      locationDetails = `🏠 Home Address: ${fullAddress}`;
    }

    const messageLines = [
      "*✨ New Appointment Request! ✨*",
      "-------------------------------------------------",
      `👤 Name: ${data.name}`,
      `📱 Phone: ${data.phone}`,
      `📝 Services: ${selectedServices}`,
      `✅ Visit Type: ${data.visitType === "center" ? "At Centre" : "At Home"}`,
      `🗺️ ${locationDetails}`,
      `📅 Date & Time: ${data.date} at ${data.time}`,
      `💬 Notes: ${data.notes || "None"}`,
      "-------------------------------------------------",
    ];

    const message = messageLines.join("\n").slice(0, 3000);
    const encodedMessage = encodeURIComponent(message);

    // ✅ iOS SAFE: single redirect
    const whatsappNumber = targetNumbers[0];
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    reset();
    setServiceOther(false);
    setVisitType("center");
  };

  const validateName = (value) => {
    if (!/^[A-Za-z ]+$/.test(value)) return "Only letters and spaces allowed";
    if (value.trim().length < 3)
      return "Name must be at least 3 characters";
    return true;
  };

  const validatePhone = (value) =>
    /^[6-9][0-9]{9}$/.test(value) ||
    "Must be 10 digits, starting with 6, 7, 8, or 9";

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
  };

  const handleOtherChange = (e) => {
    const checked = e.target.checked;
    setServiceOther(checked);
    if (!checked) setValue("otherService", "");
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        <h2 className="booking-title">Book an Appointment</h2>

        {isSubmitSuccessful && (
          <div className="success-message">
            A WhatsApp tab has opened. Please send the message to complete booking.
          </div>
        )}

        <form
          className="booking-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* NAME */}
          <div className="form-group">
            <label htmlFor="name">
              <FaUser size={ICON_SIZE} /> Patient Name{" "}
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Patient Full Name"
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
              <FaMobileAlt size={ICON_SIZE} /> Mobile Number{" "}
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
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
              <FaStethoscope size={ICON_SIZE} /> Select Service Type{" "}
              <span style={{ color: "red" }}>*</span>
            </label>

            <h4>🩻 X-ray Services</h4>
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

            <h4>🧪 Lab Services</h4>
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
            </div><br></br>

            <label>
              <input
                type="checkbox"
                value="Other"
                {...register("services")}
                onChange={handleOtherChange}
              />
              Other
            </label>

            {serviceOther && (
              <input
                type="text"
                placeholder="Enter other service"
                {...register("otherService", {
                  required: "Other service cannot be empty",
                })}
              />
            )}

            {errors.services && (
              <p className="error">{errors.services.message}</p>
            )}
          </div>

          {/* VISIT TYPE */}
          <div className="form-group horizontal-group">
            <label>
              <FaCheckCircle size={ICON_SIZE} /> Visit Type{" "}
              <span style={{ color: "red" }}>*</span>
            </label>

            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  value="center"
                  {...register("visitType", { required: true })}
                  onChange={() => setVisitType("center")}
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

          {/* CENTER LOCATION */}
          {visitType === "center" && (
            <div className="form-group">
              <label>
                <FaHospital size={ICON_SIZE} /> Centre Location{" "}
                <span style={{ color: "red" }}>*</span>
              </label>

              <select {...register("centerLocation", { required: true })}>
                <option value="Shop No. 10, 1st Floor, Ganesh Bella Montana, Shinde Wasti Chowk, Ravet, Pune-412101">
                  Shop No. 10, 1st Floor, Ganesh Bella Montana, Shinde Wasti Chowk,
                  Ravet, Pune-412101
                </option>
                <option disabled>Other locations - Coming soon</option>
              </select>
            </div>
          )}

          {/* HOME ADDRESS */}
          {visitType === "home" && (
            <div className="form-group">
              <label>
                <FaHome size={ICON_SIZE} /> Home Address{" "}
                <span style={{ color: "red" }}>*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Address Line 1"
                {...register("addressLine1", {
                  required: "Address Line 1 is required",
                })}
              />
              <input
                type="text"
                placeholder="Enter Address Line 2 (Optional)"
                {...register("addressLine2")}
              />
              <input
                type="text"
                placeholder="Enter City Name"
                {...register("city", { required: "City is required" })}
              />
              <input
                type="text"
                placeholder="Enter PIN Code"
                inputMode="numeric"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 6))
                }
                {...register("pin", {
                  required: "PIN is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "6 digit PIN only",
                  },
                })}
              />
            </div>
          )}

          {/* DATE & TIME */}
          <div className="form-group horizontal-group">
            <div>
              <label>
                <FaCalendarAlt size={ICON_SIZE} /> Date{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="date"
                min={minDate}
                {...register("date", {
                  required: "Date is required",
                  pattern: /^\d{4}-\d{2}-\d{2}$/,
                })}
              />
            </div>

            <div>
              <label>
                <FaClock size={ICON_SIZE} /> Time{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <select {...register("time", { required: "Time is required" })}>
                <option value="">Select Time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* NOTES */}
          <div className="form-group">
            <label>
              <FaStickyNote size={ICON_SIZE} /> Additional Instructions
            </label>
            <textarea
              rows="4"
              placeholder="Enter Additional Instructions If Any"
              {...register("notes", {
                maxLength: { value: 500, message: "Max 500 characters" },
              })}
            />
          </div>

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
