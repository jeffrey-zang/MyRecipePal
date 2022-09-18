import {React, useState} from 'react'
import axios from "axios";
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
    
    const [numServings, setNumServings] = useState(0);
    const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
    const [calories, setCalories] = useState("0");
    const [protein, setProtein] = useState("0");
    const [carbohydrates, setCarbohydrates] = useState("0");
    const [cookingTime, setCookingTime] = useState("0");

    // Example POST method implementation:
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const submitData = () => {
        let data = {
        numServings:numServings,
        dietaryRestrictions: dietaryRestrictions,
        calories: calories,
        protein: protein,
        carbohydrates: carbohydrates,
        cookingTime: cookingTime,
        };
        const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
        };
        postData('http://localhost:3001/random', data)
            .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
        });
    }
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
                    onChange={(e) => {
                        setNumServings(e)
                    }}
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
                <Stack spacing={[1, 5]} direction={['column', 'row']} 
                onChange={(e)=> {
                    if (e.target.checked) {
                        setDietaryRestrictions((prev) => [...prev, e.target.value])
                    } else {
                        setDietaryRestrictions((prev) => prev.filter ((pre) => pre != e.target.value));
                    }
                }}>
                    <Checkbox className = 'check' value='Vegan'>Vegan</Checkbox>
                    <Checkbox className = 'check' value='Kosher'>Kosher</Checkbox>
                    <Checkbox className = 'check' value='Halal'>Halal</Checkbox>
                    <Checkbox className = 'check' value='Gluten Intolerance'>Gluten Intolerance</Checkbox>
                    <Checkbox className = 'check' value='Lactose Intolerance'>Lactose Intolerance</Checkbox>
                </Stack>
                </Center>

                <FormLabel style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Allergies</FormLabel>
                
                <Center>
                <Stack spacing={[1, 5]} direction={['column', 'row']}
                onChange={(e)=> {
                    if (e.target.checked) {
                        setDietaryRestrictions((prev) => [...prev, e.target.value])
                    } else {
                        setDietaryRestrictions((prev) => prev.filter ((pre) => pre != e.target.value));
                    }
                }}>
                    <Checkbox className = 'check' value='Peanut Butter'>Peanut Butter</Checkbox>
                    <Checkbox className = 'check' value='Shellfish'>Shellfish</Checkbox>
                    <Checkbox className = 'check' value='Tree nuts'>Tree nuts</Checkbox>
                    <Checkbox className = 'check' value='Eggs'>Eggs</Checkbox>
                    <Checkbox className = 'check' value='Fish'>Fish</Checkbox>
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
                onChange={(e) => {
                    setCalories(e)
                }}
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
                onChange={(e) => {
                    setProtein(e)
                }}
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
                onChange={(e) => {
                    setCarbohydrates(e)
                }}
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
                onChange={(e) => {
                    setCookingTime(e)
                }}
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
                        onClick={submitData}
                        >
                        Give me my recipe!
                    </Button>
                </Center>

            </FormControl>    
        </>
    )
}

export default AddRecipe