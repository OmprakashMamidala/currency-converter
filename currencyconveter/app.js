const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector('button');
const img1 = document.querySelector('.from img');
const img2 = document.querySelector('.to img');
const URL='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json';
let currCode1='INR';
let currCode2='USD';


 for(let select of dropdowns){
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
  newOption.selected = "selected";
} else if (select.name === "to" && currCode === "INR") {
  newOption.selected = "selected";
} 
    select.append(newOption);
}

 }
 for(let selects of dropdowns){
 
 
    selects.addEventListener('change',()=>{
    for(let currCode in countryList){
      if(selects.value ===currCode && selects.name==="from"){
        let code = (countryList[currCode]);
        img1.src=`https://flagsapi.com/${code}/flat/64.png`;
        currCode1=currCode;
       
      }
      else if(selects.value ===currCode && selects.name==="to"){
        let code1 = (countryList[currCode]);
        img2.src=`https://flagsapi.com/${code1}/flat/64.png`;
        currCode2=currCode;
      }
    }
    })
  
  

 }
let click = button.addEventListener('click',async (eve)=>{
   eve.preventDefault();
  const input  = document.querySelector(".amount input");
 let inVal = input.value;
 if(inVal<=0 || inVal===""){
  inVal=1;
  input.value='1'
 }


let response =await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currCode2.toLowerCase()}/${currCode1.toLowerCase()}.json`)
;
let data =await response.json();
let actVal = inVal*data[currCode1.toLowerCase()];
 const msg = document.querySelector(".msg");
  msg.innerText = `${inVal} ${currCode2} = ${actVal} ${currCode1}`
 
})

