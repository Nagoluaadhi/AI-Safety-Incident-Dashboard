import React, { useState } from 'react';
import { Incident } from '../data/mockIncidents';
import styles from './IncidentForm.module.css';

type Props = {
  onAdd: (incident: Incident) => void;
};

const IncidentForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc) return;

    const newIncident: Incident = {
      id: Date.now(),
      title,
      description: desc,
      severity,
      reported_at: new Date().toISOString(),
    };

    onAdd(newIncident);
    setTitle('');
    setDesc('');
    setSeverity('Low');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      ></textarea>
      <select value={severity} onChange={e => setSeverity(e.target.value as any)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Report Incident</button>
    </form>
  );
};

export default IncidentForm;