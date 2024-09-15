// types.ts
export interface BreadcrumbItem {
    label: string;
    path: string;
}

export interface ListBoxItem {
    icon: string;
    title: string;
    content: string;
    path: string;
    color: string;
}

export namespace LanguageTypes {
    export interface Option {
        code: string;
        name: string;
    }
}