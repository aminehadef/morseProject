var inpText  = document.getElementById('text')
var Ptranslation = document.getElementById('translation')
var play = document.getElementById('play')
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
inpText.addEventListener('keyup', (e)=>{
    if(e.keyCode > 64 && e.keyCode < 91 || e.keyCode > 95 && e.keyCode < 106 || e.keyCode == 8){
        Ptranslation.innerHTML = ''
        var expInpText = inpText.value.split('')
        for(let i = 0; i < expInpText.length; i++){
            Ptranslation.innerHTML += codeMorce[expInpText[i]].value
        }
    }
    if (Ptranslation.innerHTML.length > 0) {
        play.style.display = "block"
    }
    else{
        play.style.display = "none"
    }
})
play.addEventListener('click', ()=>{
    var expMorseTxt = Ptranslation.innerHTML.split('')
    var i = 0;
    var interv = setInterval(()=>{
        if (i == expMorseTxt.length - 1) {
            clearInterval(interv)
        }
        if (expMorseTxt[i] == '.') {
            console.log('bip');
            bip(150)
        }
        else if(expMorseTxt[i] == '_'){
            console.log('biiip');
            bip(300)
        }else{
            console.log('/'); 
            bip(500)  
        }
        i++
    },1000)
})

function bip(time){
    const ctxAudion = new (window.AudioContext || window.webkitAudioContext)
    const osc = ctxAudion.createOscillator()
    osc.type = 'triangle'
    osc.frequency.value = 150
    osc.start()
    osc.connect(ctxAudion.destination)
    var interval = setInterval(()=>{
        osc.disconnect(ctxAudion.destination)
        clearInterval(interval)
    },time)
}
