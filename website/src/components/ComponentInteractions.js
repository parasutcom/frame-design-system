import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

function ComponentInteractions() {
  const location = useLocation();

  useEffect(() => {
    const applyComponentActions = () => {
      setTimeout(() => {
        const checkboxActions = () => {
          const indeterminateCheckboxes = document.querySelectorAll('.fds-checkbox__input[name="checkbox-indeterminate"]');
          indeterminateCheckboxes.forEach((checkbox) => {
            checkbox.indeterminate = true;
          })
        };
        checkboxActions();
      }, 1000);

      setTimeout(() => {
        const tooltipActions = () => {
          const tooltips = document.querySelectorAll('.fds-tooltip');
          tooltips.forEach((tooltip) => {
            tooltip.addEventListener('mouseenter', () => {
              tooltip.classList.add('fds-tooltip--open');
            });
            tooltip.addEventListener('mouseleave', () => {
              tooltip.classList.remove('fds-tooltip--open');
            });
          });
        };
        tooltipActions();
      }, 1000);

      setTimeout(() => {
        const modalActions = () => {
          const openModalButtons = document.querySelectorAll(".fds-btn[data-open-modal]");
          const closeModalButtons = document.querySelectorAll(".fds-btn[data-close-modal]");

          openModalButtons.forEach((button) => {
            button.addEventListener("click", () => {
              const modalID = button.getAttribute("data-open-modal");
              const modal = document.getElementById(modalID);
              modal.classList.add('fds-modal--open');
            })
          });

          closeModalButtons.forEach((button) => {
            button.addEventListener("click", () => {
              const modalID = button.getAttribute("data-close-modal");
              const modal = document.getElementById(modalID);
              modal.classList.remove('fds-modal--open');
            });
          });
        };
        modalActions();
      }, 1000)

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
