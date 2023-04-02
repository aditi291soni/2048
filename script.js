var board;
var score=0;
var rows=4;
var columns=4;
windows.onload=()=>{
setGame();
}
const setGame=()=>{
    board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    for(var r=0;r<rows;r++){
        for(var c=0;c<columns;c++){
            //<div id="0-0"></div>
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            let num=board[r][c];
            updateTile(tile,num)
        }
    }
}
const updateTile=()=>{
    tile.innerText=" ";
    tile.classList.value=""
}
