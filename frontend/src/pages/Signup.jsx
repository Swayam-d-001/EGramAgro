import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    farmType: "",
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    try {
        const response = await fetch("http://localhost:5000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          navigate('/dashboard')
          console.log("Signup successful:", data);
          alert("User created successfully!");
        } else {
          console.error("Signup error:", data.error);
          alert(data.error);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred during signup.");
      }
    //console.log("Signup data:", formData)
    // Example of how you might send this to your Express backend:
    // const response = await fetch('/api/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    // const data = await response.json();
    // Handle the response...
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
      </div>
      <div>
        <label htmlFor="farmType" className="block text-sm font-medium text-gray-700">
          Farm Type
        </label>
        <select
          id="farmType"
          name="farmType"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          onChange={handleChange}
          value={formData.farmType}
        >
          <option value="">Select farm type</option>
          <option value="CROP">Crop Farming</option>
          <option value="LIVESTOCK">Livestock Farming</option>
          <option value="MIXED">Mixed Farming</option>
          <option value="OTHER">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Sign Up
      </button>
    </form>
  )
}

export default Signup

