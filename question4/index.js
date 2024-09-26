
var e = React.createElement; 
ReactDOM.render( 

e('label', { htmlFor: 'name' }, 'Name:'),
e('label', { htmlFor: 'Password' }, 'Password:'),

  e('button', null, 'Submit'), 
  document.getElementById('root') 
); 