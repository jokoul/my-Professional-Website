console.log(projects.data);
const data = projects.data;
let monthArray = [];

data.forEach((element) => {
  console.log(element.date);
  let month = element.date.slice(3, 5);
  console.log(month);
  month = parseInt(month);
  console.log(typeof month);
  monthArray.push(month);
});

console.log(monthArray);
