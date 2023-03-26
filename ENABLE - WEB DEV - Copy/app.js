const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.parent');

function PageTransitions(){
    for(let i = 0; i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    allSections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked=true;
  counter++;
  if(counter>4){
    counter=1;
  }
},5000);
const nextt = document.getElementById('butnext');
const prevv = document.getElementById('butprev');
nextt.addEventListener('click', () =>{
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter>4){
      counter=1;
    }    
})
prevv.addEventListener('click', () =>{
    document.getElementById('radio' + counter).checked=true;
    counter--;
    if(counter<1){
      counter=4;
    }     
})

const explore = document.querySelector('#explore');
const project = document.querySelector('.projects');
const home = document.querySelector('.header');
const projects = document.querySelector('.control-3');
const homes = document.querySelector('.control-1');

explore.addEventListener('click', () => {
    project.classList.add('active');
    projects.classList.add('active-btn');
    home.classList.remove('active');
    homes.classList.remove('active-btn');
})

PageTransitions();