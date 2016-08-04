			
		//variables
		var canvas;
		var canvasContext;
		var ballX = 100;
		var ballY = 100;
		var ballSpeedX =8;
		var ballSpeedY = 4;
		var player1Name;
		var gameStart = false;
		var score = 0;
		var PADDLE_HEIGHT =100;
		var paddleY = 0;
		var paddle2Y = 0;
		var paddleMovementSpeed;
		var scoreOne = 0;
		var scoreTwo = 0;
		var playerOneName = document.getElementById('playerOneName');
		var dontRepet = false; // hide if you hit replay..
		var WINNING_SCORE = 5;
		//background intro ball 	
		var introBallX = 10;
		var introBallY = 10;
		var introballSize = 10;
		var introballspeedX = 5;
		var introballspeedY = 2;
			//difficulty radio buttons 
			var diff = document.getElementById('difficulty');
			var easy = document.getElementById('easy');
			var medium = document.getElementById('medium');
			var hard = document.getElementById('hard');
			var display = document.getElementById('display');
			var go = document.getElementById('go')
			var startClick = document.getElementById('start-btn')
			var winnerDisplay = document.getElementById('winnerDisplay');
			var introMsg = document.getElementById('intro');
			startClick.value = 'Start';
			startClick.addEventListener('click',function(){
			

			//reset the winning message to empty.	
			winnerDisplay.innerHTML ="";
			//player 1 name input 	
			p1Name = (playerOneName.value).toUpperCase();

			//if user leaves the name field empty
			if ((p1Name.length)==0) {

				p1Name = "Player 1";		

			}


			//difficulty

			if (easy.checked == true) {

			
				paddleMovementSpeed = 3;

			}
			if (medium.checked == true){

				paddleMovementSpeed = 5;
			}
			if (hard.checked == true) {

				paddleMovementSpeed = 8;	

			}



			diff.style.visibility = 'hidden';

			//make pointer invisable when inside canvas for better gameplay
			canvas.style.cursor = 'none';
			
		
						//intro ball hidded 
						introballSize = 0;	
						//intro Title 
						introMsg.style.visibility = "hidden";
						//button visablilty
						startClick.style.visibility = "hidden"; 
						//player name input 			
						 playerOneName.style.visibility = 'hidden';			
	//CountDown 		
					
				display.style.visibility = "visible";
				var count = 3;
					function anim() {

					    if (count > 0) {
					        display.innerHTML = count;
					        count--;
					        setTimeout(anim, 700);
					    }
					    else {
					    	display.style.visibility = 'hidden';
					    	go.style.visibility = "visible";
					        go.innerHTML = "GO!";
					        gameStart = true;
					    }
					}
					anim();
		


			});
		window.onload = function(){
			
			


			canvas = document.getElementById('canvas');
			canvasContext = canvas.getContext('2d');
			var framesPerSecond = 50;
			setInterval(function(){

				draw();
				control();
				
				
			

			},600/framesPerSecond);

			canvas.addEventListener('mousemove',function(evt){

				var mousePos = calculateMousePos(evt);
				paddleY = mousePos.y;


			});


		}


