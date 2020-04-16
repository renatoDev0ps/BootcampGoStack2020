import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

interface CreateTransactionsDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface BalanceDTO {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance({ income, outcome, total }: BalanceDTO): Balance {
    // TODO
  }

  public create({ title, value, type}: CreateTransactionsDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
