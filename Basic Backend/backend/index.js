import express from "express";

const app = express();

const Port = process.env.PORT || 3000;


app.get("/",(rq,res)=>{
    res.send("Server is Healthy!");
})

app.get("/api/jokes",(rq,res)=>{
    const jokes = [
        {
            "id": 1,
            "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "joke": "Why did the chicken join a band? Because it had the drumsticks!"
        },
        {
            "id": 3,
            "joke": "What do you get if you cross a snowman and a vampire? Frostbite!"
        },
        {
            "id": 4,
            "joke": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            "id": 5,
            "joke": "What do you call fake spaghetti? An impasta!"
        },
        {
            "id": 6,
            "joke": "Why was the math book sad? Because it had too many problems."
        },
        {
            "id": 7,
            "joke": "Why are ghosts bad at lying? Because they are too transparent."
        },
        {
            "id": 8,
            "joke": "What do you call cheese that isn't yours? Nacho cheese!"
        },
        {
            "id": 9,
            "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 10,
            "joke": "How does a penguin build its house? Igloos it together!"
        }
    ]
    res.json(jokes);     
});

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})