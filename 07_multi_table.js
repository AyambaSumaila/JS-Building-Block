

//Math multiplication table 


const myTable=[];
const number=10;
for(let i=0;i<number;i++)
{
    const temp=[];
    for(let j=0;j<number;j++)
    {
      temp.push(x * y);
    }

    myTable.push(temp);
}
console.log(myTable);


const adj=['super', 'wonderful', 'bad', 'angry', 'careful'];

function myFunction()
{
    const question=prompt("What is your name?");
    const nameAdj=Math.floor(Math.random() * adj.length);

    console.log(adj[nameAdj] + " " + question );


}

myFunction();

