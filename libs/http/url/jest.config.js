module.exports = {
  name: 'http-url',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/http/url',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
