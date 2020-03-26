var globalVars = require('./globalVars');

export const fnUpdateResource = () => {
	const updateResource = () =>{
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              title: 'foo',
              body: 'bar',
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(data => {
				console.log('Update Resource');
				console.log(data);
			})
	};
	updateResource();
}
