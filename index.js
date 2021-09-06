import * as tf from '@tensorflow/tfjs-node'
const fs = require('fs');

async function GenerateNegativeNumbers() {

    //method--1
    const model = tf.sequential()
    
    //hidden layer creation
    model.add(tf.layers.dense({ inputShape: [60], units: 5}))
    
    model.compile(
        {
            optimizer: 'sgd',
            loss: 'meanSquaredError',
            metrics: ['accuracy']
        }
    )
    
    const dataJsonX = await JSON.parse(fs.readFileSync('sliced_X_Data.json'))
 
    const dataJsonY = await JSON.parse(fs.readFileSync('sliced_Y_Data.json'))


    const data = tf.tensor(dataJsonX, [882, 60])
    const labels = tf.tensor(dataJsonY, [882, 5])
    
    const trainedNet = await model.fit(data, labels, {epochs: 1000})
    await model.save("file:////home/andrew/CODE/JS/MACHINE_LEARNING/LSTM/final_project/model")
    }
    GenerateNegativeNumbers()