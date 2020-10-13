const DOC_ALLURE_CONFIG = {
    CLEAN_REPORT_DIR: false,
    COPY_HISTORY: true,
    RESULT_DIR: '/allure-results',
    REPORT_DIR: '/allure-report',
    labels: {
      screenshotLabel: 'Screenshot',
      browserLabel: 'Browser',
      userAgentLabel: 'User Agent',
      allureStartMessage: 'Allure reporter started...',
      allureClosedMessage: 'Allure reporter closed...'
    }
  };
    
  module.exports = DOC_ALLURE_CONFIG;