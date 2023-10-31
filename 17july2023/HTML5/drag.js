document.querySelectorAll('.drop-zone_input').forEach(inputElement => {
    const dropZoneElement = inputElement.closest('.drop-zone');

    dropZoneElement.addEventListener('click',function() {
        inputElement.click();
    });
    inputElement.addEventListener('change',function(event){
      displayThumbnaliImage(dropZoneElement,event.target.files[0]);
    })
});
function displayThumbnaliImage(dropZoneElement, file) {
    const dropZonePrompt = document.querySelector('.drop-zone_prompt');
    if(dropZonePrompt){
        dropZonePrompt.remove();
    }
    const thumbnaliElement = document.querySelector('.drop-zone_thumb');
    if(!thumbnaliElement){
        const div = document.createElement('div');
        div.classList.add('drop-zone_thumb');
        dropZoneElement.appendChild(div);
    }
    if(file.type.includes('image/')) {
        const thumbnaliElement = document.querySelector('.drop-zone_thumb');

           thumbnaliElement.dataset.label = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        console.log(reader.result);
        thumbnaliElement.style.backgroundImage = `url(${reader.result})`;
    }
  }
}