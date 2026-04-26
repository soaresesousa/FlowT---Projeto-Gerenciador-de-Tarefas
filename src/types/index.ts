export type TaskStatus = "TODO" | "DONE"

export type TaskPriority = 'Baixa' | 'Média' | 'Alta'

export interface ITask {
    status: TaskStatus,
    priority: TaskPriority,
    title: string,
    id: string,
    description?: string,
    dueDate?: string,
    createdAt: string
}