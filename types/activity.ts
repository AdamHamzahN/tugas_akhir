export interface Activity {
    id?: number,
    name?: string,
}
export interface FormField {
    id?: string;
    name?: string;
    label?: string;
    type?: string;
    value?: string | object;
    placeholder?: string;
    checked?: boolean;
    required?: boolean;
}