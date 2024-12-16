import { useState } from "react";


export default function Form() {
    // let [fullName,setFullName]=useState("");
    // let [Username,setUsername]=useState("");
let [formData, setFormData]=useState({
    fullName:"",
    username:"",
    password:"",
});

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value)
    // };

    // let handleUsername = (event) => {
    //     setFullName(event.target.value)
    // };

    let handleInputChange=(event)=>{
        // let fildName= event.target.name;
        // let newValue= event.target.value;
        // console.log(newValue);

        setFormData((currData)=>{
            // currData[fildName]=newValue;
            return{...currData, [event.target.name]: event.target.value };
        });
    };

 let handleSubmit=(event)=>{
    event.preventdefault();
    console.log(formData);
    setFormData({
        fullName:"",
        username:"",
        password:"",
    });
 };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input 
            placeholder="enter full name.." 
            type="text" 
            value={formData.fullName}
             onChange={handleInputChange} 
             id="fullname" 
             name="fullName"
             />
            <br></br><br></br>
            
            <label htmlFor="username"> User Name</label>
            <input 
            placeholder="enter username.."
             type="text" 
             value={formData.username} 
             onChange={handleInputChange} 
             id="username" 
             name="username"
             />
            <br></br><br></br>

            <label htmlFor="password"> Password</label>
            <input 
            placeholder="enter passwoprd.."
             type="text" 
             value={formData.password} 
             onChange={handleInputChange} 
             id="password" 
             name="password"
             />
            <br></br><br></br>
            <button>Submit</button>
        </form>
    );
}