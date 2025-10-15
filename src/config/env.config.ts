import "dotenv/config"

const env = {
    PORT: Number(process.env.PORT),
    HOST: String(process.env.HOST)
}

export { env }