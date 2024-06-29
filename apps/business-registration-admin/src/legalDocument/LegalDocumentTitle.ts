import { LegalDocument as TLegalDocument } from "../api/legalDocument/LegalDocument";

export const LEGALDOCUMENT_TITLE_FIELD = "filename";

export const LegalDocumentTitle = (record: TLegalDocument): string => {
  return record.filename?.toString() || String(record.id);
};
