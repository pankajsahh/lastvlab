const BubbleSort=(array,position,steps,colors)=>{
         let colorkey=colors[colors.length-1].slice();
         for(let i=0;i<array.length-1;i++){
             for(let j=0;j<array.length-i-1;j++){
                 if(array[j]>array[j+1]){
                     array=swap(array,j,j+1)
                 }
                 steps.push(array.slice());
                 colorkey[j]=1;     
                 colorkey[j+1]=1;
                 colors.push(colorkey.slice());
                 colorkey[j]=0;
                 colorkey[j+1]=0;
             }
             colorkey[array.length-1-i]=2;
             steps.push(array.slice());
             colors.push(colorkey.slice());
         }
    
    colors[colors.length-1]=new Array(array.length).fill(2);
    return;
};
const swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp; 
    return arr;
}
export default BubbleSort;