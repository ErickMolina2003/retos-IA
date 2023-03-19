// const synaptic = require('synaptic');
// Definir la estructura de la red neuronal
const inputLayer = new synaptic.Layer(2);
const hiddenLayer = new synaptic.Layer(3);
const outputLayer = new synaptic.Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new synaptic.Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

// Entrenar la red neuronal
const trainingSet = [
    {
        input: [0, 0],
        output: [0]
    },
    {
        input: [0, 1],
        output: [1]
    },
    {
        input: [1, 0],
        output: [1]
    },
    {
        input: [1, 1],
        output: [0]
    }
];

const trainer = new synaptic.Trainer(myNetwork);
trainer.train(trainingSet, {
    iterations: 10000,
    log: false,
    learningRate: 0.1
});

// Probar la red neuronal
console.log('[0,0] -> ', myNetwork.activate([0, 0])); // [0.01622494289822716]
console.log('[0,1] -> ', myNetwork.activate([0, 1])); // [0.9826215738100118]
console.log('[1,0] -> ', myNetwork.activate([1, 0])); // [0.9832194654888745]
console.log('[1,1] -> ', myNetwork.activate([1, 1])); // [0.0206172358326049]