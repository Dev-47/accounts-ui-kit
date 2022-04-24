import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="grid h-full place-content-center place-items-center gap-4">
      {/* circles */}
      <div className="absolute top-10 right-0">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-blue-700"></div>
          <div className="h-20 w-20 rounded-full bg-blue-700"></div>
        </div>
      </div>
      {/* circles */}

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xl font-bold">
          Hi
        </label>
        <label htmlFor="" className="text-2xl font-bold">
          Sign In Now
        </label>
        <p>
          <span className="text-gray-400">Don't have an account?</span>
          <Link to="/sign-up">Create Now</Link>
        </p>
      </div>
      <form className="grid gap-2">
        <div className="h-fit w-full">
          <input
            type="email"
            className="rounded-lg py-2 px-4"
            placeholder="email"
          />
        </div>

        <div className="h-fit w-full">
          <input
            type="password"
            className="rounded-lg py-2 px-4"
            placeholder="password"
          />
        </div>

        <div className="flex justify-end">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <label htmlFor="" className="mx-auto font-bold">
          or
        </label>

        <div className="flex items-center justify-center gap-2">
          <button className="rounded-2xl bg-blue-700 py-2 px-6">
            <i className="icon facebook"></i>
            <span>Facebook</span>
          </button>

          <button className="rounded-2xl bg-red-600 py-2 px-6">
            <i className="icon google plus"></i>
            <span>Google</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
