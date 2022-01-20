# Auth and Register
+ POST /auth/login
  - body
    {
      phone_number:  int,
      password: string,
    }
  - 200
    {
      id: string,
      account_number: number,
      name: string,
      phone_number: number,
      created_at: string,
    }

+ POST /auth/register
  - body
    {
      phone_number: number,
      password: string,
      first_name: string,
      last_name: string,
    }
  - 200
    {
      id: string,
      account_number: number,
      name: string,
      created_at:  string,
    }

# Transaction
+ POST /wallet/transfer
  - {Authorization: string}
  - {Bearer: user_id}
  - body
    {
      amount: number,
      phone_number: number,
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
  - {Bearer: user_id}
  - body
    {
      amount: real,
      phone_number: number,
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
    created_at: Date,
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
