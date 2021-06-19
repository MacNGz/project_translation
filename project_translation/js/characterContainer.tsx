import React, { useState } from 'react';
import Character from './character';
import styles from './../static/css/characterContainer.module.css';

interface ICharacterContainerProps {
    characters: string[];
    pinyin: string[];
}

const CharacterContainer = (props: ICharacterContainerProps) => {

    const { characters, pinyin } = props;

    const [showPinyin, setShowPinyin] = useState(false);

    return (
        <div className={styles.characterContainer}>
            <div>
                <input type="checkbox" id="showPinyin" className={styles.showPinyinCheckbox} onChange={(event) => setShowPinyin(event.target.checked)}/>
                <label htmlFor="showPinyin">Show pinyin?</label>
            </div>
            {
                characters.map((value, index) => {
                    return <Character key={index} text={value} pinyin={pinyin[index]} showPinyin={showPinyin} />
                })
            }
        </div>
    );
    
};

export default CharacterContainer;