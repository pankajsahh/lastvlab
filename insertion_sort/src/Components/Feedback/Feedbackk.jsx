// import Question from './Question';
import { Form, TextArea, Button } from 'semantic-ui-react';
import "./style.css";
import StarRating from './StarRating';
// import Swal from 'sweetalert2';
import * as emailjs from 'emailjs-com';
import { useFormik } from 'formik';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';



const Feedbackk = (props) => {

    // const handleSubmit = e => {
    //     console.log('hii')
    //     // e.preventDefault();
    //     console.log(e.values)
    //     emailjs.sendForm('service_0c16qb3', 'template_weh55km', e.values , 'oVIkX6x9bPg6Ck_gI')
    //         .then((result) => {
    //             alert("Form submitted")
    //         }, (error) => {
    //             alert("Something went wrong")
    //         });
    //     e.target.reset()
    // }
    const formik = useFormik({
        initialValues: {
            from_name: '',
            email: '',
            iname: '',
            problems: '',
            feedback: ''
        },
        onSubmit:(values,{resetForm}) =>{
            console.log('hii')
            console.log(values)
        // e.preventDefault();
            
            emailjs.send('service_0c16qb3', 'template_weh55km', values , 'oVIkX6x9bPg6Ck_gI')
                .then((result) => {
                    alert("Form submitted")
                    
                }, (error) => {
                    alert("Something went wrong")

                });
                resetForm({values: ''});
            // resetForm();

        },


        validate: values => {
            let errors = {};
            if (!values.from_name) {
                errors.from_name = "Required"
            }
            if (!values.email) {
                errors.email = "Required"
            }
            if (!values.iname) {
                errors.iname = "Required"
            }
            if (!values.problems) {
                errors.problems = "Required"
            }
            if (!values.feedback) {
                errors.feedback = "Required"
            }
            return errors;
        },
    })
    // console.log(formik.touched)
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
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required hover:border-gray-500"
                                                name={items.id}
                                                placeholder={items.placeholder}
                                                type={items.type}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                values={formik.values.name}
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
                                <select name="practicals" className="block appearance-none w-full bg-white border hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option value="none" selected disabled hidden>Select the name of Experiment</option>
                                    <option>Merge Sort</option>
                                    <option>Insertion Sort</option>
                                    <option>Bubble Sort</option>
                                </select>
                            </div>
                            <div>
                                {
                                    props.items3.map((items3) => {
                                        return (
                                            <div className="mb-6" >
                                                <label className="block text-gray-700 text-md font-bold mb-2">
                                                    {items3.label}
                                                </label>
                                                <TextArea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-none hover:border-gray-500" type={items3.type} name={items3.id} onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.name} />
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
                                            <label className="block text-gray-700 text-md font-bold mb-2">
                                                {items2.desc}
                                            </label>
                                            <StarRating />
                                        </div>
                                    );
                                }
                                )}
                            <div className="flex justify-end">
                                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Feedbackk;
