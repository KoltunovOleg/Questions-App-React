import React, { Component } from 'react';

import Registration from './Registration';
import Home from './Home';
import Login from './Login';
import Task from './Task';
import Result from './Result';

class Route extends Component {
/**
 * Component for Routing
 * Компонент для маршрутизации
 */
    render() {
      var Render;
      if(this.props.route && this.props.access){
        switch (this.props.route) {
            case '/task':
                Render = <Task user = {this.props.user}
                              data = {this.props.data}/>;
                break;
            case '/result':
                Render = <Result user = {this.props.user}
                                data = {this.props.data}/>;
                break;
            default:
                Render = <Home />;
        }}else{
          switch (this.props.route) {
            case '/registration':
                Render = <Registration onchangeAccess={this.props.onchangeAccess}/>;
                break;
            case '/login':
                Render = <Login onchangeAccess={this.props.onchangeAccess}/>;
                break;
            default:
                Render = <Home />;
          }
        }
        
        return (
            <div className="col-md-12">
              {Render}
            </div>
        );
    }
}
export default Route;