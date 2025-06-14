import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const SubmitForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("فیلد نام اجباری هست"),
    email: yup.string().email().required(),
    age: yup.number().positive().min(18).max(100).required(),
    // password: yup
    //   .string()
    //   .min(4)
    //   .max(15)
    //   .matches(/[a-z]+/)
    //   .matches(/[A-Z]+/)
    //   .matches(/\d+/),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"),"پسورد درست نیست"])
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log("the form is submited");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="App">
      <input type="text" placeholder="Name..." {...register("name")} />
      {errors.name && <p>{errors.name?.message}</p>}

      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="text"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
export default SubmitForm;
