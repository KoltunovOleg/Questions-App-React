import React, { Component } from 'react';

class CheckboxItem extends Component {

   constructor() {
    super(...arguments);
    this.state = {
      checked: this.props.valueAnswer? true : false
    };
  }

  handleCheckboxChange(event) {
    this.setState({checked: !this.state.checked});
    // console.log(this.props.idButton, this.state.checked);
    if(this.state.checked){
      this.props.changeCheked(this.props.idButton, false);
    }else{
      this.props.changeCheked(this.props.idButton, true);
    }
  }


    render() {
      // console.log(this.props.valueAnswer);
      // console.log(this.state.checked);
        return (
            <div className="radio">
            {/* //   <p>Состояние: {this.state.checked ? 'отмечен' : 'не отмечен'}
            //   valueAnswer= {this.props.valueAnswer}
            //   </p> */}
              <label>
                <input id={this.props.idButton} name={this.props.name} value={this.props.value} type="checkbox" 
                checked={this.state.checked}
		            onChange={this.handleCheckboxChange.bind(this)}
                />
                      {this.props.value}
              </label>
            </div>
        );
    }
}
export default CheckboxItem;