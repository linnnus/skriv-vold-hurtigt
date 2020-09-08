// get dropdown
const dropdownContent = document.getElementsByClassName('dropdown-content')[0];

// loop over and generate content
lessons.forEach((item, i) => {

  // create element
  const a = document.createElement('A');
	a.href = `javascript:init(${i})`;
	a.textContent = item.name;

  // append
  dropdownContent.appendChild(a);

});
