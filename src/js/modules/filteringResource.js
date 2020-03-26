export const fnFilteringResource = () => {
	const filteringResource = () =>{
	fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      		.then(data => {
      			console.log('Filtering Resource');
      			console.log(data);
      		})
	}
}
