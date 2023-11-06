/*************************
 *      Position Setup
 ************************/

//If any of these are a 3 or -3, then that triggers a win condition
const threeInRowCount = {
    lvert: 0,
    mvert: 0,
    rvert: 0,
    thoriz: 0,
    mhoriz: 0,
    bhoriz: 0,
    lrdiag: 0,
    rldiag: 0
}


/***********************
 * Global Variables
 **********************/

const resetButton = document.querySelector("#reset-button")
const tickBoxes = document.querySelectorAll(".tick-box");
const container = document.querySelector(".container");
let toggleXorO = false;

//calls a draw after reaching 9 without a win condition
let totalCount = 0;

/*************************
 *      Event Listeners
 ************************/
container.addEventListener("click", onTickBoxClick)

resetButton.addEventListener("click", resetTickTack)


/********************
 *      Functions
 *******************/

function onTickBoxClick(event)
{

    //Itterates through all the targets classes and adds to the count of that respective class
    let divClasses = event.target.classList
    for (let divClass of divClasses)
    {

        divClass = divClass.replace('-', '')

        if(event.target.children.length == 0)
        {
            if (divClass != "tickbox" && !toggleXorO)
            {
                threeInRowCount[divClass]++
            }
            else if (divClass != "tickbox" && toggleXorO)
            {
                threeInRowCount[divClass]--
            }
        }
    }


/*****************************
 *      X and O Creation
 ****************************/

    // *-- Making and Appending p Elements to TickBox Div ---*

    // Variables to append X or O to the targeted TickBox Div
    let xoParElement = document.createElement('p')
    xoParElement.className = 'text'
    let parentTickBox = document.querySelector('#' + event.target.id)
    
    if (!toggleXorO && event.target.children.length == 0)
    {
        xoParElement.textContent = 'X'
        parentTickBox.appendChild(xoParElement)
        toggleXorO = !toggleXorO
        totalCount++
    }
    else if (toggleXorO && event.target.children.length == 0)
    {
        xoParElement.textContent = 'O'
        parentTickBox.appendChild(xoParElement)
        toggleXorO = !toggleXorO
        totalCount++
    }
    
    checkThreeInARow()
}


/************************
 *  Win/Lose Checks
 ***********************/

//Iterates through threeInRowCount and checks if any meet a win condition
function checkThreeInARow()
{
    for (const key in threeInRowCount) 
    {
        if (threeInRowCount[key] >= 3)
        {
            // This is the X win State
            resetTickTack()
            alert(" X wins! Congratulations!")
            
        }
        else if (threeInRowCount[key] <= -3)
        {
            // This is the O win State
            resetTickTack()
            alert(" O wins! Congratulations!")
        }
    }
    if (totalCount >= 9)
    {
        // This is a Draw State
        resetTickTack()
        alert("Oh No, a Draw!")
    }
}


/*********************** 
 *    Reset Function
***********************/

function resetTickTack()
{
    let xnOs = document.querySelectorAll('.text')

    for (let element of xnOs)
    {
        element.remove()
    }

    for (let key in threeInRowCount)
    {
        threeInRowCount[key] = 0
    }

    totalCount = 0
    toggleXorO = false
}


/*********************** 
 * ScoreBoard Function
***********************/

function updateScoreBoard()
{

}