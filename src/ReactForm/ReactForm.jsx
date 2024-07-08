import { useState } from "react";
import { validate } from "../helpers/validate";

const ReactForm = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    })
    console.log(userData);

    const [errors, setErrors] = useState({
        username: "Username is required",
        password: "Password is required"
    }) 

    const handleInputChange = (event) => {
        console.log(event)
        const {name, value} = event.target;
        //if(name === "username"){
        //    setUserData({
        //        ...userData,
        //        username: value
        //    })
        //}
        //if(name === "password"){
        //    setUserData({
        //        ...userData,
        //        password: value
        //    })
        //}
        setUserData({
            ...userData,
            [name]: value
        })
        const errors = validate(userData);
        setErrors(errors);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${userData.username} Password: ${userData.password}`);
    }
    
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <h2>LOGIN</h2>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text"
                        value={userData.username}
                        name="username"
                        placeholder="example@gmail.com"
                        onChange={handleInputChange}

                    />
                    {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="text"
                        value={userData.password}
                        name="password"
                        placeholder="password"
                        onChange={handleInputChange}
                    />
                    {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
export default ReactForm;