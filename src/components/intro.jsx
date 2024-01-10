import React from "react";
import { Form } from "react-router-dom";
import calculator from "@/assets/calculator.png";

const Intro = () => {
  return (
    <div className="flex items-center gap-7">
      <div className="flex flex-col items-start justify-center">
        <h1>
          Take Control <span className="text-success">Your Mony</span>
        </h1>
        <Form
          method="post"
          className="flex flex-col items-center justify-center gap-2 xl:flex-row"
        >
          <input
            type="text"
            name="userName"
            required
            placeholder="wahts your name?"
            aria-label="your name"
            className=" input input-bordered input-success w-full max-w-xs mt-8"
            autocomplete="off"
          />
          <button type="submit" className="btn btn-outline  mt-8">
            create account
          </button>
        </Form>
      </div>
      <img
        src={calculator}
        alt="calculater-image"
        className="h-[46dvh] max-[768px]:hidden"
      />
    </div>
  );
};

export default Intro;
