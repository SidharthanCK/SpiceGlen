import React from 'react'
import { X } from "lucide-react";

function EditAddress({ open, onClose }) {
    if (!open) return null;
  return (
    <div>
      {/* edit Address */}
       <div className="fixed inset-0 z-50  backdrop-blur-sm bg-transparent  flex justify-center items-center rounded-2xl">
      <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 relative mt-20">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Edit Address</h2>
            <p className="text-sm text-gray-500">Edit your delivery address</p>
          </div>
          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        <hr className="mb-4" />

        {/* Personal Details */}
        <h3 className="text-teal-600 font-semibold mb-2">Personal Details</h3>
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Mobile Number *</label>
            <div className="flex items-center gap-2">
              <div className="flex items-center px-2 py-2 border border-gray-300 rounded bg-gray-50 text-sm">
                🇮🇳 +91
              </div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Address Details */}
        <h3 className="text-teal-600 font-semibold mb-2">Address Details</h3>
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm font-medium text-gray-700">Building Number *</label>
            <input
              type="text"
              placeholder="House/Flat number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Street *</label>
            <input
              type="text"
              placeholder="Street name"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Landmark (Optional)</label>
            <input
              type="text"
              placeholder="Nearby landmark"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">City *</label>
              <input
                type="text"
                placeholder="City"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Postal Code *</label>
              <input
                type="text"
                placeholder="Postal code"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">
            Save Address
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditAddress
