
var inpText  = document.getElementById('text')
var Ptranslation = document.getElementById('translation')
var button = document.getElementById('button')
var codeMorce = {
    "a" : {
        "value"  : "._",
        "length" : 2
    },
    "b" : {
        "value" : "_...",
        "length" : 4
    },
    "c" : {
        "value" : "_._.",
        "length" : 4
    },
    "e" : 
    {
        "value" :".",
        "length" : 1
    },
    "f" : 
    {
        "value" :".._.",
        "length" : 4
    },
    "d" : 
    {
        "value" :"_..",
        "length" : 3
    },
    "g" : 
    {
        "value" :"__.",
        "length" : 3
    },
    "h" : 
    {
        "value" :"....",
        "length" : 4
    },
    "i" : 
    {
        "value" :"..",
        "length" : 2
    },
    "j" : 
    {
        "value" :".___",
        "length" : 4
    },
    "k" : 
    {
        "value" :"_._",
        "length" : 3
    },
    "l" : 
    {
        "value" :"._..",
        "length" : 4
    },
    "m" : 
    {
        "value" :"__",
        "length" : 2
    },
    "n" : 
    {
        "value" :"_.",
        "length" : 2
    },
    "o" : 
    {
        "value" :"___",
        "length" : 3
    },
    "p" : 
    {
        "value" :".__.",
        "length" : 4
    },
    "q" : 
    {
        "value" :"__._",
        "length" : 4
    },
    "r" : 
    {
        "value" :"._.",
        "length" : 3
    },
    "s" : 
    {
        "value" :"...",
        "length" : 3
    },
    "t" : 
    {
        "value" :"_",
        "length" : 1
    },
    "u" : 
    {
        "value" :".._",
        "length" : 3
    },
    "v" : 
    {
        "value" :"..._",
        "length" : 4
    },
    "w" : 
    {
        "value" :".__",
        "length" : 3
    },
    "x" : 
    {
        "value" :"_.._",
        "length" : 4
    },
    "y" : 
    {
        "value" :"_.__",
        "length" : 4
    },
    "z" : 
    {
        "value" :"__..",
        "length" : 4
    },
    " " : 
    {
        "value" :"/",
        "length" : 1
    },
    1   : 
    {
        "value" :".____",
        "length" : 5
    },
    2   : 
    {
        "value" :"..___",
        "length" : 5
    },
    3   : 
    {
        "value" :"...__",
        "length" : 5
    },
    4   : 
    {
        "value" :"...._",
        "length" : 5
    },
    5   : 
    {
        "value" :".....",
        "length" : 5
    },
    6   : 
    {
        "value" :"_....",
        "length" : 5
    },
    7   : 
    {
        "value" :"__...",
        "length" : 5
    },
    8   : 
    {
        "value" :"___..",
        "length" : 5
    },
    9   : 
    {
        "value" :"____.",
        "length" : 5
    },
    0   : 
    {
        "value" :"_____",
        "length" : 5
    }
}
inpText.addEventListener('keyup', ()=>{
    Ptranslation.innerHTML = ''
    var expInpText = inpText.value.split('')
    for(let i = 0; i < expInpText.length; i++){
        Ptranslation.innerHTML += codeMorce[expInpText[i]].value
    }
})