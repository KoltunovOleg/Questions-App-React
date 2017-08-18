import React, { Component } from 'react';

import Answer from './Answer'

function getDataUser(user) {

  /**
   * Get content for the user
   * Получить содержимое для юзера
   */
  let retrievedObject = localStorage.getItem(user);
  /**
   * Parse
   * Распарсить
   */
  let pars = JSON.parse(retrievedObject);

  return pars;
}


class Result extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      data: ''
    };
  }


    render() {
      
      var questions = this.props.data.questions

      let result = getDataUser(this.props.user);
      // console.log(result['answers']);
      let item = result['answers'].map((data, i)=>{
        let value;
        let status;
        /**
         * To compare answers with "correct"
         * Сравнить ответы пользователя с правильными ответами
         */
        if(questions[i]['correct'].toString() == data.toString()){
          status = 'answer correct';
        }else{
          status = 'answer incorrect';
        }
        /**
         * 
         */
        if(typeof data == 'object'){
          value = data.join(', ');
        }else{
          value = data.toString();
        }
        return <Answer 
                  key = {i}
                  number = {i+1}
                  value = {value}
                  status = {status}
                  />
      })
        return (
          <div className="col-md-12">
            <h4>Result for: {this.props.user}</h4>
            <ul className="holder-result">
            {item}
            </ul>
          </div>
        );
    }
}
export default Result;