// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const app = require('./src/dummyLeoApp')

// import {test} from './src/dummyLeoApp.js';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Executed ONCE!
    console.log('===== leojs active =====');

    // leojs must match "command" field in package.json
    let disposable = vscode.commands.registerCommand('extension.leojs', () => {
        // ===== Put command code here.
        // import main from ".src/dummyLeoApp.js"
        console.log("Before")
        vscode.window.showInformationMessage('BEFORE');
        app.test()
        console.log("after")
        vscode.window.showInformationMessage('AFTER');
    });

    context.subscriptions.push(disposable);
}

// Called when the extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
    activate,
    deactivate
}
