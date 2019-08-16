import React from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';

const SmurfForm = () => {
    return (
        <div className="form-container">
            <Form>
                <Field type="text" name="name"/>
                <Field type="text" name="age"/>
                <Field type="text" name="height" />
                <button type="submit">Add Smurf</button>
            </Form>
        </div>
    )
};

const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return {
            name: name || '',
            age: age || '',
            height: height || '',
        };
    },
    handleSubmit(values) {
        console.log(values);
        axios.post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => console.log(error.response));
    }

})(SmurfForm);
export default FormikSmurfForm;


