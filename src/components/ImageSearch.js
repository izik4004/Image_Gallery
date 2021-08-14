import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }
    
    return (
        <div className="max-w-sm mx-auto my-1 overflow-hidden rounded">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center py-2 border border-b-2 border-blue-500">
                    <input onChange={e => setText(e.target.value)} className="w-full py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Search Image......."/>
                    <button className="flex-shrink-0 px-2 py-1 text-sm text-white bg-blue-500 border-4 border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700" type="submit">Search</button>
                </div>
            </form>
            
        </div>
    )
}

export default ImageSearch;
