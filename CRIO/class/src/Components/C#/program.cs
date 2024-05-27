using System;

namespace BankingSystem
{
  public class BankAccount
  {
    public string AccountNumber {
      get;
      set;
    }

    public string AccountHolder {
      get;
      set;
    }

    public decimal Balance {
      get;
      private set;
    }

    public void Deposit(decimal amount)
    {
      Balance += amount;
    }

    public void Withdraw(decimal amount)
    {
      if (Balance >= amount)
      {
        Balance -= amount;
      } else
      {
        Console.WriteLine("Insufficient funds.");
      }
    }
  }

  class Program
  {
    static void Main(string[] args)
    {
      BankAccount account = new BankAccount
      {
        AccountNumber = "123456789",
          AccountHolder = "John Smith"
      };
      account.Deposit(1000);
      Console.WriteLine("Balance: " + account.Balance);
      account.Withdraw(500);
      Console.WriteLine("Balance: " + account.Balance);
      account.Withdraw(600);
      Console.WriteLine("Balance: " + account.Balance);
    }
  }
}