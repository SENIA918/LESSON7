let text = document.getElementById('text');
let author = document.getElementById('author');
const btn = document.getElementById('btn');

fetch("https://type.fit/api/quotes?method=getQuote")
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    text.innerHTML = data[0].text;
    author.innerHTML = data[0].author

    btn.addEventListener('click', function() {
      for(let i = 0; i < data.length; i++){
      let a = Math.floor(Math.random() * data.length);
        text.innerHTML = data[a].text;
        author.innerHTML = data[a].author;
      }
    })
  })
 

  



 
 














