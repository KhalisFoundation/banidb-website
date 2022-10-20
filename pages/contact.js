import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Head from "next/head";

const contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Field is Required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Head>
        <title>Contact -- BANIDB.com </title>{" "}
      </Head>{" "}
      <div className="container px-5 py-5 ">
        <div className="container px-5 ">
        <h1 className="fs-3 py-3">CONTACT US</h1>
          <form onSubmit={formik.handleSubmit}>
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
                placeholder="Your Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>{" "}
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
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Subject
              </label>
              <input name="subject" type="text" class=" form-control w-auto" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your Message
              </label>
              <textarea
                name="message"
                class="form-control w-50 h-50"
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

// import Head from "next/head";
// import React from "react";
// import { useFormik } from "formik";

// function contact() {

//   return (
//     <>
//       {" "}
//       <Head>
//         <title>Contact -- BANIDB.com </title>
//       </Head>
//       <div className="container px-5 py-5 ">
//         <div className="container px-5 ">
//           <form onSubmit={formik.handleSubmit}>
//             <div class="mb-3 ">
//               <label for="exampleFormControlInput1" class="form-label">
//                 Your Name (required)
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={formik.handleChange}
//                 value={formik.values.email}
//                 class=" form-control w-auto "
//                 id="exampleFormControlInput1"
//                 placeholder="Your Name"
//               />
//
//             </div>
//             <div class="mb-3">
//               <label for="exampleFormControlInput1" class="form-label">
//                 Your Email (required)
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 onChange={formik.handleChange}
//                 value={formik.values.email}
//                 class=" form-control w-auto"
//                 id="exampleFormControlInput1"
//                 placeholder="name@example.com"
//               />
//             </div>
//             <div class="mb-3">
//               <label for="exampleFormControlInput1" class="form-label">
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="email"
//                 class=" form-control w-auto"
//                 id="exampleFormControlInput1"
//                 placeholder="name@example.com"
//               />
//             </div>
//             <div class="mb-3">
//               <label for="exampleFormControlTextarea1" class="form-label">
//                 Your Message
//               </label>
//               <textarea
//                 name="message"
//                 class="form-control w-50 h-50"
//                 id="exampleFormControlTextarea1"
//                 rows="6"
//               ></textarea>
//             </div>
//             <button type="button" class="btn btn-primary text-light fw-bold">
//               Submit
//             </button>
//           </form>{" "}
//         </div>
//       </div>
//     </>
//   );
// }

export default contact;
