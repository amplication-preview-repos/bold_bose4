import { Employee } from "../employee/Employee";
import { LegalDocument } from "../legalDocument/LegalDocument";

export type Business = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  legalDocuments?: Array<LegalDocument>;
  name: string | null;
  updatedAt: Date;
};
