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
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </label>

        <label className={styles.label}>
          Number
          <Field className={styles.input} type="text" name="number" />
          <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
        </label>

        <button className={styles.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
