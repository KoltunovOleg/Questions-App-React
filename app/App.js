
import React, { Component } from 'react';
import { render } from 'react-dom';


import Route from './Route';


class App extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      route: window.location.hash.substr(1),
      access: false, // false - No access, true - Access is received
      data: [],      // To write data from task.json - Для записи данных, полученных из task.json
      user: ''       // Logged in user
    };
  }

  componentDidMount() {
    //Get the current URL
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
    // Получить данные из task.json, расположенные на сервере
    // Get data from task.json located on the server
    $.ajax({
      url: "https://koltunovoleg.github.io/json_task_questions/task.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("https://koltunovoleg.github.io/json_task_questions/task.json", status, err.toString());
      }.bind(this)
    });
  }

  changeAccess(value, email) {
    this.setState({
      access: value, // Access Status - Состояние доступа
      user: email    // Logged in user - Вошедщий пользователь
    });
  }



  render() {
    return (
      <div className="container-fluid">
        <header>App</header>
        <menu>
          <ul>
            {/* Go to Home * Переход на главную */}
            <li><a className="btn btn-default" href="#/">Home</a></li>
            <li style={{ display: this.state.access ? 'none' : 'inline-block' }}>
              <a className="btn btn-default" href="#/registration">Registration</a>
            </li>
            {/* Go to Login * Залогиниться */}
            <li style={{ display: this.state.access ? 'none' : 'inline-block' }}>
              <a className="btn btn-default" href="#/login">Login</a>
            </li>
            {/* Go to Task * Переход к вопросам*/}
            <li style={{ display: this.state.access ? 'inline-block' : 'none' }}>
              <a className="btn btn-default" href="#/task">Task</a>
            </li>
            <li style={{ display: this.state.access ? 'inline-block' : 'none' }}>
              <a className="btn btn-default" href="#/result">Result</a>
            </li>
            {/* Exit * Выйти */}
            <li style={{ display: this.state.access ? 'inline-block' : 'none' }}>
              <button className="btn btn-default" type="button" 
              onClick={this.changeAccess.bind(this, false)}>Exit</button>
            </li>
          </ul>
        </menu>
        <Route route={this.state.route}
          access = {this.state.access}
          user = {this.state.user}
          onchangeAccess={this.changeAccess.bind(this)}
          data = {this.state.data}
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));