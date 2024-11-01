import React from "react";
import WelcomeBg from "assets/images/welcome-bg.svg";

import LeafDuoImg from "assets/images/leaf-duo.svg";
import AppButton from "components/Base/AppButton";

const Welcome = () => {
  return (
    <div
      style={{ backgroundImage: `url(${WelcomeBg})` }}
      className="flex-1 bg-cover bg-no-repeat flex p-2"
    >
      <div className="flex-1 gap-4 flex flex-col items-center justify-center">
        <img src={LeafDuoImg} alt="leaf-duo" className="" />
        <h1 className="text-3xl font-semibold leading-[45px] text-center text-tertiary">
          Welcome To BHP
        </h1>
        <p className="text-sm font-normal leading-6 text-center text-tertiary-100">
          By continuing, you agree to, consent, and acknowledge our{" "}
          <span className="font-semibold text-green-lime underline">
            Terms of use
          </span>
          , and{" "}
          <span className="font-semibold text-green-lime underline">
            Privacy Policy
          </span>
          .
        </p>

        <AppButton className="mt-2 w-full max-w-[320px] h-[54px]" variant="default">
          Proceed
        </AppButton>
      </div>
    </div>
  );
};

export default Welcome;
