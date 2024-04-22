import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastOnSuccess } from "../../component/Sweet_Alert/Alert";

export default function AdminProjects() {
  const signupValidationSchema = Yup.object({
    title: Yup.string().required("Title is Required"),

    description: Yup.string()
      .trim() // Trim leading and trailing whitespace
      .required("Description is Required")
      .test(
        "no-spaces",
        "User name cannot consist only of spaces",
        (value) => !/^\s+$/.test(value) // Check if the value doesn't consist only of spaces
      ),
  });

  const formikSignup = useFormik({
    initialValues: {
      title: "",
      description: "",
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
                  <button className={`nav-link active`}>Add Project</button>
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
                    name="title"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.title}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.title && formikSignup.errors.title ? (
                    <p style={{ color: "red" }}>{formikSignup.errors.title}</p>
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
                    name="description"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.description}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.description &&
                  formikSignup.errors.description ? (
                    <p style={{ color: "red" }}>
                      {formikSignup.errors.description}
                    </p>
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
