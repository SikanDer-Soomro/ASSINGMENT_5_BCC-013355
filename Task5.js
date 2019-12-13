/*ASSINGMENT NUMBER 5*/
/*Task.5 A cashier has currency notes of denominations 10, 50 and 100. If the
amount to be withdrawn is input through the keyboard in hundreds,
find the total number of currency notes of each denomination the
cashier will have to give to the withdrawer. */

function currencyNotes() {
    var amount            = prompt("Please Enter Your Amount Need to withdrawn");
    var hundred           = Math.floor(amount / 100);
    var fifty             = Math.floor(amount % 100) / 50;
    var ten               = Math.floor((amount % 100) % 50) / 10;
    var remainingBalance  = Math.floor(((amount % 100) % 50) % 10);
    document.write(" You will have " + hundred + " hundred notes, " + fifty + " fifty notes, " + ten +
     " ten notes, ");
}

currencyNotes();