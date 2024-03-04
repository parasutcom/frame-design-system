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
          });
        };
        checkboxActions();
      }, 1000);

      setTimeout(() => {
        const datePickerActions = () => {
          const dateInputs = document.querySelectorAll(
            '.fds-text-input[data-target="date-picker"]',
          );
          dateInputs.forEach((input) => {
            input.addEventListener('focus', function () {
              let existingCalendar = this.nextElementSibling;
              if (
                !existingCalendar ||
                !existingCalendar.classList.contains('fds-calendar')
              ) {
                const calendar = `
                <div class="fds-calendar fds-calendar--open">
                  <div class="fds-calendar__header">
                    <button class="fds-btn fds-btn--ghost fds-btn--icon fds-calendar__prev-btn">
                      <span class="fds-icon"><i class="fa-regular fa-chevron-left"></i></span>
                    </button>
                    <div class="fds-calendar__filter">
                      <div class="fds-calendar__filter-month">
                        <select name="" id="" class="fds-calendar__select">
                          <option value="">January</option>
                          <option value="">February</option>
                          <option value="">March</option>
                          <option value="">April</option>
                          <option value="">May</option>
                          <option value="">June</option>
                          <option value="">July</option>
                          <option value="">August</option>
                          <option value="">September</option>
                          <option value="">October</option>
                          <option value="">November</option>
                          <option value="">December</option>
                        </select>
                      </div>
                      <div class="fds-calendar__filter-year">
                        <select name="" id="" class="fds-calendar__select">
                          <option value="">2022</option>
                          <option value="">2023</option>
                          <option value="">2024</option>
                          <option value="">2025</option>
                        </select>
                      </div>
                    </div>
                    <button class="fds-btn fds-btn--ghost fds-btn--icon fds-calendar__prev-btn">
                      <span class="fds-icon"><i class="fa-regular fa-chevron-right"></i></span>
                    </button>
              
                  </div>
                  <div class="fds-calendar__content">
                    <div class="fds-calendar__weekdays">
                      <span class="fds-calendar__weekday">M</span>
                      <span class="fds-calendar__weekday">T</span>
                      <span class="fds-calendar__weekday">W</span>
                      <span class="fds-calendar__weekday">T</span>
                      <span class="fds-calendar__weekday">F</span>
                      <span class="fds-calendar__weekday">S</span>
                      <span class="fds-calendar__weekday">S</span>
                    </div>
                    <div class="fds-calendar__days">
                      <span class="fds-calendar__day fds-calendar__day--prev-month-day">26</span>
                      <span class="fds-calendar__day fds-calendar__day--prev-month-day">27</span>
                      <span class="fds-calendar__day fds-calendar__day--prev-month-day">28</span>
                      <span class="fds-calendar__day fds-calendar__day--prev-month-day">29</span>
                      <span class="fds-calendar__day fds-calendar__day--prev-month-day">30</span>
                      <span class="fds-calendar__day fds-calendar__day--prev-month-day">31</span>
                      <span class="fds-calendar__day">1</span>
                      <span class="fds-calendar__day">2</span>
                      <span class="fds-calendar__day">3</span>
                      <span class="fds-calendar__day">4</span>
                      <span class="fds-calendar__day">5</span>
                      <span class="fds-calendar__day">6</span>
                      <span class="fds-calendar__day ">7</span>
                      <span class="fds-calendar__day">8</span>
                      <span class="fds-calendar__day">9</span>
                      <span class="fds-calendar__day">10</span>
                      <span class="fds-calendar__day">11</span>
                      <span class="fds-calendar__day">12</span>
                      <span class="fds-calendar__day">13</span>
                      <span class="fds-calendar__day">14</span>
                      <span class="fds-calendar__day">15</span>
                      <span class="fds-calendar__day fds-calendar__day--today" role="button" tabindex="0">16</span>
                      <span class="fds-calendar__day">17</span>
                      <span class="fds-calendar__day">18</span>
                      <span class="fds-calendar__day">19</span>
                      <span class="fds-calendar__day">20</span>
                      <span class="fds-calendar__day fds-calendar__day--disabled">21</span>
                      <span class="fds-calendar__day">22</span>
                      <span class="fds-calendar__day">23</span>
                      <span class="fds-calendar__day">24</span>
                      <span class="fds-calendar__day">25</span>
                      <span class="fds-calendar__day fds-calendar__day--selected">26</span>
                      <span class="fds-calendar__day">27</span>
                      <span class="fds-calendar__day">28</span>
                      <span class="fds-calendar__day">29</span>
                      <span class="fds-calendar__day">30</span>
                      <span class="fds-calendar__day">31</span>
                      <span class="fds-calendar__day fds-calendar__day--next-month-day">1</span>
                      <span class="fds-calendar__day fds-calendar__day--next-month-day">2</span>
                      <span class="fds-calendar__day fds-calendar__day--next-month-day">3</span>
                      <span class="fds-calendar__day fds-calendar__day--next-month-day">4</span>
                      <span class="fds-calendar__day fds-calendar__day--next-month-day">5</span>
                    </div>
                  </div>
                </div>
                `;
                this.insertAdjacentHTML('afterend', calendar);
              } else {
                existingCalendar.classList.add('fds-calendar--open');
              }
            });
          });

          document.addEventListener('click', (e) => {
            if (
              !e.target.closest('.fds-text-input') &&
              !e.target.closest('.fds-calendar')
            ) {
              const calendars = document.querySelectorAll(
                '.fds-form-item__field-wrapper .fds-calendar',
              );
              calendars.forEach((calendar) => {
                calendar.classList.remove('fds-calendar--open');
              });
            }
          });
        };
        datePickerActions();
      }, 1000);

      setTimeout(() => {
        const tabActions = () => {
          const tabGroups = document.querySelectorAll('.demo');

          tabGroups.forEach((group) => {
            const tabButtons = group.querySelectorAll('.fds-tablist__tab');
            const tabContents = group.querySelectorAll('.fds-tab-content');

            tabButtons.forEach((button) => {
              button.addEventListener('click', () => {
                tabButtons.forEach((tab) =>
                  tab.classList.remove('fds-tablist__tab--selected'),
                );
                button.classList.add('fds-tablist__tab--selected');

                tabContents.forEach((content) => (content.hidden = true));

                const tabId = button.id.replace('-tab', '');
                const activeTab = group.querySelector(`#${tabId}`);
                if (activeTab) {
                  activeTab.hidden = false;
                }
              });
            });
          });
        };
        tabActions();
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
          const openModalButtons = document.querySelectorAll('.fds-btn[data-open-modal]');
          const closeModalButtons = document.querySelectorAll('.fds-btn[data-close-modal]');

          openModalButtons.forEach((button) => {
            button.addEventListener('click', () => {
              const modalID = button.getAttribute('data-open-modal');
              const modal = document.getElementById(modalID);
              modal.classList.add('fds-modal--open');
            });
          });

          closeModalButtons.forEach((button) => {
            button.addEventListener('click', () => {
              const modalID = button.getAttribute('data-close-modal');
              const modal = document.getElementById(modalID);
              modal.classList.remove('fds-modal--open');
            });
          });
        };
        modalActions();
      }, 1000);

      setTimeout(() => {
        const overflowMenuActions = () => {
          const overflowMenus = document.querySelectorAll('.fds-overflow-menu');

          overflowMenus.forEach((menu) => {
            const overflowMenuButton = menu.querySelector('.fds-btn');
            const overflowMenuInput = menu.querySelector('.fds-select-input');
            const overflowMenuOptions = menu.querySelectorAll('.fds-overflow-menu__option');
            const SelectInputLabel = menu.querySelector('.fds-select-input__label');
            const SelectInputArrow = menu.querySelector('.fds-select-input__arrow');

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
