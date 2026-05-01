
for(i=1;i<=5;i++){
    let r=""
    // for(j=1;j<=5-i;j++){
    //     r+=" "
    // }
    r+=" ".repeat(5-i)
    for(k=1;k<=(2*i-1);k++){
       if(i==1||i==5||k==1||k==2*i-1){
        r+="*"
       }else{
        r+=" "
       }
    }
    console.log(r);
    
}