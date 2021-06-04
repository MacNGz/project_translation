import React, { useCallback, useState } from 'react';
import EntryForm from './entryform';
import ResultsForm from './resultsform';

interface IContentProps {
    caption: string;
    url: string;
}

const Content = (props: IContentProps) => {

    const { caption, url } = props;

    const [resultValue, setResultValue] = useState("");
    const [translation, setTranslation] = useState("");

    const onEntryFormSubmit = useCallback(
        async (value: string) => {

            const response = await fetch(
                `${url}pinyin?han=${value}`, 
                { method: 'GET', credentials: 'same-origin'}
            );

            const data = await response.json();
            setResultValue(data.pinyin);
            setTranslation(data.translation);
        },
        []
    );

    return (
        <div className="container">
            <div className="card">
                <p>{caption}</p>
            </div>
            <div className="card">
                <EntryForm label="Enter some text:" onSubmit={onEntryFormSubmit}/>
            </div>
            <div className="card">
                <ResultsForm pinyin={resultValue} translation={translation}/>
            </div>
        </div>
    );
};

export default Content;