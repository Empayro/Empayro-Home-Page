import React, { useState } from "react";
import PlanCard from "../pricing/PlanCard";
import {
  FiUsers,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiSettings,
  FiBarChart2,
  FiLayers,
  FiCpu,
  FiActivity,
} from "react-icons/fi";

function Plans() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"

  const plans = [
    {
      title: "Basic",
      monthlyPrice: "₹999",
      yearlyPrice: "₹9999",
      price: "₹999",
      subtitle: "/month",
      description: "Perfect for small teams getting started",
      gst: "* Price exclusive of GST",
      features: [
        {
          title: "Core HR & Operations",
          items: [
            "Employee Onboarding - Self",
            "Employee Onboarding - Manual",
            "Employee Management",
            "Leavers Process",
            "HR Dashboard - Basic",
            "Documents & Compliance",
          ],
        },
        {
          title: "Attendance",
          items: [
            "Biometric Attendance (Add on)",
            "Leave Management",
            "Attendance Dashboard - Basic",
            "My Attendance",
            "Leave Status/Apply",
            "Limited Leave Carry Forward",
            "Overtime Report",
            "Overtime Automation",
          ],
        },
        {
          title: "Payroll & Expense",
          items: [
            "Download Payroll File",
            "Payroll Automation",
            "PT Returns(STATE-WISE)",
            "Labour Welfare Fund",
            "TDS Returns",
            "ESI Return Filing",
            "Minimum Wage Compliance",
            "Bonus Act Compliance",
            "Form F (Gratuity Nomination Form)",
            "Automatic Law Updates (Tax Slabs, PT, PF/ESI, etc.)",
            "Full & Final Settlement",
            "Payroll Locking / Approval Workflow",
            "Bank Transfer File Generation",
            "Mobile Payslip Access",
            "Payroll Recalculation",
            "Prior Payroll Data Access",
          ],
        },
        {
          title: "Self-Service",
          items: [
            "Notification",
            "Profile",
            "System Set-up",
            "General Settings",
            "Special Occassions",
            "Access to Mobile App",
          ],
        },
      ],
      icons: [
        { icon: <FiUsers />, label: "Up to 100 Employees" },
        { icon: <FiClock />, label: "Attendance Tracking" },
        { icon: <FiShield />, label: "Basic Support" },
      ],
      buttonText: "Start Free Trial",
    },
    {
      title: "Advanced",
      monthlyPrice: "₹1999",
      yearlyPrice: "₹19999",
      price: "₹1999",
      subtitle: "/month",
      description: "Best for growing companies",
      gst: "* Price exclusive of GST",
      features: [
        {
          title: "Core HR & Operations",
          items: [
            "HRMS Basic +",
            "Employee Onboarding - Bulk",
            "Tax Management",
            "Organizational Structure",
            "Pre-boarding & Personlized Offer Letter",
            "Employee Timeline",
            "Personalized Candidate Interview Form",
            "Generate QR Code",
            "Candidate Registration",
            "Candidate Application Management",
            "HR Dashboard - Advanced",
            "Form 11 (PF Declaration Form)",
            "e-sign",
            "Income Tax / TDS Calculation ",
          ],
        },
        {
          title: "Attendance",
          items: [
            "Multi-Shift Management",
            "Break Tracker",
            "Attendance Dashboard - Advanced",
            "Hybrid or Remote Attendance",
            "self-Selfie clock-in",
            "Roster management",
            "Comp-off Management",
            "Multiple Payroll Cycles",
          ],
        },
        {
          title: "Payroll & Expense",
          items: [
            "Employee Tax Management",
            "Salary Disbursal - 3rd Party Integration",
            "Loans & Advances",
            "Benefits & Perks",
            "Gratuity Management",
            "Email Payroll File",
            "ESI Return Filing report export",
            "TDS Returns report export",
            "Form C (Bonus Register) report export",
            "Form 24Q report export",
            "Payroll Audit Trail",
            "Appraisal Cycles",
            "Payroll Summary - Analytics",
            "Department Payroll Report",
            "PF Report",
            "ESI Report",
            "PT Report",
            "TDS Report",
          ],
        },
        {
          title: "Self-Service",
          items: ["Surveys"],
        },
      ],
      icons: [
        { icon: <FiTrendingUp />, label: "Up to 500 Employees" },
        { icon: <FiSettings />, label: "Payroll Automation" },
        { icon: <FiBarChart2 />, label: "Advanced Reports" },
      ],
      isPopular: true,
      buttonText: "Start Free Trial",
    },
    {
      title: "Premium",
      monthlyPrice: "4999",
      yearlyPrice: "14999",
      price: "4999",
      subtitle: "/month",
      description: "For large organizations",
      features: [
        {
          title: "Core HR & Operations",
          items: [
            "HRMS Advanced + ",
            "HR Analytics",
            "Workforce demographics analytics",
          ],
        },
        {
          title: "Attendance",
          items: [
            "GEO location Punching",
            "Geo-fencing Attendance",
            "Leave Notice Period Rule",
            "Leave Accrual (Inc. Tenure Based)",
            "Sandwich Leave Rule",
          ],
        },
        {
          title: "Payroll & Expense",
          items: [
            "Expense Management",
            "Form 16 Generation/form 130",
            "Submit Reimbursements",
            "Resignation & Exit Management",
            "Exit Interviews",
            "Approval Workflow",
            "Travel Claims",
            "Loan & Advance Management",
            "YTD (Year-to-Date) Tracking",
            "Headcount Cost",
            "Attrition/retention Rate",
            "Salary Trends",
            "Multi-Bank Payroll",
            "Payment Reconciliation",
            "Direct Bank API Integration",
          ],
        },
        {
          title: "Self-Service",
          items: ["Helpdesk"],
        },
      ],
      icons: [
        { icon: <FiLayers />, label: "Unlimited Employees" },
        { icon: <FiCpu />, label: "Custom Workflows" },
        { icon: <FiActivity />, label: "AI Integration" },
      ],
      buttonText: "Contact Sales",
    },
    {
      title: "Enterprise",
      monthlyPrice: "14999",
      yearlyPrice: "34999",
      price: "14999",
      subtitle: "/month",
      description: "For large organizations",
      features: [
        {
          title: "Core HR & Operations",
          items: [
            "All Access + Customization as per business needs.",
          ],
        },
      ],
      icons: [
        { icon: <FiLayers />, label: "Unlimited Employees" },
        { icon: <FiCpu />, label: "Custom Workflows" },
        { icon: <FiActivity />, label: "AI Integration" },
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f5f9ff] to-[#e6f2ff] pt-28 p-20">
      {/* 🔹 HEADER */}
      <div className="text-center">
        <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium">
          ● Pricing
        </span>

        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mt-6">
          Flexible Plans for{" "}
          <span className="text-secondary">Every Business</span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-full mx-auto">
          Transparent pricing with powerful features. Scale as you grow 🚀
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="relative inline-flex bg-gray-200 rounded-full p-1 w-50">
          {/* 🔹 Sliding pill */}
          <span
            className={`absolute top-0 left-0 h-full w-1/2 bg-primary rounded-full transition-all duration-300 ease-in-out ${
              billingCycle === "yearly" ? "translate-x-full" : ""
            }`}
          ></span>

          {/* 🔹 Options */}
          <button
            className={`relative z-10 w-1/2 text-sm font-medium py-2 ${
              billingCycle === "monthly" ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`relative z-10 w-1/2 text-sm font-medium py-2 ${
              billingCycle === "yearly" ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* 🔹 CARDS */}
      <div className="grid md:grid-cols-4 gap-8 max-w-350 mx-auto mt-14">
        {/* <div className="mt-14 gap-8 max-w-6xl mx-auto"> */}
        {/* <PlansCarousel plans={plans} /> */}

        {plans.map((plan, index) => (
          //   <PlanCard key={index} {...plan} />
          <PlanCard
            key={index}
            {...plan}
            price={
              billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
            }
            subtitle={billingCycle === "monthly" ? "/month" : "/year"}
          />
        ))}
      </div>

      {/* 🔹 FOOTER SECTION */}
      <div className="mt-16 text-center">
        <p className="text-gray-600">
          Need a custom solution?{" "}
          <span className="text-primary font-semibold cursor-pointer">
            Talk to our sales team →
          </span>
        </p>
      </div>
    </div>
  );
}

export default Plans;
