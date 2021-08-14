var it = 0;
var lowcol_valid = false;
var highcol_valid = false;
var lowrow_valid = false;
var highrow_valid = false;

//makes sure that user input is valid using javascript
//check for numbers exceeding the range
//check for decimals
//check for characters
var invalidChars = ["e"];

$("input[type='number']").on("keydown", function(e){  //doesn't allow the value e
    if(invalidChars.includes(e.key)){
         e.preventDefault();
    }
});

function error_check() { //checks for user errors and provides messages based on the errors

    var lowcol = Math.floor(document.getElementById("lowcol").value); //math.floor() rounds down decimals
    var highcol = Math.floor(document.getElementById("highcol").value);
    var lowrow = Math.floor(document.getElementById("lowrow").value);
    var highrow = Math.floor(document.getElementById("highrow").value);
    console.log(lowcol);
    lowcol_valid = false;
    highcol_valid = false;
    lowrow_valid = false;
    highrow_valid = false;

    
    if (lowcol > 50 || lowcol < -50 ) {
        text = "Please enter an integer value from -50 to 50 (inclusive)";
        document.getElementById("demo").innerHTML = text;
    } 


    else {
        lowcol_valid = true;
        text = "valid";
        document.getElementById("demo").innerHTML = text;
    }
    



    if (highcol > 50 || highcol < -50 || (highcol - lowcol) < 0 ) {

        if((highcol - lowcol) < 0) {
            text = "Please make sure the ending x value is larger than the starting x value";
            document.getElementById("demo2").innerHTML = text;
        }

        else {
            text = "Please enter an integer value from -50 to 50 (inclusive)";
            document.getElementById("demo2").innerHTML = text;
        }
    }


    else {
        highcol_valid = true;
        text = "valid";
        document.getElementById("demo2").innerHTML = text;
    }




    if (lowrow > 50 || lowrow < -50) {
        text = "Please enter an integer value from -50 to 50 (inclusive)";
        document.getElementById("demo3").innerHTML = text;
    }

    else {
        lowrow_valid = true;
        text = "valid";
        document.getElementById("demo3").innerHTML = text;
    }

    


    if (highrow > 50 || highrow < -50 || (highrow - lowrow) < 0) {
        
        console.log((highrow - lowrow));
        if((highrow - lowrow) < 0) {
            text = "Please make sure the ending y value is larger than the starting y value";
            document.getElementById("demo4").innerHTML = text;
        }

        else {
            text = "Please enter an integer value from -50 to 50 (inclusive)";
            document.getElementById("demo4").innerHTML = text;
        }
    }


    else {
        highrow_valid = true;
        text = "valid";
        document.getElementById("demo4").innerHTML = text;
    }



    
    if (lowcol_valid == true && highcol_valid == true && 
        lowrow_valid == true && highrow_valid == true) {
        create_table();
    }

}

//some code from this function was taken from https://stackoverflow.com/questions/14643617/create-table-using-javascript
//function generates the table
function create_table() {

    var lowcol = Math.floor(document.getElementById("form3").elements[0].value);
    var highcol = Math.floor(document.getElementById("form3").elements[1].value);
    var lowrow = Math.floor(document.getElementById("form3").elements[2].value);
    var highrow = Math.floor(document.getElementById("form3").elements[3].value);

    var num = Number(lowcol);
    var num2 = Number(lowrow);

    //html elements are imported
    var tablearea = document.getElementById('tablearea');
    var tbl = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '2px solid black';

    //table is made based on template from stackoverflow
    for(var i = lowrow-1; i <= highrow; i++){
        var tr = tbl.insertRow();

        for(var j = lowcol-1; j <= highcol; j++) {

            var td = tr.insertCell();

            if(i == lowrow-1 && j == lowcol-1) {
                td.appendChild(document.createTextNode(''));
            }

            else if (i == (lowrow-1)) {
                td.appendChild(document.createTextNode((num)));
                num = num + 1;
            }

            else if (j == (lowcol-1)) {
                td.appendChild(document.createTextNode((num2)));
                num2 = num2 + 1;
            }

            else {
                td.appendChild(document.createTextNode(i*j));
                if (i == lowrow-1 && j != lowcol-1) {
                    td.appendChild(document.createTextNode(i));
                }
            }
            td.style.border = '2px solid black';
        }
    }

    if (it > 0) { //replaces old table
        var table1 = document.getElementById('table1');
        tablearea.removeChild(table1);
        console.log(1);
    }

    tbl.setAttribute('id', 'table1');
    tablearea.appendChild(tbl);
    
    it++;
}
