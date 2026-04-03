import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiBriefcase } from "react-icons/fi";

export default function BookDemo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    agree: false,
    captcha: ""
  });

  const [errors, setErrors] = useState({});
  const [captchaCode, setCaptchaCode] = useState("");

  // 🔹 Generate Random Captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  // 🔹 Run on Load
  useEffect(() => {
    generateCaptcha();
  }, []);

  // 🔹 Validation
  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Full name is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Enter valid email";
    }

    if (!form.company.trim()) err.company = "Company name is required";

    if (!form.size) err.size = "Select company size";

    if (!form.agree) err.agree = "You must accept terms";

    if (form.captcha.toUpperCase() !== captchaCode) {
      err.captcha = "Invalid captcha";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted ✅");
      generateCaptcha(); // refresh captcha
      setForm({
        name: "",
        email: "",
        company: "",
        size: "",
        agree: false,
        captcha: ""
      });
    }
  };

  // 🔹 Handle Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] flex items-center justify-center p-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
            {/* 🔹 HEADER */}
      <div className="text-start mb-4">
        <span className="bg-[#0078D4]/10 text-[#0078D4] px-5 py-2 rounded-full text-sm font-medium">
          ● Book Demo
        </span>
        </div>

          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            Experience Smarter HR with <br />
            <span className="bg-gradient-to-r from-[#0078D4] to-[#00A4EF] text-transparent bg-clip-text">
              Empayro Demo
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            See how EMPAYRO simplifies HR operations from hiring to payroll
            all in one powerful platform.
          </p>

          <div className="mt-8 space-y-4">
            <Feature text="Automated Payroll & Compliance" />
            <Feature text="Attendance & Leave Management" />
            <Feature text="Employee Performance Tracking" />
            <Feature text="Real-time Insights & Reports" />
          </div>

          <div className="mt-8 text-sm text-gray-500">
            ⭐ Trusted by 500+ companies
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Get Started with Empayro
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              icon={<FiUser />}
            />

            <Input
              label="Work Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              icon={<FiMail />}
            />

            <Input
              label="Company Name"
              name="company"
              value={form.company}
              onChange={handleChange}
              error={errors.company}
              icon={<FiBriefcase />}
            />

            {/* SELECT */}
            <div>
              <label className="text-sm text-gray-600">Company Size</label>
              <select
                name="size"
                value={form.size}
                onChange={handleChange}
                className={`w-full mt-1 p-3 border rounded-lg focus:ring-2 ${
                  errors.size
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-[#0078D4]"
                }`}
              >
                <option value="">Select</option>
                <option>1-10 Employees</option>
                <option>10-50 Employees</option>
                <option>50-200 Employees</option>
                <option>200+ Employees</option>
              </select>
              {errors.size && (
                <p className="text-red-500 text-xs mt-1">{errors.size}</p>
              )}
            </div>

            {/* CAPTCHA */}
            <div>
              <label className="text-sm text-gray-600">Captcha</label>

              <div className="flex items-center gap-3 mt-1">
                <div className="bg-gray-200 px-4 py-2 rounded-lg font-mono tracking-widest flex items-center gap-2">
                  {captchaCode}
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    ↻
                  </button>
                </div>

                <input
                  name="captcha"
                  value={form.captcha}
                  onChange={handleChange}
                  placeholder="Enter captcha"
                  className={`flex-1 p-3 border rounded-lg focus:ring-2 ${
                    errors.captcha
                      ? "border-red-500 focus:ring-red-400"
                      : "focus:ring-[#0078D4]"
                  }`}
                />
              </div>

              {errors.captcha && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.captcha}
                </p>
              )}
            </div>

            {/* CHECKBOX */}
            <div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="accent-[#0078D4] w-4 h-4"
                />
                <label className="text-sm text-gray-600">
                  I agree to Terms & <span className="font-semibold"><a href="/privacy-policy ">Privacy Policy</a>
                </span>
                </label>
              </div>
              {errors.agree && (
                <p className="text-red-500 text-xs mt-1">{errors.agree}</p>
              )}
            </div>

            {/* BUTTON */}
            <button className="w-full bg-[#0078D4] hover:bg-[#005fa3] text-white py-3 rounded-lg font-semibold shadow-lg">
              Book Demo
            </button>


          </form>

          <p className="text-xs text-gray-400 mt-4">
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}

// 🔹 FLOATING INPUT
function Input({ label, name, value, onChange, error, icon }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </div>

      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full pl-10 pr-3 pt-5 pb-2 border rounded-lg outline-none transition-all
        ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-400"
            : "border-gray-300 focus:border-[#0078D4] focus:ring-1 focus:ring-[#00A4EF]"
        }`}
      />

      <label
        className={`absolute left-10 bg-white px-1 text-gray-500 transition-all
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
        peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#0078D4]
        ${value ? "-top-2 text-sm" : ""}
        `}
      >
        {label}
      </label>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

// 🔹 FEATURE
function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-blue-100 text-blue-600 p-2 size-7.5 flex justify-center items-center rounded-full">✔</div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}