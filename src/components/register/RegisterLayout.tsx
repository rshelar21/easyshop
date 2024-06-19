import { useFormik } from "formik";
import * as yup from "yup";
import { IRegisterFormValues } from "../../interfaces/forms";
import InputWrapper from "../common/InputWrapper";
import { useNavigate, Link } from "react-router-dom";
import { toastSuccess, toastError } from "../common/Toastify";
import { registerUser } from "../../hooks/query/auth";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { createUser } from "../../feature/userSlice";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "passwrod is too short")
    .required("Password is required"),
  phone: yup
    .string()
    .min(10, "please enter correct number")
    .max(10, "please enter correct number")
    .required("Phone is required"),
});

const RegisterLayout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data: any) => {
      dispatch(
        createUser({
          name: data?.name,
          email: data?.email,
          id: data?.id,
        })
      );
      toastSuccess("User created successfully");
      navigate("/");
    },
    onError: (error: any) => {
      toastError(error.message);
    },
  });

  const handleFormSubmit = async (values: IRegisterFormValues) => {
    try {
      const res = mutation.mutate(values);
    } catch (error) {
      console.log(error);
    }
  };

  const formikInstance = useFormik<IRegisterFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema,
    onSubmit: async (values, FormikHelpers) => {
      // FormikHelpers.validateForm(true);
      await handleFormSubmit(values);
    },
  });

  const {
    values,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = formikInstance;

  return (
    <>
      <div className="w-full bg-white h-screen">
        <div className="mx-auto">
          <div className="w-44 h-28 mx-auto">
            <img
              src="/assets/logo-dark.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          <div className="w-[400px] mx-auto border p-6">
            <h3 className="text-black text-lg">Create Account</h3>
            <form onSubmit={handleSubmit}>
              <InputWrapper
                label="Your Name"
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.name}
                touched={touched?.name}
              />
              <InputWrapper
                label="Your Email"
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.email}
                touched={touched?.email}
              />
              <InputWrapper
                label="Mobile Number"
                type="number"
                name="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.phone}
                touched={touched?.phone}
              />
              <InputWrapper
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.password}
                touched={touched.password}
              />

              <button type="submit" className="button w-full mt-3">
                Create your account
              </button>
            </form>

            <p>
              Already have account?{" "}
              <Link to="/login" className="underline text-amazon_blue-blue">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterLayout;
