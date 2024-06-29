import { Business } from "../business/Business";

export type LegalDocument = {
  business?: Business | null;
  createdAt: Date;
  filename: string | null;
  fileUrl: string | null;
  id: string;
  updatedAt: Date;
};
