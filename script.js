
		
		function funkcija(){
	    var username=document.getElementById('input1').value;
		var password=document.getElementById('input2').value;
			if ((username=="Kenan")&&(password==123)){
				document.getElementById("login").style.display = "none";
				document.getElementById("wrong").style.display = "none";
				document.getElementById("admin").style.display = "block";
				document.getElementById("welcome").innerHTML="Welcome " + username;
			}
			else{
				document.getElementById("wrong").style.display = "block";
				document.getElementById('input1').value="";
				document.getElementById('input2').value="";
		}
	}
		function hide(){
			document.getElementById("proizvod").style.display = "none";
		}

		function smanji(){
			document.getElementById("proizvod").style.width = "200px";
		}
		function povecaj(){
			document.getElementById("proizvod").style.width = "400px";
		}
		function povecajsliku(){
			document.getElementById("slika").style.width = "450px";
		}
		function promjeniboju(){
			document.getElementById("proizvod").style.backgroundColor="red";
		}
		function zamjenisliku(){
			document.getElementById("slika").src = "slike/samsung.jpg";
		}