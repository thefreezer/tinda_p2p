# Auth and Register
+ POST /auth/login
  - body
    {
      email:  string,
      password: string,
    }
  - 200
    {
      id: string,
      accountNumber: number,
      name: string,
      phoneNumber: number,
      createdAt: Date
    }

+ POST /auth/register
  - body
    {
      phoneNumber: number,
      password: string,
      name: string,
    }
  - 200
    {
      id: string,
      accountNumber: number,
      name: string,
      createdAt:  Date,
    }


# Transaction
+ POST /wallet/transfer
  - {Authorization: string}
  - body
    {
      amount: number,
      destAccNumber: number,
    }

  - 200
    {
      transaction: {
        id: string,
        accountNumber: number,
        destAccNumber: number,
        operation: string,
        amount: number,
        createdAt: Date,
      },
      customer: {
        id: string,
        name: string,
        phoneNumber: number,
        createdAt: Date,
      }
    }
  - Bad Request 400
  - Unauthorized 401
  - Forbidden 403

+ POST /wallet/deposit
  - {Authorization: string}
  - body
    {
      amount: number,
    }

  - 200
    {
      transaction: {
        id: string,
        accountNumber: number,
        destAccNumber: number,
        operation: string,
        amount: number,
        createdAt: Date,
      },
      customer: {
        id: string,
        name: string,
        phoneNumber: number,
        createdAt: Date,
      }
    }
  - Bad Request 400
  - Unauthorized 401
  - Forbidden 403

+ GET /wallet/transactions
  - {Authorization: string}
  - body {}
  - 200
  {
    id: string,
    accountNumber: number,
    phoneNumber: number,
    balance: number,
    createAt: Date,
  }

# General
+ GET /wallet/balance
  - {Authorization: string}
  - body {}
  - 200
  {
    id: string,
    accountNumber: number,
    phoneNumber: number,
    balance: number,
    createAt: Date,
  }

+ GET /user/:id
  - Authorization: string,
  - body {}
  - 200
   {
     id: string,
     accountNumber: number,
     phoneNumber: number,
     name: string,
   }

+ PATCH /user/:id
  - Authorization: string,
  - body
    {
      name: string,
      password: string,
      phoneNumber: number,
      address: string,
    }
  - 200
   {
     id: string,
     accountNumber: number,
     phoneNumber: number,
     name: string,
   }
