   const data=[
       {firstName:"Md Adil",lastName:"Alam",age:23},
       {firstName:"saddam",lastName:"Hussain",age:25},
       {firstName:"Aatif",lastName:"Husain",age:30},
       {firstName:"Mokabbir",lastName:"Menhaj",age:45},
       {firstName:"Modassir",lastName:" maroof",age:45},
   ];


   //const output=data.filter((x)=>x.age<45).map((x)=>x.firstName);
  //['Md Adil', 'saddam', 'Aatif']0: "Md Adil"1: "saddam"2: "Aatif"length: 3[[Prototype]]: Array(0)
  

  const output=data.reduce(function(acc,curr){
      if(acc[curr.age]){
          acc[curr.age]=++acc[curr.age]
      }
      else
      {
          acc[curr.age]=1;
      }
      return acc;
  },{})
  
  console.log(output);

/*function triple(x){
    return x*3;
} 
//const output=arr.map( (x) => x.toString(2))
function IsOdd(x){
    return x%2;
} 

const output=arr.filter( (x)=> x<9);

console.log(output);
*/