import React, {Component} from 'react';
import Formation from '../components/formation';
import PlayerOptions from '../components/player-options';

import {startFormations} from '../config/start-formations';

class Home extends Component {

    state = {
        formation : startFormations.netball,
        loadPosition : null
    }


    loadPlayerOptions = (loadPosition, player) => {
        //loads options for a position and displays
        this.setState({loadPosition})
        console.log(loadPosition);
    }

    changePlayer = (position, player) => {
        //selects a player for a position
        const formation = [...this.state.formation];
        for (let i=0;i<formation.length;i+=1) {
            const posid = formation[i].position.id;
            if (posid === position.id) {
                formation[i] = {
                    ...formation[i],
                    player
                };
                break;
            }
        }

        this.setState({
            formation
        });
    }

    render() {
        return (
            <div>
                <Formation 
                    loadPlayerOptions = {this.loadPlayerOptions}
                    formation={this.state.formation}
                />
                <PlayerOptions 
                    position = {this.state.loadPosition}
                    changePlayer = {this.changePlayer}
                />
                
            </div>
        )
    }
}

export default Home;