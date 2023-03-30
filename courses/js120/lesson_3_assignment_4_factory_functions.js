/* eslint-disable no-unused-vars */

// link: https://launchschool.com/lessons/e3c64e3f/assignments/bf77a962

function createInvoice(services = {}) {
  if (!services.hasOwnProperty('phone')) services.phone = 3000;
  if (!services.hasOwnProperty('internet')) services.internet = 5500;
  return {
    phone: services.phone,
    internet: services.internet,
    payment: 0,
    total() { return this.phone + this.internet },
    addPayment(payment) { this.payment += payment.total() },
    addPayments(payments) {
      payments.forEach(payment => {
        this.payment += payment.total();
      });
    },
    amountDue() { return this.payment - this.total() }
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}


function createPayment(services = {}) {
  let {amount, phone, internet} = services;
  return {
    phone: phone ?? 0,
    internet:internet ?? 0,
    total() {
      if (amount) return amount;
      return this.phone + this.internet;
    }

  };
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
