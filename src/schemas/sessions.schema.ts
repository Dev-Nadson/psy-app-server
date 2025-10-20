import z from "zod";

const session_schema = z.object({
    email: z.email().trim(),
    password: z.string().min(8).max(32).trim()
})

export { session_schema }