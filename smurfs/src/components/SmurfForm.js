import React from 'react';
import { Form, Field, withFormik } from 'formik';

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
        
    }

})(SmurfForm);

export default FormikSmurfForm;