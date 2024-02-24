import React, { useState } from 'react';

const AddSeed = ({ seedData, setSeedData }) => {
    const [name, setName] = useState("");
    const [count, setCount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newObj = { name: name, count: count };
        setSeedData([...seedData, newObj]);
        setName("");
        setCount("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="count">Count</label>
            <input type="number" id="count" value={count} onChange={(e) => setCount(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddSeed;
