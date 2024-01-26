---
title: Calendar
---

## Types

### Single

```html live
<div class="demo">
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
</div>
```

### Range

```html live
<div class="demo">
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
        <span class="fds-calendar__day fds-calendar__day--start-range">3</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">4</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">5</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">6</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">7</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">8</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">9</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">10</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">11</span>
        <span class="fds-calendar__day fds-calendar__day--in-range">12</span>
        <span class="fds-calendar__day fds-calendar__day--end-range">13</span>
        <span class="fds-calendar__day">14</span>
        <span class="fds-calendar__day ">15</span>
        <span class="fds-calendar__day">16</span>
        <span class="fds-calendar__day">17</span>
        <span class="fds-calendar__day">18</span>
        <span class="fds-calendar__day">19</span>
        <span class="fds-calendar__day">20</span>
        <span class="fds-calendar__day fds-calendar__day--today" role="button" tabindex="0">21</span>
        <span class="fds-calendar__day">22</span>
        <span class="fds-calendar__day">23</span>
        <span class="fds-calendar__day">24</span>
        <span class="fds-calendar__day">25</span>
        <span class="fds-calendar__day">26</span>
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
</div>
```

