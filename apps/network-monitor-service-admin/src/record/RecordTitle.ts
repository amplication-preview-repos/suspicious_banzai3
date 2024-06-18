import { Record as TRecord } from "../api/record/Record";

export const RECORD_TITLE_FIELD = "status";

export const RecordTitle = (record: TRecord): string => {
  return record.status?.toString() || String(record.id);
};
