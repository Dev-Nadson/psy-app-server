import { hash, compare } from "bcryptjs";
import { env } from "../config/env.config.js";

async function hash_text(text: string) {
    return hash(text, env.BCRYPT_ROUNDS)
}

async function compare_text(text: string, hash: string): Promise<boolean> {
    return compare(text, hash)
}

export { hash_text, compare_text }