import { Business } from "../business/Business";

export type Employee = {
  business?: Business | null;
  createdAt: Date;
  id: string;
  name: string | null;
  position: string | null;
  updatedAt: Date;
};
