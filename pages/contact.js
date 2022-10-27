import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import Head from "next/head";

const SignupForm = () => {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
    }),

    onSubmit: ({ name, email, subject, message }, { resetForm }) => {
      emailjs
        .sendForm(
          "service_5k4pz01",
          "template_ssntq3l",
          form.current,
          "user_aVMjgLam4rroy8ETgabF9"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      resetForm({ name: "", email: "", subject: "", message: "" });
    },
  });
  return (
    <div>
      <Head>
        <title> Contact -- BANIDB.com</title>
      </Head>
      <div className="container px-4 py-5 ">
        <div className="container row pt-5">
          <h1 className="fs-3 py-2 text-center">CONTACT</h1>
          <div className="col-12 col-lg-8 ">
            <form onSubmit={formik.handleSubmit} ref={form}>
              <div className="mb-3 col-12 col-lg-6 ">
                <label htmlFor=" name" className="form-label">
                  Your Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className=" form-control  px-2 py-2  w-100"
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
                  className=" form-control  px-2 py-2"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3 col-12 col-lg-6 ">
                <label
                  htmlFor=" exampleFormControlInput1"
                  className="form-label"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  {...formik.getFieldProps("subject")}
                  placeholder="Subject"
                  className=" form-control   px-2 py-2"
                />
              </div>
              <div className="mb-3 col-12 col-lg-10">
                <label
                  htmlFor=" exampleFormControlTextarea1"
                  className="form-label"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  className="form-control    "
                  rows="6"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  {...formik.getFieldProps("message")}
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

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Head from "next/head";

// const contact = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Field is Required"),

//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email Required"),
//     }),

//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <>
//       <Head>
//         <title>Contact -- BANIDB.com </title>
//       </Head>

//     </>
//   );
// };

// // import Head from "next/head";
// // import React from "react";
// // import { useFormik } from "formik";

// // function contact() {

// //   return (
// //     <>
// //
// //       <Head>
// //         <title>Contact -- BANIDB.com </title>
// //       </Head>
// //       <div className="container px-5 py-5 ">
// //         <div className="container px-5 ">
// //           <form onSubmit={formik.handleSubmit}>
// //             <div className="mb-3 ">
// //               <label htmlFor=" exampleFormControlInput1" className="form-label">
// //                 Your Name (required)
// //               </label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 onChange={formik.handleChange}
// //                 value={formik.values.email}
// //                 className=" form-control w-auto "
// //                 id="exampleFormControlInput1"
// //                 placeholder="Your Name"
// //               />
// //
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor=" exampleFormControlInput1" className="form-label">
// //                 Your Email (required)
// //               </label>
// //               <input
// //                 name="email"
// //                 type="email"
// //                 onChange={formik.handleChange}
// //                 value={formik.values.email}
// //                 className=" form-control w-auto"
// //                 id="exampleFormControlInput1"
// //                 placeholder="name@example.com"
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor=" exampleFormControlInput1" className="form-label">
// //                 Subject
// //               </label>
// //               <input
// //                 name="subject"
// //                 type="email"
// //                 className=" form-control w-auto"
// //                 id="exampleFormControlInput1"
// //                 placeholder="name@example.com"
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor=" exampleFormControlTextarea1" className="form-label">
// //                 Your Message
// //               </label>
// //               <textarea
// //                 name="message"
// //                 className="form-control w-50 h-50"
// //                 id="exampleFormControlTextarea1"
// //                 rows="6"
// //               ></textarea>
// //             </div>
// //             <button type="button" className="btn btn-primary text-light fw-bold">
// //               Submit
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// export default contact;
