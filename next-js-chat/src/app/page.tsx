export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-slate-500">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 border-t-4 border-r-4 border-slate-500 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the World`s Slowest Chat
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Where every message is worth the wait!
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-left text-gray-700 font-semibold mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              //required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-left text-gray-700 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              //required
            />
          </div>
          <a
            href="/dashboard/chat"
            className="bg-slate-400 hover:bg-slate-500 text-white font-semibold py-2 px-8 rounded-md transition-transform transform hover:scale-105 mt-0 block w-4/4 mx-auto text-center"
          >
            Login
          </a>
        </form>
      </div>
    </div>
  );
}
