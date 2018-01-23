
c=1;
flag6 =0; 

function status()
{
	si = "0";
	if (document.getElementById('s').checked) 
	{
  		si = document.getElementById('s').value;
	}
	if(si != "single")
	{
		if(c%2 == 0)
			document.getElementById("sta").innerHTML = "<b> <u> Waiting for input from player X </u> </b>";
		else
			document.getElementById("sta").innerHTML = "<b> <u> Waiting for input from player O </u> </b>";
	}
}

function trigger_event(cell)
{
		console.log(c);
		si = "0";
		console.log(si);
		var y_index = cell.cellIndex;
		var x_index = cell.parentNode.rowIndex;	
		if (document.getElementById('s').checked) 
		{
  			si = document.getElementById('s').value;
		}
		console.log(si);
		if(c%2 == 0 && si != "single") 
		{
			cell.innerHTML= "<center><h1>O</h1></center>";
			c++;
			find_winner(x_index,y_index);
		}
		else
		{

			if(flag6 == 1)
				alert("Click on NEW GAME button to start a new game!");
			else
			{
				cell.innerHTML = "<center><h1>X</h1></center>";
				//find_winner(x_index,y_index);
				if(si == "single" && flag6 ==0 )
				{
					c++;
					single_player(cell);
				} 
				else
				{
					if(flag6==0)
						find_winner(x_index,y_index);
				}	
				c++;
				find_winner(x_index,y_index);		
			}
				 
		}
		
}

function single_player(cell)
{
	var tt = document.getElementById("tictactoe");
	var y_index = cell.cellIndex;
	var x_index = cell.parentNode.rowIndex;
	var current_player = cell.innerHTML;
	flag1 = 0;
	flag2 =0;
	flag3 =0;
	flag4=0;
	flag5=0;
	x_index1 =0;
	y_index1 =0;
	if(c==2)
	{
		cell1 = Math.floor(Math.random() * 3);
		cell2 = Math.floor(Math.random() * 3);
		if((cell1 == x_index) && (cell2 == y_index))
		{
			cell1 = Math.floor(Math.random() * 3);
			cell2 = Math.floor(Math.random() * 3);
			x_index1 = cell1;
			y_index1 = cell2;
		} 
		tt.rows[cell1].cells[cell2].innerHTML = "<center><h1>O</h1></center>";
	}
	else
	{
		cell1 = -1;
		cell2 = -1;
		for(var i=0; i<=2; i++)
		{
			x = tt.rows[x_index].cells[i].innerHTML;
			if((x != "<center><h1>X</h1></center>") && (x != "<center><h1>O</h1></center>"))
			{
				cell2 = i;
			}
			console.log(x);
			if(x == current_player)
			{
				flag1++;
				console.log(flag1);
				//break;
			}
		}
		if(flag1 == 2 && cell2!=-1)
		{
			tt.rows[x_index].cells[cell2].innerHTML = "<center><h1>O</h1></center>";
			y_index1 = cell2;
			x_index1 = x_index;
		}
		else
		{
			flag1=1;
		}

		if(flag1 <= 1)
		{
			for(var i=0; i<=2; i++)
			{
				x = tt.rows[i].cells[y_index].innerHTML;
				if((x != "<center><h1>X</h1></center>") && (x != "<center><h1>O</h1></center>"))
				{
					cell1 = i;
				}
				console.log(x);
				if(x == current_player)
				{
					flag2++;
					//break;
				}
			}
			if(flag2 == 2 && cell1 != -1)
			{
				tt.rows[cell1].cells[y_index].innerHTML = "<center><h1>O</h1></center>";
				x_index1 = cell1;
				y_index1 = y_index;
			}
			else
			{
				flag2 = 1;
			}
		}
		if(flag1<=1 && flag2<=1)
		{
			x= tt.rows[0].cells[0].innerHTML;
			y = tt.rows[1].cells[1].innerHTML;
			z= tt.rows[2].cells[2].innerHTML;
			if(x == y || y == z || z==x)
			{
				if((x != "<center><h1>X</h1></center>") && (x != "<center><h1>O</h1></center>"))
				{
					tt.rows[0].cells[0].innerHTML = "<center><h1>O</h1></center>";
					x_index1 = 0;
					y_index1 = 0;
					flag3 = 1;
				}
				if((y != "<center><h1>X</h1></center>") && (y != "<center><h1>O</h1></center>") && flag3!=1)
				{
					tt.rows[1].cells[1].innerHTML = "<center><h1>O</h1></center>";
					x_index1 = 1;
					y_index1 = 1;
					flag3 = 1;
				}
				if((z != "<center><h1>X</h1></center>") && (z != "<center><h1>O</h1></center>") && flag3!=1)
				{
					tt.rows[2].cells[2].innerHTML = "<center><h1>O</h1></center>";
					x_index1 = 2;
					y_index1 = 2;
					flag3 = 1;
				}
			}	
		}

		if(flag1<=1 && flag2<=1 && flag3 == 0)
		{
			x= tt.rows[0].cells[2].innerHTML;
			y = tt.rows[1].cells[1].innerHTML;
			z= tt.rows[2].cells[0].innerHTML;
			if(x == y || y==z || z==x)
			{
				if((x != "<center><h1>X</h1></center>") && (x != "<center><h1>O</h1></center>"))
				{
					tt.rows[0].cells[2].innerHTML = "<center><h1>O</h1></center>";
					x_index1 = 0;
					y_index1 = 2;	
					flag4 = 1;
				}
				if((y != "<center><h1>X</h1></center>") && (y != "<center><h1>O</h1></center>") && flag4 != 1)
				{
					tt.rows[1].cells[1].innerHTML = "<center><h1>O</h1></center>";
					x_index1 = 1;
					y_index1 = 1;
					flag4 = 1;
				}
				if((z != "<center><h1>X</h1></center>") && (z != "<center><h1>O</h1></center>") && flag4 != 1)
				{
					tt.rows[2].cells[0].innerHTML = "<center><h1>O</h1></center>";
					x_index1 = 2;
					y_index1 = 0;
					flag4 = 1;
				}
			}	
		}
		console.log(flag2);
		console.log(flag3);
		console.log(flag4);
		console.log(flag1);
		if(flag1<=1 && flag2<=1 && flag3==0 && flag4==0)
		{
			for (var i = 0; i < tt.rows.length; i++)
			{
				for (var j = 0; j < tt.rows[i].cells.length; j++)
				{
                    			if(tt.rows[i].cells[j].innerHTML!= "<center><h1>X</h1></center>" && tt.rows[i].cells[j].innerHTML!= "<center><h1>O</h1></center>")
					{
						tt.rows[i].cells[j].innerHTML = "<center><h1>O</h1></center>";
						x_index1 = i;
						y_index1 = j;
						flag5=1;
						break;
					}
				}
				if(flag5 == 1)
					break;
            		}	
		}
	}
	if(flag6 == 0)
		find_winner(x_index1,y_index1);
}

function find_winner(x_index,y_index)
{
	var tt = document.getElementById("tictactoe");
	si = "0";
	if (document.getElementById('s').checked) 
	{
  		si = document.getElementById('s').value;
	}
	if (tt != null) 
	{
		//console.log(cell.cellIndex);
		//console.log(cell.parentNode.rowIndex);
		//var y_index = cell.cellIndex;
		//var x_index = cell.parentNode.rowIndex;
		var current_player = tt.rows[x_index].cells[y_index].innerHTML;
		console.log(current_player);
		flag11 =0;
		flag22 = 0;	
		for(var i=0; i<=2; i++)
		{
			x = tt.rows[x_index].cells[i].innerHTML;
			console.log(x);
			if(x != current_player)
			{
				flag11=1;
				break;
			}
		}
		
		if(flag11 == 1)
		{
			for(var j=0; j<=2; j++)
			{
				x = tt.rows[j].cells[y_index].innerHTML;
				console.log(x);
				if(x != current_player)
				{
					flag22=1;
					break;
				}
			}
			
		}

		if(flag11==1 && flag22==1)
		{
			x= tt.rows[0].cells[0].innerHTML;
			y = tt.rows[1].cells[1].innerHTML;
			z= tt.rows[2].cells[2].innerHTML;
			if(x!= y || y!=z || x!=z)
				flag11 = 1;
			else
				flag11 = 0;
		}

		if(flag11==1 && flag22==1)
		{
			x= tt.rows[0].cells[2].innerHTML;
			y = tt.rows[1].cells[1].innerHTML;
			z= tt.rows[2].cells[0].innerHTML;
			if(x!= y || y!=z || x!=z)
				flag11 = 1;
			else
				flag11=0;
		}

		f=0;
		console.log(flag11);
		console.log(flag22);
		console.log(flag6);
		console.log(c);
		if(flag11 == 0 || flag22==0)
		{
			if(current_player == "<center><h1>X</h1></center>")
			{
				//cell.innerHTML= "<center><h1>X</h1></center>";
				f=1;
				current_player = "X";
			}
			else
			{
				//cell.innerHTML= "<center><h1>O</h1></center>";
				f=2;
				current_player = "O";
			}
			if(f==1)
				document.getElementById("sta").innerHTML = "<b> <u> Player X wins </u> </b>";
			if(f == 2)
				document.getElementById("sta").innerHTML = "<b> <u> Player O wins </u> </b>";
			//window.location.reload();
			flag6 = 1;
		}
		if(flag11!=0 && flag22!=0 && flag6 != 1)
		{
			if(si == "single" && c==9)
			{
				document.getElementById("sta").innerHTML = "<b> <u> DRAW </u> </b>";
				flag6 =1;
			}
			if(si!="single" && c==10)
			{
				document.getElementById("sta").innerHTML = "<b> <u> DRAW </u> </b>";
				flag6 =1;
			}
		}	
       }
}


