import { useState } from "react";

function Form2() {
    const [formData, setFormData] = useState({
        name: "",
        rollno: "",
        gender: "",
        city: "",
        phone: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function formSubmit(event) {
        event.preventDefault();
        console.log('Form submitted successfully');
        console.log(formData);
    }

    return (
        <>
            <form onSubmit={formSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange} 
                />
                <br />

                <label>Rollno:</label>
                <input 
                    type="text" 
                    name="rollno" 
                    value={formData.rollno}
                    onChange={handleChange} 
                />
                <br />

                <label>Gender:</label>
                <select 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <br />

                <label>City:</label>
                <input 
                    type="text" 
                    name="city" 
                    value={formData.city}
                    onChange={handleChange} 
                />
                <br />

                <label>Phone:</label>
                <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange} 
                />
                <br />

                <button type="submit">Signup</button>
            </form>

            <h1>The name is: {formData.name}</h1>
            <h1>The rollno is: {formData.rollno}</h1>
            <h1>The gender is: {formData.gender}</h1>
            <h1>The city is: {formData.city}</h1>
            <h1>The phone is: {formData.phone}</h1>
        </>
    );
}

export default Form2;
