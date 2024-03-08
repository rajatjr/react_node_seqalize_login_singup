const express = require('express')
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./Config/Db");
const sync = require("./Model/TableSync")
const userrouter = require("./Routes/UserRoutes");
const productroutes = require("./Routes/ProductRoutes")
dotenv.config();
var bodyParser = require('body-parser')
sync();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use("/", userrouter);
app.use("/",productroutes)
app.get('/', () => {
    console.log("hello")
})

app.listen(5000, () => console.log('Server running at port 5000'));