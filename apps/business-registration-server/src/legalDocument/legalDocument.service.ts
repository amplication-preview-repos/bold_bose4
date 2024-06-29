import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LegalDocumentServiceBase } from "./base/legalDocument.service.base";

@Injectable()
export class LegalDocumentService extends LegalDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
