import React from 'react';
import styles from './../static/css/character.module.css';

interface ICharacterProps {
    key: number;
    text: string;
    pinyin: string;
    showPinyin?: boolean;
}

const Character = (props: ICharacterProps) => {
    const { text, pinyin, showPinyin } = props;

    return (
        <div className={styles.character}>
            { showPinyin 
                ?
                <div className={styles.pinyin}>
                    {pinyin}
                </div>
                : null
            }
            <div className={styles.text}>
                {text}
            </div>
        </div>
    );
};

export default Character;