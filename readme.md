# Project Name

Brief description of your project goes here. Explain what the project does and its purpose.

## Table of Contents

-   [Project Name](#project-name)
    -   [Table of Contents](#table-of-contents)
    -   [Technologies Used](#technologies-used)
    -   [Installation](#installation)
    -   [endpoints](#endpoints)
        -   [transactions ndpoints](#transactions-ndpoints)
            -   [POST /transactions](#post-transactions)
            -   [GET /transactions](#get-transactions)
            -   [PUT /transactions](#put-transactions)
            -   [DELETE /transactions](#delete-transactions)
            -   [GET /summary](#get-summary)
-   [postman collection](#postman-collection)

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB (or any other database)
-   JWT (for authentication)
-   (Add any other technologies you used)

## Installation

1. Clone the repository:
    ```bash
    https://github.com/Venkatesh3696/flowai_expense_tracker
    ```
2. install dependencies:
    ```bash
    npm install
    ```
3. install dependencies:
    ```bash
    npm start
    ```

## endpoints

### transactions ndpoints

#### POST /transactions

-   **Description**: Create a new transaction
-   body:{
    "type": "income",
    "category": "salary",
    "amount": "10000",
    "description": "monthly salary"
    }
-   **Response**: 201 Created
-   {
    "type": "income",
    "category": "salary",
    "amount": 10000,
    "description": "monthly salary",
    "\_id": "6718896b8db98d07a8ba4c84",
    "createdAt": "2024-10-23T05:28:11.083Z",
    "updatedAt": "2024-10-23T05:28:11.083Z",
    "\_\_v": 0
    }

#### GET /transactions

-   **Description**: Get all transactions
-   **Response**: 201 Created
-   {
    "type": "income",
    "category": "salary",
    "amount": 10000,
    "description": "monthly salary",
    "\_id": "6718896b8db98d07a8ba4c84",
    "createdAt": "2024-10-23T05:28:11.083Z",
    "updatedAt": "2024-10-23T05:28:11.083Z",
    "\_\_v": 0
    }

#### PUT /transactions

-   **Description**: Get all transactions

-   body:  
    {
    "type": "income",
    "category": "salary",
    "amount": "10000",
    "description": "monthly salary"
    }
-   **Response**: 201 Created
-   {
    "type": "income",
    "category": "salary",
    "amount": 10000,
    "description": "monthly salary",
    "\_id": "6718896b8db98d07a8ba4c84",
    "createdAt": "2024-10-23T05:28:11.083Z",
    "updatedAt": "2024-10-23T05:28:11.083Z",
    "\_\_v": 0
    }

#### DELETE /transactions

-   **Description**: delete transactions by id
-   **Response**: 201 Created
-   {
    "message ": "transaction deleted"
    }

#### GET /summary

-   **Description**: Get summary of all transactions

-   body:  
    {
    "type": "income",
    "category": "salary",
    "amount": "10000",
    "description": "monthly salary"
    }
-   **Response**: 201 Created
-   {
    "totalIncome": 20000,
    "totalExpense": 300,
    "balance": 19700
    }

# postman collection

you can see my all postmen requests here

https://www.postman.com/flight-physicist-30764010/public-workspace-for-sharing-tests/collection/t4swdur/flow-ai?action=share&creator=29785132
