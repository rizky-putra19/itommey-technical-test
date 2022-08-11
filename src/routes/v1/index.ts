import { Server } from "@hapi/hapi";
import createShiftRoutes from "./products";

export default function (server: Server, basePath: string) {
  createShiftRoutes(server, basePath + "/product");
}
