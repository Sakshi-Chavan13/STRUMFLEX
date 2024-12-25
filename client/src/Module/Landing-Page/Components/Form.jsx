import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    lessonFor: yup
      .string()
      .oneOf(["myself", "child", "other"], "Please select an option")
      .required("Please select an option"),
    contactNumber: yup
      .string()
      .matches(/^\d{10}$/, "Must be exactly 10 digits")
      .required("Contact number is required"),
    emailId: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    goals: yup
      .string()
      .min(10, "Please provide at least 10 characters")
      .required("Goals are required"),
  })
  .required();

export default function GuitarLessonForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      lessonFor: "myself",
      terms: true,
    },
  });

  console.log(watch());

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-lg mx-auto h-[617px] p-6 bg-white rounded-lg shadow-md shadow-red-300">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <svg
              className="w-16 h-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="text-gray-600">
            We've received your request for a demo lesson. Our team will contact
            you shortly to schedule your session.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            onClick={() => {
              setIsSuccess(false);
              reset();
            }}
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md shadow-red-300">
      <div className="text-center mb-8">
        {/* <div className="mx-auto bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mb-2">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            ></path>
          </svg>
        </div> */}
        <h2 className="text-2xl font-bold">Try a Half Hour Demo</h2>
        <p className="text-gray-600 mt-2">
          Start your musical journey with a free lesson. Complete the form below
          and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Is this lesson for you or for a child?
          </label>
          <div className="grid grid-cols-3 gap-4">
            {["myself", "child", "other"].map((option) => (
              <label
                key={option}
                className={`flex items-center justify-center p-2 border rounded-lg cursor-pointer transition duration-300 hover:bg-gray-50 ${
                  watch("lessonFor") === option ? "border-red-600" : ""
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  {...register("lessonFor")}
                  className="sr-only"
                />
                <span
                  className={`capitalize ${
                    errors.lessonFor ? "text-red-500" : ""
                  }`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
          {errors.lessonFor && (
            <p className="mt-1 text-xs text-red-500">
              {errors.lessonFor.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              {...register("contactNumber")}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.contactNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your contact number"
            />
            {errors.contactNumber && (
              <p className="mt-1 text-xs text-red-500">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="emailId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email ID
            </label>
            <input
              type="email"
              id="emailId"
              {...register("emailId")}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.emailId ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email address"
            />
            {errors.emailId && (
              <p className="mt-1 text-xs text-red-500">
                {errors.emailId.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="goals"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            What are your main goals for learning guitar?
          </label>
          <textarea
            id="goals"
            {...register("goals")}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md h-[71px] ${
              errors.goals ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Tell us about your goals... (e.g., learn favorite songs, write music, play in a band)"
          ></textarea>
          {errors.goals && (
            <p className="mt-1 text-xs text-red-500">{errors.goals.message}</p>
          )}
        </div>

        <div className="flex items-center !mt-2">
          <button
            type="button"
            onClick={() => setValue("terms", !watch("terms"))}
            className={`${
              watch("terms") ? "bg-red-600" : "bg-gray-300"
            } relative inline-flex items-center h-4 w-6 rounded-full focus:outline-none`}
          >
            <span
              className={`${
                watch("terms") ? "translate-x-3" : "translate-x-1"
              } inline-block w-2 h-2 transform bg-white rounded-full transition-transform`}
            />
          </button>
          <label
            htmlFor="terms"
            className="ml-2 text-xs font-medium text-gray-700"
          >
            Share pdf on your WhatsApp
          </label>
        </div>
        {errors.terms && (
          <p className="mt-1 text-xs text-red-500">{errors.terms.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}
