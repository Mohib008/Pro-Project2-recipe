import React, { Component } from "react";


class AvocadoToast extends Component{
    render(){
        const { title } = this.props;
        const { ingredients } = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));

        return(
            <div>
              <div>AvocadoToast {title}</div>
              <ul>
                { ingredients }
              </ul>
            </div>
        )
    }
}

export default AvocadoToast;