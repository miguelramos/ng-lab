module.exports = {
  name: 'url',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/url',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
