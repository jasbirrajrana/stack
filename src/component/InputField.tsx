import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField } from "formik";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, size, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name} mt={5}>
          {label}
        </FormLabel>
        <Input
          {...props}
          {...field}
          id={field.name}
          placeholder={props.placeholder}
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </>
  );
};
export default InputField;
