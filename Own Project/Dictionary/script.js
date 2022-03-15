// New approach JSON

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let display = document.querySelector('#display');

var inputField = document.querySelector('#inputField');
inputField.addEventListener('input', fetchData);

    function fetchData(){
        let wordDic = document.querySelector('#inputField').value;
        fetch(`${url}${wordDic}`)
        .then((response) => response.json())
        .then((data) =>{
          
            console.log(data)
                    
            display.innerHTML = `
            <div id="headDisplay">
            <h1>${wordDic}</h1>
            <p class="noun">
                ${data[0].meanings[0].partOfSpeech}
                <span> | ${data[0].phonetics[1].text}</span>        
            </p>
        </div>
        <br>
        <div id="textDisplay"> 
            <p><b>Definition:</b></p>  
          <p>${data[0].meanings[0].partOfSpeech.definitions}</p>
        </div>
            <br>
        <div id="examples">
            <p><b>Examples:</b></p>
            <p></p>
        </div>
        <br>
        <div id="origin">
            <p><b>Origin</b></p>
            <p></p>
        </div>
            <br>
        <div id="syn">
            <p><b>Synonyms</b></p>
            <p></p>
        </div> 
            `;  
        
        //scartch code
        //     display.innerHTML = 
        //     ` <div id="display">
        //     <div id="headDisplay">
        //         <h1>${wordDic}</h1>
        //     </div>
        //     <div id="textDisplay">
        //       <p>${data[i].meanings[0]}</p>
        //       <p>${data[i].phonetic[0]}</p>
        //       <p>${data[i].meanings[0]}</p>
        //     </div>
        // </div>`;

})};




// old ways method

// function fetchData(){
    //     var wordDic = document.querySelector('#btnSearch').value

    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/'+wordDic);

    //     xhr.onload = function(){
    //         if(this.status == 200){
    //             textDisplay.style.color="white";
    //             var textDic = JSON.parse(this.responseText);
            
    //             var display = '';
    //             for(let i=0; i<textDic.length; i++){
    //                display += 
    //                 '<div id="display">'+
    //                 '<div id="headDisplay">'+
    //                     '<h1>'+textDic[i].word+'</h1>'+
    //                 '</div>'+
    //                 '<div id="textDisplay">'+   
    //                   '<p>'+textDic[i].meanings+'</p>'+
    //                   '<p>'+textDic[i].partOfSpeech+'</p>'+
    //                   '<p>'+textDic[i].definition+'</p>'+
    //                   '<p>'+textDic[i].definition+'</p>'+
    //                   '<p>'+textDic[i].synonyms+'</p>'+
    //                   '<p>'+textDic[i].antonyms+'</p>'+
    //                   '<p>'+textDic[i].partOfSpeech+'</p>'
    //                   +'</div>'
    //             +'</div>'
    //             }
    //             document.querySelector('#textDisplay').innerHTML = display;
    //         }
    //     }

    //     xhr.send();
    // }

