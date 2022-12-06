var modal = document.getElementById('myModal');

document.addEventListener('click', event=>{if (event.target.localName == "img" && event.which == 1) {img=event.target;console.log(img.src);var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");modal.style.display = "block";modalImg.src = img.src;captionText.innerHTML = img.alt;};});

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
