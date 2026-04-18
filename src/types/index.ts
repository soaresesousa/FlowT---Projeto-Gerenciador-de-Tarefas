export type TaskStatus = "TODO" | "DONE"

export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH'

export interface Task {
    status: TaskStatus,
    priority: TaskPriority,
    title: string,
    id: string,
    description?: string,
    dueDate?: Date,
    createdAt: Date
}