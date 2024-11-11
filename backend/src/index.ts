import app from "./app.js";
import { connectToDatabase} from "./db/connection.js";

 
// connections and Listeneres
connectToDatabase()
.then(() => {
    app.listen(5000, ()=>
        console.log("Server open & connect to Database ")
);
})
.catch((err) => console.log(err));


