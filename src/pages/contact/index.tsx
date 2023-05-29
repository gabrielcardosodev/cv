import { PageTransition } from "@/components/PageTransition";
import { sendContactForm } from "@/lib/api";
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, useColorModeValue } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const initialValue = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const initialState = initialValue

interface TouchedInput {
  [name: string]: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

export default function Contact() {
  const [values, setValues] = useState(initialState)
  const [touchedInput, setTouchedInput] = useState<TouchedInput>({
    email: false,
    message: false,
    subject: false
  })
  const [loading, setLoading] = useState(false)

  function handleInputChange({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  function handleInputBlur({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setTouchedInput((prev) => ({
      ...prev,
      [target.name]: true
    }))
  }

  async function handleSubmit() {
    setLoading(true)

    await sendContactForm(values)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <PageTransition title="Contact">
      <Container centerContent>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact me
        </Heading>

        <FormControl isRequired isInvalid={touchedInput.name && !values.name} mb={4}>
          <FormLabel>Name</FormLabel>
          <Input borderColor='gray.900' errorBorderColor="red.300" type="text" name="name" value={values.name} onChange={handleInputChange} onBlur={handleInputBlur} />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touchedInput.email && !values.email} mb={4}>
          <FormLabel>Email</FormLabel>
          <Input borderColor='gray.900' errorBorderColor="red.300" type="email" name="email" value={values.email} onChange={handleInputChange} onBlur={handleInputBlur} />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touchedInput.subject && !values.subject} mb={4}>
          <FormLabel>Subject</FormLabel>
          <Input borderColor='gray.900' errorBorderColor="red.300" type="text" name="subject" value={values.subject} onChange={handleInputChange} onBlur={handleInputBlur} />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touchedInput.message && !values.message} mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea borderColor='gray.900' errorBorderColor="red.300" name="message" rows={4} value={values.message} onChange={handleInputChange} onBlur={handleInputBlur} />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <Button
          variant="outline"
          px={12}
          colorScheme={useColorModeValue('purple', 'orange')}
          isDisabled={!values.name || !values.email || !values.subject || !values.message}
          isLoading={loading}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </PageTransition >
  )
}