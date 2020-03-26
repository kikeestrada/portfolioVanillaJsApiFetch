var globalVars = require('./globalVars');

export const fnCreateResource = () => {
	const createResource = () =>{
		fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 2
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(data => {
				console.log('Create Resource');
				console.log(data);
			})
	};
	createResource();
}
