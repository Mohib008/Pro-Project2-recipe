import React, { Component } from "react";
import "./avocado.css";


class AvocadoToast extends Component{
  static defaultProps = {
    ingredients: []
  }
    render(){
        const { title, img, instructions } = this.props;
        const { ingredients } = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));

        return(
            <div className="recipe-card">
              <div className="recipe-card-img">
                <img src={img} alt={title} />
              </div>
              <h3 className="recipe-title">AvocadoToast {title}</h3>
              <h4>ingredients: </h4>
              <ul>
                {ingredients}
              </ul>
              <h4>instructions:</h4>
              <p>{instructions}</p> 
            </div>
        );
    }
}

export default AvocadoToast;