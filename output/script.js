const data = {
  home: {
    title: 'Tracking major bushfires across the world',
    intro: 'The last decade has seen devastating fire seasons across multiple regions. Intense heat, dry conditions, and land-use pressure have combined to create emergency events that damaged ecosystems, homes, and communities.',
    stats: [
      { value: '15+', label: 'Major fire events' },
      { value: '10M+', label: 'Hectares burned' },
      { value: '4.5M', label: 'People affected' }
    ],
    highlight: 'Across the world, the most severe fires have occurred in Australia, the Amazon, North America, and parts of Europe and Asia.',
    hotspots: [
      { name: 'Indonesia peat fires', detail: '2015-2016 • severe smoke and land loss', x: 69, y: 56 },
      { name: 'Portugal fires', detail: '2017 • rapid spread through dry forests', x: 46, y: 30 },
      { name: 'Canada wildfire crisis', detail: '2023 • record-sized fire season', x: 21, y: 20 },
      { name: 'Amazon rainforest fires', detail: '2019 • biodiversity and forest damage', x: 32, y: 68 },
      { name: 'Black Summer', detail: '2019-2020 • catastrophic wildlife and home loss', x: 72, y: 80 }
    ]
  },
  asia: {
    title: 'Asia bushfire impacts',
    intro: 'In Asia, fires have often been linked to seasonal drought, peatland burning, and high-risk agricultural practices. Smoke from large peat fires has affected air quality over vast distances.',
    stats: [
      { value: '2015', label: 'Indonesia peat fire peak' },
      { value: '2.6M', label: 'Hectares affected' },
      { value: 'High', label: 'Air quality risk' }
    ],
    cards: [
      {
        title: 'Indonesia peat fires',
        year: '2015-2016',
        impact: 'Dense smoke affected millions and damaged fragile peatland ecosystems.',
        details: ['Large areas of peatland burned.', 'Air pollution exceeded hazardous levels.', 'Wildlife habitat was heavily disrupted.']
      },
      {
        title: 'Siberian wildfires',
        year: '2021',
        impact: 'Extreme summer heat accelerated rapid fire spread across boreal forests.',
        details: ['Thousands of hectares burned.', 'Smoke drifted across countries.', 'Forest and wildlife loss was significant.']
      },
      {
        title: 'South Asian dry-season fires',
        year: '2023',
        impact: 'Rural land and grassland fires worsened local air quality and crop loss.',
        details: ['Dry conditions fueled repeated outbreaks.', 'Communities faced difficult evacuations.', 'Recovery required urgent rehabilitation.']
      },
      {
        title: 'Forest fire pressure in the Himalayas',
        year: '2024',
        impact: 'Warmer weather raised fire risk in vulnerable hill and forest communities.',
        details: ['Fire risk increased with early heatwaves.', 'Forest cover and biodiversity were threatened.', 'Emergency response remained complex.']
      }
    ]
  },
  europe: {
    title: 'Europe bushfire impacts',
    intro: 'Europe has faced repeated wildfire surges during severe heat events, especially in Mediterranean regions where dry vegetation and high winds quickly turn fires into emergencies.',
    stats: [
      { value: '2017', label: 'Portugal severe season' },
      { value: '1.3M', label: 'Hectares impacted' },
      { value: 'Extreme', label: 'Heat risk' }
    ],
    cards: [
      {
        title: 'Portugal wildfires',
        year: '2017',
        impact: 'Deadly fires claimed lives and destroyed homes across the central and northern regions.',
        details: ['High winds increased spread rates.', 'Homes and farms were heavily damaged.', 'Fire crews faced intense overnight conditions.']
      },
      {
        title: 'Greece wildfire season',
        year: '2018',
        impact: 'Dry conditions and emergency weather patterns triggered major land loss and evacuation orders.',
        details: ['Dense forest areas were consumed.', 'Air quality dropped across regions.', 'Recovery involved major environmental response.']
      },
      {
        title: 'Southern Europe heatwave fires',
        year: '2022',
        impact: 'Dry landscapes and prolonged heat increased fire severity across the region.',
        details: ['Infrastructure losses were significant.', 'Wildlife and habitats were heavily affected.', 'Residents required emergency shelter.']
      },
      {
        title: 'Balkans wildfire pressure',
        year: '2023',
        impact: 'Repeated fire outbreaks put pressure on local forest services and rural communities.',
        details: ['Large areas of woodland burned.', 'Emergency crews worked around the clock.', 'Fire prevention remains a priority.']
      }
    ]
  },
  'north-america': {
    title: 'North America bushfire impacts',
    intro: 'North American fire seasons have become more destructive in recent years, with climate-driven heat, drought, and strong wind events creating highly dangerous conditions in forests and grasslands.',
    stats: [
      { value: '2023', label: 'Canada fire season' },
      { value: '18M', label: 'Hectares burned' },
      { value: 'Critical', label: 'Risk index' }
    ],
    cards: [
      {
        title: 'California wildfires',
        year: '2018-2020',
        impact: 'Repeated urban-wildland fire events caused destruction in communities near forests and hills.',
        details: ['Homes and infrastructure were lost.', 'Air quality warnings were frequent.', 'Fire suppression resources were stretched.']
      },
      {
        title: 'Canada wildfire crisis',
        year: '2023',
        impact: 'One of the most extensive fire seasons on record, with smoke affecting large populations.',
        details: ['Massive land loss across provinces.', 'Smoke reached major cities.', 'Long recovery and rehabilitation was required.']
      },
      {
        title: 'Western U.S. fire seasons',
        year: '2021',
        impact: 'Heat, fuel buildup, and wind events created severe bushfire conditions across the west.',
        details: ['Large emergency evacuations occurred.', 'Forest ecosystems were damaged.', 'Infrastructure and fire crews faced major strain.']
      },
      {
        title: 'North American grassland fires',
        year: '2024',
        impact: 'Dry prairie and grassland fires disrupted livestock and local communities.',
        details: ['Animal losses were significant.', 'Rural land was damaged.', 'Prevention work needs to intensify.']
      }
    ]
  },
  'south-america': {
    title: 'South America bushfire impacts',
    intro: 'South America has seen severe bushfire activity in tropical forests, grasslands, and dry woodland ecosystems. Fire damage in the Amazon and surrounding regions has had global significance.',
    stats: [
      { value: '2019', label: 'Amazon fire surge' },
      { value: '7M', label: 'Hectares affected' },
      { value: 'High', label: 'Biodiversity loss' }
    ],
    cards: [
      {
        title: 'Amazon rainforest fires',
        year: '2019',
        impact: 'The fires brought international concern as biodiversity and climate resilience were placed at risk.',
        details: ['Forest loss was severe.', 'Indigenous communities faced displacement risk.', 'Carbon release from fire damaged climate goals.']
      },
      {
        title: 'Bolivian forest fires',
        year: '2020',
        impact: 'Dry winters and land-use pressure fueled intense bushfires in vulnerable ecosystems.',
        details: ['Habitat loss was widespread.', 'Farmers and communities faced major disruption.', 'Relief and recovery costs rose sharply.']
      },
      {
        title: 'Chilean wildfire events',
        year: '2023',
        impact: 'Dry southern forests and heavy winds created major fire fronts that damaged communities and landscapes.',
        details: ['Homes and farmland were affected.', 'Water supply risks worsened.', 'Recovery took months.']
      },
      {
        title: 'Grassland and woodland fires',
        year: '2024',
        impact: 'Fire outbreaks in agricultural areas increased pressure on local restoration and emergency services.',
        details: ['Animal and crop losses were significant.', 'Public health risks grew in smoke-heavy periods.', 'Long-term rehabilitation remained necessary.']
      }
    ]
  },
  'australia-nz': {
    title: 'Australia and New Zealand bushfire impacts',
    intro: 'Australia has experienced some of the most intense bushfires in modern history, with New Zealand also facing seasonal fire risk, especially during dry and windy conditions.',
    stats: [
      { value: '2019', label: 'Black Summer begins' },
      { value: '18M', label: 'Hectares burned in Australia' },
      { value: 'Very high', label: 'Wildlife impact' }
    ],
    cards: [
      {
        title: 'Black Summer',
        year: '2019-2020',
        impact: 'One of Australia’s worst bushfire events, with devastating losses across the southeast.',
        details: ['Millions of hectares were burned.', 'Wildlife losses were catastrophic.', 'Thousands of homes were destroyed.']
      },
      {
        title: 'NSW and Victorian fires',
        year: '2020',
        impact: 'Fires threatened major towns and forced communities into emergency evacuation.',
        details: ['Air quality became hazardous.', 'Forest ecosystems were severely impacted.', 'Emergency response required national coordination.']
      },
      {
        title: 'Australian bushfire recovery',
        year: '2021-2022',
        impact: 'Long recovery efforts focused on rehabilitation, replanting, and community support.',
        details: ['Soil and water systems needed careful management.', 'Wildlife conservation efforts intensified.', 'Community resilience remained a central issue.']
      },
      {
        title: 'New Zealand fire season risk',
        year: '2022-2024',
        impact: 'Dry rural conditions created repeated fire risk in vulnerable landscapes.',
        details: ['Rural and grassland fires posed serious threats.', 'Emergency warnings were issued during dry spells.', 'Prevention and preparedness remained vital.']
      }
    ]
  },
  contribution: {
    title: 'How the public can help',
    intro: 'Prevention, community readiness, and rehabilitation all require collective effort. The most effective response combines emergency preparation, safer land management, and long-term climate resilience.',
    stats: [
      { value: '3 steps', label: 'Prepare communities' },
      { value: '1 goal', label: 'Safer future' },
      { value: '24/7', label: 'Preparedness mindset' }
    ],
    cards: [
      {
        title: 'Support emergency response',
        impact: 'Fund local crews, firefighting equipment, and air support for fast intervention.',
        details: ['Equip rural stations with essential tools.', 'Back community volunteer and rescue teams.', 'Improve access to emergency communications.']
      },
      {
        title: 'Rebuild habitats',
        impact: 'Replant native vegetation and restore fire-damaged ecosystems with long-term ecological planning.',
        details: ['Protect biodiversity corridors.', 'Restore shelter for wildlife.', 'Monitor soil and water quality.']
      },
      {
        title: 'Reduce future fire risk',
        impact: 'Address fuel buildup, safer land practices, and early-warning preparedness in at-risk communities.',
        details: ['Clear high-risk vegetation strategically.', 'Create emergency planning for schools and towns.', 'Encourage climate-smart land management.']
      }
    ]
  }
};

const pageContent = document.getElementById('page-content');
const navTabs = document.querySelectorAll('.nav-tab');
const tooltip = document.getElementById('tooltip');

function showTooltip(event, text) {
  tooltip.innerHTML = text;
  tooltip.classList.add('visible');
  tooltip.style.left = `${event.clientX}px`;
  tooltip.style.top = `${event.clientY - 10}px`;
}

function hideTooltip() {
  tooltip.classList.remove('visible');
}

function formatRegionLabel(region) {
  const labels = {
    home: 'Global overview',
    asia: 'Asia',
    europe: 'Europe',
    'north-america': 'North America',
    'south-america': 'South America',
    'australia-nz': 'Australia & NZ',
    contribution: 'Contribution'
  };
  return labels[region] || 'Region';
}

function renderHomePage() {
  const info = data.home;

  pageContent.innerHTML = `
    <section class="section-panel hero dashboard-panel" data-region="global">
      <div class="hero-copy">
        <h2>${info.title}</h2>
        <p>${info.intro}</p>
        <div class="hero-actions">
          <button class="primary-btn" data-tab="australia-nz">Explore the worst fires</button>
          <button class="secondary-btn" data-tab="contribution">See how to help</button>
        </div>

        <div class="stats-grid">
          ${info.stats.map((stat) => `
            <div class="stat-card">
              <span class="stat-number">${stat.value}</span>
              <span class="stat-label">${stat.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="map-panel">
        <div style="position: relative; width: 100%; height: 100%; min-height: 370px;">
          <img src="assets/world-map.svg" alt="World bushfire map" />
          ${info.hotspots.map((spot) => `
            <button
              class="world-hotspot"
              type="button"
              data-name="${spot.name}"
              data-detail="${spot.detail}"
              style="left:${spot.x}%; top:${spot.y}%;"
              aria-label="${spot.name}"
            ></button>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section-panel" style="margin-top: 24px;">
      <div class="section-header">
        <h3>Major fire hotspots</h3>
        <span class="muted">Past decade overview</span>
      </div>
      <div class="overview-card">
        <p class="muted">${info.highlight}</p>
      </div>
    </section>
  `;

  document.querySelectorAll('.world-hotspot').forEach((marker) => {
    marker.addEventListener('mouseenter', (event) => {
      showTooltip(event, `${marker.dataset.name}<br>${marker.dataset.detail}`);
    });
    marker.addEventListener('mousemove', (event) => {
      showTooltip(event, `${marker.dataset.name}<br>${marker.dataset.detail}`);
    });
    marker.addEventListener('mouseleave', hideTooltip);
  });

  document.querySelectorAll('[data-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;
      if (target) setActiveTab(target);
    });
  });
}

function renderRegionPage(region) {
  const section = data[region];
  if (!section) return;

  pageContent.innerHTML = `
    <section class="section-panel dashboard-panel" data-region="${region}">
      <div class="section-header">
        <h3>${section.title}</h3>
        <span class="muted">${formatRegionLabel(region)}</span>
      </div>

      <div class="overview-grid">
        <div class="overview-card">
          <p>${section.intro}</p>
        </div>

        <div class="stats-grid" style="margin-top: 0;">
          ${section.stats.map((stat) => `
            <div class="stat-card">
              <span class="stat-number">${stat.value}</span>
              <span class="stat-label">${stat.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="fire-grid">
        ${section.cards.map((card) => `
          <article class="fire-card">
            <h4>${card.title}</h4>
            <p class="fire-meta"><strong>Year:</strong> ${card.year}</p>
            <p class="fire-impact">${card.impact}</p>
            <ul class="list-row">
              ${card.details.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderContributionPage() {
  const section = data.contribution;
  pageContent.innerHTML = `
    <section class="section-panel dashboard-panel" data-region="contribution">
      <div class="section-header">
        <h3>${section.title}</h3>
        <span class="muted">Community action</span>
      </div>

      <div class="contribution-layout">
        <div class="form-card">
          <h4>Join the response effort</h4>
          <p>Support bushfire prevention, rehabilitation, and public safety in vulnerable communities.</p>

          <div class="form-grid">
            <div class="field">
              <label for="name">Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div class="field">
              <label for="location">Location</label>
              <input id="location" type="text" placeholder="City or region" />
            </div>
            <div class="field">
              <label for="interest">I want to support</label>
              <select id="interest">
                <option>Emergency response</option>
                <option>Wildlife rehabilitation</option>
                <option>Volunteer education</option>
                <option>Community fundraising</option>
              </select>
            </div>
            <div class="field">
              <label for="type">Support type</label>
              <select id="type">
                <option>Cash donation</option>
                <option>Supplies</option>
                <option>Volunteer time</option>
                <option>Awareness campaign</option>
              </select>
            </div>
          </div>

          <div class="field" style="margin-top: 16px;">
            <label for="message">How can you help?</label>
            <textarea id="message" placeholder="Share your ideas, time, or skills..."></textarea>
          </div>

          <button class="primary-btn" type="button">Submit contribution</button>
        </div>

        <div>
          <div class="info-grid" style="grid-template-columns: 1fr; margin-top: 0;">
            ${section.cards.map((card) => `
              <article class="tip-card">
                <h4>${card.title}</h4>
                <p>${card.impact}</p>
                <ul class="list-row">
                  ${card.details.map((item) => `<li>${item}</li>`).join('')}
                </ul>
              </article>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPage(tab) {
  if (tab === 'home') {
    renderHomePage();
    return;
  }

  if (tab === 'contribution') {
    renderContributionPage();
    return;
  }

  renderRegionPage(tab);
}

function setActiveTab(tab) {
  navTabs.forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tab);
  });

  renderPage(tab);
}

navTabs.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveTab(button.dataset.tab);
  });
});

setActiveTab('home');
