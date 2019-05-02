module.exports = {
  name: 'http-script',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/http/script',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
