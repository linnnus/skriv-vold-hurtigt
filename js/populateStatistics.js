// define clogabl variables
let legendContainer = document.getElementById('options');

let chart;
let data;
let options = {
  fullWidth: true,
  seriesBarDistance: 10,
  chartPadding: {
    top: 40
  },
  plugins: [
    Chartist.plugins.legend({
      legendNames: ['Antal fejl', 'Antal fejl i procent'],
      clickable: false
    })
  ]
};

let lessonMistakeData = [];
let lessonMistakePData = [];
let lessonLabels = [];

let bgClr1;
let bdrClr1;
let bgClr2;
let bdrClr2;

// start
updateChart();

function updateChart(){

  // update data
  updateData();

  // if chart already exists
  if ( chart ) {

    // update chart with new data
    // console.log("updateing chart with: ", data);
    chart = chart.update(data);

  } else {

    // create chart
    chart = new Chartist.Bar('.ct-major-seventh', data, options);

  }

}

function updateData(){
  // console.log('updating data...');

  // clear existing data
  lessonMistakeData = [];
  lessonMistakePData = [];
  lessonLabels = [];

  // loop over each lesson
  lessons.forEach( lesson => {

    // get data
    let res = retrieveLesson(lesson.name);

    // if result exists
    if ( res ) {

      // add data
      lessonLabels.push(res.name);
      lessonMistakeData.push(res.mistakes);
      lessonMistakePData.push(res.mistakesP);

    }

  });

  // get colours
  bgColor1 = getComputedStyle(document.documentElement,null).getPropertyValue('--light-red');
  bdrClr1 = getComputedStyle(document.documentElement,null).getPropertyValue('--dark-red');
  bgColor2 = getComputedStyle(document.documentElement,null).getPropertyValue('--light-blue');
  bdrClr2 = getComputedStyle(document.documentElement,null).getPropertyValue('--dark-blue');

  // configure data
  data = {
    labels: lessonLabels,
    series: [
      lessonMistakeData,
      lessonMistakePData
    ]
  };

}
