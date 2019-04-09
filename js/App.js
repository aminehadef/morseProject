
var inpText  = document.getElementById('text')
var Ptranslation = document.getElementById('translation')
var hisTxt = ''
var lastCaracInp
var morse
var txt
var lenMorse
var codeMorce = {
    "a" : "._","b" : "_...","c" : "_._.","d" : "_..","e" : ".","f" : ".._.","g" : "__.","h" : "....","i" : "..","j" : ".___","k" : "_._","l" : "._..","m" : "__","n" : "_.","o" : "___","p" : ".__.","q" : "__._","r" : "._.","s" : "...","t" : "_","u" : ".._","v" : "..._","w" : ".__","x" : "_.._","y" : "_.__","z" : "__.."," " : "/",1   : ".____",2   : "..___",3   : "...__",4   : "...._",5   : ".....",6   : "_....",7   : "__...",8   : "___..",9   : "____.",0   : "_____"
}

function findByKey(key){
    return codeMorce[key]
}
function findByValue(value){
    for([key, value1] of Object.entries(codeMorce)){
        if (value1 == value) {
            return key
        }   
    }
}
inpText.addEventListener('keyup', (e)=>{
    if(e.keyCode < 91 && e.keyCode > 64 || e.keyCode == 32){
        lastCaracInp = inpText.value.substr(inpText.value.length - 1)
        hisTxt = lastCaracInp
        morse = findByKey(lastCaracInp)
        txt = findByValue(findByKey(lastCaracInp))
        lenMorse = morse.length

        Ptranslation.innerText += morse

    }else if(e.keyCode == 8){
        lenMorse = morse.length
        Ptranslation.innerText = Ptranslation.innerText.slice(0, lenMorse)

        lastCaracInp = inpText.value.substr(inpText.value.length - 1)
        hisTxt = lastCaracInp
    } 
})
