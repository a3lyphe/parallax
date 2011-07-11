//classes
Stadt=function(){
	this.id;
	this.Leute;
	this.Geld;
	this.Nahrung;
	this.ReparierKurs;
	this.KaufKurs;
	this.Kaffee;
	this.Tabak;
	this.Zuckerrohr;
	this.Rum;
	this.Baumwolle;
	this.Perlen;
	this.Segeltuch;
	this.Hanf;
	this.Teer;
	this.Holz;
	this.Pulver;
	this.Kugeln;
	this.Kanonen;
}

player=function(){
	this.id;
	this.Leute;
	this.Geld;
	this.Nahrung;
	this.Kaffee;
	this.Tabak;
	this.Zuckerrohr;
	this.Rum;
	this.Baumwolle;
	this.Perlen;
	this.Segeltuch;
	this.Hanf;
	this.Teer;
	this.Holz;
	this.Pulver;
	this.Kugeln;
	this.Kanonen;
}

Ware=function(){
	this.id;
	this.gewicht;
	this.menge
	
}

var $=function(id){ return document.getElementById(id); };
var dc=function(tag){ return document.createElement(tag); };
var IschtukAnheuernCounter=0;
var MaximalLadung=10000;
var MaximalGeschwindigkeit=0.4;
var ServiceWert=0;
var SchiffZustand=0;

	Ischtuk=new Stadt();
	Ischtuk.id='Ischtuk';
	Ischtuk.Leute=200;
	Ischtuk.Geld=1734;
	Ischtuk.Nahrung=1545;
	Ischtuk.ReparierKurs=5;
	Ischtuk.KaufKurs=5;
	Ischtuk.Kaffee=5;
	Ischtuk.Tabak=4;
	Ischtuk.Zuckerrohr=4;
	Ischtuk.Rum=32;
	Ischtuk.Baumwolle=2;
	Ischtuk.Perlen=356;
	Ischtuk.Segeltuch=9;
	Ischtuk.Hanf=4;
	Ischtuk.Teer=20;
	Ischtuk.Holz=23;
	Ischtuk.Pulver=50;
	Ischtuk.Kugeln=60;
	Ischtuk.Kanonen=414;


IschtukPreise=new Ware();
	IschtukPreise.id='IschtukPreise';
	IschtukPreise.Name='Preise';
	IschtukPreise.Nahrung=15;
	IschtukPreise.Kaffee=15;
	IschtukPreise.Tabak=14;
	IschtukPreise.Zuckerrohr=14;
	IschtukPreise.Rum=32;
	IschtukPreise.Baumwolle=12;
	IschtukPreise.Perlen=356;
	IschtukPreise.Segeltuch=9;
	IschtukPreise.Hanf=4;
	IschtukPreise.Teer=20;
	IschtukPreise.Holz=23;
	IschtukPreise.Pulver=50;
	IschtukPreise.Kugeln=60;
	IschtukPreise.Kanonen=414;
	

IschtukGewicht=new Ware();
	IschtukGewicht.id='IschtukGewicht';
	IschtukGewicht.Name='Gewicht';
	IschtukGewicht.Nahrung=5;
	IschtukGewicht.Kaffee=5;
	IschtukGewicht.Tabak=5;
	IschtukGewicht.Zuckerrohr=5;
	IschtukGewicht.Rum=5;
	IschtukGewicht.Baumwolle=5;
	IschtukGewicht.Perlen=1;
	IschtukGewicht.Segeltuch=10;
	IschtukGewicht.Hanf=4;
	IschtukGewicht.Teer=10;
	IschtukGewicht.Holz=10;
	IschtukGewicht.Pulver=50;
	IschtukGewicht.Kugeln=50;
	IschtukGewicht.Kanonen=200;

player=new player();
	player.id='player';

	player.Kaffee=5;
	player.Tabak=5;
	player.Zuckerrohr=5;
	player.Rum=5;
	player.Baumwolle=5;
	player.Perlen=31;
	player.Segeltuch=10;
	player.Hanf=4;
	player.Teer=10;
	player.Holz=10;
	player.Pulver=50;
	player.Kugeln=50;
	player.Kanonen=8;
	player.Leute=20;
	player.Geld=750;
	player.Nahrung=45;

function WerteChecker(){
var IschtukGesamtGewicht=((player.Kaffee*IschtukGewicht.Kaffee)+(player.Tabak*IschtukGewicht.Tabak)+(player.Zuckerrohr*IschtukGewicht.Zuckerrohr)+(player.Rum*IschtukGewicht.Rum)+(player.Baumwolle*IschtukGewicht.Baumwolle)+(player.Perlen*IschtukGewicht.Perlen)+(player.Segeltuch*IschtukGewicht.Segeltuch)+(player.Hanf*IschtukGewicht.Hanf)+(player.Teer*IschtukGewicht.Teer)+(player.Holz*IschtukGewicht.Holz)+(player.Pulver*IschtukGewicht.Pulver)+(player.Kugeln*IschtukGewicht.Kugeln)+(player.Kanonen*IschtukGewicht.Kanonen)+(player.Nahrung*IschtukGewicht.Nahrung));

$('IschtukLeute').value=Ischtuk.Leute;
$('IschtukGeld').value=Ischtuk.Geld;
$('IschtukNahrung').value=Ischtuk.Nahrung;

$('playerKaffeeMenge').value=player.Kaffee;
$('playerTabakMenge').value=player.Tabak;
$('playerZuckerrohrMenge').value=player.Zuckerrohr;
$('playerRumMenge').value=player.Rum;
$('playerBaumwolleMenge').value=player.Baumwolle;
$('playerPerlenMenge').value=player.Perlen;
$('playerSegeltuchMenge').value=player.Segeltuch;
$('playerHanfMenge').value=player.Hanf;
$('playerTeerMenge').value=player.Teer;
$('playerHolzMenge').value=player.Holz;
$('playerPulverMenge').value=player.Pulver;
$('playerKugelnMenge').value=player.Kugeln;
$('playerKanonenMenge').value=player.Kanonen;
$('playerNahrungMenge').value=player.Nahrung;
$('playerGeldMenge').value=player.Geld.toFixed(2);

$('LogLeute').value=player.Leute;
$('LogKaffee').value=player.Kaffee;
$('LogTabak').value=player.Tabak;
$('LogZuckerrohr').value=player.Zuckerrohr;
$('LogRum').value=player.Rum;
$('LogBaumwolle').value=player.Baumwolle;
$('LogPerlen').value=player.Perlen;
$('LogSegeltuch').value=player.Segeltuch;
$('LogHanf').value=player.Hanf;
$('LogTeer').value=player.Teer;
$('LogHolz').value=player.Holz;
$('LogPulver').value=player.Pulver;
$('LogKugeln').value=player.Kugeln;
$('LogKanonen').value=player.Kanonen;
$('LogNahrung').value=player.Nahrung;
$('LogGeld').value=player.Geld.toFixed(2);


$('Takelage').value=MaximalGeschwindigkeit;
$('Rumpf').value=MaximalLadung;
$('Service').value=ServiceWert;
$('SchiffZustand').value=SchiffZustand;



$('IschtukKaffeePreis').value=IschtukPreise.Kaffee;
$('IschtukTabakPreis').value=IschtukPreise.Tabak;
$('IschtukZuckerrohrPreis').value=IschtukPreise.Zuckerrohr;
$('IschtukRumPreis').value=IschtukPreise.Rum;
$('IschtukBaumwollePreis').value=IschtukPreise.Baumwolle;
$('IschtukPerlenPreis').value=IschtukPreise.Perlen;
$('IschtukSegeltuchPreis').value=IschtukPreise.Segeltuch;
$('IschtukHanfPreis').value=IschtukPreise.Hanf;
$('IschtukTeerPreis').value=IschtukPreise.Teer;
$('IschtukHolzPreis').value=IschtukPreise.Holz;
$('IschtukPulverPreis').value=IschtukPreise.Pulver;
$('IschtukKugelnPreis').value=IschtukPreise.Kugeln;
$('IschtukKanonenPreis').value=IschtukPreise.Kanonen;
$('IschtukNahrungPreis').value=IschtukPreise.Nahrung;
$('playerGesamtGewicht').value=IschtukGesamtGewicht;

window.setTimeout(WerteChecker,100);
}
function Oberinit(){
	WerteChecker()
	warenliste=new Array(Ischtuk,player);
	preisliste=new Array(IschtukPreise);
}

function IschtukExit(){
$('Ischtuk').style.visibility='hidden';
	player.x=13;
	player.y=13;
	player.rot=0;
	player.dir=0;
}
function IschtukTaverne(){
$('IschtukTaverne').style.visibility='visible';
if(IschtukAnheuernCounter<1){
$('IschtukTaverneLeute').style.visibility='visible';
}
}
function IschtukAnheuern(){
IschtukAnheuernCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(IschtukAnheuernCounter>0){
$('IschtukTaverneLeute').style.visibility='hidden';
}
}
function IschtukTaverneBarceeper(){
alert('Barceeper');
}
function IschtukTaverneSchatzkarte(){
alert('Schatzkarte');
}
function IschtukTavernePersonal(){
alert('Personal');
}
function IschtukTaverneHund(){
alert('Hund');
}
function IschtukTaverneBilderRahmenSchiff(){
alert('BilderRahmenSchiff');
}
function IschtukTaverneBilderRahmenSchiff2(){
alert('BilderRahmenSchiff2');
}
function IschtukTaverneFenster(){
alert('BildDraussen');
}
function IschtukTaverneFenster2(){
alert('FensterRahmen');
}
function IschtukTaverneExit(){
$('IschtukTaverne').style.visibility='hidden';
$('IschtukTaverneLeute').style.visibility='hidden';
}
function IschtukKontor(){
$('IschtukKontor').style.visibility='visible';
}
function IschtukKontorExit(){
$('IschtukKontor').style.visibility='hidden';
}
function IschtukKontorKaufen(){
	if((player.Geld-(Ischtuk.KaufKurs*10))>=0){
		Ischtuk.Geld+=Ischtuk.KaufKurs*10;
		Ischtuk.Nahrung-=10;
		player.Nahrung+=10;
		player.Geld-=Ischtuk.KaufKurs*10;
	}
}
function IschtukKontorVerkaufen(){
	if(player.Nahrung-10>=0){
		Ischtuk.Geld-=(Ischtuk.KaufKurs*.9)*10;
		Ischtuk.Nahrung+=10;
		player.Nahrung-=10;
		player.Geld+=(Ischtuk.KaufKurs*.9)*10;
	}
}

function IschtukHafen(){
	$('IschtukHafen').style.visibility='visible';
}
function MiniGame(){
	$('IschtukHafen').style.visibility='hidden';
	$('Ischtuk').style.visibility='hidden';
	$('Minigame').style.visibility='visible';
	ZeitCounter=0;
	SchiffWenderCounter=0;
	KisterImSchiffCounter=0;
	HimmelCounter=0;
	KistenCounter=0;
	KirchenCounter=0;
	BodenCounter=0;
	BildNummer1=1;
	BildNummer2=12;
	BildNummer3=23;
	BildNummer4=34;
	BildNummer5=45;
	BildNummer6=56;
	BildNummer7=67;
	$('Kiste1').style.visibility='visible';
	$('Kiste2').style.visibility='visible';
	$('Kiste3').style.visibility='visible';
	$('Kiste4').style.visibility='visible';
	$('Kiste5').style.visibility='visible';
	$('Kiste6').style.visibility='visible';
	init();
}
function IschtukHafenExit(){
$('IschtukHafen').style.visibility='hidden';
$('IschtukTakelageFenster').style.visibility='hidden';
$('IschtukRumpfFenster').style.visibility='hidden';
$('IschtukServiceFenster').style.visibility='hidden';
$('HafenUpgradeFenster').style.visibility='hidden';
$('IschtukHafenUpgradeExitKnopf').style.visibility='hidden';

}

function IschtukHafenUpgradeExit(){
$('HafenUpgradeFenster').style.visibility='hidden';
$('IschtukHafenUpgradeExitKnopf').style.visibility='hidden';
}
function HafenUpgrade(){
$('HafenUpgradeFenster').style.visibility='visible';
$('IschtukHafenUpgradeExitKnopf').style.visibility='visible';
}

function schiff2(){
$('Log2').style.visibility='visible';
}
function schiffZu2(){
$('Log2').style.visibility='hidden';
}
function Takelage(){
$('IschtukTakelageFenster').style.visibility='visible';
}
function Rumpf(){
$('IschtukRumpfFenster').style.visibility='visible';
}
function Service(){
$('IschtukServiceFenster').style.visibility='visible';
}function TakelageZu(){
$('IschtukTakelageFenster').style.visibility='hidden';
}
function RumpfZu(){
$('IschtukRumpfFenster').style.visibility='hidden';
}
function ServiceZu(){
$('IschtukServiceFenster').style.visibility='hidden';
}
function TakelageUpgrade(){
	if(player.Geld-1000>=0){
		player.Geld-=1000;
		MaximalGeschwindigkeit+=0.1;
	}
}
function RumpfUpgrade(){
	if(player.Geld-1000>=0){
		player.Geld-=1000;
		MaximalLadung+=1000;
	}
}
function SeviceUpgrade(){
	if(player.Geld-1000>=0){
		player.Geld-=1000;
		ServiceWert+=1;
	}
}
function IschtukHafenExpeditionsSchiff(){
alert('Expedition Starten');
}
function IschtukHafenAngeln(){
alert('Angeln');
}
function IschtukHafenReparieren(){
	if((player.Geld-Ischtuk.ReparierKurs)>=0){
Ischtuk.Geld+=Ischtuk.ReparierKurs;
player.Geld-=Ischtuk.ReparierKurs;
SchiffZustand+=5;
}
}
function IschtukGovernour(){
$('IschtukGovernour').style.visibility='visible';
}
function IschtukGovernourExit(){
$('IschtukGovernour').style.visibility='hidden';
}
function IschtukGovernourInfo(){
}
function IschtukGovernourHome(){
}

kaufen=function(that,what,ware,menge,wertenderung){

var IschtukGesamtGewicht=((player.Kaffee*IschtukGewicht.Kaffee)+(player.Tabak*IschtukGewicht.Tabak)+(player.Zuckerrohr*IschtukGewicht.Zuckerrohr)+(player.Rum*IschtukGewicht.Rum)+(player.Baumwolle*IschtukGewicht.Baumwolle)+(player.Perlen*IschtukGewicht.Perlen)+(player.Segeltuch*IschtukGewicht.Segeltuch)+(player.Hanf*IschtukGewicht.Hanf)+(player.Teer*IschtukGewicht.Teer)+(player.Holz*IschtukGewicht.Holz)+(player.Pulver*IschtukGewicht.Pulver)+(player.Kugeln*IschtukGewicht.Kugeln)+(player.Kanonen*IschtukGewicht.Kanonen)+(player.Nahrung*IschtukGewicht.Nahrung));

	for(var i=0;i<warenliste.length;i++){
		if(warenliste[i].id==that){
			for(var j=0;j<preisliste.length;j++){
				if(preisliste[j].id==what){
					
					if(ware=='Kaffee'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Kaffee*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Kaffee*menge>=0){
						warenliste[i].Kaffee+=menge;
						warenliste[i].Geld-=preisliste[j].Kaffee*menge;
						warenliste[i-1].Geld+=preisliste[j].Kaffee*menge;
						preisliste[j].Kaffee=(preisliste[j].Kaffee*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Tabak'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Tabak*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Tabak*menge>=0){
							warenliste[i].Tabak+=menge;
							warenliste[i].Geld-=preisliste[j].Tabak*menge;
							warenliste[i-1].Geld+=preisliste[j].Tabak*menge;
							preisliste[j].Tabak=(preisliste[j].Tabak*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Zuckerrohr'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Zuckerrohr*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Zuckerrohr*menge>=0){
							warenliste[i].Zuckerrohr+=menge;
							warenliste[i].Geld-=preisliste[j].Zuckerrohr*menge;
							warenliste[i-1].Geld+=preisliste[j].Zuckerrohr*menge;
							preisliste[j].Zuckerrohr=(preisliste[j].Zuckerrohr*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Rum'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Rum*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Rum*menge>=0){
							warenliste[i].Rum+=menge;
							warenliste[i].Geld-=preisliste[j].Rum*menge;
							warenliste[i-1].Geld+=preisliste[j].Rum*menge;
							preisliste[j].Rum=(preisliste[j].Rum*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Baumwolle'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Baumwolle*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Baumwolle*menge>=0){
							warenliste[i].Baumwolle+=menge;
							warenliste[i].Geld-=preisliste[j].Baumwolle*menge;
							warenliste[i-1].Geld+=preisliste[j].Baumwolle*menge;
							preisliste[j].Baumwolle=(preisliste[j].Baumwolle*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Perlen'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Perlen*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Perlen*menge>=0){
							warenliste[i].Perlen+=menge;
							warenliste[i].Geld-=preisliste[j].Perlen*menge;
							warenliste[i-1].Geld+=preisliste[j].Perlen*menge;
							preisliste[j].Perlen=(preisliste[j].Perlen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Segeltuch'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Segeltuch*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Segeltuch*menge>=0){
							warenliste[i].Segeltuch+=menge;
							warenliste[i].Geld-=preisliste[j].Segeltuch*menge;
							warenliste[i-1].Geld+=preisliste[j].Segeltuch*menge;
							preisliste[j].Segeltuch=(preisliste[j].Segeltuch*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Hanf'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Hanf*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Hanf*menge>=0){
							warenliste[i].Hanf+=menge;
							warenliste[i].Geld-=preisliste[j].Hanf*menge;
							warenliste[i-1].Geld+=preisliste[j].Hanf*menge;
							preisliste[j].Hanf=(preisliste[j].Hanf*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Teer'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Teer*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Teer*menge>=0){
							warenliste[i].Teer+=menge;
							warenliste[i].Geld-=preisliste[j].Teer*menge;
							warenliste[i-1].Geld+=preisliste[j].Teer*menge;
							preisliste[j].Teer=(preisliste[j].Teer*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Holz'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Holz*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Holz*menge>=0){
							warenliste[i].Holz+=menge;
							warenliste[i].Geld-=preisliste[j].Holz*menge;
							warenliste[i-1].Geld+=preisliste[j].Holz*menge;
							preisliste[j].Holz=(preisliste[j].Holz*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Pulver'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Pulver*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Pulver*menge>=0){
							warenliste[i].Pulver+=menge;
							warenliste[i].Geld-=preisliste[j].Pulver*menge;
							warenliste[i-1].Geld+=preisliste[j].Pulver*menge;
							preisliste[j].Pulver=(preisliste[j].Pulver*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kugeln'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Kugeln*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Kugeln*menge>=0){
							warenliste[i].Kugeln+=menge;
							warenliste[i].Geld-=preisliste[j].Kugeln*menge;
							warenliste[i-1].Geld+=preisliste[j].Kugeln*menge;
							preisliste[j].Kugeln=(preisliste[j].Kugeln*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kanonen'){
						if(IschtukGesamtGewicht+(IschtukGewicht.Kanonen*menge)<=MaximalLadung){
							if(warenliste[i].Geld-preisliste[j].Kanonen*menge>=0){
								warenliste[i].Kanonen+=menge;
								warenliste[i].Geld-=preisliste[j].Kanonen*menge;
								warenliste[i-1].Geld+=preisliste[j].Kanonen*menge;
								preisliste[j].Kanonen=(preisliste[j].Kanonen*wertenderung).toFixed(2);
							}
						}
					}
					if(ware=='Nahrung'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Nahrung*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Nahrung*menge>=0){
							warenliste[i].Nahrung+=menge;
							warenliste[i].Geld-=preisliste[j].Nahrung*menge;
							warenliste[i-1].Geld+=preisliste[j].Nahrung*menge;
							preisliste[j].Nahrung=(preisliste[j].Nahrung*wertenderung).toFixed(2);
						}
						}
					}
				}
			}
		}
	}
}

verkaufen=function(that,what,ware,menge,wertenderung){
	for(var i=0;i<warenliste.length;i++){
		if(warenliste[i].id==that){
			for(var j=0;j<preisliste.length;j++){
				if(preisliste[j].id==what){
				
					if(ware=='Kaffee'){
						if(Ischtuk.Geld-preisliste[j].Kaffee*menge>=0){
							if(warenliste[i].Kaffee-menge>=0){
								warenliste[i].Kaffee-=menge;
								warenliste[i].Geld+=eval(preisliste[j].Kaffee*menge);
								warenliste[i-1].Geld-=eval(preisliste[j].Kaffee*menge);
								preisliste[j].Kaffee=(preisliste[j].Kaffee*wertenderung).toFixed(2);
								
							}
						}
					}
					if(ware=='Tabak'){
					if(Ischtuk.Geld-preisliste[j].Tabak*menge>=0){
						if(warenliste[i].Tabak-menge>=0){
							warenliste[i].Tabak-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Tabak*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Tabak*menge);
							preisliste[j].Tabak=(preisliste[j].Tabak*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Zuckerrohr'){
					if(Ischtuk.Geld-preisliste[j].Zuckerrohr*menge>=0){
						if(warenliste[i].Zuckerrohr-menge>=0){
							warenliste[i].Zuckerrohr-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Zuckerrohr*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Zuckerrohr*menge);
							preisliste[j].Zuckerrohr=(preisliste[j].Zuckerrohr*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Rum'){
					if(Ischtuk.Geld-preisliste[j].Rum*menge>=0){
						if(warenliste[i].Rum-menge>=0){
							warenliste[i].Rum-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Rum*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Rum*menge);
							preisliste[j].Rum=(preisliste[j].Rum*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Baumwolle'){
					if(Ischtuk.Geld-preisliste[j].Baumwolle*menge>=0){
						if(warenliste[i].Baumwolle-menge>=0){
							warenliste[i].Baumwolle-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Baumwolle*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Baumwolle*menge);
							preisliste[j].Baumwolle=(preisliste[j].Baumwolle*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Perlen'){
					if(Ischtuk.Geld-preisliste[j].Perlen*menge>=0){
						if(warenliste[i].Perlen-menge>=0){
							warenliste[i].Perlen-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Perlen*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Perlen*menge);
							preisliste[j].Perlen=(preisliste[j].Perlen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Segeltuch'){
					if(Ischtuk.Geld-preisliste[j].Segeltuch*menge>=0){
						if(warenliste[i].Segeltuch-menge>=0){
							warenliste[i].Segeltuch-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Segeltuch*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Segeltuch*menge);
							preisliste[j].Segeltuch=(preisliste[j].Segeltuch*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Hanf'){
					if(Ischtuk.Geld-preisliste[j].Hanf*menge>=0){
						if(warenliste[i].Hanf-menge>=0){
							warenliste[i].Hanf-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Hanf*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Hanf*menge);
							preisliste[j].Hanf=(preisliste[j].Hanf*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Teer'){
					if(Ischtuk.Geld-preisliste[j].Teer*menge>=0){
						if(warenliste[i].Teer-menge>=0){
							warenliste[i].Teer-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Teer*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Teer*menge);
							preisliste[j].Teer=(preisliste[j].Teer*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Holz'){
					if(Ischtuk.Geld-preisliste[j].Holz*menge>=0){
						if(warenliste[i].Holz-menge>=0){
							warenliste[i].Holz-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Holz*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Holz*menge);
							preisliste[j].Holz=(preisliste[j].Holz*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Pulver'){
					if(Ischtuk.Geld-preisliste[j].Pulver*menge>=0){
						if(warenliste[i].Pulver-menge>=0){
							warenliste[i].Pulver-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Pulver*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Pulver*menge);
							preisliste[j].Pulver=(preisliste[j].Pulver*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kugeln'){
					if(Ischtuk.Geld-preisliste[j].Kugeln*menge>=0){
						if(warenliste[i].Kugeln-menge>=0){
							warenliste[i].Kugeln-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kugeln*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Kugeln*menge);
							preisliste[j].Kugeln=(preisliste[j].Kugeln*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kanonen'){
					if(Ischtuk.Geld-preisliste[j].Kanonen*menge>=0){
						if(warenliste[i].Kanonen-menge>=0){
							warenliste[i].Kanonen-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kanonen*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Kanonen*menge);
							preisliste[j].Kanonen=(preisliste[j].Kanonen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Nahrung'){
					if(Ischtuk.Geld-preisliste[j].Nahrung*menge>=0){
						if(warenliste[i].Nahrung-menge>=0){
							warenliste[i].Nahrung-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Nahrung*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Nahrung*menge);
							preisliste[j].Nahrung=(preisliste[j].Nahrung*wertenderung).toFixed(2);
						}
						}
					}
				}
			}
		}
	}
}
