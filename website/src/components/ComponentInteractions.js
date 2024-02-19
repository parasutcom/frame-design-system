import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

function ComponentInteractions() {
  const location = useLocation();

  useEffect(() => {
    const applyComponentActions = () => {
      setTimeout(function () {
        const tooltip = document.querySelectorAll('.fds-tooltip');
        tooltip.forEach((tooltip) => {
          tooltip.addEventListener('mouseenter', () => {
            if (tooltip) {
              tooltip.classList.add('fds-tooltip--open');
            }
          });

          tooltip.addEventListener('mouseleave', () => {
            if (tooltip) {
              tooltip.classList.remove('fds-tooltip--open');
            }
          });
        });
      }, 1000);
    };
    applyComponentActions();
  }, [location.pathname]);
  return null;
}

export default ComponentInteractions;
