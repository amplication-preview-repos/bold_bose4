import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type LegalDocumentCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  filename?: string | null;
  fileUrl?: string | null;
};
