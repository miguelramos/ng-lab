module.exports = {
  name: 'http-script',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/http/script',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
