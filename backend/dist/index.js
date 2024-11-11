import express from "express";
const app = express();
// app variale me express function call kiya.
// 
app.get("/hello", (req, res, next) => {
    return res.send("hello");
});
app.listen(5000, () => console.log("Server open"));
//# sourceMappingURL=index.js.map