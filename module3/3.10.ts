{
    // access modifiers

    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id
            this.name = name
            this._balance = balance
        }

        public addDeposit(amount: number){
            this._balance = this._balance + amount
        }

        public getBalance(){
            return this._balance
        }

        getHiddenMethod(){
            return this.getBalance()
        }
    }

    class studentAccount extends BankAccount{
        test(){
            this._balance
        }
    }

    const goribManuserAccount = new BankAccount(111, 'mr. gorib', 20)
    // goribManuserAccount.balance = 0
    goribManuserAccount.addDeposit(300)
    const myBalance = goribManuserAccount.getBalance()
    console.log(myBalance)

    goribManuserAccount.getHiddenMethod()


}