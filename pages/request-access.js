import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Head from "next/head";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      location: "",
      nameOfApp: "",
      phoneNum: "",
      appPurpse: "",
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
    <div>
      <Head>
        <title> Become A Member -- BANIDB.com</title>
      </Head>
      <div className="container px-4 py-5 ">
        <div className="container row pt-5">
          <h1 className="fs-3 py-3 text-center">BECOME A PARTNER</h1>{" "}
          <div className="col-12 col-lg-8 ">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3 col-12 col-lg-6 ">
                <label htmlFor=" name" className="form-label">
                  Your Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className=" form-control px-2 py-2  w-100 "
                  id="name"
                  placeholder="Your Name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mb-3 col-12 col-lg-6 ">
                <label htmlFor=" email" className="form-label">
                  Your Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className=" form-control px-2 py-2  w-100 "
                  id="name"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3 col-12 col-lg-6 ">
                <label htmlFor=" name" className="form-label">
                  Your Telephone Number<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="phoneNum"
                  placeholder="Telephone Number"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNum}
                  className=" form-control px-2 py-2  w-100 "
                  {...formik.getFieldProps("phoneNum")}
                />
                {formik.touched.phoneNum && formik.errors.phoneNum ? (
                  <div className="text-danger">{formik.errors.phoneNum}</div>
                ) : null}
              </div>
              <div className="mb-3 col-12 col-lg-6">
                <label
                  htmlFor=" exampleFormControlInput1"
                  className="form-label"
                >
                  Your Location <span className="text-danger">*</span>
                </label>
                <input
                  name="location"
                  type="text"
                  className=" form-control px-2 py-2  w-100"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                  placeholder="Location"
                  {...formik.getFieldProps("location")}
                />{" "}
                {formik.touched.location && formik.errors.location ? (
                  <div className="text-danger">{formik.errors.location}</div>
                ) : null}
              </div>
              <div className="mb-3 col-12 col-lg-6">
                <label
                  htmlFor=" exampleFormControlInput1"
                  className="form-label"
                >
                  Name of App/Project <span className="text-danger">*</span>
                </label>
                <input
                  name="nameOfApp"
                  type="text"
                  placeholder="Name of App/Project"
                  className=" form-control px-2 py-2  w-100"
                  onChange={formik.handleChange}
                  value={formik.values.nameOfApp}
                  {...formik.getFieldProps("nameOfApp")}
                />{" "}
                {formik.touched.nameOfApp && formik.errors.nameOfApp ? (
                  <div className="text-danger">{formik.errors.nameOfApp}</div>
                ) : null}
              </div>
              <div className="mb-3 col-12 col-lg-10">
                <label
                  htmlFor=" exampleFormControlTextarea1"
                  className="form-label"
                >
                  What is the purpose of your application?
                </label>
                <textarea
                  name="appPurpse"
                  className="form-control "
                  rows="6"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary text-light fw-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
/*import React from "react";
import * as Yup from "yup";
import Head from "next/head";
import { useFormik } from "formik";

const RequestAccess = () => {
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
          <h1 className="fs-3 py-3">BECOME A PARTNER</h1>{" "}
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3 col-12 col-lg-6 ">
              <label htmlFor=" name" className="form-label">
                Your Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className=" form-control px-2 py-2  w-100 "
                id="name"
                placeholder="Your Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3 col-12 col-lg-6 ">
              <label for="email" className="form-label">
                Your Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className=" form-control px-2 py-2  w-100 "
                id="name"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3 col-12 col-lg-6 ">
              <label for="name" className="form-label">
                Your Telephone Number<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="phoneNum"
                onChange={formik.handleChange}
                value={formik.values.phoneNum}
                className=" form-control px-2 py-2  w-100 "
                {...formik.getFieldProps("phoneNum")}
              />
              {formik.touched.phoneNum && formik.errors.phoneNum ? (
                <div className="text-danger">{formik.errors.phoneNum}</div>
              ) : null}
            </div>
            <div className="mb-3 col-12 col-lg-6">
              <label for="exampleFormControlInput1" className="form-label">
                Your Location <span className="text-danger">*</span>
              </label>
              <input
                name="location"
                type="text"
                className=" form-control px-2 py-2  w-100"
                onChange={formik.handleChange}
                value={formik.values.location}
                {...formik.getFieldProps("location")}
              />{" "}
              {formik.touched.location && formik.errors.location ? (
                <div className="text-danger">{formik.errors.location}</div>
              ) : null}
            </div>
            <div className="mb-3 col-12 col-lg-6">
              <label for="exampleFormControlInput1" className="form-label">
                Name of App/Project <span className="text-danger">*</span>
              </label>
              <input
                name="nameOfApp"
                type="text"
                className=" form-control px-2 py-2  w-100"
                onChange={formik.handleChange}
                value={formik.values.nameOfApp}
                {...formik.getFieldProps("nameOfApp")}
              />{" "}
              {formik.touched.nameOfApp && formik.errors.nameOfApp ? (
                <div className="text-danger">{formik.errors.nameOfApp}</div>
              ) : null}
            </div>
            <div className="mb-3 col-12 col-lg-6">
              <label for="exampleFormControlTextarea1" className="form-label">
                What is the purpose of your application?
              </label>
              <textarea
                name="appPurpse"
                className="form-control w-50 h-50"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary text-light fw-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestAccess;
*/
