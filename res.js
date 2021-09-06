import * as tf from '@tensorflow/tfjs-node'
const fs = require('fs');

const predict = async () => {

//loading model
const loadingModel = await tf.loadLayersModel('file:////home/andrew/CODE/JS/MACHINE_LEARNING/LSTM/final_project/model/model.json');

//loading test data
const dataJson = JSON.parse(fs.readFileSync('data_for_check.json'))

// 4. Make a prediction
const testPredictValue = tf.tensor(dataJson, [1, 60])
const prediction = await loadingModel.predict(testPredictValue).data()

console.log(prediction);
}
predict()