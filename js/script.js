let $ = document
let inputContainer = $.querySelector(".search-input")
let inputElem = $.querySelector("input")
let autocomBox = $.querySelector(".autocom-box")


inputElem.addEventListener("keyup",function(){
    searchVal = inputElem.value

    if (searchVal) {
        inputContainer.classList.add("active") 
        let filterWords = suggestions.filter(function(w){
            return w.toLowerCase().includes(searchVal.toLowerCase())
        })
   
        suggestionsCreate(filterWords)

    } else {
        inputContainer.classList.remove("active") 
    }
})

function suggestionsCreate(words){

    let wrd = words.map(function(word){
        return "<li>"+ word+"</li>"
    });

    let elemList;
    
    if (!wrd.length) {
        elemList = "<li>"+ inputElem.value +"</li>"
    }else{
        elemList = wrd.join('')
    }
    
    autocomBox.innerHTML = elemList 
    selectItemFunc()
}   

function selectItemFunc(){
    let listItems = autocomBox.querySelectorAll("li")
    listItems.forEach(function(lists) {
        lists.addEventListener("click",function(e){
            inputElem.value = e.target.textContent
            inputContainer.classList.remove("active") 
        })
    });
}





