GLOBAL VARIABLES

    "cells" a list of all boxes
    "board" that references the playeable area
    "currentPlayer" that starts as the string "X"


EVENT LISTENERS

    one on "board" listening for clicks


FUNCTIONS

    "handleClick" 
        - adds the "X" or "O" to the game board
        - executes the game logic with an if statement that calls other functions
        - switches the "currentPlayer" from "X" to "O" and vice versa

    "checkWinner"
        - has an array of arrays that represent winning combinations
        - because it takes 3 in a row to win, each nested array should have 
          3 numbers that represent the index of a cell from the "cells" global variable
          HINT: console.log "cells" and hover over each to get a better idea
        - loop over the nested array to check for 3 in a row
        - should return a boolean

    "isDraw"
        - loop over the "cells" to determine whether all spaces have been played
        - should return a boolean 

    "resetGame"
        - loop over the "cells" and clear out the X's and O's
        - reset the "currentPlayer"
