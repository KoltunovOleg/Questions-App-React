import React, { Component } from 'react';




class Input extends Component {
 constructor() {
    super(...arguments);
    this.state = {
      value: ''
    };
  }

  getDataUser(user, value) {
    //номер вопроса
    let id = this.props.id;
    // console.log(id);
    // console.log(user);
    //получить содержимое для юзера
    let retrievedObject = localStorage.getItem(user);
    // console.log(retrievedObject);
    //распарсить
    let pars = JSON.parse(retrievedObject);
    // console.log(pars);
    //записать значение
    pars.answers[id] = value;
    //сохранить в локалсторедж
    localStorage.setItem(user, JSON.stringify(pars));
}

// CheckOfValue(){
//   let id = this.props.id;
//     //получить содержимое для юзера
//     let retrievedObject = localStorage.getItem(this.props.user);
//     //распарсить
//     let pars = JSON.parse(retrievedObject);
//     //записать значение
//     if(pars.answer[id]){
//       this.setState({value: pars.answer[id]});
//     };
// }

  handleChange(event) {
    this.setState({value: event.target.value});
    let user = this.props.user;
    this.getDataUser(user, event.target.value);
    //записать введенное значение в this.state.answerArr Question.js
    this.props.addAnswer(event.target.value, this.props.id);
    // localStorage.setItem(user, JSON.stringify(arrDataUser));
  }
    render() {
        // console.log(`this.props.answerArr: ${this.state.value}`);
        // this.CheckOfValue();
        // console.log(this.props.valueAnswer);
        // console.log(this.props.id);
        return (
            <div>
              <header>{this.props.question['text']}</header>
              <main>
                <form className="form-horizontal" id={this.props.id}>
                <fieldset>
                  <div className="form-group">
                  <div className="col-xs-9">
                    <div className="radio">
                    <input type="text"
                      placeholder=""
                      defaultValue={this.props.valueAnswer}
                      onChange={this.handleChange.bind(this)} />
                    </div>
                  </div>
                  </div>
                </fieldset>
                </form>
              </main>
            </div>
        );
    }
}
export default Input;