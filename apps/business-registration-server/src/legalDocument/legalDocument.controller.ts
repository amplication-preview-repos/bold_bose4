import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LegalDocumentService } from "./legalDocument.service";
import { LegalDocumentControllerBase } from "./base/legalDocument.controller.base";

@swagger.ApiTags("legalDocuments")
@common.Controller("legalDocuments")
export class LegalDocumentController extends LegalDocumentControllerBase {
  constructor(protected readonly service: LegalDocumentService) {
    super(service);
  }
}
