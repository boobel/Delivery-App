interface mealProps {
    name: string;
    description: string;
    price: string,
    cuisine: string
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

export type {mealProps, filterProps, paginationProps}