import React, { Component } from 'react';

class ThirdQuestion extends Component {
  constructor(props) {
    super(props);

    this.change = () => this._change();
	this.addToList = (e) => this._addToList(e);
	this.dispenseOption = () => this._dispenseOption();
	this.sourceList = [];

	// Create the dispenser options
	this.options = ['Apples', 'Bananas', 'Mangoes', 'Oranges', 'Strawberries', 'Watermelons'];
	this.optionMap = {
		'Apples' : 'the-new-york-times',
		'Oranges' : 'the-huffington-post',
		'Mangoes' : 'fox-sports',
		'Bananas' : 'independent',
		'Strawberries' : 'hacker-news',
		'Watermelons' : 'polygon',
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
      backgroundColor: '#ff8c8c',
	  borderRadius: '20px',
	  border: '2px solid black',
	  textAlign: 'center',
      width: '60%',
	  margin: 'auto',
	  position: 'absolute',
	  top : '20%',
	  left : '0',
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
	  margin: '5px',
	  marginBottom: '30px',
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
          <h1 style={questionFont}>Finally choose your favourite fruits!</h1>
		  <h1 style={questionFontSmall}>Or none if you hate fruits</h1>
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
            style={{marginTop: '20px'}}>Finish</button>
        </div>
    )
  }

}

export default ThirdQuestion;
