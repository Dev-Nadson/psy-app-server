interface ISessionInput {
    email: string,
    password: string
}

interface IsessionOutput {
    id: string,
    name: string,
    email: string
}

export type { ISessionInput, IsessionOutput }