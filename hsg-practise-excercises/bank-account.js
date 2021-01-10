"use strict";

const prompt = require("prompt");
const fs = require("fs");

const whichAccountMessage = `Which account do you want to use?
							
1 - USD
2 - HUF`;

class Currency {
  constructor(code, centralBankName, value) {
    this.code = code;
    this.centralBankName = centralBankName;
    this.value = value;
  }
}

class BankAccount {
  constructor(name, pinCode, Currency) {
    this.name = name;
    this.pinCode = pinCode;
    this.Currency = Currency;
  }

  getAllMoney() {
    console.log();
    console.log(
      `Account: ${BankUSDAccount.Currency.code} Balance: ${BankUSDAccount.Currency.value}`
    );
    console.log(
      `Account: ${BankHUFAccount.Currency.code} Balance: ${BankHUFAccount.Currency.value}`
    );
    console.log();
  }

  deposit(amount) {
    console.log("How much do you want to deposit?");
    let self = this; //created a variable to store "this" and make accessible within prompt
    prompt.get(["amount"], function (err, result) {
      if (err) {
        return onErr(err);
      }
      let amount = parseInt(result.amount);
      if (amount < 0) {
        console.error("Amount must be a positive number!");
      } else {
        let data = getData();
        data[self.Currency.code] += amount;
        setData(data);
      }
    });
  }

  withdraw(pinCode, amount) {
	console.log("How much do you want to withdraw?");
	let self = this;
	prompt.get(["amount", "pinCode"], function (err, result) {
        if (err) {
          return onErr(err);
        }
		let amount = result.amount;
		let pinCode = parseInt(result.pinCode);
		if (amount < 0) {
			console.error("Amount must be a positive number!");
		}else if (amount > self.Currency.value) {
			console.error('Not enough balance!');
		}else if (pinCode !== self.pinCode) {
			console.error('Wrong PIN code!');
		} else {
			let data = getData();
			data[self.Currency.code] -= amount;
			setData(data);
		}
      });
  }
}

function getData() {
  const data = JSON.parse(fs.readFileSync("./bank_account.json", "utf-8"));
  return data;
}

function setData(data) {
  let jsonToWrite = JSON.stringify(data, null, "\t");
  fs.writeFileSync("./bank_account.json", jsonToWrite);
}

const USADollar = new Currency("USD", "Federal Reserve System", getData().USD);
const HungarianForint = new Currency("HUF", "Hungarian National Bank", getData().HUF);

const BankUSDAccount = new BankAccount("USD Account", 1212, USADollar);
const BankHUFAccount = new BankAccount("HUF Account", 2424, HungarianForint);

// * * * * * * * * * * * * * PROGRAM START * * * * * * * * * * * * *

console.log(
  `Select operation:

1 - account balance
2 - desposit
3 - withdraw`
);

prompt.start();

prompt.get(["command"], function (err, result) {
  if (err) {
    return onErr(err);
  }
  let command = result.command;
  switch (command) {
    case "1":
      BankUSDAccount.getAllMoney();
      break;
    case "2":
      console.log(whichAccountMessage);
      prompt.get(["command"], function (err, result) {
        if (err) {
          return onErr(err);
        }
        let command = result.command;
        switch (command) {
          case "1":
            BankUSDAccount.deposit();
            break;
          case "2":
            BankHUFAccount.deposit();
            break;
        }
      });
      break;
    case "3":
      console.log(whichAccountMessage);
      prompt.get(["command"], function (err, result) {
        if (err) {
          return onErr(err);
        }
        let command = result.command;
        switch (command) {
          case "1":
            BankUSDAccount.withdraw();
            break;
          case "2":
            BankHUFAccount.withdraw();
            break;
        }
      });
      break;
  }
});

function onErr(err) {
  console.log(err);
  return 1;
}
