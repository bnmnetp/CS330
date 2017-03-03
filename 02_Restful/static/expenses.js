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
        this.saveMe(e)
    }

    getExpenses() {
        return this.allExpenses;
    }

    reloadMe() {
        var waitfor = new $.Deferred();
        var self = this;
        $.ajax({
            url: "http://localhost:8088/api/v1/expenses"
        }).done(function(data) {
            for(let e of data) {
                e = new Expense(e.date, e.store, e.category, e.item, e.amount);
                self.allExpenses.push(e);
            }
            //waitfor.resolve()
            $("#expensetable").trigger("edbupdate")
        });
        return waitfor;
    }

    saveMe(e) {
        //localStorage.expensedb = JSON.stringify(this.allExpenses);
        $.ajax({
            url: "http://localhost:8088/api/v1/expenses",
            method: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(e),
            dataType: "json",
        }).done(function() {$("#expensetable").trigger("edbupdate")}).fail(function() {alert("Could not save your expense.....")});
    }
}
