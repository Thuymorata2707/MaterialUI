import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useState, useRef } from "react";
import {Box} from "@mui/system";
import { Slide } from "@mui/material";

const messages =[
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subscribe :)",
]

export default function Promotions(){
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=> {
            setShow(false)
        }, 3000);


        const intervalId = setInterval(()=>{
            setMessageIndex((i)=> (i+1) % messages.length);

            setShow(true);

            setTimeout(()=> {
                setShow(false)
            }, 3000);
        }, 4000);

        return ()=> {
            clearInterval(intervalId);
        }
    },[]);
    return (
        <PromotionsContainer ref = {containerRef}>
            <Slide 
                container = {containerRef.current}
                    direction={show ? "left" : "right"}
                    in = {show}
                    timeout={{
                        enter: 500,
                        exit: 100
                    }}>
                <Box display={"flex"} justifyContent="center" alignItems ={"center"}>
                    <MessageText>
                        {messages [messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    );
}