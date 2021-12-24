import React,{useState} from 'react'
import './Home.css';
import ErrorMessage from "../../Error Message/ErrorMessage";
import {Button, MenuItem, TextField} from "@material-ui/core";
import { useHistory } from 'react-router-dom';


export default function Home(name,setName) {   //passing the state by App.js
    const [difficulty,setDifficulty] = useState("");
    const [error , setError] = useState(false);

   
    const history = useHistory()     //useHistory use for Routing

    const handleSubmit = () =>{
        if(!difficulty || !name){      //if form is empty throwing error
            setError(true);
            return;
        }
        else{
            setError(false);
             history.push("/quiz")     //After clicking the Start button redirect to /quiz
              
        }
    }


    return (
        <div className='content'>
            <div className='settings'>
            <span className='quiz-heading'>Fill the Details</span>

            {/* Using Material ui for input fields */}

            <div className='setting_option'>
                {error && <ErrorMessage>Please Fill all the Fields</ErrorMessage>}
                <TextField 
                style = {{marginBottom:25}}
                label = "Enter Your Fist Name"
                variant = "outlined" 
                onChange = {(e)=>setName(e.target.value)}
                />
              
                <TextField 
                style = {{marginBottom:30}}
                label = "Enter Your Last Name"
                variant = "outlined"
                onChange = {(e)=>setDifficulty(e.target.value)}
                value={difficulty}
                >
                    <MenuItem key = "Easy" value = "easy">
                        Easy
                    </MenuItem>
                    <MenuItem key = "Medium" value = "Medium">
                        Easy
                    </MenuItem>
                    <MenuItem key = "Hard" value = "Hard">
                        Easy
                    </MenuItem>
                    </TextField>
                    <Button variant = "contained" color="primary" size = "large" onClick ={handleSubmit}>
                        <span className='start-btn'>Start Quiz</span>
                    </Button>

              

            </div>
            </div>
        </div>
    )
}
