function storeLesson(lesson, mistakes, mistakesP){

  if (storageAvailable('localStorage')) { // can acces localStorage

    // get currently saved data
    let currentData = retrieveLesson(lesson);

    // check if: record already exists
    // and the newest game has more mistakes than the currently stored one
    if ( currentData && currentData.mistakes < mistakesP ) { return; }

    // else, store item
    localStorage.setItem(lesson, [mistakes, mistakesP]);

  } else {

    createPopup('Fejl', 'Hjemmesiden kunne ikke få adgang til localStorage, hvilket er nødvendigt for at kunne gemme dine resultater.\n:(');

  }

}

function retrieveLesson(lesson){

  // get value and split
  if (storageAvailable('localStorage') && localStorage.getItem(lesson) ) {

    // get lesson
    let lessonArr = localStorage[lesson].split(',');

    // create object
    let obj = {
      name: lesson,
      mistakes: lessonArr[0],
      mistakesP: lessonArr[1]
    };

    // get lesson use if thingy short
    return obj;

  } else {

    return false;

  }

}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
    }
  }

function clearStorage(){
  localStorage.clear();
}

function lessonExist(lesson){
  return (localStorage.getItem(lesson));
}

function setLastLesson(lesson){

  if (storageAvailable('localStorage')) { // can acces localStorage

    if ( typeof lesson === 'object' ) {

      localStorage.setItem('last_lesson', lessons.indexOf(lesson) );

    } else if ( typeof lesson === 'number' ) {

      localStorage.setItem('last_lesson', lesson );

    } else {

      // console.error('could not save last lesson; invalid type');

    }

  } else {

    createPopup('Fejl', 'Hjemmesiden kunne ikke få adgang til localStorage, hvilket er nødvendigt for at kunne gemme dine resultater.\n:(');

  }

}

function getLastLesson(){
  let returnVal = Number( localStorage.getItem('last_lesson') );
  return returnVal ? returnVal : 0 ;
}

function getNextLesson(){
	const currentLessonNum = getLastLesson();
  return currentLessonNum + 1 < lessons.length ? currentLessonNum + 1 : 0;
}
