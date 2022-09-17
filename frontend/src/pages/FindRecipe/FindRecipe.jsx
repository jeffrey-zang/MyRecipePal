import {React, useState} from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Center,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Checkbox, CheckboxGroup,
    Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,  
    Box
} from '@chakra-ui/react'  

const AddRecipe = () => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    // let 
  
    return (
        <>
            <h1 style = {{textAlign: 'center', fontSize: 'max(3vw, 30px)', marginTop:'25px'}}>MyRecipePal Recipe Finder</h1>
            <p style = {{textAlign: 'center', padding: '0vw 20vw'}}>Using this recipe finder, you can filter recipes based on your personal needs, like allergies and food preferences. You can also ask for a specific amount of calories, proteins, or carbohydrates to ensure that you meet your daily goals. If you're low on time, you can filter for recipes that are quick to make.</p>
            
            <FormControl>
                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Number of servings</FormLabel>
                <Center>
                <NumberInput
                    defaultValue={1}
                    max={10}
                    min={1}
                    keepWithinRange={true}
                    clampValueOnBlur={false}
                    id = 'servings'
                >
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>                
                </Center>

                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Dietary Restrictions</FormLabel>
                
                <Center>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox className = 'check'>Vegan</Checkbox>
                    <Checkbox className = 'check'>Kosher</Checkbox>
                    <Checkbox className = 'check'>Halal</Checkbox>
                    <Checkbox className = 'check'>Gluten Intolerance</Checkbox>
                    <Checkbox className = 'check'>Lactose Intolerance</Checkbox>
                </Stack>
                </Center>

                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Allergies</FormLabel>
                
                <Center>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox className = 'check'>Peanut Butter</Checkbox>
                    <Checkbox className = 'check'>Shellfish</Checkbox>
                    <Checkbox className = 'check'>Tree nuts</Checkbox>
                    <Checkbox className = 'check'>Eggs</Checkbox>
                    <Checkbox className = 'check'>Fish</Checkbox>
                </Stack>
                </Center>

                {/* <Accordion defaultIndex={[0]} width = '60%' marginLeft ='auto' marginRight='auto' marginTop = '25px' allowToggle>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            More options
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>

                        <AccordionPanel > */}
                <div style = {{width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>

                <FormControl>
                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Maximum Calories</FormLabel>
                <NumberInput 
                defaultValue={200} 
                min={0} 
                max={2000}
                id = 'cals'
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>                
                </FormControl>
                        {/* </AccordionPanel> */}

                        {/* <AccordionPanel > */}
                <FormControl>
                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Maximum Protein (grams)</FormLabel>
                <NumberInput 
                defaultValue={10} 
                min={0} 
                max={175}
                id = 'proteins'
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>                
                </FormControl>
                        {/* </AccordionPanel> */}

                        {/* <AccordionPanel > */}
                <FormControl>
                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Maximum Carbohydrates (grams)</FormLabel>
                <NumberInput 
                defaultValue={20} 
                min={0} 
                max={325}
                id = 'carbs'
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>                
                </FormControl>
                        {/* </AccordionPanel> */}

                        {/* <AccordionPanel > */}
                <FormControl>
                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Maximum Cooking Time (minutes)</FormLabel>
                <NumberInput 
                defaultValue={30} 
                min={15} 
                max={300}
                id = 'time'
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>                
                </FormControl>
                        {/* </AccordionPanel> */}

                    {/* </AccordionItem>
                </Accordion> */}
                </div>

                <Center>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                        marginBottom='25px'
                        onClick = {() => {
                            let servings = document.getElementById("servings").value;
                            let checkmarks = document.getElementsByClassName("check") // use foreach for this
                            let cals = document.getElementById('cals')
                            let proteins = document.getElementById('proteins')
                            let carbs = document.getElementById('carbs')
                            let time = document.getElementById('time')
                        }}
                        >
                        Give me my recipe!
                    </Button>
                </Center>

            </FormControl>    
        </>
    )
}

export default AddRecipe