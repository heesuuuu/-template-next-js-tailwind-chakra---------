"use client";
import React, { useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    IconButton,
    Step,
    StepIndicator,
    StepSeparator,
    StepStatus,
    Stepper,
    useSteps,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import steps from "@/data/stepData";
import "../../../styles/globals.scss";

const WadmPage = () => {
    const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
        index: 0,
        count: steps.length,
    });

    const [inputs, setInputs] = useState(steps[0].inputs || []);
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [dynamicButtons, setDynamicButtons] = useState([]); // 새 버튼 데이터 저장
    const [newInput, setNewInput] = useState(""); // 새 입력값
    const [showInput, setShowInput] = useState(false); // 입력 필드 표시 여부

    const [rangeInputs, setRangeInputs] = useState([{ value: 0 }]); // 초기 상태
    const toggleButtonSelection = (label) => {
        setSelectedButtons((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
    };

    // 동적 버튼 추가
    const addDynamicButton = () => {
        if (newInput.trim() !== "") {
            setDynamicButtons([...dynamicButtons, newInput.trim()]);
            setNewInput("");
            setShowInput(false);
        }
    };

    // Step 1 입력 필드 추가
    const addInputField = () => {
        setInputs([...inputs, { placeholder: `새 입력 필드 ${inputs.length + 1}` }]);
    };

    const currentStep = steps[activeStep];

    return (
        <Box>
            <Stepper index={activeStep} colorScheme="blue">
                {steps.map((step, index) => (
                    <Step key={index}>
                        <Flex direction="column" className="step-container my-4">
                            <StepIndicator onClick={() => setActiveStep(index)} cursor="pointer" >
                                <StepStatus
                                    complete={<Box as="span" className="step-complete" />}
                                    incomplete={<Box as="span" className="step-incomplete" />}
                                    active={<Box as="span" className="step-active" />}
                                />
                            </StepIndicator>
                        </Flex>
                        <StepSeparator className="step-separator" />
                    </Step>
                ))}
            </Stepper>

            <Box key={activeStep}>
                <div align="center">{currentStep.emotion}</div>
                <div className="text-center my-8 text-lg font-semibold">{currentStep.content}</div>
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
                {/* button step */}
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
                                    color={selectedButtons.includes(label) ? "white" : "gray.700"}
                                    bg={selectedButtons.includes(label) ? "teal.500" : "transparent"}
                                    _hover={{
                                        bg: selectedButtons.includes(label) ? "teal.500" : "gray.100",
                                    }}
                                    _active={{
                                        bg: "teal.500",
                                        color: "white",
                                    }}
                                    onClick={() => toggleButtonSelection(label)}
                                >
                                    {label}
                                </Button>
                            ))}
                            {dynamicButtons.map((label, i) => (
                                <Button
                                    key={`dynamic-${i}`}
                                    variant="outline"
                                    size="md"
                                    w="32"
                                    h="12"
                                    borderColor="gray.300"
                                    color={selectedButtons.includes(label) ? "white" : "gray.700"}
                                    bg={selectedButtons.includes(label) ? "teal.500" : "transparent"}
                                    _hover={{
                                        bg: selectedButtons.includes(label) ? "teal.500" : "gray.100",
                                    }}
                                    _active={{
                                        bg: "teal.500",
                                        color: "white",
                                    }}
                                    onClick={() => toggleButtonSelection(label)}
                                >
                                    {label}
                                </Button>
                            ))}
                            {showInput && (
                                <input
                                    type="text"
                                    value={newInput}
                                    placeholder="새 버튼 입력"
                                    className="border-2 rounded border-gray-300 p-4 m-2 w-32 text-center"
                                    onChange={(e) => setNewInput(e.target.value)}
                                    onBlur={addDynamicButton}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") addDynamicButton();
                                    }}
                                />
                            )}
                            <ButtonGroup className="w-full justify-center my-4">
                                <IconButton icon={<AddIcon />} isRound={true} onClick={() => setShowInput(true)} />
                            </ButtonGroup>
                        </Flex>
                    </Container>
                )}

                {activeStep === 2 && (
                    <Box justify="center" className="flex flex-col h-auto" position="relative">
                        {selectedButtons.length > 0 ? (
                            selectedButtons.map((buttonLabel, i) => (
                                <Box key={i} my={8} position="relative" className="w-full  border-b-2 pb-20">
                                    {/* button name */}
                                    <Flex mx="auto" justify="center">
                                        <div
                                            className="
    font-semibold my-5 w-32 h-12 rounded-l-full rounded-r-none flex justify-center items-center
    border-t-2 border-b-2 border-l-2
  "
                                        >
                                            {buttonLabel}
                                        </div>
                                        <div className="font-semibold my-5 w-32 h-12 rounded-l-none rounded-r-full flex justify-center items-center border-2">
                                            {rangeInputs[i]?.value || 0}
                                        </div>
                                    </Flex>

                                    <input
                                        type="range"
                                        min="1"
                                        max="10"
                                        step="1"
                                        value={rangeInputs[i]?.value || 1}
                                        style={{
                                            margin: "20ox 0",
                                            position: "relative",
                                            appearance: "none",
                                            cursor: "pointer",
                                            width: "100%",
                                            height: "17px",
                                            background: `linear-gradient(to right, #bad149 ${
                                                ((rangeInputs[i]?.value - 1 || 0) / 9) * 100
                                            }%, #c2c2c2 ${((rangeInputs[i]?.value - 1 || 0) / 9) * 100}%)`,
                                            borderRadius: "100px",
                                            outline: "none",
                                            zIndex: 2,
                                        }}
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value, 10);
                                            setRangeInputs((prev) => {
                                                const updatedInputs = [...prev];
                                                updatedInputs[i] = { value };
                                                return updatedInputs;
                                            });
                                        }}
                                    />
                                    {/* 눈금선 */}
                                    <Box
                                        marginTop="5px"
                                        top="96px"
                                        width="100%"
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        {Array.from({ length: 10 }, (_, tickIndex) => (
                                            <Box
                                                key={tickIndex}
                                                fontSize="12px"
                                                color="gray"
                                                textAlign="center"
                                                width="20px"
                                            >
                                                {tickIndex + 1}
                                            </Box>
                                        ))}
                                    </Box>
                                    {/* range 눈금선 */}
                                    {/* <Box
                                        position="absolute"
                                        top="90%"
                                        left="0"
                                        transform="translateY(-50%)"
                                        width="100%"
                                        display="flex"
                                        justifyContent="space-between"
                                        pointerEvents="none"
                                        padding="0 0.07%"
                                        zIndex={1}
                                    >
                                        {Array.from({ length: 10 }, (_, tickIndex) => (
                                            <Box
                                                key={tickIndex}
                                                fontSize="12px"
                                                height="7px"
                                                color="#D6D6D6"
                                                bg={tickIndex + 1 <= rangeInputs[i]?.value ? "#bad149" : "#D6D6D6"} // 동적 색상
                                                borderRadius="50%" // 원형
                                    
                                                width="7px"
                                            >
                                            </Box>
                                        ))}
                                    </Box> */}
                                </Box>
                            ))
                        ) : (
                            <p>Step 2에서 선택된 버튼이 없습니다. 버튼을 선택하세요!</p>
                        )}
                    </Box>
                )}

                {activeStep === 3 && (
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
