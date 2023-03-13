interface mealProps {
    name: string;
    description: string;
    price: number,
    cuisine: string,
    id: number
}

interface cartMealProps {
    name: string;
    price: number;
    id: number;
    count: number;
}

interface filterProps {
    filter: string,
    filterMeals: Function
}

interface paginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: Function;
}

interface MenuProps {
    isOpen: boolean;
    sortPriceAsc: Function;
    sortPriceDesc: Function
    sortAlphabetically: Function
}

interface SortProps {
    sortPriceAsc: Function;
    sortPriceDesc: Function
    sortAlphabetically: Function
}

interface SortArrow {
    isOpen: boolean
}

interface OrderData {
    [name: string]: string,
}

export type {mealProps, filterProps, paginationProps, cartMealProps, MenuProps, SortProps, SortArrow, OrderData}