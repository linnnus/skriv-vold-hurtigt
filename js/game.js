// define global variables
const game = document.getElementById('game-container');
const stringParas = [...document.getElementsByClassName('text-letter')];
const pointerParas = [...document.getElementsByClassName('text-pointer')];

const mistakesDisp = document.getElementById('mistakes');
const progressDisp = document.getElementById('progress');
const trainsDisp = document.getElementById('trains');
const lengthDisp = document.getElementById('length');

let lesson;
let string;
let index;
let subindex;
let mistakes;
let gameover = true; // dont accept input untill init finished

// add key eventlisteners
document.addEventListener('keypress', e => {

  // prevent scroll
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }

  updateGame(e);

	// make sure we stay focused on the game
	game.scrollIntoViewIfNeeded(true);

});

// start with last lesson
init( getLastLesson() );

function init(lessonNum){
  // console.log('init', lessonNum);

  // test if lesson exists
  if ( !lessons[lessonNum] ) {
    // console.error("No lesson found!");
    return;
  }

  // retrieve elemnts and data
  lesson = lessons[lessonNum];
  string = lesson.string.replace(/\s+/g,'\u0020').normalize().trim(); // remove double spaces to avoid incoherence with how html parser treats spaces

  // reset variables
  index = 0;
  subindex = 0;
  window.scrollTo(0,0); // reset scroll
  mistakes = 0;
  updateDisp();
	lengthDisp.textContent = string.length;

  // populate string paras and pointers
	updatePointerParas();
	updateStringParas();

  // higlight first key
  highlight(string.substr(index, 1));

  // store lesson as the last
  setLastLesson(lessonNum);

  // reset gameover (should be last)
  gameover = false;

}

function updateDisp(){
  progressDisp.textContent = Math.floor(( index / string.length ) * 100).toString();
  mistakesDisp.textContent = mistakes;
  trainsDisp.textContent = lesson.description;
}

function updateStringParas(){
	stringParas.forEach((item, j) => {

		item.textContent = string.substr(index + j, 1).replace(' ','\u2022');

	});
}

function updatePointerParas() {
	pointerParas.forEach( (para, k) => para.textContent = subindex === k ? '^' : '\u00A0');
}

function updateGame(e){
  // console.log(subindex, index, e.key);

  // prevent movement after end or on modifier keys
  if (gameover) return;

  // mistakes and stuff
	const correct = string.substr(index, 1) === event.key;

	if (!correct) { mistakes++; updateDisp(); } // count mistakes

	stringParas[subindex].innerHTML =
		`<span class="${correct?'green':'red'}">${stringParas[subindex].textContent.replace(' ', '_')}</span>`;

	// progress
	index++; subindex = index % stringParas.length;

	//check gameover
  if ( index >= string.length ) return handleGameover();

	// update keys & pointers
	updatePointerParas();

  if ( 0 === subindex) {
		updateStringParas();
  }

  // highlight next key
  highlight(string.substr(index, 1));

}

function handleGameover(){

  // prevent further button pushing
  gameover = true;

  let mistakesP = ( mistakes / string.length ) * 100;

  clearKeys();

  // popup
  const title = 'Du er færdig!';
  const message = `Du er færdig med opgaven! Du lavede ${mistakes} fejl, hvilket svarer til ca. ${Math.floor(mistakesP)}%.\nDu kan se hvordan du klarer dig det store hele på statistik siden.`;
  const buttons = [
    {name: 'OK', onclick: `init(${getNextLesson()}); removeParent(this, 3);`},
  ];
  createPopup(title, message, buttons);

  // save for statistics
  storeLesson(lesson.name, mistakes, mistakesP);

}
