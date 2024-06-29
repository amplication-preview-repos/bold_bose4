import * as graphql from "@nestjs/graphql";
import { LegalDocumentResolverBase } from "./base/legalDocument.resolver.base";
import { LegalDocument } from "./base/LegalDocument";
import { LegalDocumentService } from "./legalDocument.service";

@graphql.Resolver(() => LegalDocument)
export class LegalDocumentResolver extends LegalDocumentResolverBase {
  constructor(protected readonly service: LegalDocumentService) {
    super(service);
  }
}
