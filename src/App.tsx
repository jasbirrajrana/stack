import React, { useState } from "react";
import { Button, Heading, Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import InputField from "./component/InputField";
import Wrapper from "./component/Wrapper";

import { convert } from "./stack/infixtoPostfix";
interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Wrapper>
        <Heading isTruncated>Stack Algorithm</Heading>
        <Formik
          initialValues={{ exp: "" }}
          onSubmit={(values) => {
            setLoading(true);
            setResult(convert(values.exp));
            setLoading(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="exp"
                placeholder="Write Infix without space..."
                label="Infix to Postfix"
              />
              <Button type="submit" mt={3} colorScheme="teal" variant="solid">
                evaluate
              </Button>
            </Form>
          )}
        </Formik>
        {loading ? (
          <Spinner />
        ) : (
          <Heading size="lg" m={4}>
            {result}
          </Heading>
        )}
      </Wrapper>
    </>
  );
};
export default App;
