import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/app/Components/Button";
import useRecaptchaV3 from "@/app/Hook/useRecaptchaV3";
import { useRegistrationForm } from "../service";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const executeRecaptcha = useRecaptchaV3();

  const { mutate } = useRegistrationForm();

  const onSubmit = (data) => {
    executeRecaptcha();
    mutate(data);
    setIsSubmitting(true);
  };

  return (
    <div className="mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Guitar Lesson Registration
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Register for comprehensive guitar instruction tailored to your
            preferences
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 py-8 space-y-8 max-md:h-[calc(100vh-400px)] overflow-y-scroll"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="tel"
                  id="name"
                  {...register("name")}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number (WhatsApp)
                </label>
                <input
                  type="tel"
                  id="mobile"
                  {...register("mobile", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  })}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="goals"
                  className="block text-sm font-medium text-gray-700"
                >
                  What are your main goals for learning guitar?
                </label>
                <textarea
                  id="goals"
                  {...register("goals", {
                    required: "Please describe your goals",
                  })}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.goals ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.goals && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.goals.message}
                  </p>
                )}
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-6">
              {/* Guitar Ownership */}
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have a guitar?
                </span>
                <div className="flex gap-4">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="inline-flex items-center">
                      <input
                        type="radio"
                        value={option}
                        {...register("guitar_available", {
                          required: "Please select an option",
                        })}
                        className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.guitar_available && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.guitar_available.message}
                  </p>
                )}
              </div>

              {/* Previous Experience */}
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Have you played guitar before?
                </span>
                <div className="flex gap-4">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="inline-flex items-center">
                      <input
                        type="radio"
                        value={option}
                        {...register("guitar_played_before", {
                          required: "Please select an option",
                        })}
                        className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.guitar_played_before && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.guitar_played_before.message}
                  </p>
                )}
              </div>

              {/* Availability */}
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Availability for Session
                </span>
                <div className="flex flex-wrap gap-4">
                  {["morning", "afternoon", "evening"].map((time) => (
                    <label key={time} className="inline-flex items-center">
                      <input
                        type="radio"
                        value={time}
                        {...register("shift", {
                          required: "Please select an option",
                        })}
                        className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {time}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.shift && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.shift.message}
                  </p>
                )}
              </div>

              {/* Days */}
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Days
                </span>
                <div className="flex gap-4">
                  {["weekdays", "weekend"].map((option) => (
                    <label key={option} className="inline-flex items-center">
                      <input
                        type="radio"
                        value={option}
                        {...register("days", {
                          required: "Please select an option",
                        })}
                        className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.days && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.days.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Status */}
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">
                What is your current status?
              </span>
              <div className="flex flex-wrap gap-4">
                {["student", "working", "self-employed"].map((status) => (
                  <label key={status} className="inline-flex items-center">
                    <input
                      type="radio"
                      value={status}
                      {...register("status", {
                        required: "Please select an option",
                      })}
                      className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 capitalize">
                      {status}
                    </span>
                  </label>
                ))}
              </div>
              {errors.status && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.status.message}
                </p>
              )}
            </div>

            {/* Learning Method */}
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">
                What&apos;s your preferred learning method?
              </span>
              <div className="flex flex-wrap gap-4">
                {[
                  ["online", "Online"],
                  ["offline", "Offline"],
                  ["personal", "Personal (At Home)"],
                ].map(([value, label]) => (
                  <label key={value} className="inline-flex items-center">
                    <input
                      type="radio"
                      value={value}
                      {...register("learning_method", {
                        required: "Please select an option",
                      })}
                      className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
              {errors.learning_method && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.learning_method.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
