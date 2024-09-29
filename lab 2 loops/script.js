function functionExample(){
    //Delcare variables 
    let x = 3;
    let y = "Hello";
    let z = true;

    //Display the data types of those variables using the type of operator
    alert(typeof(x));
    alert(typeof(y));
    alert(typeof(z));

    //Display content of variabales
    alert("The contents of x are " + x+ " y contains "+ y + " and the variable z holds "+z);

    //Demonstrate bad programming but how javascript will still run it if we change the variable
    //contents and its data type
    y = 22.723

    //data type is now changed
    alert(typeof(y));
    //contents are changed too
    alert("The variable y now holds "+ y);
}
function anotherFunction()
{
    let x = 3;
    //a for loop is the same in script as in c#
    for (let i =0 ; i <= x ; i++)
        {
            document.writeln(i);
        }
        alert("The value of i is now " + i);
        alert("The value of x is now " + x);
}