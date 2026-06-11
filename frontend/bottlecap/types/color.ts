export interface Color {
    id: number;
    name: string;
    article_number: string;
    shelf_number?: string;
    hex?: string;
    description?: string;
    brand: string;
    owned: boolean;
    reorder: boolean;
    comment?: string;
}


export interface ColorUpdate {
    owned?: boolean
    reorder?: boolean
    comment?: string
    description?: string

}