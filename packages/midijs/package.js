Package.describe({
  name: 'custom:midijs',
  version: '0.0.0',
  describe: 'MIDI.js wrapped for Meteor',
});

Package.onUse(function (api) {
  'use strict';
  
  api.versionsFrom('METEOR@1.0');

  api.addFiles([
    'Base64Binary.js',
    'MIDI.js',
    
  ], 'client');
  
  api.addAssets([
    'electric_grand_piano-ogg.js',
    
  ], 'client');
  
  api.export('MIDI');
});
