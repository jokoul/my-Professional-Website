console.log(projects.data);
const data = projects.data;
let monthArray = [];
let EngDateArray = [];

data.forEach((element) => {
  console.log(element.date);
  let month = element.date.slice(3);
  console.log(month);
  // month = parseInt(month);
  // console.log(typeof month);
  monthArray.push(month);
});
data.forEach((element) => {
  console.log(element.date);
  let month = element.date.slice(3, 5);
  let day = element.date.slice(0, 2);
  let year = element.date.slice(6);
  EngDateArray.push(year + "-" + month + "-" + day);
});
console.log(EngDateArray);

console.log(monthArray);

//count duplicate values in monthArray
const counts = {};
monthArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
//create data array
let dataD3 = [];

let numId = 0;
for (let property in counts) {
  dataD3.push({ id: numId, date: property, numProject: counts[property] });
  numId++;
}
dataD3 = dataD3.sort((a, b) => {
  return b.id - a.id;
});
console.log(dataD3);

let values; //where we store our value data array

let heightScale; //use to determine the height of the bars
let xScale; //use to determine where the bars are placed horizontally on the canvas
let yScale;
let xAxisScale; //for drawing the xAxis
let yAxisScale; //use to create the y axis along the left

let width;
function resizeChart() {
  if (window.innerWidth < 950) {
    width = 300;
  } else {
    width = 800;
  }
}
window.addEventListener("resize", resizeChart());
// let width = 800;
let height = 600;
let padding = 80;

let svg = d3.select("svg");

let drawCanvas = () => {
  svg.attr("width", width).attr("height", height);
};

let generateScales = () => {
  heightScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(dataD3, (item) => {
        // console.log(item["numProject"]);
        return item["numProject"];
      }),
    ])
    .range([0, height - 2 * padding]);

  xScale = d3
    .scaleLinear()
    .domain([0, dataD3.length - 1])
    .range([padding, width - padding]);

  let datesArray = EngDateArray.map((item) => {
    return new Date(item); //return date object
  });
  console.log(datesArray);

  xAxisScale = d3
    .scaleTime()
    .domain([d3.min(datesArray), d3.max(datesArray)])
    .range([padding, width - padding]);

  yAxisScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(dataD3, (item) => {
        return item["numProject"];
      }),
    ])
    .range([height - padding, padding]);
};

let drawBars = () => {
  let tooltip = d3
    .select(".canvasWrapper")
    .append("div")
    .attr("id", "tooltip")
    .style("visibility", "hidden")
    .style("width", "auto")
    .style("height", "auto")
    .style("position", "absolute");

  svg
    .selectAll("rect")
    .data(dataD3)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("width", (width - 2 * padding) / dataD3.length)
    .attr("data-date", (item) => {
      return item["date"];
    })
    .attr("data-numproject", (item) => {
      return item["numProject"];
    })
    .attr("height", (item) => {
      return heightScale(item["numProject"]);
    })
    .attr("x", (item, index) => {
      // return "test";
      return xScale(index);
    })
    .attr("y", (item) => {
      return height - padding - heightScale(item["numProject"]);
    })
    .on("mouseover", (item, index) => {
      tooltip.transition().style("visibility", "visible");

      tooltip.text(item["numProject"] + " projets réalisés en " + item["date"]);

      tooltip.style(
        "top",
        height - heightScale(item["numProject"]) - 100 + "px"
      );
      tooltip.style("left", xScale(index) + 100 + "px");
      document
        .querySelector("#tooltip")
        .setAttribute("data-date", item["date"]);
      document
        .querySelector("#tooltip")
        .setAttribute("data-numproject", item["numProject"]);
    })
    .on("mouseout", (item) => {
      tooltip.transition().style("visibility", "hidden");
    });
};

let generateAxes = () => {
  let xAxis = d3.axisBottom(xAxisScale);
  let yAxis = d3.axisLeft(yAxisScale);

  svg
    .append("g")
    .call(xAxis)
    .attr("id", "x-axis")
    .attr("transform", "translate(0," + (height - padding) + ")")
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)");

  svg
    .append("g")
    .call(yAxis)
    .attr("id", "y-axis")
    .attr("transform", "translate(" + padding + ", 0)");
};

drawCanvas();
generateScales();
drawBars();
generateAxes();
