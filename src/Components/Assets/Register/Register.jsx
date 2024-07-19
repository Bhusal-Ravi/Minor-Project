import React from "react";
import './Register.css';
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    citizenshipNumber: '',
    dateOfBirth: '',
    birthPlace: '',
    currentPlace: '',
    gender: '',
    maritalStatus: '',
    religion: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.citizenshipNumber) newErrors.citizenshipNumber = 'Citizenship Number is required';
    if (!form.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!form.birthPlace) newErrors.birthPlace = 'Birth Place is required';
    if (!form.currentPlace) newErrors.currentPlace = 'Current Place is required';
    if (!form.gender) newErrors.gender = 'Gender is required';
    if (!form.maritalStatus) newErrors.maritalStatus = 'Marital Status is required';
    if (!form.religion) newErrors.religion = 'Religion is required';
    if (!form.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccessMessage('Registration successful');
        setForm({
          fullName: '',
          citizenshipNumber: '',
          dateOfBirth: '',
          birthPlace: '',
          currentPlace: '',
          gender: '',
          maritalStatus: '',
          religion: '',
          phoneNumber: '',
          password: '',
          confirmPassword: ''
        });
        setErrors({});
      } else {
        setErrors({ form: 'Registration failed' });
      }
    } catch (error) {
      setErrors({ form: 'An error occurred during registration' });
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        {successMessage && <div className="success">{successMessage}</div>}
        {errors.form && <div className="error">{errors.form}</div>}

        <div className="inputBox">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
        </div>
        <div className="inputBox">
          <input
            type="text"
            name="citizenshipNumber"
            placeholder="Citizenship Number"
            value={form.citizenshipNumber}
            onChange={handleChange}
            required
          />
          {errors.citizenshipNumber && <div className="error">{errors.citizenshipNumber}</div>}
        </div>
        <div className="inputBox">
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={form.dateOfBirth}
            onChange={handleChange}
            required
          />
          {errors.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}
        </div>
        <div className="inputBox">
          <input
            type="text"
            name="birthPlace"
            placeholder="Birth Place"
            value={form.birthPlace}
            onChange={handleChange}
            required
          />
          {errors.birthPlace && <div className="error">{errors.birthPlace}</div>}
        </div>
        <div className="inputBox">
          <input
            type="text"
            name="currentPlace"
            placeholder="Current Place"
            value={form.currentPlace}
            onChange={handleChange}
            required
          />
          {errors.currentPlace && <div className="error">{errors.currentPlace}</div>}
        </div>
        <div className="inputBox">
          <label htmlFor="gender" className="GenderBox">Gender</label>
          <select
            name="gender"
            className="GenderSelect"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>
        <div className="inputBox">
          <label htmlFor="maritalStatus" className="MaritalStatus">Marital Status</label>
          <select
            name="maritalStatus"
            className="MaritalStatusSelect"
            value={form.maritalStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
          </select>
          {errors.maritalStatus && <div className="error">{errors.maritalStatus}</div>}
        </div>
        <div className="inputBox">
          <label htmlFor="religion" className="ReligionBox">Religion</label>
          <select
            name="religion"
            className="ReligionBox"
            value={form.religion}
            onChange={handleChange}
            required
          >
            <option value="">Select Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Others">Others</option>
          </select>
          {errors.religion && <div className="error">{errors.religion}</div>}
        </div>
        <div className="inputBox">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

          

