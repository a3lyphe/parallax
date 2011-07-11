//classes
Stadt=function()
{
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

player=function()
{
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

Ware=function()
{
	this.id;
	this.gewicht;
	this.menge
	
}

var $=function(id){ return document.getElementById(id); };
var dc=function(tag){ return document.createElement(tag); };
var DAnheuernCounter=0;
var MaximalLadung=10000;
var MaximalGeschwindigkeit=0.4;
var ServiceWert=0;
var SchiffZustand=0;

D=new Stadt();
D.id='D';
D.Leute=200;
D.Geld=1734;
D.Nahrung=1545;
D.ReparierKurs=5;
D.KaufKurs=5;
D.Kaffee=5;
D.Tabak=4;
D.Zuckerrohr=4;
D.Rum=32;
D.Baumwolle=2;
D.Perlen=356;
D.Segeltuch=9;
D.Hanf=4;
D.Teer=20;
D.Holz=23;
D.Pulver=50;
D.Kugeln=60;
D.Kanonen=414;

DPreise=new Ware();
DPreise.id='DPreise';
DPreise.Name='Preise';
DPreise.Nahrung=15;
DPreise.Kaffee=15;
DPreise.Tabak=14;
DPreise.Zuckerrohr=14;
DPreise.Rum=32;
DPreise.Baumwolle=12;
DPreise.Perlen=356;
DPreise.Segeltuch=9;
DPreise.Hanf=4;
DPreise.Teer=20;
DPreise.Holz=23;
DPreise.Pulver=50;
DPreise.Kugeln=60;
DPreise.Kanonen=414;

DGewicht=new Ware();
DGewicht.id='DGewicht';
DGewicht.Name='Gewicht';
DGewicht.Nahrung=5;
DGewicht.Kaffee=5;
DGewicht.Tabak=5;
DGewicht.Zuckerrohr=5;
DGewicht.Rum=5;
DGewicht.Baumwolle=5;
DGewicht.Perlen=1;
DGewicht.Segeltuch=10;
DGewicht.Hanf=4;
DGewicht.Teer=10;
DGewicht.Holz=10;
DGewicht.Pulver=50;
DGewicht.Kugeln=50;
DGewicht.Kanonen=200;

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

function WerteChecker()
{
var DGesamtGewicht=((player.Kaffee*DGewicht.Kaffee)+(player.Tabak*DGewicht.Tabak)+(player.Zuckerrohr*DGewicht.Zuckerrohr)+(player.Rum*DGewicht.Rum)+(player.Baumwolle*DGewicht.Baumwolle)+(player.Perlen*DGewicht.Perlen)+(player.Segeltuch*DGewicht.Segeltuch)+(player.Hanf*DGewicht.Hanf)+(player.Teer*DGewicht.Teer)+(player.Holz*DGewicht.Holz)+(player.Pulver*DGewicht.Pulver)+(player.Kugeln*DGewicht.Kugeln)+(player.Kanonen*DGewicht.Kanonen)+(player.Nahrung*DGewicht.Nahrung));

$('DLeute').value=D.Leute;
$('DGeld').value=D.Geld;
$('DNahrung').value=D.Nahrung;

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



$('DKaffeePreis').value=DPreise.Kaffee;
$('DTabakPreis').value=DPreise.Tabak;
$('DZuckerrohrPreis').value=DPreise.Zuckerrohr;
$('DRumPreis').value=DPreise.Rum;
$('DBaumwollePreis').value=DPreise.Baumwolle;
$('DPerlenPreis').value=DPreise.Perlen;
$('DSegeltuchPreis').value=DPreise.Segeltuch;
$('DHanfPreis').value=DPreise.Hanf;
$('DTeerPreis').value=DPreise.Teer;
$('DHolzPreis').value=DPreise.Holz;
$('DPulverPreis').value=DPreise.Pulver;
$('DKugelnPreis').value=DPreise.Kugeln;
$('DKanonenPreis').value=DPreise.Kanonen;
$('DNahrungPreis').value=DPreise.Nahrung;
$('playerGesamtGewicht').value=DGesamtGewicht;

window.setTimeout(WerteChecker,100);
}
function Oberinit(){
	WerteChecker()
	warenliste=new Array(D,player);
	preisliste=new Array(DPreise);
}

function DExit(){
$('D').style.visibility='hidden';
	player.x=13;
	player.y=13;
	player.rot=0;
	player.dir=0;
}
function DTaverne(){
$('DTaverne').style.visibility='visible';
if(DAnheuernCounter<1){
$('DTaverneLeute').style.visibility='visible';
}
}
function DAnheuern(){
DAnheuernCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(DAnheuernCounter>0){
$('DTaverneLeute').style.visibility='hidden';
}
}
function DTaverneBarceeper(){
alert('Barceeper');
}
function DTaverneSchatzkarte(){
alert('Schatzkarte');
}
function DTavernePersonal(){
alert('Personal');
}
function DTaverneHund(){
alert('Hund');
}
function DTaverneBilderRahmenSchiff(){
alert('BilderRahmenSchiff');
}
function DTaverneBilderRahmenSchiff2(){
alert('BilderRahmenSchiff2');
}
function DTaverneFenster(){
alert('BildDraussen');
}
function DTaverneFenster2(){
alert('FensterRahmen');
}
function DTaverneExit(){
$('DTaverne').style.visibility='hidden';
$('DTaverneLeute').style.visibility='hidden';
}
function DKontor(){
$('DKontor').style.visibility='visible';
}
function DKontorExit(){
$('DKontor').style.visibility='hidden';
}
function DKontorKaufen(){
	if((player.Geld-(D.KaufKurs*10))>=0){
		D.Geld+=D.KaufKurs*10;
		D.Nahrung-=10;
		player.Nahrung+=10;
		player.Geld-=D.KaufKurs*10;
	}
}
function DKontorVerkaufen(){
	if(player.Nahrung-10>=0){
		D.Geld-=(D.KaufKurs*.9)*10;
		D.Nahrung+=10;
		player.Nahrung-=10;
		player.Geld+=(D.KaufKurs*.9)*10;
	}
}

function DHafen(){
	$('DHafen').style.visibility='visible';
}
function MiniGame(){
	$('DHafen').style.visibility='hidden';
	$('D').style.visibility='hidden';
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
function DHafenExit(){
$('DHafen').style.visibility='hidden';
$('DTakelageFenster').style.visibility='hidden';
$('DRumpfFenster').style.visibility='hidden';
$('DServiceFenster').style.visibility='hidden';
$('HafenUpgradeFenster').style.visibility='hidden';
$('DHafenUpgradeExitKnopf').style.visibility='hidden';

}

function DHafenUpgradeExit(){
$('HafenUpgradeFenster').style.visibility='hidden';
$('DHafenUpgradeExitKnopf').style.visibility='hidden';
}
function HafenUpgrade(){
$('HafenUpgradeFenster').style.visibility='visible';
$('DHafenUpgradeExitKnopf').style.visibility='visible';
}

function schiff2(){
$('Log2').style.visibility='visible';
}
function schiffZu2(){
$('Log2').style.visibility='hidden';
}
function Takelage(){
$('DTakelageFenster').style.visibility='visible';
}
function Rumpf(){
$('DRumpfFenster').style.visibility='visible';
}
function Service(){
$('DServiceFenster').style.visibility='visible';
}function TakelageZu(){
$('DTakelageFenster').style.visibility='hidden';
}
function RumpfZu(){
$('DRumpfFenster').style.visibility='hidden';
}
function ServiceZu(){
$('DServiceFenster').style.visibility='hidden';
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
function DHafenExpeditionsSchiff(){
alert('Expedition Starten');
}
function DHafenAngeln(){
alert('Angeln');
}
function DHafenReparieren(){
	if((player.Geld-D.ReparierKurs)>=0){
D.Geld+=D.ReparierKurs;
player.Geld-=D.ReparierKurs;
SchiffZustand+=5;
}
}
function DGovernour(){
$('DGovernour').style.visibility='visible';
}
function DGovernourExit(){
$('DGovernour').style.visibility='hidden';
}
function DGovernourInfo(){
}
function DGovernourHome(){
}

kaufen=function(that,what,ware,menge,wertenderung){

var DGesamtGewicht=((player.Kaffee*DGewicht.Kaffee)+(player.Tabak*DGewicht.Tabak)+(player.Zuckerrohr*DGewicht.Zuckerrohr)+(player.Rum*DGewicht.Rum)+(player.Baumwolle*DGewicht.Baumwolle)+(player.Perlen*DGewicht.Perlen)+(player.Segeltuch*DGewicht.Segeltuch)+(player.Hanf*DGewicht.Hanf)+(player.Teer*DGewicht.Teer)+(player.Holz*DGewicht.Holz)+(player.Pulver*DGewicht.Pulver)+(player.Kugeln*DGewicht.Kugeln)+(player.Kanonen*DGewicht.Kanonen)+(player.Nahrung*DGewicht.Nahrung));

	for(var i=0;i<warenliste.length;i++){
		if(warenliste[i].id==that){
			for(var j=0;j<preisliste.length;j++){
				if(preisliste[j].id==what){
					
					if(ware=='Kaffee'){
					if(DGesamtGewicht+(DGewicht.Kaffee*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Kaffee*menge>=0){
						warenliste[i].Kaffee+=menge;
						warenliste[i].Geld-=preisliste[j].Kaffee*menge;
						warenliste[i-1].Geld+=preisliste[j].Kaffee*menge;
						preisliste[j].Kaffee=(preisliste[j].Kaffee*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Tabak'){
					if(DGesamtGewicht+(DGewicht.Tabak*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Tabak*menge>=0){
							warenliste[i].Tabak+=menge;
							warenliste[i].Geld-=preisliste[j].Tabak*menge;
							warenliste[i-1].Geld+=preisliste[j].Tabak*menge;
							preisliste[j].Tabak=(preisliste[j].Tabak*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Zuckerrohr'){
					if(DGesamtGewicht+(DGewicht.Zuckerrohr*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Zuckerrohr*menge>=0){
							warenliste[i].Zuckerrohr+=menge;
							warenliste[i].Geld-=preisliste[j].Zuckerrohr*menge;
							warenliste[i-1].Geld+=preisliste[j].Zuckerrohr*menge;
							preisliste[j].Zuckerrohr=(preisliste[j].Zuckerrohr*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Rum'){
					if(DGesamtGewicht+(DGewicht.Rum*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Rum*menge>=0){
							warenliste[i].Rum+=menge;
							warenliste[i].Geld-=preisliste[j].Rum*menge;
							warenliste[i-1].Geld+=preisliste[j].Rum*menge;
							preisliste[j].Rum=(preisliste[j].Rum*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Baumwolle'){
					if(DGesamtGewicht+(DGewicht.Baumwolle*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Baumwolle*menge>=0){
							warenliste[i].Baumwolle+=menge;
							warenliste[i].Geld-=preisliste[j].Baumwolle*menge;
							warenliste[i-1].Geld+=preisliste[j].Baumwolle*menge;
							preisliste[j].Baumwolle=(preisliste[j].Baumwolle*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Perlen'){
					if(DGesamtGewicht+(DGewicht.Perlen*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Perlen*menge>=0){
							warenliste[i].Perlen+=menge;
							warenliste[i].Geld-=preisliste[j].Perlen*menge;
							warenliste[i-1].Geld+=preisliste[j].Perlen*menge;
							preisliste[j].Perlen=(preisliste[j].Perlen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Segeltuch'){
					if(DGesamtGewicht+(DGewicht.Segeltuch*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Segeltuch*menge>=0){
							warenliste[i].Segeltuch+=menge;
							warenliste[i].Geld-=preisliste[j].Segeltuch*menge;
							warenliste[i-1].Geld+=preisliste[j].Segeltuch*menge;
							preisliste[j].Segeltuch=(preisliste[j].Segeltuch*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Hanf'){
					if(DGesamtGewicht+(DGewicht.Hanf*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Hanf*menge>=0){
							warenliste[i].Hanf+=menge;
							warenliste[i].Geld-=preisliste[j].Hanf*menge;
							warenliste[i-1].Geld+=preisliste[j].Hanf*menge;
							preisliste[j].Hanf=(preisliste[j].Hanf*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Teer'){
					if(DGesamtGewicht+(DGewicht.Teer*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Teer*menge>=0){
							warenliste[i].Teer+=menge;
							warenliste[i].Geld-=preisliste[j].Teer*menge;
							warenliste[i-1].Geld+=preisliste[j].Teer*menge;
							preisliste[j].Teer=(preisliste[j].Teer*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Holz'){
					if(DGesamtGewicht+(DGewicht.Holz*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Holz*menge>=0){
							warenliste[i].Holz+=menge;
							warenliste[i].Geld-=preisliste[j].Holz*menge;
							warenliste[i-1].Geld+=preisliste[j].Holz*menge;
							preisliste[j].Holz=(preisliste[j].Holz*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Pulver'){
					if(DGesamtGewicht+(DGewicht.Pulver*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Pulver*menge>=0){
							warenliste[i].Pulver+=menge;
							warenliste[i].Geld-=preisliste[j].Pulver*menge;
							warenliste[i-1].Geld+=preisliste[j].Pulver*menge;
							preisliste[j].Pulver=(preisliste[j].Pulver*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kugeln'){
					if(DGesamtGewicht+(DGewicht.Kugeln*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Kugeln*menge>=0){
							warenliste[i].Kugeln+=menge;
							warenliste[i].Geld-=preisliste[j].Kugeln*menge;
							warenliste[i-1].Geld+=preisliste[j].Kugeln*menge;
							preisliste[j].Kugeln=(preisliste[j].Kugeln*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kanonen'){
						if(DGesamtGewicht+(DGewicht.Kanonen*menge)<=MaximalLadung){
							if(warenliste[i].Geld-preisliste[j].Kanonen*menge>=0){
								warenliste[i].Kanonen+=menge;
								warenliste[i].Geld-=preisliste[j].Kanonen*menge;
								warenliste[i-1].Geld+=preisliste[j].Kanonen*menge;
								preisliste[j].Kanonen=(preisliste[j].Kanonen*wertenderung).toFixed(2);
							}
						}
					}
					if(ware=='Nahrung'){
					if(DGesamtGewicht+(DGewicht.Nahrung*menge)<=MaximalLadung){
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
						if(D.Geld-preisliste[j].Kaffee*menge>=0){
							if(warenliste[i].Kaffee-menge>=0){
								warenliste[i].Kaffee-=menge;
								warenliste[i].Geld+=eval(preisliste[j].Kaffee*menge);
								warenliste[i-1].Geld-=eval(preisliste[j].Kaffee*menge);
								preisliste[j].Kaffee=(preisliste[j].Kaffee*wertenderung).toFixed(2);
								
							}
						}
					}
					if(ware=='Tabak'){
					if(D.Geld-preisliste[j].Tabak*menge>=0){
						if(warenliste[i].Tabak-menge>=0){
							warenliste[i].Tabak-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Tabak*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Tabak*menge);
							preisliste[j].Tabak=(preisliste[j].Tabak*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Zuckerrohr'){
					if(D.Geld-preisliste[j].Zuckerrohr*menge>=0){
						if(warenliste[i].Zuckerrohr-menge>=0){
							warenliste[i].Zuckerrohr-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Zuckerrohr*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Zuckerrohr*menge);
							preisliste[j].Zuckerrohr=(preisliste[j].Zuckerrohr*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Rum'){
					if(D.Geld-preisliste[j].Rum*menge>=0){
						if(warenliste[i].Rum-menge>=0){
							warenliste[i].Rum-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Rum*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Rum*menge);
							preisliste[j].Rum=(preisliste[j].Rum*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Baumwolle'){
					if(D.Geld-preisliste[j].Baumwolle*menge>=0){
						if(warenliste[i].Baumwolle-menge>=0){
							warenliste[i].Baumwolle-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Baumwolle*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Baumwolle*menge);
							preisliste[j].Baumwolle=(preisliste[j].Baumwolle*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Perlen'){
					if(D.Geld-preisliste[j].Perlen*menge>=0){
						if(warenliste[i].Perlen-menge>=0){
							warenliste[i].Perlen-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Perlen*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Perlen*menge);
							preisliste[j].Perlen=(preisliste[j].Perlen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Segeltuch'){
					if(D.Geld-preisliste[j].Segeltuch*menge>=0){
						if(warenliste[i].Segeltuch-menge>=0){
							warenliste[i].Segeltuch-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Segeltuch*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Segeltuch*menge);
							preisliste[j].Segeltuch=(preisliste[j].Segeltuch*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Hanf'){
					if(D.Geld-preisliste[j].Hanf*menge>=0){
						if(warenliste[i].Hanf-menge>=0){
							warenliste[i].Hanf-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Hanf*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Hanf*menge);
							preisliste[j].Hanf=(preisliste[j].Hanf*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Teer'){
					if(D.Geld-preisliste[j].Teer*menge>=0){
						if(warenliste[i].Teer-menge>=0){
							warenliste[i].Teer-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Teer*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Teer*menge);
							preisliste[j].Teer=(preisliste[j].Teer*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Holz'){
					if(D.Geld-preisliste[j].Holz*menge>=0){
						if(warenliste[i].Holz-menge>=0){
							warenliste[i].Holz-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Holz*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Holz*menge);
							preisliste[j].Holz=(preisliste[j].Holz*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Pulver'){
					if(D.Geld-preisliste[j].Pulver*menge>=0){
						if(warenliste[i].Pulver-menge>=0){
							warenliste[i].Pulver-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Pulver*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Pulver*menge);
							preisliste[j].Pulver=(preisliste[j].Pulver*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kugeln'){
					if(D.Geld-preisliste[j].Kugeln*menge>=0){
						if(warenliste[i].Kugeln-menge>=0){
							warenliste[i].Kugeln-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kugeln*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Kugeln*menge);
							preisliste[j].Kugeln=(preisliste[j].Kugeln*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kanonen'){
					if(D.Geld-preisliste[j].Kanonen*menge>=0){
						if(warenliste[i].Kanonen-menge>=0){
							warenliste[i].Kanonen-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kanonen*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Kanonen*menge);
							preisliste[j].Kanonen=(preisliste[j].Kanonen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Nahrung'){
					if(D.Geld-preisliste[j].Nahrung*menge>=0){
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
