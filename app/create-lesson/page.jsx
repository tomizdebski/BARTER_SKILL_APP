"use client";
import { useFormik } from "formik";
import { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { UserContext } from "@components/UserContext";

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
  name: Yup.string()
    .min(2, "Za krótki!")
    .max(50, "Za długi!")
    .required("Pole wymagane"),
  content: Yup.string()
    .min(2, "Za krótki!")
    .max(300, "Za długi!")
    .required("Pole wymagane"),

  photo: Yup.mixed()
    .required("Pole wymagane")
    .test("is-valid-type", "Niedozwolony typ pliku", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image")
    )
    .test(
      "is-valid-size",
      "Maksymalny rozmiar pliku to 100KB",
      (value) => value && value.size <= MAX_FILE_SIZE
    ),
  // video: Yup.mixed()
  //   .required("Pole wymagane")
  //   .test("is-valid-type", "Niedozwolony typ pliku", (value) =>
  //     isValidFileType(value && value.name.toLowerCase(), "image")
  //   )
  //   .test(
  //     "is-valid-size",
  //     "Maksymalny rozmiar pliku to 100KB",
  //     (value) => value && value.size <= MAX_FILE_SIZE
  //   ),
});

const CreateLesson = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log(userInfo);
  let imgRef = useRef();
  let imgRefV = useRef();
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const url = "http://localhost:4000/api/lesson";

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((response) => setCategories(response.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      content: "",
      categoryId: "",
      photo: "",
      video: "",
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
          ///
        }
        if (userInfo.id) {
          formData.append("instructorId", userInfo.id);
        } else {
          formData.append("instructorId", 1); // default if null
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
    <div className="my-8 mx-8 ">
      <form
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        className="form_layout"
      >
        <h1 className="head_text text-left pb-10 text-center">
          <span className="blue_gradient">Dodaj oferowaną lekcję</span>
        </h1>
        <p className="desc text-left max-w-md">
          Opisz dokładnie czego możesz nauczyć <br /> a także czego chciałbyś
          się nauczyć
        </p>

        <div>
          <label className="form_label"> Nazwa lekcji</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="form_input"
          />
          {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label className="form_label"> Opis</label>
          <textarea
            type="text"
            name="content"
            onChange={formik.handleChange}
            value={formik.values.content}
            className="form_input"
          />
          {formik.errors.content ? (
            <div style={{ color: "red" }}>{formik.errors.content}</div>
          ) : null}
        </div>

        <div className="select-container">
          <label className="form_label">Kategoria</label>

          <select
            className="form_input"
            name="categoryId"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
          >
            {categories.map((option) => (
              <option key={option.id} value={option.id} className="form_input">
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form_label"> Zdjęcie</label>
          <input
            type="file"
            name="photo"
            onChange={(e) => {
              formik.setFieldValue("photo", e.currentTarget.files[0]);
              const src = URL.createObjectURL(e.currentTarget.files[0]);
              imgRef.current.src = src;
            }}
            className="form_input "
          />
          {formik.errors.photo ? (
            <div style={{ color: "red" }}>{formik.errors.photo}</div>
          ) : null}
        </div>

        <div>
          <label className="form_label"> Wideo</label>
          <input
            type="file"
            name="video"
            onChange={(e) => {
              formik.setFieldValue("video", e.currentTarget.files[0]);
              const src = URL.createObjectURL(e.currentTarget.files[0]);
              imgRefV.current.src = src;
            }}
            className="form_input "
          />
          {formik.errors.video ? (
            <div style={{ color: "red" }}>{formik.errors.video}</div>
          ) : null}
        </div>
        <div className="flex justify-around">
          <img
            className=" rounded p-1"
            style={{ height: "200px", width: "200px" }}
            ref={imgRef}
          />

          <img
            className=" rounded p-1"
            style={{ height: "200px", width: "200px" }}
            ref={imgRefV}
          />

          {/* <ReactPlayer
            url={[
              "https://www.youtube.com/watch?v=oUFJJNQGwhk",
              "https://www.youtube.com/watch?v=jNgP6d9HraI",
            ]}
          /> */}

          {/* <ReactPlayer url={imgRefV} /> */}
        </div>

        <button type="submit" className="submit-btn">
          Zapisz
        </button>
      </form>
    </div>
  );
};

export default CreateLesson;
