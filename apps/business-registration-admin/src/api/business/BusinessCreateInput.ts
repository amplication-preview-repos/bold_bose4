import { EmployeeCreateNestedManyWithoutBusinessesInput } from "./EmployeeCreateNestedManyWithoutBusinessesInput";
import { LegalDocumentCreateNestedManyWithoutBusinessesInput } from "./LegalDocumentCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  address?: string | null;
  contactNumber?: string | null;
  employees?: EmployeeCreateNestedManyWithoutBusinessesInput;
  legalDocuments?: LegalDocumentCreateNestedManyWithoutBusinessesInput;
  name?: string | null;
};
