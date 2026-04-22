export type TaskStatus = "TODO" | "DONE"

export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH'

export interface ITask {
    status: TaskStatus,
    priority: TaskPriority,
    title: string,
    id: string,
    description?: string,
    dueDate?: string,
    createdAt: string
}