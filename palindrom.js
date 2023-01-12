let str1="naman";
let str="";
for(let i=str1.length-1; i>=0; i--){
    str += str1[i];
}

if(str==str1)
{
    console.log("Palindrom");
}else{
    console.log("Not Palindrom");
}
