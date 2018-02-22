let gen = sy('div', {'class': 'test', 'id': 'someDiv'}, [
	sy('img', {'src': 'https://ethanent.me/images/smaller-icon.png'}),
	sy('br'),
	'Text test!'
])

document.querySelector('#appendToMe').appendChild(gen)