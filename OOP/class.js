class Account{
    acc_bal=0
    create_account(){
        //console.log(this.acc_bal);
        this.acc_bal =this.acc_bal+5000

    }
    deposite_money(){
        console.log("money diposited successfully!!!");
    }
    withdrawl(){
        console.log("money widthdrawl successfully!!!");
    }
}
let a1 =new Account()
a1.create_account();
a1.deposite_money();
a1.withdrawl();