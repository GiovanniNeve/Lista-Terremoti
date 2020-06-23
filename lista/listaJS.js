var mainTable = document.getElementById("mainTable");
var rowsArray = document.querySelectorAll("th");
var activeList = null;

//* Create table
function createTable(obj) {
    setData(obj);
    while (mainTable.rows[1]) {
        mainTable.rows[1].remove();
    }
    for (var index1 = 1; index1 < obj.length + 1; index1++) {
        let row = mainTable.insertRow(index1);
        let cell = new Array(6);
        cell[0] = row.insertCell();
        cell[0].innerHTML = eventDateArray[index1 - 1].getDate() + "/" + (eventDateArray[index1 - 1].getMonth() + 1) + "/" + eventDateArray[index1 - 1].getFullYear();
        cell[1] = row.insertCell();
        cell[1].innerHTML = eventLocationArray[index1 - 1];
        cell[2] = row.insertCell();
        cell[2].innerHTML = eventRichterArray[index1 - 1];
        cell[3] = row.insertCell();
        cell[3].innerHTML = eventMagnitudoArray[index1 - 1];
        cell[4] = row.insertCell();
        cell[4].innerHTML = eventMercalliArray[index1 - 1];
        cell[5] = row.insertCell();
        cell[5].innerHTML = eventDeathArray[index1 - 1];
    }

}

//* Select type of sort from table

rowsArray.forEach((val, index) => {
    val.addEventListener("click", () => {

        switch (val.id) {
            case activeList:
                break;
            case "eventRichterArray":
                activeList = "eventRichterArray";
                itemSort(dataArray, eventRichterArray);
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
            case "eventLocationArray":
                activeList = "eventLocationArray";
                itemSort(dataArray, eventLocationArray);
                createTable(dataArray);
                break;
        }
    });
});

//* Item sort
function itemSort(obj, data) {
    setData(obj);
    var swap;
    var swap1;
    for (var index1 = 0; index1 < obj.length; index1++) {

        if (obj[index1 + 1] && data[index1] < data[index1 + 1]) {
            swap = obj[index1];
            obj[index1] = obj[index1 + 1];
            obj[index1 + 1] = swap;
            swap1 = data[index1];
            data[index1] = data[index1 + 1];
            data[index1 + 1] = swap1;

            for (var index2 = index1; index2 >= 0; index2--) {
                if (obj[index2 - 1] && data[index2] > data[index2 - 1]) {
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

//* Main

createTable(dataArray);