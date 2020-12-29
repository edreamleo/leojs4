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

export var trace = function () {
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
        if (py_name == '<module>') {
            var py_name = g.shortFileName ('c:/vs-code-devel/leojs4/leoGlobals.py');
        }
        if (py_name.endswith ('.pyc')) {
            var py_name = py_name.__getslice__ (0, -(1), 1);
        }
    }
    if (align != 0 && len (py_name) < abs (align)) {
        var pad = ' ' * (abs (align) - len (py_name));
        if (align > 0) {
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
    if (args && isString (args [0])) {
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

export var pr = function () {
    var args = tuple ([].slice.apply (arguments).slice (0));
    var d = dict ({'commas': false, 'newline': true, 'spaces': true});
    var d = doKeywordArgs (py_keys, d);
    var newline = d.py_get ('newline');
    var stdout = (sys.stdout && g.unitTesting ? sys.stdout : sys.__stdout__);
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
