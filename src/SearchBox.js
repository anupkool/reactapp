import React from 'react';
// import CardList from 'CardList';
const SearchBox = ({ searchfield, searchChange }) => {
	return(
		<div>
		<input 
		className='pa3 ba b--green bg-lightest-blue center'
		type='search' 
		placeholder='search robots'
		onChange={searchChange} /> 	
		</div>
	);	
}

export default SearchBox;