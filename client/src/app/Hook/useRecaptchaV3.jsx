"use client"

import React, { useEffect } from "react";

const useRecaptchaV3 = () => {
  const executeRecaptcha = () => {
    window.grecaptcha.ready(() => {
      return window.grecaptcha.execute("", { action: "submit" });
    });
  };

  useEffect(() => {
    if (window.grecaptcha) executeRecaptcha();
    else {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return executeRecaptcha;
};

export default useRecaptchaV3;
