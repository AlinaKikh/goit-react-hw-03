import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Too short")
      .max(50, "Too long"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Too short")
      .max(50, "Too long"),
  });

  const handleSubmit = (values, actions) => {
    onAddContact(values.name, values.number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </label>

        <label>
          Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
