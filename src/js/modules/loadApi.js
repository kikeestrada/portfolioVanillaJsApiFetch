export const fnLoadApi = () => {
	// const to validate the request state
	const STATUS_OK = 200;
	const STATUS_NOT_FOUND = 404;
	const url = `https://jsonplaceholder.typicode.com/users/`;

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
						<h1>${jsonpApi.name}</h1>
					</div>
					<div class="card__content">
						<p>${jsonpApi.company.catchPhrase}</p>
					</div>
					<div class="card__sub-content">
						<p>${jsonpApi.company.bs}</p> 
					</div>
					<div class="card__date"><span>${jsonpApi.address.zipcode}</span></div>
				</article>
			`;
			container.insertAdjacentHTML('beforeend', articleHTML)
		});
	};
	getConnection();
};


