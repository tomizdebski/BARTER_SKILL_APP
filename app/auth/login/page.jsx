'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";



const Login = () => {

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().min(4, 'Za krótki!').max(50, 'Za długi!').required("Login jest wymagany"),
    password: Yup.string().min(8, 'Za krótki!').max(50, 'Za długi!').required("Hasło jest wymwagane"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState

  function onSubmit(e) {
    //Backend API Call operation is handled here.
  }

  return (
    <div className="my-8 mx-8">
    <form onSubmit={handleSubmit(onSubmit)} id="reset">
      <div className="py-1">
        <h1 className="text-center text-gray-600 font-bold text-2xl p-20">Zaloguj się na swoje konto BARTER</h1>
        <label className="text-gray-600 font-medium" htmlFor="first_name">Login :</label>
        <div className="py-2">
          <input
            {...register("user_name")}
            name="user_name"
            type="text"
            className="text-md px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
            id="user_name"
          />
          <div className="text-red-500 ml-2 mt-2">{errors.user_name?.message}</div>
        </div>
      </div>
     
      <div className="py-1">
        <label className="text-gray-600 font-medium" htmlFor="password">
          Hasło :
        </label>
        <div className="py-2">
          <input
            {...register("password")}
            name="password"
            type="password"
            id="password"
            className="text-md px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
          />
          <div className="text-red-500 ml-2 mt-2">
            {errors.password?.message}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="border focus:border-1  focus:outline-none focus:border-green-600 px-5 py-1.5 rounded bg-green-500 text-white font-bold hover:bg-green-600"
      >
        Zaloguj
      </button>
    </form>
  </div>
  )
}

export default Login
