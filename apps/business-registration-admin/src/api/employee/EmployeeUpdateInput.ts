import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type EmployeeUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  name?: string | null;
  position?: string | null;
};
