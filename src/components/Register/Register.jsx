import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../ContextApiProvider/CreateMyContext";

export default function Register() {
  let {registerUser} = useContext(MyContext)
  let hendelRegister = (e)=>{
    e.preventDefault();
    let email = e.target.email.value;
    // let name = e.target.name.value;
    let password = e.target.password.value;
    registerUser(email , password)
    .then((info)=>{
      console.log(info.user)
    })
  }
  return (
    <div className="flex items-center text-start justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Register in to Your Account</h2>

        <form onSubmit={hendelRegister}  className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Dont have an account?{" "}
          <Link to="/" className="text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
