/* Begin Challenge 1 */

var cupsConsumed = prompt("Would you like another cup of coffee? (Enter the cups of coffee you've currently consumed)", 4)

if (cupsConsumed < 3)
{
    console.log("Yes I'll take another cup of coffee.")
}

else{
    console.log("I think I'm okay for now.")
}

/* Begin Challenge 3 */

for(i=99; i>=0; i--)
{
    if (i > 1)
    {
       console.log(i + " bottles of root beer on the wall");
    }
    
    else if (i === 1)
    {
       console.log(i + " bottle of root beer on the wall");
    }

    else if (i === 0)
    {
       console.log("Hey! We need more root beer!");
    }
}

/* End Challenges */