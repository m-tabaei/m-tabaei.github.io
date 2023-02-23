var names=new Array();
names[0]="Emma";
names[1]="Jack";
names[2]="Joseph";
names[3]="Julian";
names[4]="Amelia";
names[5]="Isabel";
names[6]="Mia";
names[7]="Luna";
names[8]="Camila";
names[9]="Jaxon";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}