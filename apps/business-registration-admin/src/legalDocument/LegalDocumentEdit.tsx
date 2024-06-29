import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BusinessTitle } from "../business/BusinessTitle";

export const LegalDocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="Business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <TextInput label="Filename" source="filename" />
        <TextInput label="FileURL" source="fileUrl" />
      </SimpleForm>
    </Edit>
  );
};
