var globalVars = require('./globalVars');

export const fnGetResource = () => {
	const getResource = () =>{
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(response => response.json())
			.then(data => {
				console.log('Get Resource');
				console.log(data);
			})
	};
	getResource();
}
