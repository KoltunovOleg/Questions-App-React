import React, { Component } from 'react';

import RadioItem from './RadioItem';


let valueId;
class Radio extends Component {


  getDataUser(user, value) {
    //номер вопроса
    let id = this.props.id;
    //получить содержимое для юзера
    let retrievedObject = localStorage.getItem(user);
    //распарсить
    let pars = JSON.parse(retrievedObject);
    //записать значение
    console.log(`pars: ${pars}`);
    console.log(`pars.answers[id]: ${pars.answers[id]}`);
    pars.answers[id] = value;
    
    //сохранить в локалсторедж
    localStorage.setItem(user, JSON.stringify(pars));
  }

  onChangeRadioBtn(id){
    let user = this.props.user;

    this.getDataUser(user, id);
    this.props.addAnswer(id, this.props.id);
    valueId = id;
  }



    render() {

      // console.log(`valueAnswer: ${this.props.valueAnswer}`);
      // console.log(`valueId: ${valueId}`);
      var item = this.props.question['variants'].map((data) => {
            return <RadioItem key = {data.id}
                        idButton = {data.id}
                        name = {this.props.question['text']}
                        value={data['value']}
                        onChangeRadioBtn = {this.onChangeRadioBtn.bind(this)}
                        valueAnswer={valueId}/>
        });

        return (
            <div>
              <header>{this.props.question['text']}</header>
              <main>
                <form className="form-horizontal" id={this.props.id}>
                <fieldset>
                  <div className="form-group">
                  <div className="col-xs-9">
                    {item}
                  </div>
                  </div>
                </fieldset>
                </form>
              </main>
            </div>
        );
    }
}
export default Radio;

/**
 * //radio buttons
            'text': 'what is js?',
            'variants': [
                {
                    'id': 1,
                    'value': 'Program language'
                },
                {
                    'id': 2,
                    'value':'Human language'
                }
            ],
            'correct': 1
 */