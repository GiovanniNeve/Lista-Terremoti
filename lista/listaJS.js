var mainTable = document.getElementById("mainTable");

//*---------- Function that create the table ----------
function createTable(data) {
    setData(data);
    for (var index1 = 1; index1 < data.length + 1; index1++) {
        let row = mainTable.insertRow(index1);
        let cell = new Array(6);
        cell[0] = row.insertCell();
        cell[0].innerHTML = eventDateArray[index1 - 1];
        cell[1] = row.insertCell();
        cell[1].innerHTML = eventLocationArray[index1 - 1];
        cell[2] = row.insertCell();
        cell[2].innerHTML = eventRitcherArray[index1 - 1];
        cell[3] = row.insertCell();
        cell[3].innerHTML = eventMagnitudoArray[index1 - 1];
        cell[4] = row.insertCell();
        cell[4].innerHTML = eventMercalliArray[index1 - 1];
        cell[5] = row.insertCell();
        cell[5].innerHTML = eventDeathArray[index1 - 1];
    }

}

//* ---------- Print data in the console ----------
function consolePrint(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].vittime);
    }

}

//* ---------- Item sort ----------
function itemSort(data) {
    for (var index1 = 0; index1 < data.length; index1++) {
        if (data[index1 + 1] && Number(data[index1].vittime) < Number(data[index1 + 1].vittime)) {
            var swap = data[index1];
            data[index1] = data[index1 + 1];
            data[index1 + 1] = swap;

            for (var index2 = index1; index2 >= 0; index2--) {
                if (data[index2 - 1] && Number(data[index2].vittime) > Number(data[index2 - 1].vittime)) {
                    swap = data[index2];
                    data[index2] = data[index2 - 1];
                    data[index2 - 1] = swap;
                } else {
                    break;
                }
            }
        }

    }
    return data
}

//* ---------- Main ----------

let mainRow = mainTable.insertRow();
let mainCell = new Array(6);
mainCell[0] = mainRow.insertCell();
mainCell[0].innerHTML = "Data";
mainCell[1] = mainRow.insertCell();
mainCell[1].innerHTML = "Luogo";
mainCell[2] = mainRow.insertCell();
mainCell[2].innerHTML = "Ritcher";
mainCell[3] = mainRow.insertCell();
mainCell[3].innerHTML = "Magnitudo";
mainCell[4] = mainRow.insertCell();
mainCell[4].innerHTML = "Mercalli";
mainCell[5] = mainRow.insertCell();
mainCell[5].innerHTML = "Vittime";

var sortedArray = itemSort(dataArray);

createTable(sortedArray);