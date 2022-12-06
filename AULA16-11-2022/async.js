const meuNome = 'diego';
const promisse = new Promise((resolve,reject)=>{ 
  
  if(meuNome != 'diego'){
    reject('nao e diego')
  }else{
    resolve('é o diego')
  }
} );
console.log(promisse)