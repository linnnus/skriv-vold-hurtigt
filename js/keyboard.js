let lastKey;
let keys = [...document.getElementsByClassName('key')];
let elts = new Map();
  elts.set(' ', [document.getElementById('space')]);
  elts.set('a', [document.getElementById('a')]);
  elts.set('b', [document.getElementById('b')]);
  elts.set('c', [document.getElementById('c')]);
  elts.set('d', [document.getElementById('d')]);
  elts.set('e', [document.getElementById('e')]);
  elts.set('f', [document.getElementById('f')]);
  elts.set('g', [document.getElementById('g')]);
  elts.set('h', [document.getElementById('h')]);
  elts.set('i', [document.getElementById('i')]);
  elts.set('j', [document.getElementById('j')]);
  elts.set('k', [document.getElementById('k')]);
  elts.set('l', [document.getElementById('l')]);
  elts.set('m', [document.getElementById('m')]);
  elts.set('n', [document.getElementById('n')]);
  elts.set('o', [document.getElementById('o')]);
  elts.set('p', [document.getElementById('p')]);
  elts.set('q', [document.getElementById('q')]);
  elts.set('r', [document.getElementById('r')]);
  elts.set('s', [document.getElementById('s')]);
  elts.set('t', [document.getElementById('t')]);
  elts.set('u', [document.getElementById('u')]);
  elts.set('v', [document.getElementById('v')]);
  elts.set('w', [document.getElementById('w')]);
  elts.set('x', [document.getElementById('x')]);
  elts.set('y', [document.getElementById('y')]);
  elts.set('z', [document.getElementById('z')]);
  elts.set('æ', [document.getElementById('æ')]);
  elts.set('ø', [document.getElementById('ø')]);
  elts.set('å', [document.getElementById('å')]);
  elts.set('A', [document.getElementById('a'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('B', [document.getElementById('b'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('C', [document.getElementById('c'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('D', [document.getElementById('d'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('E', [document.getElementById('e'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('F', [document.getElementById('f'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('G', [document.getElementById('g'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('H', [document.getElementById('h'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('I', [document.getElementById('i'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('J', [document.getElementById('j'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('K', [document.getElementById('k'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('L', [document.getElementById('l'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('M', [document.getElementById('m'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('N', [document.getElementById('n'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('O', [document.getElementById('o'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('P', [document.getElementById('p'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('Q', [document.getElementById('q'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('R', [document.getElementById('r'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('S', [document.getElementById('s'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('T', [document.getElementById('t'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('U', [document.getElementById('u'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('V', [document.getElementById('v'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('W', [document.getElementById('w'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('X', [document.getElementById('x'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('Y', [document.getElementById('y'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('Z', [document.getElementById('z'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('Æ', [document.getElementById('æ'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('Ø', [document.getElementById('ø'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('Å', [document.getElementById('å'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('1', [document.getElementById('1')]);
  elts.set('2', [document.getElementById('2')]);
  elts.set('3', [document.getElementById('3')]);
  elts.set('4', [document.getElementById('4')]);
  elts.set('5', [document.getElementById('5')]);
  elts.set('6', [document.getElementById('6')]);
  elts.set('7', [document.getElementById('7')]);
  elts.set('8', [document.getElementById('8')]);
  elts.set('9', [document.getElementById('9')]);
  elts.set('0', [document.getElementById('0')]);
  elts.set('+', [document.getElementById('+')]);
  elts.set('´', [document.getElementById('´')]);
  elts.set('!', [document.getElementById('1'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('"', [document.getElementById('2'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('#', [document.getElementById('3'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('¤', [document.getElementById('4'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('%', [document.getElementById('5'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('&', [document.getElementById('6'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('/', [document.getElementById('7'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('(', [document.getElementById('8'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set(')', [document.getElementById('9'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('=', [document.getElementById('0'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('?', [document.getElementById('+'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('`', [document.getElementById('´'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('<', [document.getElementById('<')]);
  elts.set('>', [document.getElementById('<'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('*', [document.getElementById('*')]);
  elts.set("'", [document.getElementById('*'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('.', [document.getElementById('.')]);
  elts.set(':', [document.getElementById('.'), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set(',', [document.getElementById(',')]);
  elts.set(';', [document.getElementById(','), document.getElementById('left-shift'), document.getElementById('right-shift')]);
  elts.set('-', [document.getElementById('-')]);
  elts.set('_', [document.getElementById('-'), document.getElementById('left-shift'), document.getElementById('right-shift')]);


// darken keys, when they're pressed 
// document.addEventListener('keydown', (event) => {
//
// 	const elt = elts.get(event.key);
//
//   // check for failure to find element
// 	if ( elt === undefined ) return;
//
//   // add class
// 	elt.forEach(item => {
// 		item.classList.add('down');
// 	});
//
// });
//
// document.addEventListener('keyup', (event) => {
//
// 	const elt = elts.get(event.key);
//
//   // check for failure
//   if ( elt === undefined ) return;
//
//   // remove class
// 	elt.forEach(item => {
// 		item.classList.remove('down');
// 	});
//
// });

// NOTE: this method of finding elts is shit
function highlight(char){

  let keysToHighlight = elts.get(char);

  // clear
  keys.forEach( key => key.classList.remove('highlighted'));

  // highligt new keys
  if (keysToHighlight) {
    keysToHighlight.forEach( key => key.classList.add('highlighted'));
  }

}

function clearKeys() {

  // loop over
  keys.forEach( key => {

    // remove classes
    key.classList.remove('down');
    key.classList.remove('highlighted');

  });

}
