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
     movie: React.PropTypes.object.isRequired,
     title: React.PropTypes.string.isRequired,
     desc: React.PropTypes.string.isRequired,
     img: React.PropTypes.string.isRequired,
  	},

	render: function() {
		return (
			React.createElement('li', {} ,
				React.createElement('h2', {}, this.props.movie.title),
				React.createElement('p', {}, this.props.movie.desc),
				React.createElement('img', {src: this.props.movie.img})
			)
		)
	}

});

var moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key: movie.id, title: movie.title, desc: movie.desc, img: movie.img})
})

var MovieList = React.createClass({
    render: function() {
        return (
            React.createElement('ul', {}, moviesElements)
        )
    }
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, MovieList)
	);	


ReactDOM.render(element, document.getElementById('app'));
/*var movieElements = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);
*/


/*
var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);	

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img})
	);
});
*/
