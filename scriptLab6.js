function loadTable(){
    let myTable = document.getElementById("iTable");
    let fild_width = document.getElementById("filed_width").value;
    let fild_hight = document.getElementById("filed_hight").value;
    let nx = fild_width;
    let ny = fild_hight;
    myTable.innerHTML = "";
    for (let i=0; i < nx; ++i){
        let newTableLine = document.createElement("tr");
        for (let j=0; j < ny; ++j) {
            let newTableCell = document.createElement("td");

            newTableCell.setAttribute("id","cell_"+(i+1)+"_"+(j+1));

            //newTableCell.setAttribute("cellStatus","nothing");
            newTableCell.cellStatus = "nothing";

            newTableCell.addEventListener("mousedown",cellMouseDown);
            newTableLine.appendChild(newTableCell);
        }
        myTable.appendChild(newTableLine);
    }
}

function cellMouseDown(e) {
    e = e || window.event;
    //alert(e.which);
    switch (e.which) {
        case 1:
            if (this.style.backgroundImage == "") {
            this.style.backgroundImage = "url(crug.png)";
            this.innerHTML = "O";
            //this.innerHTML = this.;cellStatus
            VictoryCheck(this.id, "crug");
        }
            break;
        case 3:
            if (this.style.backgroundImage == "") {
                this.style.backgroundImage = "url(crest.png)";
                this.innerHTML = "X";
                VictoryCheck(this.id, "crest");
            }
            break;
    }
}

function CheckDirection(row, cell, typeField, directionRow, directionCell)
{
    let currentRow = row + directionRow;
    let currentCell = cell + directionCell;
    let id = "cell_" + (currentRow + 1) + "_" + (currentCell + 1);
    let myCell = document.getelementByid(id);
    if (myCell !- null && typeField == myCell.cellStatus)
    {
        return 1 + CheckDirection(currentRow, currentCell, typeField, directionRow, directionCell);
    }
    return 0;
}

Function VictoryCheck (row, cell, typefield)
{
    let VictoryСondition = 5;
    let HorizontalCheck =  CheckDirection(row,cell,typeField, 0, -1) + CheckDirection(row,cell,typeField, 0, 1) + 1;
    let VerticalСheck = CheckDirection(row,cell,typeField, -1, 0) + CheckDirection(row,cell,typeField, 1, 0) + 1;
    let DecreasegDiagonalСheck =  CheckDirection(row,cell,typeField, -1, -1) + CheckDirection(row,cell,typeField, 1, 1) + 1;
    let IncreasingDiagonalСheck  = CheckDirection(row,cell,typeField, -1, 1) + CheckDirection(row,cell,typeField, 1, -1) + 1;
    
    if(HorizontalCheck >= VictoryСondition || VerticalСheck >= VictoryСondition || DecreasegDiagonalСheck >= VictoryСondition || IncreasingDiagonalСheck >= VictoryСondition)
    {
        if (typeFiled == "crest")
        {   
            document.getElementById("Cross").innerHTML = "X Victory";
        } else if (typefield == "crug")
          {
            document.getElementById("Cross").innerHTML = "O Victory";
          }
        document.getElementById("MyTable").style.display = "none";
    }    
}

document.oncontextmenu = function () {return false;};
