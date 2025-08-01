import React from "react";
import Papa from "papaparse";

function FileUploader({ onDataLoaded }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log("Parsed CSV:", results.data); // для проверки
        onDataLoaded(results.data); // передаём в App
      },
    });
  };

  return <input type="file" accept=".csv" onChange={handleFileUpload} />;
}

export default FileUploader;