import React, { useState } from 'react';

const Seed = ({ seedData, setSeedData, id, name, count, imgLnk }) => {
    const [addCount, setAddCount] = useState(0);
    const [removeCount, setRemoveCount] = useState(0);

    const handleAdd = (id) => {
        setSeedData(seedData.map(seed => {
            if (seed.id === id) {
                return { ...seed, count: seed.count + addCount };
            }
            return seed;
        }));
        setAddCount(0);
    };

    const handleRemove = (id) => {
        setSeedData(seedData.map(seed => {
            if (seed.id === id) {
                const newCount = seed.count - removeCount < 0 ? 0 : seed.count - removeCount;
                return { ...seed, count: newCount };
            }
            return seed;
        }));
        setRemoveCount(0);
    };

    return (
        <div className="card">
            <img src={imgLnk} alt="img" className="card-img" />
            <div className="card-text">
                <h3>Name: {name}</h3>
                <h3>Count: {count}</h3>
                <div>
                    <button onClick={() => handleAdd(id)}>Add</button>
                    <input type="number" value={addCount} onChange={(e) => setAddCount(parseInt(e.target.value) || 0)} />
                </div>
                <div>
                    <button onClick={() => handleRemove(id)}>Use</button>
                    <input type="number" value={removeCount} onChange={(e) => setRemoveCount(parseInt(e.target.value) || 0)} />
                </div>
            </div>
        </div>
    );
}

export default Seed;
