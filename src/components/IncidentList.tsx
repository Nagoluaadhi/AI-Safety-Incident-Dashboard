import React, { useState } from 'react';
import { Incident } from '../data/mockIncidents';
import IncidentItem from './IncidentItem';
import styles from './IncidentList.module.css';

type Props = {
  incidents: Incident[];
};

const IncidentList: React.FC<Props> = ({ incidents }) => {
  const [filter, setFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'Newest' | 'Oldest'>('Newest');

  const filtered = incidents.filter(i => filter === 'All' || i.severity === filter);
  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'Newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <select onChange={e => setFilter(e.target.value)} value={filter}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select onChange={e => setSortOrder(e.target.value as any)} value={sortOrder}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
      {sorted.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;