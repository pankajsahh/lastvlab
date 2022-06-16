const Insertion =(array,steps,colors,value)=>{
 
    let colorkey=colors[colors.length-1].slice();
    for(let i=1;i<array.length;i++){
        steps.push(array.slice());

        colorkey[i]=3;
        let nums=array[i];
        let j=i-1;
        while(j>=0 && nums<array[j]){
            array[j+1]=array[j];
            steps.push(array.slice());
            // colorkey[i]=3;    
            if(i==j+1){
                colorkey[j+1]=3;
            }else{
                colorkey[j+1]=1;
            }
           
            colorkey[j]=1;
            colors.push(colorkey.slice());
            colorkey[j+1]=0;
            colorkey[i]=0;
            colorkey[j]=0;
            j--;
            
        }array[j+1]=nums;
        // colorkey[i-1]=2;
        steps.push(array.slice());
        colors.push(colorkey.slice());
    }
    colors[colors.length-1]=new Array(array.length).fill(2);
    return;
}

export default Insertion;