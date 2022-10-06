import { Form, TextArea, Button } from 'semantic-ui-react';
import "./style.css";
import StarRating from './StarRating';
import * as emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Responses from './Responses';

const Feedbackk = (props) => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            from_name: '',
            email: '',
            iname: '',
            problems: '',
            feedback: '',
            practicals: '',
        },
        onSubmit: (value, { resetForm }) => {
            console.log(value);
           
            emailjs.send('service_0c16qb3', 'template_weh55km', value, 'oVIkX6x9bPg6Ck_gI')
                .then((result) => {
                    // alert("Form submitted")
                    navigate("/Thankyou");

                }, (error) => {
                    alert("Something went wrong")

                });
            resetForm();


        },

        validate: value => {
            let errors = {};
            if (!value.from_name) {
                errors.from_name = "Required"
            }
            if (!value.email) {
                errors.email = "Required"
            }
            if (!value.iname) {
                errors.iname = "Required"
            }
            if (!value.problems) {
                errors.problems = "Required"
            } else if (value.problems.length < 5){
                    errors.problems = 'Problems should be more than 5 characters.'
            }
            if (!value.feedback) {
                errors.feedback = "Required"
            } else if (value.feedback.length < 5){
                    errors.feedback = 'Feedback must contain more than 5 characters.'
            }
            if (!value.practicals) {
                errors.practicals = "Required"
            }
            return errors;
        },
    })

    return (
        <div className="bg-image bg-no-repeat bg-cover">
            <div className='p-5 m-2 opacity-90'>
                <h1 className="w-full text-3xl font-semibold mt-2  text-center bg-white shadow-2xl rounded text-blue-500 ">Feedback Form!!</h1>
                <Form className="bg-white shadow-2xl rounded px-8 pt-6 pb-6 mb-4" onSubmit={formik.handleSubmit}>
                    <div class="flex">
                        <div className="w-1/2">
                            {
                                props.items.map((items) => {
                                    return (
                                        <div className="mb-6" >
                                            <label className="block text-gray-700 text-md font-bold mb-2">
                                                {items.label}
                                            </label>
                                            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required hover:border-gray-500 ${formik.touched[items.id] && formik.errors[items.id] ? 'border-red-400' : 'border-none'}`}
                                                name={items.id}
                                                placeholder={items.placeholder}
                                                type={items.type}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />

                                            {formik.touched[items.id] && formik.errors[items.id] ? <div className='text-red-600'>{formik.errors[items.id]}</div> : null}
                                        </div>
                                    );
                                }
                                )}

                            <div className="mb-5">
                                <label className="block text-gray-700 text-md font-bold mb-2">
                                    Name of Experiment Performed
                                </label>
                                <select name="practicals" id='practicals' value={formik.values.practicals} onChange={formik.handleChange} className={`block appearance-none w-full bg-white border hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${formik.touched.practicals && formik.errors.practicals ? 'border-red-400' : 'border-none'}`}>
                                    <option value="none" selected hidden>Select the name of Experiment</option>
                                    <option value="Merge Sort">Merge Sort</option>
                                    <option value="Insertion Sort">Insertion Sort</option>
                                    <option value="Bubble Sort">Bubble Sort</option>
                                </select>
                                {formik.touched.practicals && formik.errors.practicals ? <div className='text-red-600'>{formik.errors.practicals}</div> : null}
                            </div>
                            <div>
                                {
                                    props.items3.map((items3) => {
                                        return (
                                            <div className="mb-6" >
                                                <label className="block text-gray-700 text-md font-bold mb-2">
                                                    {items3.label}
                                                </label>
                                                <TextArea className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required hover:border-gray-500 ${formik.touched[items3.id] && formik.errors[items3.id] ? 'border-red-400' : 'border-none'}`} type={items3.type} name={items3.id} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                                                {formik.touched[items3.id] && formik.errors[items3.id] ? <div className='text-red-600'>{formik.errors[items3.id]}</div> : null}
                                            </div>
                                        );
                                    }
                                    )}
                            </div>
                        </div>

                        <div className="w-2/2 ml-20 mt-6">
                            {
                                props.items2.map((items2) => {
                                    return (
                                        <div className="mb-4" >
                                            <label className="block text-gray-700 text-md font-bold mb-2" name={items2.desc}>
                                                {items2.desc}
                                            </label>
                                            <StarRating />
                                            {/* <Responses/> */}
                                        </div>
                                    );
                                }
                                )}
                            <div className="flex justify-end">
                                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Submit
                                </Button>
                                {/* <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">
                                    Reset
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Feedbackk;
