import { EmployeeUpdateManyWithoutBusinessesInput } from "./EmployeeUpdateManyWithoutBusinessesInput";
import { LegalDocumentUpdateManyWithoutBusinessesInput } from "./LegalDocumentUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  address?: string | null;
  contactNumber?: string | null;
  employees?: EmployeeUpdateManyWithoutBusinessesInput;
  legalDocuments?: LegalDocumentUpdateManyWithoutBusinessesInput;
  name?: string | null;
};
