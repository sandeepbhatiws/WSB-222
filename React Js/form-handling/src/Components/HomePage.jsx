import React from 'react'
import UserForm from './UserForm'
import UserData from './UserData'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-2xl font-semibold text-slate-800 mb-1">User Details Form</h1>
          <p className="text-slate-500 mb-6">Fill in the details below</p>

          <UserForm/>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-5">User Records</h2>

          <UserData/>
        </div>

      </div>
    </div>
  )
}
