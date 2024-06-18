import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const RecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="Day" source="day" />
        <NumberInput step={1} label="Hour" source="hour" />
        <NumberInput label="Ping_delay" source="pingDelay" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
