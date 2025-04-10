import React, { useState } from 'react';
import { mockIncidents, Incident } from './data/mockIncidents';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import styles from './App.module.css';

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);

  const addIncident = (incident: Incident) => {
    setIncidents([incident, ...incidents]);
  };

  return (
    <div className={styles.container}>
      <h1>AI Safety Incident Dashboard</h1>
      <IncidentForm onAdd={addIncident} />
      <IncidentList incidents={incidents} />
    </div>
  );
};

export default App;