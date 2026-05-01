//Using startsWith

function abc(abc) {
    return abc.startsWith("a") || abc.startsWith("A") ? "starting with a or A" :
        "not starting with a or A";
}
console.log(abc("AudioBufferSourceNode"));


function end(abc) {
    return abc.endsWith("e") || abc.endsWith("E") ? "ending with e or E" :
        "not ending with e or E";
}
console.log(end("AudioBufferSourceNode"));


//Using index 
function starta(word) {
    return word[0] == "a" ? "start with a" : word[0] == "A" ? "start with A" : "try again";
}
console.log(starta("apple"));