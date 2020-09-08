function createPopup(titleText, msg, buttons=[{name: "OK", onclick: "removeParent(this, 3)"}]){

	// background
	const background = document.createElement('DIV');
	background.classList.add('popup-background');

	  // container for modal itself
	  let box = document.createElement('DIV');
	  box.classList.add('popup-box');

			// create x-button
			let xButton = document.createElement('a');
			xButton.textContent = '×';
			xButton.href = '#';
			xButton.setAttribute('onclick', 'removeParent(this, 2)');
			xButton.classList.add('close');
			box.insertAdjacentElement('beforeEnd', xButton);

	    // create title
	    let title = document.createElement('H1');
	    title.textContent = titleText;
	    box.insertAdjacentElement('beforeEnd', title);

	    // create message
	    let message = document.createElement('P');
	    message.textContent = msg;
	    box.insertAdjacentElement('beforeEnd', message);

	    // buttonContainer
	    let buttonContainer = document.createElement('DIV');
	    buttonContainer.classList.add('button-container');
	    buttonContainer.classList.add('vertical-center');

	      // loop over and create buttons
	      buttons.forEach( button => {

	        let b = document.createElement('BUTTON');
	        b.classList.add('popup-button');
	        b.textContent = button.name;
	        b.setAttribute( "onClick", button.onclick );
	        buttonContainer.insertAdjacentElement('beforeEnd', b);

	      });

	    box.insertAdjacentElement('beforeEnd', buttonContainer);

	  // append div to body
	  background.insertAdjacentElement('beforeEnd', box);

	document.body.insertAdjacentElement('beforeEnd', background)

}

function removeParent(startingElt, layers){

	let elt = startingElt;
	
	for (let i = 0; i < layers; i++) {
		elt = elt.parentElement;
	}

	removeElt(elt);

}

function removeElt(elt){
  elt.parentElement.removeChild(elt);
}
