export type status = 'Pendente' | 'Em andamento' | 'Pronto'

export interface ITask {
  id?: number,
  title?: string,
  status?: status,
}
