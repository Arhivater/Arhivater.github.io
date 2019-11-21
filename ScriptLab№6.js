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
            checkWin (this.id, "crug");
        }
            break;
        case 3:
            if (this.style.backgroundImage == "") {
                this.style.backgroundImage = "url(crest.png)";
                this.innerHTML = "X";
                checkWin(this.id, "crest");
            }
            break;
    }
}

document.oncontextmenu = function () {return false;};
