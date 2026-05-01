if(!Array.prototype.map){
  Array.prototype.map = function(callback){
    let result = [];

    for(let i = 0; i < this.length; i++){
      result.push(callback(this[i], i));
    }

    return result;
  }
}

let arr=[1,2,3,4]
let res=arr.map((x,index)=>x*2)
console.log(res);
