import React, { useState, useEffect } from 'react'
import './TinderCards.css';
import moduleName from 'module'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core';
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([
        // {
        //     name: 'jeffbezoz',
        //     url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Jeff_Bezos_2016.jpg'
        // },
        // {
        //     name: 'Ema Watson',
        //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Emma_Watson_interview_in_2017.jpg/330px-Emma_Watson_interview_in_2017.jpg'
        // },
        // {
        //     name: 'Nicole Kidman',
        //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Nicole_Kidman_Cannes_2017_2.jpg/330px-Nicole_Kidman_Cannes_2017_2.jpg'
        // },
        // {
        //     name: 'Sunny Leone',
        //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sunny_Leone_for_%27Sunny_Ka_New_Year_Call%27_campaign.jpg/330px-Sunny_Leone_for_%27Sunny_Ka_New_Year_Call%27_campaign.jpg'
        // },
        // {
        //     name: 'Priyanka Chopra',
        //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Priyanka-chopra-gesf-2018-7565.jpg/330px-Priyanka-chopra-gesf-2018-7565.jpg'
        // },
        // {
        //     name: 'Aishwarya',
        //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Aishwarya_Rai_Cannes_2017.jpg/330px-Aishwarya_Rai_Cannes_2017.jpg'
        // },
        // {
        //     name: 'Rani',
        //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Rani_Mukerji_promoting_Hichki_in_2018_%28cropped%29.jpg/330px-Rani_Mukerji_promoting_Hichki_in_2018_%28cropped%29.jpg'
        // },

    ]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        // setLastDiretion(direction);
    };

    const outOfframe = (name) => {
        console.log(name + 'left the screen');
    };


    return (
        <div className='tinderCards'>
            {/* <h1>card will be shown here</h1> */}
            <div className='tinderCards_cardContainer'>
                {people.map((person, key) => (
                    <TinderCard
                        className='swipe'
                        key={key}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfframe(person.name)}
                    >
                        <div
                            style={{ backgroundImage: 'url(' + person.imgUrl + ')', flex:1 }}
                            className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
