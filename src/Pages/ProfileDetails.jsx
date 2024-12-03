import React from 'react'

function ProfileDetails() {
  return (
    <div className="max-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        {/* Header */}
        <h1 className="text-center text-xl font-bold mb-6">Profile Details</h1>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src="https://www.shutterstock.com/image-vector/passport-photo-young-handsome-redhead-260nw-754397068.jpg"
              alt="Profile Avatar"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M16.707 5.293a1 1 0 00-1.414 0L10 10.586 7.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name*
              </label>
              <input
                type="text"
                placeholder="Amir"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Shaw"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email ID*
            </label>
            <input
              type="email"
              placeholder="amirshaw@gmail.com"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number*
            </label>
            <div className="flex items-center space-x-2">
              <span className="inline-block bg-gray-100 px-3 py-2 rounded-md border border-gray-300">
                +880
              </span>
              <input
                type="text"
                placeholder="1639200002"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Gender Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender*
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-green-500 border-gray-300"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-green-500 border-gray-300"
                />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="h-4 w-4 text-green-500 border-gray-300"
                />
                <span>Other</span>
              </label>
            </div>
          </div>

          {/* Date of Birth Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth*
            </label>
            <input
              type="date"
              defaultValue="1996-11-13"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Update Button */}
          <div className="">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-3xl font-medium hover:bg-green-700 "
          >
            Update Profile
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileDetails