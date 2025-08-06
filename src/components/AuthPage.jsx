import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Uncut
        </h2>
        <p className="text-center text-gray-800 relative -top-6">
          {isLogin ? "Welcome back again" : "Welcome to uncut"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border-green-800 p-2 shadow-sm focus:border-black focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md p-2 pr-10 shadow-sm focus:border-black focus:ring-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black py-2 text-white hover:bg-gray-800"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          {isLogin ? "New to Uncutt?" : "Already have an account?"}{" "}
          <button
            onClick={toggleMode}
            className="font-semibold text-black hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
