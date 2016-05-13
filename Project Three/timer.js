var messageContainer = document.querySelectorAll('.messages')[0];
var addLink = document.querySelectorAll('.click')[0];
var timer =0;

 var updateTimer = function() {
   timer++;
   console.log("timer: " + timer);


   if(timer > 4) {
    console.log("sent");
     Chat.sendMessage({
    sender: 'Madeline',
    type: 'raw',
    value: 9

  });

     timer = 0;
   }
 };

 window.setInterval(updateTimer, 1000);


addLink.addEventListener('click', function () {
  var value = Math.floor(Math.random() * 13);

  timer = 0;

  Chat.sendMessage({
    sender: 'Madeline',
    type: 'raw',
    value: value
  });
});

Chat.onMessage(function (data) {

   if (data.sender == 'aaa') {
   return
   }

console.log("value: " + data.value);

if (data.value == 0) {$(".phrase1").show();
}


if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase1").hide();
}

if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase3").hide();
}

if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase4").hide();
}

if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase5").hide();
}

if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase6").hide();
}

if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase7").hide();
}

if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase8").hide();
}

if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase9").hide();
}

if (data.value == 1) {
  $(".phrase2").show();
  $(".phrase10").hide();
}


if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase1").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase2").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase4").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase5").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase5").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase6").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase7").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase8").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase9").hide();
}

if (data.value == 2) {
  $(".phrase3").show();
  $(".phrase10").hide();
}


if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase1").hide();
}

if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase2").hide();
}

if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase3").hide();
}

if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase5").hide();
}

if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase6").hide();
}

if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase7").hide();
}

if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase8").hide();
}

if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase9").hide();
}

if (data.value == 3) {
  $(".phrase4").show();
  $(".phrase10").hide();
}


if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase1").hide();
}

if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase2").hide();
}

if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase3").hide();
}

if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase4").hide();
}

if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase6").hide();
}

if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase7").hide();
}

if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase8").hide();
}

if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase9").hide();
}

if (data.value == 4) {
  $(".phrase5").show();
  $(".phrase10").hide();
}


if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase1").hide();
}

if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase2").hide();
}

if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase3").hide();
}

if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase4").hide();
}

if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase5").hide();
}

if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase7").hide();
}

if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase8").hide();
}

if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase9").hide();
}

if (data.value == 5) {
  $(".phrase6").show();
  $(".phrase10").hide();
}


if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase1").hide();
}

if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase2").hide();
}

if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase3").hide();
}

if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase4").hide();
}

if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase5").hide();
}

if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase6").hide();
}

if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase8").hide();
}

if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase9").hide();
}

if (data.value == 6) {
  $(".phrase7").show();
  $(".phrase10").hide();
}



if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase1").hide();
}

if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase2").hide();
}

if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase3").hide();
}

if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase4").hide();
}

if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase5").hide();
}

if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase6").hide();
}

if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase7").hide();
}

if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase9").hide();
}

if (data.value == 7) {
  $(".phrase8").show();
  $(".phrase10").hide();
}


if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase1").hide();
}

if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase2").hide();
}

if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase3").hide();
}

if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase4").hide();
}

if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase5").hide();
}

if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase6").hide();
}

if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase7").hide();
}

if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase8").hide();
}

if (data.value == 8) {
  $(".phrase9").show();
  $(".phrase10").hide();
}


if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase1").hide();
}

if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase2").hide();
}

if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase3").hide();
}

if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase4").hide();
}

if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase5").hide();
}

if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase6").hide();
}

if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase7").hide();
}

if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase8").hide();
}

if (data.value == 9) {
  $(".phrase10").show();
  $(".phrase9").hide();
}

});


 // Chat.onUserCountChange(function (newCount) {
 //   var userCountElement = document.querySelector('.user-count');
 //   userCountElement.innerHTML = newCount;
 // });

