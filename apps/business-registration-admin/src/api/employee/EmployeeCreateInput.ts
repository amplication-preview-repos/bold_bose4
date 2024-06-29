import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type EmployeeCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  name?: string | null;
  position?: string | null;
};
