import React,{useState} from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import "./style.css"


const FeedbackForm = () =>{

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0c16qb3','template_weh55km', e.target, 'oVIkX6x9bPg6Ck_gI')
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully    Thank you :)'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Sorry, something went wrong :(',
              text: error.text,
            })
          });
        e.target.reset()
      };

      const [selectedOption, setOption] = useState('student');

        const handleOptionChange = e => {
            const target = e.target;
                if (target.checked) {
                    setOption(target.value);
            }
         };
 

  return (
    <div className='p-5 mt-2 grid place-items-center fixed z-10 -top-0.5 left-1/3 bottom-5'>
    <h1 className="w-96 text-3xl font-semibold mt-2  text-center bg-white shadow-2xl rounded text-blue-500 ">Feedback Form!!</h1>
    <div className="w-96">
  <Form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleOnSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="from_name">
        Name
      </label>
      <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="from_name" id="from_name" type="text" placeholder="Username"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="email" placeholder="Email Address"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="collegeName">
        Institute Name
      </label>
      <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="iname" id="iname" type="text" placeholder="Acharya Narendra Dev College"/>
    </div>
    <div className="mb-5">
      <label className='inline-flex items-center'>
        <Input type="radio" value="student" name="type" checked={selectedOption === 'student'} onChange={handleOptionChange} />
        <span className="ml-2">Student</span>
      </label>
      <label className='inline-flex items-center ml-6'>
        <Input type="radio" value="faculty" name="type" checked={selectedOption === 'faculty'} onChange={handleOptionChange} />
        <span className="ml-2">Faculty</span>
      </label>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="expno">
        Number of Experiments Performed
      </label>
      <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="expno" id="expno" type="text"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="msg">
        Feedback
      </label>
      <TextArea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-none" name="message" id="message" type="text"/>
    </div>
    <div className="flex items-center justify-between">
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </Button>
    </div>
  </Form>
</div>
</div>
  );
}

export default FeedbackForm;
