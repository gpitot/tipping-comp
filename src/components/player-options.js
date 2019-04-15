import React from 'react';
import styled, {keyframes} from 'styled-components';

import {netballPlayers} from '../fake-api-data/netball-players';
import Player from '../components/player';


const PlayerOptions = (props) => {
    const {position} = props;
    if (position === null) return null;

    const players = netballPlayers.filter(p => p.positionid === props.position.id);
    console.log(players);
    return (
        <Area>

            <PlayerArea>

            {
                players.map((p) => {
                    return (
                        <Player 
                            player={p} 
                            position = {props.position}
                            key={position.id} 
                            handleClick={props.changePlayer} 
                        />
                    )
                    
                })
            }

            </PlayerArea>

        </Area>
    )
}


const fadeIn = keyframes`
    from {opacity:0;}
    to {opacity:0.8;}
`;

const Area = styled.div`
    
    width:100%;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    opacity:0;
    background:rgb(0,0,0);
    animation : ${fadeIn} 0.5s ease-in forwards;
`;

const PlayerArea = styled.div`
    display:flex;
    margin:auto;
    width:1024px;
    margin-top:200px;

`;

export default PlayerOptions;