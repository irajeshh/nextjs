"use client";

import { useState } from "react";
// in your file
import * as W from "../../Widgets/Widgets";
// A simlple page which never loads anything from repository or API,
// so it will be shown immediately
export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <W.Column>
            <W.Txt text={`Counter: ${count}`} isBold={true}></W.Txt>
            <W.Txt text={`This is my sample text without bold`} isBold={false}></W.Txt>
            <W.Txt fontSize={40} text={`This is my sample text with font size 4`} ></W.Txt>
            <W.Txt text={`This is my sample text with font size 6`} fontSize={8}></W.Txt>
            <W.Txt text={`This is my sample text with font size 8`} fontSize={12}></W.Txt>
            <W.Txt text={`This is my sample text with font size 10`} fontSize={14}></W.Txt>
            <W.Txt text={`This is my sample text with font size 12`} fontSize={16}></W.Txt>
            <W.Txt text={`This is my sample text with font size 14`} fontSize={20}></W.Txt>
            <W.Txt text={`This is my sample text with font size 16`} fontSize={24}></W.Txt>
            <W.Txt text={`This is my sample text with font size 18`} fontSize={28}></W.Txt>
            <W.Row>
                <W.Button
                    onClick={increment}
                    customLabel="Increment"
                    isIncrement={true}
                />
                <W.Button
                    onClick={decrement}
                    // customLabel="Decrement"
                    isIncrement={false}
                />
            </W.Row>
        </W.Column>
    );
}