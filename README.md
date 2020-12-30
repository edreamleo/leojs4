# leojs4

Prototype for using transcrypt in leoInteg.

## To do

- Play with directory structure.
  Will that help import statement?

  - Print vs-code vars.

## Debug console message

(node:20556) Warning: require() of ES modules is not supported.
require() of c:\vs-code-devel\leojs4\leo\leo.js from c:\vs-code-devel\leojs4\extension.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.

Instead rename leo.js to end in .cjs,
change the requiring code to use import(),
or remove "type": "module" from c:\vs-code-devel\leojs4\leo\package.json.