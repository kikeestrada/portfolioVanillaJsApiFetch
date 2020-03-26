var globalVars = require('./globalVars');

export const fnGetAllResources = () => {
	const getResources = () =>{
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => {
				console.log('Get All Resources');
				console.log(data);
				console.log('Print All Resources');
				draw(data);
			})
	};

	const draw = data => {
		const container = document.getElementById('myContent');
		data.forEach(jsonpApi => {
			const articleHTML = `
				<article class="card" id="${jsonpApi.id}">
					<div class="card__close">
						<span class="btnDelete">X</span>
					</div>
					<div class="card__title">
						<h1>Name: ${jsonpApi.title}</h1>
					</div>
					<div class="card__content">
						<p>${jsonpApi.body}</p>
					</div>
					<div class="card__sub-content">
						<p>${jsonpApi.userId}</p>
					</div>
					<div class="card__date"><span>ID: ${jsonpApi.title}</span></div>
				</article>
			`;
			container.insertAdjacentHTML('beforeend', articleHTML)
		});
	};

	getResources();
}
