var mainTable = document.getElementById("mainTable");
var dataSelector = document.getElementById("dataSelector");
var activeList = null;

//*---------- Function that create the table ----------
function createTable(obj) {
    for (var i = 1; i < mainTable.rows.length; i++) {
        mainTable.rows[i].innerHTML = "";
    }
    setData(obj);
    for (var index1 = 1; index1 < obj.length + 1; index1++) {
        let row = mainTable.insertRow(index1);
        let cell = new Array(6);
        cell[0] = row.insertCell();
        cell[0].innerHTML = eventDateArray[index1 - 1].getDate() + "/" + (eventDateArray[index1 - 1].getMonth() + 1) + "/" + eventDateArray[index1 - 1].getFullYear();
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

//* ---------- Get data from selector ----------
dataSelector.addEventListener("click", () => {
    var selector = document.getElementById("dataSelector").value;
    switch (selector) {
        case activeList:
            break;
        case "eventRitcherArray":
            activeList = "eventRitcherArray";
            itemSort(dataArray, eventRitcherArray);
            createTable(dataArray);
            break;
        case "eventMagnitudoArray":
            activeList = "eventMagnitudoArray";
            itemSort(dataArray, eventMagnitudoArray);
            createTable(dataArray);
            break;
        case "eventMercalliArray":
            activeList = "eventMercalliArray";
            itemSort(dataArray, eventMercalliArray);
            createTable(dataArray);
            break;
        case "eventDeathArray":
            activeList = "eventDeathArray";
            itemSort(dataArray, eventDeathArray);
            createTable(dataArray);
            break;
        case "eventDateArray":
            activeList = "eventDateArray";
            itemSort(dataArray, eventDateArray);
            createTable(dataArray);
            break;
    }
});

//* ---------- Item sort ----------
function itemSort(obj, data) {
    setData(obj);
    var swap;
    var swap1;
    for (var index1 = 0; index1 < obj.length; index1++) {

        if (obj[index1 + 1] && Number(data[index1]) < Number(data[index1 + 1])) {
            swap = obj[index1];
            obj[index1] = obj[index1 + 1];
            obj[index1 + 1] = swap;
            swap1 = data[index1];
            data[index1] = data[index1 + 1];
            data[index1 + 1] = swap1;

            for (var index2 = index1; index2 >= 0; index2--) {
                if (obj[index2 - 1] && Number(data[index2]) > Number(data[index2 - 1])) {
                    swap = obj[index2];
                    obj[index2] = obj[index2 - 1];
                    obj[index2 - 1] = swap;
                    swap1 = data[index2];
                    data[index2] = data[index2 - 1];
                    data[index2 - 1] = swap1;
                } else {
                    break;
                }
            }
        }

    }
    return obj
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