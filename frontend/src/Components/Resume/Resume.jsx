import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => {
    // Load file info from local storage on component mount
    const savedFileName = localStorage.getItem('fileName');
    const savedFileUrl = localStorage.getItem('fileUrl');

    if (savedFileName && savedFileUrl) {
      setFileName(savedFileName);
      setFileUrl(savedFileUrl);
    }
  }, []);

  useEffect(() => {
    // Cleanup object URL when the component  fileUrl changes
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]);

  const addResume = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileName(file.name);
      setFileUrl(url);

      // Save file info to local storage
      localStorage.setItem('fileName', file.name);
      localStorage.setItem('fileUrl', url);
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
