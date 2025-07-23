export default {
  default: {
    require: [
      'features/step_definitions/world.js',
      'features/step_definitions/hooks.js',
      'features/step_definitions/**/*.js'
    ],
    format: [
      'progress',
      'json:reports/report.json'
    ],
    publishQuiet: true,
    worldParameters: {
      base_url: 'https://thinking-tester-contact-list.herokuapp.com'
    },
    timeout: 30000
  }
};
