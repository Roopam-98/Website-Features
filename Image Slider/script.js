let imageArray = ['./images/bee-eater-with-multicolored-feathers-open-wings-sitting-branch-tree.jpg','./images/nature-flowers-petals-1034464.jpg',
    './images/pexels-brunocervera-3298934.jpg','./images/pexels-cottonbro-3661193.jpg','./images/pexels-fotios-photos-1314133.jpg',
    './images/pexels-tima-miroshnichenko-5710593.jpg'
];

function setImage(i){
    let setImg = imageArray[i];
    setTimeout(()=>{
        document.querySelector('.image-container').innerHTML = `<img src="${setImg}" class="image" data-image="${setImg}">`;
    },0.01);
}

setImage(0);



const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

nextButton.addEventListener('click',()=>{
    let currentImg = document.querySelector('.image').dataset.image;
    let matchingIndex = 0;
    for(let i=0;i<imageArray.length; i++){
        if(currentImg === imageArray[i]){
            matchingIndex = i;
        }
    }

    if(matchingIndex === imageArray.length-1){
        setImage(0);
    }
    else{
        setImage(matchingIndex+1);
    }
})

previousButton.addEventListener('click',()=>{
    let currentImg = document.querySelector('.image').dataset.image;
    let matchingIndex = imageArray.length-1;
    for(let i=0;i<imageArray.length; i++){
        if(currentImg === imageArray[i]){
            matchingIndex = i;
        }
    }

    if(matchingIndex === 0){
        setImage(imageArray.length-1);
    }
    else{
        setImage(matchingIndex-1);
    }

})
