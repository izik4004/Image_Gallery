import React, { useState, useEffect } from 'react';
// import './index.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);
  
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-purple-500">
          Photo by Izik Doe
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            4000
          </li>
          <li>
            <strong>Download:</strong>
            4000
          </li>
          <li>
            <strong>Likes:</strong>
            4000
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #tag1
        </span>
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #tag1
        </span>
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #tag1
        </span>
      </div>
    </div>
  );
}

export default App;
