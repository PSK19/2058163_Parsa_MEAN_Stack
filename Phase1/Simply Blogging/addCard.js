function newCard() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var img = document.getElementById("img").value;
    var newDiv = `<div class='col-4'>
                <div class='card text-white bg-dark mb-3' style='width: 15rem; padding: .5em;'>
                <img class='card-img-top' src=' ` + img + `'alt='Card image cap'>
                <div class='card-body'>
                    <h5 class='card-title'>` + title + `</h5>
                    <p class='card-text'>` + content + `</p>
                </div></div></div>`;
    console.log(newDiv);    
    document.getElementById("toAdd").innerHTML += newDiv;
}