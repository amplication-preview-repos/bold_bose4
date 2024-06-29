import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type LegalDocumentUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  filename?: string | null;
  fileUrl?: string | null;
};
