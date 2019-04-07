
var inpText  = document.getElementById('text')
var Ptranslation = document.getElementById('translation')
var codeMorce = {
    "a" : "._","b" : "_...","c" : "_._.","d" : "_..","e" : ".","f" : ".._.","g" : "__.","h" : "....","i" : "..","j" : ".___","k" : "_._","l" : "._..","m" : "__","n" : "_.","o" : "___","p" : ".__.","q" : "__._","r" : "._.","s" : "...","t" : "_","u" : ".._","v" : "..._","w" : ".__","x" : "_.._","y" : "_.__","z" : "__.."," " : "/",1   : ".____",2   : "..___",3   : "...__",4   : "...._",5   : ".....",6   : "_....",7   : "__...",8   : "___..",9   : "____.",0   : "_____"
}
var tab = []
inpText.addEventListener('keyup', (e)=>{
    if(e.keyCode < 91 && e.keyCode > 64){
        tab = inpText.value.split('')
        tab[tab.length - 1] = codeMorce[tab[tab.length - 1]]
        Ptranslation.innerText += tab[tab.length - 1]
    }
    else if(e.keyCode == 8){
        tab.pop()
    }
})
