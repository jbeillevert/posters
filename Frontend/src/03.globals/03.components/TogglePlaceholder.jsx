import React, { useContext } from 'react';
import { PlaceholderContext } from '../00.contextes/PlaceholderContext';

const PlaceholderToggle = () => {
  const { showPlaceholder, setShowPlaceholder } = useContext(PlaceholderContext);

  const handleClick = () => {
    setShowPlaceholder(prevShowPlaceholder => !prevShowPlaceholder);
  };

  return (
    <button onClick={handleClick}>
      {showPlaceholder ? 'Hide placeholders' : 'Show placeholders'}
    </button>
  );
};

export default PlaceholderToggle;
