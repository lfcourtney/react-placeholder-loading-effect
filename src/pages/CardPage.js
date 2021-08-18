import React from 'react';
import Card from '../components/Card/Card';

function CardPage(props) {


    return (
        <div style={{backgroundColor: '#E8ECED',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem'}}>
            <Card mainImg="https://www.w2media.org/wp-content/uploads/b/b-killer-hotel-room-card-design.jpg"
            profilePic="http://vision.gel.ulaval.ca/~jflalonde/cours/4105/h19/tps/results/tp3/111126876/images/04-Mathieu.jpg"
            title="Lorem ipsum dolor sit amet" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            author="Alex Cobalt" date="May 12th, 2021" />
        </div>
    );
}

export default CardPage;