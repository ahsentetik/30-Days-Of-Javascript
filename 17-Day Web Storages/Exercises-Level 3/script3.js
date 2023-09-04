let personAccount = {
    firstName: "Ahsen",
    lastName: "Tetik",
    income: [],
    expenses: [],
    totalIncome: function () {
        let total = 0;
        for (let incomeItem of this.income) {
            total += incomeItem;
        }
        return total;
    },
    totalExpense: function () {
        let total = 0;
        for (let expenseItem of this.expenses) {
            total += expenseItem;
        }
        return total;
    },
    accountInfo: function () {
        return {
            name: this.firstName,
            surname: this.lastName,
            totalIncome: this.totalIncome(),
            totalExpense: this.totalExpense(),
        };
    },
    addIncome: function (amount) {
        this.income.push(amount);
    },
    addExpense: function (amount) {
        this.expenses.push(amount);
    },
};

personAccount.addIncome(3500);
personAccount.addExpense(500);
personAccount.addIncome(700);
personAccount.addExpense(500);
personAccount.addExpense(300);



console.log(personAccount.accountInfo());
