import React from 'react';

interface IResultsFormProps {
    pinyin: string;
    translation: string;
}

const ResultsForm = (props: IResultsFormProps) => {

    const { pinyin, translation } = props;

    return (
        <div className="label-with-buffer">
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
        </div>
    );
};

export default ResultsForm;