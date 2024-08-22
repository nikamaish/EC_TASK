import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const addResume = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <button
        className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={addResume}
      >
        Add Resume
        <FontAwesomeIcon icon={faPlus} className="ml-2" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      {fileName && (
        <div className="mt-4">
          <a
            href={fileUrl}
            download={fileName}
            className="text-blue-500 hover:underline"
          >
            {fileName}
          </a>
        </div>
      )}
    </div>
  );
};

export default Resume;
