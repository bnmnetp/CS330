"use strict";

class ExpenseController {
    constructor() {
        this.edb = new ExpenseDB();
    }

    redrawTable() {
        let table = document.getElementById("expensetable").getElementsByTagName('tbody')[0]
        let rows = table.getElementsByTagName('tr')

        for (let i = 0; rows.length > 1; i++) {
            rows[1].remove();
        }

        let total = 0.0;
        for(let e of this.edb.getExpenses()) {
            table.appendChild(e.toTableRow());
            total += e.amount
        }

        // add total row
        let row = document.createElement('tr')
        for(let i = 0; i < 5; i++) {
            let td = document.createElement('td')
            row.appendChild(td)
            if(i == 3) {
                td.innerHTML = "<strong>Total</strong>";
            } else if (i == 4) {
                td.innerHTML = `<strong> ${total.toString()}</strong>`;
            }
        }

        table.appendChild(row);

    }

    newExpense() {

        var e = new Expense(document.getElementById('inputdate').value,
            document.getElementById('inputstore').value,
            document.getElementById('inputcategory').value,
            document.getElementById('inputitem').value,
            document.getElementById('inputamount').value);

        this.edb.newExpense(e);
        this.redrawTable();
    }

    updateTable() {
    }

    doReload() {
        this.edb.reloadMe();
        this.redrawTable();
    }

}

var ec = new ExpenseController();

window.onload = function() {
    ec.doReload();
}
