const fs = require('fs');

module.exports.templateTags = [
  {
    name: 'file',
    displayName: 'File',
    description: 'read contents from a file',
    args: [
      {
        displayName: 'Choose File',
        type: 'file',
      },
      {
        displayName: 'Escape JSON String',
        type: 'boolean',
      },
    ],
    run(context, path, escape) {
      if (!path) {
        throw new Error('No file selected');
      }

      const content = fs.readFileSync(path, 'utf8');
      if (escape) {
        content = content.replaceAll('"', '\"');
        content = content.replaceAll('\n', '\\n');
      }

      return content;
    },
  },
];
