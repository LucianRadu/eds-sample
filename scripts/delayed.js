// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';
import { getConfigValue } from './configs.js';
// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
async function loadYotpoReviews() {
  const apiKey = await getConfigValue('yotpo-api-key');

  const e = document.createElement('script');
  e.type = 'text/javascript';
  e.async = true;
  e.src = `//staticw2.yotpo.com/${apiKey}/widget.js`;
  document.head.appendChild(e);
}

loadYotpoReviews();
