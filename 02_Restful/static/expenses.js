"use strict"
class Expense {
    constructor(date, store, category, item, amount, id) {
        this.date = date;
        this.store = store;
        this.category = category;
        this.item = item;
        this.amount = parseFloat(amount);
        if (id !== undefined) {
            this.id = id;
        }
    }

    toTableRow(deletecb) {
        let exp_fmt = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 2 });
        var row = document.createElement('tr')
        var dt, st, cat, item, amt;
        for (let cell of ['date', 'store', 'category', 'item', 'amount']) {
            let td = document.createElement('td');
            if (cell == 'amount') {
                td.innerHTML = exp_fmt.format(this[cell])
            } else {
                td.innerHTML = this[cell]
            }
            row.appendChild(td)
        }
        let td = document.createElement('td')
        let butt = document.createElement('button')
        butt.id = this.id;
        butt.innerHTML = 'Delete';
        butt.onclick = function() {ec.deleteExpense(this.id); };
        td.appendChild(butt);
        row.appendChild(td);
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

    deleteExpense(id) {
        let done = false;
        let i;
        for (i = 0; i < this.allExpenses.length && !done; i++) {
            if (this.allExpenses[i].id == id) {
                done = true;
            }
        }
        if (done) {
            this.allExpenses.splice(i-1,1);
            $.ajax({
                url: `http://localhost:8088/api/v1/expenses/${id}`,
                method: 'DELETE',
            }).done(function(data) {console.log('deleted')} );
            $("#expensetable").trigger("edbupdate") // trigger edbupdate event to cause table refresh
        }
    }

    reloadMe() {
        var waitfor = new $.Deferred();
        var self = this;
        $.ajax({
            url: "http://localhost:8088/api/v1/expenses"
        }).done(function(data) {
            for(let e of data) {
                e = new Expense(e.date, e.store, e.category, e.item, e.amount, e._id["$oid"]);
                self.allExpenses.push(e);
            }
            //waitfor.resolve()
            $("#expensetable").trigger("edbupdate") // trigger edbupdate event to cause table refresh
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
        }).done(function(data) {
            e.id = data._id["$oid"]
            $("#expensetable").trigger("edbupdate"); // trigger edbupdate event to cause table refresh
            }).fail(function() {alert("Could not save your expense.....")});
    }
}
