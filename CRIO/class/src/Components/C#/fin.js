class Ledger {
  constructor() {
    this.entries = new Map();
  }

  A(accountId, amount) {
    if (this.entries.has(accountId)) {
      this.entries.set(accountId, this.entries.get(accountId) + amount);
    } else {
      this.entries.set(accountId, amount);
    }
  }

  B(accountId, amount) {
    if (this.entries.has(accountId) && this.entries.get(accountId) >= amount) {
      this.entries.set(accountId, this.entries.get(accountId) - amount);
      return true;
    }
    return false;
  }

  C(threshold) {
    let lowBalanceAccounts = [];
    for (let [accountId, balance] of this.entries) {
      if (balance < threshold) {
        lowBalanceAccounts.push(accountId);
      }
    }
    return lowBalanceAccounts;
  }

  D() {
    for (let [accountId, balance] of this.entries) {
      console.log(`${accountId}: ${balance}`);
    }
  }
}

// Usage
let ledger = new Ledger();

// Add entries to the ledger
ledger.A(101, 1000.5);
ledger.A(102, 500.75);
ledger.A(103, 300.0);

// Attempt to deduct an amount from an account
let result = ledger.B(101, 200.0);
console.log(`Operation result: ${result}`);

// Get accounts with low balances
let lowEntries = ledger.C(400.0);
console.log("Entries below threshold:");
for (let entry of lowEntries) {
  console.log(entry);
}

// Print all ledger entries
ledger.D();
