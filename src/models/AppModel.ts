export interface ApiResponse<T= any> {
    code: number,
    result: T,
    message: string,
    timestamp: string
}


export interface PageRes<T=any> {
    currentPage: number
    totalPages: number
    pageSize: number
    totalElements: number
    data: T[]
  }