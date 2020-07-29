import express from 'express';

const app = express();

app.get('/', (resquest, response) => {
  return response.json({ message: 'IBM Cloud Foundry'})
})

app.listen(3333, () => {
  console.log('server on the line')
})

export default app;