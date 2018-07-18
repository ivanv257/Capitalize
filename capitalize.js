//Capitalize the first letter of a string. 

capitalize = (name) => {
	let firstLetter = name.slice(0,1).toUpperCase();
	let remainLetters = name.slice(1);
	return firstLetter + remainLetters;
}

capitalize('ivan');
