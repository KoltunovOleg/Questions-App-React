import React, { Component } from 'react';

import Input from './Input';
import Radio from './Radio';
import Checkbox from './Checkbox';



class Question extends Component {
   constructor() {
    super(...arguments);
    this.state = {
      counter: 0,
      disabledPrev: true,
      disabledNext: false,
      answerArr: []
    };
  }

// getDataUser(email) {
//   let retrievedObject = localStorage.getItem(email);
//     let pars = JSON.parse(retrievedObject);
//     return pars;
// }

  getPrev(){
    if (this.state.counter >0){
      this.setState({
        counter: this.state.counter - 1,
        disabledNext: false
      })}
      else{
        this.setState({
        disabledPrev: true
      })
      }
    }
    gatNext(value){
      if (this.state.counter < this.props.questions.length-1){
      this.setState({
        counter: this.state.counter + 1,
        disabledPrev: false
      })}
      else{
        this.setState({
        disabledNext: true
      })
      }
    }
  
  getQuestion(counter, questions){
    
  let newArray = this.state.answerArr.slice();
  console.log(newArray);
  if(typeof questions[counter]['correct'] == "number"){
      return <Radio question={questions[counter]}
                    id = {counter}
                    user = {this.props.user}
                    addAnswer = {this.addAnswer.bind(this)}
                    valueAnswer = {newArray[counter]}
              />;
  } else if (typeof questions[counter]['correct'] == "string") {
    

      return <Input question={questions[counter]}
                    id = {counter}
                    user = {this.props.user}
                    addAnswer = {this.addAnswer.bind(this)}
                    valueAnswer = {newArray[counter]}
              />;
  } else if (typeof questions[counter]['correct'] == "object") {
      return <Checkbox  question={questions[counter]}
                        id = {counter}
                        user = {this.props.user}
                        addAnswer = {this.addAnswer.bind(this)}
                        valueAnswer = {newArray[counter]}
              />;
  } else{
      return null;
  }
};


    addAnswer(value, id){
      console.log(value, id);
      let newArray = this.state.answerArr.slice();
      newArray[id] = value;
      this.setState({
        answerArr: newArray
      });
    }

    render() {

      let questions = this.props.questions;
      let email = this.props.user;
      // console.log(this.getDataUser(email));
      let typeOfqestion = this.getQuestion(this.state.counter, questions);
      // console.log(typeOfqestion);
        return (
            <div>
                <button className="btn btn-default" type="button"
                disabled={this.state.disabledPrev} 
                onClick={this.getPrev.bind(this)}>Prev</button>
              <button className="btn btn-default" type="button"
                disabled={this.state.disabledNext} 
                onClick={this.gatNext.bind(this)}>Next</button>
              <section className="question">
                {typeOfqestion}

              </section>
            </div>
        );
    }
}
export default Question;