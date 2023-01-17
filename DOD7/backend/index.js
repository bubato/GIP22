import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PositionRoute from "./routes/PositionRoute.js";
import DocumentRoute from "./routes/DocumentRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect('mongodb://127.0.0.1:27017/document_management',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(PositionRoute);
app.use(DocumentRoute);

app.listen(5000, ()=> console.log('Server up and running... http://127.0.0.1:5000'));