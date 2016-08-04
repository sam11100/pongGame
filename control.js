function control(){



			introBallX += introballspeedX;
			introBallY += introballspeedY;

			if (introBallX > canvas.width -10) {

				introballspeedX =-introballspeedX;

			}
			if (introBallX < 10) {

				introballspeedX =-introballspeedX;
			}

			if (introBallY > canvas.height) {

				introballspeedY =-introballspeedY;

			}
			if (introBallY<10) {
				introballspeedY =-introballspeedY;
			}

						
			
			
			//return nothing until the button is pressed..
			if (gameStart == false) {
				return;
			}

			// movement of the ball ..
			ballX += ballSpeedX;
			ballY += ballSpeedY;


			
			BallDeflextion();

			cpuControl();

		
		}


		//  game reset 
		function reset(){


			
			if ((scoreTwo==WINNING_SCORE)||(scoreOne==WINNING_SCORE)) {

				
			winnerDisplay.style.visibility ="visable";		
			startClick.style.top = "45%";	
			winnerDisplay.style.top = "30%";	
			if (scoreOne==WINNING_SCORE) {
				//winnerDisplay.style.marginLeft = '400px';	

				winnerDisplay.innerHTML = 'YOU WIN!';
			}else{	
				
				//winnerDisplay.style.marginLeft = '340px';
				winnerDisplay.innerHTML = 'YOU LOOSE!';

			}	

			//get game start to false
			gameStart = false;
			
			//reset start button to visable
			startClick.style.visibility = "visible";

			playerOneName.style.visibility = 'visible';
			//reset the coundown before starting again. 
			count = 3; 
			//reset player 2 paddle 
			paddle2Y = canvas.height/2;
			
			//make pointer vidable
			canvas.style.cursor = 'default';	

			// change button value to replay and hide the input name feild
			startClick.value='Replay'; 	
			playerOneName.style.visibility='hidden';


			//reset the score to 0	
						scoreOne = 0;
						scoreTwo = 0;
						showingWinScreen = true;

					}
			
			//keep the coundown display hidden till the button is clicked
			display.style.visibility = 'hidden';
			go.style.visibility = 'hidden';
			//player name input 
			
			ballX = canvas.width/2
			ballY = canvas.height/2
			//reset the ball's speed
			ballSpeedX =7;
			ballSpeedY =3;

			

		}






		function BallDeflextion(){

			//if ball reaches x = canvas width the ball speed will be negative and will bounce.
			if (ballX >  canvas.width-23) {

			//countdown visabilty hidden when the ball touches the paddle  	
			display.style.visibility = "hidden";
			go.style.visibility = "hidden";
			//the ball will bounce if it touches the paddle

			if ((ballY>paddleY-PADDLE_HEIGHT+50)&&(ballY<paddleY+PADDLE_HEIGHT/2)) {

				ballSpeedX = -ballSpeedX;	

				
			}else{
					scoreTwo++;
					reset();
					ballSpeedX=-ballSpeedX;

					
			}	


			//movement if the ball depending on which side of the paddle it touches

			if ((ballY>paddleY-PADDLE_HEIGHT+50)&&(ballY<paddleY)) {

				ballSpeedY -= 3;


			}
			if ((ballY>paddleY)&&(ballY<paddleY+PADDLE_HEIGHT/2)) {

				ballSpeedY += 3;	

			}

				
				
			}
			//if ball reaches x = 0  the ball speed will be negative and will bounce.
			if (ballX < 23) {



				if ((ballY>paddle2Y-PADDLE_HEIGHT/2)&&(ballY<paddle2Y+PADDLE_HEIGHT/2+10)) {

					ballSpeedX = -ballSpeedX;

				}else{

				 	scoreOne++;
					reset();
					ballSpeedX=-ballSpeedX;

					
				}


				
			}
			//if ball reaches y = canvas height  the ball speed will be negative and will bounce.
			if (ballY >= canvas.height) {

				ballSpeedY = -ballSpeedY;
			}
			//if ball reaches y = 0 the ball speed will be negative and will bounce.
			if (ballY<= 0) {

				ballSpeedY = -ballSpeedY;
			
			}

		}

		function cpuControl(){


			if (ballX<canvas.width/1.8) {

				if (paddle2Y<ballY) {	
						do{

						paddle2Y += paddleMovementSpeed;


						} while(paddle2Y == ballY);
				}
				if(paddle2Y>ballY){

					do{

						paddle2Y -= paddleMovementSpeed;


						} while(paddle2Y == ballY);	

				}	


			}


		}

		function score(){

			score	

		}

		function calculateMousePos(evt){


			var rect = canvas.getBoundingClientRect();
			var root = document.documentElement;
			var mouseX = evt.clientX - rect.left - root.scrollLeft;
			var mouseY = evt.clientY - rect.top - root.scrollTop;

			return{

				x:mouseX,
				y:mouseY
			}



		}

