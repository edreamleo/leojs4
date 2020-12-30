<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="ekr.20201227091441.1"><vh>Startup</vh>
<v t="ekr.20201227091533.1"><vh>@settings</vh>
<v t="ekr.20201227091533.91"><vh>@@string initial-split-orientation = v</vh></v>
<v t="ekr.20201227091533.138"><vh>Importer settings</vh>
<v t="ekr.20201227091533.139"><vh>@data import-html-tags</vh></v>
<v t="ekr.20201227091533.140"><vh>@data import-xml-tags</vh></v>
</v>
<v t="ekr.20201227091533.153"><vh>@enabled-plugins</vh>
<v t="ekr.20201227091533.154"><vh>common plugins</vh></v>
<v t="ekr.20201227091533.155"><vh>previous tests</vh></v>
<v t="ekr.20201227091533.156"><vh>not enabled</vh></v>
</v>
<v t="ekr.20201228133448.1"><vh>@button backup</vh></v>
</v>
<v t="ekr.20201227091504.1"><vh> Recursive import script</vh></v>
</v>
<v t="ekr.20201228141200.1"><vh>Notes</vh>
<v t="ekr.20201228133917.1"><vh>vs-code version</vh></v>
</v>
<v t="ekr.20201228141205.1"><vh>** To do</vh></v>
<v t="ekr.20201227092108.1"><vh>@clean package.json</vh></v>
<v t="ekr.20201227092409.8"><vh>@clean extension.js</vh>
<v t="ekr.20201227092409.9"><vh>function activate</vh></v>
</v>
</vnodes>
<tnodes>
<t tx="ekr.20201227091441.1"></t>
<t tx="ekr.20201227091504.1">'''Recursively import all python files in a directory and clean the result.'''
@tabwidth -4 # For a better match.

dir_ = r'c:\vs-code-devel\leojs4'
g.cls()
c.recursiveImport(
    add_context=False,  # Override setting only if True/False
    add_file_context=False,  # Override setting only if True/False
    dir_=dir_,
    kind = '@clean', # '@auto', '@clean', '@nosent','@file',
    add_path = True,
    recursive = True,
    safe_at_file = False,
    theTypes = ['.js']
)
# c.expandAllSubheads()
# c.redraw()

</t>
<t tx="ekr.20201227091533.1" __bookmarks="7d7100580700000069735f6475706571014930300a732e">@language rest
@wrap

The @settings tree contains all active settings. 

Settings outside this tree have no effect.</t>
<t tx="ekr.20201227091533.138">Added on-popover to import-html-tags (for leovue)</t>
<t tx="ekr.20201227091533.139"># lowercase html tags, one per line.
# *** Add ons-popover tag for LeoVue.

a
abbr
acronym
address
applet
area
b
base
basefont
bdo
big
blockquote
body
br
button
caption
center
cite
code
col
colgroup
dd
del
dfn
dir
div
dl
dt
em
fieldset
font
form
frame
frameset
head
h1
h2
h3
h4
h5
h6
hr
html
i
iframe
img
input
ins
kbd
label
legend
li
link
map
menu
meta
noframes
noscript
object
ol
ons-popover
optgroup
option
p
param
pre
q
s
samp
script
select
small
span
strike
strong
style
sub
sup
table
tbody
td
textarea
tfoot
th
thead
title
tr
tt
u
ul
var</t>
<t tx="ekr.20201227091533.140"># lowercase xml tags, one per line.

html
body
head
div
table
</t>
<t tx="ekr.20201227091533.153"># Essential...
contextmenu.py
plugins_menu.py
mod_scripting.py

# Testing..

# My favorites...
line_numbering.py
nav_qt.py           # Forward and back buttons.
nodetags.py
quicksearch.py      # Nav pane. Binds Ctrl-Shift-F.
todo.py
viewrendered.py     # For jinja rendering.</t>
<t tx="ekr.20201227091533.154">backlink.py
bigdash.py
attrib_edit.py</t>
<t tx="ekr.20201227091533.155">free_layout.py      # Now loaded automatically. Disabled for testing bug 882824.

bookmarks.py
demo.py             # Essential to define key bindings.
livecode.py         # #1622.
mod_http.py
python_terminal.py
screen_capture.py
settings_finder.py  # #1669
valuespace.py
viewrendered2.py
viewrendered3.py
vim.py
xemacs.py
wikiview.py
</t>
<t tx="ekr.20201227091533.156"># Recommended plugins...

# backlink.py # Required by graphcanvas.
# bigdash.py
# bzr_qcommands.py
# graphcanvas.py # Requires backlink.py
# jinjarender.py
# leo_to_html.py
# projectwizard.py
# stickynotes.py

# Optional...

# leoremote.py
# mod_http.py
# quickMove.py # Creates warnings about inverses.
# systray.py
# valuespace.py

# Others...

# codewisecompleter.py
# ctagscompleter.py
# mod_autosave.py
# nodeActions.py
# spydershell.py
# vim.py
# xemacs.py
# xml_edit.py
</t>
<t tx="ekr.20201227091533.91"></t>
<t tx="ekr.20201227092108.1">@language json
{
    "name": "leojs",
    "description": "leojs, based on minimal hello world example",
    "version": "0.0.1",
    "publisher": "edreamleo",
    "repository": "",
    "engines": {
        "vscode": "^1.32.0"
    },
    "activationEvents": [
        "onCommand:extension.leojs"
    ],
    "main": "./extension.js",
    "contributes": {
        "commands": [
            {
                "command": "extension.leojs",
                "title": "leojs"
            }
        ]
    },
    "scripts": {},
    "devDependencies": {
        "@types/vscode": "^1.32.0"
    }
}
</t>
<t tx="ekr.20201227092409.8">@path c:/vs-code-devel/leojs4/
// EKR: Executed when user chooses leojs command.
const util = require('util');
const vscode = require('vscode');
const leo = require('./leo/leo.js');
// import { test } from "leo.mjs";
const info = vscode.window.showInformationMessage;
info("leo:" + util.inspect(leo));
// info('after requires');

@others

function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
    activate,
    deactivate
}

@language javascript
@tabwidth -4
</t>
<t tx="ekr.20201227092409.9">/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // extension.leojs must match "command" field in package.json
    let disposable = vscode.commands.registerCommand('extension.leojs', () =&gt; {
        leo.test(info);
    });
    context.subscriptions.push(disposable);
    info("activate done");
}
</t>
<t tx="ekr.20201228133448.1">c.backup_helper(sub_dir='leojs4')
</t>
<t tx="ekr.20201228133917.1">Version: 1.52.1 (user setup)
Commit: ea3859d4ba2f3e577a159bc91e3074c5d85c0523
Date: 2020-12-16T16:34:46.910Z
Electron: 9.3.5
Chrome: 83.0.4103.122
Node.js: 12.14.1
V8: 8.3.110.13-electron.0
OS: Windows_NT x64 10.0.19041</t>
<t tx="ekr.20201228141200.1"></t>
<t tx="ekr.20201228141205.1">@language rest
@wrap

*** Get import working, or convert everything to 'require'

@language python
</t>
</tnodes>
</leo_file>
