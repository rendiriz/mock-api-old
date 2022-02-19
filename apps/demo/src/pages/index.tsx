import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import site from '@/config/site';
import { NextSeo } from 'next-seo';
import ContainerDefault from '@/layouts/container/containerDefault';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const CodeEditor = dynamic(() => import('@/components/codeEditor'), {
  ssr: false,
});

const defaultHeader = `{
  "Content-Type": "application/json"
}`;

const defaultBody = `{
  "users": [
    {
      "first_name": "Barack",
      "last_name": "Obama",
      "date_of_birth": "1961-08-04"
    }
  ]
}`;

function Home() {
  const [code, setCode] = useState('');

  useEffect(() => {
    const random = Math.random().toString(36).substr(2, 5);
    setCode(random);
  }, []);

  // Form ======================================================================
  const initialValues = {
    request_method: 'GET',
    endpoint: 'users',
    response_status_code: '200',
    response_header: defaultHeader,
    response_body: defaultBody,
  };

  const validationSchema = Yup.object().shape({
    request_method: Yup.string().required('Harus diisi.'),
    endpoint: Yup.string().required('Harus diisi.'),
    response_status_code: Yup.string().required('Harus diisi.'),
    response_header: Yup.string().required('Harus diisi.'),
    response_body: Yup.string().required('Harus diisi.'),
  });

  async function onSubmit(fields) {
    const input = { ...fields, code };
    console.log(input);
  }

  return (
    <>
      <NextSeo
        title={site.titleHome}
        description={site.description}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: site.keywords,
          },
        ]}
        canonical={site.siteUrl}
      />
      <Container
        maxW="container.lg"
        centerContent
        textAlign={'center'}
        py={{ base: 24, md: 32 }}
      >
        <Heading as="h1" size="3xl">
          Mock API ⚡
        </Heading>
        <Text
          mt={8}
          fontSize={'xl'}
          color={useColorModeValue('gray.500', 'gray.400')}
          maxW={'2xl'}
        >
          Create. Use. Run 🏃
        </Text>
        <Box mt={10}>
          <Button colorScheme="teal" rightIcon={<ArrowForwardIcon />}>
            Resources
          </Button>
        </Box>
      </Container>

      <Container maxW="container.md" pb={{ base: 24, md: 32 }}>
        <Box borderWidth={'1px'} borderRadius={'lg'} padding={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Field name="request_method">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.request_method &&
                            form.touched.request_method
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="request_method">Method</FormLabel>
                          <Select
                            {...field}
                            id="request_method"
                            placeholder="Method"
                          >
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="PATCH">PATCH</option>
                            <option value="DELETE">DELETE</option>
                          </Select>
                          <FormErrorMessage>
                            {form.errors.request_method}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 4 }}>
                    <Field name="endpoint">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.endpoint && form.touched.endpoint
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="endpoint">Endpoint</FormLabel>
                          <InputGroup>
                            <InputLeftAddon
                              // eslint-disable-next-line react/no-children-prop
                              children={`${site.siteUrl}/${code}/`}
                            />
                            <Input {...field} id="endpoint" type="text" />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.endpoint}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={5}>
                    <Field name="response_status_code">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.response_status_code &&
                            form.touched.response_status_code
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="response_status_code">
                            Response Status Code
                          </FormLabel>
                          <Select
                            {...field}
                            id="response_status_code"
                            placeholder="Status Code"
                          >
                            <option value="200">200 OK</option>
                            <option value="201">201 Created</option>
                            <option value="202">202 Accepted</option>
                            <option value="300">300 Multiple Choice</option>
                            <option value="301">301 Moved Permanently</option>
                            <option value="302">302 Found</option>
                            <option value="400">400 Bad Request</option>
                            <option value="401">401 Unauthorized</option>
                            <option value="402">402 Payment Required</option>
                            <option value="404">404 Not Found</option>
                            <option value="405">405 Method Not Allowed</option>
                            <option value="406">406 Not Acceptable</option>
                          </Select>
                          <FormErrorMessage>
                            {form.errors.response_status_code}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={5}>
                    <Field name="response_header">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.response_header &&
                            form.touched.response_header
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="response_header">
                            Response Header
                          </FormLabel>
                          <CodeEditor
                            mode="json"
                            theme="github"
                            onChange={(value) => {
                              field.onChange('response_header')(value);
                            }}
                            value={field.value}
                            height="250px"
                          />
                          <FormErrorMessage>
                            {form.errors.response_header}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={5}>
                    <Field name="response_body">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.response_body &&
                            form.touched.response_body
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="response_body">
                            Response Body
                          </FormLabel>
                          <CodeEditor
                            mode="json"
                            theme="github"
                            onChange={(value) => {
                              field.onChange('response_body')(value);
                            }}
                            value={field.value}
                            height="350px"
                          />
                          <FormErrorMessage>
                            {form.errors.response_body}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={5}>
                    <Button
                      colorScheme="teal"
                      type="submit"
                      w={'full'}
                      isLoading={props.isSubmitting}
                    >
                      Create
                    </Button>
                  </GridItem>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
}

Home.Layout = function getLayout(page) {
  return <ContainerDefault>{page}</ContainerDefault>;
};

export default Home;
