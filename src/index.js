const express = require('express');
const crypto = require('crypto');
const app = express();

/*

Statement: List of all balance changes, like credit and debit (Extrato, in pt-br)

Statement = {
    description: string,
    amount: number,
    created_at: date,
    type: "credit" | "debit",
  }

Customer = {
  cpf: string;
  name: string;
  statement: Statement[]
}

*/

const customers = [];

function verifyIfAccountCpfExists(request, response, next) {
  // TODO

  // Use this hint wisely -> require.customer = customer

  return next();
}

function getBalance(statement) {
  // TODO: Show the current balance of the customer using it's statement

  return balance;
}

app.post('/account', (request, response) => {
  // TODO: Create a new customer account
});

app.get('/statement', (request, response) => {
  // TODO: List all operations fron a customer
});

app.post('/deposit', (request, response) => {
 // TODO: add a deposit (credit) to the statement list
});

app.post('/withdraw', (request, response) => {
  // TODO: add a withdraw (debit) to the statement list 
});

app.listen(3333, console.log('Server has started...'));
