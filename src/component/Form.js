import React from 'react';
import { register, errors, handleSubmit } from 'react-hook-form';
import { useForm } from "react-hook-form";
import './css/Form.css';

function Form() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1>Example Form </h1>
            <hr />
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input name="firstName" className="form-control" ref={register({ required: true, maxLength: 5 })} />
                        {errors.firstName && <div style={{ color: 'red' }} >This field is required with maxlength : 5</div>}
                        <br />
                        <input name="lastName" className="form-control" ref={register({ required: true })} />
                        {errors.lastName && <div style={{ color: 'red' }} >This field is required</div>}
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        </div>
    )
}

export default Form
