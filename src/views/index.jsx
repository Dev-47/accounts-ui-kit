import React from "react";
import { Link } from "react-router-dom";
import payment_success from "../assets/img/payment-success.svg";

function Index() {
  return (
    <div className="grid h-fit place-items-center">
      <img
        src={payment_success}
        alt="payment success image"
        className="aspect-square w-56"
      />

      <label htmlFor="" className="text-center text-2xl font-bold">
        Make Payments easily and efficiently
      </label>

      <p className="my-2 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        dolorem.
      </p>

      <div className="flex h-fit flex-col items-center justify-center gap-0">
        <button className="my-10 rounded-full bg-blue-600 p-4 text-white">
          Create Account
        </button>

        <p>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Index;
