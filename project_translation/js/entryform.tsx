import React, { useState } from 'react';

interface IEntryFormProps {
    label: string;
    onSubmit(value: string): void;
}

const EntryForm = (props: IEntryFormProps) => {

    const { label, onSubmit } = props;

    const [entryValue, setEntryValue] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit(entryValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> 
                <span className="label-with-buffer">
                    {label}
                </span>
                <input 
                type="text" 
                id="entryField"
                value={entryValue}
                onChange= {event => setEntryValue(event.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default EntryForm