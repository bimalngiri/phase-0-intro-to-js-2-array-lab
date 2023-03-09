// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");



function destructivelyAppendCat(name) {
    cats.push(name);
    
}



function destructivelyPrependCat(name){
    cats.unshift(name);
    
  }
  


  function destructivelyRemoveLastCat(){
    cats.pop();
    
  }
  

  function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    
  }
  destructivelyRemoveFirstCat.shift();

  function appendCat(name) {
    const name_1 = [...cats, name];
    return name_1;
  }

 
 console.log(cats);

  function prependCat(name){
    const name_2=[name, ...cats];
    return name_2
 } 

 function removeLastCat(){
    const caats = cats.slice(0,cats.length-1);
    return caats;
  }
  
  function removeFirstCat(){
    const kitten = cats.slice(1)
    return kitten;
  }
        