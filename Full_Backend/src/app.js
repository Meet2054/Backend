import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }));

app.use(express.json(
    {limits:"20kb"}
    ));
    
app.use(express.urlencoded(
    {extended:true},
    {limits: '20kb'}
));
app.use(express.static('public'));
app.use(cookieParser());

export {app};