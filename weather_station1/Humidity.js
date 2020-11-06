/*1st code*/

const getJsonCallbackHumidity = function(result) {
  const signal = "humidity_out";
  let labels = [];
  let data = [];
  console.log(result);

  // chart
  for (let i = 0; i < result.length; i++) {
    let d = new Date(result[i].date_time);
    let date = d.toLocaleDateString();
    let time = d.toLocaleTimeString();
    labels.push(date + " " + time);
    data.push(result[i][signal]);
  }

  // table data, reverse order
  result.reverse();
  let html = `<table class='table table-striped'>
      <thead>                                                      
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>`;
  for (let i = 0; i < result.length; i++) {
    let d = new Date(result[i].date_time);
    let date = d.toLocaleDateString();
    let time = d.toLocaleTimeString();
    html += `<tr><td>${date}</td><td>${time}</td><td>${
      result[i][signal]
    }</td></tr>`;
  }
  html += `</tbody></table><canvas id="myChart" width="400" height="400"></canvas>`;
  $("#data_div").html(html);

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      type: "time",
      datasets: [
        {
          label: "Humidity ",
          data: data,
          fill: false,
          borderColor: "pink"
        }
      ]
    },
    options: {
      animation: false,
      showLines: true,
      events: [],
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
};

const drawHumidityData = function(API_ADDRESS) {
  let url = `${API_ADDRESS}/humidity_out`;


  $.getJSON(url, getJsonCallbackHumidity);

  /*
      Select menu
  */
  let selectedInterval = null;

  const selectMenuHtml = `
    <p>Pick a time interval:</p>
            <p><select id="humiditySelectInterval" class="form-control selcls my-style-select">
              <option value="0">Live</option>
              <option value="24" selected>24 hours</option>
              <option value="48">48 hours</option>
              <option value="72">72 hours</option>
              <option value="168">1 week</option>
              <option value="744">1 month</option>
            </select></p>
            
  `;
  $("#interval_div").html(selectMenuHtml);

  $("#interval_div").on("change", "#humiditySelectInterval", element => {
    console.log("selected", element.target.value);
    selectedInterval = element.target.value;

    if (selectedInterval === "0") {
      url = `${API_ADDRESS}/humidity_out`;
    } else {
      url = `${API_ADDRESS}/humidity_out/${selectedInterval}`;
      console.log("url", url);
    }

    $.getJSON(url, getJsonCallbackHumidity);
  });
};
