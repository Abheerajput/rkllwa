import React from 'react';

const FounderCard =({ name, title, description })=> {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="italic">{title}</p>
      <p>{description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">More Info</button>
    </div>
  );
}

export default FounderCard;
