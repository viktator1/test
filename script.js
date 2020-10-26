var a=prompt("Unesite prvi broj");
var b=prompt("Unesite drugi broj");
var operacija=prompt("Unesite zeljenu operaciju(+,-,*,/)");
switch(operacija){
	case "+": var c=Number(a) + Number(b); alert("Rezultat je: "+ c);break;
	case "-": alert("Rezultat je: "+ (a-b));break;
	case "*": alert("Rezultat je: "+ (a*b));break;
	case "/": alert("Rezultat je: "+ (a/b));break;
	default:alert("Nepostojeca operacija");break;
}


