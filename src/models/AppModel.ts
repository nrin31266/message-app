export interface ApiResponse<T= any> {
    code: number,
    result: T,
    message: string,
    timestamp: string
}