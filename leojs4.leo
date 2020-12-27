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
</v>
</v>
<v t="ekr.20201227091504.1"><vh> Recursive import script</vh></v>
<v t="ekr.20201227091942.3"><vh>@clean dummyLeoApp.js</vh>
<v t="ekr.20201227091942.4"><vh>var test = function</vh></v>
</v>
<v t="ekr.20201227091942.5"><vh>@clean dummyLeoGlobals.js</vh>
<v t="ekr.20201227091942.6"><vh>export var trace = function</vh></v>
<v t="ekr.20201227091942.7"><vh>export var pr = function</vh></v>
</v>
<v t="ekr.20201227091942.8"><vh>@clean extension.js</vh>
<v t="ekr.20201227091942.9"><vh>function activate</vh></v>
</v>
<v t="ekr.20201227092108.1"><vh>@clean package.json</vh></v>
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
    recursive = False,
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
<t tx="ekr.20201227091942.3">@path c:/vs-code-devel/leojs4/
const g = require('./dummyLeoGlobals')
@others
@language javascript
@tabwidth -4
</t>
<t tx="ekr.20201227091942.4">var test = function () {
	g.trace ('=====');
};

module.exports = {
    test,
}
</t>
<t tx="ekr.20201227091942.5">@path c:/vs-code-devel/leojs4/
// Just g.trace. Culled from Transcrypt'ed from Python, 2020-12-26 11:09:55
var inspect = {};
var re = {};
var sys = {};
var time = {};
import {
	AssertionError, AttributeError, BaseException, DeprecationWarning, Exception,
	IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration,
	UserWarning, ValueError, Warning,
	__JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__,
	__envir__, __eq__, __floordiv__,
	__ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__,
	__i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__,
	__imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__,
	__jsUsePyNext__, __jsmod__,
	__k__, __kwargtrans__,
	__le__, __lshift__, __lt__,
	__matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__,
	__ne__, __neg__, __nest__, __or__,
	__pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__,
	__setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__,
	__t__, __terminal__, __truediv__,
	__withblock__, __xor__,
	abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy,
	deepcopy, delattr, dict, dir, divmod, enumerate,
	filter, float, getattr, hasattr, input, int,
	isinstance, issubclass, len, list, map, max, min, object, ord,
	pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof,
	range, repr, round, set, setattr, sorted, str, sum, tuple, zip
} from './src/org.transcrypt.__runtime__.js';
//// import {} from './time.js';
const time = require('./time')
//// import {leoGlobals as leo_g} from './leo.core.js';
const g = require('./leo.core.leoGlobals')
//// import {leoApp} from './leo.core.js';
//// import * as leo_g from './leo.core.leoGlobals.js';
//// import {leoCommands} from './leo.core.js';
const leoCommands = require('./leo.core')
//// import * as leoCommands from './leo.core.leoCommands.js';
//// import * as __module_time__ from './time.js';
//// __nest__ (time, '', __module_time__);
//// import * as __module_sys__ from './sys.js';
//// __nest__ (sys, '', __module_sys__);
//// //// import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
//// import * as __module_inspect__ from './inspect.js';
//// __nest__ (inspect, '', __module_inspect__);

var __name__ = 'leoGlobals';

@others
@language javascript
@tabwidth -4
</t>
<t tx="ekr.20201227091942.6">export var trace = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	var d = dict ({'align': 0, 'before': '', 'newline': true, 'caller_level': 1, 'noname': false});
	var d = doKeywordArgs (py_keys, d);
	var newline = d.py_get ('newline');
	var align = d.py_get ('align', 0);
	var caller_level = d.py_get ('caller_level', 1);
	var noname = d.py_get ('noname');
	if (noname) {
		var py_name = '';
	}
	else {
		try {
			var f1 = sys._getframe (caller_level);
			var code1 = f1.f_code;
			var py_name = code1.co_name;
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				var py_name = g.shortFileName ('c:/vs-code-devel/leojs4/leoGlobals.py');
			}
			else {
				throw __except0__;
			}
		}
		if (py_name == '&lt;module&gt;') {
			var py_name = g.shortFileName ('c:/vs-code-devel/leojs4/leoGlobals.py');
		}
		if (py_name.endswith ('.pyc')) {
			var py_name = py_name.__getslice__ (0, -(1), 1);
		}
	}
	if (align != 0 &amp;&amp; len (py_name) &lt; abs (align)) {
		var pad = ' ' * (abs (align) - len (py_name));
		if (align &gt; 0) {
			var py_name = py_name + pad;
		}
		else {
			var py_name = pad + py_name;
		}
	}
	var result = (py_name ? [py_name] : []);
	if (isinstance (args, tuple)) {
		var args = list (args);
	}
	if (args &amp;&amp; isString (args [0])) {
		var prefix = '';
		while (args [0].startswith ('\n')) {
			prefix += '\n';
			args [0] = args [0].__getslice__ (1, null, 1);
		}
	}
	else {
		var prefix = '';
	}
	for (var arg of args) {
		if (isString (arg)) {
			// pass;
		}
		else if (isBytes (arg)) {
			var arg = toUnicode (arg);
		}
		else {
			var arg = repr (arg);
		}
		if (result) {
			result.append (' ' + arg);
		}
		else {
			result.append (arg);
		}
	}
	var s = d.py_get ('before') + ''.join (result);
	if (prefix) {
		var prefix = prefix.__getslice__ (1, null, 1);
		pr (prefix);
	}
	pr (s, __kwargtrans__ ({newline: newline}));
};

</t>
<t tx="ekr.20201227091942.7">export var pr = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	var d = dict ({'commas': false, 'newline': true, 'spaces': true});
	var d = doKeywordArgs (py_keys, d);
	var newline = d.py_get ('newline');
	var stdout = (sys.stdout &amp;&amp; g.unitTesting ? sys.stdout : sys.__stdout__);
	if (!(stdout)) {
		return ;
	}
	if (sys.platform.lower ().startswith ('win')) {
		var encoding = 'ascii';
	}
	else if (getattr (stdout, 'encoding', null)) {
		var encoding = stdout.encoding;
	}
	else {
		var encoding = 'utf-8';
	}
	var s = translateArgs (args, d);
	var s = g.toUnicode (s, __kwargtrans__ ({encoding: encoding, reportErrors: false}));
	if (newline) {
		s += '\n';
	}
	try {
		stdout.write (s);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			// pass;
		}
		else {
			throw __except0__;
		}
	}
};
</t>
<t tx="ekr.20201227091942.8">@path c:/vs-code-devel/leojs4/
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const app = require('./dummyLeoApp')

// import {test} from './src/dummyLeoApp.js';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
@others
@language javascript
@tabwidth -4
</t>
<t tx="ekr.20201227091942.9">function activate(context) {
    // Executed ONCE!
    console.log('===== leojs active =====');

    // leojs must match "command" field in package.json
    let disposable = vscode.commands.registerCommand('extension.leojs', () =&gt; {
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
</t>
<t tx="ekr.20201227092108.1">@language json
{
    "type": "module",
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
</tnodes>
</leo_file>
