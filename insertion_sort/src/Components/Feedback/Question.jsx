import Feedbackk from './Feedbackk';
const Question = () => {
    const quest = [
            {
                label:"Name",
                id:"from_name", 
                type:"text",
                placeholder:"Username",
            },
            {
                label:"Email",
                id:"email", 
                type:"email",
                placeholder:"Email Address",
            },
            {
                label:"Institute Name",
                id:"iname", 
                type:"text",
                placeholder:"Acharya Narendra Dev College",
            },
        ]
    const quest2=[
            {
                desc:" 1. How well did the virtual labs simulated compared to the real lab environment?",
                id:"q1",
            },
            {
                desc:"2. How much did the simulation meet your expectations?",
                id:"q2",
            },
            {
                desc:"3. Was the practice section helpful?",
                id:"q3",
            },
            {
                desc:"4. Were you able to get a clear understanding of the procedure given?",
                id:"q4",
            },
            {
                desc:"5. How well was the content organized?",
                id:"q5",
            },
            {
                desc:"6. Did you find the quiz section helpful?",
                id:"q6",
            },
    ]
    const quest3=[
            {
                label:"Problems faced during the experiment",
                type:"text",
                id:"problems",
            },
            {
                label:"Your overall experience and Suggesstions",
                type:"text",
                id:"feedback",
            },
        ]
    
    return (
        <div>
            <Feedbackk items={quest} items2={quest2} items3={quest3}/>
        </div>
    );
}

export default Question;