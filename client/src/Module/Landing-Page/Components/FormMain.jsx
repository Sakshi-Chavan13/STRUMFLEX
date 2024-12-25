import React from "react";
import GuitarLessonForm from "./Form";

const FormMain = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
      <div></div>
      <GuitarLessonForm />
    </div>
  );
};

export default FormMain;
