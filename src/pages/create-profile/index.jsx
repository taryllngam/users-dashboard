import React from "react";
import { useFormik } from "formik";
import "../create-profile/styles.css";
import img1 from "../../create.png";
import { useNavigate } from "react-router";
import { useLocalStorage } from "../../context/ProfileContext";

export default function SignupForm() {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const { value } = useLocalStorage("values", []);

  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convert2base64(file);
    console.log(base64);

    value(() => ({ image: base64 }));
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      image: "",
    },

    onSubmit: (values) => {
      localStorage.setItem("values", JSON.stringify(values));
      navigate(`/profile`);
    },
  });

  return (
    <div className="display">
      <div>
        <img src={img1} alt="" />
      </div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1>CREATE ACCOUNT</h1>
        <div className="display1">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div className="display1">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div className="display1">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className="display3">
          <label>Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => uploadImage(e)}
            className="img"
          />
        </div>

        <button className="btn" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}
