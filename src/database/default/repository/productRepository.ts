import {
  getRepository,
  FindOneOptions,
  FindConditions,
  DeleteResult,
  Between,
} from "typeorm";
import moduleLogger from "../../../shared/functions/logger";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { HttpError } from "../../../shared/classes/HttpError";
import {
  IFindProduct,
  IFindResponse,
} from "../../../shared/interfaces";
import Product from "../entity/product";

const logger = moduleLogger("shiftRepository");

export const find = async (opts?: IFindProduct): Promise<IFindResponse> => {
  logger.info("Find");
  let { page = opts.page || 0, limit = opts.limit || 10, order = opts.order} = opts;
  const repository = getRepository(Product);
  const list = await repository.findAndCount({
        skip: page * limit,
        take: limit,
        order: {
          createdAt: order == 'DESC' ? 'DESC' : 'ASC', 
        },
      });
  const [data, count] = list;
  const pagination = {
    page: Number(page) + 1,
    total: count,
  };
  return {
    data,
    metadata: pagination,
  };
};

export const findById = async (
  id: string,
  opts?: FindOneOptions<Product>
): Promise<Product> => {
  logger.info("Find by id");
  const repository = getRepository(Product);
  const data = await repository.findOne(id, opts);
  return data;
};

export const findOne = async (
  where?: FindConditions<Product>,
  opts?: FindOneOptions<Product>
): Promise<Product> => {
  logger.info("Find one");
  const repository = getRepository(Product);
  const data = await repository.findOne(where, opts);
  return data;
};

export const create = async (payload: Product): Promise<Product> => {
  logger.info("Create");
  const repository = getRepository(Product);
  const newdata = await repository.save(payload);
  return newdata;
};

export const updateById = async (
  id: string,
  payload: QueryDeepPartialEntity<Product>
): Promise<Product> => {
  logger.info("Update by id");
  const repository = getRepository(Product);
  
  await repository.update(id, payload);
  return findById(id);
};

export const deleteById = async (
  id: string
): Promise<DeleteResult> => {
  logger.info("Delete by id");
  const repository = getRepository(Product);

  return await repository.delete(id);
};
