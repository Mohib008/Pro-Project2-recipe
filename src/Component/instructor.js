import React, { Component } from "react";
import "./instructor.css";


class Instructor extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          instructors: [
            {
              Name: "Mohib",
              hobbies: ["Coding", "sport", "Problem solving"]
            }, {
              Name: "Shakib",
              hobbies: ["Shopping", "Tech", "Programming"]
            }, {
              Name: "Wais",
              hobbies: ["Learning", "Coding", "Gaming ", "Trading"]
            }
          ]
        };
        setTimeout(() => {
          const randInst = Math.floor(
            Math.random() *
            this.state.instructors.length
          );
          const hobbyIndex = Math.floor(
            Math.random() *
            this.state.instructors[randInst].length
          );
          const instructors = this.state.instructors.map((inst, i) => {
            if(i === randInst) {
              const hobbies = [ ...inst.hobbies];
              hobbies.splice(hobbyIndex, 1);
              return {
                ...inst, hobbies
              };
            }
            return inst;
          });
          this.setState({ instructors });
        }, 5000);
      }
    
    
    
      render() {
        const instructors = this.state.instructors.map((instructor, index) => (
          <li key={index}>
            <h3>{instructor.Name}</h3>
            <h4>hobbies: {instructor.hobbies.join(", ")}</h4>
          </li>
        ));
    
        return (
          <div className="instructor">
            <ul>
              {instructors}
            </ul>
          </div>
        )
      }
    }


export default Instructor;