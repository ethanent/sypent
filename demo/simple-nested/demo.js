const {div, img, br} = sy

const generated = div({
   class: 'test',
   id: 'someDiv'
},
   img({src: 'https://ethanent.me/images/smaller-icon.png'}),
   br(),
   'Text test!'
)

document.querySelector('#appendToMe').appendChild(generated)
