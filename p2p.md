p2p_money transfer network: Tinda

# TODO
- [done] user stories
- [in_progress] kotlin app
- [done] database schema
- [done] apis documentation

## User stories
### As a user I want to:
[api][node_test][app_test]
. [x][][] login using _phone number_ and _password_
. [x][][] register using _phone number_, _password_, _name_
. [x][][] __send money__ to contact with Tinda account
. [x][][] __send money__ to contact with no Tinda account

. [x][][] __send money__ to stranger with no Tinda account
. [x][][] __send money__ to stranger with Tinda account
. [x][][] __add funds__ by showing admin _phone number_, _account number_
. [x][][] view 4 most recents activities
. [x][][] view all recent activities sorted by date

. [x][][] view total current balance

. [x][][] view and edit personal info(_name_, _phone number_, _address_, _pin_)

### As an admin I want to:
. [][][] login using _username_ and _password_
. [][][] register using _username_, _name_, and _password_
. [][][] __add funds__ to user with Tinda account
. [][][] __send money__ to user with no Tinda account
. [][][] __send money__ to user with Tinda account
. [][][] __make withdrawal__ for any user with valid transfer information
. [][][]


### Discussions
- web app or curl calls

### Fragments
- [created][design][logic]
1. [x][][] Home
2. [x][][] Add
3. [x][][] Send_1
4. [x][][] Profile
5. [][][] ChangePin
6. [x][][] NewContact
7. [x][][] SearchContact
8. [x][][] SelectAmount
9. [x][][] Confirmation
10. - [x][][] ViewBalance
11. - [x][][] ViewRecActivity

### Workflow
index.js includes <app.js> -> routes -> index.js -> auth/transaction.route.js -> auth/transactionController

### Tables
+ users (
    id           uuid
    password          varchar(255)
    first_name        varchar(255)
    last_name         varchar(255)
    phone_number      integer(unique)
    address           varchar(255)
    account_number    uuid
    created_at        varchar(255)
  )

+ wallets (
    account_number    uuid
    balance           real
    created_at        varchar(255)
)

+ transactions (
    id                uuid
    from_id           uuid
    to_id             uuid
    amount            real
    operation         varchar(10)
    created_at        varchar(255)
)

### Notes
- user.id, user.phone_number, user.account_number should be unique
- *token contains user.id*

### API TODO
- [] when creating new user, phone_number should be unique
- [] cannot send money to yourself
- [] user not found proper response

- [] permission for deposit route

- [] return of POST /auth/login
- [] return of POST /auth/register

- [] return of POST /wallet/deposit
- [] return of POST /wallet/transfer
- [] return of POST /wallet/transactions
- [] return of GET  /wallet/balance

### API documentation
- POST /auth/login
- POST /auth/register

- POST /wallet/deposit
- POST /wallet/transfer
- POST /wallet/transactions
- GET  /wallet/balance


- GET  /user/:id
- PATCH /user/:id
