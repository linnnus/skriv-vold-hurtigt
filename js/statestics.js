function createClearConfirm(){
  const h = 'Ryd data?';
  const msg = 'Er du sikker på, at du vil slette dataene om dine spil? Når det først er gjort kan det ikke annuleres.';
  const b = [
    {name: 'Anuller', onclick: 'removeParent(this, 3);'},
    {name: 'Fortsæt', onclick: 'handleCleanDialog(); removeParent(this, 3);'}
  ];

  createPopup(h, msg, b);

}

function handleCleanDialog(){
  // console.log('cleaning storage...');

  clearStorage();

  updateChart();

}
