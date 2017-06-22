import React, { Component } from 'react';

class ListCharacter extends Component {

    state = {
        hero: {}
    };

    loadData() {

        const heroClasses = {
            'Ana': 'support',
            'Bastion': 'defense',
            'D.Va': 'tank',
            'Genji': 'offense',
            'Hanzo': 'defense',
            'Junkrat': 'defense',
            'L\u00facio': 'support',
            'McCree': 'offense',
            'Mei': 'defense',
            'Mercy': 'support',
            'Pharah': 'offense',
            'Reaper': 'offense',
            'Reinhardt': 'tank',
            'Roadhog': 'tank',
            'Soldier: 76': 'offense',
            'Symmetra': 'support',
            'Torbj\u00f6rn': 'defense',
            'Tracer': 'offense',
            'Widowmaker': 'defense',
            'Winston': 'tank',
            'Zarya': 'tank',
            'Zenyatta': 'support',
            'Sombra': 'offense',
            'Orisa': 'tank'
        }

        var herosArr = [];
        const random = Math.floor(Math.random() * 24) + 1;

        fetch("https://overwatch-api.net/api/v1/hero/" + random)  //This is retrieving the information from that URL
            .then(response => response.json())   //This transforms the response into Json (a javascript object)
            .then(json => {
                // herosArr.push(json);
                this.setState({
                    hero: json
                });
            });

        // const randHero = herosArr[random];
        // this.setState({
        // hero: randHero
        // });
    }
    componentDidMount() {
        this.loadData();    //This is ensuring the data then displays only after that entire process has been completed
    }

    render() {

        const hero = this.state.hero.name;
        return (
            <div><h1>{hero}</h1></div>
        );
    }
}
export default ListCharacter