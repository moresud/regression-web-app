const data = [];
for (let i = 0; i < 10; i++) {
    let x = i;
    let y = 2 * x + 1 + Math.random() * 2; // y = 2x + 1 with noise
    data.push({ x, y });
}

const ctx = document.getElementById("regressionChart").getContext("2d");
const regressionChart = new Chart(ctx, {
    type: "scatter",
    data: {
        datasets: [{
            label: "Original Data",
            data: data.map(d => ({ x: d.x, y: d.y })),
            backgroundColor: "blue"
        }]
    },
    options: {
        scales: {
            x: { type: "linear", position: "bottom" },
            y: { beginAtZero: true }
        }
    }
});
