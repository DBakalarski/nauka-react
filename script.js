var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'images/harry-potter.jpg'
	},
	{	
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'images/krol-lew.jpg'
	},
	{	
		id: 3,
		title: 'Władca pierścieni',
		desc: 'Film o pierścieniu',
		img: 'images/lotr.jpg'
	},
	{	
		id: 4,
		title: 'Django',
		desc: 'Film o czarnoskórym niewolniku',
		img: 'images/django.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);


ReactDOM.render(element, document.getElementById('app'));