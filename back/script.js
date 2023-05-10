function gridGenerate() {
    const rowSize = 11;
    const colSize = 11;
    var table = document.createElement("table");
    table.setAttribute("border","1");
    for (var i = 0; i < rowSize; i++) {
       var tr = document.createElement("tr");
        for (var j = 0; j < colSize; j++) {
            var td = document.createElement("td");
            td.innerHTML=i*j;
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    //console.log(grid)
    document.write(table)
    //document.getElementById("grid").innerHTML=grid;
}