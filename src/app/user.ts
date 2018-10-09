//User Model

export interface User {
    id: number,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface Entity {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Array<User>
}