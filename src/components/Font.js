import React from "react";
import styled from "styled-components";

const Text = styled.div`
display: flex;
width: 100%;
flex-direction: column;
font-size: 30px;
text-align: center;
text-justify: center;
line-height: 3;
`;

export default function Font() {
    const texts = [
        {
            id: 1,
            num: 1,
            fontFamily: 'Mouse Memoirs'
        },
        {
            id: 2,
            num: 2,
            fontFamily: 'Handlee'
        },
        {
            id: 3,
            num: 3,
            fontFamily: 'Luckiest Guy'
        },

        {
            id: 4,
            num: 4,
            fontFamily: 'Abril Fatface'
        },
        {
            id: 5,
            num: 5,
            fontFamily: 'Poller One'
        },

        {
            id: 6,
            num: 6,
            fontFamily: 'Chango'
        },
        {
            id: 7,
            num: 7,
            fontFamily: 'Fredericka the Great'
        },
        {
            id: 8,
            num: 8,
            fontFamily: 'Oleo Script Swash Caps'
        },
        {
            id: 9,
            num: 9,
            fontFamily: 'Lobster'
        },

        {
            id: 10,
            num: 10,
            fontFamily: 'Inspiration'
        },
        {
            id: 11,
            num: 10,
            fontFamily: 'Baloo Da 2'
        },
        {
            id: 12,
            num: 10,
            fontFamily: 'Baloo Thambi 2'
        },
        {
            id: 13,
            num: 10,
            fontFamily: 'Nova Flat'
        },
        {
            id: 14,
            num: 10,
            fontFamily: 'Nova Round'
        },
        {
            id: 15,
            num: 10,
            fontFamily: 'Offside'
        },
        {
            id: 16,
            num: 10,
            fontFamily: 'Rock Salt'
        },
        {
            id: 17,
            num: 10,
            fontFamily: 'Roboto'
        },
    ]

    const textList = texts.map(text => <Text style={text}> This is the Font. DO YOU LIKE THIS? </Text>)
    return (
        <div style={{paddingTop: '80px'}}>
            {textList}
        </div>

    );
}
