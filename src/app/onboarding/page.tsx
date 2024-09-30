export default function Onboarding() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-gray-800 p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Complete Your Onboarding</h1>

        <form className="space-y-6">
          {/* Email and Password Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                placeholder="********"
              />
            </div>
          </div>

          {/* Two-Factor Authentication (2FA) Section */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Enable Two-Factor Authentication (2FA)</label>
            <select className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
              <option>SMS</option>
              <option>Authenticator App</option>
              <option>Email</option>
            </select>
          </div>

          {/* Organization Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Organization Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                placeholder="Your Organization Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Organization Address</label>
              <input
                type="text"
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                placeholder="123 Street, City, Country"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700"
            >
              Complete Onboarding
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
