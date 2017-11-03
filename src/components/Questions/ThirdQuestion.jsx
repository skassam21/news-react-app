import React, { Component } from 'react';

class ThirdQuestion extends Component {
  constructor(props) {
    super(props);

    this.change = () => this._change();
	this.addToList = (e) => this._addToList(e);
	this.dispenseOption = () => this._dispenseOption();
	this.sourceList = [];

	// Create the dispenser options
	this.options = ['Circle', 'Triangle', 'Square', 'Pentagon', 'Hexagon', 'Octagon'];
	this.optionMap = {
		Circle : 'ign',
		Triangle : 'the-huffington-post',
		Square : 'fox-sports',
		Pentagon : 'independent',
		Hexagon : 'techradar',
		Octagon : 'hacker-news',
	};
  }


  /*
  Call this function to change pages and submit list
  */
  _change() {
	   this.props.addSources(this.sourceList);
     this.props.changePage('feed');
  }


  /*
  Add corresponding source to source list.
  */
  _addToList(e){
	 var item = e.target.value;
	 var obj = this.optionMap[item];
	  if(this.sourceList.indexOf(obj) < 0){
		this.sourceList.push(obj);
	  }
	  else{
		var indexOfElement = this.sourceList.indexOf(obj)
		this.sourceList.splice(indexOfElement, 1);
	  }
	//console.log(this.sourceList);
  }


  /*
  Dispense a random option from a prefixed list.
  */
  _dispenseOption(){
	var item = this.options[Math.floor(Math.random()* this.options.length)];
	this.options.splice(this.options.indexOf(item), 1);
	return item;
  }


  render() {

    let jumbotronStyle = {
      backgroundColor: 'white',
      borderRadius: '10px',
      width: '75%',
	  margin: 'auto',
	  position: 'absolute',
	  top : '0',
	  left : '0',
      bottom : '0',
      right : '0',
    }

    let questionFont = {
      fontFamily: 'TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif',
      fontSize: '36px',
      userSelect: 'none',
	  margin: 0,
    }

	let questionFontSmall = {
      fontFamily: 'TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif',
      fontSize: '18px',
      userSelect: 'none',
	  fontStyle: 'italics',
	  margin: 5,
    }

    let optionFont = {
      fontFamily: 'TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif',
      fontSize: '18px',
      marginLeft: '20px',
      userSelect: 'none',
    }

	var option1 = this.dispenseOption();
	var option2 = this.dispenseOption();
	var option3 = this.dispenseOption();
	var option4 = this.dispenseOption();

	// Using sample question for now. CHANGE LATER!
    return (
        <div className="jumbotron" style={jumbotronStyle}>
          <h1 style={questionFont}>Finally choose the stylish shapes!</h1>
		  <h1 style={questionFontSmall}>You can pick more than one</h1>
		  <br/>
          <div className="row">
            <div className="col-md-6">
              <label>
                <input value={option1} onClick={this.addToList} type="checkbox"/><span style={optionFont}>{option1}</span>
              </label><br/>
              <label>
                <input value={option2} onClick={this.addToList} type="checkbox"/><span style={optionFont}>{option2}</span>
              </label><br/>
            </div>
            <div className="col-md-6">
              <label>
                <input value={option3} onClick={this.addToList} type="checkbox"/><span style={optionFont}>{option3}</span>
              </label><br/>
              <label>
                <input value={option4} onClick={this.addToList} type="checkbox"/><span style={optionFont}>{option4}</span>
              </label><br/>
            </div>
          </div>
          <button className="btn btn-primary" onClick={this.change}
            style={{marginTop: '20px'}}>Next</button>
        </div>
    )
  }

}

export default ThirdQuestion;
