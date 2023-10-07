import {boston} from "./script.js";
var newBoston=boston.data
var ele="";

    for (let i=0;i<newBoston.length;i++){
        for(let j=i+1;j<newBoston.length;j++){
            
            
            if(newBoston[i][11]<newBoston[j][11]){
              let a=newBoston[i];
              newBoston[i]=newBoston[j];
              newBoston[j]=a;
            }   
        }  
    }
         var result=newBoston.slice(0,5)
         for(let i=0;i<5;i++){
          ele=ele+"<h1>" + result[i][8] + "</h1>" + "<h1>" + result[i][11] + "</h1>"
        
         }
        
    document.getElementById("app1").innerHTML=ele;
