interface mealProps {
    name: string;
    description: string;
    price: string
}

interface filterProps {
    filter: string
}

interface paginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: Function;

}

export type {mealProps, filterProps, paginationProps}