export interface ICreateProduct {
  name: string;
  qty: number;
  expiredAt: string;
  isActive: boolean;
}

export interface IUpdateProduct {
  name: string;
  qty: number;
  expiredAt: string;
}

export interface IFindProduct {
  page?: number;
  limit?: number;
  order?: string;
}
