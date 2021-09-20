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
    id
    password
    first_name
    last_name
    phone_number
    address
    created_at
  )

+ wallets (
    account_number
    user_id
    balance
)

+ transactions (
    id
    from_id
    to_id
    amount
    operation
)

### API documentation
- POST /auth/login
- POST /auth/register

- POST /wallet/deposit
- POST /wallet/transfer
- GET /wallet/transactions
- GET  /wallet/balance


- GET  /user/:id
- PATCH /user/:id
