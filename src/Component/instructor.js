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
        setTimeout(() => {
            const randInst = Math.floor(
                Math.random() *
                this.state.instructor.length
            );
            const hobbyIndex = Math.floor(
                Math.random() *
                this.state.instructor[randInst].length
            );
            const instructor = this.state.instructor.slice();
            instructor[randInst] = Object.assign({}, [randInst]);
            instructor[randInst].habbies = instructor[randInst].habbies.slice();
            instructor[randInst].habbies.slice(hobbyIndex, 1);
            this.setState({instructor});
        }, 5000);
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