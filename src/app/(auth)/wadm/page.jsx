"use client";
import React, { useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    IconButton,
    Image,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    Stepper,
    useSteps,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const steps = [
    {
        title: "1단계",
        content: "선택할 사항을 입력해 주세요!",
        emotion: (
            <Image
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Thumbs%20Up%20Light%20Skin%20Tone.png"
                alt="Thumbs Up Light Skin Tone"
                width="150"
                height="150"
            />
        ),
        inputs: [{ placeholder: "ex) 회사에 남기" }, { placeholder: "ex) 이직하기" }],
    },
    {
        title: "2단계",
        content: "결정을 내리는 데에 중요하게 생각하는 요인을 입력해 주세요!",
        emotion: (
            <Image
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hugging%20Face.png"
                alt="Hugging Face"
                width="150"
                height="150"
            />
        ),
        buttonData: ["성장", "인정", "재미", "돈", "경험", "브랜드", "지속가능성", "아이디어"],
    },
    {
        title: "3단계",
        content: "선택한 결정요인의 중요도를 측정해 주세요.",
        emotion: (
            <Image
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Up%20Button.webp"
                alt="Thumbs Up Light Skin Tone"
                width="150"
                height="150"
            />
        ),
        
        inputs: [{ placeholder: "ex) 안정성 때문에" }],
    },
    {
        title: "4단계",
        content: "선택한 결정요인의 중요도를 측정해 주세요.",
        emotion: (
            <Image
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Up%20Button.webp"
                alt="Thumbs Up Light Skin Tone"
                width="150"
                height="150"
            />
        ),
        
        inputs: [{ placeholder: "ex) 안정성 때문에" }],
    },
];

const WadmPage = () => {
    const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
        index: 0,
        count: steps.length,
    });

    const [inputs, setInputs] = useState(steps[0].inputs || []);
    const [selectedButton, setSelectedButton] = useState(null);

    const addInputField = () => {
        setInputs([...inputs, { placeholder: `새 입력 필드 ${inputs.length + 1}` }]);
    };

    const currentStep = steps[activeStep];

    return (
        <Box>
            <Stepper index={activeStep} colorScheme="blue">
                {steps.map((step, index) => (
                    <Step key={index}>
                        <Flex direction="column" className="my-4">
                            <StepIndicator onClick={() => setActiveStep(index)} cursor="pointer">
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>
                        </Flex>
                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>

            <Box key={activeStep}>
                <div align="center">{currentStep.emotion}</div>
                <div className="text-center my-8 text-lg font-semibold">{currentStep.content}</div>

                {/* Step 1: Inputs */}
                {activeStep === 0 && (
                    <Box justify="center" className="flex flex-col">
                        {inputs.map((input, i) => (
                            <input
                                key={i}
                                type="text"
                                placeholder={input.placeholder}
                                className="border-2 rounded border-gray-300 p-4 m-2"
                            />
                        ))}
                        <ButtonGroup className="w-full justify-center my-4">
                            <IconButton icon={<AddIcon />} isRound={true} onClick={addInputField} />
                        </ButtonGroup>
                    </Box>
                )}

                {/* Step 2: Button Selection */}
                {activeStep === 1 && (
                    <Container className="w-full justify-center mx-1.5">
                        <Flex wrap="wrap" justify="center" gap={4} className="mx-1">
                            {currentStep.buttonData.map((label, i) => (
                                <Button
                                    key={i}
                                    variant="outline"
                                    size="md"
                                    w="32"
                                    h="12"
                                    borderColor="gray.300"
                                    color={selectedButton === i ? "white" : "gray.700"}
                                    bg={selectedButton === i ? "teal.500" : "transparent"}
                                    _hover={{
                                        bg: selectedButton === i ? "teal.500" : "gray.100",
                                    }}
                                    _active={{
                                        bg: "teal.500",
                                        color: "white",
                                    }}
                                    onClick={() => setSelectedButton(i)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Flex>
                    </Container>
                )}

                {/* Step 3: Final Inputs */}
                {activeStep === 2 && (
                    <Box justify="center" className="flex flex-col">
                        {currentStep.inputs.map((input, i) => (
                            <input type='range' key={i}/>
                            // <input
                            //     key={i}
                            //     id="sortDate_range_input"
                            //     type="range"
                            //     min="2000"
                            //     max="2050"
                            //     step="1"
                            //     onClick={(e) => {
                            //         console.log(e.currentTarget.value);
                            //         setRangeVal((rangeVal) => {
                            //             return (rangeVal = e.currentTarget.value);
                            //         });
                            //     }}
                                
                            // />
                        ))}
                    </Box>
                )}
                {activeStep === 3 && (
                    <Box justify="center" className="flex flex-col">
                        {currentStep.inputs.map((input, i) => (
                            <input type='range' key={i}/>
                            // <input
                            //     key={i}
                            //     id="sortDate_range_input"
                            //     type="range"
                            //     min="2000"
                            //     max="2050"
                            //     step="1"
                            //     onClick={(e) => {
                            //         console.log(e.currentTarget.value);
                            //         setRangeVal((rangeVal) => {
                            //             return (rangeVal = e.currentTarget.value);
                            //         });
                            //     }}
                                
                            // />
                        ))}
                    </Box>
                )}
            </Box>

            <Flex justify="space-between" mt={4}>
                <Button onClick={goToPrevious} isDisabled={activeStep === 0} variant="outline" colorScheme="blue">
                    Previous
                </Button>
                {activeStep === steps.length - 1 ? (
                    <Button onClick={() => alert("Steps Completed!")} colorScheme="green">
                        Complete
                    </Button>
                ) : (
                    <Button onClick={goToNext} colorScheme="blue">
                        Next
                    </Button>
                )}
            </Flex>
        </Box>
    );
};

export default WadmPage;
