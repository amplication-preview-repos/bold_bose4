import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeWhereInput = {
  business?: BusinessWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
};
