document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // In a real application, you would perform an AJAX request to a server for authentication
      // For simplicity, let's assume valid credentials are "user" and "password"
      if (username === "user" && password === "password") {
          // Display success message and redirect to dashboard.html on successful login
          successMessage.textContent = "Login successful! Redirecting...";
          setTimeout(function() {
              window.location.href = "dashboard.html";
          }, 2000); // Redirect after 2 seconds
      } else {
          errorMessage.textContent = "Invalid credentials. Please try again.";
      }
  });
});


// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen){
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
    }
}

//BAR CHART 
var barChartOptions = {
    series: [{
    data: [200, 185, 160, 132, 111]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: { show: false},
  },

  colors : [
    "#000000",
    "#cc3c43",
    "#000000",
    "#cc3c43",
    "#000000"
  ],

  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },

  dataLabels: {
    enabled: false
  },

  legend: {
    show: false
  },

  xaxis: {
    categories: ['wuthering Heights', 'Jane Eyre', 'The Odyssey', 'Ulysses', 'The Great Gatsby'
    ],
  },

  yaxis: {
    title: {
        text: "Count"
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();

  //AREA CHARTS

  var areaChartOptions = {
    series: [{
    name: '2022',
    data: [2000, 1500, 3000, 4700, 3678, 4300, 2600, 5000, 4800, 3800, 5010, 6000
        ]
  }, {
    name: '2023',
    data: [5500, 6900, 4500, 6100, 7000, 5400, 8000, 8800, 7600, 8900, 9500 ,10000]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar: { show: false},
  },

  colors: [ "#000000","#cc3c43"],
  dataLabels: {enabled: false,},
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: '2022',
      },
    },
    {
      opposite: true,
      title: {
        text: '2023',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

  



