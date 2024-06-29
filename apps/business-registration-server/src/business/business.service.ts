import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessServiceBase } from "./base/business.service.base";

@Injectable()
export class BusinessService extends BusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
