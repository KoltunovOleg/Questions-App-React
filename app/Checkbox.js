import React, { Component } from 'react';

import CheckboxItem from './CheckboxItem';

class Checkbox extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      answerArr: this.props.valueAnswer? this.props.valueAnswer: []
    };
  }

getDataUser(user, value) {
    //номер вопроса
    let id = this.props.id;
    //получить содержимое для юзера
    let retrievedObject = localStorage.getItem(user);
    //распарсить
    let pars = JSON.parse(retrievedObject);
    //записать значение
    pars.answers[id] = value;
    //сохранить в локалсторедж
    localStorage.setItem(user, JSON.stringify(pars));
}
  changeCheked(idButton, value){
    // console.log(idButton, value);
    let user = this.props.user;
    let newArray = this.state.answerArr.slice();
    let temp = newArray.indexOf(idButton);
    // console.log(newArray);
    // console.log(temp, value);
    if(value){
      if(temp == -1){
        newArray.push(idButton);
        // console.log(newArray);
      }
    } else{
      if(temp != -1)
      newArray.splice(temp, 1);
      // console.log(newArray);
    }
    newArray.sort(function(a, b){
      return a-b;
    });
    // console.log(newArray);
      this.setState({
        answerArr: newArray
      });
    // console.log(newArray);
    this.getDataUser(user, newArray);
    this.props.addAnswer(newArray, this.props.id);
  }
  

  render() {
    // console.log(this.props.valueAnswer);
    var item = this.props.question['variants'].map((data) => {
      let valueAnswer;
      if(this.props.valueAnswer){
            if(this.props.valueAnswer.indexOf(data.id) != -1){
              valueAnswer = data.id;
            }
          }
            return <CheckboxItem 
                        key = {data.id}
                        idButton = {data.id}
                        name = {this.props.question['text']}
                        value = {data['value']} 
                        changeCheked = {this.changeCheked.bind(this)}
                        valueAnswer={valueAnswer}
                        />
        });

    return (
      <div>
        <header>
          {this.props.question['text']}
        </header>
        <main>
          <form id={this.props.id}>
            <div className="row">
              <div className="col-md-4">
                <fieldset>
                  {item}
                </fieldset>
              </div>
            </div>
        </form>
        </main>
      </div>
                                  );
    }
}
export default Checkbox;



/**
 * { //checkbox list
                                    'text': 'what preprocessors do you know',
            'variants': [
                {
                                    'id': 1,
                    'value': 'SASS'
                },
                {
                                    'id': 2,
                    'value':'LESS'
                }
            ],
            'correct': [1,2]
        }
 */