import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  businessId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  updatedAt?: SortOrder;
};
