import { create_app } from "./app.js";
import { env } from "./config/env.config.js";

const PORT = env.PORT
const HOST = env.HOST

create_app().then((app) => {
    app.listen({ "port": PORT, "host": HOST }).then(() => {
        console.log(`Server is running on port: ${PORT}`)
        console.log(`Access on URL http://localhost:${PORT}`)
    })
})

