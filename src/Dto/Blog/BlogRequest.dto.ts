export interface BlogParamsDTO {
  page: number;
  limit: number;
  sortBy?: string;
  order?: 'desc' | 'asc';
  search?: string;
}
