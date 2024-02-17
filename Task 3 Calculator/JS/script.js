//  or is sa humera input box access ho gaya hai ......

let input = document.getElementById('inputBox');

//  is sa sara button access hogaya hai....

let buttons = document.querySelectorAll('button');

// result storing of empty string...... & show the inputBox 
let string =  "";
// yha pr button variable pass kerna hai........ & make array
let arr = Array.from(buttons);

// foreach loop buttons pr wrk nhi kerta hai isliya humna button ko array mai kiya hia kyuki for each loop array pr chal sakta hai...

// or yha pr aerrow or call function chal sakta....

arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;

        }

    })
})