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
  FaMapMarkerAlt
} from 'react-icons/fa'; // Importing specific icons

import "../styles/bookingform.css";

// IMPORTANT: Replace this with the owner's WhatsApp number
const OWNER_PHONE_NUMBER = "+919665400807"; 

// Using React Icon components directly in the JSX
const ICON_SIZE = 18; // Standard size for inline icons

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

  const onSubmit = (data) => {
    // ... (WhatsApp Logic remains the same, using UNICODE icons for the message) ...
    const servicesList = data.services.filter(s => s !== "Other").join(", ");
    const otherServiceText = data.otherService ? ` & Other: ${data.otherService}` : '';
    const selectedServices = `${servicesList}${otherServiceText}`;
    
    let locationDetails;
    if (data.visitType === "center") {
      locationDetails = `📍 Center: ${data.centerLocation}`;
    } else {
      locationDetails = `🏠 Home Address: ${data.addressLine1}, ${data.city}, ${data.district}, ${data.state} - ${data.pin}`;
    }

    const message = `
*✨ New Appointment Request! (Web Form) ✨*
-------------------------------------------------
👤 *Name*: ${data.name}
📱 *Phone*: ${data.phone}
📝 *Service(s)*: ${selectedServices}
✅ *Visit Type*: ${data.visitType === 'center' ? 'At Center' : 'At Home'}
🗺️ ${locationDetails}
📅 *Date & Time*: ${data.date} at ${data.time}
💬 *Notes*: ${data.notes || 'None provided'}
-------------------------------------------------
`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${OWNER_PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    
    alert("Please check your new tab to confirm and send the appointment request via WhatsApp!");
    reset();
    setServiceOther(false);
    setVisitType("center");
  };


  // --- Custom Validators & Handlers (unchanged) ---
  const validateName = (value) => {
    if (!/^[A-Za-z ]+$/.test(value)) return "Only letters and spaces allowed";
    if (value.trim().length < 3) return "Name must be at least 3 characters";
    return true;
  };

  const validatePhone = (value) =>
    /^[6-9][0-9]{9}$/.test(value) ||
    "Must be 10 digits, starting with 6, 7, 8, or 9";

  const handleNameKeyPress = (e) => {
    const char = e.key;
    if (!/^[a-zA-Z\s]$/.test(char)) e.preventDefault();
  };

  const handleAddressKeyPress = (e) => {
    const char = e.key;
    if (!/^[a-zA-Z0-9\s,.-]$/.test(char)) e.preventDefault();
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
      setAvailableTimes(generateTimes(0, 23)); // full day
    } else {
      setAvailableTimes(generateTimes(7, 20)); // 7 AM - 8 PM
    }
  }, [visitType]);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Puducherry", 
    "Chandigarh", "Jammu and Kashmir", "Ladakh",
  ];

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
          
          {/* 1. Full Name */}
          <div className="form-group">
            <label htmlFor="name">
              <FaUser size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
              Patient Name <span style={{color: 'red'}}>*</span>
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

          {/* 2. Mobile Number */}
          <div className="form-group">
            <label htmlFor="phone">
              <FaMobileAlt size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
              Mobile Number <span style={{color: 'red'}}>*</span>
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

          {/* 3. Services */}
          <div className="form-group">
            <label>
              <FaStethoscope size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
              Select Service Type <span style={{color: 'red'}}>*</span>
            </label>
            {/* Checkboxes (unchanged) */}
            <div className="checkbox-group">
              {[
                "Blood Test", "MRI Scan", "CT Scan", "Ultrasound", "ECG", "Digital X-ray", 
                "Portable X-ray", "Pathology Lab", "Full Body Checkup",
              ].map((service) => (
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
              <label>
                <input
                  type="checkbox"
                  value="Other"
                  {...register("services")}
                  onChange={handleOtherChange}
                />
                Other
              </label>
            </div>
            {errors.services && <p className="error">{errors.services.message}</p>}
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

          {/* 4. Visit Type (same row) */}
          <div className="form-group horizontal-group">
            <label>
              <FaCheckCircle size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
              Visit Type <span style={{color: 'red'}}>*</span>
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
                At Center
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

          {/* 5. Center Location */}
          {visitType === "center" && (
            <div className="form-group">
              <label>
                <FaHospital size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
                Center Location <span style={{color: 'red'}}>*</span>
              </label>
              <select {...register("centerLocation", { required: true })}>
                <option value="Main Center">Main Center (Default)</option>
                <option disabled>Other locations - Coming soon</option>
              </select>
              {errors.centerLocation && <p className="error">Center location is required</p>}
            </div>
          )}

          {/* 6. Home Address */}
          {visitType === "home" && (
            <div className="form-group">
              <label>
                <FaHome size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
                Home Address <span style={{color: 'red'}}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Address Line 1"
                onKeyPress={handleAddressKeyPress}
                {...register("addressLine1", { required: "Address Line 1 is required" })}
              />
              {errors.addressLine1 && <p className="error">{errors.addressLine1.message}</p>}

              {/* ... (Other address fields) ... */}
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
                placeholder="Enter District Name"
                onKeyPress={handleAddressKeyPress}
                {...register("district", { required: "District is required" })}
              />
              {errors.district && <p className="error">{errors.district.message}</p>}

              <select
                {...register("state", { required: "State is required" })}
                defaultValue=""
              >
                <option value="" disabled>
                  <FaMapMarkerAlt size={ICON_SIZE} style={{ marginRight: '5px' }} /> Select State 
                </option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && <p className="error">{errors.state.message}</p>}

              <input
                type="text"
                placeholder="Enter PIN Code"
                {...register("pin", {
                  required: "PIN is required",
                  pattern: { value: /^[0-9]{6}$/, message: "6 digit PIN only" },
                })}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
                }}
              />
              {errors.pin && <p className="error">{errors.pin.message}</p>}
            </div>
          )}

          {/* 7. Date & Time in one row */}
          <div className="form-group horizontal-group">
            <div>
              <label>
                <FaCalendarAlt size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
                Date <span style={{color: 'red'}}>*</span>
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
                <FaClock size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
                Time <span style={{color: 'red'}}>*</span>
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

          {/* 8. Additional Notes */}
          <div className="form-group">
            <label>
              <FaStickyNote size={ICON_SIZE} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
              Additional Instructions (Optional)
            </label>
            <textarea placeholder="Enter Additional Instructions If Any "
              rows="4"
              {...register("notes", {
                maxLength: { value: 500, message: "Max 500 characters" },
              })}
            ></textarea>
            {errors.notes && <p className="error">{errors.notes.message}</p>}
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Generating WhatsApp Message…" : "Submit Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}