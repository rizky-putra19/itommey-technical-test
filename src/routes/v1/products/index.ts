import { Server } from "@hapi/hapi";
import * as productController from "./productController";
import { idDto } from "../../../shared/dtos";

export default function (server: Server, basePath: string) {
  server.route({
    method: "GET",
    path: basePath,
    handler: productController.find,
    options: {
      description: "Get products with filter",
      notes: "Get all products if filter is not specified.",
      tags: ["api", "products"],
    },
  });

  server.route({
    method: "GET",
    path: basePath + "/{id}",
    handler: productController.findById,
    options: {
      description: "Get product by id",
      notes: "Get product by id",
      tags: ["api", "product"],
      validate: {
        params: idDto,
      },
    },
  });

  server.route({
    method: "POST",
    path: basePath,
    handler: productController.create,
    options: {
      description: "Create product",
      notes: "Create product",
      tags: ["api", "product"],
    },
  });

  server.route({
    method: "PATCH",
    path: basePath + "/{id}",
    handler: productController.updateById,
    options: {
      description: "Update product",
      notes: "Update product",
      tags: ["api", "product"],
    },
  });

  server.route({
    method: "DELETE",
    path: basePath + "/{id}",
    handler: productController.deleteById,
    options: {
      description: "Delete shift",
      notes: "Delete shift",
      tags: ["api", "shift"],
      validate: {
        params: idDto,
      },
    },
  });
}
