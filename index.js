

$(document).ready(function () {
  let gridContainer = $(".grid-container"); 
  let gridItem = $(".grid-container > .grid-item");
  let itemValue = $(".grid-container > .grid-item > h2");
  // let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'maroon'];

  let randNum = Math.floor(Math.random() * 9) + 1;
  // gridItem.css('background-color', colors[randNum]);
  itemValue.html(randNum);

  // clones the .grid-container by 9 times
  // clones the entire grid
  // identifies the contents in .grid-item
  // generated a new set of random numbers
  // edits the numbers in the html
  // appends cloned items to the gridContainer
  for (let i = 0; i < 8; i++) { 
    let clone = gridContainer.clone(true);
    let cloneItems = clone.find('.grid-item');
    let newRandNum = Math.floor(Math.random() * 9) + 1;

    // cloneItems.css('background-color', colors[newRandNum]);
    cloneItems.find('h2').html(newRandNum);

    clone.insertBefore(gridContainer); 
  }
});

// user clicks on tile of the grid
$(".grid-container > .grid-item").on("click", function () {
  $(this).css("background-color", "red");
  console.log(this);
});


// create timer
let start = new Date;
setInterval(function() {
    let elapsedTime = Math.floor((new Date() - start) / 1000);  
    let minutes = Math.floor(elapsedTime / 60);  
    let seconds = elapsedTime % 60;              
 
    let formattedTime = 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

    $('.timer').html(formattedTime);
}, 1000);