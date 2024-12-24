"use client";
import Steps from "@/theme/components/steps";
import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Step, StepsTheme } from "chakra-ui-steps";

export const WadmPage = ({ variant }) => {
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });
    const isLastStep = activeStep === steps.length - 1;
    const hasCompletedAllSteps = activeStep === steps.length;
    const bg = useColorModeValue("gray.200", "gray.700");

    return (
        <Flex flexDir="column" width="100%">
            <Steps variant={variant} colorScheme="blue" activeStep={activeStep}>
                {StepsTheme.map(({ label }, index) => (
                    <Step label={label} key={label}>
                        <Box sx={{ p: 8, bg, my: 8, rounded: "md" }}>
                            <Heading fontSize="xl" textAlign="center">
                                Step {index + 1}
                            </Heading>
                        </Box>
                    </Step>
                ))}
            </Steps>
            {hasCompletedAllSteps && (
                <Box sx={{ bg, my: 8, p: 8, rounded: "md" }}>
                    <Heading fontSize="xl" textAlign="center">
                        Woohoo! All steps completed! 🎉
                    </Heading>
                </Box>
            )}
            <Flex width="100%" justify="flex-end" gap={4}>
                {hasCompletedAllSteps ? (
                    <Button size="sm" onClick={reset}>
                        Reset
                    </Button>
                ) : (
                    <>
                        <Button isDisabled={activeStep === 0} onClick={prevStep} size="sm" variant="ghost">
                            Prev
                        </Button>
                        <Button size="sm" onClick={nextStep}>
                            {isLastStep ? "Finish" : "Next"}
                        </Button>
                    </>
                )}
            </Flex>
        </Flex>
    );
};

export default WadmPage;
