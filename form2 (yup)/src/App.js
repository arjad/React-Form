import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { ErrorMessage } from "formik";
 const App = () => {

  let schema = yup.object().shape({
    firstName: yup.string().required("empty ha").max(2,"5t45t")
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);

    },
  });

  return (
    <div className="container col-md-6">
      <h4 className="bg-dark text-white p-3 mt-5 ">Enter Applicant Details</h4>

      <form className="m-5" onSubmit={formik.handleSubmit}>
        <h5 className="multiformheading">Personal Details</h5>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            First name
          </label>
          <input
            type="text"
            // className={`form-control ${formik.errors.firstName ? 'is-invalid' : ""}`}
            className="form-control"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && <p>{formik.errors.firstName}</p>}
          {/* <ErrorMessage name="firstname"/> */}
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Save
        </button>
      </form>
    </div>
  );
};



export default App;