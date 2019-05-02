module.exports = {
  name: 'http-url',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/http/url',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
