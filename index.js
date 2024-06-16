document.addEventListener('DOMContentLoaded', () => {
    let boxes = document.getElementsByClassName('box');
    let cities = document.getElementsByClassName('city');
    let degree = document.getElementById('temp'); 
    let inp = document.querySelector('input');
    let b = document.querySelector('body');
    let submit = document.querySelector('.submit');
    let box = document.querySelector('.father');
    let err = document.querySelector('#error')



    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', () => {
            for (let j = 0; j < cities.length; j++) {
                cities[j].style.color = 'white';
            }
            inp.style.background = 'rgb(25, 24, 24)';
            b.style.background = 'black';
           
          
            degree.style.color = 'white'; 
            submit.style.background='black';
            submit.style.color='white'
        });

        boxes[i].addEventListener('mouseleave', () => {
            for (let j = 0; j < cities.length; j++) {
                cities[j].style.color = 'black';
            }
            inp.style.background = 'rgb(231, 226, 226)';
            
            b.style.background = 'white';
            degree.style.color = 'black'; 
            submit.style.color='black'
            submit.style.background='white'

        });
    }



    

    async function api(city) {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5a3992af6f5d43eea9d182808242104&q=${city}`);
        if(response.status==400){
            
            err.style.display='block'
box.style.display='none'

        }
        else{
            err.style.display='none'

        }
        const result = await response.json();
   
        console.log(result);
    
        document.querySelector('#temp').innerHTML = Math.round(result.current.temp_c) + '^C';
        document.querySelector('.city').innerHTML = result.location.name;
    }
    
    function tocheck(city) {
        api(city);
    }
    
    submit.addEventListener('click', () => {
        let val = document.querySelector('input').value;
        tocheck(val);
        
        box.style.display='flex'
        
    });
    
    


    

    
    
    

       


    
  
    
});
