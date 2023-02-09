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

export type {mealProps, filterProps, paginationProps, cartMealProps}