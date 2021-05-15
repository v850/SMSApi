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

below requests are tested with postman

Get request data :

``
localhost:3000/sms
``

````
[
    {
        "_id": "609ebcf96ef86b73bcda01dc",
        "source_number": 7642442876,
        "destination_number": 9286421292,
        "messages": [
            {
                "status": "read",
                "text": "i am vaishnavi",
                "date": "2021-04-12"
            }
        ]
    },
    {
        "_id": "609ec19a881c351144cfce83",
        "source_number": 7646862876,
        "destination_number": 926549982,
        "messages": "how are you",
        "status": "read",
        "date": "2021-06:12"
    }
]
````
select delete request from postman APi  :any ID to delete <br>

Delete:<br>

``
localhost:3000/sms/609ec19a881c351144cfce83
``

o/p:
````
{
    "n": 1,
    "ok": 1
}
````

post request using postman API:

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
[
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
````
