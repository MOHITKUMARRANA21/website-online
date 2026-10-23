let Array1=[];
function add(){
  const inputValue=document.querySelector('.js-value').value;
  const inputDate=document.querySelector('.js-value2').value;
  Array1.push({inputValue,inputDate});
  document.querySelector('.js-value').value='';
  iteration();
}
function iteration(){
  let adding="";
  Array1.forEach(function(k,i){
    const {inputValue,inputDate}=k;
    adding+=`
      <div>${inputValue}</div>
      <div>${inputDate}</div>
      <button onclick="
      Array1.splice(${i},1) 
      iteration();
      " class="js-Delete">Delete</button>
      `;
  })
  /*for(let i=0;i<Array1.length;i++)
  {
    const k=Array1[i];
    //const inputValue=k.inputValue;
    //const inputDate=k.inputDate;
    const {inputValue,inputDate}=k;
    adding+=`
      <div>${inputValue}</div>
      <div>${inputDate}</div>
      <button onclick="
      Array1.splice(${i},1) 
      iteration();
      " class="js-Delete">Delete</button>
      `;
  }
      */
 document.querySelector('.js-Display').innerHTML=adding;
}