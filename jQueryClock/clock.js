// while this clock slides rather than ticking, even if that is not how clocks work that is how time itself works!

function startClock(){
  setInterval(function(){
    secondTick();
  }, 1000);
  setInterval(function(){
    minuteTick();
  },60000);
  setInterval(function(){
    hourTick();
  } ,6000000);
}

function rotate(id, num){
  var value = 'rotating ' + num + ' linear infinite';
  $('#'+id).css('-webkit-animation',value).css('animation',value);
};

function secondTick(){
  console.log("you")
  rotate("second-hand",'60s');
};

function minuteTick(){
  console.log("yo")
  rotate("minute-hand",'3600s');
};

function hourTick(){
  rotate("hour-hand",'43200s');
};

startClock();
