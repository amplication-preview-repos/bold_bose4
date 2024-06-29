import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LegalDocumentListRelationFilter } from "../legalDocument/LegalDocumentListRelationFilter";

export type BusinessWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  legalDocuments?: LegalDocumentListRelationFilter;
  name?: StringNullableFilter;
};
