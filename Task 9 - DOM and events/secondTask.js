/*
Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана через js)
*/
function createMatrix() {
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");
  for (let y = 0; y < 10; y++) {
    let row = document.createElement("tr");
    for (let x = 0; x < 10; x++) {
      let columns = document.createElement("td");
      let columnText = document.createTextNode(x + 10 * y + 1);
      columns.appendChild(columnText);
      row.appendChild(columns);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.setAttribute("border", "1");
}
createMatrix();
