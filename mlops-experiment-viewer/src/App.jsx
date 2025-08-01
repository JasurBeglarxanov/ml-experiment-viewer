import React, { useState } from "react";
import FileUploader from "./components/fileupdater";
import ChartViewer from "./components/chartviewer";
import ExperimentList from "./components/experimentlist";

function App() {
  const [data, setData] = useState([]); // хранит CSV
  const [selectedExperiments, setSelectedExperiments] = useState([]); // выбранные ID

  // получить уникальные experiment_id из CSV
  const uniqueExperiments = [...new Set(data.map((d) => d.experiment_id))];

  return (
    <div style={{ padding: "20px" }}>
      <h1>ML Experiment Viewer</h1>

      <FileUploader onDataLoaded={setData} />

      {data.length > 0 && (
        <>
          <ExperimentList
            experiments={uniqueExperiments}
            selected={selectedExperiments}
            onChange={setSelectedExperiments}
          />

          <ChartViewer
            data={data}
            selectedExperiments={selectedExperiments}
          />
        </>
      )}
    </div>
  );
}

export default App;