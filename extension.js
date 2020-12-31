// EKR: Executed when user chooses leojs command.
const assert = require('assert').strict;
const util = require('util');
assert (util)
const vscode = require('vscode');
const leo = require('./leo/leo.js');
// import {leo} from '.leo/leo'
assert (leo);
const info = vscode.window.showInformationMessage;
// info("leo:" + util.inspect(leo));

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // extension.leojs must match "command" field in package.json
    let disposable = vscode.commands.registerCommand(
        'extension.leojs', () => {
            leo.test(info);
    });
    context.subscriptions.push(disposable);
    // info("activate done");
}

function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
    activate,
    deactivate
}

