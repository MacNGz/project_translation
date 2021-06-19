import React from 'react';
import CharacterContainer from './characterContainer';

interface IResultsFormProps {
    entryValue: string;
    pinyin: string;
    translation: string;
}

const ResultsForm = (props: IResultsFormProps) => {

    const { entryValue, pinyin, translation } = props;

    const characterArr = [...entryValue];
    const pinyinArr = pinyin.split(" ");

    return (
        <div className="label-with-buffer">
            <span>
                Chinese:
            </span>
            <br />
            <span>
                {entryValue}
            </span>
            <br />
            <br />

            <span>
                Pinyin:
            </span>
            <br />
            <span>
                {pinyin}
            </span>
            <br />
            <br />

            <span>
                Translation:
            </span>
            <br />
            <span>
                {translation}
            </span>
            <br />
            <br />

            <CharacterContainer characters={characterArr} pinyin={pinyinArr} />
        </div>
    );
};

export default ResultsForm;