import * as productRepository from "../database/default/repository/productRepository";
import { FindManyOptions, FindOneOptions } from "typeorm";
import Shift from "../database/default/entity/product";
import { ICreateProduct, IFindResponse, IFindProduct, IUpdateProduct } from "../shared/interfaces";
import Product from "../database/default/entity/product";

export const find = async (opts: IFindProduct): Promise<IFindResponse> => {
  return productRepository.find(opts);
};

export const findById = async (
  id: string,
  opts?: FindOneOptions<Shift>
): Promise<Shift> => {
  return productRepository.findById(id, opts);
};

export const create = async (payload: ICreateProduct): Promise<Shift> => {
  const product = new Product();
  product.name = payload.name;
  product.qty = payload.qty;
  product.isActive = true

  return productRepository.create(product);
};

export const updateById = async (
  id: string,
  payload: IUpdateProduct
): Promise<Product> => {
  return productRepository.updateById(id, {
    ...payload,
  });
};

export const deleteById = async (id: string) => {
  return productRepository.deleteById(id);
};
