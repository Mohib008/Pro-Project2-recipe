import React, { Component } from "react";
import "./instructor.css";


class Instructor extends Component{
    constructor(props){
        super(props);
        this.state = {
            Instructor: [
                {
                    Name: "Mohib",
                    hobbies: ["Coding", "sport", "Problem solving"]
                },{
                    Name: "Shakib",
                    hobbies: ["Shopping", "Tech", "Programming"]
                },{
                    Name: "Wais", 
                    hobbies: ["Learning", "Coding", "Gaming ", "Trading" ]
                }
            ]
        };
    }

    this.setState = {
        Instructor: [
            {
                Name: "john", 
                hobbies: ["this", "that", "thier"]
            }, {
                Name: "Ajmal", 
                hobbies: ["this", "that", "4242"]
            }, {
                Name: "Shakib",
                hobbies: ["asjkfasjf", "325", "235"]
            }
        ]
    }

    render(){
        const instructor = this.state.instructor.map((instructor, index) => (
            <li key={index}>
                <h3>{instructor.Name}</h3>
                <h4>hobbies: {instructor.hobbies.join(", ")}</h4>
            </li>
        ));
        
        return(
            <div className="instructor">
               <ul>
                {instructor}
               </ul>
            </div>
        )
    }
}


export default Instructor;