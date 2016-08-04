function draw(){

			colorRect('black',0,0,canvas.width,canvas.height);//canvas
			//background intro ball
			drawCircle('red',introBallX,introBallY,introballSize);
		
			if (gameStart == false) {

				return;
			}

			
			//net

			for(var i = 0;i<canvas.height;i+=40){
				colorRect('white',canvas.width/2-1,i,1,20); 		 
			}




			//player one score 
			
			writeText('white','Times New Roman',p1Name,canvas.width-210,canvas.height/9);
			writeText('red','20px  Times New Roman',scoreOne,canvas.width-200,canvas.height/6);


			//player 2 & score
			writeText('white','Times New Roman','CPU',canvas.width/2-300,canvas.height/9);
			writeText('red','20px Times New Roman',scoreTwo,canvas.width/2-290,canvas.height/6);

				
			drawCircle('red',ballX,ballY,10);    //ball
			colorRect('white',canvas.width-14,paddleY-PADDLE_HEIGHT/2,10,PADDLE_HEIGHT);	  //paddle1
			colorRect('white',5,paddle2Y-PADDLE_HEIGHT/2,10,PADDLE_HEIGHT); 	 //paddle2
				
		}	
			

		function colorRect(color,leftX,topY,width,height){	

		canvasContext.fillStyle = color;
		canvasContext.fillRect(leftX,topY,width,height);
		}

		function drawCircle(color,leftX,topY,width){

			canvasContext.fillStyle = color;
			canvasContext.beginPath();
			canvasContext.arc(leftX,topY,width,40,Math.PI*2,true);
			canvasContext.fill();

		}

		function writeText(color,fontSizeAndFamily,text,left,top){


			canvasContext.fillStyle = color;
			canvasContext.font = fontSizeAndFamily;	
			canvasContext.fillText(text,left,top);	

		}















