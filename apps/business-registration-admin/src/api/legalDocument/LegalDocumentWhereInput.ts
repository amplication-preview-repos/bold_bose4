import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LegalDocumentWhereInput = {
  business?: BusinessWhereUniqueInput;
  filename?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
};
