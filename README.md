# SMSApi
post and get sms information using Api

implementation in node.js

1. make sure Node.js and mongodb installed in your system 
2. run command <br>
``
npm init -y
``

the above command will create a package.json file.

3. create app.js folder cpoy given code from app.js into  your file

4.run command

``
npm install express mongodb body-parser --save
``

5. To run test run command given and test requests on postman workspace

``
node app.js
``

below requests are tested with postman agent

post request using postman agent:

# for 3 messages 

``
localhost:3000/sms
``

````
{
        "source_number": 7478222876,
        "destination_number": 9258382192,
        "messages": [
            {
                "status": "read",
                "text": "what is your first name",
                "date": "2021-04-10"
            },
            {
                "status": "unread",
                "text": "what is your last name",
                "date": "2021-04-09"
            },
            {
                "status": "read",
                "text": "this is sample text",
                "date": "2021-04-01"
            }
        ]
    }
    
````

````
output:
{
    "n": 1,
    "ok": 1
}
 ````

get Request with source and destination number:

``
localhost:3000/sms/getdata
``

request body:

````
    {
    "source_number": 7478222876,
    "destination_number": 9258382192
    }
 ````



result is sorted by date :

````
{
    "page": 1,
    "per_page": 10,
    "pre_page": null,
    "next_page": null,
    "total": 3,
    "total_pages": 1,
    "data": [
        {
            "status": "read",
            "text": "this is sample text",
            "date": "2021-04-01"
        },
        {
            "status": "unread",
            "text": "what is your last name",
            "date": "2021-04-09"
        },
        {
            "status": "read",
            "text": "what is your first name",
            "date": "2021-04-10"
        }
    ]
}
````

# with more than 10 messages

post request:

``
localhost:3000/sms
``

request body:

````
 {
        "source_number": 7477722276,
        "destination_number": 9212382192,
        "messages": [
            {
                "status": "read",
                "text": "what is your first name",
                "date": "2021-04-10"
            },
            {
                "status": "unread",
                "text": "what is your last name",
                "date": "2021-04-09"
            },
            {
                "status": "read",
                "text": "this is sample text1",
                "date": "2021-03-01"
            },
            {
                "status": "read",
                "text": "this is sample text 2",
                "date": "2021-04-01"
            },
            {
                "status": "read",
                "text": "this is sample text 3",
                "date": "2021-04-07"
            },
            {
                "status": "read",
                "text": "this is sample text 4",
                "date": "2021-04-09"
            },
            {
                "status": "read",
                "text": "this is sample text 5",
                "date": "2021-04-13"
            },
            {
                "status": "read",
                "text": "this is sample text 6",
                "date": "2021-01-01"
            },
            {
                "status": "read",
                "text": "this is sample text 7",
                "date": "2021-04-20"
            },
            {
                "status": "read",
                "text": "this is sample text 8",
                "date": "2021-04-11"
            },
            {
                "status": "read",
                "text": "this is sample text 9",
                "date": "2021-03-23"
            }
        ]
    }
````

output:

````
{
    "n": 1,
    "ok": 1
}
````


get request to get 10 messages as added pagination:

``
localhost:3000/sms/getdata
``

request body:

````
 {
        "source_number": 7477722276,
        "destination_number": 9212382192
 }
````

output:

10 messages sorted by date :

````
{
    "page": 1,
    "per_page": 10,
    "pre_page": null,
    "next_page": 2,
    "total": 11,
    "total_pages": 2,
    "data": [
        {
            "status": "read",
            "text": "this is sample text 6",
            "date": "2021-01-01"
        },
        {
            "status": "read",
            "text": "this is sample text1",
            "date": "2021-03-01"
        },
        {
            "status": "read",
            "text": "this is sample text 9",
            "date": "2021-03-23"
        },
        {
            "status": "read",
            "text": "this is sample text 2",
            "date": "2021-04-01"
        },
        {
            "status": "read",
            "text": "this is sample text 3",
            "date": "2021-04-07"
        },
        {
            "status": "unread",
            "text": "what is your last name",
            "date": "2021-04-09"
        },
        {
            "status": "read",
            "text": "this is sample text 4",
            "date": "2021-04-09"
        },
        {
            "status": "read",
            "text": "what is your first name",
            "date": "2021-04-10"
        },
        {
            "status": "read",
            "text": "this is sample text 8",
            "date": "2021-04-11"
        },
        {
            "status": "read",
            "text": "this is sample text 5",
            "date": "2021-04-13"
        }
    ]
}

````


