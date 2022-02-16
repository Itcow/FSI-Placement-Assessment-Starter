// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Ian Cowcer" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle




let gbTotal= document.querySelector("#qty-gb")

let sugarTotal= document.querySelector("#qty-sugar")

let ccTotal= document.querySelector("#qty-cc")


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector("#minus-gb")

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector("#minus-cc")

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector("#minus-sugar")

// Code to update name display
credit.textContent = `Created by ${yourName}`

//Gingerbread Cookies
gbPlusBtn.addEventListener('click', function() {
console.log('Gingerbread + button was clicked!')
    gb++
    gbTotal.textContent = gb 
    total(gb,cc,sugar) 
})

gbMinusBtn.addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
      if(gb > 0) {gb--
        gbTotal.textContent = gb}
        else {gbTotal.textcontent =0}
      total(gb,cc,sugar)
    })

//Chocolate Chip Cookies
ccPlusBtn.addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')
        cc++
        ccTotal.textContent = cc
        total(gb,cc,sugar)

    })

 ccMinusBtn.addEventListener('click', function() {
        console.log('Chocolate Chip - button was clicked!')
           if(cc > 0) {cc--
            ccTotal.textContent = cc}
            else {ccTotal.textContent = 0}
            total(gb,cc,sugar)
    
        })
    
    // Sugar Cookies
sugarPlusBtn.addEventListener('click', function() {
    console.log('sugar + button was clicked!')
        sugar++
        sugarTotal.textContent = sugar
        total(gb,cc,sugar)
        
    })

    sugarMinusBtn.addEventListener('click', function() {
        console.log('sugar - button was clicked!')
            if(sugar > 0) {sugar--
            sugarTotal.textContent = sugar}
            else {sugarTotal.textContent = 0}
            total(gb,cc,sugar)
            
        })

    
    
    // TODO: Hook up event listeners for the rest of the buttons
    function total(gb,cc,sugar){
        document.querySelector("#qty-total").textContent = gb+cc+sugar;
    }