"use client";
import { useFormik } from "formik";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as Yup from "yup";

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

const validateSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Za krótki!")
    .max(50, "Za długi!")
    .required("Pole wymagane"),
  lastName: Yup.string()
    .min(2, "Za krótki!")
    .max(50, "Za długi!")
    .required("Pole wymagane"),
  password: Yup.string()
    .min(2, "Za krótki!")
    .max(50, "Za długi!")
    .required("Pole wymagane"),
  email: Yup.string().email("To nie jest email").required("Pole wymagane"),
  avatar: Yup.mixed()
    .required("Pole wymagane")
    .test("is-valid-type", "Niedozwolony typ pliku", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image")
    )
    .test(
      "is-valid-size",
      "Maksymalny rozmiar pliku to 100KB",
      (value) => value && value.size <= MAX_FILE_SIZE
    ),
});

const Register = () => {
  let imgRef = useRef();
  const router = useRouter();

  const url = process.env.NEXT_PUBLIC_URL_API + "/api/register";
  //const url = "https://barter-api-f7pa.onrender.com/api/register";

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      avatar: "",
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
        const response = await axios.post(url, formData);
        console.log(response);
        if (response.status === 200) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="my-8 shadow-2xl ">
      
      <form
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        className="form_layout shadow-2xl rounded"
      >
        
        <h1 className="head_text text-leftpb-2 text-center">
          <span className="blue_gradient">Zarejestruj się w BARTER</span>
          <img
            className=" rounded-full"
            style={{ height: "100px", width: "100px" }}
            ref={imgRef}
            data-test="register-page-avatar"
          />
        </h1>

        <div>
          <label className="form_label"> Imię</label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="form_input"
          />
          {formik.errors.firstName ? (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div>
          <label className="form_label"> Nazwisko</label>
          <input
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="form_input"
          />
          {formik.errors.lastName ? (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label className="form_label"> Hasło</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="form_input"
          />
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label className="form_label"> Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form_input"
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label className="form_label"> Avatar</label>
          <input
            type="file"
            name="avatar"
            onChange={(e) => {
              formik.setFieldValue("avatar", e.currentTarget.files[0]);
              const src = URL.createObjectURL(e.currentTarget.files[0]);
              imgRef.current.src = src;
            }}
            className="form_input "
          />
          {formik.errors.avatar ? (
            <div style={{ color: "red" }}>{formik.errors.avatar}</div>
          ) : null}
        </div>

        <button type="submit" className="submit-btn">
          Zapisz
        </button>
      </form>
    </div>
  );
};

export default Register;
