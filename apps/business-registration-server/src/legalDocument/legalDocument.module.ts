import { Module } from "@nestjs/common";
import { LegalDocumentModuleBase } from "./base/legalDocument.module.base";
import { LegalDocumentService } from "./legalDocument.service";
import { LegalDocumentController } from "./legalDocument.controller";
import { LegalDocumentResolver } from "./legalDocument.resolver";

@Module({
  imports: [LegalDocumentModuleBase],
  controllers: [LegalDocumentController],
  providers: [LegalDocumentService, LegalDocumentResolver],
  exports: [LegalDocumentService],
})
export class LegalDocumentModule {}
