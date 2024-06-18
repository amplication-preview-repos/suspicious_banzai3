import { SortOrder } from "../../util/SortOrder";

export type RecordOrderByInput = {
  createdAt?: SortOrder;
  day?: SortOrder;
  hour?: SortOrder;
  id?: SortOrder;
  pingDelay?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
