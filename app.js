const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const json = require('body-parser/lib/types/json');
const CONNECTION_URL = "mongodb://localhost:27017/";

const DATABASE_NAME = "sms";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
var database, collection;


app.get("/sms", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.post("/sms", (request, response) => {
    var source=request.body.source_number.toString();
    var destiation=request.body.destination_number.toString();
     if(source.length==10 && destiation.length==10){
    //     // response.send("Success",result.result);
         collection.insertOne(request.body, (error,result) => {
            if(error) {
                return response.status(500).send(error);
            }
              response.send(result.result);
        });
      
    }
    else{
        response.send("Fail to insert into database. add correct  mobile Number");
    }
   
    
});


function Paginator(items, page, per_page) {
 
    var page = page || 1,
    per_page = per_page || 10,
    offset = (page - 1) * per_page,
   
    paginatedItems = items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(items.length / per_page);
    return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: (total_pages > page) ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
    };
  }

app.get("/sms/getdata", (request, response) => {
    collection.findOne({source_number:request.body.source_number,destination_number:request.body.destination_number},function(error, result) {
        if(error) {
            return response.status(500).send(error);
        }
        var json=result.messages
        json.sort(function(a, b){

            return new Date(a.date).valueOf()-new Date(b.date).valueOf();
        });
        response.send(Paginator(json))    
      });
});



app.delete('/sms/:id', (req, res) => {

        collection.deleteOne({"_id":ObjectId(req.params.id)}, function(err, obj) {
            if(err) {
                return response.status(500).send(error);
            }
            res.send(obj.result)
            console.log("1 document deleted");
            
          });
//code to delete document
 
});

app.put('/sms/:id', (req, res) => {
    const { id } = req.params;
    // code to update an article...
    res.json(req.body);
  });

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true  }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        
        collection = database.collection("SMSCollection");
        console.log("Connected to `" + DATABASE_NAME + "`!");

    });
});