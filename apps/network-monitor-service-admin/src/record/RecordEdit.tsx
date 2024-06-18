import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const RecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Day" source="day" />
        <NumberInput step={1} label="Hour" source="hour" />
        <NumberInput label="Ping_delay" source="pingDelay" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
