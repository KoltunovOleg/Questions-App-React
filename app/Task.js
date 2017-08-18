import React, { Component } from 'react';

/**
 * Если получить данные из json-файла с добавлением в bundle.js
import datas from './task.json';
 */

import Question from './Question';


/*
*  Если указывать вопросы через переменную
let quest = [
  {
    'name': 'TEST js',
    'questions': [
        { //radio buttons
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
        },
        { //input
            'text': 'what is year now?',
            'correct': "2017"
        },
        { //checkbox list
            'text': 'what preprocessors do you know?',
            'variants': [
                {
                    'id': 1,
                    'value': 'SASS'
                },
                {
                    'id': 2,
                    'value':'LESS'
                },
                {
                    'id': 3,
                    'value':'SCSS'
                }
            ],
            'correct': [1,2]
        },
        { //input
            'text': 'what is year now?',
            'correct': "2017"
        }
    ]
}
];
*/

class Task extends Component { 

 
    render() {
        var questions = this.props.data.questions;
        console.log(questions);
        return (
            <div>
              <h2>Title: {this.props.data['name']}</h2>
              <Question questions={questions} 
                        user = {this.props.user}
              />
            </div>
        );
    }
}
export default Task;