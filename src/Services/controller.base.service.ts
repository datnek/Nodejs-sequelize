
export interface ControllerBaseService<T> {
    // @ts-ignore
    Create(model: T);
    // @ts-ignore
    Update(model: T, id: number);
    // @ts-ignore
    Delete(slug: string);
    // @ts-ignore
    FindById(id: number);
    // @ts-ignore
    FindBySlug(slug: string);
    // @ts-ignore
    FindAll();
}
