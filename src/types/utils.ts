export type Filter<T, K extends keyof T> = Partial<Pick<T, K>>;
