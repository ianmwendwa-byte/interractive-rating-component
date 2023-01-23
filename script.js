const ratingNumbers=document.querySelectorAll('label');
const rating =document.getElementById('rating');
const button=document.querySelector('button');
const thankYou =document.getElementById('thank-you');
const main =document.querySelector('main');
const one =document.getElementById('1');
const two =document.getElementById('2');
const three=document.getElementById('3');
const four =document.getElementById('4');
const five =document.getElementById('5');

let number;
ratingNumbers.forEach(ratingNumber =>ratingNumber.addEventListener('click', (e) =>{
number=e.target.id;
rating.innerHTML= number;

if(number==1){
    one.style.color ='hsl(0, 0%, 100%)';
    one.style.backgroundColor='hsl(217, 12%, 63%)';

    {
        button.addEventListener('click', () =>{
            thankYou.style.display='flex';
            main.style.display ='none';
        })
    }
}
if(number==2){
    two.style.color ='hsl(0, 0%, 100%)';
    two.style.backgroundColor='hsl(217, 12%, 63%)';

    {
        button.addEventListener('click', () =>{
            thankYou.style.display='flex';
            main.style.display ='none';
        })
    }
}
if(number==3){
    three.style.color ='hsl(0, 0%, 100%)';
    three.style.backgroundColor='hsl(217, 12%, 63%)';

    {
        button.addEventListener('click', () =>{
            thankYou.style.display='flex';
            main.style.display ='none';
        })
    }
}
if(number==4){
    four.style.color ='hsl(0, 0%, 100%)';
    four.style.backgroundColor='hsl(217, 12%, 63%)';

    {
        button.addEventListener('click', () =>{
            thankYou.style.display='flex';
            main.style.display ='none';
        })
    }
}
if(number==5){
    five.style.color ='hsl(0, 0%, 100%)';
    five.style.backgroundColor='hsl(217, 12%, 63%)';

    {
        button.addEventListener('click', () =>{
            thankYou.style.display='flex';
            main.style.display ='none';
        })
    }
}





}))





