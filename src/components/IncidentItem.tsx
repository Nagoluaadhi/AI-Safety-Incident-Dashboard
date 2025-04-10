import React, { useState } from 'react';
import { Incident } from '../data/mockIncidents';
import styles from './IncidentItem.module.css';

type Props = {
  incident: Incident;
};

const IncidentItem: React.FC<Props> = ({ incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.summary}>
        <strong>{incident.title}</strong>
        <span>{incident.severity}</span>
        <span>{new Date(incident.reported_at).toLocaleDateString()}</span>
        <button onClick={() => setShowDetails(prev => !prev)}>
          {showDetails ? 'Hide' : 'View'} Details
        </button>
      </div>
      {showDetails && <p className={styles.description}>{incident.description}</p>}
    </div>
  );
};

export default IncidentItem;