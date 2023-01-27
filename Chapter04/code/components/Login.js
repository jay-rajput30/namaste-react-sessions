import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const buttonSubmitHandler = (values) => {
    if (values.email === "test@gmail.com" && values.password === "test") {
      navigate("/", { state: { loggedIn: true } });
      // setIsLoggedIn(true);
    } else {
      alert("incorrect credentials");
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("email is required"),
        password: Yup.string().required("password is required"),
      })}
      onSubmit={buttonSubmitHandler}
    >
      <Form>
        <div className="form-field">
          <label htmlFor="email">email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-field">
          <label htmlFor="password">password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default Login;
