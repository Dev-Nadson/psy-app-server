interface ICreateProfessionalInput {
    name: string
    email: string
    password: string
}

interface ICreateProfessionalOutput {
    id: string;
    name: string;
    email: string;
    created_at: Date;
}

export type { ICreateProfessionalInput, ICreateProfessionalOutput }