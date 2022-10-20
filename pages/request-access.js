import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Head from "next/head";

const requestAccess = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      location: "",
      nameOfApp: "",
      phoneNum: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
      nameOfApp: Yup.string().required("Required"),
      phoneNum: Yup.string().required("Required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Head>
        <title>Contact -- BANIDB.com </title>
      </Head>

      <div className="container px-5 py-5 ">
      
        <div className="container px-5 ">
        <h1 className="fs-3 py-3">BECOME A PARTNER
</h1>   <form onSubmit={formik.handleSubmit}>
            <div class="mb-3 ">
              <label for="name" class="form-label">
                Your Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                class=" form-control w-auto "
                id="name"
                placeholder="Your Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div class="mb-3 ">
              <label for="email" class="form-label">
                Your Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                class=" form-control w-auto "
                id="name"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div class="mb-3 ">
              <label for="name" class="form-label">
                Your Telephone Number<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="phoneNum"
                onChange={formik.handleChange}
                value={formik.values.phoneNum}
                class=" form-control w-auto "
              
                {...formik.getFieldProps("phoneNum")}
              />
              {formik.touched.phoneNum && formik.errors.phoneNum ? (
                <div className="text-danger">{formik.errors.phoneNum}</div>
              ) : null}
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Your Location <span className="text-danger">*</span>
              </label>
              <input
                name="location"
                type="text"
                class=" form-control w-auto"
                onChange={formik.handleChange}
                value={formik.values.location}
                {...formik.getFieldProps("location")}
              />  {formik.touched.location && formik.errors.location ? (
                <div className="text-danger">{formik.errors.location}</div>
              ) : null}
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name of App/Project <span className="text-danger">*</span>
              </label>
              <input
                name="nameOfApp"
                type="text"
                class=" form-control w-auto"
                onChange={formik.handleChange}
                value={formik.values.nameOfApp}
                {...formik.getFieldProps("nameOfApp")}
              /> {formik.touched.nameOfApp && formik.errors.nameOfApp ? (
                <div className="text-danger">{formik.errors.nameOfApp}</div>
              ) : null}
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                What is the purpose of your application?
              </label>
              <textarea
                name="appPurpse"
                class="form-control w-50 h-50"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary text-light fw-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default requestAccess;
