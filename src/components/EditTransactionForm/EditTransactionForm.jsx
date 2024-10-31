import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditTransactionForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    type: Yup.string.oneOf(['income', 'expense']).required('Type is required!'),
    sum: Yup.number.required('Sum is required!'),
    date: Yup.date.required('Date is required!'),
    comment: Yup.string()
      .max(200, 'Comment must be 200 characters or less')
      .nullable(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <label>Type</label>
          <Field as="select" name="type">
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Field>
          <ErrorMessage name="type" component="div" />

          <label>Sum</label>
          <Field type="number" name="sum" />
          <ErrorMessage name="sum" component="div" />

          <label>Date</label>
          <DatePicker
            selected={
              (initialValues.date && new Date(initialValues.date)) || null
            }
            onChange={date => setFieldValue('date', date)}
          />
          <ErrorMessage name="date" component="div" />

          <label>Comment</label>
          <Field type="text" name="comment" />
          <ErrorMessage name="comment" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

EditTransactionForm.propTypes = {
  initialValues: PropTypes.shape({
    type: PropTypes.oneOf(['income', 'expense']).isRequired,
    sum: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    comment: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditTransactionForm;
