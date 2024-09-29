function processLoop()
{
    //Sometimes your function will not work. The first thing you can do is determine whether the function is actually being called
    alert("In function processLoop");
    //Declare Variables
    let mainCount = 0 ;
    let subCount = 0;

    for(mainCount=10; mainCount>5; mainCount--)
    {
        //Write on the webpage
        document.write("Main Counter is at value " + mainCount + "<br/>");
    }


    document.write("End of first loop <br/>");


    for(mainCount=3; mainCount>=0; mainCount--)
    {
        for(subCount=4; subCount>=0; subCount--)
        {
            document.write("Main Count is at " + mainCount + " and Sub Count is at " + subCount + "<br/>")
        }
    }
}


function processIf()
{
    alert("In function processIf");
    //Declare variables
    let num1 = 0;
    let num2 = 0;
    //Take in a number from the user and convert it to an integer
    num1 = parseInt(prompt("Enter a number",""));
    //Take in another number
    num2 = parseInt(prompt("Enter a number",""));

    if(num1>num2)
    {
        alert("First number is largest");
    }
    else if(num2>num1)
    {
        alert("Second number is largest");
    }
    else
    {
        alert("Numbers are equal");
    }

}


function drawShapes()
{
    let shape = '#';
    let count = 0;
    for(count=0;count<=6;count++)
    {
        if(count==0 || count==6)
        {
            document.write("#########</br>");
        }
        else
        {
        //Note: &nbsp is used to write a single space character
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + shape + "<br/>");
        }
    }
}


