const paths = [
  '/',
  '/404',
  '/about',
  '/contact',
  '/cv',
  '/typography',
  '/lists',
  '/lists-places-ive-lived',
  '/lists-things-i-like',
  '/lists-things-i-dont-like',
  '/work',
  '/work-esdc-service-canada-labs',
  '/work-canada-vaccine-tracker',
  '/work-canada-holidays',
  '/work-cds-claim-tax-benefits',
  '/work-cds-covid-alert-portal',
  '/work-cds-rescheduler',
  '/work-govuk-performance-platform',
  '/work-govuk-digital-marketplace',
  '/work-groundhog-day',
  '/work-westernuscca',
  '/work-westernuscca-event-calendar',
  '/work-involvement-compass',
]

const getPathExportMap = () => {
  /*
    So
    '/': { page: '/' },
    '/about': { page: '/about' },
   */
  let normalPages = paths.reduce((o, key) => ({ ...o, [key]: { page: key } }), {})

  return { ...normalPages }
}

module.exports = {
  exportPathMap: getPathExportMap,
  images: {
    unoptimized: true,
  },
}
