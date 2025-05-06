{
    // getter and setter

    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id
            this.name = name
            this._balance = balance
        }

        // set
        set deposit(amount: number){
            this._balance = this._balance + amount
        }

        // public addDeposit(amount: number){
        //     this._balance = this._balance + amount
        // }


        // getter
        get balance(){
            return this._balance
        }

        // public getBalance(){
        //     return this._balance
        // }

    }


    const goribManuserAccount = new BankAccount(111, 'mr. gorib', 50)
    // goribManuserAccount.deposit = 0
    // goribManuserAccount.addDeposit(300)         // function call korte hocche

    goribManuserAccount.deposit = 50

    // const myBalance = goribManuserAccount.getBalance()      // function call korte hocche

    const myBalance = goribManuserAccount.balance;          // property er moto kore

    console.log(myBalance)




}