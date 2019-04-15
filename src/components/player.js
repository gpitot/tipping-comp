import React from 'react';
import styled from 'styled-components';


const Player = (props) => {
    const {player} = props;
    const {name, image} = player !== null ? player : {name : `Select ${props.position.name}`, image : {src:'http://www.advancedsec.com/wp-content/uploads/2018/11/profile-blank.png'}};


    return (
        <PlayerArea onClick={()=>{props.handleClick(props.position, player)}}>
            <ImageOuter>
                <Image {...image} />
            </ImageOuter>
            <PlayerName>{name}</PlayerName>
        </PlayerArea>
    );
}



const PlayerArea = styled.div`
    width:150px;
    height:150px;
    margin:10px;
    position:relative;
    border:solid 1px black;
`;

const ImageOuter = styled.div`
    width:100%;
    height:100%;
`;

const Image = styled.img`
    width:100%;
    height:auto;
    object-fit:cover;
    display:block;
`;

const PlayerName = styled.div`
    position:absolute;
    bottom:0;
    height:50px;
    width:100%;
    background:rgba(0,0,0,0.6);
    color:white;
    text-align:center;
    line-height:50px;
`;

export default Player;