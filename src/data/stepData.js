import { Image } from '@chakra-ui/react';
import React from 'react'

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
    },
    {
        title: "4단계",
        content: "선택한 결정요인의 중요도를 측정해 주세요.",
        emotion: (
            <Image
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Thumbs%20Up%20Light%20Skin%20Tone.png"
                alt="Thumbs Up Light Skin Tone"
                width="150"
                height="150"
            />
        ),
    },
];

export default steps
