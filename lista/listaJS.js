var mainTable = document.getElementById("mainTable");
var dataSelector = document.getElementById("dataSelector");
var sortedArray;
var activeList = null;

//*---------- Function that create the table ----------
function createTable(obj) {
    setData(obj);
    for (var index1 = 1; index1 < obj.length + 1; index1++) {
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

//* ---------- Get data from selector ----------
dataSelector.addEventListener("click", () => {
    var selector = document.getElementById("dataSelector").value;
    switch (selector) {
        case activeList:
            break;
        case "eventRitcherArray":
            activeList = "eventRitcherArray";
            sortedArray = itemSort(dataArray, eventRitcherArray);
            createTable(sortedArray);
            break;
        case "eventMagnitudoArray":
            activeList = "eventMagnitudoArray";
            sortedArray = itemSort(dataArray, eventMagnitudoArray);
            createTable(sortedArray);
            break;
        case "eventMercalliArray":
            activeList = "eventMercalliArray";
            sortedArray = itemSort(dataArray, eventMercalliArray);
            createTable(sortedArray);
            break;
        case "eventDeathArray":
            activeList = "eventDeathArray";
            sortedArray = itemSort(dataArray, eventDeathArray);
            createTable(sortedArray);
            break;
        case "eventDateArray":
            activeList = "eventDateArray";
            sortedArray = itemSort(dataArray, eventDateArray);
            createTable(sortedArray);
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