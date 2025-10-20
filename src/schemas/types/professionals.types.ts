interface ICreateProfessionalInput {
    name: string
    email: string
    password: string
}

interface ICreateProfessionalOutput {
    id: string
    name: string
    email: string
    created_at: Date
}

interface IProfile {
    sub: string
    email: string
    name: string
}

export type { ICreateProfessionalInput, ICreateProfessionalOutput, IProfile }