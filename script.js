var board;
var score=0;
var rows=4;
var columns=4;
window.onload=function(){
setGame();
}
const setGame=()=>{
    // board=[[0,2,0,0],[0,2,0,0],[0,0,0,0],[0,0,4,8]];
    board=[[2,2,4,4],[2,2,4,4],[8,8,8,8],[2,2,4,8]];
    for(var r=0;r<rows;r++){
        for(var c=0;c<columns;c++){
            //create a div :-<div id="0-0"></div>
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            let num=board[r][c];
            updateTile(tile,num);
            document.getElementById("board").append(tile)
        }
    }
}
const updateTile=(tile,num)=>{
    tile.innerText=" ";
    tile.classList.value="";
    tile.classList.add("tile");
    if(num>0){
        tile.innerText=num;
        if(num<=4096){
            tile.classList.add("x"+num.toString())
        }else{
            tile.classList.add("x8192")

        }
    }
}
const filterZero=(row)=>{
return row.filer(num=>num!=0); //create a new array without zero
}
const slide=(row)=>{
    //[0,2,2,2]
    row=filterZero(row);//array without zero [2,2,2];
    for(let i=0;i<row.length-1;i++){
        //check every 2
         if(rows[i]==row[i+1]){
            row[i]*=2;
            row[i+1]=0;
            score+=row[i]
         }//[2,2,2]->[4,0,2]
    }
    row=filterZero(row)//[4,2]
    //add zero
    while(row.length<column){
        row.push(0)//[4,2,0,0]
    }
    return row
}
const slideLeft=()=>{
    for(let i=0;i<rows;i++){
        let row=board[r];
        row=slide(row);
        board[r]=row;
    }
    for(let c=0;c<columns;c++){
        let tile=document.getElementById(r.toString()+"-"+c.toString());
        let num=board[r][c];
        updateTile(tile,num)
    }
}
document.addEventListener("keyup",(e)=>{
    console.log("hhhh")
if(e.code== "ArrowLeft"){
    slideLeft();
    console.log("yup")
}
})
console.log("hello")
