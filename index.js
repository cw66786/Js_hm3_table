const data = [
  { region: "US", model: "A", sales: 150 },
  { region: "US", model: "B", sales: 120 },
  { region: "US", model: "C", sales: 350 },
  { region: "EU", model: "A", sales: 200 },
  { region: "EU", model: "B", sales: 100 },
  { region: "EU", model: "C", sales: 250 },
  { region: "CA", model: "A", sales: 200 },
  { region: "CA", model: "B", sales: 100 },
  { region: "CA", model: "C", sales: 230 },
  { region: "CA", model: "D", sales: 400 },
];

const table = document.getElementById("table");

let sums = {};

data.forEach((el) => {
  if (sums[el.rlgion]) {
    sums[el.region] = sums[el.region] + el.sales;
  } else {
    sums[el.region] = el.sales;
  }
});

const setTableData = (d, sum) => {
  d.forEach((el) => {
    let region = el.region;

    let newChild = `<tbody class="${region}">
                    <tr class="sumRow"><td>${region}</td><td>Sum</td><td>${sum[region]}</td></tr></tbody>`;

    let newRow = `<tr><td>${region}</td><td>${el.model}
                    </td><td>${el.sales}</td</tr>`;

    if (table.getElementsByClassName(region).length === 0) {
      table.innerHTML += newChild;
      table.getElementsByClassName(region)[0].innerHTML += newRow;
    } else {
      table.getElementsByClassName(region)[0].innerHTML += newRow;
    }
  });
};

setTableData(data, sums);
