import {React, useState} from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Center,
    Button
} from '@chakra-ui/react'  

const AddRecipe = () => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
  
    return (
        <>
            <FormControl isInvalid={isError}>
                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Name</FormLabel>
                <Center>
                    <Input     
                        errorBorderColor='red.300'
                        width = '40%' 
                        borderColor='green.400'
                        onChange={handleInputChange}
                    />
                </Center>
                <Center>
                    <FormErrorMessage>Name is required.</FormErrorMessage>
                </Center>
                <Center>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                        >
                        Submit
                    </Button>
                </Center>
            </FormControl>    
        </>
    )
}

export default AddRecipe