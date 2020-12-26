// Transcrypt'ed from Python, 2020-12-26 11:09:55
var inspect = {};
var re = {};
var sys = {};
var time = {};
/// import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
// export var in_bridge = false;
// export var minimum_python_version = '3.6';
// export var isPython3 = sys.version_info >= tuple ([3, 0, 0]);
// // export var isMac = sys.platform.startswith ('darwin');
// export var isWindows = sys.platform.startswith ('win');
// export var globalDirectiveList = ['all', 'beautify', 'colorcache', 'code', 'color', 'comment', 'c', 'delims', 'doc', 'encoding', 'end_raw', 'first', 'header', 'ignore', 'killbeautify', 'killcolor', 'language', 'last', 'lineending', 'markup', 'nobeautify', 'nocolor-node', 'nocolor', 'noheader', 'nowrap', 'nopyflakes', 'nosearch', 'others', 'pagewidth', 'path', 'quiet', 'raw', 'root-code', 'root-doc', 'root', 'silent', 'tabwidth', 'terse', 'unit', 'verbose', 'wrap'];
// export var directives_pat = null;
// export var global_commands_dict = dict ({});
// export var cmd_instance_dict = dict ({'AbbrevCommandsClass': ['c', 'abbrevCommands'], 'AtFile': ['c', 'atFileCommands'], 'AutoCompleterClass': ['c', 'k', 'autoCompleter'], 'ChapterController': ['c', 'chapterController'], 'Commands': ['c'], 'ControlCommandsClass': ['c', 'controlCommands'], 'DebugCommandsClass': ['c', 'debugCommands'], 'EditCommandsClass': ['c', 'editCommands'], 'EditFileCommandsClass': ['c', 'editFileCommands'], 'FileCommands': ['c', 'fileCommands'], 'HelpCommandsClass': ['c', 'helpCommands'], 'KeyHandlerClass': ['c', 'k'], 'KeyHandlerCommandsClass': ['c', 'keyHandlerCommands'], 'KillBufferCommandsClass': ['c', 'killBufferCommands'], 'LeoApp': ['g', 'app'], 'LeoFind': ['c', 'findCommands'], 'LeoImportCommands': ['c', 'importCommands'], 'PrintingController': ['c', 'printingController'], 'RectangleCommandsClass': ['c', 'rectangleCommands'], 'RstCommands': ['c', 'rstCommands'], 'SpellCommandsClass': ['c', 'spellCommands'], 'Undoer': ['c', 'undoer'], 'VimCommands': ['c', 'vimCommands']});
// export var callback = function (func) {
var callback = function (func) {
	var callback_wrapper = function () {
		var args = tuple ([].slice.apply (arguments).slice (0));
		try {
			return func (...args, __kwargtrans__ (py_keys));
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				g.es_exception ();
			}
			else {
				throw __except0__;
			}
		}
	};
	return callback_wrapper;
};
export var check_cmd_instance_dict = function (c, g) {
	var d = cmd_instance_dict;
	for (var key of d) {
		var ivars = d.py_get (key);
		var obj = ivars2instance (c, g, ivars);
		if (obj) {
			var py_name = obj.__class__.__name__;
			if (py_name != key) {
				g.trace ('class mismatch', key, py_name);
			}
		}
	}
};
export var Command =  __class__ ('Command', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, py_name) {
		self.py_name = py_name;
	});},
	get __call__ () {return __get__ (this, function (self, func) {
		global_commands_dict [self.py_name] = func;
		if (app) {
			for (var c of app.commanders ()) {
				c.k.registerCommand (self.py_name, func);
			}
		}
		func.__func_name__ = func.__name__;
		func.is_command = true;
		func.command_name = self.py_name;
		return func;
	});}
});
export var command = Command;
export var command_alias = function (alias, func) {
	funcToMethod (func, leoCommands.Commands, alias);
};
export var CommanderCommand =  __class__ ('CommanderCommand', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, py_name) {
		self.py_name = py_name;
	});},
	get __call__ () {return __get__ (this, function (self, func) {
		var commander_command_wrapper = function (event) {
			var c = event.py_get ('c');
			var method = getattr (c, func.__name__, null);
			method (__kwargtrans__ ({event: event}));
		};
		commander_command_wrapper.__func_name__ = func.__name__;
		commander_command_wrapper.__name__ = self.py_name;
		commander_command_wrapper.__doc__ = func.__doc__;
		global_commands_dict [self.py_name] = commander_command_wrapper;
		if (app) {
			funcToMethod (func, leoCommands.Commands);
			for (var c of app.commanders ()) {
				c.k.registerCommand (self.py_name, func);
			}
		}
		func.is_command = true;
		func.command_name = self.py_name;
		return func;
	});}
});
export var commander_command = CommanderCommand;
export var ivars2instance = function (c, g, ivars) {
	if (!(ivars)) {
		g.trace ('can not happen: no ivars');
		return null;
	}
	var ivar = ivars [0];
	if (!__in__ (ivar, tuple (['c', 'g']))) {
		g.trace ('can not happen: unknown base', ivar);
		return null;
	}
	var obj = (ivar == 'c' ? c : g);
	for (var ivar of ivars.__getslice__ (1, null, 1)) {
		var obj = getattr (obj, ivar, null);
		if (!(obj)) {
			g.trace ('can not happen: unknown attribute', obj, ivar, ivars);
			break;
		}
	}
	return obj;
};
export var new_cmd_decorator = function (py_name, ivars) {
	var _decorator = function (func) {
		var new_cmd_wrapper = function (event) {
			var c = event.c;
			var self = g.ivars2instance (c, g, ivars);
			try {
				func (self, __kwargtrans__ ({event: event}));
			}
			catch (__except0__) {
				if (isinstance (__except0__, Exception)) {
					g.es_exception ();
				}
				else {
					throw __except0__;
				}
			}
		};
		new_cmd_wrapper.__func_name__ = func.__name__;
		new_cmd_wrapper.__name__ = py_name;
		new_cmd_wrapper.__doc__ = func.__doc__;
		global_commands_dict [py_name] = new_cmd_wrapper;
		return func;
	};
	return _decorator;
};
export var g_language_pat = re.compile ('^@language\\s+(\\w+)+', re.MULTILINE);
export var g_is_directive_pattern = re.compile ('^\\s*@([\\w-]+)\\s*');
export var g_noweb_root = re.compile ((((('<' + '<') + '*') + '>') + '>') + '=', re.MULTILINE);
export var g_pos_pattern = re.compile (':(\\d+),?(\\d+)?,?([-\\d]+)?,?(\\d+)?$');
export var g_tabwidth_pat = re.compile ('(^@tabwidth)', re.MULTILINE);
export var tree_popup_handlers = [];
export var user_dict = dict ({});
export var app = null;
export var inScript = false;
export var unitTesting = false;
export var standard_timestamp = function () {
	return time.strftime ('%Y%m%d-%H%M%S');
};
export var get_backup_path = function (sub_directory) {
};
export var BindingInfo =  __class__ ('BindingInfo', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, kind, commandName, func, nextMode, pane, stroke) {
		if (typeof commandName == 'undefined' || (commandName != null && commandName.hasOwnProperty ("__kwargtrans__"))) {;
			var commandName = '';
		};
		if (typeof func == 'undefined' || (func != null && func.hasOwnProperty ("__kwargtrans__"))) {;
			var func = null;
		};
		if (typeof nextMode == 'undefined' || (nextMode != null && nextMode.hasOwnProperty ("__kwargtrans__"))) {;
			var nextMode = null;
		};
		if (typeof pane == 'undefined' || (pane != null && pane.hasOwnProperty ("__kwargtrans__"))) {;
			var pane = null;
		};
		if (typeof stroke == 'undefined' || (stroke != null && stroke.hasOwnProperty ("__kwargtrans__"))) {;
			var stroke = null;
		};
		if (!(g.isStrokeOrNone (stroke))) {
			g.trace ('***** (BindingInfo) oops', repr (stroke));
		}
		self.kind = kind;
		self.commandName = commandName;
		self.func = func;
		self.nextMode = nextMode;
		self.pane = pane;
		self.stroke = stroke;
	});},
	get __hash__ () {return __get__ (this, function (self) {
		return (self.stroke ? self.stroke.__hash__ () : 0);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.dump ();
	});},
	__str__: __repr__,
	get dump () {return __get__ (this, function (self) {
		var result = ['BindingInfo {}'.format (self.kind)];
		var table = tuple (['commandName', 'func', 'nextMode', 'pane', 'stroke']);
		for (var ivar of table) {
			if (hasattr (self, ivar)) {
				var val = getattr (self, ivar);
				if (!__in__ (val, tuple ([null, 'none', 'None', '']))) {
					if (ivar == 'func') {
						var val = val.__name__;
					}
					var s = '{}: {}'.format (ivar, val);
					result.append (s);
				}
			}
		}
		return __mod__ ('[%s]'.format (), ' '.join (result).strip ());
	});},
	get isModeBinding () {return __get__ (this, function (self) {
		return self.kind.startswith ('*mode');
	});}
});
export var isBindingInfo = function (obj) {
	return isinstance (obj, BindingInfo);
};
export var Bunch =  __class__ ('Bunch', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.__dict__.py_update (keywords);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.toString ();
	});},
	get ivars () {return __get__ (this, function (self) {
		return sorted (self.__dict__);
	});},
	get py_keys () {return __get__ (this, function (self) {
		return sorted (self.__dict__);
	});},
	get toString () {return __get__ (this, function (self) {
		var tag = self.__dict__.py_get ('tag');
		var entries = (function () {
			var __accu0__ = [];
			for (var key of self.ivars ()) {
				if (key != 'tag') {
					__accu0__.append ('{}: {}'.format (key, str (self.__dict__.py_get (key)) || repr (self.__dict__.py_get (key))));
				}
			}
			return __accu0__;
		}) ();
		var result = ['g.Bunch({})'.format (tag || '')];
		result.extend (entries);
		return '\n    '.join (result) + '\n';
	});},
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		return operator.setitem (self.__dict__, key, value);
	});},
	get __getitem__ () {return __get__ (this, function (self, key) {
		return operator.getitem (self.__dict__, key);
	});},
	get py_get () {return __get__ (this, function (self, key, theDefault) {
		if (typeof theDefault == 'undefined' || (theDefault != null && theDefault.hasOwnProperty ("__kwargtrans__"))) {;
			var theDefault = null;
		};
		return self.__dict__.py_get (key, theDefault);
	});},
	get __contains__ () {return __get__ (this, function (self, key) {
		return __in__ (key, self.__dict__);
	});}
});
export var bunch = Bunch;
export var EmergencyDialog =  __class__ ('EmergencyDialog', [object], {
	__module__: __name__,
});
export var FileLikeObject =  __class__ ('FileLikeObject', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, encoding, fromString) {
		if (typeof encoding == 'undefined' || (encoding != null && encoding.hasOwnProperty ("__kwargtrans__"))) {;
			var encoding = 'utf-8';
		};
		if (typeof fromString == 'undefined' || (fromString != null && fromString.hasOwnProperty ("__kwargtrans__"))) {;
			var fromString = null;
		};
		self.encoding = encoding || 'utf-8';
		if (fromString) {
			self.list = g.splitLines (fromString);
		}
		else {
			self.list = [];
		}
		self.ptr = 0;
	});},
	get py_clear () {return __get__ (this, function (self) {
		self.list = [];
	});},
	get close () {return __get__ (this, function (self) {
		// pass;
	});},
	get flush () {return __get__ (this, function (self) {
		// pass;
	});},
	get py_get () {return __get__ (this, function (self) {
		return ''.join (self.list);
	});},
	getvalue: py_get,
	read: py_get,
	get readline () {return __get__ (this, function (self) {
		if (self.ptr < len (self.list)) {
			var line = self.list [self.ptr];
			self.ptr++;
			return line;
		}
		return '';
	});},
	get write () {return __get__ (this, function (self, s) {
		if (s) {
			if (isinstance (s, bytes)) {
				var s = g.toUnicode (s, self.encoding);
			}
			self.list.append (s);
		}
	});}
});
export var fileLikeObject = FileLikeObject;
export var GeneralSetting =  __class__ ('GeneralSetting', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, kind, encoding, ivar, setting, val, path, tag, unl) {
		if (typeof encoding == 'undefined' || (encoding != null && encoding.hasOwnProperty ("__kwargtrans__"))) {;
			var encoding = null;
		};
		if (typeof ivar == 'undefined' || (ivar != null && ivar.hasOwnProperty ("__kwargtrans__"))) {;
			var ivar = null;
		};
		if (typeof setting == 'undefined' || (setting != null && setting.hasOwnProperty ("__kwargtrans__"))) {;
			var setting = null;
		};
		if (typeof val == 'undefined' || (val != null && val.hasOwnProperty ("__kwargtrans__"))) {;
			var val = null;
		};
		if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
			var path = null;
		};
		if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
			var tag = 'setting';
		};
		if (typeof unl == 'undefined' || (unl != null && unl.hasOwnProperty ("__kwargtrans__"))) {;
			var unl = null;
		};
		self.encoding = encoding;
		self.ivar = ivar;
		self.kind = kind;
		self.path = path;
		self.unl = unl;
		self.setting = setting;
		self.val = val;
		self.tag = tag;
	});},
	get __repr__ () {return __get__ (this, function (self) {
		var val = str (self.val).py_replace ('\n', ' ');
		return 'GS: {} {} = {}'.format (g.shortFileName (self.path), self.kind, g.truncate (val, 50));
	});},
	dump: __repr__,
	__str__: __repr__
});
export var KeyStroke =  __class__ ('KeyStroke', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, binding) {
		if (binding) {
			self.s = self.finalize_binding (binding);
		}
		else {
			self.s = null;
		}
	});},
	get __eq__ () {return __get__ (this, function (self, other) {
		if (!(other)) {
			return false;
		}
		if (hasattr (other, 's')) {
			return self.s == other.s;
		}
		return self.s == other;
	});},
	get __lt__ () {return __get__ (this, function (self, other) {
		if (!(other)) {
			return false;
		}
		if (hasattr (other, 's')) {
			return self.s < other.s;
		}
		return self.s < other;
	});},
	get __le__ () {return __get__ (this, function (self, other) {
		return self.__lt__ (other) || self.__eq__ (other);
	});},
	get __ne__ () {return __get__ (this, function (self, other) {
		return !(self.__eq__ (other));
	});},
	get __gt__ () {return __get__ (this, function (self, other) {
		return !(self.__lt__ (other)) && !(self.__eq__ (other));
	});},
	get __ge__ () {return __get__ (this, function (self, other) {
		return !(self.__lt__ (other));
	});},
	get __hash__ () {return __get__ (this, function (self) {
		return (self.s ? self.s.__hash__ () : 0);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return '<KeyStroke: {}>'.format (repr (self.s));
	});},
	get __str__ () {return __get__ (this, function (self) {
		return repr (self.s);
	});},
	get dump () {return __get__ (this, function (self) {
		for (var i = 0; i < 128; i++) {
			var s = chr (i);
			var stroke = g.KeyStroke (s);
			if (stroke.s != s) {
				print ('{} {} {}'.format (i, s, stroke.s));
			}
		}
		for (var ch of tuple (['backspace', 'linefeed', 'return', 'tab'])) {
			var stroke = g.KeyStroke (ch);
			print ('{} {} {}'.format ('', ch, stroke.s));
		}
	});},
	get finalize_binding () {return __get__ (this, function (self, binding) {
		var trace = false && __in__ ('keys', g.app.debug);
		self.mods = self.find_mods (binding);
		var s = self.strip_mods (binding);
		var s = self.finalize_char (s);
		var mods = ''.join ((function () {
			var __accu0__ = [];
			for (var z of self.mods) {
				__accu0__.append ('{}+'.format (z.capitalize ()));
			}
			return __accu0__;
		}) ());
		if (trace && __in__ ('meta', self.mods)) {
			g.trace ('{}:{} ==> {}'.format (binding, self.mods, mods + s));
		}
		return mods + s;
	});},
	get finalize_char () {return __get__ (this, function (self, s) {
		var shift_d = dict ({'bksp': 'BackSpace', 'backspace': 'BackSpace', 'backtab': 'Tab', 'linefeed': 'Return', '\r': 'Return', 'return': 'Return', 'tab': 'Tab'});
		if (self.mods && __in__ (s.lower (), shift_d)) {
			return shift_d.py_get (s.lower ());
		}
		var translate_d = dict ({'bksp': 'BackSpace', 'backspace': 'BackSpace', 'backtab': 'Tab', 'linefeed': '\n', '\r': '\n', 'return': '\n', 'tab': 'Tab', 'delete': 'Delete', 'down': 'Down', 'end': 'End', 'enter': 'Enter', 'escape': 'Escape', 'home': 'Home', 'insert': 'Insert', 'left': 'Left', 'next': 'Next', 'prior': 'Prior', 'right': 'Right', 'up': 'Up', 'del': 'Delete', 'dnarrow': 'Down', 'esc': 'Escape', 'ins': 'Insert', 'ltarrow': 'Left', 'pagedn': 'Next', 'pageup': 'Prior', 'pgdown': 'Next', 'pgup': 'Prior', 'rtarrow': 'Right', 'uparrow': 'Up', 'ampersand': '&', 'asciicircum': '^', 'asciitilde': '~', 'asterisk': '*', 'at': '@', 'backslash': '\\', 'bar': '|', 'braceleft': '{', 'braceright': '}', 'bracketleft': '[', 'bracketright': ']', 'colon': ':', 'comma': ',', 'dollar': '$', 'equal': '=', 'exclam': '!', 'greater': '>', 'less': '<', 'minus': '-', 'numbersign': '#', 'quotedbl': '"', 'quoteright': "'", 'parenleft': '(', 'parenright': ')', 'percent': '%', 'period': '.', 'plus': '+', 'question': '?', 'quoteleft': '`', 'semicolon': ';', 'slash': '/', 'space': ' ', 'underscore': '_'});
		if (__in__ (s, tuple ([null, 'none', 'None']))) {
			return 'None';
		}
		if (__in__ (s.lower (), translate_d)) {
			var s = translate_d.py_get (s.lower ());
			return self.strip_shift (s);
		}
		if (len (s) > 1 && s.find (' ') > -(1)) {
			return '';
		}
		if (s.isalpha ()) {
			if (len (s) == 1) {
				if (__in__ ('shift', self.mods)) {
					if (len (self.mods) == 1) {
						self.mods.remove ('shift');
						var s = s.upper ();
					}
					else {
						var s = s.lower ();
					}
				}
				else if (self.mods) {
					var s = s.lower ();
				}
			}
			else {
				var s = '';
				if (0) {
					if (g.app.gui) {
						if (__in__ (s.capitalize (), g.app.gui.specialChars)) {
							var s = s.capitalize ();
						}
					}
				}
			}
			return s;
		}
		return self.strip_shift (s);
	});},
	get strip_shift () {return __get__ (this, function (self, s) {
		var shift_d = dict ({'`': '~', '~': '~', '1': '!', '!': '!', '2': '@', '@': '@', '3': '#', '#': '#', '4': '$', '$': '$', '5': '%', '%': '%', '6': '^', '^': '^', '7': '&', '&': '&', '8': '*', '*': '*', '9': '(', '(': '(', '0': ')', ')': ')', '-': '_', '_': '_', '=': '+', '+': '+', '[': '{', '{': '{', ']': '}', '}': '}', '\\': '|', '|': '|', ';': ':', ':': ':', "'": '"', '"': '"', '.': '<', '<': '<', ',': '>', '>': '>', '//': '?', '?': '?'});
		if (__in__ ('shift', self.mods) && __in__ (s, shift_d)) {
			self.mods.remove ('shift');
			var s = shift_d.py_get (s);
		}
		return s;
	});},
	get find () {return __get__ (this, function (self, pattern) {
		return self.s.find (pattern);
	});},
	get lower () {return __get__ (this, function (self) {
		return self.s.lower ();
	});},
	get startswith () {return __get__ (this, function (self, s) {
		return self.s.startswith (s);
	});},
	get find_mods () {return __get__ (this, function (self, s) {
		var s = s.lower ();
		var table = tuple ([['alt'], ['command', 'cmd'], ['ctrl', 'control'], ['meta'], ['shift', 'shft'], ['keypad', 'key_pad', 'numpad', 'num_pad']]);
		var result = [];
		for (var aList of table) {
			var kind = aList [0];
			for (var mod of aList) {
				for (var suffix of '+-') {
					if (s.find (mod + suffix) > -(1)) {
						var s = s.py_replace (mod + suffix, '');
						result.append (kind);
						break;
					}
				}
			}
		}
		return result;
	});},
	get isAltCtrl () {return __get__ (this, function (self) {
		var mods = self.find_mods (self.s);
		return __in__ ('alt', mods) && __in__ ('ctrl', mods);
	});},
	get isFKey () {return __get__ (this, function (self) {
		return __in__ (self.s, g.app.gui.FKeys);
	});},
	get isPlainKey () {return __get__ (this, function (self) {
		var s = self.s;
		if (__in__ (s, g.app.gui.ignoreChars)) {
			return false;
		}
		if (s.find ('Keypad+') > -(1)) {
			return false;
		}
		if (self.find_mods (s) || self.isFKey ()) {
			return false;
		}
		if (__in__ (s, g.app.gui.specialChars)) {
			return false;
		}
		if (s == 'BackSpace') {
			return false;
		}
		return true;
	});},
	get isNumPadKey () {return __get__ (this, function (self) {
		return self.s.find ('Keypad+') > -(1);
	});},
	get isPlainNumPad () {return __get__ (this, function (self) {
		return self.isNumPadKey () && len (self.s.py_replace ('Keypad+', '')) == 1;
	});},
	get removeNumPadModifier () {return __get__ (this, function (self) {
		self.s = self.s.py_replace ('Keypad+', '');
	});},
	get prettyPrint () {return __get__ (this, function (self) {
		var s = self.s;
		if (!(s)) {
			return '<None>';
		}
		var d = dict ({' ': 'Space', '\t': 'Tab', '\n': 'Return', '\r': 'LineFeed'});
		var ch = s [-(1)];
		return s.__getslice__ (0, -(1), 1) + d.py_get (ch, ch);
	});},
	get strip_mods () {return __get__ (this, function (self, s) {
		var table = tuple (['alt', 'cmd', 'command', 'control', 'ctrl', 'keypad', 'key_pad', 'meta', 'shift', 'shft']);
		for (var mod of table) {
			for (var suffix of '+-') {
				var target = mod + suffix;
				var i = s.lower ().find (target);
				if (i > -(1)) {
					var s = s.__getslice__ (0, i, 1) + s.__getslice__ (i + len (target), null, 1);
					break;
				}
			}
		}
		return s;
	});},
	get toGuiChar () {return __get__ (this, function (self) {
		var s = self.s.lower ();
		if (__in__ (s, tuple (['\n', 'return']))) {
			var s = '\n';
		}
		else if (__in__ (s, tuple (['\t', 'tab']))) {
			var s = '\t';
		}
		else if (__in__ (s, tuple (['\x08', 'backspace']))) {
			var s = '\x08';
		}
		else if (__in__ (s, tuple (['.', 'period']))) {
			var s = '.';
		}
		return s;
	});},
	get toInsertableChar () {return __get__ (this, function (self) {
		var s = self.s;
		if (!(s) || self.find_mods (s)) {
			return '';
		}
		var d = dict ({'BackSpace': '\x08', 'LineFeed': '\n', 'Return': '\n', 'Tab': '\t'});
		if (__in__ (s, d)) {
			return d.py_get (s);
		}
		return (len (s) == 1 ? s : '');
	});}
});
export var isStroke = function (obj) {
	return isinstance (obj, KeyStroke);
};
export var isStrokeOrNone = function (obj) {
	return obj === null || isinstance (obj, KeyStroke);
};
export var MatchBrackets =  __class__ ('MatchBrackets', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, c, p, language) {
		self.c = c;
		self.p = p.copy ();
		self.language = language;
		self.close_brackets = ')]}>';
		self.open_brackets = '([{<';
		self.brackets = self.open_brackets + self.close_brackets;
		self.matching_brackets = self.close_brackets + self.open_brackets;
		var __left0__ = g.set_delims_from_language (language);
		var d1 = __left0__ [0];
		var d2 = __left0__ [1];
		var d3 = __left0__ [2];
		var __left0__ = tuple ([d1, d2, d3]);
		self.single_comment = __left0__ [0];
		self.start_comment = __left0__ [1];
		self.end_comment = __left0__ [2];
		c.user_dict.py_setdefault ('_match_brackets', dict ({'count': 0, 'range': tuple ([0, 0])}));
	});},
	get is_regex () {return __get__ (this, function (self, s, i) {
		if (__in__ (self.language, tuple (['javascript', 'perl']))) {
			var offset = (self.forward ? 1 : -(1));
			i += offset;
			while ((0 <= i && i < len (s)) && s [i] != '\n') {
				if (s [i] == '/') {
					return true;
				}
				i += offset;
			}
			return false;
		}
		return false;
	});},
	get scan_regex () {return __get__ (this, function (self, s, i) {
		var offset = (self.forward ? 1 : -(1));
		var i1 = i;
		i += offset;
		var found = false;
		while ((0 <= i && i < len (s)) && s [i] != '\n') {
			var ch = s [i];
			var i2 = i - 1;
			i += offset;
			if (ch == '/') {
				var n = 0;
				while ((0 <= i2 && i2 < len (s)) && s [i2] == '\\') {
					n++;
					i2--;
				}
				if (__mod__ (n, 2) == 0) {
					if (self.language == 'perl' && found === null) {
						var found = i;
					}
					else {
						var found = i;
						break;
					}
				}
			}
		}
		if (found === null) {
			self.oops ('unmatched regex delim');
			return i1 + offset;
		}
		return found;
	});},
	get scan_string () {return __get__ (this, function (self, s, i) {
		var delim = s [i];
		var offset = (self.forward ? 1 : -(1));
		i += offset;
		while ((0 <= i && i < len (s))) {
			var ch = s [i];
			var i2 = i - 1;
			i += offset;
			if (ch == delim) {
				var n = 0;
				while ((0 <= i2 && i2 < len (s)) && s [i2] == '\\') {
					n++;
					i2--;
				}
				if (__mod__ (n, 2) == 0) {
					return i;
				}
			}
		}
		return i + offset;
	});},
	get expand_range () {return __get__ (this, function (self, s, left, right, max_right, expand) {
		if (typeof expand == 'undefined' || (expand != null && expand.hasOwnProperty ("__kwargtrans__"))) {;
			var expand = false;
		};
		var expanded = false;
		var orig_left = left;
		var orig_right = right;
		while ((!__in__ (s [left], self.brackets) || expand && !(expanded)) && (!__in__ (s [right], self.brackets) || expand && !(expanded)) && (left > 0 || right < max_right)) {
			var expanded = false;
			if (left > 0) {
				left--;
				if (__in__ (s [left], self.brackets)) {
					var other = self.find_matching_bracket (s [left], s, left);
					if (other !== null && other >= orig_right) {
						var expanded = 'left';
					}
				}
			}
			if (right < max_right) {
				right++;
				if (__in__ (s [right], self.brackets)) {
					var other = self.find_matching_bracket (s [right], s, right);
					if (other !== null && other <= orig_left) {
						var expanded = 'right';
					}
				}
			}
		}
		if (__in__ (s [left], self.brackets) && (!(expand) || expanded == 'left')) {
			return tuple ([left, right, s [left], left]);
		}
		if (__in__ (s [right], self.brackets) && (!(expand) || expanded == 'right')) {
			return tuple ([left, right, s [right], right]);
		}
		return tuple ([null, null, null, null]);
	});},
	get find_matching_bracket () {return __get__ (this, function (self, ch1, s, i) {
		self.forward = __in__ (ch1, self.open_brackets);
		var __break0__ = false;
		for (var n = 0; n < len (self.brackets); n++) {
			if (ch1 == self.brackets [n]) {
				var target = self.matching_brackets [n];
				__break0__ = true;
				break;
			}
		}
		if (!__break0__) {
			return null;
		}
		var f = (self.forward ? self.scan : self.scan_back);
		return f (ch1, target, s, i);
	});},
	get scan () {return __get__ (this, function (self, ch1, target, s, i) {
		var level = 0;
		while ((0 <= i && i < len (s))) {
			var progress = i;
			var ch = s [i];
			if (__in__ (ch, '"\'')) {
				var i = self.scan_string (s, i);
			}
			else if (self.starts_comment (s, i)) {
				var i = self.scan_comment (s, i);
			}
			else if (ch == '/' && self.is_regex (s, i)) {
				var i = self.scan_regex (s, i);
			}
			else if (ch == ch1) {
				level++;
				i++;
			}
			else if (ch == target) {
				level--;
				if (level <= 0) {
					return i;
				}
				i++;
			}
			else {
				i++;
			}
		}
		return null;
	});},
	get scan_comment () {return __get__ (this, function (self, s, i) {
		var i1 = i;
		var start = (self.forward ? self.start_comment : self.end_comment);
		var end = (self.forward ? self.end_comment : self.start_comment);
		var offset = (self.forward ? 1 : -(1));
		if (g.match (s, i, start)) {
			if (!(self.forward)) {
				i1 += len (end);
			}
			i += offset;
			while ((0 <= i && i < len (s))) {
				if (g.match (s, i, end)) {
					var i = (self.forward ? i + len (end) : i - 1);
					return i;
				}
				i += offset;
			}
			self.oops ('unmatched multiline comment');
		}
		else if (self.forward) {
			var target = '\n';
			while ((0 <= i && i < len (s))) {
				if (s [i] == '\n') {
					i++;
					return i;
				}
				i++;
			}
		}
		else {
			var target = self.single_comment;
			var found = null;
			i--;
			while ((0 <= i && i < len (s)) && s [i] != '\n') {
				if (g.match (s, i, target)) {
					var found = i;
				}
				i--;
			}
			if (found === null) {
				self.oops ('can not happen: unterminated single-line comment');
				var found = 0;
			}
			return found;
		}
		return i;
	});},
	get starts_comment () {return __get__ (this, function (self, s, i) {
		if (self.forward) {
			if (self.single_comment && g.match (s, i, self.single_comment)) {
				return true;
			}
			return self.start_comment && self.end_comment && g.match (s, i, self.start_comment);
		}
		if (s [i] == '\n') {
			if (self.single_comment) {
				i--;
				while (i >= 0 && s [i] != '\n') {
					if (g.match (s, i, self.single_comment)) {
						return true;
					}
					i--;
				}
			}
			return false;
		}
		return self.start_comment && self.end_comment && g.match (s, i, self.end_comment);
	});},
	get scan_back () {return __get__ (this, function (self, ch1, target, s, i) {
		var level = 0;
		while (i >= 0) {
			var progress = i;
			var ch = s [i];
			if (self.ends_comment (s, i)) {
				var i = self.back_scan_comment (s, i);
			}
			else if (__in__ (ch, '"\'')) {
				var i = self.scan_string (s, i);
			}
			else if (ch == '/' && self.is_regex (s, i)) {
				var i = self.scan_regex (s, i);
			}
			else if (ch == ch1) {
				level++;
				i--;
			}
			else if (ch == target) {
				level--;
				if (level <= 0) {
					return i;
				}
				i--;
			}
			else {
				i--;
			}
		}
		return null;
	});},
	get back_scan_comment () {return __get__ (this, function (self, s, i) {
		var i1 = i;
		if (g.match (s, i, self.end_comment)) {
			i1 += len (self.end_comment);
			i--;
			while (i >= 0) {
				if (g.match (s, i, self.start_comment)) {
					i--;
					return i;
				}
				i--;
			}
			self.oops ('unmatched multiline comment');
			return i;
		}
		var found = null;
		i--;
		while (i >= 0 && s [i] != '\n') {
			if (g.match (s, i, self.single_comment)) {
				var found = i - 1;
			}
			i--;
		}
		if (found === null) {
			self.oops ('can not happen: unterminated single-line comment');
			var found = 0;
		}
		return found;
	});},
	get ends_comment () {return __get__ (this, function (self, s, i) {
		if (s [i] == '\n') {
			if (self.single_comment) {
				var quote = null;
				i--;
				while (i >= 0 && s [i] != '\n') {
					var progress = i;
					if (quote && s [i] == quote) {
						var quote = null;
						i--;
					}
					else if (__in__ (s [i], '"\'')) {
						if (!(quote)) {
							var quote = s [i];
						}
						i--;
					}
					else if (g.match (s, i, self.single_comment)) {
						if (quote) {
							while (i >= 0 && s [i] != 'n') {
								if (s [i] == quote) {
									return false;
								}
								i--;
							}
						}
						return true;
					}
					else {
						i--;
					}
				}
			}
			return false;
		}
		return self.start_comment && self.end_comment && g.match (s, i, self.end_comment);
	});},
	get oops () {return __get__ (this, function (self, s) {
		g.es (s, __kwargtrans__ ({color: 'red'}));
	});},
	get run () {return __get__ (this, function (self) {
		var w = self.c.frame.body.wrapper;
		var s = w.getAllText ();
		var _mb = self.c.user_dict ['_match_brackets'];
		var sel_range = w.getSelectionRange ();
		if (!(w.hasSelection ())) {
			_mb ['count'] = 1;
		}
		if (_mb ['range'] == sel_range && _mb ['count'] == 1) {
			_mb ['count']++;
			var insert = (w.getInsertPoint () == sel_range [0] ? 1 : 0);
			w.setSelectionRange (sel_range [0], sel_range [1], __kwargtrans__ ({insert: sel_range [insert]}));
			return ;
		}
		var max_right = len (s) - 1;
		var __left0__ = min (max_right, w.getInsertPoint ());
		var left = __left0__;
		var right = __left0__;
		var __left0__ = self.expand_range (s, left, right, max_right);
		var left = __left0__ [0];
		var right = __left0__ [1];
		var ch = __left0__ [2];
		var index = __left0__ [3];
		if (left === null) {
			g.es ('Bracket not found');
			return ;
		}
		var index2 = self.find_matching_bracket (ch, s, index);
		if (index2 === null) {
			g.es ('No matching bracket.');
			return ;
		}
		var minmax = tuple ([min (index, index2), max (index, index2) + 1]);
		if (_mb ['range'] == minmax) {
			_mb ['count']++;
		}
		else {
			_mb ['count'] = 1;
			_mb ['range'] = minmax;
		}
		if (_mb ['count'] >= 3) {
			var __left0__ = self.expand_range (s, max (minmax [0], 0), min (minmax [1], max_right), max_right, __kwargtrans__ ({expand: true}));
			var left = __left0__ [0];
			var right = __left0__ [1];
			var ch = __left0__ [2];
			var index3 = __left0__ [3];
			if (index3 !== null) {
				var index4 = self.find_matching_bracket (ch, s, index3);
				if (index4 !== null) {
					var __left0__ = tuple ([index3, index4]);
					var index = __left0__ [0];
					var index2 = __left0__ [1];
					_mb ['count'] = 1;
					_mb ['range'] = tuple ([min (index3, index4), max (index3, index4) + 1]);
				}
			}
		}
		if (index2 !== null) {
			if (index2 < index) {
				w.setSelectionRange (index2, index + 1, __kwargtrans__ ({insert: index2}));
			}
			else {
				w.setSelectionRange (index, index2 + 1, __kwargtrans__ ({insert: min (len (s), index2 + 1)}));
			}
			w.see (index2);
		}
		else {
			g.es ('unmatched', repr (ch));
		}
	});}
});
export var PosList =  __class__ ('PosList', [list], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, c, aList) {
		if (typeof aList == 'undefined' || (aList != null && aList.hasOwnProperty ("__kwargtrans__"))) {;
			var aList = null;
		};
		self.c = c;
		__super__ (PosList, '__init__') (self);
		if (aList === null) {
			for (var p of c.all_positions ()) {
				self.append (p.copy ());
			}
		}
		else {
			for (var p of aList) {
				self.append (p.copy ());
			}
		}
	});},
	get dump () {return __get__ (this, function (self, py_sort, verbose) {
		if (typeof py_sort == 'undefined' || (py_sort != null && py_sort.hasOwnProperty ("__kwargtrans__"))) {;
			var py_sort = false;
		};
		if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
			var verbose = false;
		};
		if (verbose) {
			return g.listToString (self, __kwargtrans__ ({py_sort: py_sort}));
		}
		return g.listToString ((function () {
			var __accu0__ = [];
			for (var p of self) {
				__accu0__.append (p.h);
			}
			return __accu0__;
		}) (), __kwargtrans__ ({py_sort: py_sort}));
	});},
	get select () {return __get__ (this, function (self, pat, regex, removeClones) {
		if (typeof regex == 'undefined' || (regex != null && regex.hasOwnProperty ("__kwargtrans__"))) {;
			var regex = false;
		};
		if (typeof removeClones == 'undefined' || (removeClones != null && removeClones.hasOwnProperty ("__kwargtrans__"))) {;
			var removeClones = true;
		};
		var c = self.c;
		var aList = [];
		if (regex) {
			for (var p of self) {
				if (re.match (pat, p.h)) {
					aList.append (p.copy ());
				}
			}
		}
		else {
			for (var p of self) {
				if (p.h.find (pat) != -(1)) {
					aList.append (p.copy ());
				}
			}
		}
		if (removeClones) {
			var aList = self.removeClones (aList);
		}
		return PosList (c, aList);
	});},
	get removeClones () {return __get__ (this, function (self, aList) {
		var seen = dict ({});
		var aList2 = [];
		for (var p of aList) {
			if (!__in__ (p.v, seen)) {
				seen [p.v] = p.v;
				aList2.append (p);
			}
		}
		return aList2;
	});}
});
export var ReadLinesClass =  __class__ ('ReadLinesClass', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, s) {
		self.lines = g.splitLines (s);
		self.i = 0;
	});},
	get py_next () {return __get__ (this, function (self) {
		if (self.i < len (self.lines)) {
			var line = self.lines [self.i];
			self.i++;
		}
		else {
			var line = '';
		}
		return line;
	});},
	__next__: py_next
});
export var RedirectClass =  __class__ ('RedirectClass', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.old = null;
		self.encoding = 'utf-8';
	});},
	get isRedirected () {return __get__ (this, function (self) {
		return self.old !== null;
	});},
	get flush () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		return ;
	});},
	get rawPrint () {return __get__ (this, function (self, s) {
		if (self.old) {
			self.old.write (s + '\n');
		}
		else {
			g.pr (s);
		}
	});},
	get redirect () {return __get__ (this, function (self, stdout) {
		if (typeof stdout == 'undefined' || (stdout != null && stdout.hasOwnProperty ("__kwargtrans__"))) {;
			var stdout = 1;
		};
		if (g.app.batchMode) {
			return ;
		}
		if (!(self.old)) {
			if (stdout) {
				var __left0__ = tuple ([sys.stdout, self]);
				self.old = __left0__ [0];
				sys.stdout = __left0__ [1];
			}
			else {
				var __left0__ = tuple ([sys.stderr, self]);
				self.old = __left0__ [0];
				sys.stderr = __left0__ [1];
			}
		}
	});},
	get undirect () {return __get__ (this, function (self, stdout) {
		if (typeof stdout == 'undefined' || (stdout != null && stdout.hasOwnProperty ("__kwargtrans__"))) {;
			var stdout = 1;
		};
		if (self.old) {
			if (stdout) {
				var __left0__ = tuple ([self.old, null]);
				sys.stdout = __left0__ [0];
				self.old = __left0__ [1];
			}
			else {
				var __left0__ = tuple ([self.old, null]);
				sys.stderr = __left0__ [0];
				self.old = __left0__ [1];
			}
		}
	});},
	get write () {return __get__ (this, function (self, s) {
		if (self.old) {
			if (app.log) {
				app.log.put (s, __kwargtrans__ ({from_redirect: true}));
			}
			else {
				self.old.write (s + '\n');
			}
		}
		else {
			g.pr (s);
		}
	});}
});
export var redirectStdErrObj = RedirectClass ();
export var redirectStdOutObj = RedirectClass ();
export var redirectStderr = function () {
	redirectStdErrObj.redirect (__kwargtrans__ ({stdout: false}));
};
export var redirectStdout = function () {
	redirectStdOutObj.redirect ();
};
export var restoreStderr = function () {
	redirectStdErrObj.undirect (__kwargtrans__ ({stdout: false}));
};
export var restoreStdout = function () {
	redirectStdOutObj.undirect ();
};
export var stdErrIsRedirected = function () {
	return redirectStdErrObj.isRedirected ();
};
export var stdOutIsRedirected = function () {
	return redirectStdOutObj.isRedirected ();
};
export var rawPrint = function (s) {
	redirectStdOutObj.rawPrint (s);
};
export var SherlockTracer =  __class__ ('SherlockTracer', [object], {
	__module__: __name__,
	bad_fns: 
	ignored_files: 
	ignored_functions: 
});
export var TkIDDialog =  __class__ ('TkIDDialog', [EmergencyDialog], {
	__module__: __name__,
	message: 'leoID.txt not found\n\nPlease enter an id that identifies you uniquely.\nYour git/cvs/bzr login name is a good choice.\n\nLeo uses this id to uniquely identify nodes.\n\nYour id should contain only letters and numbers\nand must be at least 3 characters in length.',
	title: 'Enter Leo id',
	get __init__ () {return __get__ (this, function (self) {
		__super__ (TkIDDialog, '__init__') (self, self.title, self.message);
		self.val = '';
	});}
});
export var Tracer =  __class__ ('Tracer', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, limit, trace, verbose) {
		if (typeof limit == 'undefined' || (limit != null && limit.hasOwnProperty ("__kwargtrans__"))) {;
			var limit = 0;
		};
		if (typeof trace == 'undefined' || (trace != null && trace.hasOwnProperty ("__kwargtrans__"))) {;
			var trace = false;
		};
		if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
			var verbose = false;
		};
		self.callDict = dict ({});
		self.calledDict = dict ({});
		self.count = 0;
		self.inited = false;
		self.limit = limit;
		self.stack = [];
		self.trace = trace;
		self.verbose = verbose;
	});},
	get computeName () {return __get__ (this, function (self, frame) {
		if (!(frame)) {
			return '';
		}
		var code = frame.f_code;
		var result = [];
		var module = inspect.getmodule (code);
		if (module) {
			var module_name = module.__name__;
			if (module_name == 'leo.core.leoGlobals') {
				result.append ('g');
			}
			else {
				var tag = 'leo.core.';
				if (module_name.startswith (tag)) {
					var module_name = module_name.__getslice__ (len (tag), null, 1);
				}
				result.append (module_name);
			}
		}
		try {
			var self_obj = frame.f_locals.py_get ('self');
			if (self_obj) {
				result.append (self_obj.__class__.__name__);
			}
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				// pass;
			}
			else {
				throw __except0__;
			}
		}
		result.append (code.co_name);
		return '.'.join (result);
	});},
	get report () {return __get__ (this, function (self) {
		if (0) {
			g.pr ('\nstack');
			for (var z of self.stack) {
				g.pr (z);
			}
		}
		g.pr ('\ncallDict...');
		for (var key of sorted (self.callDict)) {
			g.pr ('{}'.format (self.calledDict.py_get (key, 0)), key);
			var d = self.callDict.py_get (key);
			for (var key2 of sorted (d)) {
				g.pr ('{}'.format (d.py_get (key2)), key2);
			}
		}
	});},
	get stop () {return __get__ (this, function (self) {
		sys.settrace (null);
		self.report ();
	});},
	get tracer () {return __get__ (this, function (self, frame, event, arg) {
		var n = len (self.stack);
		if (event == 'return') {
			var n = max (0, n - 1);
		}
		var pad = '.' * n;
		if (event == 'call') {
			if (!(self.inited)) {
				self.inited = true;
				var py_name = self.computeName (frame.f_back);
				self.updateStats (py_name);
				self.stack.append (py_name);
			}
			var py_name = self.computeName (frame);
			if (self.trace && (self.limit == 0 || len (self.stack) < self.limit)) {
				g.trace ('{}call'.format (pad), py_name);
			}
			self.updateStats (py_name);
			self.stack.append (py_name);
			return self.tracer;
		}
		if (event == 'return') {
			if (self.stack) {
				var py_name = self.stack.py_pop ();
				if (self.trace && self.verbose && (self.limit == 0 || len (self.stack) < self.limit)) {
					g.trace ('{}ret '.format (pad), py_name);
				}
			}
			else {
				g.trace ('return underflow');
				self.stop ();
				return null;
			}
			if (self.stack) {
				return self.tracer;
			}
			self.stop ();
			return null;
		}
		return self.tracer;
	});},
	get updateStats () {return __get__ (this, function (self, py_name) {
		if (!(self.stack)) {
			return ;
		}
		var caller = self.stack [-(1)];
		var d = self.callDict.py_get (caller, dict ({}));
		d [py_name] = 1 + d.py_get (py_name, 0);
		self.callDict [caller] = d;
		self.calledDict [py_name] = 1 + self.calledDict.py_get (py_name, 0);
	});}
});
export var startTracer = function (limit, trace, verbose) {
	if (typeof limit == 'undefined' || (limit != null && limit.hasOwnProperty ("__kwargtrans__"))) {;
		var limit = 0;
	};
	if (typeof trace == 'undefined' || (trace != null && trace.hasOwnProperty ("__kwargtrans__"))) {;
		var trace = false;
	};
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = false;
	};
	var t = g.Tracer (__kwargtrans__ ({limit: limit, trace: trace, verbose: verbose}));
	sys.settrace (t.tracer);
	return t;
};
export var tracing_tags = dict ({});
export var tracing_vars = dict ({});
export var tracing_signatures = dict ({});
export var NullObject =  __class__ ('NullObject', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, ivars) {
		if (typeof ivars == 'undefined' || (ivars != null && ivars.hasOwnProperty ("__kwargtrans__"))) {;
			var ivars = null;
		};
		var args = tuple ([].slice.apply (arguments).slice (2));
		if (isinstance (ivars, str)) {
			var ivars = [ivars];
		}
		tracing_vars [id (self)] = ivars || [];
	});},
	get __call__ () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		return self;
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return 'NullObject';
	});},
	get __str__ () {return __get__ (this, function (self) {
		return 'NullObject';
	});},
	get __delattr__ () {return __get__ (this, function (self, attr) {
		return null;
	});},
	get __getattr__ () {return __get__ (this, function (self, attr) {
		if (__in__ (attr, tracing_vars.py_get (id (self), []))) {
			return getattr (self, attr, null);
		}
		return self;
	});},
	get __setattr__ () {return __get__ (this, function (self, attr, val) {
		if (__in__ (attr, tracing_vars.py_get (id (self), []))) {
			object.__setattr__ (self, attr, val);
		}
	});},
	get __bool__ () {return __get__ (this, function (self) {
		return false;
	});},
	get __contains__ () {return __get__ (this, function (self, item) {
		return false;
	});},
	get __getitem__ () {return __get__ (this, function (self, key) {
		var __except0__ = KeyError;
		__except0__.__cause__ = null;
		throw __except0__;
	});},
	get __setitem__ () {return __get__ (this, function (self, key, val) {
		// pass;
	});},
	get __iter__ () {return __get__ (this, function (self) {
		return self;
	});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __len__ () {return __get__ (this, function (self) {
		return 0;
	});},
	get __next__ () {return __get__ (this, function (self) {
		var __except0__ = StopIteration;
		__except0__.__cause__ = null;
		throw __except0__;
	});},
	next: __jsUsePyNext__
});
export var TracingNullObject =  __class__ ('TracingNullObject', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, tag, ivars) {
		if (typeof ivars == 'undefined' || (ivars != null && ivars.hasOwnProperty ("__kwargtrans__"))) {;
			var ivars = null;
		};
		var args = tuple ([].slice.apply (arguments).slice (3));
		tracing_tags [id (self)] = tag;
		if (isinstance (ivars, str)) {
			var ivars = [ivars];
		}
		tracing_vars [id (self)] = ivars || [];
		if (0) {
			var suppress = tuple (['tree item']);
			if (!__in__ (tag, suppress)) {
				print ('=' * 10, 'NullObject.__init__:', id (self), tag);
			}
		}
	});},
	get __call__ () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		if (0) {
			var suppress = tuple (['PyQt5.QtGui.QIcon', 'LeoQtTree.onItemCollapsed']);
			for (var z of suppress) {
				if (!__in__ (z, repr (args))) {
					print (__mod__ ('%30s'.format (), 'NullObject.__call__:'), args, kwargs);
				}
			}
		}
		return self;
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return 'TracingNullObject: {}'.format (tracing_tags.py_get (id (self), '<NO TAG>'));
	});},
	get __str__ () {return __get__ (this, function (self) {
		return 'TracingNullObject: {}'.format (tracing_tags.py_get (id (self), '<NO TAG>'));
	});},
	get __delattr__ () {return __get__ (this, function (self, attr) {
		return self;
	});},
	get __getattr__ () {return __get__ (this, function (self, attr) {
		null_object_print_attr (id (self), attr);
		if (__in__ (attr, tracing_vars.py_get (id (self), []))) {
			return getattr (self, attr, null);
		}
		return self;
	});},
	get __setattr__ () {return __get__ (this, function (self, attr, val) {
		g.null_object_print (id (self), '__setattr__', attr, val);
		if (__in__ (attr, tracing_vars.py_get (id (self), []))) {
			object.__setattr__ (self, attr, val);
		}
	});},
	get __bool__ () {return __get__ (this, function (self) {
		if (0) {
			var suppress = tuple (['getShortcut', 'on_idle', 'setItemText']);
			var callers = g.callers (2);
			if (!(callers.endswith (suppress))) {
				g.null_object_print (id (self), '__bool__');
			}
		}
		return false;
	});},
	get __contains__ () {return __get__ (this, function (self, item) {
		g.null_object_print (id (self), '__contains__');
		return false;
	});},
	get __getitem__ () {return __get__ (this, function (self, key) {
		g.null_object_print (id (self), '__getitem__');
	});},
	get __iter__ () {return __get__ (this, function (self) {
		g.null_object_print (id (self), '__iter__');
		return self;
	});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __len__ () {return __get__ (this, function (self) {
		return 0;
	});},
	get __next__ () {return __get__ (this, function (self) {
		g.null_object_print (id (self), '__next__');
		var __except0__ = StopIteration;
		__except0__.__cause__ = null;
		throw __except0__;
	});},
	next: __jsUsePyNext__,
	get __setitem__ () {return __get__ (this, function (self, key, val) {
		g.null_object_print (id (self), '__setitem__');
	});}
});
export var null_object_print_attr = function (id_, attr) {
	var suppress = true;
	if (suppress) {
		var suppress_callers = tuple (['drawNode', 'drawTopTree', 'drawTree', 'contractItem', 'getCurrentItem', 'declutter_node', 'finishCreate', 'initAfterLoad', 'show_tips', 'writeWaitingLog']);
		var suppress_attrs = tuple (['c.frame.body.wrapper', 'c.frame.getIconBar.add', 'c.frame.log.createTab', 'c.frame.log.enable', 'c.frame.log.finishCreate', 'c.frame.menu.createMenuBar', 'c.frame.menu.finishCreate', 'currentItem', 'dw.leo_master.windowTitle', 'pyzo.keyMapper.connect', 'pyzo.keyMapper.keyMappingChanged', 'pyzo.keyMapper.setShortcut']);
	}
	else {
		var suppress_callers = [];
		var suppress_attrs = [];
	}
	var tag = tracing_tags.py_get (id_, '<NO TAG>');
	var callers = g.callers (3).py_split (',');
	var callers = ','.join (callers.__getslice__ (0, -(1), 1));
	var in_callers = any ((function () {
		var __accu0__ = [];
		for (var z of suppress_callers) {
			__accu0__.append (__in__ (z, callers));
		}
		return __accu0__;
	}) ());
	var s = '{}.{}'.format (tag, attr);
	if (suppress) {
		if (!(in_callers) && !__in__ (s, suppress_attrs)) {
			g.pr ('{} {}'.format (s, callers));
		}
	}
	else {
		var signature = '{}.{}:{}'.format (tag, attr, callers);
		if (!__in__ (signature, tracing_signatures)) {
			tracing_signatures [signature] = true;
			g.pr ('{} {}'.format (s, callers));
		}
	}
};
export var null_object_print = function (id_, kind) {
	var args = tuple ([].slice.apply (arguments).slice (2));
	var tag = tracing_tags.py_get (id_, '<NO TAG>');
	var callers = g.callers (3).py_split (',');
	var callers = ','.join (callers.__getslice__ (0, -(1), 1));
	var s = '{}.{}'.format (kind, tag);
	var signature = '{}:{}'.format (s, callers);
	if (1) {
		if (args) {
			var args = ', '.join ((function () {
				var __accu0__ = [];
				for (var z of args) {
					__accu0__.append (repr (z));
				}
				return __accu0__;
			}) ());
			g.pr ('{} {}\n\t\t\targs: {}'.format (s, callers, args));
		}
		else {
			g.pr ('{} {}'.format (s, callers));
		}
	}
	else if (!__in__ (signature, tracing_signatures)) {
		tracing_signatures [signature] = true;
		g.pr ('{} {}'.format (s, callers));
	}
};
export var TypedDict =  __class__ ('TypedDict', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, py_name, keyType, valType) {
		self.d = dict ({});
		self._name = py_name;
		self.keyType = keyType;
		self.valType = valType;
	});},
	get __str__ () {return __get__ (this, function (self) {
		return '<TypedDict name:{} keys:{} values:{} len(keys): {}>'.format (self._name, self.keyType.__name__, self.valType.__name__, len (list (self.py_keys ())));
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return '{}\n{}\n'.format (g.dictToString (self.d), str (self));
	});},
	get __setitem__ () {return __get__ (this, function (self, key, val) {
		if (key === null) {
			g.trace ('TypeDict: None is not a valid key', g.callers ());
			return ;
		}
		self._checkKeyType (key);
		self._checkKeyType (key);
		try {
			for (var z of val) {
				self._checkValType (z);
			}
		}
		catch (__except0__) {
			if (isinstance (__except0__, py_TypeError)) {
				self._checkValType (val);
			}
			else {
				throw __except0__;
			}
		}
		self.d [key] = val;
	});},
	get add_to_list () {return __get__ (this, function (self, key, val) {
		if (key === null) {
			g.trace ('TypeDict: None is not a valid key', g.callers ());
			return ;
		}
		self._checkKeyType (key);
		self._checkValType (val);
		var aList = self.d.py_get (key, []);
		if (!__in__ (val, aList)) {
			aList.append (val);
			self.d [key] = aList;
		}
	});},
	get _checkKeyType () {return __get__ (this, function (self, key) {
		if (key && key.__class__ != self.keyType) {
			self._reportTypeError (key, self.keyType);
		}
	});},
	get _checkValType () {return __get__ (this, function (self, val) {
		if (val.__class__ != self.valType) {
			self._reportTypeError (val, self.valType);
		}
	});},
	get _reportTypeError () {return __get__ (this, function (self, obj, objType) {
		return '{}\nexpected: {}\n     got: {}'.format (self._name, obj.__class__.__name__, objType.__name__);
	});},
	get copy () {return __get__ (this, function (self, py_name) {
		if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {;
			var py_name = null;
		};
	});},
	get py_get () {return __get__ (this, function (self, key, py_default) {
		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
			var py_default = null;
		};
		return self.d.py_get (key, py_default);
	});},
	get py_items () {return __get__ (this, function (self) {
		return self.d.py_items ();
	});},
	get py_keys () {return __get__ (this, function (self) {
		return self.d.py_keys ();
	});},
	get py_values () {return __get__ (this, function (self) {
		return self.d.py_values ();
	});},
	get get_setting () {return __get__ (this, function (self, key) {
		var key = key.py_replace ('-', '').py_replace ('_', '');
		var gs = self.py_get (key);
		var val = gs && gs.val;
		return val;
	});},
	get get_string_setting () {return __get__ (this, function (self, key) {
		var val = self.get_setting (key);
		return (val && isinstance (val, str) ? val : null);
	});},
	get py_name () {return __get__ (this, function (self) {
		return self._name;
	});},
	get setName () {return __get__ (this, function (self, py_name) {
		self._name = py_name;
	});},
	get py_update () {return __get__ (this, function (self, d) {
		if (isinstance (d, TypedDict)) {
			self.d.py_update (d.d);
		}
		else {
			self.d.py_update (d);
		}
	});}
});
export var UiTypeException =  __class__ ('UiTypeException', [Exception], {
	__module__: __name__,
});
export var assertUi = function (uitype) {
	if (!(g.app.gui.guiName () == uitype)) {
		var __except0__ = UiTypeException;
		__except0__.__cause__ = null;
		throw __except0__;
	}
};
export var TestLeoGlobals =  __class__ ('TestLeoGlobals', [unittest.TestCase], {
	__module__: __name__,
	get test_comment_delims_from_extension () {return __get__ (this, function (self) {
		leo_g.app = leoApp.LeoApp ();
	});},
	get test_is_sentinel () {return __get__ (this, function (self) {
		var py_delims = leo_g.comment_delims_from_extension ('.py');
		var c_delims = leo_g.comment_delims_from_extension ('.c');
		var html_delims = leo_g.comment_delims_from_extension ('.html');
	});}
});
export var isTextWidget = function (w) {
	return g.app.gui.isTextWidget (w);
};
export var isTextWrapper = function (w) {
	return g.app.gui.isTextWrapper (w);
};
export var alert = function (message, c) {
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	if (!(g.unitTesting)) {
		g.es (message);
		g.app.gui.alert (c, message);
	}
};
export var assert_is = function (obj, list_or_class, warn) {
	if (typeof warn == 'undefined' || (warn != null && warn.hasOwnProperty ("__kwargtrans__"))) {;
		var warn = true;
	};
	if (warn) {
		var ok = isinstance (obj, list_or_class);
		if (!(ok)) {
			g.es_print ('can not happen. {}: expected {}, got: {}'.format (obj, list_or_class, obj.__class__.__name__));
			g.es_print (g.callers ());
		}
		return ok;
	}
	var ok = isinstance (obj, list_or_class);
	return ok;
};
export var _assert = function (condition, show_callers) {
	if (typeof show_callers == 'undefined' || (show_callers != null && show_callers.hasOwnProperty ("__kwargtrans__"))) {;
		var show_callers = true;
	};
	if (g.unitTesting) {
		return true;
	}
	var ok = bool (condition);
	if (ok) {
		return true;
	}
	g.es_print ('\n===== g._assert failed =====\n');
	if (show_callers) {
		g.es_print (g.callers ());
	}
	return false;
};
export var callers = function (n, count, excludeCaller, verbose) {
	if (typeof n == 'undefined' || (n != null && n.hasOwnProperty ("__kwargtrans__"))) {;
		var n = 4;
	};
	if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {;
		var count = 0;
	};
	if (typeof excludeCaller == 'undefined' || (excludeCaller != null && excludeCaller.hasOwnProperty ("__kwargtrans__"))) {;
		var excludeCaller = true;
	};
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = false;
	};
	var result = [];
	var i = (excludeCaller ? 3 : 2);
	while (1) {
		var s = _callerName (__kwargtrans__ ({n: i, verbose: verbose}));
		if (s) {
			result.append (s);
		}
		if (!(s) || len (result) >= n) {
			break;
		}
		i++;
	}
	result.reverse ();
	if (count > 0) {
		var result = result.__getslice__ (0, count, 1);
	}
	if (verbose) {
		return ''.join ((function () {
			var __accu0__ = [];
			for (var z of result) {
				__accu0__.append ('\n  {}'.format (z));
			}
			return __accu0__;
		}) ());
	}
	return ','.join (result);
};
export var _callerName = function (n, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = false;
	};
	try {
		var f1 = sys._getframe (n);
		var code1 = f1.f_code;
		var sfn = shortFilename (code1.co_filename);
		var locals_ = f1.f_locals;
		var py_name = code1.co_name;
		var line = code1.co_firstlineno;
		if (verbose) {
			var obj = locals_.py_get ('self');
			var full_name = (obj ? '{}.{}'.format (obj.__class__.__name__, py_name) : py_name);
			return 'line {} {} {}'.format (line, sfn, full_name);
		}
		return py_name;
	}
	catch (__except0__) {
		if (isinstance (__except0__, ValueError)) {
			return '';
		}
		else if (isinstance (__except0__, Exception)) {
			es_exception ();
			return '';
		}
		else {
			throw __except0__;
		}
	}
};
export var caller = function (i) {
	if (typeof i == 'undefined' || (i != null && i.hasOwnProperty ("__kwargtrans__"))) {;
		var i = 1;
	};
	return g.callers (i + 1).py_split (',') [0];
};
export var dump = function (s) {
	var out = '';
	for (var i of s) {
		out += str (ord (i)) + ',';
	}
	return out;
};
export var oldDump = function (s) {
	var out = '';
	for (var i of s) {
		if (i == '\n') {
			out += '[';
			out += 'n';
			out += ']';
		}
		if (i == '\t') {
			out += '[';
			out += 't';
			out += ']';
		}
		else if (i == ' ') {
			out += '[';
			out += ' ';
			out += ']';
		}
		else {
			out += i;
		}
	}
	return out;
};
export var dump_encoded_string = function (encoding, s) {
	print ('dump_encoded_string: {}'.format (g.callers ()));
	print ('dump_encoded_string: encoding {}\n'.format (encoding));
	print (s);
	var in_comment = false;
	for (var ch of s) {
		if (ch == '#') {
			var in_comment = true;
		}
		else if (!(in_comment)) {
			print ('{} {}'.format (ord (ch), repr (ch)));
		}
		else if (ch == '\n') {
			var in_comment = false;
		}
	}
};
export var module_date = function (mod, format) {
	if (typeof format == 'undefined' || (format != null && format.hasOwnProperty ("__kwargtrans__"))) {;
		var format = null;
	};
	var theFile = g.os_path_join (app.loadDir, mod.__file__);
	var __left0__ = g.os_path_splitext (theFile);
	var root = __left0__ [0];
	var ext = __left0__ [1];
	return g.file_date (root + '.py', __kwargtrans__ ({format: format}));
};
export var plugin_date = function (plugin_mod, format) {
	if (typeof format == 'undefined' || (format != null && format.hasOwnProperty ("__kwargtrans__"))) {;
		var format = null;
	};
	var theFile = g.os_path_join (app.loadDir, '..', 'plugins', plugin_mod.__file__);
	var __left0__ = g.os_path_splitext (theFile);
	var root = __left0__ [0];
	var ext = __left0__ [1];
	return g.file_date (root + '.py', __kwargtrans__ ({format: format}));
};
export var file_date = function (theFile, format) {
	if (typeof format == 'undefined' || (format != null && format.hasOwnProperty ("__kwargtrans__"))) {;
		var format = null;
	};
	if (theFile && g.os_path_exists (theFile)) {
		try {
			var n = g.os_path_getmtime (theFile);
			if (format === null) {
				var format = '%m/%d/%y %H:%M:%S';
			}
			return time.strftime (format, time.gmtime (n));
		}
		catch (__except0__) {
			if (isinstance (__except0__, tuple ([ImportError, NameError]))) {
				// pass;
			}
			else {
				throw __except0__;
			}
		}
	}
	return '';
};
export var get_line = function (s, i) {
	var nl = '';
	if (g.is_nl (s, i)) {
		var i = g.skip_nl (s, i);
		var nl = '[nl]';
	}
	var j = g.find_line_start (s, i);
	var k = g.skip_to_end_of_line (s, i);
	return nl + s.__getslice__ (j, k, 1);
};
export var get_line_after = function (s, i) {
	var nl = '';
	if (g.is_nl (s, i)) {
		var i = g.skip_nl (s, i);
		var nl = '[nl]';
	}
	var k = g.skip_to_end_of_line (s, i);
	return nl + s.__getslice__ (i, k, 1);
};
export var getLineAfter = get_line_after;
export var getIvarsDict = function (obj) {
	var d = dict ((function () {
		var __accu0__ = [];
		for (var key of dir (obj)) {
			if (!(isinstance (getattr (obj, key), types.MethodType))) {
				__accu0__.append ([key, getattr (obj, key)]);
			}
		}
		return __accu0__;
	}) ());
	return d;
};
export var checkUnchangedIvars = function (obj, d, exceptions) {
	if (typeof exceptions == 'undefined' || (exceptions != null && exceptions.hasOwnProperty ("__kwargtrans__"))) {;
		var exceptions = null;
	};
	if (!(exceptions)) {
		var exceptions = [];
	}
	var ok = true;
	for (var key of d) {
		if (!__in__ (key, exceptions)) {
			if (getattr (obj, key) != d.py_get (key)) {
				g.trace ('changed ivar: {} old: {} new: {}'.format (key, repr (d.py_get (key)), repr (getattr (obj, key))));
				var ok = false;
			}
		}
	}
	return ok;
};
export var pause = function (s) {
	g.pr (s);
	var i = 0;
	while (i < 1000 * 1000) {
		i++;
	}
};
export var pdb = function (message) {
	if (typeof message == 'undefined' || (message != null && message.hasOwnProperty ("__kwargtrans__"))) {;
		var message = '';
	};
};
export var dictToString = function (d, indent, tag) {
	if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
		var indent = '';
	};
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = null;
	};
	if (!(d)) {
		return '{}';
	}
	var result = ['{\n'];
	var indent2 = indent + ' ' * 4;
	var n = (2 + len (indent)) + max ((function () {
		var __accu0__ = [];
		for (var z of d.py_keys ()) {
			__accu0__.append (len (repr (z)));
		}
		return __accu0__;
	}) ());
	for (var [i, key] of enumerate (sorted (d, __kwargtrans__ ({key: (function __lambda__ (z) {
		return repr (z);
	})})))) {
		var pad = ' ' * max (0, n - len (repr (key)));
		result.append ('{}{}:'.format (pad, key));
		result.append (objToString (d.py_get (key), __kwargtrans__ ({indent: indent2})));
		if (i + 1 < len (d.py_keys ())) {
			result.append (',');
		}
		result.append ('\n');
	}
	result.append (indent + '}');
	var s = ''.join (result);
	return (tag ? '{}...\n{}\n'.format (tag, s) : s);
};
export var listToString = function (obj, indent, tag) {
	if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
		var indent = '';
	};
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = null;
	};
	if (!(obj)) {
		return '[]';
	}
	var result = ['['];
	var indent2 = indent + ' ' * 4;
	for (var [i, obj2] of enumerate (obj)) {
		result.append ('\n' + indent2);
		result.append (objToString (obj2, __kwargtrans__ ({indent: indent2})));
		if ((i + 1 < len (obj) && len (obj) > 1)) {
			result.append (',');
		}
		else {
			result.append ('\n' + indent);
		}
	}
	result.append (']');
	var s = ''.join (result);
	return (tag ? '{}...\n{}\n'.format (tag, s) : s);
};
export var objToString = function (obj, indent, printCaller, tag) {
	if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
		var indent = '';
	};
	if (typeof printCaller == 'undefined' || (printCaller != null && printCaller.hasOwnProperty ("__kwargtrans__"))) {;
		var printCaller = false;
	};
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = null;
	};
	if (isinstance (obj, dict)) {
		var s = dictToString (obj, __kwargtrans__ ({indent: indent}));
	}
	else if (isinstance (obj, list)) {
		var s = listToString (obj, __kwargtrans__ ({indent: indent}));
	}
	else if (isinstance (obj, tuple)) {
		var s = tupleToString (obj, __kwargtrans__ ({indent: indent}));
	}
	else if (isinstance (obj, str)) {
		var s = obj;
		var lines = g.splitLines (s);
		if (len (lines) > 1) {
			var s = listToString (lines, __kwargtrans__ ({indent: indent}));
		}
		else {
			var s = repr (s);
		}
	}
	else {
		var s = repr (obj);
	}
	if (printCaller && tag) {
		var prefix = '{}: {}'.format (g.caller (), tag);
	}
	else if (printCaller || tag) {
		var prefix = (printCaller ? g.caller () : tag);
	}
	else {
		var prefix = null;
	}
	if (prefix) {
		var sep = (__in__ ('\n', s) ? '\n' : ' ');
		return '{}:{}{}'.format (prefix, sep, s);
	}
	return s;
};
export var toString = objToString;
export var run_pylint = function (fn, rc, dots, patterns, sherlock, show_return, stats_patterns, verbose) {
	if (typeof dots == 'undefined' || (dots != null && dots.hasOwnProperty ("__kwargtrans__"))) {;
		var dots = true;
	};
	if (typeof patterns == 'undefined' || (patterns != null && patterns.hasOwnProperty ("__kwargtrans__"))) {;
		var patterns = null;
	};
	if (typeof sherlock == 'undefined' || (sherlock != null && sherlock.hasOwnProperty ("__kwargtrans__"))) {;
		var sherlock = false;
	};
	if (typeof show_return == 'undefined' || (show_return != null && show_return.hasOwnProperty ("__kwargtrans__"))) {;
		var show_return = true;
	};
	if (typeof stats_patterns == 'undefined' || (stats_patterns != null && stats_patterns.hasOwnProperty ("__kwargtrans__"))) {;
		var stats_patterns = null;
	};
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
};
export var sleep = function (n) {
	sleep (n);
};
export var printObj = function (obj, indent, printCaller, tag) {
	if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
		var indent = '';
	};
	if (typeof printCaller == 'undefined' || (printCaller != null && printCaller.hasOwnProperty ("__kwargtrans__"))) {;
		var printCaller = false;
	};
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = null;
	};
	g.pr (objToString (obj, __kwargtrans__ ({indent: indent, printCaller: printCaller, tag: tag})));
};
export var printDict = printObj;
export var printList = printObj;
export var printTuple = printObj;
export var tupleToString = function (obj, indent, tag) {
	if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
		var indent = '';
	};
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = null;
	};
	if (!(obj)) {
		return '(),';
	}
	var result = ['('];
	var indent2 = indent + ' ' * 4;
	for (var [i, obj2] of enumerate (obj)) {
		if (len (obj) > 1) {
			result.append ('\n' + indent2);
		}
		result.append (objToString (obj2, __kwargtrans__ ({indent: indent2})));
		if (len (obj) == 1 || i + 1 < len (obj)) {
			result.append (',');
		}
		else if (len (obj) > 1) {
			result.append ('\n' + indent);
		}
	}
	result.append (')');
	var s = ''.join (result);
	return (tag ? '{}...\n{}\n'.format (tag, s) : s);
};
export var lastObjectCount = 0;
export var lastObjectsDict = dict ({});
export var lastTypesDict = dict ({});
export var lastFunctionsDict = dict ({});
export var clearAllIvars = function (o) {
	if (o) {
		o.__dict__.py_clear ();
	}
};
export var collectGarbage = function () {
	try {
		gc.collect ();
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
export var enable_gc_debug = function (event) {
	if (typeof event == 'undefined' || (event != null && event.hasOwnProperty ("__kwargtrans__"))) {;
		var event = null;
	};
	if (!(gc)) {
		g.error ('can not import gc module');
		return ;
	}
	gc.set_debug ((((gc.DEBUG_STATS | gc.DEBUG_LEAK) | gc.DEBUG_COLLECTABLE) | gc.DEBUG_UNCOLLECTABLE) | gc.DEBUG_SAVEALL);
};
export var getRepresentativeLiveObjects = function () {
	var d = dict ({});
	for (var obj of gc.get_objects ()) {
		var t = py_typeof (obj);
		if (!__in__ (t, d) && hasattr (obj, '__class__')) {
			d [t] = obj;
		}
	}
	return d;
};
export var printGc = function (tag) {
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = null;
	};
	var tag = tag || g._callerName (__kwargtrans__ ({n: 2}));
	printGcObjects (__kwargtrans__ ({tag: tag}));
	printGcRefs (__kwargtrans__ ({tag: tag}));
	printGcVerbose (__kwargtrans__ ({tag: tag}));
};
export var printGcRefs = function (tag) {
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = '';
	};
	var verbose = false;
	var refs = gc.get_referrers (app.windowList [0]);
	g.pr ('-' * 30, tag);
	if (verbose) {
		g.pr ('refs of', app.windowList [0]);
		for (var ref of refs) {
			g.pr (py_typeof (ref));
		}
	}
	else {
		g.pr ('{} referers'.format (len (refs)));
	}
};
export var printGcAll = function (full, sort_by_n) {
	if (typeof full == 'undefined' || (full != null && full.hasOwnProperty ("__kwargtrans__"))) {;
		var full = false;
	};
	if (typeof sort_by_n == 'undefined' || (sort_by_n != null && sort_by_n.hasOwnProperty ("__kwargtrans__"))) {;
		var sort_by_n = true;
	};
	if (g.unitTesting) {
		return ;
	}
	var t1 = time.process_time ();
	var objects = gc.get_objects ();
	var d = dict ({});
	for (var obj of objects) {
		var t = py_typeof (obj);
		if (hasattr (obj, '__class__')) {
			d [t] = d.py_get (t, 0) + 1;
		}
	}
	var t2 = time.process_time ();
	if (full) {
		if (sort_by_n) {
			var py_items = list (d.py_items ());
			py_items.py_sort (__kwargtrans__ ({key: (function __lambda__ (x) {
				return x [1];
			})}));
			for (var z of py_reversed (py_items)) {
				print ('{} {}'.format (z [1], z [0]));
			}
		}
		else {
			g.printObj (d);
		}
	}
	print ('\nprintGcAll: {} objects in {} sec. '.format (len (objects), t2 - t1));
};
export var printGcObjects = function (tag) {
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = '';
	};
	var tag = tag || g._callerName (__kwargtrans__ ({n: 2}));
	try {
		var n = len (gc.garbage);
		var n2 = len (gc.get_objects ());
		var delta = n2 - lastObjectCount;
		if (delta == 0) {
			return ;
		}
		lastObjectCount = n2;
		var typesDict = dict ({});
		for (var obj of gc.get_objects ()) {
			var t = py_typeof (obj);
			if (t == 'instance' && t != types.UnicodeType) {
				try {
					var t = obj.__class__;
				}
				catch (__except0__) {
					if (isinstance (__except0__, Exception)) {
						// pass;
					}
					else {
						throw __except0__;
					}
				}
			}
			if (t != types.FrameType) {
				var r = repr (t);
				var n = typesDict.py_get (r, 0);
				typesDict [r] = n + 1;
			}
		}
		var py_keys = dict ({});
		for (var key of lastTypesDict) {
			if (!__in__ (key, typesDict)) {
				py_keys [key] = null;
			}
		}
		var empty = true;
		for (var key of py_keys) {
			var n3 = lastTypesDict.py_get (key, 0);
			var n4 = typesDict.py_get (key, 0);
			var delta2 = n4 - n3;
			if (delta2 != 0) {
				var empty = false;
				break;
			}
		}
		if (!(empty)) {
			g.pr ('-' * 30);
			g.pr ('{}: garbage: {}, objects: {}, delta: {}'.format (tag, n, n2, delta));
			if (0) {
				for (var key of sorted (py_keys)) {
					var n1 = lastTypesDict.py_get (key, 0);
					var n2 = typesDict.py_get (key, 0);
					var delta2 = n2 - n1;
					if (delta2 != 0) {
						g.pr ('{} ={} {}'.format (delta2, n2, key));
					}
				}
			}
		}
		lastTypesDict = typesDict;
		var typesDict = dict ({});
		if (0) {
			var funcDict = dict ({});
			var getspec = inspect.getfullargspec;
			var n = 0;
			for (var obj of gc.get_objects ()) {
				if (isinstance (obj, types.FunctionType)) {
					n++;
					var key = repr (obj);
					funcDict [key] = null;
					if (n < 50 && !__in__ (key, lastFunctionsDict)) {
						g.pr (obj);
						var data = getspec (obj);
						var __left0__ = data;
						var args = __left0__ [0];
						var varargs = __left0__ [1];
						var varkw = __left0__ [2];
						var defaults = __left0__ [3];
						var kwonlyargs = __left0__ [4];
						var kwonlydefaults = __left0__ [5];
						var annotations = __left0__ [6];
						g.pr ('args', args);
						if (varargs) {
							g.pr ('varargs', varargs);
						}
						if (varkw) {
							g.pr ('varkw', varkw);
						}
						if (defaults) {
							g.pr ('defaults...');
							for (var s of defaults) {
								g.pr (s);
							}
						}
					}
				}
			}
			lastFunctionsDict = funcDict;
			var funcDict = dict ({});
		}
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			traceback.print_exc ();
		}
		else {
			throw __except0__;
		}
	}
};
var __left0__ = printGcObjects;
export var printNewObjects = __left0__;
export var pno = __left0__;
export var printGcSummary = function (tag) {
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = '';
	};
	var tag = tag || g._callerName (__kwargtrans__ ({n: 2}));
	g.enable_gc_debug ();
	try {
		var n = len (gc.garbage);
		var n2 = len (gc.get_objects ());
		var s = '{}: printGCSummary: garbage: {}, objects: {}'.format (tag, n, n2);
		g.pr (s);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			traceback.print_exc ();
		}
		else {
			throw __except0__;
		}
	}
};
export var printGcVerbose = function (tag) {
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = '';
	};
	var tag = tag || g._callerName (__kwargtrans__ ({n: 2}));
	var objects = gc.get_objects ();
	var newObjects = (function () {
		var __accu0__ = [];
		for (var o of objects) {
			if (!__in__ (id (o), lastObjectsDict)) {
				__accu0__.append (o);
			}
		}
		return __accu0__;
	}) ();
	lastObjectsDict = dict ({});
	for (var o of objects) {
		lastObjectsDict [id (o)] = o;
	}
	var dicts = 0;
	var seqs = 0;
	var i = 0;
	var n = len (newObjects);
	while (i < 100 && i < n) {
		var o = newObjects [i];
		if (isinstance (o, dict)) {
			dicts++;
		}
		else if (isinstance (o, tuple ([list, tuple]))) {
			seqs++;
		}
		i++;
	}
	g.pr ('=' * 40);
	g.pr ('dicts: {}, sequences: {}'.format (dicts, seqs));
	g.pr ('{}: {} new, {} total objects'.format (tag, len (newObjects), len (objects)));
	g.pr ('-' * 40);
};
export var printTimes = function (times) {
	for (var [n, junk] of enumerate (times.__getslice__ (0, -(1), 1))) {
		var t = times [n + 1] - times [n];
		if (t > 0.1) {
			g.trace ('*** {} {} sec.'.format (n, t));
		}
	}
};
export var clearStats = function () {
	g.app.statsDict = dict ({});
};
export var printStats = command ('show-stats') (function (event, py_name) {
	if (typeof event == 'undefined' || (event != null && event.hasOwnProperty ("__kwargtrans__"))) {;
		var event = null;
	};
	if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {;
		var py_name = null;
	};
	if (py_name) {
		if (!(isString (py_name))) {
			var py_name = repr (py_name);
		}
	}
	else {
		var py_name = g._callerName (__kwargtrans__ ({n: 2}));
	}
	var d = g.app.statsDict;
	var d2 = (function () {
		var __accu0__ = [];
		for (var [key, val] of d.iteritems ()) {
			__accu0__.append ([val, key]);
		}
		return dict (__accu0__);
	}) ();
	for (var key of py_reversed (sorted (d2.py_keys ()))) {
		print ('{} {}'.format (key, d2.py_get (key)));
	}
});
export var stat = function (py_name) {
	if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {;
		var py_name = null;
	};
	var d = g.app.statsDict;
	if (py_name) {
		if (!(isString (py_name))) {
			var py_name = repr (py_name);
		}
	}
	else {
		var py_name = g._callerName (__kwargtrans__ ({n: 2}));
	}
	d [py_name] = 1 + d.py_get (py_name, 0);
};
export var getTime = function () {
	return time.time ();
};
export var esDiffTime = function (message, start) {
	var delta = time.time () - start;
	g.es ('', '{} {} sec.'.format (message, delta));
	return time.time ();
};
export var printDiffTime = function (message, start) {
	var delta = time.time () - start;
	g.pr ('{} {} sec.'.format (message, delta));
	return time.time ();
};
export var timeSince = function (start) {
	return '{} sec.'.format (time.time () - start);
};
export var comment_delims_from_extension = function (filename) {
	if (filename.startswith ('.')) {
		var __left0__ = tuple ([null, filename]);
		var root = __left0__ [0];
		var ext = __left0__ [1];
	}
	else {
		var __left0__ = os.path.splitext (filename);
		var root = __left0__ [0];
		var ext = __left0__ [1];
	}
	if (ext == '.tmp') {
		var __left0__ = os.path.splitext (root);
		var root = __left0__ [0];
		var ext = __left0__ [1];
	}
	var language = g.app.extension_dict.py_get (ext.__getslice__ (1, null, 1));
	if (ext) {
		return g.set_delims_from_language (language);
	}
	g.trace ('unknown extension: {}, filename: {}, root: {}'.format (ext, filename, root));
	return tuple (['', '', '']);
};
export var findAllValidLanguageDirectives = function (p) {
	if (!(p)) {
		return [];
	}
	var languages = set ();
	for (var m of g.g_language_pat.finditer (p.b)) {
		var language = m.group (1);
		if (g.isValidLanguage (language)) {
			languages.add (language);
		}
	}
	return list (sorted (languages));
};
export var findTabWidthDirectives = function (c, p) {
	if (c === null) {
		return null;
	}
	var w = null;
	for (var p of p.self_and_parents (__kwargtrans__ ({copy: false}))) {
		if (w) {
			break;
		}
		for (var s of tuple ([p.h, p.b])) {
			if (w) {
				break;
			}
			var anIter = g_tabwidth_pat.finditer (s);
			for (var m of anIter) {
				var word = m.group (0);
				var i = m.start (0);
				var j = g.skip_ws (s, i + len (word));
				var __left0__ = g.skip_long (s, j);
				var junk = __left0__ [0];
				var w = __left0__ [1];
				if (w == 0) {
					var w = null;
				}
			}
		}
	}
	return w;
};
export var findFirstValidAtLanguageDirective = function (p) {
	if (!(p)) {
		return null;
	}
	for (var m of g.g_language_pat.finditer (p.b)) {
		var language = m.group (1);
		if (g.isValidLanguage (language)) {
			return language;
		}
	}
	return null;
};
export var findLanguageDirectives = function (c, p) {
	if (c === null || p === null) {
		return null;
	}
	var v0 = p.v;
	var find_language = function (p_or_v) {
		for (var s of tuple ([p_or_v.h, p_or_v.b])) {
			for (var m of g_language_pat.finditer (s)) {
				var language = m.group (1);
				if (g.isValidLanguage (language)) {
					return language;
				}
			}
		}
		return null;
	};
	for (var p of p.self_and_parents (__kwargtrans__ ({copy: false}))) {
		var language = find_language (p);
		if (language) {
			return language;
		}
	}
	var seen = [];
	var parents = v0.parents.__getslice__ (0, null, 1);
	while (parents) {
		var parent_v = parents.py_pop ();
		if (__in__ (parent_v, seen)) {
			continue;
		}
		seen.append (parent_v);
		var language = find_language (parent_v);
		if (language) {
			return language;
		}
		for (var grand_parent_v of parent_v.parents) {
			if (!__in__ (grand_parent_v, seen)) {
				parents.append (grand_parent_v);
			}
		}
	}
	return (c.target_language ? c.target_language.lower () : 'python');
};
export var findReference = function (py_name, root) {
	for (var p of root.subtree (__kwargtrans__ ({copy: false}))) {
		if (p.matchHeadline (py_name) && !(p.isAtIgnoreNode ())) {
			return p.copy ();
		}
	}
	for (var p of root.self_and_parents (__kwargtrans__ ({copy: false}))) {
		var d = g.get_directives_dict (p);
		if (__in__ ('root', d)) {
			for (var p2 of p.subtree (__kwargtrans__ ({copy: false}))) {
				if (p2.matchHeadline (py_name) && !(p2.isAtIgnoreNode ())) {
					return p2.copy ();
				}
			}
		}
	}
	return null;
};
export var get_directives_dict = function (p, root) {
	if (typeof root == 'undefined' || (root != null && root.hasOwnProperty ("__kwargtrans__"))) {;
		var root = null;
	};
	if (root) {
		var root_node = root [0];
	}
	var d = dict ({});
	for (var [kind, s] of tuple ([tuple (['head', p.h]), tuple (['body', p.b])])) {
		var anIter = g.directives_pat.finditer (s);
		for (var m of anIter) {
			var word = m.group (1).strip ();
			var i = m.start (1);
			if (__in__ (word, d)) {
				continue;
			}
			var j = i + len (word);
			if (j < len (s) && !__in__ (s [j], ' \t\n')) {
				continue;
			}
			var k = g.skip_line (s, j);
			var val = s.__getslice__ (j, k, 1).strip ();
			if (__in__ (word, tuple (['root-doc', 'root-code']))) {
				d ['root'] = val;
			}
			d [word] = val;
		}
	}
	if (root) {
		var anIter = g_noweb_root.finditer (p.b);
		for (var m of anIter) {
			if (root_node) {
				d ['root'] = 0;
			}
			else {
				g.es ('{} may only occur in a topmost node (i.e., without a parent)'.format (g.angleBrackets ('*')));
			}
			break;
		}
	}
	return d;
};
export var get_directives_dict_list = function (p) {
	var result = [];
	var p1 = p.copy ();
	for (var p of p1.self_and_parents (__kwargtrans__ ({copy: false}))) {
		var root = (p.hasParent () ? null : [p]);
		result.append (g.get_directives_dict (p, __kwargtrans__ ({root: root})));
	}
	return result;
};
export var getLanguageFromAncestorAtFileNode = function (p) {
	var v0 = p.v;
	var find_language = function (p) {
		if (p.b.strip ()) {
			var languages = g.findAllValidLanguageDirectives (p);
			if (len (languages) == 1) {
				var language = languages [0];
				return language;
			}
		}
		if (p.isAnyAtFileNode ()) {
			var py_name = p.anyAtFileNodeName ();
			var __left0__ = g.os_path_splitext (py_name);
			var junk = __left0__ [0];
			var ext = __left0__ [1];
			var ext = ext.__getslice__ (1, null, 1);
			var language = g.app.extension_dict.py_get (ext);
			if (g.isValidLanguage (language)) {
				return language;
			}
		}
		return null;
	};
	for (var p of p.self_and_parents (__kwargtrans__ ({copy: false}))) {
		var language = find_language (p);
		if (language) {
			return language;
		}
	}
	var seen = [];
	var parents = v0.parents.__getslice__ (0, null, 1);
	while (parents) {
		var parent_v = parents.py_pop ();
		if (__in__ (parent_v, seen)) {
			continue;
		}
		seen.append (parent_v);
		var language = find_language (parent_v);
		if (language) {
			return language;
		}
		for (var grand_parent_v of parent_v.parents) {
			if (!__in__ (grand_parent_v, seen)) {
				parents.append (grand_parent_v);
			}
		}
	}
	return null;
};
export var getLanguageAtPosition = function (c, p) {
	var aList = g.get_directives_dict_list (p);
	var d = g.scanAtCommentAndAtLanguageDirectives (aList);
	var language = d && d.py_get ('language') || g.getLanguageFromAncestorAtFileNode (p) || c.config.getString ('target-language') || 'python';
	return language.lower ();
};
export var getOutputNewline = function (c, py_name) {
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {;
		var py_name = null;
	};
	if (py_name) {
		var s = py_name;
	}
	else if (c) {
		var s = c.config.output_newline;
	}
	else {
		var s = app.config.output_newline;
	}
	if (!(s)) {
		var s = '';
	}
	var s = s.lower ();
	if (__in__ (s, tuple (['nl', 'lf']))) {
		var s = '\n';
	}
	else if (s == 'cr') {
		var s = '\r';
	}
	else if (s == 'platform') {
		var s = os.linesep;
	}
	else if (s == 'crlf') {
		var s = '\r\n';
	}
	else {
		var s = '\n';
	}
	return s;
};
export var inAtNosearch = function (p) {
	for (var p of p.self_and_parents ()) {
		if (p.is_at_ignore () || re.search ('(^@|\\n@)nosearch\\b', p.b)) {
			return true;
		}
	}
	return false;
};
export var isDirective = function (s) {
	var m = g_is_directive_pattern.match (s);
	if (m) {
		var s2 = s.__getslice__ (m.end (1), null, 1);
		if (s2 && __in__ (s2 [0], '.(')) {
			return false;
		}
		return bool (__in__ (m.group (1), g.globalDirectiveList));
	}
	return false;
};
export var isValidLanguage = function (language) {
	if (__in__ (language, tuple (['c++', 'cpp']))) {
		var language = 'cplusplus';
	}
	var fn = g.os_path_join (g.app.loadDir, '..', 'modes', '{}.py'.format (language));
	return g.os_path_exists (fn);
};
export var scanAtCommentAndAtLanguageDirectives = function (aList) {
	var lang = null;
	for (var d of aList) {
		var comment = d.py_get ('comment');
		var language = d.py_get ('language');
		if (language) {
			var __left0__ = g.set_language (language, 0);
			var lang = __left0__ [0];
			var delim1 = __left0__ [1];
			var delim2 = __left0__ [2];
			var delim3 = __left0__ [3];
		}
		if (comment) {
			var __left0__ = g.set_delims_from_string (comment);
			var delim1 = __left0__ [0];
			var delim2 = __left0__ [1];
			var delim3 = __left0__ [2];
		}
		if (comment || language) {
			var delims = tuple ([delim1, delim2, delim3]);
			var d = dict ({'language': lang, 'comment': comment, 'delims': delims});
			return d;
		}
	}
	return null;
};
export var scanAtEncodingDirectives = function (aList) {
	for (var d of aList) {
		var encoding = d.py_get ('encoding');
		if (encoding && g.isValidEncoding (encoding)) {
			return encoding;
		}
		if (encoding && !(g.app.unitTesting)) {
			g.error ('invalid @encoding:', encoding);
		}
	}
	return null;
};
export var scanAtHeaderDirectives = function (aList) {
	for (var d of aList) {
		if (d.py_get ('header') && d.py_get ('noheader')) {
			g.error ('conflicting @header and @noheader directives');
		}
	}
};
export var scanAtLineendingDirectives = function (aList) {
	for (var d of aList) {
		var e = d.py_get ('lineending');
		if (__in__ (e, tuple (['cr', 'crlf', 'lf', 'nl', 'platform']))) {
			var lineending = g.getOutputNewline (__kwargtrans__ ({py_name: e}));
			return lineending;
		}
	}
	return null;
};
export var scanAtPagewidthDirectives = function (aList, issue_error_flag) {
	if (typeof issue_error_flag == 'undefined' || (issue_error_flag != null && issue_error_flag.hasOwnProperty ("__kwargtrans__"))) {;
		var issue_error_flag = false;
	};
	for (var d of aList) {
		var s = d.py_get ('pagewidth');
		if (s !== null) {
			var __left0__ = g.skip_long (s, 0);
			var i = __left0__ [0];
			var val = __left0__ [1];
			if (val !== null && val > 0) {
				return val;
			}
			if (issue_error_flag && !(g.app.unitTesting)) {
				g.error ('ignoring @pagewidth', s);
			}
		}
	}
	return null;
};
export var scanAtPathDirectives = function (c, aList) {
	var path = c.scanAtPathDirectives (aList);
	return path;
};
export var scanAllAtPathDirectives = function (c, p) {
	var aList = g.get_directives_dict_list (p);
	var path = c.scanAtPathDirectives (aList);
	return path;
};
export var scanAtRootDirectives = function (aList) {
	for (var d of aList) {
		var s = d.py_get ('root');
		if (s !== null) {
			var __left0__ = g.scanAtRootOptions (s, 0);
			var i = __left0__ [0];
			var mode = __left0__ [1];
			return mode;
		}
	}
	return null;
};
export var scanAtRootOptions = function (s, i, err_flag) {
	if (typeof err_flag == 'undefined' || (err_flag != null && err_flag.hasOwnProperty ("__kwargtrans__"))) {;
		var err_flag = false;
	};
	if (g.match (s, i, '@root')) {
		i += len ('@root');
		var i = g.skip_ws (s, i);
	}
	var mode = null;
	while (g.match (s, i, '-')) {
		i++;
		var err = -(1);
		if (g.match_word (s, i, 'code')) {
			if (!(mode)) {
				var mode = 'code';
			}
			else if (err_flag) {
				g.es ('modes conflict in:', g.get_line (s, i));
			}
		}
		else if (g.match (s, i, 'doc')) {
			if (!(mode)) {
				var mode = 'doc';
			}
			else if (err_flag) {
				g.es ('modes conflict in:', g.get_line (s, i));
			}
		}
		else {
			var err = i - 1;
		}
		while (i < len (s) && !__in__ (s [i], tuple ([' ', '\t', '\n', '-']))) {
			i++;
		}
		if (err > -(1) && err_flag) {
			var z_opt = s.__getslice__ (err, i, 1);
			var z_line = g.get_line (s, i);
			g.es ('unknown option:', z_opt, 'in', z_line);
		}
	}
	if (mode === null) {
		var doc = app.config.at_root_bodies_start_in_doc_mode;
		var mode = (doc ? 'doc' : 'code');
	}
	return tuple ([i, mode]);
};
export var scanAtTabwidthDirectives = function (aList, issue_error_flag) {
	if (typeof issue_error_flag == 'undefined' || (issue_error_flag != null && issue_error_flag.hasOwnProperty ("__kwargtrans__"))) {;
		var issue_error_flag = false;
	};
	for (var d of aList) {
		var s = d.py_get ('tabwidth');
		if (s !== null) {
			var __left0__ = g.skip_long (s, 0);
			var junk = __left0__ [0];
			var val = __left0__ [1];
			if (!__in__ (val, tuple ([null, 0]))) {
				return val;
			}
			if (issue_error_flag && !(g.app.unitTesting)) {
				g.error ('ignoring @tabwidth', s);
			}
		}
	}
	return null;
};
export var scanAllAtTabWidthDirectives = function (c, p) {
	if (c && p) {
		var aList = g.get_directives_dict_list (p);
		var val = g.scanAtTabwidthDirectives (aList);
		var ret = (val === null ? c.tab_width : val);
	}
	else {
		var ret = null;
	}
	return ret;
};
export var scanAtWrapDirectives = function (aList, issue_error_flag) {
	if (typeof issue_error_flag == 'undefined' || (issue_error_flag != null && issue_error_flag.hasOwnProperty ("__kwargtrans__"))) {;
		var issue_error_flag = false;
	};
	for (var d of aList) {
		if (d.py_get ('wrap') !== null) {
			return true;
		}
		if (d.py_get ('nowrap') !== null) {
			return false;
		}
	}
	return null;
};
export var scanAllAtWrapDirectives = function (c, p) {
	if (c && p) {
		var py_default = c && c.config.getBool ('body-pane-wraps');
		var aList = g.get_directives_dict_list (p);
		var val = g.scanAtWrapDirectives (aList);
		var ret = (val === null ? py_default : val);
	}
	else {
		var ret = null;
	}
	return ret;
};
export var scanDirectives = function (c, p) {
	if (typeof p == 'undefined' || (p != null && p.hasOwnProperty ("__kwargtrans__"))) {;
		var p = null;
	};
	return c.scanAllDirectives (p);
};
export var scanForAtIgnore = function (c, p) {
	if (g.app.unitTesting) {
		return false;
	}
	for (var p of p.self_and_parents (__kwargtrans__ ({copy: false}))) {
		var d = g.get_directives_dict (p);
		if (__in__ ('ignore', d)) {
			return true;
		}
	}
	return false;
};
export var scanForAtLanguage = function (c, p) {
	if (c && p) {
		for (var p of p.self_and_parents (__kwargtrans__ ({copy: false}))) {
			var d = g.get_directives_dict (p);
			if (__in__ ('language', d)) {
				var z = d ['language'];
				var __left0__ = g.set_language (z, 0);
				var language = __left0__ [0];
				var delim1 = __left0__ [1];
				var delim2 = __left0__ [2];
				var delim3 = __left0__ [3];
				return language;
			}
		}
	}
	return c.target_language;
};
export var scanForAtSettings = function (p) {
	for (var p of p.self_and_parents (__kwargtrans__ ({copy: false}))) {
		var h = p.h;
		var h = g.app.config.canonicalizeSettingName (h);
		if (h.startswith ('@settings')) {
			return true;
		}
	}
	return false;
};
export var set_delims_from_language = function (language) {
	var val = g.app.language_delims_dict.py_get (language);
	if (val) {
		var __left0__ = g.set_delims_from_string (val);
		var delim1 = __left0__ [0];
		var delim2 = __left0__ [1];
		var delim3 = __left0__ [2];
		if (delim2 && !(delim3)) {
			return tuple (['', delim1, delim2]);
		}
		return tuple ([delim1, delim2, delim3]);
	}
	return tuple (['', '', '']);
};
export var set_delims_from_string = function (s) {
	var tag = '@comment';
	var i = 0;
	if (g.match_word (s, i, tag)) {
		i += len (tag);
	}
	var count = 0;
	var delims = ['', '', ''];
	while (count < 3 && i < len (s)) {
		var __left0__ = g.skip_ws (s, i);
		var i = __left0__;
		var j = __left0__;
		while (i < len (s) && !(g.is_ws (s [i])) && !(g.is_nl (s, i))) {
			i++;
		}
		if (j == i) {
			break;
		}
		delims [count] = s.__getslice__ (j, i, 1) || '';
		count++;
	}
	if (count == 2) {
		delims [2] = delims [1];
		delims [1] = delims [0];
		delims [0] = '';
	}
	for (var i = 0; i < 3; i++) {
		if (delims [i]) {
			if (delims [i].startswith ('@0x')) {
				if (len (delims [i]) == 3) {
					g.warning ("'{}' delimiter is invalid".format (delims [i]));
					return tuple ([null, null, null]);
				}
				try {
					delims [i] = binascii.unhexlify (delims [i].__getslice__ (3, null, 1));
					delims [i] = g.toUnicode (delims [i]);
				}
				catch (__except0__) {
					if (isinstance (__except0__, Exception)) {
						var e = __except0__;
						g.warning ("'{}' delimiter is invalid: {}".format (delims [i], e));
						return tuple ([null, null, null]);
					}
					else {
						throw __except0__;
					}
				}
			}
			else {
				delims [i] = delims [i].py_replace ('__', '\n').py_replace ('_', ' ');
			}
		}
	}
	return tuple ([delims [0], delims [1], delims [2]]);
};
export var set_language = function (s, i, issue_errors_flag) {
	if (typeof issue_errors_flag == 'undefined' || (issue_errors_flag != null && issue_errors_flag.hasOwnProperty ("__kwargtrans__"))) {;
		var issue_errors_flag = false;
	};
	var tag = '@language';
	if (g.match_word (s, i, tag)) {
		i += len (tag);
	}
	var i = g.skip_ws (s, i);
	var j = i;
	var i = g.skip_c_id (s, i);
	var arg = s.__getslice__ (j, i, 1).lower ();
	if (app.language_delims_dict.py_get (arg)) {
		var language = arg;
		var __left0__ = g.set_delims_from_language (language);
		var delim1 = __left0__ [0];
		var delim2 = __left0__ [1];
		var delim3 = __left0__ [2];
		return tuple ([language, delim1, delim2, delim3]);
	}
	if (issue_errors_flag) {
		g.es ('ignoring:', g.get_line (s, i));
	}
	return tuple ([null, null, null, null]);
};
export var setDefaultDirectory = function (c, p, importing) {
	if (typeof importing == 'undefined' || (importing != null && importing.hasOwnProperty ("__kwargtrans__"))) {;
		var importing = false;
	};
	if (p) {
		var py_name = p.anyAtFileNodeName ();
		if (py_name) {
			var d = g.os_path_dirname (py_name);
			if (d && g.os_path_isabs (d)) {
				return d;
			}
		}
		var aList = g.get_directives_dict_list (p);
		var path = c.scanAtPathDirectives (aList);
	}
	else {
		var path = null;
	}
	if (path) {
		var path = g.os_path_finalize (path);
	}
	else {
		g.checkOpenDirectory (c);
		var __break0__ = false;
		for (var d of tuple ([c.openDirectory, g.getBaseDirectory (c)])) {
			if (d && g.os_path_isabs (d)) {
				var path = d;
				__break0__ = true;
				break;
			}
		}
		if (!__break0__) {
			var path = '';
		}
	}
	if (!(importing) && !(path)) {
		g.warning ('No absolute directory specified anywhere.');
	}
	return path;
};
export var checkOpenDirectory = function (c) {
	if (c.openDirectory != c.frame.openDirectory) {
		g.error ('Error: c.openDirectory != c.frame.openDirectory\nc.openDirectory: {}\nc.frame.openDirectory: {}'.format (c.openDirectory, c.frame.openDirectory));
	}
	if (!(g.os_path_isabs (c.openDirectory))) {
		g.error ('Error: relative c.openDirectory: {}'.format (c.openDirectory));
	}
};
export var stripPathCruft = function (path) {
	if (!(path)) {
		return path;
	}
	if (len (path) > 2 && (path [0] == '<' && path [-(1)] == '>' || path [0] == '"' && path [-(1)] == '"' || path [0] == "'" && path [-(1)] == "'")) {
		var path = path.__getslice__ (1, -(1), 1).strip ();
	}
	return path;
};
export var update_directives_pat = function () {
	var aList = (function () {
		var __accu0__ = [];
		for (var z of globalDirectiveList) {
			if (z != 'others') {
				__accu0__.append ('\\b{}\\b'.format (z));
			}
		}
		return __accu0__;
	}) ();
	var pat = __mod__ ('^@(%s)'.format (), '|'.join (aList));
	directives_pat = re.compile (pat, re.MULTILINE);
};
update_directives_pat ();
export var chdir = function (path) {
	if (!(g.os_path_isdir (path))) {
		var path = g.os_path_dirname (path);
	}
	if (g.os_path_isdir (path) && g.os_path_exists (path)) {
		os.chdir (path);
	}
};
export var computeGlobalConfigDir = function () {
	return g.app.loadManager.computeGlobalConfigDir ();
};
export var computeHomeDir = function () {
	return g.app.loadManager.computeHomeDir ();
};
export var computeLeoDir = function () {
	return g.app.loadManager.computeLeoDir ();
};
export var computeLoadDir = function () {
	return g.app.loadManager.computeLoadDir ();
};
export var computeMachineName = function () {
	return g.app.loadManager.computeMachineName ();
};
export var computeStandardDirectories = function () {
	return g.app.loadManager.computeStandardDirectories ();
};
export var computeWindowTitle = function (fileName) {
	var __left0__ = g.gitInfoForFile (fileName);
	var branch = __left0__ [0];
	var commit = __left0__ [1];
	if (!(fileName)) {
		return (branch ? branch + ': untitled' : 'untitled');
	}
	var __left0__ = g.os_path_split (fileName);
	var path = __left0__ [0];
	var fn = __left0__ [1];
	if (path) {
		var title = (fn + ' in ') + path;
	}
	else {
		var title = fn;
	}
	if (__in__ (os.sep, '/\\')) {
		var title = title.py_replace ('/', os.sep).py_replace ('\\', os.sep);
	}
	if (branch) {
		var title = (branch + ': ') + title;
	}
	return title;
};
export var create_temp_file = function (textMode) {
	if (typeof textMode == 'undefined' || (textMode != null && textMode.hasOwnProperty ("__kwargtrans__"))) {;
		var textMode = false;
	};
	try {
		var __left0__ = tempfile.mkstemp (__kwargtrans__ ({text: textMode}));
		var fd = __left0__ [0];
		var theFileName = __left0__ [1];
		var mode = (textMode ? 'w' : 'wb');
		var theFile = os.fdopen (fd, mode);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			g.error ('unexpected exception in g.create_temp_file');
			g.es_exception ();
			var __left0__ = tuple ([null, '']);
			var theFile = __left0__ [0];
			var theFileName = __left0__ [1];
		}
		else {
			throw __except0__;
		}
	}
	return tuple ([theFile, theFileName]);
};
export var defaultLeoFileExtension = function (c) {
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	var conf = (c ? c.config : g.app.config);
	return conf.getString ('default-leo-extension') || '.leo';
};
export var ensure_extension = function (py_name, ext) {
	var __left0__ = g.os_path_splitext (py_name);
	var theFile = __left0__ [0];
	var old_ext = __left0__ [1];
	if (!(py_name)) {
		return py_name;
	}
	if (__in__ (old_ext, tuple (['.db', '.leo']))) {
		return py_name;
	}
	if (old_ext && old_ext == ext) {
		return py_name;
	}
	return py_name + ext;
};
export var fullPath = function (c, p, simulate) {
	if (typeof simulate == 'undefined' || (simulate != null && simulate.hasOwnProperty ("__kwargtrans__"))) {;
		var simulate = false;
	};
	for (var p of p.self_and_parents (__kwargtrans__ ({copy: false}))) {
		var aList = g.get_directives_dict_list (p);
		var path = c.scanAtPathDirectives (aList);
		var fn = (simulate ? p.h : p.anyAtFileNodeName ());
		if (fn) {
			var fn = c.expand_path_expression (fn);
			return g.os_path_finalize_join (path, fn);
		}
	}
	return '';
};
export var get_files_in_directory = function (directory, kinds, recursive) {
	if (typeof kinds == 'undefined' || (kinds != null && kinds.hasOwnProperty ("__kwargtrans__"))) {;
		var kinds = null;
	};
	if (typeof recursive == 'undefined' || (recursive != null && recursive.hasOwnProperty ("__kwargtrans__"))) {;
		var recursive = true;
	};
	var __left0__ = tuple ([[], os.path.sep]);
	var files = __left0__ [0];
	var sep = __left0__ [1];
	if (!(g.os.path.exists (directory))) {
		g.es_print ('does not exist', directory);
		return files;
	}
	try {
		if (kinds) {
			var kinds = (function () {
				var __accu0__ = [];
				for (var z of kinds) {
					__accu0__.append ((z.startswith ('*') ? z : '*' + z));
				}
				return __accu0__;
			}) ();
		}
		else {
			var kinds = ['*.py'];
		}
		if (recursive) {
		}
		else {
			for (var kind of kinds) {
				files.extend (glob.glob ((directory + sep) + kind));
			}
		}
		return list (set (sorted (files)));
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			g.es_exception ();
			return [];
		}
		else {
			throw __except0__;
		}
	}
};
export var getBaseDirectory = function (c) {
	var base = app.config.relative_path_base_directory;
	if (base && base == '!') {
		var base = app.loadDir;
	}
	else if (base && base == '.') {
		var base = c.openDirectory;
	}
	if (base && g.os_path_isabs (base)) {
		if (!(hasattr (c, 'chdir_to_relative_path'))) {
			c.chdir_to_relative_path = c.config.getBool ('chdir-to-relative-path');
		}
		if (c.chdir_to_relative_path) {
			os.chdir (base);
		}
		return base;
	}
	return '';
};
export var getEncodingAt = function (p, s) {
	if (typeof s == 'undefined' || (s != null && s.hasOwnProperty ("__kwargtrans__"))) {;
		var s = null;
	};
	if (s) {
		var __left0__ = g.stripBOM (s);
		var e = __left0__ [0];
		var junk_s = __left0__ [1];
		if (e) {
			return e;
		}
	}
	var aList = g.get_directives_dict_list (p);
	var e = g.scanAtEncodingDirectives (aList);
	if (s && s.strip () && !(e)) {
		var e = 'utf-8';
	}
	return e;
};
export var guessExternalEditor = function (c) {
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	var editor = os.environ.py_get ('LEO_EDITOR') || os.environ.py_get ('EDITOR') || g.app.db && g.app.db.py_get ('LEO_EDITOR') || c && c.config.getString ('external-editor');
	if (editor) {
		return editor;
	}
	var platform = sys.platform.lower ();
	if (platform.startswith ('win')) {
		return 'notepad';
	}
	if (platform.startswith ('linux')) {
		return 'gedit';
	}
	g.es ('No editor set.\nPlease set LEO_EDITOR or EDITOR environment variable,\nor do g.app.db[\'LEO_EDITOR\'] = "gvim"');
	return null;
};
export var init_dialog_folder = function (c, p, use_at_path) {
	if (typeof use_at_path == 'undefined' || (use_at_path != null && use_at_path.hasOwnProperty ("__kwargtrans__"))) {;
		var use_at_path = true;
	};
	if (c && p && use_at_path) {
		var path = g.fullPath (c, p);
		if (path) {
			var dir_ = g.os_path_dirname (path);
			if (dir_ && g.os_path_exists (dir_)) {
				return dir_;
			}
		}
	}
	var table = tuple ([tuple (['c.last_dir', c && c.last_dir]), tuple (['os.curdir', g.os_path_abspath (os.curdir)])]);
	for (var [kind, dir_] of table) {
		if (dir_ && g.os_path_exists (dir_)) {
			return dir_;
		}
	}
	return '';
};
export var is_binary_file = function (f) {
	return f && isinstance (f, io.BufferedIOBase);
};
export var is_binary_external_file = function (fileName) {
	try {
		var f = open (fileName, 'rb');
		try {
			f.__enter__ ();
			var s = f.read (1024);
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
		return g.is_binary_string (s);
	}
	catch (__except0__) {
		if (isinstance (__except0__, IOError)) {
			return false;
		}
		else if (isinstance (__except0__, Exception)) {
			g.es_exception ();
			return false;
		}
		else {
			throw __except0__;
		}
	}
};
export var is_binary_string = function (s) {
	var aList = [7, 8, 9, 10, 12, 13, 27] + list (range (32, 256));
	var aList = bytes (aList);
	return bool (s.translate (null, aList));
};
export var is_sentinel = function (line, delims) {
	var __left0__ = delims;
	var delim1 = __left0__ [0];
	var delim2 = __left0__ [1];
	var delim3 = __left0__ [2];
	var line = line.lstrip ();
	if (delim1) {
		return line.startswith (delim1 + '@');
	}
	if (delim2 && delim3) {
		var i = line.find (delim2 + '@');
		var j = line.find (delim3);
		return (0 == i && i < j);
	}
	g.error ('is_sentinel: can not happen. delims: {}'.format (repr (delims)));
	return false;
};
export var makeAllNonExistentDirectories = function (theDir) {
	var theDir = g.os_path_normpath (theDir);
	var ok = g.os_path_isdir (theDir) && g.os_path_exists (theDir);
	if (ok) {
		return theDir;
	}
	try {
		os.makedirs (theDir, __kwargtrans__ ({mode: 511, exist_ok: false}));
		return theDir;
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			return null;
		}
		else {
			throw __except0__;
		}
	}
};
export var makePathRelativeTo = function (fullPath, basePath) {
	if (fullPath.startswith (basePath)) {
		var s = fullPath.__getslice__ (len (basePath), null, 1);
		if (s.startswith (os.path.sep)) {
			var s = s.__getslice__ (len (os.path.sep), null, 1);
		}
		return s;
	}
	return fullPath;
};
export var openWithFileName = function (fileName, old_c, gui) {
	if (typeof old_c == 'undefined' || (old_c != null && old_c.hasOwnProperty ("__kwargtrans__"))) {;
		var old_c = null;
	};
	if (typeof gui == 'undefined' || (gui != null && gui.hasOwnProperty ("__kwargtrans__"))) {;
		var gui = null;
	};
	return g.app.loadManager.loadLocalFile (fileName, gui, old_c);
};
export var readFileIntoEncodedString = function (fn, silent) {
	if (typeof silent == 'undefined' || (silent != null && silent.hasOwnProperty ("__kwargtrans__"))) {;
		var silent = false;
	};
	try {
		var f = open (fn, 'rb');
		try {
			f.__enter__ ();
			return f.read ();
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
	}
	catch (__except0__) {
		if (isinstance (__except0__, IOError)) {
			if (!(silent)) {
				g.error ('can not open', fn);
			}
		}
		else if (isinstance (__except0__, Exception)) {
			if (!(silent)) {
				g.error ('readFileIntoEncodedString: exception reading {}'.format (fn));
				g.es_exception ();
			}
		}
		else {
			throw __except0__;
		}
	}
	return null;
};
export var readFileIntoString = function (fileName, encoding, kind, verbose) {
	if (typeof encoding == 'undefined' || (encoding != null && encoding.hasOwnProperty ("__kwargtrans__"))) {;
		var encoding = 'utf-8';
	};
	if (typeof kind == 'undefined' || (kind != null && kind.hasOwnProperty ("__kwargtrans__"))) {;
		var kind = null;
	};
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
	if (!(fileName)) {
		if (verbose) {
			g.trace ('no fileName arg given');
		}
		return tuple ([null, null]);
	}
	if (g.os_path_isdir (fileName)) {
		if (verbose) {
			g.trace ('not a file:', fileName);
		}
		return tuple ([null, null]);
	}
	if (!(g.os_path_exists (fileName))) {
		if (verbose) {
			g.error ('file not found:', fileName);
		}
		return tuple ([null, null]);
	}
	try {
		var e = null;
		var f = open (fileName, 'rb');
		try {
			f.__enter__ ();
			var s = f.read ();
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
		if (!(s)) {
			return tuple (['', null]);
		}
		var __left0__ = g.stripBOM (s);
		var e = __left0__ [0];
		var s = __left0__ [1];
		if (!(e)) {
			var __left0__ = g.os_path_splitext (fileName);
			var junk = __left0__ [0];
			var ext = __left0__ [1];
			if (ext == '.py') {
				var e = g.getPythonEncodingFromString (s);
			}
		}
		var s = g.toUnicode (s, __kwargtrans__ ({encoding: e || encoding}));
		return tuple ([s, e]);
	}
	catch (__except0__) {
		if (isinstance (__except0__, IOError)) {
			if (verbose) {
				g.error ('can not open', '', kind || '', fileName);
			}
		}
		else if (isinstance (__except0__, Exception)) {
			g.error ('readFileIntoString: unexpected exception reading {}'.format (fileName));
			g.es_exception ();
		}
		else {
			throw __except0__;
		}
	}
	return tuple ([null, null]);
};
export var readFileIntoUnicodeString = function (fn, encoding, silent) {
	if (typeof encoding == 'undefined' || (encoding != null && encoding.hasOwnProperty ("__kwargtrans__"))) {;
		var encoding = null;
	};
	if (typeof silent == 'undefined' || (silent != null && silent.hasOwnProperty ("__kwargtrans__"))) {;
		var silent = false;
	};
	try {
		var f = open (fn, 'rb');
		try {
			f.__enter__ ();
			var s = f.read ();
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
		return g.toUnicode (s, __kwargtrans__ ({encoding: encoding}));
	}
	catch (__except0__) {
		if (isinstance (__except0__, IOError)) {
			if (!(silent)) {
				g.error ('can not open', fn);
			}
		}
		else if (isinstance (__except0__, Exception)) {
			g.error ('readFileIntoUnicodeString: unexpected exception reading {}'.format (fn));
			g.es_exception ();
		}
		else {
			throw __except0__;
		}
	}
	return null;
};
export var readlineForceUnixNewline = function (f, fileName) {
	if (typeof fileName == 'undefined' || (fileName != null && fileName.hasOwnProperty ("__kwargtrans__"))) {;
		var fileName = null;
	};
	try {
		var s = f.readline ();
	}
	catch (__except0__) {
		if (isinstance (__except0__, UnicodeDecodeError)) {
			g.trace ('UnicodeDecodeError: {}'.format (fileName), f, g.callers ());
			var s = '';
		}
		else {
			throw __except0__;
		}
	}
	if (len (s) >= 2 && s [-(2)] == '\r' && s [-(1)] == '\n') {
		var s = s.__getslice__ (0, -(2), 1) + '\n';
	}
	return s;
};
export var sanitize_filename = function (s) {
	var result = [];
	for (var ch of s) {
		if (__in__ (ch, string.ascii_letters)) {
			result.append (ch);
		}
		else if (ch == '\t') {
			result.append (' ');
		}
		else if (ch == '"') {
			result.append ("'");
		}
		else if (__in__ (ch, '\\/:|<>*:._')) {
			result.append ('_');
		}
	}
	var s = ''.join (result).strip ();
	while (len (s) > 1) {
		var n = len (s);
		var s = s.py_replace ('__', '_');
		if (len (s) == n) {
			break;
		}
	}
	return s.__getslice__ (0, 128, 1);
};
export var setGlobalOpenDir = function (fileName) {
	if (fileName) {
		g.app.globalOpenDir = g.os_path_dirname (fileName);
	}
};
export var shortFileName = function (fileName, n) {
	if (typeof n == 'undefined' || (n != null && n.hasOwnProperty ("__kwargtrans__"))) {;
		var n = null;
	};
	if (n !== null) {
		g.trace ('"n" keyword argument is no longer used');
	}
	return (fileName ? g.os_path_basename (fileName) : '');
};
export var shortFilename = shortFileName;
export var splitLongFileName = function (fn, limit) {
	if (typeof limit == 'undefined' || (limit != null && limit.hasOwnProperty ("__kwargtrans__"))) {;
		var limit = 40;
	};
	var aList = fn.py_replace ('\\', '/').py_split ('/');
	var __left0__ = tuple ([0, []]);
	var n = __left0__ [0];
	var result = __left0__ [1];
	for (var [i, s] of enumerate (aList)) {
		n += len (s);
		result.append (s);
		if (i + 1 < len (aList)) {
			result.append ('/');
			n++;
		}
		if (n > limit) {
			result.append ('\n');
			var n = 0;
		}
	}
	return ''.join (result);
};
export var utils_remove = function (fileName, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
	try {
		os.remove (fileName);
		return true;
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			if (verbose) {
				g.es ('exception removing:', fileName);
				g.es_exception ();
			}
			return false;
		}
		else {
			throw __except0__;
		}
	}
};
export var utils_rename = function (c, src, dst, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
	try {
		shutil.move (src, dst);
		return true;
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			if (verbose) {
				g.error ('exception renaming', src, 'to', dst);
				g.es_exception (__kwargtrans__ ({full: false}));
			}
			return false;
		}
		else {
			throw __except0__;
		}
	}
};
export var utils_chmod = function (fileName, mode, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
	if (mode === null) {
		return ;
	}
	try {
		os.chmod (fileName, mode);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			if (verbose) {
				g.es ('exception in os.chmod', fileName);
				g.es_exception ();
			}
		}
		else {
			throw __except0__;
		}
	}
};
export var utils_stat = function (fileName) {
	try {
		var mode = os.stat (fileName) [0] & ((7 * 8) * 8 + 7 * 8) + 7;
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			var mode = null;
		}
		else {
			throw __except0__;
		}
	}
	return mode;
};
export var writeFile = function (contents, encoding, fileName) {
	try {
		if (g.isUnicode (contents)) {
			var contents = g.toEncodedString (contents, __kwargtrans__ ({encoding: encoding}));
		}
		var f = open (fileName, 'wb');
		try {
			f.__enter__ ();
			f.write (contents);
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
		return true;
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			var e = __except0__;
			print ('exception writing: {}:\n{}'.format (fileName, e));
			return false;
		}
		else {
			throw __except0__;
		}
	}
};
export var find_word = function (s, word, i) {
	if (typeof i == 'undefined' || (i != null && i.hasOwnProperty ("__kwargtrans__"))) {;
		var i = 0;
	};
	while (i < len (s)) {
		var progress = i;
		var i = s.find (word, i);
		if (i == -(1)) {
			return -(1);
		}
		if (i > 0) {
			var ch = s [i - 1];
			if (ch == '_' || ch.isalnum ()) {
				i += len (word);
				continue;
			}
		}
		if (g.match_word (s, i, word)) {
			return i;
		}
		i += len (word);
	}
	return -(1);
};
export var findRootsWithPredicate = function (c, root, predicate) {
	if (typeof predicate == 'undefined' || (predicate != null && predicate.hasOwnProperty ("__kwargtrans__"))) {;
		var predicate = null;
	};
	var seen = [];
	var roots = [];
	if (predicate === null) {
		var predicate = function (p) {
			return p.isAnyAtFileNode () && p.h.strip ().endswith ('.py');
		};
	}
	for (var p of root.self_and_subtree (__kwargtrans__ ({copy: false}))) {
		if (predicate (p) && !__in__ (p.v, seen)) {
			seen.append (p.v);
			roots.append (p.copy ());
		}
	}
	if (roots) {
		return roots;
	}
	for (var p of root.parents ()) {
		if (predicate (p)) {
			return [p.copy ()];
		}
	}
	var clones = [];
	for (var p of root.self_and_parents (__kwargtrans__ ({copy: false}))) {
		if (p.isCloned ()) {
			clones.append (p.v);
		}
	}
	if (clones) {
		for (var p of c.all_positions (__kwargtrans__ ({copy: false}))) {
			if (predicate (p)) {
				for (var p2 of p.self_and_subtree ()) {
					if (__in__ (p2.v, clones)) {
						return [p.copy ()];
					}
				}
			}
		}
	}
	return [];
};
export var recursiveUNLSearch = function (unlList, c, depth, p, maxdepth, maxp, soft_idx, hard_idx) {
	if (typeof depth == 'undefined' || (depth != null && depth.hasOwnProperty ("__kwargtrans__"))) {;
		var depth = 0;
	};
	if (typeof p == 'undefined' || (p != null && p.hasOwnProperty ("__kwargtrans__"))) {;
		var p = null;
	};
	if (typeof maxdepth == 'undefined' || (maxdepth != null && maxdepth.hasOwnProperty ("__kwargtrans__"))) {;
		var maxdepth = 0;
	};
	if (typeof maxp == 'undefined' || (maxp != null && maxp.hasOwnProperty ("__kwargtrans__"))) {;
		var maxp = null;
	};
	if (typeof soft_idx == 'undefined' || (soft_idx != null && soft_idx.hasOwnProperty ("__kwargtrans__"))) {;
		var soft_idx = false;
	};
	if (typeof hard_idx == 'undefined' || (hard_idx != null && hard_idx.hasOwnProperty ("__kwargtrans__"))) {;
		var hard_idx = false;
	};
	if (g.unitTesting) {
		g.app.unitTestDict ['g.recursiveUNLSearch'] = true;
		return tuple ([true, maxdepth, maxp]);
	}
	var moveToP = function (c, p, unlList) {
		g.app.gui.qtApp.processEvents ();
		c.expandAllAncestors (p);
		c.selectPosition (p);
		var __left0__ = recursiveUNLParts (unlList [-(1)]);
		var nth_sib = __left0__ [0];
		var nth_same = __left0__ [1];
		var nth_line_no = __left0__ [2];
		var nth_col_no = __left0__ [3];
		if (nth_line_no) {
			if (nth_line_no < 0) {
				c.goToLineNumber (-(nth_line_no));
				if (nth_col_no) {
					var pos = c.frame.body.wrapper.getInsertPoint () + nth_col_no;
					c.frame.body.wrapper.setInsertPoint (pos);
				}
			}
			else {
				var pos = sum ((function () {
					var __accu0__ = [];
					for (var i of p.b.py_split ('\n').__getslice__ (0, nth_line_no - 1, 1)) {
						__accu0__.append (len (i) + 1);
					}
					return py_iter (__accu0__);
				}) ());
				if (nth_col_no) {
					pos += nth_col_no;
				}
				c.frame.body.wrapper.setInsertPoint (pos);
			}
		}
		if (p.hasChildren ()) {
			p.expand ();
		}
		c.redraw ();
		c.frame.bringToFront ();
		c.bodyWantsFocusNow ();
	};
	var __left0__ = recursiveUNLFind (unlList, c, depth, p, maxdepth, maxp, __kwargtrans__ ({soft_idx: soft_idx, hard_idx: hard_idx}));
	var found = __left0__ [0];
	var maxdepth = __left0__ [1];
	var maxp = __left0__ [2];
	if (maxp) {
		moveToP (c, maxp, unlList);
	}
	return tuple ([found, maxdepth, maxp]);
};
export var recursiveUNLFind = function (unlList, c, depth, p, maxdepth, maxp, soft_idx, hard_idx) {
	if (typeof depth == 'undefined' || (depth != null && depth.hasOwnProperty ("__kwargtrans__"))) {;
		var depth = 0;
	};
	if (typeof p == 'undefined' || (p != null && p.hasOwnProperty ("__kwargtrans__"))) {;
		var p = null;
	};
	if (typeof maxdepth == 'undefined' || (maxdepth != null && maxdepth.hasOwnProperty ("__kwargtrans__"))) {;
		var maxdepth = 0;
	};
	if (typeof maxp == 'undefined' || (maxp != null && maxp.hasOwnProperty ("__kwargtrans__"))) {;
		var maxp = null;
	};
	if (typeof soft_idx == 'undefined' || (soft_idx != null && soft_idx.hasOwnProperty ("__kwargtrans__"))) {;
		var soft_idx = false;
	};
	if (typeof hard_idx == 'undefined' || (hard_idx != null && hard_idx.hasOwnProperty ("__kwargtrans__"))) {;
		var hard_idx = false;
	};
	if (depth == 0) {
		var nds = list (c.rootPosition ().self_and_siblings ());
		var unlList = (function () {
			var __accu0__ = [];
			for (var i of unlList) {
				if (i.strip ()) {
					__accu0__.append (i.py_replace ('--%3E', '-->'));
				}
			}
			return __accu0__;
		}) ();
	}
	else {
		var nds = list (p.children ());
	}
	var heads = (function () {
		var __accu0__ = [];
		for (var i of nds) {
			__accu0__.append (i.h);
		}
		return __accu0__;
	}) ();
	var order = [];
	var __left0__ = null;
	var nth_sib = __left0__;
	var nth_same = __left0__;
	var nth_line_no = __left0__;
	var nth_col_no = __left0__;
	try {
		var target = unlList [depth];
	}
	catch (__except0__) {
		if (isinstance (__except0__, IndexError)) {
			var target = '';
		}
		else {
			throw __except0__;
		}
	}
	try {
		var target = g_pos_pattern.sub ('', unlList [depth]);
		var __left0__ = recursiveUNLParts (unlList [depth]);
		var nth_sib = __left0__ [0];
		var nth_same = __left0__ [1];
		var nth_line_no = __left0__ [2];
		var nth_col_no = __left0__ [3];
		var pos = nth_sib !== null;
	}
	catch (__except0__) {
		if (isinstance (__except0__, IndexError)) {
			var pos = false;
		}
		else {
			throw __except0__;
		}
	}
	if (pos) {
		var use_idx_mode = true;
		var target = re.sub (g_pos_pattern, '', target).py_replace ('--%3E', '-->');
		if (hard_idx) {
			if (nth_sib < len (heads)) {
				order.append (nth_sib);
			}
		}
		else {
			if (nth_same) {
				var nths = (function () {
					var __accu0__ = [];
					for (var [n, i] of enumerate (heads)) {
						if (i == target) {
							__accu0__.append (n);
						}
					}
					return __accu0__;
				}) ();
				if (nth_same < len (nths) && heads [nths [nth_same]] == target) {
					order.append (nths [nth_same]);
				}
			}
			order += (function () {
				var __accu0__ = [];
				for (var [n, s] of enumerate (heads)) {
					if (!__in__ (n, order) && s == target) {
						__accu0__.append (n);
					}
				}
				return __accu0__;
			}) ();
			if (soft_idx && nth_sib < len (heads)) {
				order.append (nth_sib);
			}
		}
	}
	else if (hard_idx) {
		// pass;
	}
	else {
		var order = range (len (nds));
		var target = target.py_replace ('--%3E', '-->');
		var use_idx_mode = false;
	}
	for (var ndi of order) {
		var nd = nds [ndi];
		if (target == nd.h || use_idx_mode && (soft_idx || hard_idx) && ndi == nth_sib) {
			if (depth + 1 == len (unlList)) {
				return tuple ([true, maxdepth, nd]);
			}
			if (maxdepth < depth + 1) {
				var maxdepth = depth + 1;
				var maxp = nd.copy ();
			}
			var __left0__ = g.recursiveUNLFind (unlList, c, depth + 1, nd, maxdepth, maxp, __kwargtrans__ ({soft_idx: soft_idx, hard_idx: hard_idx}));
			var found = __left0__ [0];
			var maxdepth = __left0__ [1];
			var maxp = __left0__ [2];
			if (found) {
				return tuple ([found, maxdepth, maxp]);
			}
		}
	}
	if (depth == 0 && maxp) {
		g.es ('Partial UNL match');
	}
	if (soft_idx && depth + 2 < len (unlList)) {
		var aList = [];
		for (var p of c.all_unique_positions ()) {
			if (any ((function () {
				var __accu0__ = [];
				for (var unl of unlList) {
					__accu0__.append (__in__ (p.h.py_replace ('--%3E', '-->'), unl));
				}
				return __accu0__;
			}) ())) {
				aList.append (tuple ([p.copy (), p.get_UNL (false, false, true)]));
			}
		}
		var maxcount = 0;
		var singleMatch = true;
		for (var iter_unl of aList) {
			var count = 0;
			var compare_list = unlList.__getslice__ (0, null, 1);
			for (var header of py_reversed (iter_unl [1].py_split ('-->'))) {
				if (re.sub (g_pos_pattern, '', header).py_replace ('--%3E', '-->') == compare_list [-(1)]) {
					var count = count + 1;
					compare_list.py_pop (-(1));
				}
				else {
					break;
				}
			}
			if (count > maxcount) {
				var p = iter_unl [0];
				var singleMatch = true;
			}
			else if (count == maxcount) {
				var singleMatch = false;
			}
		}
		if (maxcount && singleMatch) {
			var maxp = p;
			var maxdepth = p.level ();
		}
	}
	return tuple ([false, maxdepth, maxp]);
};
export var recursiveUNLParts = function (text) {
	var pos = re.findall (g_pos_pattern, text);
	if (pos) {
		return tuple ((function () {
			var __accu0__ = [];
			for (var i of pos [0]) {
				__accu0__.append ((i ? int (i) : 0));
			}
			return py_iter (__accu0__);
		}) ());
	}
	return tuple ([null, null, null, null]);
};
export var scanError = function (s) {
	g.app.scanErrors++;
	g.es ('', s);
};
export var scanf = function (s, pat) {
	var count = pat.count ('%s') + pat.count ('%d');
	var pat = pat.py_replace ('%s', '(\\S+)');
	var pat = pat.py_replace ('%d', '(\\d+)');
	var parts = re.py_split (pat, s);
	var result = [];
	for (var part of parts) {
		if (part && len (result) < count) {
			result.append (part);
		}
	}
	return result;
};
export var see_more_lines = function (s, ins, n) {
	if (typeof n == 'undefined' || (n != null && n.hasOwnProperty ("__kwargtrans__"))) {;
		var n = 4;
	};
	if (n > 0) {
		for (var z = 0; z < n; z++) {
			if (ins >= len (s)) {
				break;
			}
			var __left0__ = g.getLine (s, ins);
			var i = __left0__ [0];
			var j = __left0__ [1];
			var ins = j;
		}
	}
	return max (0, min (ins, len (s)));
};
export var splitLines = function (s) {
	if (s) {
		return s.splitlines (true);
	}
	return [];
};
export var splitlines = splitLines;
export var joinLines = function (aList) {
	return ''.join (aList);
};
export var joinlines = joinLines;
export var skip_block_comment = function (s, i) {
	var j = i;
	i += 2;
	var n = len (s);
	var k = s.find ('*/', i);
	if (k == -(1)) {
		g.scanError ('Run on block comment: ' + s.__getslice__ (j, i, 1));
		return n;
	}
	return k + 2;
};
export var skip_braces = function (s, i) {
	var level = 0;
	var n = len (s);
	while (i < n) {
		var c = s [i];
		if (c == '{') {
			level++;
			i++;
		}
		else if (c == '}') {
			level--;
			if (level <= 0) {
				return i;
			}
			i++;
		}
		else if (c == "'" || c == '"') {
			var i = g.skip_string (s, i);
		}
		else if (g.match (s, i, '//')) {
			var i = g.skip_to_end_of_line (s, i);
		}
		else if (g.match (s, i, '/*')) {
			var i = g.skip_block_comment (s, i);
		}
		else if (g.match_word (s, i, '#if') || g.match_word (s, i, '#ifdef') || g.match_word (s, i, '#ifndef')) {
			var __left0__ = g.skip_pp_if (s, i);
			var i = __left0__ [0];
			var delta = __left0__ [1];
			level += delta;
		}
		else {
			i++;
		}
	}
	return i;
};
export var skip_parens = function (s, i) {
	var level = 0;
	var n = len (s);
	while (i < n) {
		var c = s [i];
		if (c == '(') {
			level++;
			i++;
		}
		else if (c == ')') {
			level--;
			if (level <= 0) {
				return i;
			}
			i++;
		}
		else if (c == "'" || c == '"') {
			var i = g.skip_string (s, i);
		}
		else if (g.match (s, i, '//')) {
			var i = g.skip_to_end_of_line (s, i);
		}
		else if (g.match (s, i, '/*')) {
			var i = g.skip_block_comment (s, i);
		}
		else {
			i++;
		}
	}
	return i;
};
export var skip_pascal_begin_end = function (s, i) {
	var level = 1;
	var i = g.skip_c_id (s, i);
	while (i < len (s)) {
		var ch = s [i];
		if (ch == '{') {
			var i = g.skip_pascal_braces (s, i);
		}
		else if (ch == '"' || ch == "'") {
			var i = g.skip_pascal_string (s, i);
		}
		else if (g.match (s, i, '//')) {
			var i = g.skip_line (s, i);
		}
		else if (g.match (s, i, '(*')) {
			var i = g.skip_pascal_block_comment (s, i);
		}
		else if (g.match_c_word (s, i, 'end')) {
			level--;
			if (level == 0) {
				return i;
			}
			var i = g.skip_c_id (s, i);
		}
		else if (g.is_c_id (ch)) {
			var j = i;
			var i = g.skip_c_id (s, i);
			var py_name = s.__getslice__ (j, i, 1);
			if (__in__ (py_name, ['begin', 'case', 'class', 'record', 'try'])) {
				level++;
			}
		}
		else {
			i++;
		}
	}
	return i;
};
export var skip_pascal_block_comment = function (s, i) {
	var j = i;
	var i = s.find ('*)', i);
	if (i > -(1)) {
		return i + 2;
	}
	g.scanError ('Run on comment' + s.__getslice__ (j, i, 1));
	return len (s);
};
export var skip_pascal_string = function (s, i) {
	var j = i;
	var delim = s [i];
	i++;
	while (i < len (s)) {
		if (s [i] == delim) {
			return i + 1;
		}
		i++;
	}
	g.scanError ('Run on string: ' + s.__getslice__ (j, i, 1));
	return i;
};
export var skip_heredoc_string = function (s, i) {
	var j = i;
	var m = re.match ('\\<\\<\\<([a-zA-Z_\\x7f-\\xff][a-zA-Z0-9_\\x7f-\\xff]*)', s.__getslice__ (i, null, 1));
	if (m === null) {
		i += 3;
		return i;
	}
	var delim = m.group (1) + '\n';
	var i = g.skip_line (s, i);
	var n = len (s);
	while (i < n && !(g.match (s, i, delim))) {
		var i = g.skip_line (s, i);
	}
	if (i >= n) {
		g.scanError ('Run on string: ' + s.__getslice__ (j, i, 1));
	}
	else if (g.match (s, i, delim)) {
		i += len (delim);
	}
	return i;
};
export var skip_pp_directive = function (s, i) {
	while (i < len (s)) {
		if (g.is_nl (s, i)) {
			if (g.escaped (s, i)) {
				var i = g.skip_nl (s, i);
			}
			else {
				break;
			}
		}
		else if (g.match (s, i, '//')) {
			var i = g.skip_to_end_of_line (s, i);
		}
		else if (g.match (s, i, '/*')) {
			var i = g.skip_block_comment (s, i);
		}
		else {
			i++;
		}
	}
	return i;
};
export var skip_pp_if = function (s, i) {
	var start_line = g.get_line (s, i);
	var i = g.skip_line (s, i);
	var __left0__ = g.skip_pp_part (s, i);
	var i = __left0__ [0];
	var delta1 = __left0__ [1];
	var i = g.skip_ws (s, i);
	if (g.match_word (s, i, '#else')) {
		var i = g.skip_line (s, i);
		var i = g.skip_ws (s, i);
		var __left0__ = g.skip_pp_part (s, i);
		var i = __left0__ [0];
		var delta2 = __left0__ [1];
		if (delta1 != delta2) {
			g.es ('#if and #else parts have different braces:', start_line);
		}
	}
	var i = g.skip_ws (s, i);
	if (g.match_word (s, i, '#endif')) {
		var i = g.skip_line (s, i);
	}
	else {
		g.es ('no matching #endif:', start_line);
	}
	return tuple ([i, delta1]);
};
export var skip_pp_part = function (s, i) {
	var delta = 0;
	while (i < len (s)) {
		var c = s [i];
		if (g.match_word (s, i, '#if') || g.match_word (s, i, '#ifdef') || g.match_word (s, i, '#ifndef')) {
			var __left0__ = g.skip_pp_if (s, i);
			var i = __left0__ [0];
			var delta1 = __left0__ [1];
			delta += delta1;
		}
		else if (g.match_word (s, i, '#else') || g.match_word (s, i, '#endif')) {
			return tuple ([i, delta]);
		}
		else if (c == "'" || c == '"') {
			var i = g.skip_string (s, i);
		}
		else if (c == '{') {
			delta++;
			i++;
		}
		else if (c == '}') {
			delta--;
			i++;
		}
		else if (g.match (s, i, '//')) {
			var i = g.skip_line (s, i);
		}
		else if (g.match (s, i, '/*')) {
			var i = g.skip_block_comment (s, i);
		}
		else {
			i++;
		}
	}
	return tuple ([i, delta]);
};
export var skip_python_string = function (s, i, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
	if (g.match (s, i, "'''") || g.match (s, i, '"""')) {
		var j = i;
		var delim = s [i] * 3;
		i += 3;
		var k = s.find (delim, i);
		if (k > -(1)) {
			return k + 3;
		}
		if (verbose) {
			g.scanError ('Run on triple quoted string: ' + s.__getslice__ (j, i, 1));
		}
		return len (s);
	}
	return g.skip_string (s, i, __kwargtrans__ ({verbose: verbose}));
};
export var skip_string = function (s, i, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
	var j = i;
	var delim = s [i];
	i++;
	var n = len (s);
	while (i < n && s [i] != delim) {
		if (s [i] == '\\') {
			i += 2;
		}
		else {
			i++;
		}
	}
	if (i >= n) {
		if (verbose) {
			g.scanError ('Run on string: ' + s.__getslice__ (j, i, 1));
		}
	}
	else if (s [i] == delim) {
		i++;
	}
	return i;
};
export var skip_to_semicolon = function (s, i) {
	var n = len (s);
	while (i < n) {
		var c = s [i];
		if (c == ';') {
			return i;
		}
		if (c == "'" || c == '"') {
			var i = g.skip_string (s, i);
		}
		else if (g.match (s, i, '//')) {
			var i = g.skip_to_end_of_line (s, i);
		}
		else if (g.match (s, i, '/*')) {
			var i = g.skip_block_comment (s, i);
		}
		else {
			i++;
		}
	}
	return i;
};
export var skip_typedef = function (s, i) {
	var n = len (s);
	while (i < n && g.is_c_id (s [i])) {
		var i = g.skip_c_id (s, i);
		var i = g.skip_ws_and_nl (s, i);
	}
	if (g.match (s, i, '{')) {
		var i = g.skip_braces (s, i);
		var i = g.skip_to_semicolon (s, i);
	}
	return i;
};
export var escaped = function (s, i) {
	var count = 0;
	while (i - 1 >= 0 && s [i - 1] == '\\') {
		count++;
		i--;
	}
	return __mod__ (count, 2) == 1;
};
export var find_line_start = function (s, i) {
	if (i < 0) {
		return 0;
	}
	var i = s.rfind ('\n', 0, i + 1);
	return (i == -(1) ? 0 : i + 1);
};
export var find_on_line = function (s, i, pattern) {
	var j = s.find ('\n', i);
	if (j == -(1)) {
		var j = len (s);
	}
	var k = s.find (pattern, i, j);
	return k;
};
export var is_c_id = function (ch) {
	return g.isWordChar (ch);
};
export var is_nl = function (s, i) {
	return i < len (s) && (s [i] == '\n' || s [i] == '\r');
};
export var is_special = function (s, directive) {
	var lws = __in__ (directive, tuple (['@others', '@all']));
	var pattern = (lws ? '^\\s*(%s\\b)' : '^(%s\\b)');
	var pattern = re.compile (__mod__ (pattern, directive), re.MULTILINE);
	var m = re.search (pattern, s);
	if (m) {
		return tuple ([true, m.start (1)]);
	}
	return tuple ([false, -(1)]);
};
export var is_ws = function (c) {
	return c == '\t' || c == ' ';
};
export var is_ws_or_nl = function (s, i) {
	return g.is_nl (s, i) || i < len (s) && g.is_ws (s [i]);
};
export var match = function (s, i, pattern) {
	return s && pattern && s.find (pattern, i, i + len (pattern)) == i;
};
export var match_c_word = function (s, i, py_name) {
	var n = len (py_name);
	return py_name && py_name == s.__getslice__ (i, i + n, 1) && (i + n == len (s) || !(g.is_c_id (s [i + n])));
};
export var match_ignoring_case = function (s1, s2) {
	return s1 && s2 && s1.lower () == s2.lower ();
};
export var match_word = function (s, i, pattern) {
	if (pattern === null) {
		return false;
	}
	if (i > 0 && g.isWordChar (s [i - 1])) {
		return false;
	}
	var j = len (pattern);
	if (j == 0) {
		return false;
	}
	if (s.find (pattern, i, i + j) != i) {
		return false;
	}
	if (i + j >= len (s)) {
		return true;
	}
	var ch = s [i + j];
	return !(g.isWordChar (ch));
};
export var skip_blank_lines = function (s, i) {
	while (i < len (s)) {
		if (g.is_nl (s, i)) {
			var i = g.skip_nl (s, i);
		}
		else if (g.is_ws (s [i])) {
			var j = g.skip_ws (s, i);
			if (g.is_nl (s, j)) {
				var i = j;
			}
			else {
				break;
			}
		}
		else {
			break;
		}
	}
	return i;
};
export var skip_c_id = function (s, i) {
	var n = len (s);
	while (i < n && g.isWordChar (s [i])) {
		i++;
	}
	return i;
};
export var skip_id = function (s, i, chars) {
	if (typeof chars == 'undefined' || (chars != null && chars.hasOwnProperty ("__kwargtrans__"))) {;
		var chars = null;
	};
	var chars = (chars ? g.toUnicode (chars) : '');
	var n = len (s);
	while (i < n && (g.isWordChar (s [i]) || __in__ (s [i], chars))) {
		i++;
	}
	return i;
};
export var skip_line = function (s, i) {
	if (i >= len (s)) {
		return len (s);
	}
	if (i < 0) {
		var i = 0;
	}
	var i = s.find ('\n', i);
	if (i == -(1)) {
		return len (s);
	}
	return i + 1;
};
export var skip_to_end_of_line = function (s, i) {
	if (i >= len (s)) {
		return len (s);
	}
	if (i < 0) {
		var i = 0;
	}
	var i = s.find ('\n', i);
	if (i == -(1)) {
		return len (s);
	}
	return i;
};
export var skip_to_start_of_line = function (s, i) {
	if (i >= len (s)) {
		return len (s);
	}
	if (i <= 0) {
		return 0;
	}
	var i = s.rfind ('\n', 0, i);
	if (i == -(1)) {
		return 0;
	}
	return i + 1;
};
export var skip_long = function (s, i) {
	var val = 0;
	var i = g.skip_ws (s, i);
	var n = len (s);
	if (i >= n || !(s [i].isdigit ()) && !__in__ (s [i], '+-')) {
		return tuple ([i, null]);
	}
	var j = i;
	if (__in__ (s [i], '+-')) {
		i++;
	}
	while (i < n && s [i].isdigit ()) {
		i++;
	}
	try {
		var val = int (s.__getslice__ (j, i, 1));
		return tuple ([i, val]);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			return tuple ([i, null]);
		}
		else {
			throw __except0__;
		}
	}
};
export var skip_nl = function (s, i) {
	if (g.match (s, i, '\r\n')) {
		return i + 2;
	}
	if (g.match (s, i, '\n') || g.match (s, i, '\r')) {
		return i + 1;
	}
	return i;
};
export var skip_non_ws = function (s, i) {
	var n = len (s);
	while (i < n && !(g.is_ws (s [i]))) {
		i++;
	}
	return i;
};
export var skip_pascal_braces = function (s, i) {
	if (i == -(1)) {
		return len (s);
	}
	return s.find ('}', i);
};
export var skip_to_char = function (s, i, ch) {
	var j = s.find (ch, i);
	if (j == -(1)) {
		return tuple ([len (s), s.__getslice__ (i, null, 1)]);
	}
	return tuple ([j, s.__getslice__ (i, j, 1)]);
};
export var skip_ws = function (s, i) {
	var n = len (s);
	while (i < n && g.is_ws (s [i])) {
		i++;
	}
	return i;
};
export var skip_ws_and_nl = function (s, i) {
	var n = len (s);
	while (i < n && (g.is_ws (s [i]) || g.is_nl (s, i))) {
		i++;
	}
	return i;
};
export var backupGitIssues = function (c, base_url) {
	if (typeof base_url == 'undefined' || (base_url != null && base_url.hasOwnProperty ("__kwargtrans__"))) {;
		var base_url = null;
	};
	if (base_url === null) {
		var base_url = 'https://api.github.com/repos/leo-editor/leo-editor/issues';
	}
	var root = c.lastTopLevel ().insertAfter ();
	root.h = 'Backup of issues: {}'.format (time.strftime ('%Y/%m/%d'));
	var label_list = [];
	GitIssueController ().backup_issues (base_url, c, label_list, root);
	root.expand ();
	c.selectPosition (root);
	c.redraw ();
	g.trace ('done');
};
export var execGitCommand = function (command, directory) {
	if (typeof directory == 'undefined' || (directory != null && directory.hasOwnProperty ("__kwargtrans__"))) {;
		var directory = null;
	};
	var git_dir = g.os_path_finalize_join (directory, '.git');
	if (!(g.os_path_exists (git_dir))) {
		g.trace ('not found:', git_dir, g.callers ());
		return [];
	}
	if (__in__ ('\n', command)) {
		g.trace ('removing newline from', command);
		var command = command.py_replace ('\n', '');
	}
	var old_dir = os.path.normpath (os.path.abspath (os.curdir));
	if (directory) {
		os.chdir (directory);
	}
	try {
		var p = subprocess.Popen (shlex.py_split (command), __kwargtrans__ ({stdout: subprocess.PIPE, stderr: null, shell: false}));
		var __left0__ = p.communicate ();
		var out = __left0__ [0];
		var err = __left0__ [1];
		var lines = (function () {
			var __accu0__ = [];
			for (var z of g.splitLines (out || [])) {
				__accu0__.append (g.toUnicode (z));
			}
			return __accu0__;
		}) ();
	}
	finally {
		os.chdir (old_dir);
	}
	return lines;
};
export var getGitIssues = function (c, base_url, label_list, milestone, state) {
	if (typeof base_url == 'undefined' || (base_url != null && base_url.hasOwnProperty ("__kwargtrans__"))) {;
		var base_url = null;
	};
	if (typeof label_list == 'undefined' || (label_list != null && label_list.hasOwnProperty ("__kwargtrans__"))) {;
		var label_list = null;
	};
	if (typeof milestone == 'undefined' || (milestone != null && milestone.hasOwnProperty ("__kwargtrans__"))) {;
		var milestone = null;
	};
	if (typeof state == 'undefined' || (state != null && state.hasOwnProperty ("__kwargtrans__"))) {;
		var state = null;
	};
	if (base_url === null) {
		var base_url = 'https://api.github.com/repos/leo-editor/leo-editor/issues';
	}
	if (isinstance (label_list, tuple ([list, tuple]))) {
		var root = c.lastTopLevel ().insertAfter ();
		root.h = (milestone ? 'Issues for ' + milestone : 'Backup');
		GitIssueController ().backup_issues (base_url, c, label_list, root);
		root.expand ();
		c.selectPosition (root);
		c.redraw ();
		g.trace ('done');
	}
	else {
		g.trace ('label_list must be a list or tuple', repr (label_list));
	}
};
export var GitIssueController =  __class__ ('GitIssueController', [object], {
	__module__: __name__,
	get backup_issues () {return __get__ (this, function (self, base_url, c, label_list, root, state) {
		if (typeof state == 'undefined' || (state != null && state.hasOwnProperty ("__kwargtrans__"))) {;
			var state = null;
		};
		self.base_url = base_url;
		self.root = root;
		self.milestone = null;
		if (label_list) {
			for (var state of tuple (['closed', 'open'])) {
				for (var label of label_list) {
					self.get_one_issue (label, state);
				}
			}
		}
		else if (state === null) {
			for (var state of tuple (['closed', 'open'])) {
				var organizer = root.insertAsLastChild ();
				organizer.h = '{} issues...'.format (state);
				self.get_all_issues (label_list, organizer, state);
			}
		}
		else if (__in__ (state, tuple (['closed', 'open']))) {
			self.get_all_issues (label_list, root, state);
		}
		else {
			g.es_print ('state must be in (None, "open", "closed")');
		}
	});},
	get get_all_issues () {return __get__ (this, function (self, label_list, root, state, limit) {
		if (typeof limit == 'undefined' || (limit != null && limit.hasOwnProperty ("__kwargtrans__"))) {;
			var limit = 100;
		};
	});},
	get get_issues () {return __get__ (this, function (self, base_url, label_list, milestone, root, state) {
		self.base_url = base_url;
		self.milestone = milestone;
		self.root = root;
		for (var label of label_list) {
			self.get_one_issue (label, state);
		}
	});},
	get get_one_issue () {return __get__ (this, function (self, label, state, limit) {
		if (typeof limit == 'undefined' || (limit != null && limit.hasOwnProperty ("__kwargtrans__"))) {;
			var limit = 20;
		};
	});},
	get get_one_page () {return __get__ (this, function (self, label, page, r, root) {
		if (self.milestone) {
			var aList = (function () {
				var __accu0__ = [];
				for (var z of r.json ()) {
					if (z.py_get ('milestone') !== null && self.milestone == z.py_get ('milestone').py_get ('title')) {
						__accu0__.append (z);
					}
				}
				return __accu0__;
			}) ();
		}
		else {
			var aList = (function () {
				var __accu0__ = [];
				for (var z of r.json ()) {
					__accu0__.append (z);
				}
				return __accu0__;
			}) ();
		}
		for (var d of aList) {
			var __left0__ = tuple ([d.py_get ('number'), d.py_get ('title')]);
			var n = __left0__ [0];
			var title = __left0__ [1];
			var html_url = d.py_get ('html_url') || self.base_url;
			var p = root.insertAsNthChild (0);
			p.h = '#{}: {}'.format (n, title);
			p.b = '{}\n\n'.format (html_url);
			p.b += d.py_get ('body').strip ();
		}
		var link = r.headers.py_get ('Link');
		var done = !(link) || link.find ('rel="next"') == -(1);
		return tuple ([done, len (aList)]);
	});},
	get print_header () {return __get__ (this, function (self, r) {
		if (0) {
			print ('Link', r.headers.py_get ('Link'));
		}
		else {
			for (var key of r.headers) {
				print ('{}: {}'.format (key, r.headers.py_get (key)));
			}
		}
	});}
});
export var getGitVersion = function (directory) {
	if (typeof directory == 'undefined' || (directory != null && directory.hasOwnProperty ("__kwargtrans__"))) {;
		var directory = null;
	};
	var trace = __in__ ('git', g.app.debug);
	try {
		var s = subprocess.check_output ('git log -n 1 --date=iso', __kwargtrans__ ({cwd: directory || g.app.loadDir, stderr: subprocess.DEVNULL, shell: true}));
		if (trace) {
			g.trace (s);
		}
	}
	catch (__except0__) {
		if (isinstance (__except0__, subprocess.CalledProcessError)) {
			var e = __except0__;
			var s = e.output;
			if (trace) {
				g.trace ('return code', e.returncode);
				g.trace ('value', repr (s));
				g.es_print ('Exception in g.getGitVersion');
				g.es_exception ();
			}
			var s = g.toUnicode (s);
			if (!(isinstance (s, str))) {
				return tuple (['', '', '']);
			}
		}
		else if (isinstance (__except0__, Exception)) {
			if (trace) {
				g.es_print ('Exception in g.getGitVersion');
				g.es_exception ();
			}
			return tuple (['', '', '']);
		}
		else {
			throw __except0__;
		}
	}
	var info = (function () {
		var __accu0__ = [];
		for (var z of s.splitlines ()) {
			__accu0__.append (g.toUnicode (z));
		}
		return __accu0__;
	}) ();
	var find = function (kind) {
		for (var z of info) {
			if (z.startswith (kind)) {
				return z.lstrip (kind).lstrip (':').strip ();
			}
		}
		return '';
	};
	return tuple ([find ('Author'), find ('commit').__getslice__ (0, 10, 1), find ('Date')]);
};
export var gitBranchName = function (path) {
	if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
		var path = null;
	};
	var __left0__ = g.gitInfo (path);
	var branch = __left0__ [0];
	var commit = __left0__ [1];
	return branch;
};
export var gitCommitNumber = function (path) {
	if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
		var path = null;
	};
	var __left0__ = g.gitInfo (path);
	var branch = __left0__ [0];
	var commit = __left0__ [1];
	return commit;
};
export var gitInfoForFile = function (filename) {
	return g.gitInfo (filename);
};
export var gitInfoForOutline = function (c) {
	return g.gitInfoForFile (c.fileName ());
};
export var gitDescribe = function (path) {
	if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
		var path = null;
	};
	var describe = g.execGitCommand ('git describe --tags --long', path);
	var __left0__ = describe [0].rsplit ('-', 2);
	var tag = __left0__ [0];
	var distance = __left0__ [1];
	var commit = __left0__ [2];
	if (__in__ ('g', commit.__getslice__ (0, null, 1))) {
		var commit = commit.__getslice__ (1, null, 1);
	}
	var commit = commit.rstrip ();
	return tuple ([tag, distance, commit]);
};
export var gitHeadPath = function (path) {
	return null;
};
export var gitInfo = function (path) {
	if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
		var path = null;
	};
	var __left0__ = tuple (['', '']);
	var branch = __left0__ [0];
	var commit = __left0__ [1];
	if (path === null) {
		var path = os.path.dirname ('c:/vs-code-devel/leojs4/leoGlobals.py');
	}
	if (!(os.path.isdir (path))) {
		var path = os.path.dirname (path);
	}
	var path = g.gitHeadPath (path);
	if (!(path)) {
		return tuple ([branch, commit]);
	}
	try {
		var f = open (path);
		try {
			f.__enter__ ();
			var s = f.read ();
			if (!(s.startswith ('ref'))) {
				var branch = 'None';
				var commit = s.__getslice__ (0, 7, 1);
				return tuple ([branch, commit]);
			}
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
		var pointer = s.py_split () [1];
		var dirs = pointer.py_split ('/');
		var branch = dirs [-(1)];
	}
	catch (__except0__) {
		if (isinstance (__except0__, IOError)) {
			g.trace ('can not open:', path);
			return tuple ([branch, commit]);
		}
		else {
			throw __except0__;
		}
	}
	var git_dir = g.os_path_finalize_join (path, '..');
	try {
		var path = g.os_path_finalize_join (git_dir, pointer);
		var f = open (path);
		try {
			f.__enter__ ();
			var s = f.read ();
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
		var commit = s.strip ().__getslice__ (0, 12, 1);
	}
	catch (__except0__) {
		if (isinstance (__except0__, IOError)) {
			try {
				var path = g.os_path_finalize_join (git_dir, 'packed-refs');
				var f = open (path);
				try {
					f.__enter__ ();
					for (var line of f) {
						if (line.strip ().endswith (' ' + pointer)) {
							var commit = line.py_split () [0].__getslice__ (0, 12, 1);
							break;
						}
					}
					f.__exit__ ();
				}
				catch (__except1__) {
					if (! (f.__exit__ (__except1__.name, __except1__, __except1__.stack))) {
						throw __except1__;
					}
				}
			}
			catch (__except1__) {
				if (isinstance (__except1__, IOError)) {
					// pass;
				}
				else {
					throw __except1__;
				}
			}
		}
		else {
			throw __except0__;
		}
	}
	return tuple ([branch, commit]);
};
export var dummy_act_on_node = function (c, p, event) {
	// pass;
};
export var act_on_node = dummy_act_on_node;
export var childrenModifiedSet = set ();
export var contentModifiedSet = set ();
export var doHook = function (tag) {
	var args = tuple ([].slice.apply (arguments).slice (1));
	if (g.app.killed || g.app.hookError) {
		return null;
	}
	if (args) {
		g.pr ('***ignoring args param.  tag = {}'.format (tag));
	}
	if (!(g.app.config.use_plugins)) {
		if (__in__ (tag, tuple (['open0', 'start1']))) {
			g.warning ('Plugins disabled: use_plugins is 0 in a leoSettings.leo file.');
		}
		return null;
	}
	var c = keywords.py_get ('c');
	var f = c && c.hookFunction || g.app.hookFunction;
	if (!(f)) {
		var __left0__ = g.app.pluginsController.doPlugins;
		g.app.hookFunction = __left0__;
		var f = __left0__;
	}
	try {
		return f (tag, keywords);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			g.es_exception ();
			g.app.hookError = true;
			g.app.idle_time_hooks_enabled = false;
			return null;
		}
		else {
			throw __except0__;
		}
	}
};
export var loadOnePlugin = function (pluginName, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = false;
	};
	var pc = g.app.pluginsController;
	return pc.loadOnePlugin (pluginName, __kwargtrans__ ({verbose: verbose}));
};
export var registerExclusiveHandler = function (tags, fn) {
	var pc = g.app.pluginsController;
	return pc.registerExclusiveHandler (tags, fn);
};
export var registerHandler = function (tags, fn) {
	var pc = g.app.pluginsController;
	return pc.registerHandler (tags, fn);
};
export var plugin_signon = function (module_name, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = false;
	};
	var pc = g.app.pluginsController;
	return pc.plugin_signon (module_name, verbose);
};
export var unloadOnePlugin = function (moduleOrFileName, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = false;
	};
	var pc = g.app.pluginsController;
	return pc.unloadOnePlugin (moduleOrFileName, verbose);
};
export var unregisterHandler = function (tags, fn) {
	var pc = g.app.pluginsController;
	return pc.unregisterHandler (tags, fn);
};
export var getHandlersForTag = function (tags) {
	var pc = g.app.pluginsController;
	return pc.getHandlersForTag (tags);
};
export var getLoadedPlugins = function () {
	var pc = g.app.pluginsController;
	return pc.getLoadedPlugins ();
};
export var getPluginModule = function (moduleName) {
	var pc = g.app.pluginsController;
	return pc.getPluginModule (moduleName);
};
export var pluginIsLoaded = function (fn) {
	var pc = g.app.pluginsController;
	return pc.isLoaded (fn);
};
export var disableIdleTimeHook = function () {
	g.app.idle_time_hooks_enabled = false;
};
export var enableIdleTimeHook = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	g.app.idle_time_hooks_enabled = true;
};
export var IdleTime = function (handler, delay, tag) {
	if (typeof delay == 'undefined' || (delay != null && delay.hasOwnProperty ("__kwargtrans__"))) {;
		var delay = 500;
	};
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = null;
	};
	try {
		return g.app.gui.idleTimeClass (handler, delay, tag);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			return null;
		}
		else {
			throw __except0__;
		}
	}
};
export var idleTimeHookHandler = function (timer) {
	g.es_print ('Replaced by IdleTimeManager.on_idle');
	g.trace (g.callers ());
};
export var cantImport = function (moduleName, pluginName, verbose) {
	if (typeof pluginName == 'undefined' || (pluginName != null && pluginName.hasOwnProperty ("__kwargtrans__"))) {;
		var pluginName = null;
	};
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
	var s = 'Can not import {}'.format (moduleName);
	if (pluginName) {
		var s = s + ' from {}'.format (pluginName);
	}
	if (!(g.app) || !(g.app.gui)) {
		print (s);
	}
	else if (g.unitTesting) {
		return ;
	}
	else {
		g.warning ('', s);
	}
};
export var import_module = function (py_name, package) {
	if (typeof package == 'undefined' || (package != null && package.hasOwnProperty ("__kwargtrans__"))) {;
		var package = null;
	};
	var trace = true || __in__ ('plugins', g.app.debug);
	var exceptions = [];
	try {
		var m = importlib.import_module (py_name, __kwargtrans__ ({package: package}));
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			var e = __except0__;
			var m = null;
			if (trace) {
				var __left0__ = sys.exc_info ();
				var t = __left0__ [0];
				var v = __left0__ [1];
				var tb = __left0__ [2];
				var v = v || str (t);
				if (!__in__ (v, exceptions)) {
					exceptions.append (v);
					g.trace ('Can not import {}: {}'.format (py_name, e));
				}
			}
		}
		else {
			throw __except0__;
		}
	}
	return m;
};
export var convertPythonIndexToRowCol = function (s, i) {
	if (!(s) || i <= 0) {
		return tuple ([0, 0]);
	}
	var i = min (i, len (s));
	var row = s.count ('\n', 0, i);
	if (row == 0) {
		return tuple ([row, i]);
	}
	var prevNL = s.rfind ('\n', 0, i);
	return tuple ([row, (i - prevNL) - 1]);
};
export var convertRowColToPythonIndex = function (s, row, col, lines) {
	if (typeof lines == 'undefined' || (lines != null && lines.hasOwnProperty ("__kwargtrans__"))) {;
		var lines = null;
	};
	if (row < 0) {
		return 0;
	}
	if (lines === null) {
		var lines = g.splitLines (s);
	}
	if (row >= len (lines)) {
		return len (s);
	}
	var col = min (col, len (lines [row]));
	var prev = 0;
	for (var line of lines.__getslice__ (0, row, 1)) {
		prev += len (line);
	}
	return prev + col;
};
export var getWord = function (s, i) {
	if (i >= len (s)) {
		var i = len (s) - 1;
	}
	if (i < 0) {
		var i = 0;
	}
	while ((0 <= i && i < len (s)) && g.isWordChar (s [i])) {
		i--;
	}
	i++;
	var j = i;
	while ((0 <= j && j < len (s)) && g.isWordChar (s [j])) {
		j++;
	}
	return tuple ([i, j]);
};
export var getLine = function (s, i) {
	if (i > len (s)) {
		var i = len (s) - 1;
	}
	if (i < 0) {
		var i = 0;
	}
	var j = s.rfind ('\n', 0, i);
	if (j == -(1)) {
		var j = 0;
	}
	else {
		j++;
	}
	var k = s.find ('\n', i);
	if (k == -(1)) {
		var k = len (s);
	}
	else {
		var k = k + 1;
	}
	return tuple ([j, k]);
};
export var toPythonIndex = function (s, index) {
	if (index === null) {
		return 0;
	}
	if (isinstance (index, int)) {
		return index;
	}
	if (index == '1.0') {
		return 0;
	}
	if (index == 'end') {
		return len (s);
	}
	var data = index.py_split ('.');
	if (len (data) == 2) {
		var __left0__ = data;
		var row = __left0__ [0];
		var col = __left0__ [1];
		var __left0__ = tuple ([int (row), int (col)]);
		var row = __left0__ [0];
		var col = __left0__ [1];
		var i = g.convertRowColToPythonIndex (s, row - 1, col);
		return i;
	}
	g.trace ('bad string index: {}'.format (index));
	return 0;
};
export var flatten_list = function* (obj) {
	if (isinstance (obj, dict) && obj.py_get ('_join_list')) {
		var indent = obj.py_get ('indent') || '';
		var leading = obj.py_get ('leading') || '';
		var sep = obj.py_get ('sep') || '';
		var trailing = obj.py_get ('trailing') || '';
		var aList = obj.py_get ('aList');
		for (var [i, item] of enumerate (aList)) {
			if (leading) {
				yield leading;
			}
			for (var s of flatten_list (item)) {
				if (indent && s.startswith ('\n')) {
					yield ('\n' + indent) + s.__getslice__ (1, null, 1);
				}
				else {
					yield s;
				}
			}
			if (sep && i < len (aList) - 1) {
				yield sep;
			}
			if (trailing) {
				yield trailing;
			}
		}
	}
	else if (isinstance (obj, tuple ([list, tuple]))) {
		for (var obj2 of obj) {
			for (var s of flatten_list (obj2)) {
				yield s;
			}
		}
	}
	else if (obj) {
		if (isinstance (obj, str)) {
			yield obj;
		}
		else {
			yield repr (obj);
		}
	}
	else {
		// pass;
	}
	};
export var join_list = function (aList, indent, leading, sep, trailing) {
	if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
		var indent = '';
	};
	if (typeof leading == 'undefined' || (leading != null && leading.hasOwnProperty ("__kwargtrans__"))) {;
		var leading = '';
	};
	if (typeof sep == 'undefined' || (sep != null && sep.hasOwnProperty ("__kwargtrans__"))) {;
		var sep = '';
	};
	if (typeof trailing == 'undefined' || (trailing != null && trailing.hasOwnProperty ("__kwargtrans__"))) {;
		var trailing = '';
	};
	if (!(aList)) {
		return null;
	}
	if (indent || leading || sep || trailing) {
		return dict ({'_join_list': true, 'aList': aList, 'indent': indent, 'leading': leading, 'sep': sep, 'trailing': trailing});
	}
	return aList;
};
export var list_to_string = function (obj) {
	return ''.join ((function () {
		var __accu0__ = [];
		for (var z of flatten_list (obj)) {
			__accu0__.append (z);
		}
		return __accu0__;
	}) ());
};
export var isascii = function (s) {
	return all ((function () {
		var __accu0__ = [];
		for (var ch of s) {
			__accu0__.append (ord (ch) < 128);
		}
		return py_iter (__accu0__);
	}) ());
};
export var angleBrackets = function (s) {
	var lt = '<<';
	var rt = '>>';
	return (lt + s) + rt;
};
export var virtual_event_name = angleBrackets;
export var ensureLeadingNewlines = function (s, n) {
	var s = g.removeLeading (s, '\t\n\r ');
	return '\n' * n + s;
};
export var ensureTrailingNewlines = function (s, n) {
	var s = g.removeTrailing (s, '\t\n\r ');
	return s + '\n' * n;
};
export var longestCommonPrefix = function (s1, s2) {
	var prefix = '';
	for (var ch of s1) {
		if (s2.startswith (prefix + ch)) {
			var prefix = prefix + ch;
		}
		else {
			return prefix;
		}
	}
	return prefix;
};
export var itemsMatchingPrefixInList = function (s, aList, matchEmptyPrefix) {
	if (typeof matchEmptyPrefix == 'undefined' || (matchEmptyPrefix != null && matchEmptyPrefix.hasOwnProperty ("__kwargtrans__"))) {;
		var matchEmptyPrefix = false;
	};
	if (s) {
		var pmatches = (function () {
			var __accu0__ = [];
			for (var a of aList) {
				if (a.startswith (s)) {
					__accu0__.append (a);
				}
			}
			return __accu0__;
		}) ();
	}
	else if (matchEmptyPrefix) {
		var pmatches = aList.__getslice__ (0, null, 1);
	}
	else {
		var pmatches = [];
	}
	if (pmatches) {
		pmatches.py_sort ();
		var common_prefix = reduce (g.longestCommonPrefix, pmatches);
	}
	else {
		var common_prefix = '';
	}
	return tuple ([pmatches, common_prefix]);
};
export var removeLeading = function (s, chars) {
	var i = 0;
	while (i < len (s) && __in__ (s [i], chars)) {
		i++;
	}
	return s.__getslice__ (i, null, 1);
};
export var removeTrailing = function (s, chars) {
	var i = len (s) - 1;
	while (i >= 0 && __in__ (s [i], chars)) {
		i--;
	}
	i++;
	return s.__getslice__ (0, i, 1);
};
export var stripBrackets = function (s) {
	if (s.startswith ('<')) {
		var s = s.__getslice__ (1, null, 1);
	}
	if (s.endswith ('>')) {
		var s = s.__getslice__ (0, -(1), 1);
	}
	return s;
};
export var unCamel = function (s) {
	var __left0__ = tuple ([[], []]);
	var result = __left0__ [0];
	var word = __left0__ [1];
	for (var ch of s) {
		if (ch.isalpha () && ch.isupper ()) {
			if (word) {
				result.append (''.join (word));
			}
			var word = [ch];
		}
		else if (ch.isalpha ()) {
			word.append (ch);
		}
		else if (word) {
			result.append (''.join (word));
			var word = [];
		}
	}
	if (word) {
		result.append (''.join (word));
	}
	return result;
};
export var checkUnicode_dict = dict ({});
export var checkUnicode = function (s, encoding) {
	if (typeof encoding == 'undefined' || (encoding != null && encoding.hasOwnProperty ("__kwargtrans__"))) {;
		var encoding = null;
	};
	if (isinstance (s, str)) {
		return s;
	}
	var tag = 'g.checkUnicode';
	if (!(isinstance (s, bytes))) {
		g.error ('{}: unexpected argument: {}'.format (tag, s));
		return '';
	}
	var callers = g.callers (1);
	if (!__in__ (callers, checkUnicode_dict)) {
		g.trace (g.callers ());
		g.error ('\n{}: expected unicode. got: {}\n'.format (tag, s));
		checkUnicode_dict [callers] = true;
	}
	if (!(encoding)) {
		var encoding = 'utf-8';
	}
	try {
		var s = s.decode (encoding, 'strict');
	}
	catch (__except0__) {
		if (isinstance (__except0__, tuple ([UnicodeDecodeError, UnicodeError]))) {
			var s = s.decode (encoding, 'replace');
			g.trace (g.callers ());
			g.error ('{}: unicode error. encoding: {}, s:\n{}'.format (tag, encoding, s));
		}
		else if (isinstance (__except0__, Exception)) {
			g.trace (g.callers ());
			g.es_excption ();
			g.error ('{}: unexpected error! encoding: {}, s:\n{}'.format (tag, encoding, s));
		}
		else {
			throw __except0__;
		}
	}
	return s;
};
export var getPythonEncodingFromString = function (s) {
	var encoding = null;
	var __left0__ = tuple (['# -*- coding:', '-*-']);
	var tag = __left0__ [0];
	var tag2 = __left0__ [1];
	var __left0__ = tuple ([len (tag), len (tag2)]);
	var n1 = __left0__ [0];
	var n2 = __left0__ [1];
	if (s) {
		var s = g.toUnicode (s, __kwargtrans__ ({encoding: 'ascii', reportErrors: false}));
		var lines = g.splitLines (s);
		var line1 = lines [0].strip ();
		if (line1.startswith (tag) && line1.endswith (tag2)) {
			var e = line1.__getslice__ (n1, -(n2), 1).strip ();
			if (e && g.isValidEncoding (e)) {
				var encoding = e;
			}
		}
		else if (g.match_word (line1, 0, '@first')) {
			var line1 = line1.__getslice__ (len ('@first'), null, 1).strip ();
			if (line1.startswith (tag) && line1.endswith (tag2)) {
				var e = line1.__getslice__ (n1, -(n2), 1).strip ();
				if (e && g.isValidEncoding (e)) {
					var encoding = e;
				}
			}
		}
	}
	return encoding;
};
export var isBytes = function (s) {
	return isinstance (s, bytes);
};
export var isCallable = function (obj) {
	return hasattr (obj, '__call__');
};
export var isInt = function (obj) {
	return isinstance (obj, int);
};
export var isList = function (s) {
	return isinstance (s, list);
};
export var isString = function (s) {
	return isinstance (s, str);
};
export var isUnicode = function (s) {
	return isinstance (s, str);
};
export var isValidEncoding = function (encoding) {
	if (!(encoding)) {
		return false;
	}
	if (sys.platform == 'cli') {
		return true;
	}
};
export var isWordChar = function (ch) {
	return ch && (ch.isalnum () || ch == '_');
};
export var isWordChar1 = function (ch) {
	return ch && (ch.isalpha () || ch == '_');
};
export var stripBOM = function (s) {
	var table = tuple ([tuple ([4, 'utf-32', codecs.BOM_UTF32_BE]), tuple ([4, 'utf-32', codecs.BOM_UTF32_LE]), tuple ([3, 'utf-8', codecs.BOM_UTF8]), tuple ([2, 'utf-16', codecs.BOM_UTF16_BE]), tuple ([2, 'utf-16', codecs.BOM_UTF16_LE])]);
	if (s) {
		for (var [n, e, bom] of table) {
			if (bom == s.__getslice__ (0, len (bom), 1)) {
				return tuple ([e, s.__getslice__ (len (bom), null, 1)]);
			}
		}
	}
	return tuple ([null, s]);
};
export var toEncodedString = function (s, encoding, reportErrors) {
	if (typeof encoding == 'undefined' || (encoding != null && encoding.hasOwnProperty ("__kwargtrans__"))) {;
		var encoding = 'utf-8';
	};
	if (typeof reportErrors == 'undefined' || (reportErrors != null && reportErrors.hasOwnProperty ("__kwargtrans__"))) {;
		var reportErrors = false;
	};
	if (!(g.isUnicode (s))) {
		return s;
	}
	if (!(encoding)) {
		var encoding = 'utf-8';
	}
	try {
		var s = s.encode (encoding, 'strict');
	}
	catch (__except0__) {
		if (isinstance (__except0__, UnicodeError)) {
			var s = s.encode (encoding, 'replace');
			if (reportErrors) {
				g.error ('Error converting {} from unicode to {} encoding'.format (s, encoding));
			}
		}
		else {
			throw __except0__;
		}
	}
	return s;
};
export var unicode_warnings = dict ({});
export var toUnicode = function (s, encoding, reportErrors) {
	if (typeof encoding == 'undefined' || (encoding != null && encoding.hasOwnProperty ("__kwargtrans__"))) {;
		var encoding = null;
	};
	if (typeof reportErrors == 'undefined' || (reportErrors != null && reportErrors.hasOwnProperty ("__kwargtrans__"))) {;
		var reportErrors = false;
	};
	if (isinstance (s, str)) {
		return s;
	}
	var tag = 'g.toUnicode';
	if (!(isinstance (s, bytes))) {
		if (!(isinstance (s, tuple ([NullObject, TracingNullObject])))) {
			var callers = g.callers ();
			if (!__in__ (callers, unicode_warnings)) {
				unicode_warnings [callers] = true;
				g.error ('{}: unexpected argument of type {}'.format (tag, s.__class__.__name__));
				g.trace (callers);
			}
		}
		return '';
	}
	if (!(encoding)) {
		var encoding = 'utf-8';
	}
	try {
		var s = s.decode (encoding, 'strict');
	}
	catch (__except0__) {
		if (isinstance (__except0__, tuple ([UnicodeDecodeError, UnicodeError]))) {
			var s = s.decode (encoding, 'replace');
			if (reportErrors) {
				g.error ('{}: unicode error. encoding: {}, s:\n{}'.format (tag, encoding, s));
				g.trace (g.callers ());
			}
		}
		else if (isinstance (__except0__, Exception)) {
			g.es_exception ();
			g.error ('{}: unexpected error! encoding: {}, s:\n{}'.format (tag, encoding, s));
			g.trace (g.callers ());
		}
		else {
			throw __except0__;
		}
	}
	return s;
};
export var u = function (s) {
	return s;
};
export var computeLeadingWhitespace = function (width, tab_width) {
	if (width <= 0) {
		return '';
	}
	if (tab_width > 1) {
		var tabs = int (width / tab_width);
		var blanks = int (__mod__ (width, tab_width));
		return '\t' * tabs + ' ' * blanks;
	}
	return ' ' * width;
};
export var computeLeadingWhitespaceWidth = function (s, tab_width) {
	var w = 0;
	for (var ch of s) {
		if (ch == ' ') {
			w++;
		}
		else if (ch == '\t') {
			w += abs (tab_width) - __mod__ (w, abs (tab_width));
		}
		else {
			break;
		}
	}
	return w;
};
export var computeWidth = function (s, tab_width) {
	var w = 0;
	for (var ch of s) {
		if (ch == '\t') {
			w += abs (tab_width) - __mod__ (w, abs (tab_width));
		}
		else if (ch == '\n') {
			break;
		}
		else {
			w++;
		}
	}
	return w;
};
export var adjustTripleString = function (s, tab_width) {
	var lines = g.splitLines (s);
	var __left0__ = tuple ([true, 0]);
	var first = __left0__ [0];
	var w = __left0__ [1];
	for (var line of lines) {
		if (line.strip ()) {
			var lws = g.get_leading_ws (line);
			var w2 = abs (g.computeWidth (lws, tab_width));
			if (w2 == 0) {
				return s;
			}
			if (first || w2 < w) {
				var w = w2;
				var first = false;
			}
		}
	}
	if (w == 0) {
		return s;
	}
	var result = (function () {
		var __accu0__ = [];
		for (var line of lines) {
			__accu0__.append (g.removeLeadingWhitespace (line, w, tab_width));
		}
		return __accu0__;
	}) ();
	var result = ''.join (result);
	return result;
};
export var removeExtraLws = function (s, tab_width) {
	var lines = g.splitLines (s);
	var __break0__ = false;
	for (var line of lines) {
		if (line.strip ()) {
			var lws = g.get_leading_ws (line);
			var w = g.computeWidth (lws, tab_width);
			__break0__ = true;
			break;
		}
	}
	if (!__break0__) {
		return s;
	}
	var result = (function () {
		var __accu0__ = [];
		for (var line of lines) {
			__accu0__.append (g.removeLeadingWhitespace (line, w, tab_width));
		}
		return __accu0__;
	}) ();
	var result = ''.join (result);
	return result;
};
export var wrap_lines = function (lines, pageWidth, firstLineWidth) {
	if (typeof firstLineWidth == 'undefined' || (firstLineWidth != null && firstLineWidth.hasOwnProperty ("__kwargtrans__"))) {;
		var firstLineWidth = null;
	};
	if (pageWidth < 10) {
		var pageWidth = 10;
	}
	if (!(firstLineWidth)) {
		var firstLineWidth = pageWidth;
	}
	if (firstLineWidth < 10) {
		var firstLineWidth = 10;
	}
	var outputLineWidth = firstLineWidth;
	var sentenceSpacingWidth = 1;
	var result = [];
	var line = '';
	for (var s of lines) {
		var i = 0;
		while (i < len (s)) {
			var j = g.skip_ws (s, i);
			var k = g.skip_non_ws (s, j);
			var word = s.__getslice__ (j, k, 1);
			var i = k;
			var wordLen = len (word);
			if (line.endswith ('.') || line.endswith ('?') || line.endswith ('!')) {
				var space = ' ' * sentenceSpacingWidth;
			}
			else {
				var space = ' ';
			}
			if (line && wordLen > 0) {
				wordLen += len (space);
			}
			if (wordLen + len (line) <= outputLineWidth) {
				if (wordLen > 0) {
					if (line) {
						var line = space.join (tuple ([line, word]));
					}
					else {
						var line = word;
					}
				}
				else {
					// pass;
				}
			}
			else {
				if (line) {
					result.append (line);
					var outputLineWidth = pageWidth;
				}
				var line = word;
				if (len (line) > pageWidth) {
					result.append (line);
					var outputLineWidth = pageWidth;
					var line = '';
				}
			}
		}
	}
	if (line) {
		result.append (line);
	}
	return result;
};
export var get_leading_ws = function (s) {
	var i = 0;
	var n = len (s);
	while (i < n && __in__ (s [i], tuple ([' ', '\t']))) {
		i++;
	}
	return s.__getslice__ (0, i, 1);
};
export var optimizeLeadingWhitespace = function (line, tab_width) {
	var __left0__ = g.skip_leading_ws_with_indent (line, 0, tab_width);
	var i = __left0__ [0];
	var width = __left0__ [1];
	var s = g.computeLeadingWhitespace (width, tab_width) + line.__getslice__ (i, null, 1);
	return s;
};
export var regularizeTrailingNewlines = function (s, kind) {
	// pass;
};
export var removeBlankLines = function (s) {
	var lines = g.splitLines (s);
	var lines = (function () {
		var __accu0__ = [];
		for (var z of lines) {
			if (z.strip ()) {
				__accu0__.append (z);
			}
		}
		return __accu0__;
	}) ();
	return ''.join (lines);
};
export var removeLeadingBlankLines = function (s) {
	var lines = g.splitLines (s);
	var result = [];
	var remove = true;
	for (var line of lines) {
		if (remove && !(line.strip ())) {
			// pass;
		}
		else {
			var remove = false;
			result.append (line);
		}
	}
	return ''.join (result);
};
export var removeLeadingWhitespace = function (s, first_ws, tab_width) {
	var j = 0;
	var ws = 0;
	var first_ws = abs (first_ws);
	for (var ch of s) {
		if (ws >= first_ws) {
			break;
		}
		else if (ch == ' ') {
			j++;
			ws++;
		}
		else if (ch == '\t') {
			j++;
			ws += abs (tab_width) - __mod__ (ws, abs (tab_width));
		}
		else {
			break;
		}
	}
	if (j > 0) {
		var s = s.__getslice__ (j, null, 1);
	}
	return s;
};
export var removeTrailingWs = function (s) {
	var j = len (s) - 1;
	while (j >= 0 && (s [j] == ' ' || s [j] == '\t')) {
		j--;
	}
	return s.__getslice__ (0, j + 1, 1);
};
export var skip_leading_ws = function (s, i, ws, tab_width) {
	var count = 0;
	while (count < ws && i < len (s)) {
		var ch = s [i];
		if (ch == ' ') {
			count++;
			i++;
		}
		else if (ch == '\t') {
			count += abs (tab_width) - __mod__ (count, abs (tab_width));
			i++;
		}
		else {
			break;
		}
	}
	return i;
};
export var skip_leading_ws_with_indent = function (s, i, tab_width) {
	var count = 0;
	var n = len (s);
	while (i < n) {
		var ch = s [i];
		if (ch == ' ') {
			count++;
			i++;
		}
		else if (ch == '\t') {
			count += abs (tab_width) - __mod__ (count, abs (tab_width));
			i++;
		}
		else {
			break;
		}
	}
	return tuple ([i, count]);
};
export var stripBlankLines = function (s) {
	var lines = g.splitLines (s);
	for (var [i, line] of enumerate (lines)) {
		var j = g.skip_ws (line, 0);
		if (j >= len (line)) {
			lines [i] = '';
		}
		else if (line [j] == '\n') {
			lines [i] = '\n';
		}
	}
	return ''.join (lines);
};
export var doKeywordArgs = function (py_keys, d) {
	if (typeof d == 'undefined' || (d != null && d.hasOwnProperty ("__kwargtrans__"))) {;
		var d = null;
	};
	if (d === null) {
		var d = dict ({});
	}
	var result = dict ({});
	for (var [key, default_val] of d.py_items ()) {
		var isBool = __in__ (default_val, tuple ([true, false]));
		var val = py_keys.py_get (key);
		if (isBool && __in__ (val, tuple ([true, 'True', 'true']))) {
			result [key] = true;
		}
		else if (isBool && __in__ (val, tuple ([false, 'False', 'false']))) {
			result [key] = false;
		}
		else if (val === null) {
			result [key] = default_val;
		}
		else {
			result [key] = val;
		}
	}
	return result;
};
export var ecnl = function (tabName) {
	if (typeof tabName == 'undefined' || (tabName != null && tabName.hasOwnProperty ("__kwargtrans__"))) {;
		var tabName = 'Log';
	};
	g.ecnls (1, tabName);
};
export var ecnls = function (n, tabName) {
	if (typeof tabName == 'undefined' || (tabName != null && tabName.hasOwnProperty ("__kwargtrans__"))) {;
		var tabName = 'Log';
	};
	var log = app.log;
	if (log && !(log.isNull)) {
		while (log.newlines < n) {
			g.enl (tabName);
		}
	}
};
export var enl = function (tabName) {
	if (typeof tabName == 'undefined' || (tabName != null && tabName.hasOwnProperty ("__kwargtrans__"))) {;
		var tabName = 'Log';
	};
	var log = app.log;
	if (log && !(log.isNull)) {
		log.newlines++;
		log.putnl (tabName);
	}
};
export var blue = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	g.es_print (...args, __kwargtrans__ (__mergekwargtrans__ ({color: 'blue'}, py_keys)));
};
export var error = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	g.es_print (...args, __kwargtrans__ (__mergekwargtrans__ ({color: 'error'}, py_keys)));
};
export var note = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	g.es_print (...args, __kwargtrans__ (__mergekwargtrans__ ({color: 'note'}, py_keys)));
};
export var red = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	g.es_print (...args, __kwargtrans__ (__mergekwargtrans__ ({color: 'red'}, py_keys)));
};
export var warning = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	g.es_print (...args, __kwargtrans__ (__mergekwargtrans__ ({color: 'warning'}, py_keys)));
};
export var es = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	if (!(app) || app.killed) {
		return ;
	}
	if (app.gui && app.gui.consoleOnly) {
		return ;
	}
	var log = app.log;
	var d = dict ({'color': null, 'commas': false, 'newline': true, 'spaces': true, 'tabName': 'Log', 'nodeLink': null});
	var d = g.doKeywordArgs (py_keys, d);
	var color = d.py_get ('color');
	if (color == 'suppress') {
		return ;
	}
	var color = g.actualColor (color);
	var tabName = d.py_get ('tabName') || 'Log';
	var newline = d.py_get ('newline');
	var s = g.translateArgs (args, d);
	if (app.batchMode) {
		if (app.log) {
			app.log.put (s);
		}
	}
	else if (g.unitTesting) {
		if (log && !(log.isNull)) {
			g.pr (s, __kwargtrans__ ({newline: newline}));
		}
	}
	else if (log && app.logInited) {
		if (newline) {
			s += '\n';
		}
		log.put (s, __kwargtrans__ ({color: color, tabName: tabName, nodeLink: d ['nodeLink']}));
		for (var ch of s) {
			if (ch == '\n') {
				log.newlines++;
			}
			else {
				log.newlines = 0;
			}
		}
	}
	else {
		app.logWaiting.append (tuple ([s, color, newline, d]));
	}
};
export var log = es;
export var es_clickable_link = function (c, p, line_number, message) {
	var log = c.frame.log;
	var unl = p.get_UNL (__kwargtrans__ ({with_proto: true, with_count: true}));
	if (unl) {
		var nodeLink = '{},{}'.format (unl, line_number);
		log.put (message, __kwargtrans__ ({nodeLink: nodeLink}));
	}
	else {
		log.put (message);
	}
};
export var es_debug = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	py_keys ['color'] = 'blue';
	try {
		var f1 = sys._getframe (1);
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
	g.pr (py_name, ...args, __kwargtrans__ (py_keys));
	if (!(g.app.unitTesting)) {
		g.es (py_name, ...args, __kwargtrans__ (py_keys));
	}
};
export var es_dump = function (s, n, title) {
	if (typeof n == 'undefined' || (n != null && n.hasOwnProperty ("__kwargtrans__"))) {;
		var n = 30;
	};
	if (typeof title == 'undefined' || (title != null && title.hasOwnProperty ("__kwargtrans__"))) {;
		var title = null;
	};
	if (title) {
		g.es_print ('', title);
	}
	var i = 0;
	while (i < len (s)) {
		var aList = ''.join ((function () {
			var __accu0__ = [];
			for (var ch of s.__getslice__ (i, i + n, 1)) {
				__accu0__.append ('{} '.format (ord (ch)));
			}
			return __accu0__;
		}) ());
		g.es_print ('', aList);
		i += n;
	}
};
export var es_error = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	var color = py_keys.py_get ('color');
	if (color === null && g.app.config) {
		py_keys ['color'] = g.app.config.getColor ('log-error-color') || 'red';
	}
	g.es (...args, __kwargtrans__ (py_keys));
};
export var es_print_error = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	var color = py_keys.py_get ('color');
	if (color === null && g.app.config) {
		py_keys ['color'] = g.app.config.getColor ('log-error-color') || 'red';
	}
	g.es_print (...args, __kwargtrans__ (py_keys));
};
export var es_event_exception = function (eventName, full) {
	if (typeof full == 'undefined' || (full != null && full.hasOwnProperty ("__kwargtrans__"))) {;
		var full = false;
	};
	g.es ('exception handling ', eventName, 'event');
	var __left0__ = sys.exc_info ();
	var typ = __left0__ [0];
	var val = __left0__ [1];
	var tb = __left0__ [2];
	if (full) {
		var errList = traceback.format_exception (typ, val, tb);
	}
	else {
		var errList = traceback.format_exception_only (typ, val);
	}
	for (var i of errList) {
		g.es ('', i);
	}
	if (!(g.stdErrIsRedirected ())) {
		traceback.print_exc ();
	}
};
export var es_exception = function (full, c, color) {
	if (typeof full == 'undefined' || (full != null && full.hasOwnProperty ("__kwargtrans__"))) {;
		var full = true;
	};
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	if (typeof color == 'undefined' || (color != null && color.hasOwnProperty ("__kwargtrans__"))) {;
		var color = 'red';
	};
	var __left0__ = sys.exc_info ();
	var typ = __left0__ [0];
	var val = __left0__ [1];
	var tb = __left0__ [2];
	if (full) {
		var lines = traceback.format_exception (typ, val, tb);
	}
	else {
		var lines = traceback.format_exception_only (typ, val);
	}
	for (var line of lines) {
		g.es_print_error (line, __kwargtrans__ ({color: color}));
	}
	var __left0__ = g.getLastTracebackFileAndLineNumber ();
	var fileName = __left0__ [0];
	var n = __left0__ [1];
	return tuple ([fileName, n]);
};
export var es_exception_type = function (c, color) {
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	if (typeof color == 'undefined' || (color != null && color.hasOwnProperty ("__kwargtrans__"))) {;
		var color = 'red';
	};
	var __left0__ = sys.exc_info ().__getslice__ (0, 2, 1);
	var exctype = __left0__ [0];
	var value = __left0__ [1];
	g.es_print ('', '{}, {}'.format (exctype.__name__, value), __kwargtrans__ ({color: color}));
};
export var es_print = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	g.pr (...args, __kwargtrans__ (py_keys));
	if (g.app && !(g.app.unitTesting)) {
		g.es (...args, __kwargtrans__ (py_keys));
	}
};
export var es_print_exception = function (full, c, color) {
	if (typeof full == 'undefined' || (full != null && full.hasOwnProperty ("__kwargtrans__"))) {;
		var full = true;
	};
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	if (typeof color == 'undefined' || (color != null && color.hasOwnProperty ("__kwargtrans__"))) {;
		var color = 'red';
	};
	var __left0__ = sys.exc_info ();
	var typ = __left0__ [0];
	var val = __left0__ [1];
	var tb = __left0__ [2];
	if (full) {
		var lines = traceback.format_exception (typ, val, tb);
	}
	else {
		var lines = traceback.format_exception_only (typ, val);
	}
	print (''.join (lines));
	try {
		var __left0__ = g.getLastTracebackFileAndLineNumber ();
		var fileName = __left0__ [0];
		var n = __left0__ [1];
		return tuple ([fileName, n]);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			return tuple (['<no file>', 0]);
		}
		else {
			throw __except0__;
		}
	}
};
export var es_trace = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	if (args) {
		try {
			var s = args [0];
			g.trace (g.toEncodedString (s, 'ascii'));
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				// pass;
			}
			else {
				throw __except0__;
			}
		}
	}
	g.es (...args, __kwargtrans__ (py_keys));
};
export var getLastTracebackFileAndLineNumber = function () {
	var __left0__ = sys.exc_info ();
	var typ = __left0__ [0];
	var val = __left0__ [1];
	var tb = __left0__ [2];
	if (typ == SyntaxError) {
		return tuple ([val.filename, val.lineno]);
	}
	var data = traceback.extract_tb (tb);
	if (data) {
		var item = data [-(1)];
		var __left0__ = item;
		var filename = __left0__ [0];
		var n = __left0__ [1];
		var functionName = __left0__ [2];
		var text = __left0__ [3];
		return tuple ([filename, n]);
	}
	return tuple (['<string>', 0]);
};
export var goto_last_exception = function (c) {
	var __left0__ = sys.exc_info ();
	var typ = __left0__ [0];
	var val = __left0__ [1];
	var tb = __left0__ [2];
	if (tb) {
		var __left0__ = g.getLastTracebackFileAndLineNumber ();
		var file_name = __left0__ [0];
		var line_number = __left0__ [1];
		var line_number = max (0, line_number - 1);
		if (file_name.endswith ('scriptFile.py')) {
			c.goToScriptLineNumber (line_number, c.p);
		}
		else {
			for (var p of c.all_nodes ()) {
				if (p.isAnyAtFileNode () && p.h.endswith (file_name)) {
					c.goToLineNumber (line_number, p);
					return ;
				}
			}
		}
	}
	else {
		g.trace ('No previous exception');
	}
};
export var internalError = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	var callers = g.callers (20).py_split (',');
	var caller = callers [-(1)];
	g.error ('\nInternal Leo error in', caller);
	g.es_print (...args);
	g.es_print ('Called from', ', '.join (callers.__getslice__ (0, -(1), 1)));
	g.es_print ("Please report this error to Leo's developers", __kwargtrans__ ({color: 'red'}));
};
export var log_to_file = function (s, fn) {
	if (typeof fn == 'undefined' || (fn != null && fn.hasOwnProperty ("__kwargtrans__"))) {;
		var fn = null;
	};
	if (fn === null) {
		var fn = g.os_path_expanduser ('~/test/leo_log.txt');
	}
	if (!(s.endswith ('\n'))) {
		var s = s + '\n';
	}
	try {
		var f = open (fn, 'a');
		try {
			f.__enter__ ();
			f.write (s);
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			g.es_exception ();
		}
		else {
			throw __except0__;
		}
	}
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
export var prettyPrintType = function (obj) {
	if (isinstance (obj, str)) {
		return 'string';
	}
	var t = py_typeof (obj);
	if (__in__ (t, tuple ([types.BuiltinFunctionType, types.FunctionType]))) {
		return 'function';
	}
	if (t == types.ModuleType) {
		return 'module';
	}
	if (__in__ (t, [types.MethodType, types.BuiltinMethodType])) {
		return 'method';
	}
	var t = str (py_typeof (obj));
	if (t.startswith ("<type '")) {
		var t = t.__getslice__ (7, null, 1);
	}
	if (t.endswith ("'>")) {
		var t = t.__getslice__ (0, -(2), 1);
	}
	return t;
};
export var print_bindings = function (py_name, window) {
	var bindings = window.bind ();
	g.pr ('\nBindings for', py_name);
	for (var b of bindings) {
		g.pr (b);
	}
};
export var printEntireTree = function (c, tag) {
	if (typeof tag == 'undefined' || (tag != null && tag.hasOwnProperty ("__kwargtrans__"))) {;
		var tag = '';
	};
	g.pr ('printEntireTree', '=' * 50);
	g.pr ('printEntireTree', tag, 'root', c.rootPosition ());
	for (var p of c.all_positions ()) {
		g.pr ('..' * p.level (), p.v);
	}
};
export var printGlobals = function (message) {
	if (typeof message == 'undefined' || (message != null && message.hasOwnProperty ("__kwargtrans__"))) {;
		var message = null;
	};
	var globs = list (__all__);
	globs.py_sort ();
	if (message) {
		var leader = '-' * 10;
		g.pr (leader, ' ', message, ' ', leader);
	}
	for (var py_name of globs) {
		g.pr (py_name);
	}
};
export var printLeoModules = function (message) {
	if (typeof message == 'undefined' || (message != null && message.hasOwnProperty ("__kwargtrans__"))) {;
		var message = null;
	};
	var mods = [];
	for (var py_name of sys.modules) {
		if (py_name && py_name.__getslice__ (0, 3, 1) == 'leo') {
			mods.append (py_name);
		}
	}
	if (message) {
		var leader = '-' * 10;
		g.pr (leader, ' ', message, ' ', leader);
	}
	mods.py_sort ();
	for (var m of mods) {
		g.pr (m, __kwargtrans__ ({newline: false}));
	}
	g.pr ('');
};
export var printStack = function () {
	traceback.print_stack ();
};
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
export var console_encoding = null;
export var translateArgs = function (args, d) {
	if (!(console_encoding)) {
		var e = sys.getdefaultencoding ();
		console_encoding = (isValidEncoding (e) ? e : 'utf-8');
	}
	var result = [];
	var n = 0;
	var spaces = d.py_get ('spaces');
	for (var arg of args) {
		n++;
		if (isinstance (arg, str)) {
			var arg = toUnicode (arg, console_encoding);
		}
		if (!(isString (arg))) {
			var arg = repr (arg);
		}
		else if (__mod__ (n, 2) == 1) {
			var arg = translateString (arg);
		}
		else {
			// pass;
		}
		if (arg) {
			if (result && spaces) {
				result.append (' ');
			}
			result.append (arg);
		}
	}
	return ''.join (result);
};
export var translateString = function (s) {
	var upper = app && getattr (app, 'translateToUpperCase', null);
	if (!(isinstance (s, str))) {
		var s = str (s, 'utf-8');
	}
	if (upper) {
		var s = s.upper ();
	}
	else {
		var s = gettext.gettext (s);
	}
	return s;
};
export var tr = translateString;
export var actualColor = function (color) {
	var c = g.app.log && g.app.log.c;
	if (!(c) || !(c.config)) {
		return color;
	}
	if (color && color.startswith ('#')) {
		return color;
	}
	if (color === null) {
		var color2 = c.config.getColor ('log-text-foreground-color');
		if (color2) {
			return color2;
		}
		var color2 = c.config.getColor ('log-black-color');
		return color2 || 'black';
	}
	if (color == 'black') {
		var color2 = c.config.getColor ('log-black-color');
		if (color2) {
			return color2;
		}
		var color2 = c.config.getColor ('log-text-foreground-color');
		return color2 || 'black';
	}
	var color2 = c.config.getColor ('log_{}_color'.format (color));
	return color2 || color;
};
export var CheckVersion = function (s1, s2, condition, stringCompare, delimiter, trace) {
	if (typeof condition == 'undefined' || (condition != null && condition.hasOwnProperty ("__kwargtrans__"))) {;
		var condition = '>=';
	};
	if (typeof stringCompare == 'undefined' || (stringCompare != null && stringCompare.hasOwnProperty ("__kwargtrans__"))) {;
		var stringCompare = null;
	};
	if (typeof delimiter == 'undefined' || (delimiter != null && delimiter.hasOwnProperty ("__kwargtrans__"))) {;
		var delimiter = '.';
	};
	if (typeof trace == 'undefined' || (trace != null && trace.hasOwnProperty ("__kwargtrans__"))) {;
		var trace = false;
	};
	var vals1 = (function () {
		var __accu0__ = [];
		for (var s of s1.py_split (delimiter)) {
			__accu0__.append (g.CheckVersionToInt (s));
		}
		return __accu0__;
	}) ();
	var n1 = len (vals1);
	var vals2 = (function () {
		var __accu0__ = [];
		for (var s of s2.py_split (delimiter)) {
			__accu0__.append (g.CheckVersionToInt (s));
		}
		return __accu0__;
	}) ();
	var n2 = len (vals2);
	var n = max (n1, n2);
	if (n1 < n) {
		vals1.extend ((function () {
			var __accu0__ = [];
			for (var i = 0; i < n - n1; i++) {
				__accu0__.append (0);
			}
			return __accu0__;
		}) ());
	}
	if (n2 < n) {
		vals2.extend ((function () {
			var __accu0__ = [];
			for (var i = 0; i < n - n2; i++) {
				__accu0__.append (0);
			}
			return __accu0__;
		}) ());
	}
	var __break0__ = false;
	for (var [cond, val] of tuple ([tuple (['==', vals1 == vals2]), tuple (['!=', vals1 != vals2]), tuple (['<', vals1 < vals2]), tuple (['<=', vals1 <= vals2]), tuple (['>', vals1 > vals2]), tuple (['>=', vals1 >= vals2])])) {
		if (condition == cond) {
			var result = val;
			__break0__ = true;
			break;
		}
	}
	if (!__break0__) {
		var __except0__ = EnvironmentError ("condition must be one of '>=', '>', '==', '!=', '<', or '<='.");
		__except0__.__cause__ = null;
		throw __except0__;
	}
	return result;
};
export var CheckVersionToInt = function (s) {
	try {
		return int (s);
	}
	catch (__except0__) {
		if (isinstance (__except0__, ValueError)) {
			var aList = [];
			for (var ch of s) {
				if (ch.isdigit ()) {
					aList.append (ch);
				}
				else {
					break;
				}
			}
			if (aList) {
				var s = ''.join (aList);
				return int (s);
			}
			return 0;
		}
		else {
			throw __except0__;
		}
	}
};
export var choose = function (cond, a, b) {
	if (cond) {
		return a;
	}
	return b;
};
export var cls = command ('cls') (function (event) {
	if (typeof event == 'undefined' || (event != null && event.hasOwnProperty ("__kwargtrans__"))) {;
		var event = null;
	};
	if (sys.platform.lower ().startswith ('win')) {
		os.system ('cls');
	}
});
export var createScratchCommander = function (fileName) {
	if (typeof fileName == 'undefined' || (fileName != null && fileName.hasOwnProperty ("__kwargtrans__"))) {;
		var fileName = null;
	};
	var c = g.app.newCommander (fileName);
	var frame = c.frame;
	frame.createFirstTreeNode ();
	frame.setInitialWindowGeometry ();
	frame.resizePanesToRatio (frame.ratio, frame.secondary_ratio);
};
export var funcToMethod = function (f, theClass, py_name) {
	if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {;
		var py_name = null;
	};
	setattr (theClass, py_name || f.__name__, f);
};
export var init_zodb_import_failed = false;
export var init_zodb_failed = dict ({});
export var init_zodb_db = dict ({});
export var init_zodb = function (pathToZodbStorage, verbose) {
	if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
		var verbose = true;
	};
	var db = init_zodb_db.py_get (pathToZodbStorage);
	if (db) {
		return db;
	}
	if (init_zodb_import_failed) {
		return null;
	}
	var failed = init_zodb_failed.py_get (pathToZodbStorage);
	if (failed) {
		return null;
	}
	try {
		var storage = ZODB.FileStorage.FileStorage (pathToZodbStorage);
		var __left0__ = ZODB.DB (storage);
		init_zodb_db [pathToZodbStorage] = __left0__;
		var db = __left0__;
		return db;
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			if (verbose) {
				g.es ('g.init_zodb: exception creating ZODB.DB instance');
				g.es_exception ();
			}
			init_zodb_failed [pathToZodbStorage] = true;
			return null;
		}
		else {
			throw __except0__;
		}
	}
};
export var isMacOS = function () {
	return sys.platform == 'darwin';
};
export var issueSecurityWarning = function (setting) {
	g.es ('Security warning! Ignoring...', __kwargtrans__ ({color: 'red'}));
	g.es (setting, __kwargtrans__ ({color: 'red'}));
	g.es ('This setting can be set only in');
	g.es ('leoSettings.leo or myLeoSettings.leo');
};
export var makeDict = function () {
	return py_keys;
};
export var pep8_class_name = function (s) {
	return ''.join ((function () {
		var __accu0__ = [];
		for (var z of s.py_split ('_')) {
			if (z) {
				__accu0__.append (z [0].upper () + z.__getslice__ (1, null, 1));
			}
		}
		return __accu0__;
	}) ());
};
if (0) {
	cls ();
	var aList = tuple (['_', '__', '_abc', 'abc_', 'abc', 'abc_xyz', 'AbcPdQ']);
	for (var s of aList) {
		print (pep8_class_name (s));
	}
}
export var plural = function (obj) {
	if (isinstance (obj, tuple ([list, tuple, str]))) {
		var n = len (obj);
	}
	else {
		var n = obj;
	}
	return (n == 1 ? '' : 's');
};
export var truncate = function (s, n) {
	if (len (s) <= n) {
		return s;
	}
	var s2 = s.__getslice__ (0, n - 3, 1) + '...({})'.format (len (s));
	if (s.endswith ('\n')) {
		return s2 + '\n';
	}
	return s2;
};
export var windows = function () {
	return app && app.windowList;
};
export var glob_glob = function (pattern) {
	var aList = glob.glob (pattern);
	if (g.isWindows) {
		var aList = (function () {
			var __accu0__ = [];
			for (var z of aList) {
				__accu0__.append (z.py_replace ('\\', '/'));
			}
			return __accu0__;
		}) ();
	}
	return aList;
};
export var os_path_abspath = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var path = path.py_replace ('\x00', '');
	var path = os.path.abspath (path);
	var path = g.toUnicodeFileEncoding (path);
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_basename = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var path = os.path.basename (path);
	var path = g.toUnicodeFileEncoding (path);
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_dirname = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var path = os.path.dirname (path);
	var path = g.toUnicodeFileEncoding (path);
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_exists = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var path = path.py_replace ('\x00', '');
	return os.path.exists (path);
};
export var deprecated_messages = [];
export var os_path_expandExpression = function (s) {
	var c = py_keys.py_get ('c');
	if (!(c)) {
		g.trace ('can not happen: no c', g.callers ());
		return s;
	}
	var callers = g.callers (2);
	if (!__in__ (callers, deprecated_messages)) {
		deprecated_messages.append (callers);
		g.es_print ('\nos_path_expandExpression is deprecated. called from: {}'.format (callers));
	}
	return c.expand_path_expression (s);
};
export var os_path_expanduser = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var result = os.path.normpath (os.path.expanduser (path));
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return result;
};
export var os_path_finalize = function (path) {
	var path = path.py_replace ('\x00', '');
	var path = os.path.expanduser (path);
	var path = os.path.abspath (path);
	var path = os.path.normpath (path);
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_finalize_join = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	var path = g.os_path_join (...args, __kwargtrans__ (py_keys));
	var path = g.os_path_finalize (path);
	return path;
};
export var os_path_getmtime = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	try {
		return os.path.getmtime (path);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			return 0;
		}
		else {
			throw __except0__;
		}
	}
};
export var os_path_getsize = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	return os.path.getsize (path);
};
export var os_path_isabs = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	return os.path.isabs (path);
};
export var os_path_isdir = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	return os.path.isdir (path);
};
export var os_path_isfile = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	return os.path.isfile (path);
};
export var os_path_join = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	var c = py_keys.py_get ('c');
	var uargs = (function () {
		var __accu0__ = [];
		for (var arg of args) {
			__accu0__.append (g.toUnicodeFileEncoding (arg));
		}
		return __accu0__;
	}) ();
	if (uargs && uargs [0] == '!!') {
		uargs [0] = g.app.loadDir;
	}
	else if (uargs && uargs [0] == '.') {
		var c = py_keys.py_get ('c');
		if (c && c.openDirectory) {
			uargs [0] = c.openDirectory;
		}
	}
	if (uargs) {
		try {
			var path = os.path.join (...uargs);
		}
		catch (__except0__) {
			if (isinstance (__except0__, py_TypeError)) {
				g.trace (uargs, args, py_keys, g.callers ());
				__except0__.__cause__ = null;
				throw __except0__;
			}
			else {
				throw __except0__;
			}
		}
	}
	else {
		var path = '';
	}
	var path = g.toUnicodeFileEncoding (path);
	var path = path.py_replace ('\x00', '');
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_normcase = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var path = os.path.normcase (path);
	var path = g.toUnicodeFileEncoding (path);
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_normpath = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var path = os.path.normpath (path);
	var path = g.toUnicodeFileEncoding (path);
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_normslashes = function (path) {
	if (g.isWindows && path) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_realpath = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var path = os.path.realpath (path);
	var path = g.toUnicodeFileEncoding (path);
	if (g.isWindows) {
		var path = path.py_replace ('\\', '/');
	}
	return path;
};
export var os_path_split = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var __left0__ = os.path.py_split (path);
	var head = __left0__ [0];
	var tail = __left0__ [1];
	var head = g.toUnicodeFileEncoding (head);
	var tail = g.toUnicodeFileEncoding (tail);
	return tuple ([head, tail]);
};
export var os_path_splitext = function (path) {
	var path = g.toUnicodeFileEncoding (path);
	var __left0__ = os.path.splitext (path);
	var head = __left0__ [0];
	var tail = __left0__ [1];
	var head = g.toUnicodeFileEncoding (head);
	var tail = g.toUnicodeFileEncoding (tail);
	return tuple ([head, tail]);
};
export var os_startfile = function (fname) {
	var stderr2log = function (g, ree, fname) {
		while (true) {
			var emsg = ree.read ().decode ('utf-8');
			if (emsg) {
				g.es_print_error ('xdg-open {} caused output to stderr:\n{}'.format (fname, emsg));
			}
			else {
				break;
			}
		}
	};
	var itPoll = function (fname, ree, subPopen, g, ito) {
		stderr2log (g, ree, fname);
		var rc = subPopen.poll ();
		if (!(rc === null)) {
			ito.stop ();
			ito.destroy_self ();
			if (rc != 0) {
				g.es_print ('xdg-open {} failed with exit code {}'.format (fname, rc));
			}
			stderr2log (g, ree, fname);
			ree.close ();
		}
	};
	if (fname.find ('"') > -(1)) {
		var quoted_fname = "'{}'".format (fname);
	}
	else {
		var quoted_fname = '"{}"'.format (fname);
	}
	if (sys.platform.startswith ('win')) {
		os.startfile (quoted_fname);
	}
	else if (sys.platform == 'darwin') {
		try {
			subprocess.call (['open', fname]);
		}
		catch (__except0__) {
			if (isinstance (__except0__, OSError)) {
				// pass;
			}
			else if (isinstance (__except0__, ImportError)) {
				os.system ('open {}'.format (quoted_fname));
			}
			else {
				throw __except0__;
			}
		}
	}
	else {
		try {
			var ree = null;
			var wre = tempfile.NamedTemporaryFile ();
			var ree = io.open (wre.py_name, 'rb', __kwargtrans__ ({buffering: 0}));
		}
		catch (__except0__) {
			if (isinstance (__except0__, IOError)) {
				g.trace ('error opening temp file for {}'.format (fname));
				if (ree) {
					ree.close ();
				}
				return ;
			}
			else {
				throw __except0__;
			}
		}
		try {
			var subPopen = subprocess.Popen (['xdg-open', fname], __kwargtrans__ ({stderr: wre, shell: false}));
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				g.es_print ('error opening {}'.format (fname));
				g.es_exception ();
			}
			else {
				throw __except0__;
			}
		}
		try {
			var itoPoll = g.IdleTime ((function __lambda__ (ito) {
				return itPoll (fname, ree, subPopen, g, ito);
			}), __kwargtrans__ ({delay: 1000}));
			itoPoll.start ();
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				g.es_exception ('exception executing g.startfile for {}'.format (fname));
			}
			else {
				throw __except0__;
			}
		}
	}
};
export var toUnicodeFileEncoding = function (path) {
	if (path && isinstance (path, str)) {
		var path = path.py_replace ('\\', os.sep);
		return g.toUnicode (path);
	}
	return '';
};
export var createTopologyList = function (c, root, useHeadlines) {
	if (typeof root == 'undefined' || (root != null && root.hasOwnProperty ("__kwargtrans__"))) {;
		var root = null;
	};
	if (typeof useHeadlines == 'undefined' || (useHeadlines != null && useHeadlines.hasOwnProperty ("__kwargtrans__"))) {;
		var useHeadlines = false;
	};
	if (!(root)) {
		var root = c.rootPosition ();
	}
	var v = root;
	if (useHeadlines) {
		var aList = [tuple ([v.numberOfChildren (), v.headString ()])];
	}
	else {
		var aList = [v.numberOfChildren ()];
	}
	var child = v.firstChild ();
	while (child) {
		aList.append (g.createTopologyList (c, child, useHeadlines));
		var child = child.py_next ();
	}
	return aList;
};
export var getDocString = function (s) {
	var tags = tuple (['"""', "'''"]);
	var __left0__ = tags;
	var tag1 = __left0__ [0];
	var tag2 = __left0__ [1];
	var __left0__ = tuple ([s.find (tag1), s.find (tag2)]);
	var i1 = __left0__ [0];
	var i2 = __left0__ [1];
	if (i1 == -(1) && i2 == -(1)) {
		return '';
	}
	if (i1 > -(1) && i2 > -(1)) {
		var i = min (i1, i2);
	}
	else {
		var i = max (i1, i2);
	}
	var tag = s.__getslice__ (i, i + 3, 1);
	var j = s.find (tag, i + 3);
	if (j > -(1)) {
		return s.__getslice__ (i + 3, j, 1);
	}
	return '';
};
export var getDocStringForFunction = function (func) {
	var py_name = function (func) {
		return (hasattr (func, '__name__') ? func.__name__ : '<no __name__>');
	};
	var get_defaults = function (func, i) {
		var defaults = inspect.getfullargspec (func) [3];
		return defaults [i];
	};
	var s = '';
	if (py_name (func) == 'minibufferCallback') {
		var func = get_defaults (func, 0);
		if (hasattr (func, 'func.__doc__') && func.__doc__.strip ()) {
			var s = func.__doc__;
		}
	}
	if (!(s) && py_name (func) == 'commonCommandCallback') {
		var script = get_defaults (func, 1);
		var s = g.getDocString (script);
	}
	if (!(s) && hasattr (func, '__doc__')) {
		var s = func.__doc__;
	}
	if (!(s) && hasattr (func, 'docstring')) {
		var s = func.docstring;
	}
	return s;
};
export var python_tokenize = function (s, line_numbers) {
	if (typeof line_numbers == 'undefined' || (line_numbers != null && line_numbers.hasOwnProperty ("__kwargtrans__"))) {;
		var line_numbers = true;
	};
	var __left0__ = tuple ([[], 0, 0]);
	var result = __left0__ [0];
	var i = __left0__ [1];
	var line_number = __left0__ [2];
	while (i < len (s)) {
		var __left0__ = i;
		var progress = __left0__;
		var j = __left0__;
		var ch = s [i];
		if (ch == '\n') {
			var __left0__ = tuple (['nl', i + 1]);
			var kind = __left0__ [0];
			var i = __left0__ [1];
		}
		else if (__in__ (ch, ' \t')) {
			var kind = 'ws';
			while (i < len (s) && __in__ (s [i], ' \t')) {
				i++;
			}
		}
		else if (ch == '#') {
			var __left0__ = tuple (['comment', g.skip_to_end_of_line (s, i)]);
			var kind = __left0__ [0];
			var i = __left0__ [1];
		}
		else if (__in__ (ch, '"\'')) {
			var __left0__ = tuple (['string', g.skip_python_string (s, i, __kwargtrans__ ({verbose: false}))]);
			var kind = __left0__ [0];
			var i = __left0__ [1];
		}
		else if (ch == '_' || ch.isalpha ()) {
			var __left0__ = tuple (['id', g.skip_id (s, i)]);
			var kind = __left0__ [0];
			var i = __left0__ [1];
		}
		else {
			var __left0__ = tuple (['other', i + 1]);
			var kind = __left0__ [0];
			var i = __left0__ [1];
		}
		var val = s.__getslice__ (j, i, 1);
		if (line_numbers) {
			line_number += val.count ('\n');
			result.append (tuple ([kind, val, line_number]));
		}
		else {
			result.append (tuple ([kind, val]));
		}
	}
	return result;
};
export var exec_file = function (path, d, script) {
	if (typeof script == 'undefined' || (script != null && script.hasOwnProperty ("__kwargtrans__"))) {;
		var script = null;
	};
	if (script === null) {
		var f = open (path);
		try {
			f.__enter__ ();
			var script = f.read ();
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
	}
	exec (compile (script, path, 'exec'), d);
};
export var execute_shell_commands = function (commands, trace) {
	if (typeof trace == 'undefined' || (trace != null && trace.hasOwnProperty ("__kwargtrans__"))) {;
		var trace = false;
	};
	if (isinstance (commands, str)) {
		var commands = [commands];
	}
	for (var command of commands) {
		var wait = !(command.startswith ('&'));
		if (trace) {
			g.trace (command);
		}
		if (command.startswith ('&')) {
			var command = command.__getslice__ (1, null, 1).strip ();
		}
		var proc = subprocess.Popen (command, __kwargtrans__ ({shell: true}));
		if (wait) {
			proc.communicate ();
		}
		else {
			if (trace) {
				print ('Start:', proc);
			}
			var proc_poller = function (timer, proc) {
				if (typeof proc == 'undefined' || (proc != null && proc.hasOwnProperty ("__kwargtrans__"))) {;
					var proc = proc;
				};
				var val = proc.poll ();
				if (val !== null) {
					if (trace) {
						print ('  End:', proc, val);
					}
					timer.stop ();
				}
			};
			g.IdleTime (proc_poller, __kwargtrans__ ({delay: 0})).start ();
		}
	}
};
export var execute_shell_commands_with_options = function (base_dir, c, command_setting, commands, path_setting, trace, warning) {
	if (typeof base_dir == 'undefined' || (base_dir != null && base_dir.hasOwnProperty ("__kwargtrans__"))) {;
		var base_dir = null;
	};
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	if (typeof command_setting == 'undefined' || (command_setting != null && command_setting.hasOwnProperty ("__kwargtrans__"))) {;
		var command_setting = null;
	};
	if (typeof commands == 'undefined' || (commands != null && commands.hasOwnProperty ("__kwargtrans__"))) {;
		var commands = null;
	};
	if (typeof path_setting == 'undefined' || (path_setting != null && path_setting.hasOwnProperty ("__kwargtrans__"))) {;
		var path_setting = null;
	};
	if (typeof trace == 'undefined' || (trace != null && trace.hasOwnProperty ("__kwargtrans__"))) {;
		var trace = false;
	};
	if (typeof warning == 'undefined' || (warning != null && warning.hasOwnProperty ("__kwargtrans__"))) {;
		var warning = null;
	};
	var base_dir = g.computeBaseDir (c, base_dir, path_setting, trace);
	if (!(base_dir)) {
		return ;
	}
	var commands = g.computeCommands (c, commands, command_setting, trace);
	if (!(commands)) {
		return ;
	}
	if (warning) {
		g.es_print (warning);
	}
	os.chdir (base_dir);
	g.execute_shell_commands (commands);
};
export var computeBaseDir = function (c, base_dir, path_setting, trace) {
	if (typeof trace == 'undefined' || (trace != null && trace.hasOwnProperty ("__kwargtrans__"))) {;
		var trace = false;
	};
	if (path_setting) {
		if (!(c)) {
			return g.es_print ('@string path_setting requires valid c arg');
		}
		var base_dir2 = c.config.getString (path_setting);
		if (base_dir2) {
			var base_dir2 = base_dir2.py_replace ('\\', '/');
			if (g.os_path_exists (base_dir2)) {
				return base_dir2;
			}
			return g.es_print ('@string {} not found: {}'.format (path_setting, base_dir2));
		}
	}
	if (base_dir) {
		var base_dir = base_dir.py_replace ('\\', '/');
		if (g.os_path_exists (base_dir)) {
			return base_dir;
		}
		return g.es_print ('base_dir not found: {}'.format (base_dir));
	}
	return g.es_print ('Please use @string {}'.format (path_setting));
};
export var computeCommands = function (c, commands, command_setting, trace) {
	if (typeof trace == 'undefined' || (trace != null && trace.hasOwnProperty ("__kwargtrans__"))) {;
		var trace = false;
	};
	if (!(commands) && !(command_setting)) {
		g.es_print ('Please use commands, command_setting or both');
		return [];
	}
	if (command_setting) {
		if (c) {
			var aList = c.config.getData (command_setting);
			return aList || commands;
		}
		g.es_print ('@data command_setting requires valid c arg');
		return [];
	}
	return commands;
};
export var executeFile = function (filename, options) {
	if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
		var options = '';
	};
	if (!(os.access (filename, os.R_OK))) {
		return ;
	}
	var __left0__ = g.os_path_split (filename);
	var fdir = __left0__ [0];
	var fname = __left0__ [1];
	var subprocess_wrapper = function (cmdlst) {
		var p = subprocess.Popen (cmdlst, __kwargtrans__ ({cwd: fdir, universal_newlines: true, stdout: subprocess.PIPE, stderr: subprocess.PIPE}));
		var __left0__ = p.communicate ();
		var stdo = __left0__ [0];
		var stde = __left0__ [1];
		return tuple ([p.wait (), stdo, stde]);
	};
	var __left0__ = subprocess_wrapper ('{} {} {}'.format (sys.executable, fname, options));
	var rc = __left0__ [0];
	var so = __left0__ [1];
	var se = __left0__ [2];
	if (rc) {
		g.pr ('return code', rc);
	}
	g.pr (so, se);
};
export var findNodeInChildren = function (c, p, headline, exact) {
	if (typeof exact == 'undefined' || (exact != null && exact.hasOwnProperty ("__kwargtrans__"))) {;
		var exact = true;
	};
	var p1 = p.copy ();
	var h = headline.strip ();
	for (var p of p1.children ()) {
		if (p.h.strip () == h) {
			return p.copy ();
		}
	}
	if (!(exact)) {
		for (var p of p1.children ()) {
			if (p.h.strip ().startswith (h)) {
				return p.copy ();
			}
		}
	}
	return null;
};
export var findNodeInTree = function (c, p, headline, exact) {
	if (typeof exact == 'undefined' || (exact != null && exact.hasOwnProperty ("__kwargtrans__"))) {;
		var exact = true;
	};
	var h = headline.strip ();
	var p1 = p.copy ();
	for (var p of p1.subtree ()) {
		if (p.h.strip () == h) {
			return p.copy ();
		}
	}
	if (!(exact)) {
		for (var p of p1.subtree ()) {
			if (p.h.strip ().startswith (h)) {
				return p.copy ();
			}
		}
	}
	return null;
};
export var findNodeAnywhere = function (c, headline, exact) {
	if (typeof exact == 'undefined' || (exact != null && exact.hasOwnProperty ("__kwargtrans__"))) {;
		var exact = true;
	};
	var h = headline.strip ();
	for (var p of c.all_unique_positions (__kwargtrans__ ({copy: false}))) {
		if (p.h.strip () == h) {
			return p.copy ();
		}
	}
	if (!(exact)) {
		for (var p of c.all_unique_positions (__kwargtrans__ ({copy: false}))) {
			if (p.h.strip ().startswith (h)) {
				return p.copy ();
			}
		}
	}
	return null;
};
export var findTopLevelNode = function (c, headline, exact) {
	if (typeof exact == 'undefined' || (exact != null && exact.hasOwnProperty ("__kwargtrans__"))) {;
		var exact = true;
	};
	var h = headline.strip ();
	for (var p of c.rootPosition ().self_and_siblings (__kwargtrans__ ({copy: false}))) {
		if (p.h.strip () == h) {
			return p.copy ();
		}
	}
	if (!(exact)) {
		for (var p of c.rootPosition ().self_and_siblings (__kwargtrans__ ({copy: false}))) {
			if (p.h.strip ().startswith (h)) {
				return p.copy ();
			}
		}
	}
	return null;
};
export var getScript = function (c, p, useSelectedText, forcePythonSentinels, useSentinels) {
	if (typeof useSelectedText == 'undefined' || (useSelectedText != null && useSelectedText.hasOwnProperty ("__kwargtrans__"))) {;
		var useSelectedText = true;
	};
	if (typeof forcePythonSentinels == 'undefined' || (forcePythonSentinels != null && forcePythonSentinels.hasOwnProperty ("__kwargtrans__"))) {;
		var forcePythonSentinels = true;
	};
	if (typeof useSentinels == 'undefined' || (useSentinels != null && useSentinels.hasOwnProperty ("__kwargtrans__"))) {;
		var useSentinels = true;
	};
	var w = c.frame.body.wrapper;
	if (!(p)) {
		var p = c.p;
	}
	try {
		if (g.app.inBridge) {
			var s = p.b;
		}
		else if (w && p == c.p && useSelectedText && w.hasSelection ()) {
			var s = w.getSelectedText ();
		}
		else {
			var s = p.b;
		}
		var s = g.removeExtraLws (s, c.tab_width);
		var s = g.extractExecutableString (c, p, s);
		var script = g.composeScript (c, p, s, __kwargtrans__ ({forcePythonSentinels: forcePythonSentinels, useSentinels: useSentinels}));
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			g.es_print ('unexpected exception in g.getScript');
			g.es_exception ();
			var script = '';
		}
		else {
			throw __except0__;
		}
	}
	return script;
};
export var composeScript = function (c, p, s, forcePythonSentinels, useSentinels) {
	if (typeof forcePythonSentinels == 'undefined' || (forcePythonSentinels != null && forcePythonSentinels.hasOwnProperty ("__kwargtrans__"))) {;
		var forcePythonSentinels = true;
	};
	if (typeof useSentinels == 'undefined' || (useSentinels != null && useSentinels.hasOwnProperty ("__kwargtrans__"))) {;
		var useSentinels = true;
	};
	if (!(s.strip ())) {
		return '';
	}
	var at = c.atFileCommands;
	var old_in_script = g.app.inScript;
	try {
		var __left0__ = true;
		g.app.inScript = __left0__;
		g.inScript = __left0__;
		g.app.scriptDict ['script1'] = s;
		var script = at.stringToString (p.copy (), s, __kwargtrans__ ({forcePythonSentinels: forcePythonSentinels, sentinels: useSentinels}));
		var script = script.py_replace ('\r\n', '\n');
		g.app.scriptDict ['script2'] = script;
	}
	finally {
		var __left0__ = old_in_script;
		g.app.inScript = __left0__;
		g.inScript = __left0__;
	}
	return script;
};
export var extractExecutableString = function (c, p, s) {
	if (g.unitTesting) {
		return s;
	}
	var language = g.scanForAtLanguage (c, p);
	if (!(language)) {
		return s;
	}
	var pattern = '^@language\\s+(\\w+)';
	var matches = list (re.finditer (pattern, s, re.MULTILINE));
	if (len (matches) < 2) {
		return s;
	}
	var __left0__ = tuple ([false, []]);
	var extracting = __left0__ [0];
	var result = __left0__ [1];
	for (var [i, line] of enumerate (g.splitLines (s))) {
		var m = re.match (pattern, line);
		if (m) {
			var extracting = m.group (1) == language;
		}
		else if (extracting) {
			result.append (line);
		}
	}
	return ''.join (result);
};
export var handleScriptException = function (c, p, script, script1) {
	g.warning ('exception executing script');
	var full = c.config.getBool ('show-full-tracebacks-in-scripts');
	var __left0__ = g.es_exception (__kwargtrans__ ({full: full}));
	var fileName = __left0__ [0];
	var n = __left0__ [1];
	if (p.v.context == c) {
		try {
			c.goToScriptLineNumber (n, p);
			if (g.os_path_exists (fileName)) {
				var f = open (fileName);
				try {
					f.__enter__ ();
					var lines = f.readlines ();
					f.__exit__ ();
				}
				catch (__except0__) {
					if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
						throw __except0__;
					}
				}
			}
			else {
				var lines = g.splitLines (script);
			}
			var s = '-' * 20;
			g.es_print ('', s);
			var i = max (0, n - 2);
			var j = min (n + 2, len (lines));
			while (i < j) {
				var ch = (i == n - 1 ? '*' : ' ');
				var s = '{} line {}: {}'.format (ch, i + 1, lines [i]);
				g.es ('', s, __kwargtrans__ ({newline: false}));
				i++;
			}
		}
		catch (__except0__) {
			if (isinstance (__except0__, Exception)) {
				g.es_print ('Unexpected exception in g.handleScriptException');
				g.es_exception ();
			}
			else {
				throw __except0__;
			}
		}
	}
};
export var insertCodingLine = function (encoding, script) {
	if (script) {
		var tag = '@first # -*- coding:';
		var lines = g.splitLines (script);
		var __break0__ = false;
		for (var s of lines) {
			if (s.startswith (tag)) {
				__break0__ = true;
				break;
			}
		}
		if (!__break0__) {
			lines.insert (0, '{} {} -*-\n'.format (tag, encoding));
			var script = ''.join (lines);
		}
	}
	return script;
};
export var findTestScript = function (c, h, where, warn) {
	if (typeof where == 'undefined' || (where != null && where.hasOwnProperty ("__kwargtrans__"))) {;
		var where = null;
	};
	if (typeof warn == 'undefined' || (warn != null && warn.hasOwnProperty ("__kwargtrans__"))) {;
		var warn = true;
	};
	if (where) {
		var p = g.findNodeAnywhere (c, where);
		if (p) {
			var p = g.findNodeInTree (c, p, h);
		}
	}
	else {
		var p = g.findNodeAnywhere (c, h);
	}
	if (p) {
		return g.getScript (c, p);
	}
	if (warn) {
		g.trace ('Not found', h);
	}
	return null;
};
export var getTestVars = function () {
	var d = g.app.unitTestDict;
	var c = d.py_get ('c');
	var p = d.py_get ('p');
	d ['getTestVars'] = true;
	return tuple ([c, p && p.copy ()]);
};
export var run_unit_test_in_separate_process = function (command) {
	var leo_editor_dir = os.path.join (g.app.loadDir, '..', '..');
	os.chdir (leo_editor_dir);
	var p = subprocess.Popen (shlex.py_split (command), __kwargtrans__ ({stdout: subprocess.PIPE, stderr: subprocess.PIPE, shell: sys.platform.startswith ('win')}));
	var __left0__ = p.communicate ();
	var out = __left0__ [0];
	var err = __left0__ [1];
	var err = g.toUnicode (err);
	var out = g.toUnicode (out);
	print ('');
	print (command);
	if (out.strip ()) {
		print (out.rstrip ());
	}
	print (err.rstrip ());
	var err_lines = g.splitLines (err.rstrip ());
};
export var toEncodedStringWithErrorCode = function (s, encoding, reportErrors) {
	if (typeof reportErrors == 'undefined' || (reportErrors != null && reportErrors.hasOwnProperty ("__kwargtrans__"))) {;
		var reportErrors = false;
	};
	var ok = true;
	if (g.isUnicode (s)) {
		try {
			var s = s.encode (encoding, 'strict');
		}
		catch (__except0__) {
			if (isinstance (__except0__, UnicodeError)) {
				var s = s.encode (encoding, 'replace');
				if (reportErrors) {
					g.error ('Error converting {} from unicode to {} encoding'.format (s, encoding));
				}
				var ok = false;
			}
			else {
				throw __except0__;
			}
		}
	}
	return tuple ([s, ok]);
};
export var toUnicodeWithErrorCode = function (s, encoding, reportErrors) {
	if (typeof reportErrors == 'undefined' || (reportErrors != null && reportErrors.hasOwnProperty ("__kwargtrans__"))) {;
		var reportErrors = false;
	};
	if (s === null) {
		return tuple (['', true]);
	}
	if (isinstance (s, str)) {
		return tuple ([s, true]);
	}
	try {
		var s = str (s, encoding, 'strict');
		return tuple ([s, true]);
	}
	catch (__except0__) {
		if (isinstance (__except0__, UnicodeError)) {
			var s = str (s, encoding, 'replace');
			if (reportErrors) {
				g.error ('Error converting {} from {} encoding to unicode'.format (s, encoding));
			}
			return tuple ([s, false]);
		}
		else {
			throw __except0__;
		}
	}
};
export var unl_regex = re.compile ('\\bunl:.*$');
export var kinds = '(file|ftp|gopher|http|https|mailto|news|nntp|prospero|telnet|wais)';
export var url_regex = re.compile ('{}://[^\\s\'"]+[\\w=/]'.format (kinds));
export var unquoteUrl = function (url) {
	return urllib.parse.unquote (url);
};
export var computeFileUrl = function (fn, c, p) {
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	if (typeof p == 'undefined' || (p != null && p.hasOwnProperty ("__kwargtrans__"))) {;
		var p = null;
	};
	var url = urllib.parse.unquote (fn);
	var i = url.find ('~');
	if (i > -(1)) {
		var path = url.__getslice__ (i, null, 1);
		var path = g.os_path_expanduser (path);
		var path = g.os_path_finalize (path);
		var url = url.__getslice__ (0, i, 1) + path;
	}
	else {
		var tag = 'file://';
		var tag2 = 'file:///';
		if (sys.platform.startswith ('win') && url.startswith (tag2)) {
			var path = url.__getslice__ (len (tag2), null, 1).lstrip ();
		}
		else if (url.startswith (tag)) {
			var path = url.__getslice__ (len (tag), null, 1).lstrip ();
		}
		else {
			var path = url;
		}
		if (c && c.openDirectory) {
			var base = c.getNodePath (p);
			var path = g.os_path_finalize_join (c.openDirectory, base, path);
		}
		else {
			var path = g.os_path_finalize (path);
		}
		var url = '{}{}'.format (tag, path);
	}
	return url;
};
export var getUrlFromNode = function (p) {
	if (!(p)) {
		return null;
	}
	var c = p.v.context;
	var table = [p.h, (p.b ? g.splitLines (p.b) [0] : '')];
	var table = (function () {
		var __accu0__ = [];
		for (var s of table) {
			__accu0__.append ((g.match_word (s, 0, '@url') ? s.__getslice__ (4, null, 1) : s));
		}
		return __accu0__;
	}) ();
	var table = (function () {
		var __accu0__ = [];
		for (var s of table) {
			if (s.strip ()) {
				__accu0__.append (s.strip ());
			}
		}
		return __accu0__;
	}) ();
	for (var s of table) {
		if (g.isValidUrl (s)) {
			return s;
		}
	}
	for (var s of table) {
		var tag = 'file://';
		var url = computeFileUrl (s, __kwargtrans__ ({c: c, p: p}));
		if (url.startswith (tag)) {
			var fn = url.__getslice__ (len (tag), null, 1).lstrip ();
			var fn = fn.py_split ('#', 1) [0];
			if (g.os_path_isfile (fn)) {
				return 'file://' + s;
			}
		}
	}
	for (var s of table) {
		if (s.startswith ('#')) {
			return s;
		}
	}
	return null;
};
export var handleUrl = function (url, c, p) {
	if (typeof c == 'undefined' || (c != null && c.hasOwnProperty ("__kwargtrans__"))) {;
		var c = null;
	};
	if (typeof p == 'undefined' || (p != null && p.hasOwnProperty ("__kwargtrans__"))) {;
		var p = null;
	};
	if (c && !(p)) {
		var p = c.p;
	}
	var urll = url.lower ();
	if (urll.startswith ('@url')) {
		var url = url.__getslice__ (4, null, 1).lstrip ();
	}
	if (urll.startswith ('unl:' + '//') || urll.startswith ('file://') && url.find ('-->') > -(1) || urll.startswith ('#')) {
		return g.handleUnl (url, c);
	}
	try {
		return g.handleUrlHelper (url, c, p);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			g.es_print ('exception opening', repr (url));
			g.es_exception ();
			return null;
		}
		else {
			throw __except0__;
		}
	}
};
export var handleUrlHelper = function (url, c, p) {
	var tag = 'file://';
	var original_url = url;
	if (url.startswith (tag) && !(url.startswith (tag + '#'))) {
		var url = g.computeFileUrl (url, __kwargtrans__ ({c: c, p: p}));
	}
	var parsed = urlparse.urlparse (url);
	if (parsed.netloc) {
		var leo_path = os.path.join (parsed.netloc, parsed.path);
	}
	else {
		var leo_path = parsed.path;
	}
	if (leo_path.endswith ('\\')) {
		var leo_path = leo_path.__getslice__ (0, -(1), 1);
	}
	if (leo_path.endswith ('/')) {
		var leo_path = leo_path.__getslice__ (0, -(1), 1);
	}
	if (parsed.scheme == 'file' && leo_path.endswith ('.leo')) {
		g.handleUnl (original_url, c);
	}
	else if (__in__ (parsed.scheme, tuple (['', 'file']))) {
		var unquote_path = g.unquoteUrl (leo_path);
		if (g.unitTesting) {
			g.app.unitTestDict ['os_startfile'] = unquote_path;
		}
		else if (g.os_path_exists (leo_path)) {
			g.os_startfile (unquote_path);
		}
		else {
			g.es ("File '{}' does not exist".format (leo_path));
		}
	}
	else {
	}
};
export var traceUrl = function (c, path, parsed, url) {
	print ();
	g.trace ('url          ', url);
	g.trace ('c.frame.title', c.frame.title);
	g.trace ('path         ', path);
	g.trace ('parsed.fragment', parsed.fragment);
	g.trace ('parsed.netloc', parsed.netloc);
	g.trace ('parsed.path  ', parsed.path);
	g.trace ('parsed.scheme', repr (parsed.scheme));
};
export var handleUnl = function (unl, c) {
	if (!(unl)) {
		return null;
	}
	var unll = unl.lower ();
	if (unll.startswith ('unl:' + '//')) {
		var unl = unl.__getslice__ (6, null, 1);
	}
	else if (unll.startswith ('file://')) {
		var unl = unl.__getslice__ (7, null, 1);
	}
	var unl = unl.strip ();
	if (!(unl)) {
		return null;
	}
	var unl = g.unquoteUrl (unl);
	if (unl.find ('#') == -(1) && unl.find ('-->') == -(1)) {
		var __left0__ = tuple ([unl, null]);
		var path = __left0__ [0];
		var unl = __left0__ [1];
	}
	else if (unl.find ('#') == -(1)) {
		g.recursiveUNLSearch (unl.py_split ('-->'), c, __kwargtrans__ ({soft_idx: true}));
		return c;
	}
	else {
		var __left0__ = unl.py_split ('#', 1);
		var path = __left0__ [0];
		var unl = __left0__ [1];
	}
	if (!(path)) {
		g.recursiveUNLSearch (unl.py_split ('-->'), c, __kwargtrans__ ({soft_idx: true}));
		return c;
	}
	if (c) {
		var base = g.os_path_dirname (c.fileName ());
		var c_path = g.os_path_finalize_join (base, path);
	}
	else {
		var c_path = null;
	}
	var table = tuple ([c_path, g.os_path_finalize_join (g.app.loadDir, '..', path), g.os_path_finalize_join (g.app.loadDir, '..', '..', path), g.os_path_finalize_join (g.app.loadDir, '..', 'core', path), g.os_path_finalize_join (g.app.loadDir, '..', 'config', path), g.os_path_finalize_join (g.app.loadDir, '..', 'dist', path), g.os_path_finalize_join (g.app.loadDir, '..', 'doc', path), g.os_path_finalize_join (g.app.loadDir, '..', 'test', path), g.app.loadDir, g.app.homeDir]);
	var __break0__ = false;
	for (var path2 of table) {
		if (path2 && path2.lower ().endswith ('.leo') && os.path.exists (path2)) {
			var path = path2;
			__break0__ = true;
			break;
		}
	}
	if (!__break0__) {
		g.es_print ('path not found', repr (path));
		return null;
	}
	c.endEditing ();
	c.redraw ();
	if (g.unitTesting) {
		g.app.unitTestDict ['g.recursiveUNLSearch'] = path;
	}
	else {
		var c2 = g.openWithFileName (path, __kwargtrans__ ({old_c: c}));
		if (unl) {
			g.recursiveUNLSearch (unl.py_split ('-->'), c2 || c, __kwargtrans__ ({soft_idx: true}));
		}
		if (c2) {
			c2.bringToFront ();
			return c2;
		}
	}
	return null;
};
export var isValidUrl = function (url) {
	var table = tuple (['file', 'ftp', 'gopher', 'hdl', 'http', 'https', 'imap', 'mailto', 'mms', 'news', 'nntp', 'prospero', 'rsync', 'rtsp', 'rtspu', 'sftp', 'shttp', 'sip', 'sips', 'snews', 'svn', 'svn+ssh', 'telnet', 'wais']);
	if (url.lower ().startswith ('unl:' + '//') || url.startswith ('#')) {
		return true;
	}
	if (url.startswith ('@')) {
		return false;
	}
	var parsed = urlparse.urlparse (url);
	var scheme = parsed.scheme;
	for (var s of table) {
		if (scheme.startswith (s)) {
			return true;
		}
	}
	return false;
};
export var openUrl = function (p) {
	if (p) {
		var url = g.getUrlFromNode (p);
		if (url) {
			var c = p.v.context;
			if (!(g.doHook ('@url1', __kwargtrans__ ({c: c, p: p, url: url})))) {
				g.handleUrl (url, __kwargtrans__ ({c: c, p: p}));
			}
			g.doHook ('@url2', __kwargtrans__ ({c: c, p: p, url: url}));
		}
	}
};
export var openUrlOnClick = function (event, url) {
	if (typeof url == 'undefined' || (url != null && url.hasOwnProperty ("__kwargtrans__"))) {;
		var url = null;
	};
	try {
		return openUrlHelper (event, url);
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			g.es_exception ();
			return null;
		}
		else {
			throw __except0__;
		}
	}
};
export var openUrlHelper = function (event, url) {
	if (typeof url == 'undefined' || (url != null && url.hasOwnProperty ("__kwargtrans__"))) {;
		var url = null;
	};
	var c = getattr (event, 'c', null);
	if (!(c)) {
		return null;
	}
	var w = getattr (event, 'w', c.frame.body.wrapper);
	if (!(g.app.gui.isTextWrapper (w))) {
		g.internalError ('must be a text wrapper', w);
		return null;
	}
	setattr (event, 'widget', w);
	if (url === null) {
		var s = w.getAllText ();
		var ins = w.getInsertPoint ();
		var __left0__ = w.getSelectionRange ();
		var i = __left0__ [0];
		var j = __left0__ [1];
		if (i != j) {
			return null;
		}
		var __left0__ = g.convertPythonIndexToRowCol (s, ins);
		var row = __left0__ [0];
		var col = __left0__ [1];
		var __left0__ = g.getLine (s, ins);
		var i = __left0__ [0];
		var j = __left0__ [1];
		var line = s.__getslice__ (i, j, 1);
		var __break0__ = false;
		for (var match of g.url_regex.finditer (line)) {
			if ((match.start () <= col && col < match.end ())) {
				var url = match.group ();
				if (g.isValidUrl (url)) {
					__break0__ = true;
					break;
				}
			}
		}
		if (!__break0__) {
			for (var match of g.unl_regex.finditer (line)) {
				if ((match.start () <= col && col < match.end ())) {
					var unl = match.group ();
					g.handleUnl (unl, c);
					return null;
				}
			}
		}
	}
	else if (!(isinstance (url, str))) {
		var url = url.toString ();
		var url = g.toUnicode (url);
	}
	if (url && g.isValidUrl (url)) {
		var p = c.p;
		if (!(g.doHook ('@url1', __kwargtrans__ ({c: c, p: p, url: url})))) {
			g.handleUrl (url, __kwargtrans__ ({c: c, p: p}));
		}
		g.doHook ('@url2', __kwargtrans__ ({c: c, p: p}));
		return url;
	}
	if (!(w.hasSelection ())) {
		c.editCommands.extendToWord (event, __kwargtrans__ ({select: true}));
	}
	var word = w.getSelectedText ().strip ();
	if (word) {
		c.findCommands.findDef (event);
	}
	return null;
};
export var g = sys.modules.py_get ('leo.core.leoGlobals');
if (__name__ == '__main__') {
	unittest.main ();
}

//# sourceMappingURL=leoGlobals.map