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

var Movie = React.createClass({
	propTypes: {
     title: React.PropTypes.string.isRequired,
     desc: React.PropTypes.string.isRequired,
     img: React.PropTypes.string.isRequired,
  	},

	render: function() {
		return (
			React.createElement('li', {} ,
				React.createElement('h2', {}, this.props.title),
				React.createElement('p', {}, this.props.desc),
				React.createElement('img', {src: this.props.img})
			)
		)
	}

});

var moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key: movie.id, title: movie.title, desc: movie.desc, img: movie.img})
})

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);	


ReactDOM.render(element, document.getElementById('app'));