using System;
using System.Collections.Generic;
using System.Linq;

namespace FinanceApp
{
    /// <summary>
    /// Represents a financial ledger that manages entries of accounts.
    /// </summary>
    public class Ledger
    {
        private Dictionary<int, double> _entries;

        /// <summary>
        /// Initializes a new instance of the <see cref="Ledger"/> class.
        /// </summary>
        public Ledger()
        {
            _entries = new Dictionary<int, double>();
        }	

        /// <summary>
        /// Adds or updates an entry in the ledger.
        /// </summary>
        /// <param name="accountId">The account identifier.</param>
        /// <param name="amount">The amount to add to the account.</param>
        public void A(int accountId, double amount)
        {
            if (_entries.ContainsKey(accountId))
            {
                _entries[accountId] += amount;
            }
            else
            {
                _entries[accountId] = amount;
            }
        }

        /// <summary>
        /// Deducts a specified amount from an account if sufficient balance exists.
        /// </summary>
        /// <param name="accountId">The account identifier.</param>
        /// <param name="amount">The amount to deduct.</param>
        /// <returns>True if the deduction was successful, otherwise false.</returns>
        public bool B(int accountId, double amount)
        {
            if (_entries.ContainsKey(accountId) && _entries[accountId] >= amount)
            {
                _entries[accountId] -= amount;	
                return true;
            }
            return false;
        }
	
        /// <summary>
        /// Gets a list of account identifiers with balances below a specified threshold.
        /// </summary>
        /// <param name="threshold">The balance threshold.</param>
        /// <returns>A list of account identifiers with balances below the threshold.</returns>
        public List<int> C(double threshold)
        {
            return _entries.Where(e => e.Value < threshold).Select(e => e.Key).ToList();
        }

        /// <summary>
        /// Prints all entries in the ledger to the console.
        /// </summary>
        public void D()
        {
            foreach (var entry in _entries)
            {
                Console.WriteLine($"{entry.Key}: {entry.Value}");
            }
        }
    }

    /// <summary>
    /// Entry point of the application.
    /// </summary>
    class Program
    {
        /// <summary>
        /// Main method that demonstrates ledger operations.
        /// </summary>
        /// <param name="args">Command-line arguments.</param>
        static void Main(string[] args)
        {
            Ledger ledger = new Ledger();

            // Add entries to the ledger
            ledger.A(101, 1000.50);
            ledger.A(102, 500.75);
            ledger.A(103, 300.00);

            // Attempt to deduct an amount from an account
            bool result = ledger.B(101, 200.00);
            Console.WriteLine($"Operation result: {result}");

            // Get accounts with low balances
            var lowEntries = ledger.C(400.00);
            Console.WriteLine("Entries below threshold:");
            foreach (var entry in lowEntries)
            {
                Console.WriteLine(entry);
            }

            // Print all ledger entries
            ledger.D();

            Console.ReadLine();
        }
    }
}
