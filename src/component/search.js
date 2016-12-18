import React, { Component } from 'react';

/* functional component
const Search = () =>
{
	return <input />
}
*/

/* class based component */
class Search extends Component {
	
	//constructor method is the first method ie called when the class component is instantiated.
	constructor(props)
	{
		super(props);
		
		//this type of setting the state usage is possible only within the constructor function.
		this.state = { term : props.searchVideo}
	}
	/* event handler can be a seperate function
	render(){
		return <input onChange = { this.onChangeEvent } />
	}
	
	// event handler 
	onChangeEvent(event)
	{
		console.log(event.target.value);
	}*/
	
	render(){
		/*
		return <input onChange = { event => {console.log(event.target.value)}} />
		*/
		return (
			<div className="search-bar">
				<input 
				value = {this.state.term}
				onChange = { event => 
					{
						this.setState({term : event.target.value});
						this.props.onSearchChange(this.state.term);
					}}/>
			</div>
		);
	};
};

export default Search