export interface UserAge {
    id: string;
    age: number;
}

export interface UserCompleteName {
    id: string;
    firstName: string;
    lastName: string;
}

export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    age?: number;
}