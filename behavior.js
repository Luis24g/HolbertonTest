document.addEventListener("DOMContentLoaded", function(event) {

    let thumbnailElement =document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {
        thumbnailElement.className = thumbnailElement.className === 'small'?'image-big':'small';
      });

});