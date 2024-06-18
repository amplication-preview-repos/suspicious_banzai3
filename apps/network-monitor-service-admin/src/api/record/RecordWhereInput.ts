import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type RecordWhereInput = {
  day?: DateTimeNullableFilter;
  hour?: IntNullableFilter;
  id?: StringFilter;
  pingDelay?: DecimalNullableFilter;
  status?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
