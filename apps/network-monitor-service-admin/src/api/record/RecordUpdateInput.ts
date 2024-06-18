import { Decimal } from "decimal.js";

export type RecordUpdateInput = {
  day?: Date | null;
  hour?: number | null;
  pingDelay?: Decimal | null;
  status?: string;
  timestamp?: Date | null;
};
