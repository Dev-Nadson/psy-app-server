import "dotenv/config"

const env = {
    PORT: Number(process.env.PORT),
    HOST: String(process.env.HOST),
    DATABASE_URL: String(process.env.DATABASE_URL)
}

export { env }