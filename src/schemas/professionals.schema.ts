import z from "zod";

const professional_schema = z.object({
    name: z.string().min(3).max(255).trim(),
    email: z.email().trim(),
    password: z.string().min(8).max(32).trim()
})

export { professional_schema }