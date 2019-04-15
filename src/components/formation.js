import React from 'react';
import styled from 'styled-components';


import Player from './player';


const returnPlayer = (f, hc) => {
    const {player, position} = f;
    return (
        <Player 
            player={player} 
            position={position} 
            key={position.id} 
            handleClick={hc} 
        />
    )
}


const Formation = (props) => {
    const {formation} = props;
    return (
        <Area>


            <Row>
                {returnPlayer(formation[0], props.loadPlayerOptions)}
            </Row>

            <Row>
                {returnPlayer(formation[1], props.loadPlayerOptions)}
                {returnPlayer(formation[2], props.loadPlayerOptions)}
            </Row>

            <Row>
                {returnPlayer(formation[3], props.loadPlayerOptions)}
            </Row>

            <Row>
                {returnPlayer(formation[4], props.loadPlayerOptions)}
                {returnPlayer(formation[5], props.loadPlayerOptions)}
            </Row>

            <Row>
                {returnPlayer(formation[6], props.loadPlayerOptions)}
            </Row>

         
        </Area>
    )
}


const Area = styled.div`
    display:flex;
    flex-flow:row wrap;
    margin:auto;
    width:1024px;
`;

const Row = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
`;


export default Formation;