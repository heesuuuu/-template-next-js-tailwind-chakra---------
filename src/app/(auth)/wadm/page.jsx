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
    StepIndicator,
    StepSeparator,
    StepStatus,
    Stepper,
    useSteps,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "../../../styles/globals.scss";
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
        // inputs: [],
    },
];

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
                        <Flex direction="column" className="my-4">
                            <StepIndicator onClick={() => setActiveStep(index)} cursor="pointer">
                                <StepStatus
                                    complete={<Box as="span" />}
                                    incomplete={<Box as="span" />}
                                    active={<Box as="span" />}
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
                    <Box justify="center" className="flex flex-col">
                        {rangeInputs.map((range, i) => (
                            <Box key={i} position="relative" width="100%" mb={4}>
                                <input
                                    type="range"
                                    value={range.value}
                                    min="1"
                                    max="10"
                                    step="1"
                                    style={{
                                        position: "relative",
                                        appearance: "none",
                                        cursor: "pointer",
                                        width: "100%",
                                        height: "17px",
                                        background: `linear-gradient(to right, #bad149 ${
                                            (range.value - 1) * 11.11
                                        }%, lightgray ${(range.value - 1) * 11.11}%)`,
                                        borderRadius: "100px",
                                        outline: "none",
                                    }}
                                    onChange={(e) =>
                                        setRangeInputs((prev) =>
                                            prev.map((r, index) =>
                                                index === i ? { ...range, value: e.target.value } : r
                                            )
                                        )
                                    }
                                />
                                {/* input range 내에 있는 점 디자인배치 */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "0",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "0 2px",
                                        pointerEvents: "none",
                                        transform: "translateY(-50%)",
                                    }}
                                >
                                    {Array.from({ length: 10 }, (_, tickIndex) => (
                                        <div
                                            key={tickIndex}
                                            style={{
                                                width: "5px",
                                                height: "5px",
                                                borderRadius: "50%",
                                                backgroundColor: tickIndex + 1 <= range.value ? "" : "#888",
                                            }}
                                        />
                                    ))}
                                </div>
                                {/* 눈금선 숫자배치 */}
                                <Box
                                    position="absolute"
                                    top="30px"
                                    left="0"
                                    width="100%"
                                    display="flex"
                                    justifyContent="space-between"
                                    padding="0 0.5%"
                                >
                                    {Array.from({ length: 10 }, (_, tickIndex) => (
                                        <Box key={tickIndex} fontSize="12px" color="gray" textAlign="center" width="20px">
                                            {tickIndex + 1}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
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
