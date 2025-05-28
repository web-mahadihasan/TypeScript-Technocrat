
{
//
    
    //* ::: Module 7, OPP(Access modifire) ::: *//

    
    /* 
    * kono value bahire write permission na thakle seta readonly kore rakte hobe.
    * public akta access modifire. class e by default access modifire public thake.
    * sensetie kono info like balance. thakle seta private or protected kore rakte hobe.
    * private e class e funtion use korte pari. tobe best practice hoilo setter or getter funtion use kora
    * private kore rakle seta class a vitore access kora jabe. bahire modifie kora jabe na. private korar convention _ use kora
    * private modifire use korle child class seta available hoy na. best practice hoilo protected use kora.
    * 
    * */

    class bankAccount {
        public readonly id: number;
        public name: string;
        public email: string;
        protected _blance: number

        constructor(id: number, name: string, email: string, blance: number) {
            this.id = id;
            this.name = name;
            this.email = email;
            this._blance = blance;
        }
        addDeposite (newAmount: number) {
            this._blance = this._blance + newAmount
        }
        // function for get balance 
        getBalance (): number {
            return this._blance
        }

    }
    const mahadiAccount = new bankAccount(20022, 'Mahadi Hasan', 'mahadi@g.com', 5000)
    

    // add balance deposite using deposite function. 
    mahadiAccount.addDeposite(50)

    // get balance using get balance funtion 
    console.log(mahadiAccount.getBalance())
    console.log(mahadiAccount)



    // extends e  amra protected access korte parbo 
    class StudentAccount extends bankAccount {
        constructor(id: number, name: string, email: string, balance: number){
            super(id, name, email, balance)
            this.id
            this.name
            this.email
            this._blance
        }
    }

      
    /* 
    * getter and setter funtion for protected or private modifire
    * 
    * */

    class bankAccount2 {
        public readonly id: number;
        public name: string;
        public email: string;
        protected _blance: number

        constructor(id: number, name: string, email: string, blance: number) {
            this.id = id;
            this.name = name;
            this.email = email;
            this._blance = blance;
        }

        // getter funtion 
        get Balance(): number {
            return this._blance
        }
        // setter funtion 
        set Deposite(amount: number){
            this._blance = this._blance + amount
        }

    }
    const user2 = new bankAccount2(9999, 'Hasan', 'mahadi@g.com', 1000)
    console.log(user2)
    console.log(user2.Balance)
    // add new balance using setter funtion like property 
    const newB = user2.Deposite = (2000)
    console.log(user2.Balance)

//
}