export interface IRepository<T> {
    findOneById(id: number): Promise<T | null>;

    findAll(where?: Partial<any>, order?: { [key in keyof Partial<any>]: 'ASC' | 'DESC' }, limit?: number): Promise<Array<T>>;

    createOne(entity: T): Promise<T>;

    updateOneById(id: number, data: Partial<T>): Promise<T>;
}