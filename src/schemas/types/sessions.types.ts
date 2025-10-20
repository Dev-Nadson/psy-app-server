import type { IProfile } from "./professionals.types.js"
interface ISessionInput {
    email: string,
    password: string
}

interface IsessionOutput extends IProfile {
}

export type { ISessionInput, IsessionOutput }