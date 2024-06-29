import { LegalDocumentWhereInput } from "./LegalDocumentWhereInput";
import { LegalDocumentOrderByInput } from "./LegalDocumentOrderByInput";

export type LegalDocumentFindManyArgs = {
  where?: LegalDocumentWhereInput;
  orderBy?: Array<LegalDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
