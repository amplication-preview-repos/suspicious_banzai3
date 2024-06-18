import { Decimal } from "decimal.js";

export type Record = {
  createdAt: Date;
  day: Date | null;
  hour: number | null;
  id: string;
  pingDelay: Decimal | null;
  status: string;
  timestamp: Date | null;
  updatedAt: Date;
};
