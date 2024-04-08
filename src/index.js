require('dotenv').config()

const express = require("express");
const ngrok = require("ngrok");
var cors = require('cors');



// Routers 
const controllerRouter = require("./routes/controllerRouter");
// end

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended: false
}));


const PORT = process.env.PORT;

//

app.use(function(req,res,next){
    var _send = res.send;
   var sent = false;
   res.send = function(data){
       if(sent) return;
       _send.bind(res)(data);
       sent = true;
   };
   next();
});


app.use('/', controllerRouter)


app.all("*", async (request, response) => {

    try {
        
        response.status(404).json({
            message: "route not found",
            code: 404,
            timestamp: Date.now()
        })
        // response.sendStatus(404)
    } catch (error) {

        throw new Error(error)
        
    }
})




app.listen(PORT , async () => {

    await ngrok.authtoken(process.env.AUTH_TK);
    const url = await ngrok.connect(PORT);
    console.log('TUNNEL URL: '+url)

    console.log("app is running on port: "+PORT)
});
