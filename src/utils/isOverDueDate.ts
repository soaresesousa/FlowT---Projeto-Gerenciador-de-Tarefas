export const isOverDueDate = (dueDate?: string) => {
    return dueDate ? new Date(dueDate) <  new Date() : false;
}