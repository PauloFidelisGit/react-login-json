const express = require("express")
const accountRoutes = express.Router();
const fs = require('fs');

const REACT_APP_API_KEY = '123JHGFJFgfd';

const dataPath = './src/server/Databases/usersaccounts.json'

const saveAccountData = (data) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(dataPath, stringifyData)
}

const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath)
  return JSON.parse(jsonData)
}

accountRoutes.post('/login', (req, res) => {
  const { username, password } = req.body;
  const jsonData = JSON.parse(fs.readFileSync(dataPath))
  const convertData = [jsonData]
  let status = 'error'
  convertData.map((e) => Object.entries(e).map((f, i) => {
    if (f[1].username === username && f[1].password === password) {
      status = 'sucess';
    }
  }))
  res.json({ status: status });
})

accountRoutes.post('/cadastro', (req, res) => {
  var existAccounts = getAccountData()
  const newAccountId = new Date().getTime()
  existAccounts[newAccountId] = req.body
  saveAccountData(existAccounts);
  res.json({ status: 'sucess' });
})

// reading the data
accountRoutes.get('/account', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});


accountRoutes.post('/account/addaccount', (req, res) => {
  var existAccounts = getAccountData()
  //const newAccountId = Math.floor(100000 + Math.random() * 900000)
  const newAccountId = new Date().getTime()
  existAccounts[newAccountId] = req.body
  saveAccountData(existAccounts);
  res.send({ success: true, msg: 'account data added successfully' })
})

// Read - get all accounts from the json file
accountRoutes.get('/account/list', (req, res) => {
  const accounts = getAccountData()
  res.send(accounts)
})

// Update - using Put method
accountRoutes.put('/account/:id', (req, res) => {
  var existAccounts = getAccountData()
  fs.readFile(dataPath, 'utf8', (err, data) => {
    const accountId = req.params['id'];
    existAccounts[accountId] = req.body;

    saveAccountData(existAccounts);
    res.send(`accounts with id ${accountId} has been updated`)
  }, true);
});

//delete - using delete method
accountRoutes.delete('/account/delete/:id', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    var existAccounts = getAccountData()

    const userId = req.params['id'];

    delete existAccounts[userId];
    saveAccountData(existAccounts);
    res.send(`accounts with id ${userId} has been deleted`)
  }, true);
})
module.exports = accountRoutes