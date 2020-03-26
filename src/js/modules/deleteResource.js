export const fnDeleteResource = () => {
	const deleteResource = () =>{
		fetch('https://jsonplaceholder.typicode.com/posts/101', {
          method: 'DELETE'
        })
        .then(response => response.json())
		.then(data => {
			console.log('Delete Resource');
			console.log(data);
		})
	};
	deleteResource();
}
