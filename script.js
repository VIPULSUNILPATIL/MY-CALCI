let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'M+'){
        string = eval(string*100);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'M-'){
        string = eval(string/100);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'Exp'){
        string=string + "**";
        string = eval(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'sqrt'){
        string=string + "Math.sqrt" ;
       
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'Sin'){
        string=string + "Math.sin" ;
       
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'Cos'){
        string=string + "Math.cos" ;
       
        document.querySelector('input').value = string;
      }
     
      else if(e.target.innerHTML == 'Tan'){
        string=string + "Math.tan" ;
       
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'Pi'){
        string=string + "Math.PI" ;
       
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'Cut'){
        string=string.substring(0, string.length-1);
       
        document.querySelector('input').value = string;
      }
     
    else{ 
        
   /* console.log(e.target)*/
    string = string +  e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})