
let inputel=document.getElementById("input_el");
let gett = document.getElementById("input_btn");
let ull = document.getElementById("listt");
let del = document.getElementById("delete_btn");
let save = document.getElementById("button_tab");
let arr = [];

let neww= JSON.parse(localStorage.getItem("data"));
console.log(neww);
if(neww){
    arr=neww;
    add();
}
gett.addEventListener("click", function(){
   if(inputel.value!=""){
    let opa = inputel.value;
    arr.push(opa);
    inputel.value=null;
    let lola = arr;
    lola=JSON.stringify(lola);
    localStorage.setItem("data",lola);
   add();}
   console.log(localStorage.getItem("data"));
})
function add(){
   
    let li="";
    for(let i=0;i<arr.length;i++){
    // li+="<li><a target='_black' href='"+arr[i]+"'>"+arr[i]+"</a></li>";}
    //now we use template to reduce complexity of above line;
    //"+arr[i]+" = ${arr[i]}
    
    li+=`<li>
        <a target='_black' href='${arr[i]}'>  
                ${arr[i]}
         </a>
    </li>`;}
   
    ull.innerHTML=li;
 
}
const link = [
    {url: "https://www.linkedin.com/in/aayush-kumar-rathore-161b85290/"}
]
del.addEventListener("dblclick", function(){
  localStorage.clear();
  arr =[];
  add();
})
save.addEventListener("click", function(){
chrome.tabs.query({active:true,currentWindow:true},function(tabs){
 arr.push(tabs[0].url);
 localStorage.setItem("data",JSON.stringify(arr));
 add();
})
})




