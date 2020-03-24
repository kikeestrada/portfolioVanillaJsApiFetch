export const fnLoadApi = () => {
	// const to validate the request state
	const STATUS_OK = 200;
	const STATUS_NOT_FOUND = 404;
	const url = `https://jsonplaceholder.typicode.com/posts/`;

	// this function gets the api connection
	const getConnection = () =>{
		fetch(url)
			.then(response => {
				// validate the response state
				switch (response.status) {
					case STATUS_OK:
						return response.json();
					case STATUS_NOT_FOUND:
						console.log('error de conexion');
				}
			})
			.then(data => {
				// the api prints 100 registres with this the print is limitated 6
				const limit = 20;
				console.log(data);
				draw(data.slice(0,limit));
			})
	};

	// This function paint the html component in the DOM
	const draw = data => {
		const container = document.getElementById('myContent');
		data.forEach(jsonpApi => {
			const articleHTML = `
				<article class="card" id="${jsonpApi.id}">
					<div class="card__close"><span>X</span></div>
					<div class="card__title">
						<h1>News</h1>
					</div>
					<div class="card__content">
						<p>${jsonpApi.title}</p>
					</div>
					<div class="card__sub-content">
						<p>${jsonpApi.body}</p>
					</div>
					<div class="card__date"><span>10.14.19</span></div>
				</article>
			`;
			container.insertAdjacentHTML('beforeend', articleHTML)
		});
	};
	getConnection();
};


