import { useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errEmail, setErrEmail] = useState();
  const [errPassword, setErrPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return setErrEmail("Email is required.");
    }
    if (!isEmail(email)) {
      return setErrEmail("Not Valid Email.");
    }

    if (!password) {
      return setErrPassword("Password is required");
    }

    if (password.length <= 3) {
      return setErrPassword("Minimum of 4 above.");
    }
    return handleLogin({
      email,
      password,
      remember,
    });
  };
  return (
    <form
      className="mt-8 space-y-6"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="remember" defaultValue="true" />

      <div>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded-none relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {errEmail ? (
        <span className="font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errEmail}
        </span>
      ) : null}
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none rounded-none relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errPassword ? (
        <span className="font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errPassword}
        </span>
      ) : null}

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            onChange={(e) => setRemember(!remember)}
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
