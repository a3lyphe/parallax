	var ZeitCounter=0;
	var SchiffWenderCounter=0;
	var KisterImSchiffCounter=0;
	var HimmelCounter=0;
	var KistenCounter=0;
	var KirchenCounter=0;
	var BodenCounter=0;
	var BildNummer1=1;
	var BildNummer2=12;
	var BildNummer3=23;
	var BildNummer4=34;
	var BildNummer5=45;
	var BildNummer6=56;
	var BildNummer7=67;
	var Zufall1=Math.random()*4000-2000;
	var Zufall2=Math.random()*4000-2000;
	var Zufall3=Math.random()*4000-2000;
	var Zufall4=Math.random()*4000-2000;
	var Zufall5=Math.random()*4000-2000;
	var Zufall6=Math.random()*4000-2000;
	var BildAnzahl=77;
	var BildOrdner='images/';
	var BildName='haus';
	var BildTyp='png';
	var BildFolge=new Array();
	var BildWiederholRate=function(){
		parseInt(1000/BildAnzahl);
	}
	function init(){
		alert("Bewege das Schiff mit der A und der D-Taste...");
	alert("Sammle alle Kisten auf! Mit der S-Taste...");
	alert("Du hat 60 Sekunden Zeit!!!");
	
show();


	bindKeys();
		//laden aller benoetigten Bilder
		for(var i=1;i<=BildAnzahl;i++){
			var einBild1=new Image();
			einBild1.src=''+BildOrdner+BildName+i.toString()+'.'+BildTyp;
			BildFolge[i]=einBild1;
		}
		/*for(var i=1;i<=BildAnzahl;i++){
			var einBild2=new Image();
			einBild2.src=''+BildOrdner+BildName+i.toString()+'.'+BildTyp;
			BildFolge[i]=einBild2;
		}
		for(var i=1;i<=BildAnzahl;i++){
			var einBild3=new Image();
			einBild3.src=''+BildOrdner+BildName+i.toString()+'.'+BildTyp;
			BildFolge[i]=einBild3;
		}
		for(var i=1;i<=BildAnzahl;i++){
			var einBild4=new Image();
			einBild4.src=''+BildOrdner+BildName+i.toString()+'.'+BildTyp;
			BildFolge[i]=einBild4;
		}
		for(var i=1;i<=BildAnzahl;i++){
			var einBild5=new Image();
			einBild5.src=''+BildOrdner+BildName+i.toString()+'.'+BildTyp;
			BildFolge[i]=einBild5;
		}
		for(var i=1;i<=BildAnzahl;i++){
			var einBild6=new Image();
			einBild6.src=''+BildOrdner+BildName+i.toString()+'.'+BildTyp;
			BildFolge[i]=einBild6;
		}
		for(var i=1;i<=BildAnzahl;i++){
			var einBild7=new Image();
			einBild7.src=''+BildOrdner+BildName+i.toString()+'.'+BildTyp;
			BildFolge[i]=einBild7;
		}*/
		Timer();
	}
	function Timer(){
		if(ZeitCounter>9){
			document.getElementById("Zeit").style.left=510+'px';
		}
		document.getElementById("Zeit").value=ZeitCounter;
		ZeitCounter+=1;
		if(ZeitCounter>60){
		alert("Du hast verloren!!!");
		Fertig();
		}
		if(KisterImSchiffCounter>5){
		alert("Du hast gewonnen!!!");
		Fertig();
		}
		if(ZeitCounter<61&&KisterImSchiffCounter<6){
			window.setTimeout(Timer,1000);
		}
	}
	
	function Fertig(){
	Zufall1=Math.random()*4000-2000;
	Zufall2=Math.random()*4000-2000;
	Zufall3=Math.random()*4000-2000;
	Zufall4=Math.random()*4000-2000;
	Zufall5=Math.random()*4000-2000;
	Zufall6=Math.random()*4000-2000;
		document.getElementById("IschtukHafen").style.visibility='visible';
		document.getElementById("Ischtuk").style.visibility='visible';
		document.getElementById("Minigame").style.visibility='hidden';
		document.getElementById("Kiste1").style.visibility='hidden';
		document.getElementById("Kiste2").style.visibility='hidden';
		document.getElementById("Kiste3").style.visibility='hidden';
		document.getElementById("Kiste4").style.visibility='hidden';
		document.getElementById("Kiste5").style.visibility='hidden';
		document.getElementById("Kiste6").style.visibility='hidden';
		document.getElementById("Inventar").style.visibility='hidden';
		document.getElementById('KisteImSchiff1').style.visibility='hidden';
		document.getElementById('KisteImSchiff2').style.visibility='hidden';
		document.getElementById('KisteImSchiff3').style.visibility='hidden';
		document.getElementById('KisteImSchiff4').style.visibility='hidden';
		document.getElementById('KisteImSchiff5').style.visibility='hidden';
		document.getElementById('KisteImSchiff6').style.visibility='hidden';

	}
	function BodenAnimation(){
			if(BodenCounter>10){
				BodenCounter=1;
		}
			if(BodenCounter<1){
				BodenCounter=10;
		}
		if(HimmelCounter>20){
				HimmelCounter=1;
				}
			if(HimmelCounter<1){
				HimmelCounter=20;
		}
		document.getElementById("Kai").style.left=BodenCounter*28-300+'px';
		document.getElementById("KaiWand1").style.left=BodenCounter*28-300+'px';
		document.getElementById("KaiWand2").style.left=BodenCounter*28-300+'px';
		document.getElementById("Wasser").style.left=BodenCounter*28-300+'px';
		document.getElementById("Haueser").style.left=BodenCounter*26-300+'px';
		document.getElementById("Haueser2").style.left=BodenCounter*24-318+'px';
		document.getElementById("Haueser3").style.left=BodenCounter*22-336+'px';
		document.getElementById("Wolken").style.left=HimmelCounter*14-336+'px';
		document.getElementById("Kiste1").style.left=KistenCounter*30-Zufall1+'px';
		document.getElementById("Kiste2").style.left=KistenCounter*30-Zufall2+'px';
		document.getElementById("Kiste3").style.left=KistenCounter*30+Zufall3+'px';
		document.getElementById("Kiste4").style.left=KistenCounter*30+Zufall4+'px';
		document.getElementById("Kiste5").style.left=KistenCounter*30+Zufall5+'px';
		document.getElementById("Kiste6").style.left=KistenCounter*30+Zufall6+'px';
		document.getElementById("Kirche").style.left=KirchenCounter*18-336+'px';
		document.getElementById("Kirche2").style.left=KirchenCounter*18+336+'px';
	}
	function BildAnimation(){
		if(BildNummer1>BildAnzahl){
			BildNummer1=1;
		}
		if(BildNummer1<1){
			BildNummer1=BildAnzahl;
		}
		if(BildNummer2>BildAnzahl){
			BildNummer2=1;
		}
		if(BildNummer2<1){
			BildNummer2=BildAnzahl;
		}
		if(BildNummer3>BildAnzahl){
			BildNummer3=1;
		}
		if(BildNummer3<1){
			BildNummer3=BildAnzahl;
		}
		if(BildNummer4>BildAnzahl){
			BildNummer4=1;
		}
		if(BildNummer4<1){
			BildNummer4=BildAnzahl;
		}
		if(BildNummer5>BildAnzahl){
			BildNummer5=1;
		}
		if(BildNummer5<1){
			BildNummer5=BildAnzahl;
		}
		if(BildNummer6>BildAnzahl){
			BildNummer6=1;
		}
		if(BildNummer6<1){
			BildNummer6=BildAnzahl;
		}
		if(BildNummer7>BildAnzahl){
			BildNummer7=1;
		}
		if(BildNummer7<1){
			BildNummer7=BildAnzahl;
		}
		else{
			document.images[0].src=BildFolge[BildNummer1].src;
			document.images[0].style.left=BildNummer1*30-720+'px';
			document.images[0].style.top=240+'px';
			
			document.images[1].src=BildFolge[BildNummer2].src;
			document.images[1].style.left=BildNummer2*30-720+'px';
			document.images[1].style.top=240+'px';
			
			document.images[2].src=BildFolge[BildNummer3].src;
			document.images[2].style.left=BildNummer3*30-720+'px';
			document.images[2].style.top=240+'px';
			
			document.images[3].src=BildFolge[BildNummer4].src;
			document.images[3].style.left=BildNummer4*30-720+'px';
			document.images[3].style.top=240+'px';
			
			document.images[4].src=BildFolge[BildNummer5].src;
			document.images[4].style.left=BildNummer5*30-720+'px';
			document.images[4].style.top=240+'px';
			
			document.images[5].src=BildFolge[BildNummer6].src;
			document.images[5].style.left=BildNummer6*30-720+'px';
			document.images[5].style.top=240+'px';
			
			document.images[6].src=BildFolge[BildNummer7].src;
			document.images[6].style.left=BildNummer7*30-720+'px';
			document.images[6].style.top=240+'px';
		}
	}
	
	function show(){
		document.getElementById('Inventar').style.visibility='visible';
		if(KisterImSchiffCounter==1){
			document.getElementById('KisteImSchiff1').style.visibility='visible';
		}
		if(KisterImSchiffCounter==2){
			document.getElementById('KisteImSchiff1').style.visibility='visible';
			document.getElementById('KisteImSchiff2').style.visibility='visible';
		}
		if(KisterImSchiffCounter==3){
			document.getElementById('KisteImSchiff1').style.visibility='visible';
			document.getElementById('KisteImSchiff2').style.visibility='visible';
			document.getElementById('KisteImSchiff3').style.visibility='visible';
		}
		if(KisterImSchiffCounter==4){
			document.getElementById('KisteImSchiff1').style.visibility='visible';
			document.getElementById('KisteImSchiff2').style.visibility='visible';
			document.getElementById('KisteImSchiff3').style.visibility='visible';
			document.getElementById('KisteImSchiff4').style.visibility='visible';
		}
		if(KisterImSchiffCounter==5){
			document.getElementById('KisteImSchiff1').style.visibility='visible';
			document.getElementById('KisteImSchiff2').style.visibility='visible';
			document.getElementById('KisteImSchiff3').style.visibility='visible';
			document.getElementById('KisteImSchiff4').style.visibility='visible';
			document.getElementById('KisteImSchiff5').style.visibility='visible';
		}
		if(KisterImSchiffCounter==6){
			document.getElementById('KisteImSchiff1').style.visibility='visible';
			document.getElementById('KisteImSchiff2').style.visibility='visible';
			document.getElementById('KisteImSchiff3').style.visibility='visible';
			document.getElementById('KisteImSchiff4').style.visibility='visible';
			document.getElementById('KisteImSchiff5').style.visibility='visible';
			document.getElementById('KisteImSchiff6').style.visibility='visible';
		}
	}
	function hide(){
			document.getElementById('Inventar').style.visibility='hidden';
			document.getElementById('KisteImSchiff1').style.visibility='hidden';
			document.getElementById('KisteImSchiff2').style.visibility='hidden';
			document.getElementById('KisteImSchiff3').style.visibility='hidden';
			document.getElementById('KisteImSchiff4').style.visibility='hidden';
			document.getElementById('KisteImSchiff5').style.visibility='hidden';
			document.getElementById('KisteImSchiff6').style.visibility='hidden';
	}
	function KisteEinsammeln(){
		if(document.getElementById('Kiste1').style.visibility!='hidden'){
			if(document.getElementById('Kiste1').offsetLeft<document.getElementById('Schiff').offsetLeft+250&&document.getElementById('Kiste1').offsetLeft>document.getElementById('Schiff').offsetLeft+200){
			document.getElementById('Kiste1').style.visibility='hidden';
			KisterImSchiffCounter+=1;
			}
		}
		if(document.getElementById('Kiste2').style.visibility!='hidden'){
			if(document.getElementById('Kiste2').offsetLeft<document.getElementById('Schiff').offsetLeft+250&&document.getElementById('Kiste2').offsetLeft>document.getElementById('Schiff').offsetLeft+200){
			document.getElementById('Kiste2').style.visibility='hidden';
			KisterImSchiffCounter+=1;
			}
		}
		if(document.getElementById('Kiste3').style.visibility!='hidden'){
			if(document.getElementById('Kiste3').offsetLeft<document.getElementById('Schiff').offsetLeft+250&&document.getElementById('Kiste3').offsetLeft>document.getElementById('Schiff').offsetLeft+200){
				document.getElementById('Kiste3').style.visibility='hidden';
				KisterImSchiffCounter+=1;
				}
			}
		if(document.getElementById('Kiste4').style.visibility!='hidden'){
			if(document.getElementById('Kiste4').offsetLeft<document.getElementById('Schiff').offsetLeft+250&&document.getElementById('Kiste4').offsetLeft>document.getElementById('Schiff').offsetLeft+200){
				document.getElementById('Kiste4').style.visibility='hidden';
				KisterImSchiffCounter+=1;
				}
			}
		if(document.getElementById('Kiste5').style.visibility!='hidden'){
			if(document.getElementById('Kiste5').offsetLeft<document.getElementById('Schiff').offsetLeft+250&&document.getElementById('Kiste5').offsetLeft>document.getElementById('Schiff').offsetLeft+200){
				document.getElementById('Kiste5').style.visibility='hidden';
				KisterImSchiffCounter+=1;
			}
		}
		if(document.getElementById('Kiste6').style.visibility!='hidden'){
			if(document.getElementById('Kiste6').offsetLeft<document.getElementById('Schiff').offsetLeft+250&&document.getElementById('Kiste6').offsetLeft>document.getElementById('Schiff').offsetLeft+200){
				document.getElementById('Kiste6').style.visibility='hidden';
				KisterImSchiffCounter+=1;
			}
		}
		show();
	}


	function SchiffWender1(){
		if(SchiffWenderCounter>2){
			SchiffWenderCounter=0;
		}
		if(SchiffWenderCounter==1){
			document.images[7].src='images/SchiffLinks1.png';
		}
		if(SchiffWenderCounter==2){
			document.images[7].src='images/SchiffLinks2.png';
		}
		if(SchiffWenderCounter==0){
			document.images[7].src='images/SchiffLinks3.png';
		}
		SchiffWenderCounter+=1;
	}
	function SchiffWender2(){
		if(SchiffWenderCounter>2){
			SchiffWenderCounter=0;
		}
		if(SchiffWenderCounter==1){
			document.images[7].src='images/SchiffRechts1.png';
		}
		if(SchiffWenderCounter==2){
			document.images[7].src='images/SchiffRechts2.png';
		}
		if(SchiffWenderCounter==0){
			document.images[7].src='images/SchiffRechts3.png';
		}
		SchiffWenderCounter+=1;
		}
	function bindKeys(){

		document.onkeydown=function(e){
			e=e || window.event;

			switch(e.keyCode){
				case 83://"S",Kiste Einsammeln
					KisteEinsammeln();
				break;
				case 65://"A",Schiff Links
					HimmelCounter+=1;
					KistenCounter+=1;
					KirchenCounter+=1;
					BodenCounter+=1;
					BodenAnimation();
					BildNummer1+=1;
					BildNummer2+=1;
					BildNummer3+=1;
					BildNummer4+=1;
					BildNummer5+=1;
					BildNummer6+=1;
					BildNummer7+=1;
					BildAnimation();
					SchiffWender1();
				break;

				case 68://"D",Schiff Rechts
					HimmelCounter-=1;
					KistenCounter-=1;
					KirchenCounter-=1;
					BodenCounter-=1;
					BodenAnimation();
					BildNummer1-=1;
					BildNummer2-=1;
					BildNummer3-=1;
					BildNummer4-=1;
					BildNummer5-=1;
					BildNummer6-=1;
					BildNummer7-=1;
					BildAnimation();
					SchiffWender2();
				break;
			}
		}
		document.onkeyup=function(e){
			e=e || window.event;
		}
	}