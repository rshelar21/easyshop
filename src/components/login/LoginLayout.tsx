import { useFormik } from "formik";
import * as yup from "yup";
import { ILoginFormValues } from "../../interfaces/forms";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../feature/userSlice";
import { toastSuccess, toastError } from "../common/Toastify";
import { useMutation } from "@tanstack/react-query";
import InputWrapper from "../common/InputWrapper";
import { loginUser } from "../../hooks/query/auth";

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "passwrod is too short")
    .required("Password is required"),
});

const LoginLayout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data: any) => {
      toastSuccess("User logined successfully");
      navigate("/");
      dispatch(
        createUser({
          name: data?.name,
          email: data?.email,
          id: data?.id,
        })
      );
    },
    onError: (error: any) => {
      toastError(error.message);
    },
  });

  const handleFormSubmit = async (values: ILoginFormValues) => {
    try {
      const res = mutation.mutate(values);
    } catch (error) {
      console.log(error);
    }
  };

  const formikInstance = useFormik<ILoginFormValues>({
    initialValues: {
      email: "",
      password: "",
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
            <h3 className="text-black text-lg">Login Account</h3>
            <form onSubmit={handleSubmit}>
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
                Login
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="underline text-amazon_blue-blue">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
