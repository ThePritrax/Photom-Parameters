const random = fetch("https://script.google.com/macros/s/AKfycbykGyTm455lDp-XNTCa1v1MtqMLTHash8DDYo6DTeaGTyLxbqFSy7dxHgmNgT9CjIxf/exec").then((table) => {
    // console.log(table);
    return table.json();
}).then((tableObj) => {
    console.log(tableObj[2].Voltage);
    let tableData = "";
    tableObj.slice(1).map((values) => {
        tableData += `<tr>
        <td>${values.Voltage}</td>
        <td>${values.Current}</td>
        <td>${values.Distance}</td>
        <td>${values.Duration}</td>
        <td>${values.Power}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})