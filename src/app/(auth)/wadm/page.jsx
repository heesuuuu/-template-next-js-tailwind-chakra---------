"use client";
import React from "react";
import {
    Box,
    Button,
    Flex,
    Image,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from "@chakra-ui/react";

const steps = [
    {
        title: "Step 1",
        description: "Contact Info",
        content: "어떤 선택에 대해 당신의 선호도가 더 높은지 판단하기에 유용 ",
        emotion: (
            <Image
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Thumbs%20Up%20Light%20Skin%20Tone.png"
                alt="Thumbs Up Light Skin Tone"
                width="150"
                height="150"
                items-center
            />
        ),
    },
    { title: "Step 2", description: "Date & Time", content: "This is the content for Step 2",emotion: (
      <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hugging%20Face.png" alt="Hugging Face" width="150"
      height="150"
      items-center />
  ) },
    { title: "Step 3", description: "Select Rooms", content: "This is the content for Step 3",emotion: (
      <Image
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Thumbs%20Up%20Light%20Skin%20Tone.png"
          alt="Thumbs Up Light Skin Tone"
          width="150"
          height="150"
          items-center
      />
  ) },
];

const WadmPage = () => {
    const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
        index: 0, // 기본적으로 첫 번째 단계로 시작
        count: steps.length, // 총 단계 개수
    });

    return (
        <Box>
            {/* Stepper */}
            <Stepper index={activeStep} colorScheme="blue">
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator onClick={() => setActiveStep(index)} cursor="pointer">
                            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                        </StepIndicator>

                        <Box flexShrink="0">
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>

            {/* Step Content */}
            <div height="200px" width="200px">
                <div m-auto align="center">
                    {steps[activeStep].emotion}
                </div>
                <Box mt={8} p={4} border="1px solid" borderColor="gray.300" borderRadius="md" textAlign="center">
                    {steps[activeStep].content}
                </Box>
            </div>

            {/* Navigation Buttons */}
            <Flex justify="space-between" mt={4}>
                {/* 이전 버튼 */}
                <Button
                    onClick={goToPrevious}
                    isDisabled={activeStep === 0} // 첫 단계에서 비활성화
                    variant="outline"
                    colorScheme="blue"
                >
                    Previous
                </Button>

                {/* 완료 버튼 (마지막 단계일 경우) */}
                {activeStep === steps.length - 1 ? (
                    <Button onClick={() => alert("Steps Completed!")} colorScheme="green">
                        Complete
                    </Button>
                ) : (
                    // 다음 버튼 (완료 버튼 제외 시)
                    <Button onClick={goToNext} colorScheme="blue">
                        Next
                    </Button>
                )}
            </Flex>
        </Box>
    );
};

export default WadmPage;
