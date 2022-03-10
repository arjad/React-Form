import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";

const App = () => {
  //formik model
  const formik = useFormik({
    initialValues: {
      email: '',
      pass:'',
    },
    onSubmit: values => {
      console.log("values = ", values);
      alert(JSON.stringify(values));
      console.log("errror =  ",formik.errors);
      formik.resetForm();
    },
  });

  //yup schema
  let schema = yup.object().shape({
    email:yup.string().required(),
    pass:yup.string().required(),
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br/>
      <label htmlFor="pass">Password</label>
      <input
        id="pass"
        name="pass"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.pass}
      />
      <br/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;