async function trainModel() {
    const xs = tf.tensor2d(data.map(d => [d.x]));
    const ys = tf.tensor2d(data.map(d => [d.y]));

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

    await model.fit(xs, ys, { epochs: 100 });

    let predictions = model.predict(xs);
    let predictedY = await predictions.data();

    regressionChart.data.datasets[1] = {
        label: "Predicted Regression Line",
        data: data.map((d, i) => ({ x: d.x, y: predictedY[i] })),
        borderColor: "red",
        type: "line",
        fill: false
    };
    regressionChart.update();
}
