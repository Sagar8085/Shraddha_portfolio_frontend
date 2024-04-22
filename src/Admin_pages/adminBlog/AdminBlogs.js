import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import "./contact.scss";
import { ToastOnSuccess } from "../../component/Sweet_Alert/Alert";

export default function AdminBlogs() {
  const signupValidationSchema = Yup.object({
    blogtitle: Yup.string().required("Title is Required"),

    blogdescription: Yup.string()
      .trim() // Trim leading and trailing whitespace
      .required("Description is Required")
      .test(
        "no-spaces",
        "User name cannot consist only of spaces",
        (value) => !/^\s+$/.test(value) // Check if the value doesn't consist only of spaces
      ),
    link: Yup.string()
      .trim() // Trim leading and trailing whitespace
      .required("link  is Required")
      .test(
        "no-spaces",
        "User subject cannot consist only of spaces",
        (value) => !/^\s+$/.test(value) // Check if the value doesn't consist only of spaces
      ),
  });

  const formikSignup = useFormik({
    initialValues: {
      blogtitle: "",
      blogdescription: "",
      link: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      console.log("values>>>", values);
      ToastOnSuccess("message send successfully");
    },
  });

  return (
    <div className="container-fluid p-5 bg-white">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white contact_us">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <button className={`nav-link active`}>Add Blogs</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <form onSubmit={formikSignup.handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="signupEmail"
                    placeholder="Enter Title"
                    name="blogtitle"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.blogtitle}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.blogtitle &&
                  formikSignup.errors.blogtitle ? (
                    <p style={{ color: "red" }}>
                      {formikSignup.errors.blogtitle}
                    </p>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="signupName" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="signupName"
                    placeholder="Enter Description"
                    name="blogdescription"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.blogdescription}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.blogdescription &&
                  formikSignup.errors.blogdescription ? (
                    <p style={{ color: "red" }}>
                      {formikSignup.errors.blogdescription}
                    </p>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="signupMessage" className="form-label">
                    Link
                  </label>
                  <input
                    className="form-control"
                    id="signupMessage"
                    placeholder="Link"
                    name="link"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.link}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.link && formikSignup.errors.link ? (
                    <p style={{ color: "red" }}>{formikSignup.errors.link}</p>
                  ) : null}
                </div>
                <div className="sendMessageButton">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
