var txta = prompt("Enter any integer:");

if (txta == null || txta == "" || isNaN(txta)) {
    document.write("<font color='red'>You must enter a number!</font>");
} else if(txta % 2 == 0){
    document.write("<font color='green'>Number " + txta + " is even</font>");
}
else{  
    document.write("<font color='blue'>Number " + txta + " is odd</font>");
}
