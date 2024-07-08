import { Formik, Field, Form, ErrorMessage } from "formik";
import { validate } from "../helpers/validate";

const FormikLogin = () => {
    return (
        <Formik
            initialValues={{
                username:"", password:""
            }}
            validate={validate}
            onSubmit={(values) => {alert(`username: ${values.username} password: ${values.password}`)}}
        >
            <Form>
                <label>USERNAME</label>
                <Field type="text" name="username" placeholder="example@gmail.com" />
                <ErrorMessage name="username" />

                <label>PASSWORD</label>
                <Field type="password" name="password" placeholder="********" />
                <ErrorMessage name="password" />

                <button type="submit">SUBMIT</button>
            </Form>
        </Formik>
    )
}
export default FormikLogin;