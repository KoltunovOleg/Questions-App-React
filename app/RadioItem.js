import React, { Component } from 'react';

class RadioItem extends Component {

handleOptionChange(event){
  this.props.onChangeRadioBtn(event.target.id);
}

    render() {
      console.log(``);
      // console.log(`${this.props.idButton}:this.props.valueAnswer:${typeof this.props.valueAnswer}`);
      // console.log(`${this.props.idButton}:this.props.valueAnswer:${this.props.valueAnswer}`);
      // console.log(`${this.props.idButton}:this.state.option:${typeof this.state.option}`);
      // console.log(`${this.props.idButton}:this.state.option:${this.state.option}`);
      // console.log(`${this.props.idButton}:${this.state.option == this.props.valueAnswer}`);
      // console.log(``);
      // console.log(`this.props.idButton: ${this.props.idButton}`);
        return (
            <div className="radio">
              <label>
                <input id={this.props.idButton} name={this.props.name} value={this.props.value} type="radio"
                  checked={this.props.valueAnswer == this.props.idButton}
		              onChange={this.handleOptionChange.bind(this)}
                 />
                      {this.props.value}
              </label>
            </div>
        );
    }
}
export default RadioItem;