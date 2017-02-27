"use strict"
class Expense {
    constructor(date, store, category, item, amount) {
        this.date = date
        this.store = store
        this.category = category
        this.item = item
        this.amount = parseFloat(amount)
    }

    toTableRow() {
        var row = document.createElement('tr')
        var dt, st, cat, item, amt;
        for (let cell of ['date', 'store', 'category', 'item', 'amount']) {
            let td = document.createElement('td');
            td.innerHTML = this[cell]
            row.appendChild(td)
        }
        return row
    }
}


class ExpenseDB {
    constructor() {
        this.allExpenses = [];
    }

    newExpense(e) {
        this.allExpenses.push(e);
        this.saveMe()
    }

    getExpenses() {
        return this.allExpenses;
    }

    reloadMe() {
        let obs = JSON.parse(localStorage.expensedb);
        for(let e of obs) {
            e = new Expense(e.date, e.store, e.category, e.item, e.amount);
            this.allExpenses.push(e);
        }
    }

    saveMe() {
        localStorage.expensedb = JSON.stringify(this.allExpenses);
    }
}
