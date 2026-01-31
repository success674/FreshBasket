let menuBtn = document.querySelector('#menu-btn')
let navList = document.getElementById('nav-list')

menuBtn.addEventListener('click', function() {
 const open = navList.classList.toggle('show')
  if (open){
    menuBtn.textContent = '✖'
    
    
  } else{
    menuBtn.textContent = '☰'
  }
  
  
  
})
