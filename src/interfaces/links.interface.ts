export interface MenuItem {
    id: number;
    label: string;
    isActive: boolean;
    count: number | null;
    hasCount: boolean;
    hasIcon: boolean;
    href: string;
}