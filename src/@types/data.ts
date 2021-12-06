export interface AppResponse<Data> {
  success: boolean;
  message?: string | boolean;
  data?: object;
}
