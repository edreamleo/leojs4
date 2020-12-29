// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
import {test} from './leosrc/test.mjs';

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    console.log('===== leojs active =====');   // Executed ONCE!

    // extension.leojs must match "command" field in package.json
    let disposable = vscode.commands.registerCommand('extension.leojs', () => {
        console.log("Before")
        vscode.window.showInformationMessage('BEFORE');
        test()
        console.log("after")
        vscode.window.showInformationMessage('AFTER');
    });
    context.subscriptions.push(disposable);
}

function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
    activate,
    deactivate
}

