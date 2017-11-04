import React, { Component } from 'react';

class FirstQuestion extends Component {
  constructor(props) {
    super(props);

    this.change = () => this._change();
	this.addToList = (e) => this._addToList(e);
	this.dispenseOption = () => this._dispenseOption();
	this.sourceList = [];
	
	// Create the dispenser options
	this.options = ['Artificial Intelligence', 'Penguins', 'Flying Cars', 'Cat Videos', 'First World Economy', 'Political Scandals'];
	this.optionMap = {
		'Political Scandals' : 'usa-today',
		'Artificial Intelligence' : 'google-news',
		'Penguins' : 'national-geographic',
		'Flying Cars' : 'techradar',
		'Cat Videos' : 'buzzfeed',
		'First World Economy' : 'business-insider',
	};
	this.option1 = this.dispenseOption();
	this.option2 = this.dispenseOption();
	this.option3 = this.dispenseOption();
	this.option4 = this.dispenseOption();
  }
	
	
  /*
  Call this function to change pages and submit list
  */
  _change() {
	this.props.addSources(this.sourceList);
    this.props.changePage('secondQuestion');
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
      backgroundColor: '#aee58b',
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
	
	
	
	// Using sample question for now. CHANGE LATER!
    return (
        <div className="jumbotron" style={jumbotronStyle}>
          <h1 style={questionFont}>First tell us a little about yourself</h1>
		  <h1 style={questionFontSmall}>What are some things here that interests you?</h1>
		  <br/>
          <div className="row">
            <div className="col-md-6">
              <label>
                <input value={this.option1} onClick={this.addToList} type="checkbox"/><span style={optionFont}>{this.option1}</span>
              </label><br/>
              <label>
                <input value={this.option2} onClick={this.addToList} type="checkbox"/><span style={optionFont}>{this.option2}</span>
              </label><br/>
            </div>
            <div className="col-md-6">
              <label>
                <input value={this.option3} onClick={this.addToList} type="checkbox"/><span style={optionFont}>{this.option3}</span>
              </label><br/>
              <label>
                <input value={this.option4} onClick={this.addToList} type="checkbox"/><span style={optionFont}>{this.option4}</span>
              </label><br/>
            </div>
          </div>
		  <div style={{marginTop: '30px'}}>
          <button className="btn btn-primary" onClick={this.change}
            style={{margin: '5px'}}>Next</button>
		  </div>
        </div>
    )
  }
  
}

export default FirstQuestion;
