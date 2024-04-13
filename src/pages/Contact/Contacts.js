import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./contact.scss";
import { ToastOnSuccess } from "../../component/Sweet_Alert/Alert";

export default function Contacts() {
  const signupValidationSchema = Yup.object({
    useremail: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    mobile: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(1000000000, "A phone number should be at least 10 digits")
      .required("phone number is required"),
    subject: Yup.string()
      .trim() // Trim leading and trailing whitespace
      .required("User subject is Required")
      .test(
        "no-spaces",
        "User subject cannot consist only of spaces",
        (value) => !/^\s+$/.test(value) // Check if the value doesn't consist only of spaces
      ),
    message: Yup.string()
      .trim() // Trim leading and trailing whitespace
      .required("Message is Required")
      .test(
        "no-spaces",
        "User name cannot consist only of spaces",
        (value) => !/^\s+$/.test(value) // Check if the value doesn't consist only of spaces
      ),
  });

  const formikSignup = useFormik({
    initialValues: {
      useremail: "",
      mobile: "",
      subject: "",
      message: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      console.log("values>>>",values);
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
                  <button className={`nav-link active`}>Contact Us</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <form onSubmit={formikSignup.handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="signupEmail"
                    placeholder="Enter email"
                    name="useremail"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.useremail}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.useremail && formikSignup.errors.useremail ? (
                    <p style={{ color: "red" }}>{formikSignup.errors.useremail}</p>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="signupName" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="signupName"
                    placeholder="Enter your Subject"
                    name="subject"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.subject}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.subject &&
                  formikSignup.errors.subject ? (
                    <p style={{ color: "red" }}>
                      {formikSignup.errors.subject}
                    </p>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="signupName" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="signupName"
                    placeholder="Enter your mobile number"
                    name="mobile"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.mobile}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.mobile && formikSignup.errors.mobile ? (
                    <p style={{ color: "red" }}>{formikSignup.errors.mobile}</p>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="signupMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="signupMessage"
                    placeholder="Message"
                    name="message"
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.message}
                    onChange={formikSignup.handleChange}
                  />
                  {formikSignup.touched.message &&
                  formikSignup.errors.message ? (
                    <p style={{ color: "red" }}>
                      {formikSignup.errors.message}
                    </p>
                  ) : null}
                </div>
                <div className="sendMessageButton">
                  <button type="submit" className="btn btn-primary btn-block">
                    Send Message
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
