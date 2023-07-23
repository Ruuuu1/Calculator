
let A = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      A = eval(A);
      document.querySelector('input').value = A;
    }
    else if(e.target.innerHTML == 'C'){
      A = ""
      document.querySelector('input').value = A;
    }
    else{ 
    console.log(e.target)
    A = A + e.target.innerHTML;
    document.querySelector('input').value = A;
      }
  })
})