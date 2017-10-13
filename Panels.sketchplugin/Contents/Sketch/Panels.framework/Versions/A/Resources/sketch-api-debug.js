var __c_slice = [].slice;

function wrapFunction(name) {
  var originalFunction = panel.api[name].bind(panel.api);

  panel.api['__' + name] = originalFunction;

  panel.api[name] = function() {
    var args = 1 <= arguments.length ? __c_slice.call(arguments, 0) : [];
    var strArgs = JSON.stringify(args);
    panel.log('panel.api.' + name + '(' + strArgs.substring(1, strArgs.length - 1) +')');
    return originalFunction.apply(null, args);
  }
}

Object.keys(panel.api).forEach(function(name) {
  if (name !== '_callbackIdsByCallback' && name !== 'registerCallback' && name !== 'registerListener' && name !== 'getCallbackId' && name !== 'removeListener') {
    wrapFunction(name);
  }
})
