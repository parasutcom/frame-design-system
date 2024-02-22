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

      setTimeout(() => {
        const overflowMenuActions = () => {
          const overflowMenus = document.querySelectorAll('.fds-overflow-menu');

          overflowMenus.forEach((menu) => {
            const overflowMenuButton = menu.querySelector(".fds-btn");
            const overflowMenuInput = menu.querySelector(".fds-select-input");
            const overflowMenuOptions = menu.querySelectorAll(".fds-overflow-menu__option");
            const SelectInputLabel = menu.querySelector(".fds-select-input__label");
            const SelectInputArrow = menu.querySelector(".fds-select-input__arrow");

            if (overflowMenuButton) {
              overflowMenuButton.addEventListener('click', (e) => {
                e.stopPropagation();
                menu.classList.toggle('fds-overflow-menu--open');
              });

              overflowMenuOptions.forEach((option) => {
                option.addEventListener('click', (e) => {
                  e.stopPropagation();
                  if (!option.classList.contains('fds-overflow-menu__option--disabled')) {
                    menu.classList.toggle('fds-overflow-menu--open');
                  }
                });
              });
            }

            if (overflowMenuInput) {
              overflowMenuInput.addEventListener('click', (e) => {
                e.stopPropagation();
                menu.classList.toggle('fds-overflow-menu--open');
                SelectInputArrow.classList.toggle(
                  'fds-select-input__arrow--open',
                );
              });

              overflowMenuOptions.forEach((option) => {
                option.addEventListener('click', (e) => {
                  e.stopPropagation();
                  SelectInputLabel.textContent = option.textContent;
                  menu.classList.toggle('fds-overflow-menu--open');
                  SelectInputArrow.classList.toggle('fds-select-input__arrow--open');
                });
              });
            }
          });

          document.addEventListener('click', (e) => {
            overflowMenus.forEach((menu) => {
              if (!menu.contains(e.target)) {
                menu.classList.remove('fds-overflow-menu--open');
              }
            });
          });
        };
        overflowMenuActions();
      }, 1000);
    };
    applyComponentActions();
  }, [location.pathname]);
  return null;
}

export default ComponentInteractions;
