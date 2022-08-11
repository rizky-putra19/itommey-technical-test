import Product from "../../database/default/entity/product";

export interface ISuccessResponse {
  statusCode: number;
  message: string;
  results: any;
}

export interface ISuccessListResponse {
  statusCode: number;
  message: string;
  results: any;
  metadata: {
    page: number;
    total: number;
  }
}

export interface IFindResponse {
  data: Product[];
  metadata: {
    page: number;
    total: number;
  };
}

export interface IErrorResponse {
  statusCode: number;
  error: string;
  message: string;
}
