console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)
app.controller("loanController", loanController)


function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

function loanController(){
  this.amount = 500;
  this.apr = 2.2;
  this.month = (n) => {
    var yearly_interest = (this.amount * (this.apr / 100) );
    var monthly_interst = ( yearly_interest / 12 );
    var accrued_interest = n * monthly_interst || 0;
    return {
      accrued_interest: accrued_interest,
      total_balance: this.amount + accrued_interest
    }
  }
}