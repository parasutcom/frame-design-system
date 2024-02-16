import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

function ComponentInteractions() {
  const location = useLocation();

  useEffect(() => {
    const applyComponentActions = () => {};
    applyComponentActions();
  }, [location.pathname]);
  return null;
}

export default ComponentInteractions;
