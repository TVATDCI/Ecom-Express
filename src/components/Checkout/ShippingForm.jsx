import { useState } from "react";
import PropTypes from "prop-types";

const ShippingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address";
    }

    if (!formData.address1.trim()) {
      nextErrors.address1 = "Address is required";
    }

    if (!formData.city.trim()) {
      nextErrors.city = "City is required";
    }

    if (!formData.postalCode.trim()) {
      nextErrors.postalCode = "Postal code is required";
    } else if (!/^[a-zA-Z0-9]{3,10}$/.test(formData.postalCode)) {
      nextErrors.postalCode = "Postal code must be 3-10 alphanumeric characters";
    }

    if (!formData.country.trim()) {
      nextErrors.country = "Country is required";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const inputClasses = (field) =>
    `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClasses("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
          Address Line 1 *
        </label>
        <input
          id="address1"
          name="address1"
          type="text"
          value={formData.address1}
          onChange={handleChange}
          className={inputClasses("address1")}
        />
        {errors.address1 && (
          <p className="mt-1 text-sm text-red-600">{errors.address1}</p>
        )}
      </div>

      <div>
        <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
          Address Line 2
        </label>
        <input
          id="address2"
          name="address2"
          type="text"
          value={formData.address2}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            className={inputClasses("city")}
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city}</p>
          )}
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal Code *
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            value={formData.postalCode}
            onChange={handleChange}
            className={inputClasses("postalCode")}
          />
          {errors.postalCode && (
            <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country *
        </label>
        <input
          id="country"
          name="country"
          type="text"
          value={formData.country}
          onChange={handleChange}
          className={inputClasses("country")}
        />
        {errors.country && (
          <p className="mt-1 text-sm text-red-600">{errors.country}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continue to Order Summary
      </button>
    </form>
  );
};

ShippingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ShippingForm;
