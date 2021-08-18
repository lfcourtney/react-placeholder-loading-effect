import React, { useState} from 'react';
import styles from './card.module.css';
import LoadingPlaceHolder, {containerStyles} from '../LoadingPlaceHolder/LoadingPlaceHolder';

function Card(props) {

    const [loaded, setLoaded] = useState(false);
    let imageLoadNum = 0;

    const stuffLoaded = () => {
        imageLoadNum++;
        if(imageLoadNum < 2) return;
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
            <div style={containerStyles}>
            {!loaded && <LoadingPlaceHolder extraStyles={{height: '100%', top: '0', left: '0',}} container />}
            <img src={props.mainImg} alt="card-img" 
                className={styles.cardHeaderImg} onLoad={stuffLoaded} />
            </div>
            </div>
            <div className={styles.cardSub}>
                {!loaded && <LoadingPlaceHolder extraStyles={{height: '15px', marginBottom: '16px', borderRadius: '10px'}} />}
                {loaded && <h3>{props.title}</h3>}
                {Array.from(Array(Math.ceil(props.subTitle.length / 39)).keys()).map(() => (
                    !loaded && <LoadingPlaceHolder extraStyles={{height: '15px', borderRadius: '10px'}} />
                ))}
                {loaded && <p className={styles.infoText}>{props.subTitle}</p>}
                <div className={styles.profile}>
                    <div className={styles.profilePhotoContainer}>
                    {!loaded && <LoadingPlaceHolder extraStyles={{width: '100%', height: '100%'}} />}
                    <img src={props.profilePic} alt="creators-pic"
                    className={styles.profilePhoto} onLoad={stuffLoaded} />
                    </div>
                    <div>
                        {!loaded && <LoadingPlaceHolder extraStyles={{height: '15px', width: '100px', borderRadius: '10px',
                         margin: '4px 0'}} />}
                        {loaded && <p className={styles.profileName}>{props.author}</p>}
                        {!loaded && <LoadingPlaceHolder extraStyles={{height: '15px', width: '120px', borderRadius: '10px',
                         margin: '4px 0'}} />}
                        {loaded && <p className={styles.profileDate}>{props.date}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;