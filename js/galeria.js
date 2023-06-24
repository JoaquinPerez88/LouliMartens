const images = document.querySelectorAll ('.img');
const containerImage = document.querySelector('.generalImagenes');
const imageContainer = document.querySelector('.generalShow');
const closeModal = document.querySelector ('.bx.bx-x')
images.forEach(image=>{
    image.addEventListener ('click', ()=>{
        
        addImage(image.getAttribute('src'),image.getAttribute('alt'));
        
})
})

const addImage = (srcImage,altImage)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src =  srcImage;
    

}

closeModal.addEventListener('click',()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
 
})