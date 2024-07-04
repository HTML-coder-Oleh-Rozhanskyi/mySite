/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/@babel/polyfill/node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/regenerator-runtime/runtime.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/regenerator-runtime/runtime.js ***!
  \**********************************************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/js/components/aside-bar.js":
/*!****************************************!*\
  !*** ./src/js/components/aside-bar.js ***!
  \****************************************/
/***/ (() => {

function aside() {
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('.aside-menu').clientHeight <= scrollDistance) {
        document.querySelectorAll('.aside-menu__link').forEach(el => {
          if (el.classList.contains('is-active')) {
            el.classList.remove('is-active');
          }
        });
        document.querySelectorAll('.aside-menu__item')[i].querySelector('.aside-menu__link').classList.add('is-active');
      }
    });
  });
}
;
aside();

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

function header() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > 0) {
      header.classList.add('header--scrolling');
    } else {
      header.classList.remove('header--scrolling');
    }
  });
}
;
header();

/***/ }),

/***/ "./src/js/components/menu_burger.js":
/*!******************************************!*\
  !*** ./src/js/components/menu_burger.js ***!
  \******************************************/
/***/ (() => {

function burger() {
  const menuBtn = document.querySelector('.burger-btn');
  const menuWrap = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');
  const headerSite = document.querySelector('.header');
  const body = document.querySelector('.body');
  const toggleMenu = () => {
    menuWrap.classList.toggle('menu-active');
    menuBtn.classList.toggle('menu-active');
    headerSite.classList.toggle('menu-active');
    if (menuWrap.classList.contains('menu-active')) {
      menuBtn.setAttribute('aria-laberl', 'close menu');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      menuBtn.setAttribute('aria-laberl', 'open menu');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  };
  menuBtn.addEventListener('click', () => {
    toggleMenu(body.classList.toggle('menu-active'));
  });
  menuLink.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(body.classList.remove('menu-active'));
    });
  });
  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function () {
      for (let u = 0; u < menuLink.length; u++) {
        menuLink[u].classList.remove('menu-active');
      }
      this.classList.add('menu-active');
    });
  }
  ;
}
;
burger();

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ (() => {

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;
    breakpoint = window.matchMedia(breakpoint);
    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
      if (callback) {
        callback(swiper);
      }
    };
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };
    breakpoint.addEventListener('change', checker);
    checker();
  };
  const someFunc = instance => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };
  resizableSwiper('(min-width: 1px)', '.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    centeredSlides: true
  });
});

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/swiper-bundle.min.css */ "./node_modules/css-loader/dist/cjs.js!./src/scss/components/swiper-bundle.min.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu-Regular.woff2 */ "./src/fonts/Ubuntu-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu-Light.woff2 */ "./src/fonts/Ubuntu-Light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu-Medium.woff2 */ "./src/fonts/Ubuntu-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/IBMPlexMono-Regular.woff2 */ "./src/fonts/IBMPlexMono-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/IBMPlexMono-Medium.woff2 */ "./src/fonts/IBMPlexMono-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/svg/icon-line.svg */ "./src/img/svg/icon-line.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/svg/icon-mail.svg */ "./src/img/svg/icon-mail.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/svg/icon-map-pin.svg */ "./src/img/svg/icon-map-pin.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/svg/icon-briefcase.svg */ "./src/img/svg/icon-briefcase.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/svg/icon-link.svg */ "./src/img/svg/icon-link.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/svg/icon-download.svg */ "./src/img/svg/icon-download.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg/bg-about.jpg */ "./src/img/bg/bg-about.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg/bg-skills.jpg */ "./src/img/bg/bg-skills.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/svg/skils-decor.svg */ "./src/img/svg/skils-decor.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg/bg-work.jpg */ "./src/img/bg/bg-work.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../img/svg/icon-send.svg */ "./src/img/svg/icon-send.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_15___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/*
:where(ul, ol):where([class]) {
	padding-left: 0;
}
:where(blockquote, figure):where([class]) {
	margin: 0;
}
:where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {
	margin-block: 0;
}
p {
	--paragraphMarginBottom: 24px;
	margin-block: 0;
}
p:where(:not([class]):not(:last-child)) {
	margin-bottom: var(--paragraphMarginBottom);
}
:where(dd[class]) {
	margin-left: 0;
}
:where(fieldset[class]) {
	margin-left: 0;
	padding: 0;
	border: none;
}
:where(ul[class]) {
	list-style: none;
}
:where(button):where([class]) {
	color: inherit;
	font-size: inherit;
}
a {
	color: inherit;
	text-decoration: none;
}
input,
textarea,
select,
button {
	font-family: inherit;
}
img,
svg {
	display: block;
	max-width: 100%;
}
*/
svg *[fill] {
  fill: currentColor;
}

svg *[stroke] {
  stroke: currentColor;
}

svg * {
  transition-property: fill, stroke;
}

@font-face {
  font-family: "Ubuntu";
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Ubuntu";
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Ubuntu";
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "IBM Plex Mono";
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "IBM Plex Mono";
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2");
  font-weight: 500;
  font-style: normal;
}
:root {
  --bg-1: #292f36;
  --bg-2: #1a1e23;
  --brand-1: #12f7d6;
  --brand-2: #98faec;
  --grey: #43454d;
  --white: #fff;
  --html: #e54f26;
  --css: #0c73b8;
  --js: #e7a020;
  --react: #28a9e0;
  --white: #fff;
  --black: #000;
  --transition: 0.3s;
  --transition-long: 1s;
  --index: calc(1vw + 1vh);
  --font-family: "Ubuntu", sans-serif;
  --second-family: "IBM Plex Mono", sans-serif;
  --128: 128px;
  --64: 64px;
  --32: 32px;
}

html {
  scroll-padding-top: 68px;
}

.body {
  position: relative;
  overflow-x: clip;
  min-height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "IBM Plex Mono", sans-serif;
  font-family: var(--second-family);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #fff;
  color: var(--white);
  background-color: #292f36;
  background-color: var(--bg-1);
}
.body.menu-active {
  overflow-y: hidden;
}

/* запобігти скачку контента при появі полоси прокрутки
.body { padding: 0 calc(20px - (100vw - 100%)) 0 0; }*/
/* Загальний стиль для всіх веб-кіт браузерів */
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  -webkit-clip-path: inset(100%) !important;
          clip-path: inset(100%) !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: background-color 0.3s;
  transition: background-color var(--transition);
  text-transform: capitalize;
}
.header.header--scrolling {
  background-color: #292f36;
  background-color: var(--bg-1);
}
.header__container {
  position: relative;
  max-width: 1728px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  min-height: max(68px, min(8.8541666667vw, 170px));
  display: flex;
  align-items: center;
  justify-content: space-between;
  -moz-column-gap: 64px;
       column-gap: 64px;
  -moz-column-gap: var(--64);
       column-gap: var(--64);
  transition: min-height 0.3s;
  transition: min-height var(--transition);
}
.header__container::before {
  content: "";
  position: absolute;
  left: 32px;
  bottom: 0;
  width: calc(100% - 64px);
  height: 1px;
  background-color: #43454d;
  background-color: var(--grey);
}
.header--scrolling .header__container {
  min-height: 68px;
}
@media (max-width: 1180px) {
  .header--scrolling .header__container {
    min-height: 48px;
  }
}
@media (max-width: 1180px) {
  .header__container {
    -moz-column-gap: max(32px, min(5.4237288136vw, 64px));
         column-gap: max(32px, min(5.4237288136vw, 64px));
  }
}
@media (max-width: 767.98px) {
  .header__container {
    padding-left: 16px;
    padding-right: 16px;
  }
  .header__container::before {
    left: 16px;
    width: calc(100% - 32px);
  }
}
.header__logo {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  font-size: max(16px, min(1.6666666667vw, 32px));
}
.header__logo-span {
  color: #12f7d6;
  color: var(--brand-1);
}
.header__menu,
.header .menu {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
@media (max-width: 574.98px) {
  .header__menu,
  .header .menu {
    position: fixed;
    z-index: 100;
    top: 48px;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: flex-start;
    overflow-y: auto;
    flex-direction: column;
    row-gap: 32px;
    row-gap: var(--32);
    padding: 150px 0 30px;
    background-color: #292f36;
    background-color: var(--bg-1);
    transform: translateX(100%);
    transition: transform 0.4s linear;
  }
  .header__menu.menu-active,
  .header .menu.menu-active {
    transform: translateX(0);
  }
}
.header__menu__list,
.header .menu__list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  -moz-column-gap: 32px;
       column-gap: 32px;
  -moz-column-gap: var(--32);
       column-gap: var(--32);
}
@media (max-width: 574.98px) {
  .header__menu__list,
  .header .menu__list {
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
    row-gap: 32px;
    row-gap: var(--32);
  }
}
.header__menu__link,
.header .menu__link {
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  font-size: max(16px, min(1.25vw, 24px));
}
.header__menu__link::before,
.header .menu__link::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #12f7d6;
  background-color: var(--brand-1);
  transform: scale(0);
  transition: transform 0.3s;
  transition: transform var(--transition);
}
@media (any-hover) {
  .header__menu__link:hover::before,
  .header .menu__link:hover::before {
    transform: scale(1);
  }
}
.header__menu .page-open,
.header .menu .page-open {
  color: #12f7d6;
  color: var(--brand-1);
}
.header__menu .page-open::before,
.header .menu .page-open::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #12f7d6;
  background-color: var(--brand-1);
  transform: scale(1);
  transition: transform 0.3s;
  transition: transform var(--transition);
}
.header__menu__social-list.social-list--burger,
.header .menu__social-list.social-list--burger {
  display: none;
}
@media (max-width: 424.98px) {
  .header__menu__social-list.social-list--burger,
  .header .menu__social-list.social-list--burger {
    display: flex;
    justify-content: center;
  }
}
.header__social-list,
.header .social-list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  -moz-column-gap: 32px;
       column-gap: 32px;
  -moz-column-gap: var(--32);
       column-gap: var(--32);
}
@media (max-width: 767.98px) {
  .header__social-list,
  .header .social-list {
    flex-grow: 1;
    justify-content: flex-end;
  }
}
@media (max-width: 424.98px) {
  .header__social-list,
  .header .social-list {
    display: none;
  }
}
.header__social-list__link,
.header .social-list__link {
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.header__social-list__link::before,
.header .social-list__link::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #12f7d6;
  background-color: var(--brand-1);
  transform: scale(0);
  transition: transform 0.3s;
  transition: transform var(--transition);
}
@media (any-hover) {
  .header__social-list__link:hover::before,
  .header .social-list__link:hover::before {
    transform: scale(1);
  }
}
.header__social-list__icon,
.header .social-list__icon {
  color: #12f7d6;
  color: var(--brand-1);
}
@media (max-width: 767.98px) {
  .header__social-list__span,
  .header .social-list__span {
    display: none;
  }
}

.burger-btn {
  display: none;
}
@media (max-width: 574.98px) {
  .burger-btn {
    position: relative;
    z-index: 200;
    display: block;
    width: 30px;
    height: 20px;
    background-color: transparent;
    border: 0;
  }
}
@media (max-width: 574.98px) and (any-hover) {
  .burger-btn:hover {
    cursor: pointer;
  }
}
@media (max-width: 574.98px) {
  .burger-btn span, .burger-btn::before, .burger-btn::after {
    content: "";
    position: absolute;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: #12f7d6;
    background-color: var(--brand-1);
    transition: all 0.3s ease 0s;
  }
  .burger-btn::before {
    top: 0;
  }
  .burger-btn::after {
    bottom: 0;
  }
  .burger-btn span {
    top: calc(50% - 1px);
  }
}
.burger-btn.menu-active span {
  width: 0;
}
.burger-btn.menu-active::before {
  top: calc(50% - 1px);
  transform: rotate(-45deg);
}
.burger-btn.menu-active::after {
  bottom: calc(50% - 1px);
  transform: rotate(45deg);
}

.aside-menu {
  position: absolute;
  z-index: 100;
  top: 234px;
  left: 32px;
  width: 64px;
}
@media (max-width: 1680px) {
  .aside-menu {
    display: none;
  }
}
.aside-menu__list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  border: 1px solid #fff;
  border: 1px solid var(--white);
  border-radius: 40px;
  padding: 8px 12px;
  background: #1a1e23;
  background: var(--bg-2);
}
.aside-menu__item {
  position: relative;
}
.aside-menu__link {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 8px;
  width: 40px;
  height: 40px;
  color: #fff;
  color: var(--white);
  transition: background-color, color 0.3s;
  transition: background-color, color var(--transition);
}
.aside-menu__link::before {
  content: "";
  position: absolute;
  top: 3px;
  left: calc(100% + 12px);
  border-radius: 8px;
  padding: 8px 16px;
  background-color: #fff;
  background-color: var(--white);
  font-family: "Ubuntu", sans-serif;
  font-family: var(--font-family);
  font-weight: 300;
  line-height: 1.12;
  text-align: center;
  color: #292f36;
  color: var(--bg-1);
  text-transform: capitalize;
  white-space: nowrap;
  display: none;
  transition-duration: 1s;
  transition-duration: var(--transition-long);
  transition-behavior: allow-discrete;
  opacity: 0;
}
@media (any-hover) {
  .aside-menu__link:hover::before {
    display: block;
    opacity: 1;
    left: calc(100% + 25px);
  }
  @starting-style {
    .aside-menu__link:hover::before {
      opacity: 0;
      left: calc(100% + 12px);
    }
  }
}
.aside-menu .is-active {
  background-color: #fff;
  background-color: var(--white);
  color: #292f36;
  color: var(--bg-1);
}
.aside-menu__link--home::before {
  content: "Home";
}
.aside-menu__link--about-me::before {
  content: "About Me";
}
.aside-menu__link--skills::before {
  content: "Skills";
}
.aside-menu__link--works::before {
  content: "Works";
}
.aside-menu__link--blogs::before {
  content: "Blogs";
}
.aside-menu__link--contact::before {
  content: "Contact";
}

.title {
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Ubuntu", sans-serif;
  font-family: var(--font-family);
  line-height: 1.12;
  font-size: max(32px, min(8.3335503529vw, 64px));
  font-size: max(var(--32), min(8.3335503529vw, 64px));
  font-weight: 400;
  text-transform: capitalize;
  color: #12f7d6;
  color: var(--brand-1);
  display: inline-block;
  margin: 0 auto 32px;
  margin: 0 auto var(--32);
  position: relative;
}
.title::before {
  content: "";
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 18px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) 0 0/100% no-repeat;
}

.tag {
  display: block;
  font-size: 14px;
  line-height: 1.29;
  color: #98faec;
  color: var(--brand-2);
  text-transform: lowercase;
}

.decor {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  margin-bottom: 64px;
  margin-bottom: var(--64);
}
.decor svg:first-child {
  color: #12f7d6;
  color: var(--brand-1);
}
@media (max-width: 1680px) {
  .decor {
    display: none;
  }
}

.main {
  position: relative;
  padding-top: max(138px, min(16.4788732394vw, 234px));
}
.main__banner {
  padding-bottom: 128px;
  padding-bottom: var(--128);
}
@media (max-width: 767.98px) {
  .main__banner {
    padding-bottom: 64px;
    padding-bottom: var(--64);
  }
}
.main__about, .main__skills, .main__work {
  padding-top: 128px;
  padding-bottom: 128px;
  padding-top: var(--128);
  padding-bottom: var(--128);
}
@media (max-width: 767.98px) {
  .main__about, .main__skills, .main__work {
    padding-top: 64px;
    padding-bottom: 64px;
    padding-top: var(--64);
    padding-bottom: var(--64);
  }
}
.main__contact {
  padding-top: 64px;
  padding-bottom: 64px;
  padding-top: var(--64);
  padding-bottom: var(--64);
}

.section {
  height: 100vh;
}
@media (max-width: 1680px) {
  .section {
    height: auto;
  }
}

.banner {
  position: relative;
}
.banner__container {
  max-width: 1476px;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-column-gap: 122px;
  -moz-column-gap: 122px;
       column-gap: 122px;
  grid-template-columns: 328px 1fr;
}
@media (max-width: 1420px) {
  .banner__container {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 64px;
    row-gap: var(--64);
  }
}
@media (max-width: 767.98px) {
  .banner__container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
.banner__subtitle {
  margin-top: 0;
  margin-bottom: 0;
  grid-column: 1/-1;
  font-family: "Ubuntu", sans-serif;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: max(90px, min(6.09375vw, 117px));
  line-height: 1.15;
  text-transform: capitalize;
  color: #98faec;
  color: var(--brand-2);
  text-align: center;
  margin-bottom: 64px;
  margin-bottom: var(--64);
}
@media (max-width: 1420px) {
  .banner__subtitle {
    display: none;
  }
}
.banner__cv,
.banner .cv {
  max-width: 328px;
  box-shadow: -4px -4px 2px 0 #12f7d6;
  box-shadow: -4px -4px 2px 0 var(--brand-1);
  background: #292f36;
  background: var(--bg-1);
  border: 4px solid #fff;
  border: 4px solid var(--white);
  border-radius: 160px 0;
  padding: 34px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 1420px) {
  .banner__cv,
  .banner .cv {
    padding: 34px 40px;
  }
}
@media (max-width: 767.98px) {
  .banner__cv,
  .banner .cv {
    padding: 32px 24px;
  }
}
.banner__cv__img,
.banner .cv__img {
  width: 102px;
  aspect-ratio: 1;
  margin-bottom: 13px;
}
.banner__cv__titile,
.banner .cv__titile {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.31;
  text-transform: capitalize;
}
.banner__cv__subtitle,
.banner .cv__subtitle {
  font-size: 14px;
  line-height: 1.29;
  margin-bottom: 32px;
  margin-bottom: var(--32);
}
.banner__cv__address-list,
.banner .cv__address-list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 16px;
}
.banner__cv__address-item,
.banner .cv__address-item {
  font-size: 14px;
  line-height: 1.29;
  padding-left: 30px;
  color: inherit;
  background-position: 0 2px;
  background-size: 14px;
  background-repeat: no-repeat;
}
.banner__cv__address-link,
.banner .cv__address-link {
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
}
.banner__cv__address-item_mail,
.banner .cv__address-item_mail {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}
.banner__cv__address-item_country,
.banner .cv__address-item_country {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}
.banner__cv__address-item_work,
.banner .cv__address-item_work {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}
.banner__cv__address-item_web,
.banner .cv__address-item_web {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
}
.banner__cv__skills-list,
.banner .cv__skills-list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  align-self: flex-start;
  display: flex;
  -moz-column-gap: 16px;
       column-gap: 16px;
  margin-bottom: 32px;
  margin-bottom: var(--32);
}
.banner__cv__skills-item,
.banner .cv__skills-item {
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  min-height: 18px;
  background-color: #12f7d6;
  background-color: var(--brand-1);
  font-size: 14px;
  line-height: 1.29;
  color: #292f36;
  color: var(--bg-1);
}
.banner__cv__button,
.banner .cv__button {
  align-self: flex-start;
  display: flex;
  align-items: center;
  border-radius: 32px;
  padding: 16px 32px;
  width: 227px;
  height: 58px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) right 32px center no-repeat, #fff;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) right 32px center no-repeat, var(--white);
  font-family: "Ubuntu", sans-serif;
  font-family: var(--font-family);
  font-size: 20px;
  line-height: 1.2;
  text-transform: capitalize;
  color: #292f36;
  color: var(--bg-1);
  text-align: left;
  transition: background 0.3s;
  transition: background var(--transition);
}
@media (any-hover) {
  .banner__cv__button:hover,
  .banner .cv__button:hover {
    background-color: #12f7d6;
    background-color: var(--brand-1);
  }
}
@media (max-width: 767.98px) {
  .banner__cv__button,
  .banner .cv__button {
    width: 200px;
    padding: 16px 22px;
    font-size: 18px;
  }
}
.banner__body {
  display: grid;
  grid-template-columns: 1fr 215px;
  grid-column-gap: 74px;
  -moz-column-gap: 74px;
       column-gap: 74px;
}
@media (max-width: 1420px) {
  .banner__body {
    grid-template-columns: 1fr;
  }
}
.banner__title {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.12;
  font-size: max(32px, min(8.3335503529vw, 64px));
  font-size: max(var(--32), min(8.3335503529vw, 64px));
  font-weight: 400;
  text-transform: capitalize;
  color: #fff;
  color: var(--white);
  margin-bottom: 32px;
  margin-bottom: var(--32);
}
.banner__pre {
  font-family: "Ubuntu", sans-serif;
  font-family: var(--font-family);
  margin-top: 0;
  margin-bottom: 0;
}
.banner__name {
  color: #12f7d6;
  color: var(--brand-1);
}
.banner__text {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 24px;
  grid-column: 1/2;
  margin-bottom: 16px;
}
.banner__text .tag {
  margin-left: -24px;
}
.banner__text .tag:first-child {
  margin-bottom: 16px;
}
.banner__text .tag:last-child {
  margin-top: 16px;
}
.banner__link {
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: relative;
  grid-column: 1/2;
  justify-self: start;
  display: flex;
  align-items: center;
  -moz-column-gap: 16px;
       column-gap: 16px;
  font-weight: 500;
  font-size: max(28px, min(4.1667751764vw, 32px));
  line-height: 1.31;
  text-transform: capitalize;
  color: #12f7d6;
  color: var(--brand-1);
  margin-left: 24px;
}
.banner__link::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #12f7d6;
  background-color: var(--brand-1);
  transform: scale(0);
  transition: transform 0.3s;
  transition: transform var(--transition);
}
@media (any-hover) {
  .banner__link:hover::before {
    transform: scale(1);
  }
}
.banner__link::after {
  content: "";
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #43454d;
  background-color: var(--grey);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-position: center;
  background-repeat: no-repeat;
}
@media (max-width: 1420px) {
  .banner__link {
    margin-bottom: 64px;
    margin-bottom: var(--64);
  }
}
.banner__skills {
  grid-column: 2/3;
  grid-row: 1/4;
  align-self: center;
  border-radius: 80px;
  padding: 48px 32px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #1a1e23;
  background-color: var(--bg-2);
}
@media (max-width: 1023px) {
  .banner__skills {
    max-width: 215px;
    grid-column: 1/2;
    grid-row: 4/5;
    justify-self: center;
  }
}
.banner__skills-list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.banner__skills-item {
  display: flex;
  align-items: center;
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.banner__skills-item:not(:last-child) {
  margin-bottom: 48px;
}
.banner__skills-number {
  font-weight: 500;
  font-size: 48px;
  line-height: 1.29;
  text-transform: capitalize;
  color: #12f7d6;
  color: var(--brand-1);
}

.about {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_11___}) 50%/cover no-repeat;
}
.about__container {
  max-width: 1476px;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;
  display: grid;
}
@media (max-width: 767.98px) {
  .about__container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
@media (max-width: 767.98px) {
  .about__title {
    display: none;
  }
}
.about__subtext {
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  margin-bottom: 128px;
  margin-bottom: var(--128);
}
@media (max-width: 767.98px) {
  .about__subtext {
    display: none;
  }
}
.about__body {
  display: grid;
  grid-template-columns: 1fr 462px;
  grid-column-gap: 128px;
  grid-column-gap: var(--128);
  -moz-column-gap: 128px;
       column-gap: 128px;
  -moz-column-gap: var(--128);
       column-gap: var(--128);
  justify-items: start;
}
@media (max-width: 1420px) {
  .about__body {
    -moz-column-gap: 64px;
         column-gap: 64px;
    -moz-column-gap: var(--64);
         column-gap: var(--64);
    grid-template-columns: 1fr 380px;
  }
}
@media (max-width: 1180px) {
  .about__body {
    grid-template-columns: 1fr;
    row-gap: 64px;
    row-gap: var(--64);
  }
}
.about__subtitle {
  margin-top: 0;
  margin-bottom: 0;
  grid-column: 1/2;
  color: #fff;
  color: var(--white);
  border: 4px solid #12f7d6;
  border: 4px solid var(--brand-1);
  border-radius: 40px 0;
  padding: 16px 40px;
  background: #292f36;
  background: var(--bg-1);
  align-self: center;
  margin: 0 0 64px 0;
  margin: 0 0 var(--64) 0;
}
.about__subtitle::before {
  display: none;
}
@media (max-width: 1420px) {
  .about__subtitle {
    margin-bottom: 32px;
    margin-bottom: var(--32);
  }
}
@media (max-width: 1180px) {
  .about__subtitle {
    margin: 0;
    grid-column: 1/1;
    grid-row: 1/2;
  }
}
.about__text {
  grid-column: 1/1;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 40px;
  padding: 24px 40px;
  background: #292f36;
  background: var(--bg-1);
  align-self: self-end;
}
.about__text .tag:first-child {
  margin-bottom: 16px;
}
.about__text .tag:last-child {
  margin-top: 16px;
}
@media (max-width: 1180px) {
  .about__text {
    grid-column: 1/1;
    grid-row: 2/3;
    padding: 24px;
  }
}
.about__img {
  grid-column: 2/3;
  grid-row: 1/3;
  border-radius: 16px;
  margin-left: 64px;
}
@media (max-width: 1680px) {
  .about__img {
    margin-left: 0;
  }
}
@media (max-width: 1420px) {
  .about__img {
    max-width: 100%;
  }
}
@media (max-width: 1180px) {
  .about__img {
    align-self: start;
    grid-column: 1/1;
    grid-row: 3/4;
    justify-self: center;
    max-width: max(272px, min(39.1525423729vw, 462px));
    height: auto;
    min-height: 364px;
  }
}

.skills {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_12___}) 50%/cover no-repeat;
}
.skills__container {
  max-width: 1024px;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;
  position: relative;
  display: grid;
}
@media (max-width: 767.98px) {
  .skills__container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
.skills__container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 255px;
  height: 193px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_13___}) 0 0 no-repeat;
}
@media (max-width: 1420px) {
  .skills__container::before {
    display: none;
  }
}
.skills__subtext {
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  margin-bottom: 64px;
  margin-bottom: var(--64);
}
.skills__body {
  display: flex;
  -moz-column-gap: 128px;
       column-gap: 128px;
  -moz-column-gap: var(--128);
       column-gap: var(--128);
  justify-content: center;
}
.skills__kard {
  border-left: 8px solid #0c73b8;
  border-left: 8px solid var(--css);
  border-radius: 8px;
  padding: 16px 24px;
  max-width: 288px;
  background: #98faec;
  background: var(--brand-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin-bottom: 90px;
  transition: transform 0.3s;
  transition: transform var(--transition);
}
@media (any-hover) {
  .skills__kard:hover {
    transform: scale(1.03);
  }
}
.skills__kard:active {
  transform: scale(0.99);
}
@media (max-width: 574.98px) {
  .skills__kard {
    max-width: 100%;
  }
}
.skills__kard-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  line-height: 1.33;
  text-transform: capitalize;
  color: #292f36;
  color: var(--bg-1);
  word-wrap: none;
  width: 100%;
}
.skills__kard-text {
  text-transform: uppercase;
  color: #43454d;
  color: var(--grey);
}
.skills__list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));
  justify-content: center;
  grid-gap: 128px;
  grid-gap: var(--128);
  gap: 128px;
  gap: var(--128);
}
@media (max-width: 1420px) {
  .skills__list {
    gap: 64px;
    gap: var(--64);
  }
}
@media (max-width: 767.98px) {
  .skills__list {
    grid-template-columns: repeat(auto-fit, minmax(114px, 1fr));
  }
}
.skills__list-link {
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.31;
  text-transform: uppercase;
  transition: transform 0.3s;
  transition: transform var(--transition);
}
@media (any-hover) {
  .skills__list-link:hover {
    transform: scale(1.03);
  }
}
.skills__list-link:active {
  transform: scale(0.99);
}
.skills__list-link--html {
  color: #e54f26;
  color: var(--html);
}
.skills__list-link--css {
  color: #0c73b8;
  color: var(--css);
}
.skills__list-link--js {
  color: #e7a020;
  color: var(--js);
}
.skills__list-link--react {
  color: #28a9e0;
  color: var(--react);
}
.work {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_14___}) 50%/cover no-repeat;
}
.work__container {
  max-width: 985px;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;
}
@media (max-width: 767.98px) {
  .work__container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
.work__header {
  display: grid;
  margin-bottom: 64px;
  margin-bottom: var(--64);
}
.work__title {
  text-align: center;
}
.work__subtext {
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
}

.contact {
  background: #292f36;
  background: var(--bg-1);
}
.contact__container {
  max-width: 1184px;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;
  display: grid;
}
@media (max-width: 767.98px) {
  .contact__container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
.contact__subtext {
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  margin-bottom: 100px;
}
.contact__subtitle {
  margin-top: 0;
  margin-bottom: 0;
  border: 2px solid #12f7d6;
  border: 2px solid var(--brand-1);
  border-radius: 32px 0;
  padding: 16px 40px;
  text-align: center;
  justify-self: center;
  font-weight: 500;
  font-size: max(24px, min(4.1667751764vw, 32px));
  line-height: 1.31;
  text-transform: capitalize;
  color: #12f7d6;
  color: var(--brand-1);
  margin-bottom: 64px;
  margin-bottom: var(--64);
}
.contact__form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: max(64px, min(10.8474576271vw, 128px));
  -moz-column-gap: max(64px, min(10.8474576271vw, 128px));
       column-gap: max(64px, min(10.8474576271vw, 128px));
  font-family: "Ubuntu", sans-serif;
  font-family: var(--font-family);
  font-weight: 300;
  line-height: 1.2;
  color: #fff;
  color: var(--white);
}
@media (max-width: 574.98px) {
  .contact__form {
    grid-template-columns: 1fr;
  }
}
.contact__label {
  color: #12f7d6;
  color: var(--brand-1);
  margin-bottom: 24px;
}
.contact__label:first-child {
  grid-column: 1/2;
  grid-row: 1/2;
}
.contact__input, .contact__textarea {
  font-family: inherit;
  color: inherit;
  font-size: inherit;
  padding: 0;
  border: 0;
  min-height: 26px;
  background-color: transparent;
  border-bottom: 1px solid #98faec;
  border-bottom: 1px solid var(--brand-2);
  margin-bottom: 64px;
  margin-bottom: var(--64);
}
.contact__input:nth-child(2) {
  grid-column: 1/2;
  grid-row: 2/3;
}
@media (max-width: 574.98px) {
  .contact__input:nth-child(2) {
    grid-column: 1/2;
  }
}
.contact__textarea {
  align-content: center;
  grid-column: 1/3;
  grid-row: 4/5;
  resize: none;
}
@media (max-width: 574.98px) {
  .contact__textarea {
    grid-column: 1/2;
    grid-row: 6/7;
  }
}
.contact__button {
  font-family: "Ubuntu", sans-serif;
  font-family: var(--font-family);
  justify-self: center;
  border-radius: 32px;
  border: 0;
  padding: 16px 32px;
  min-height: 56px;
  background-color: #12f7d6;
  background-color: var(--brand-1);
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  text-transform: capitalize;
  color: #292f36;
  color: var(--bg-1);
  display: flex;
  align-items: center;
  -moz-column-gap: 16px;
       column-gap: 16px;
  transition: background-color 0.3s;
  transition: background-color var(--transition);
}
.contact__button::after {
  content: "";
  display: inline-block;
  width: 22px;
  aspect-ratio: 1;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_15___}) 0 0 no-repeat;
}
.contact__button:hover {
  background-color: #98faec;
  background-color: var(--brand-2);
}

.footer {
  border-top: 1px solid #43454d;
  border-top: 1px solid var(--grey);
}
.footer__container {
  max-width: 1184px;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 767.98px) {
  .footer__container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
.footer__title {
  font-family: "Ubuntu", sans-serif;
  font-family: var(--font-family);
  font-weight: 300;
  color: #fff;
  color: var(--white);
}
.footer__social-list,
.footer .social-list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  -moz-column-gap: 32px;
       column-gap: 32px;
  -moz-column-gap: var(--32);
       column-gap: var(--32);
}
.footer__social-list__link,
.footer .social-list__link {
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.footer__social-list__link::before,
.footer .social-list__link::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #12f7d6;
  background-color: var(--brand-1);
  transform: scale(0);
  transition: transform 0.3s;
  transition: transform var(--transition);
}
@media (any-hover) {
  .footer__social-list__link:hover::before,
  .footer .social-list__link:hover::before {
    transform: scale(1);
  }
}
@media (max-width: 574.98px) {
  .footer__social-list__link span,
  .footer .social-list__link span {
    display: none;
  }
}
.footer__social-list__icon,
.footer .social-list__icon {
  color: #12f7d6;
  color: var(--brand-1);
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/components/_normalize.scss","webpack://./src/scss/components/_fonts.scss","webpack://./src/scss/components/_settings.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_page.scss","webpack://./src/scss/components/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./components/normalize.scss\";\r\n@import \"./components/fonts.scss\";\r\n@import \"./components/settings.scss\";\r\n@import \"./components/swiper-bundle.min.css\";\r\n@import \"./components/header.scss\";\r\n@import \"./components/page.scss\";\r\n@import \"./components/footer.scss\";\r\n","html {\r\n\tbox-sizing: border-box;\r\n\tscroll-behavior: smooth;\r\n\theight: 100%;\r\n}\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: inherit;\r\n}\r\n@mixin link {\r\n\t@content;\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\n@mixin img {\r\n\t@content;\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n@mixin list {\r\n\t@content;\r\n\tmargin-block: 0;\r\n\tpadding-left: 0;\r\n\tlist-style: none;\r\n}\r\n@mixin button {\r\n\t@content;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tfont-size: inherit;\r\n\tborder: 0;\r\n}\r\n@mixin title {\r\n\t@content;\r\n\tmargin-block: 0;\r\n}\r\n@mixin p {\r\n\t@content;\r\n\tmargin-block: 0;\r\n}\r\n@mixin input {\r\n\t@content;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tfont-size: inherit;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n\t* {\r\n\t\tanimation-duration: 0.01ms !important;\r\n\t\tanimation-iteration-count: 1 !important;\r\n\t\ttransition-duration: 0.01ms !important;\r\n\t\tscroll-behavior: auto !important;\r\n\t}\r\n}\r\n\r\n/*\r\n:where(ul, ol):where([class]) {\r\n\tpadding-left: 0;\r\n}\r\n:where(blockquote, figure):where([class]) {\r\n\tmargin: 0;\r\n}\r\n:where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {\r\n\tmargin-block: 0;\r\n}\r\np {\r\n\t--paragraphMarginBottom: 24px;\r\n\tmargin-block: 0;\r\n}\r\np:where(:not([class]):not(:last-child)) {\r\n\tmargin-bottom: var(--paragraphMarginBottom);\r\n}\r\n:where(dd[class]) {\r\n\tmargin-left: 0;\r\n}\r\n:where(fieldset[class]) {\r\n\tmargin-left: 0;\r\n\tpadding: 0;\r\n\tborder: none;\r\n}\r\n:where(ul[class]) {\r\n\tlist-style: none;\r\n}\r\n:where(button):where([class]) {\r\n\tcolor: inherit;\r\n\tfont-size: inherit;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\ninput,\r\ntextarea,\r\nselect,\r\nbutton {\r\n\tfont-family: inherit;\r\n}\r\nimg,\r\nsvg {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n*/\r\n\r\nsvg *[fill] {\r\n\tfill: currentColor;\r\n}\r\nsvg *[stroke] {\r\n\tstroke: currentColor;\r\n}\r\nsvg * {\r\n\ttransition-property: fill, stroke;\r\n}\r\n","@font-face {\r\n\tfont-family: \"Ubuntu\";\r\n\tfont-display: swap;\r\n\tsrc: url(\"../fonts/Ubuntu-Regular.woff2\") format(\"woff2\");\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n@font-face {\r\n\tfont-family: \"Ubuntu\";\r\n\tfont-display: swap;\r\n\tsrc: url(\"../fonts/Ubuntu-Light.woff2\") format(\"woff2\");\r\n\tfont-weight: 300;\r\n\tfont-style: normal;\r\n}\r\n@font-face {\r\n\tfont-family: \"Ubuntu\";\r\n\tfont-display: swap;\r\n\tsrc: url(\"../fonts/Ubuntu-Medium.woff2\") format(\"woff2\");\r\n\tfont-weight: 500;\r\n\tfont-style: normal;\r\n}\r\n@font-face {\r\n\tfont-family: \"IBM Plex Mono\";\r\n\tfont-display: swap;\r\n\tsrc: url(\"../fonts/IBMPlexMono-Regular.woff2\") format(\"woff2\");\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n@font-face {\r\n\tfont-family: \"IBM Plex Mono\";\r\n\tfont-display: swap;\r\n\tsrc: url(\"../fonts/IBMPlexMono-Medium.woff2\") format(\"woff2\");\r\n\tfont-weight: 500;\r\n\tfont-style: normal;\r\n}\r\n","$canvas: 1920px;\r\n$container: 1420px;\r\n$paddingInline: 32px;\r\n\r\n:root {\r\n\t--bg-1: #292f36;\r\n\t--bg-2: #1a1e23;\r\n\t--brand-1: #12f7d6;\r\n\t--brand-2: #98faec;\r\n\t--grey: #43454d;\r\n\t--white: #fff;\r\n\t--html: #e54f26;\r\n\t--css: #0c73b8;\r\n\t--js: #e7a020;\r\n\t--react: #28a9e0;\r\n\t--white: #fff;\r\n\t--black: #000;\r\n\t--transition: 0.3s;\r\n\t--transition-long: 1s;\r\n\t--index: calc(1vw + 1vh);\r\n\t--font-family: \"Ubuntu\", sans-serif;\r\n\t--second-family: \"IBM Plex Mono\", sans-serif;\r\n\t--128: 128px;\r\n\t--64: 64px;\r\n\t--32: 32px;\r\n}\r\n\r\n@mixin xsm {\r\n\t@media (max-width: 424.98px) {\r\n\t\t@content;\r\n\t}\r\n}\r\n@mixin sm {\r\n\t@media (max-width: 574.98px) {\r\n\t\t@content;\r\n\t}\r\n}\r\n@mixin m {\r\n\t@media (max-width: 767.98px) {\r\n\t\t@content;\r\n\t}\r\n}\r\n@mixin t {\r\n\t@media (max-width: 1180px) {\r\n\t\t@content;\r\n\t}\r\n}\r\n@mixin d {\r\n\t@media (max-width: $container) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin focus {\r\n\t@content;\r\n\t&:focus-visible {\r\n\t\tcolor: #1d2f30;\r\n\t}\r\n}\r\n@mixin active {\r\n\t@content;\r\n\t&:active {\r\n\t\tcolor: #1d2f30;\r\n\t}\r\n}\r\n\r\n@mixin container {\r\n\t@content;\r\n\tmax-width: calc($container + $paddingInline * 2);\r\n\tmargin: 0 auto;\r\n\tpadding-inline: $paddingInline;\r\n}\r\n\r\n@mixin hover {\r\n\t&::before {\r\n\t\t@content;\r\n\t\tcontent: \"\";\r\n\t\tposition: absolute;\r\n\t\tbottom: -5px;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 2px;\r\n\t\tbackground-color: var(--brand-1);\r\n\t\ttransform: scale(0);\r\n\t\ttransition: transform var(--transition);\r\n\t}\r\n\t&:hover::before {\r\n\t\t@media (any-hover) {\r\n\t\t\ttransform: scale(1);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@function vwc($n) {\r\n\t@return calc($n / $canvas * 100vw);\r\n}\r\n@function vw($n) {\r\n\t@return calc($n / $container * 100vw);\r\n}\r\n@function vwt($n) {\r\n\t@return calc($n / 1180px * 100vw);\r\n}\r\n@function vwm($n) {\r\n\t@return calc($n / 767.98px * 100vw);\r\n}\r\nhtml {\r\n\tscroll-padding-top: 68px;\r\n}\r\n.body {\r\n\tposition: relative;\r\n\toverflow-x: clip;\r\n\tmin-height: 100%;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-family: var(--second-family);\r\n\tfont-size: 16px;\r\n\t// font-size: calc(var(--index) * 1.5);\r\n\tfont-weight: 400;\r\n\tline-height: 1.25;\r\n\tcolor: var(--white);\r\n\tbackground-color: var(--bg-1);\r\n\t&.menu-active {\r\n\t\toverflow-y: hidden;\r\n\t\t// padding-right: 10px;\r\n\t}\r\n}\r\n\r\n/* запобігти скачку контента при появі полоси прокрутки\r\n.body { padding: 0 calc(20px - (100vw - 100%)) 0 0; }*/\r\n// [class*=\"__container\"] {\r\n// }\r\n\r\n/* Загальний стиль для всіх веб-кіт браузерів */\r\n//::-webkit-scrollbar {\r\n//width: 10px; /* Ширина смужки прокрутки */\r\n//}\r\n//::-webkit-scrollbar-track {\r\n//\tbackground: transparent; /* Колір треку */\r\n//}\r\n//\r\n//::-webkit-scrollbar-thumb {\r\n//\tbackground-color: var(--bg-2); /* Колір смужки прокрутки */\r\n//\tborder-radius: 10px; /* Округлені краї смужки прокрутки */\r\n//\tborder: none; /* Простір між смужкою і треком */\r\n//}\r\n//::-webkit-scrollbar-thumb:hover {\r\n//\tbackground-color: var(--bg-2); /* Колір смужки при наведенні */\r\n//}\r\n// для firefox\r\n// .body {\r\n// scrollbar-width: thin; /* Може бути auto, thin або none */\r\n// scrollbar-color: #888 #f1f1f1; /* Колір смужки прокрутки та треку */\r\n// }\r\n// /* Додатковий стиль для окремих частин смужки */\r\n// .scrollbar {\r\n// scrollbar-color: #888 #f1f1f1;\r\n// scrollbar-width: thin;\r\n// }\r\n\r\n.visually-hidden {\r\n\tposition: absolute !important;\r\n\twidth: 1px !important;\r\n\theight: 1px !important;\r\n\tmargin: -1px !important;\r\n\tborder: 0 !important;\r\n\tpadding: 0 !important;\r\n\twhite-space: nowrap !important;\r\n\tclip-path: inset(100%) !important;\r\n\tclip: rect(0 0 0 0) !important;\r\n\toverflow: hidden !important;\r\n}\r\n",".header {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\tz-index: 100;\r\n\ttransition: background-color var(--transition);\r\n\ttext-transform: capitalize;\r\n\t&.header--scrolling {\r\n\t\tbackground-color: var(--bg-1);\r\n\t}\r\n\t// .header__container\r\n\t&__container {\r\n\t\tposition: relative;\r\n\t\tmax-width: calc(1664px + $paddingInline * 2);\r\n\t\tmargin: 0 auto;\r\n\t\tpadding-inline: $paddingInline;\r\n\t\tmin-height: clamp(68px, vwc(170px), 170px);\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-between;\r\n\t\tcolumn-gap: var(--64);\r\n\t\ttransition: min-height var(--transition);\r\n\t\t&::before {\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 32px;\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: calc(100% - $paddingInline * 2);\r\n\t\t\theight: 1px;\r\n\t\t\tbackground-color: var(--grey);\r\n\t\t}\r\n\t\t.header--scrolling & {\r\n\t\t\tmin-height: 68px;\r\n\t\t\t@include t {\r\n\t\t\t\tmin-height: 48px;\r\n\t\t\t}\r\n\t\t}\r\n\t\t@include t {\r\n\t\t\tcolumn-gap: clamp(32px, vwt(64px), 64px);\r\n\t\t}\r\n\t\t@include m {\r\n\t\t\tpadding-inline: 16px;\r\n\t\t\t&::before {\r\n\t\t\t\tleft: 16px;\r\n\t\t\t\twidth: calc(100% - 16px * 2);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .header__logo\r\n\t&__logo {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tcolumn-gap: 8px;\r\n\t\tfont-size: clamp(16px, vwc(32px), 32px);\r\n\t}\r\n\t// .header__logo-span\r\n\t&__logo-span {\r\n\t\tcolor: var(--brand-1);\r\n\t}\r\n\r\n\t// .header__menu-list\r\n\t&__menu,\r\n\t.menu {\r\n\t\tflex-grow: 1;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\t@include sm {\r\n\t\t\tposition: fixed;\r\n\t\t\tz-index: 100;\r\n\t\t\ttop: 48px;\r\n\t\t\tbottom: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tright: 0;\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\toverflow-y: auto;\r\n\t\t\tflex-direction: column;\r\n\t\t\trow-gap: var(--32);\r\n\t\t\tpadding: 150px 0 30px;\r\n\t\t\tbackground-color: var(--bg-1);\r\n\t\t\ttransform: translateX(100%);\r\n\t\t\ttransition: transform 0.4s linear;\r\n\t\t\t&.menu-active {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__list {\r\n\t\t\t@include list;\r\n\t\t\tdisplay: flex;\r\n\t\t\tcolumn-gap: var(--32);\r\n\t\t\t@include sm {\r\n\t\t\t\tflex-wrap: nowrap;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\trow-gap: var(--32);\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .menu__link\r\n\t\t&__link {\r\n\t\t\t@include link;\r\n\t\t\t@include hover;\r\n\t\t\twhite-space: nowrap;\r\n\t\t\tposition: relative;\r\n\t\t\tfont-size: clamp(16px, vwc(24px), 24px);\r\n\t\t}\r\n\t\t.page-open {\r\n\t\t\tcolor: var(--brand-1);\r\n\t\t\t&::before {\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tbottom: -5px;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 2px;\r\n\t\t\t\tbackground-color: var(--brand-1);\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t\ttransition: transform var(--transition);\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__social-list.social-list--burger {\r\n\t\t\tdisplay: none;\r\n\t\t\t@include xsm {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t// .header__social-list\r\n\t&__social-list,\r\n\t.social-list {\r\n\t\t@include list;\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: var(--32);\r\n\t\t@include m {\r\n\t\t\tflex-grow: 1;\r\n\t\t\tjustify-content: flex-end;\r\n\t\t}\r\n\t\t@include xsm {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t\t// .social-list__link\r\n\t\t&__link {\r\n\t\t\t@include link;\r\n\t\t\t@include hover;\r\n\t\t\tposition: relative;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: 8px;\r\n\t\t}\r\n\t\t// .social-list__icon\r\n\t\t&__icon {\r\n\t\t\tcolor: var(--brand-1);\r\n\t\t}\r\n\t\t// .social-list__span\r\n\t\t&__span {\r\n\t\t\t@include m {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.burger-btn {\r\n\tdisplay: none;\r\n\t@include sm {\r\n\t\tposition: relative;\r\n\t\tz-index: 200;\r\n\t\tdisplay: block;\r\n\t\twidth: 30px;\r\n\t\theight: 20px;\r\n\t\tbackground-color: transparent;\r\n\t\tborder: 0;\r\n\t\t&:hover {\r\n\t\t\t@media (any-hover) {\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t}\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 2px;\r\n\t\t\tbackground-color: var(--brand-1);\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - 1px);\r\n\t\t}\r\n\t}\r\n\t&.menu-active {\r\n\t\tspan {\r\n\t\t\twidth: 0;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: calc(50% - 1px);\r\n\t\t\ttransform: rotate(-45deg);\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: calc(50% - 1px);\r\n\t\t\ttransform: rotate(45deg);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.aside-menu {\r\n\tposition: absolute;\r\n\tz-index: 100;\r\n\ttop: 234px;\r\n\tleft: 32px;\r\n\twidth: 64px;\r\n\t@media (max-width: 1680px) {\r\n\t\tdisplay: none;\r\n\t}\r\n\t// .aside-menu__list\r\n\t&__list {\r\n\t\t@include list;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\trow-gap: 24px;\r\n\t\tborder: 1px solid var(--white);\r\n\t\tborder-radius: 40px;\r\n\t\tpadding: 8px 12px;\r\n\t\tbackground: var(--bg-2);\r\n\t}\r\n\t// .aside-menu__item\r\n\t&__item {\r\n\t\tposition: relative;\r\n\t}\r\n\t// .aside-menu__link\r\n\t&__link {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tborder-radius: 40px;\r\n\t\tpadding: 8px;\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t\tcolor: var(--white);\r\n\t\ttransition:\r\n\t\t\tbackground-color,\r\n\t\t\tcolor var(--transition);\r\n\t\t&::before {\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 3px;\r\n\t\t\tleft: calc(100% + 12px);\r\n\t\t\tborder-radius: 8px;\r\n\t\t\tpadding: 8px 16px;\r\n\t\t\tbackground-color: var(--white);\r\n\t\t\tfont-family: var(--font-family);\r\n\t\t\tfont-weight: 300;\r\n\t\t\tline-height: 1.12;\r\n\t\t\ttext-align: center;\r\n\t\t\tcolor: var(--bg-1);\r\n\t\t\ttext-transform: capitalize;\r\n\t\t\twhite-space: nowrap;\r\n\t\t\tdisplay: none;\r\n\t\t\ttransition-duration: var(--transition-long);\r\n\t\t\ttransition-behavior: allow-discrete;\r\n\t\t\topacity: 0;\r\n\t\t}\r\n\t\t&:hover::before {\r\n\t\t\t@media (any-hover) {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tleft: calc(100% + 25px);\r\n\t\t\t\t@starting-style {\r\n\t\t\t\t\topacity: 0;\r\n\t\t\t\t\tleft: calc(100% + 12px);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.is-active {\r\n\t\tbackground-color: var(--white);\r\n\t\tcolor: var(--bg-1);\r\n\t}\r\n\t// .aside-menu__link--home\r\n\t&__link--home {\r\n\t\t&::before {\r\n\t\t\tcontent: \"Home\";\r\n\t\t}\r\n\t}\r\n\t// .aside-menu__link--about-me\r\n\t&__link--about-me {\r\n\t\t&::before {\r\n\t\t\tcontent: \"About Me\";\r\n\t\t}\r\n\t}\r\n\t// .aside-menu__link--skills\r\n\t&__link--skills {\r\n\t\t&::before {\r\n\t\t\tcontent: \"Skills\";\r\n\t\t}\r\n\t}\r\n\t// .aside-menu__link--works\r\n\t&__link--works {\r\n\t\t&::before {\r\n\t\t\tcontent: \"Works\";\r\n\t\t}\r\n\t}\r\n\t// .aside-menu__link--blogs\r\n\t&__link--blogs {\r\n\t\t&::before {\r\n\t\t\tcontent: \"Blogs\";\r\n\t\t}\r\n\t}\r\n\t// .aside-menu__link--contact\r\n\t&__link--contact {\r\n\t\t&::before {\r\n\t\t\tcontent: \"Contact\";\r\n\t\t}\r\n\t}\r\n}\r\n",".title {\n\t@include title;\n\tfont-family: var(--font-family);\n\tline-height: 1.12;\n\tfont-size: clamp(var(--32), vwm(64px), 64px);\n\tfont-weight: 400;\n\ttext-transform: capitalize;\n\tcolor: var(--brand-1);\n\tdisplay: inline-block;\n\tmargin: 0 auto var(--32);\n\tposition: relative;\n\t&::before {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tbottom: -24px;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\twidth: 100%;\n\t\theight: 18px;\n\t\tbackground: url(../img/svg/icon-line.svg) 0 0/ 100% no-repeat;\n\t}\n}\n.tag {\n\tdisplay: block;\n\tfont-size: 14px;\n\tline-height: 1.29;\n\tcolor: var(--brand-2);\n\ttext-transform: lowercase;\n}\n.decor {\n\tsvg:first-child {\n\t\tcolor: var(--brand-1);\n\t}\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\trow-gap: 16px;\n\tmargin-bottom: var(--64);\n\t@media (max-width: 1680px) {\n\t\tdisplay: none;\n\t}\n}\n\n.main {\n\tposition: relative;\n\tpadding-top: clamp(138px, vw(234px), 234px);\n\t&__banner {\n\t\tpadding-bottom: var(--128);\n\t\t@include m {\n\t\t\tpadding-bottom: var(--64);\n\t\t}\n\t}\n\t&__about,\n\t&__skills,\n\t&__work {\n\t\tpadding-block: var(--128);\n\t\t@include m {\n\t\t\tpadding-block: var(--64);\n\t\t}\n\t}\n\t&__contact {\n\t\tpadding-block: var(--64);\n\t}\n}\n\n.section {\n\theight: 100vh;\n\t@media (max-width: 1680px) {\n\t\theight: auto;\n\t}\n}\n\n.banner {\n\tposition: relative;\n\t// .banner__container\n\t&__container {\n\t\tmax-width: calc(1412px + $paddingInline * 2);\n\t\tpadding-inline: $paddingInline;\n\t\tmargin: 0 auto;\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tcolumn-gap: 122px;\n\t\tgrid-template-columns: 328px 1fr;\n\t\t@media (max-width: 1420px) {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tjustify-items: center;\n\t\t\trow-gap: var(--64);\n\t\t}\n\t\t@include m {\n\t\t\tpadding-inline: 16px;\n\t\t}\n\t}\n\t// .banner__subtitle\n\t&__subtitle {\n\t\t@include title;\n\t\tgrid-column: 1/-1;\n\t\tfont-family: var(--font-family);\n\t\tfont-weight: 400;\n\t\tfont-size: clamp(90px, vwc(117px), 117px);\n\t\tline-height: 1.15;\n\t\ttext-transform: capitalize;\n\t\tcolor: var(--brand-2);\n\t\ttext-align: center;\n\t\tmargin-bottom: var(--64);\n\t\t@media (max-width: 1420px) {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\t// .banner__cv\n\t&__cv,\n\t.cv {\n\t\tmax-width: 328px;\n\t\tbox-shadow: -4px -4px 2px 0 var(--brand-1);\n\t\tbackground: var(--bg-1);\n\t\tborder: 4px solid var(--white);\n\t\tborder-radius: 160px 0;\n\t\tpadding: 34px 24px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\t@media (max-width: 1420px) {\n\t\t\tpadding: 34px 40px;\n\t\t}\n\t\t@include m {\n\t\t\tpadding: 32px 24px;\n\t\t}\n\t\t// .cv__img\n\t\t&__img {\n\t\t\twidth: 102px;\n\t\t\taspect-ratio: 1;\n\t\t\tmargin-bottom: 13px;\n\t\t}\n\t\t// .cv__titile\n\t\t&__titile {\n\t\t\t@include title;\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 32px;\n\t\t\tline-height: 1.31;\n\t\t\ttext-transform: capitalize;\n\t\t}\n\t\t// .cv__subtitle\n\t\t&__subtitle {\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 1.29;\n\t\t\tmargin-bottom: var(--32);\n\t\t}\n\t\t// .cv__address-list\n\t\t&__address-list {\n\t\t\t@include list;\n\t\t\talign-self: flex-start;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\trow-gap: 16px;\n\t\t\tmargin-bottom: 16px;\n\t\t}\n\t\t// .cv__address-item\n\t\t&__address-item {\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 1.29;\n\t\t\tpadding-left: 30px;\n\t\t\tcolor: inherit;\n\t\t\tbackground-position: 0 2px;\n\t\t\tbackground-size: 14px;\n\t\t\tbackground-repeat: no-repeat;\n\t\t}\n\t\t// .cv__address-link\n\t\t&__address-link {\n\t\t\t@include link;\n\t\t}\n\t\t// .cv__address-item_mail\n\t\t&__address-item_mail {\n\t\t\tbackground-image: url(../img/svg/icon-mail.svg);\n\t\t}\n\t\t// .cv__address-item_country\n\t\t&__address-item_country {\n\t\t\tbackground-image: url(../img/svg/icon-map-pin.svg);\n\t\t}\n\t\t// .cv__address-item_work\n\t\t&__address-item_work {\n\t\t\tbackground-image: url(../img/svg/icon-briefcase.svg);\n\t\t}\n\t\t// .cv__address-item_web\n\t\t&__address-item_web {\n\t\t\tbackground-image: url(../img/svg/icon-link.svg);\n\t\t}\n\t\t// .cv__skills-list\n\t\t&__skills-list {\n\t\t\t@include list;\n\t\t\talign-self: flex-start;\n\t\t\tdisplay: flex;\n\t\t\tcolumn-gap: 16px;\n\t\t\tmargin-bottom: var(--32);\n\t\t}\n\t\t// .cv__skills-item\n\t\t&__skills-item {\n\t\t\tborder-radius: 8px;\n\t\t\tpadding-inline: 8px;\n\t\t\tmin-height: 18px;\n\t\t\tbackground-color: var(--brand-1);\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 1.29;\n\t\t\tcolor: var(--bg-1);\n\t\t}\n\t\t// .cv__button\n\t\t&__button {\n\t\t\talign-self: flex-start;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tborder-radius: 32px;\n\t\t\tpadding: 16px 32px;\n\t\t\twidth: 227px;\n\t\t\theight: 58px;\n\t\t\tbackground:\n\t\t\t\turl(../img/svg/icon-download.svg) right 32px center no-repeat,\n\t\t\t\tvar(--white);\n\t\t\tfont-family: var(--font-family);\n\t\t\tfont-size: 20px;\n\t\t\tline-height: 1.2;\n\t\t\ttext-transform: capitalize;\n\t\t\tcolor: var(--bg-1);\n\t\t\ttext-align: left;\n\t\t\ttransition: background var(--transition);\n\t\t\t&:hover {\n\t\t\t\t@media (any-hover) {\n\t\t\t\t\tbackground-color: var(--brand-1);\n\t\t\t\t}\n\t\t\t}\n\t\t\t@include m {\n\t\t\t\twidth: 200px;\n\t\t\t\tpadding: 16px 22px;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\t\t}\n\t}\n\t// .banner__body\n\t&__body {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 215px;\n\t\tcolumn-gap: 74px;\n\t\t@media (max-width: 1420px) {\n\t\t\tgrid-template-columns: 1fr;\n\t\t}\n\t}\n\t// .banner__title\n\t&__title {\n\t\t@include title;\n\t\tline-height: 1.12;\n\t\tfont-size: clamp(var(--32), vwm(64px), 64px);\n\t\tfont-weight: 400;\n\t\ttext-transform: capitalize;\n\t\tcolor: var(--white);\n\t\tmargin-bottom: var(--32);\n\t}\n\t// .banner__pre\n\t&__pre {\n\t\tfont-family: var(--font-family);\n\t\tmargin-block: 0;\n\t}\n\t// .banner__name\n\t&__name {\n\t\tcolor: var(--brand-1);\n\t}\n\t// .banner__text\n\t&__text {\n\t\t@include p;\n\t\tpadding-left: 24px;\n\t\tgrid-column: 1/2;\n\t\tmargin-bottom: 16px;\n\t\t.tag {\n\t\t\tmargin-left: -24px;\n\t\t\t&:first-child {\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t}\n\t\t\t&:last-child {\n\t\t\t\tmargin-top: 16px;\n\t\t\t}\n\t\t}\n\t}\n\t// .banner__link\n\t&__link {\n\t\t@include link;\n\t\t@include hover;\n\t\tposition: relative;\n\t\tgrid-column: 1/2;\n\t\tjustify-self: start;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tcolumn-gap: 16px;\n\t\tfont-weight: 500;\n\t\tfont-size: clamp(28px, vwm(32px), 32px);\n\t\tline-height: 1.31;\n\t\ttext-transform: capitalize;\n\t\tcolor: var(--brand-1);\n\t\tmargin-left: 24px;\n\t\t&::after {\n\t\t\tcontent: \"\";\n\t\t\twidth: 40px;\n\t\t\taspect-ratio: 1;\n\t\t\tborder-radius: 50%;\n\t\t\tbackground-color: var(--grey);\n\t\t\tbackground-image: url(../img/svg/icon-mail.svg);\n\t\t\tbackground-position: center;\n\t\t\tbackground-repeat: no-repeat;\n\t\t}\n\t\t@media (max-width: 1420px) {\n\t\t\tmargin-bottom: var(--64);\n\t\t}\n\t}\n\t// .banner__skills\n\t&__skills {\n\t\tgrid-column: 2/3;\n\t\tgrid-row: 1/4;\n\t\talign-self: center;\n\t\tborder-radius: 80px;\n\t\tpadding: 48px 32px;\n\t\tbox-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);\n\t\tbackground-color: var(--bg-2);\n\t\t@media (max-width: 1023px) {\n\t\t\tmax-width: 215px;\n\t\t\tgrid-column: 1/2;\n\t\t\tgrid-row: 4/5;\n\t\t\tjustify-self: center;\n\t\t}\n\t}\n\t// .banner__skills-list\n\t&__skills-list {\n\t\t@include list;\n\t}\n\t// .banner__skills-item\n\t&__skills-item {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tcolumn-gap: 16px;\n\t\t&:not(:last-child) {\n\t\t\tmargin-bottom: 48px;\n\t\t}\n\t}\n\t// .banner__skills-number\n\t&__skills-number {\n\t\tfont-weight: 500;\n\t\tfont-size: 48px;\n\t\tline-height: 1.29;\n\t\ttext-transform: capitalize;\n\t\tcolor: var(--brand-1);\n\t}\n}\n\n.about {\n\tbackground: url(../img/bg/bg-about.jpg) 50% / cover no-repeat;\n\t// .about__container\n\t&__container {\n\t\tmax-width: calc(1412px + $paddingInline * 2);\n\t\tpadding-inline: $paddingInline;\n\t\tmargin: 0 auto;\n\t\tdisplay: grid;\n\t\t@include m {\n\t\t\tpadding-inline: 16px;\n\t\t}\n\t}\n\t// .about__title\n\t&__title {\n\t\t@include m {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\t// .about__subtext\n\t&__subtext {\n\t\t@include p;\n\t\ttext-align: center;\n\t\tmargin-bottom: var(--128);\n\t\t@include m {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\t// .about__body\n\t&__body {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 462px;\n\t\tcolumn-gap: var(--128);\n\t\tjustify-items: start;\n\t\t@include d {\n\t\t\tcolumn-gap: var(--64);\n\t\t\tgrid-template-columns: 1fr 380px;\n\t\t}\n\t\t@include t {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\trow-gap: var(--64);\n\t\t}\n\t}\n\t// .about__subtitle\n\t&__subtitle {\n\t\t@include title;\n\t\tgrid-column: 1/2;\n\t\tcolor: var(--white);\n\t\tborder: 4px solid var(--brand-1);\n\t\tborder-radius: 40px 0;\n\t\tpadding: 16px 40px;\n\t\tbackground: var(--bg-1);\n\t\talign-self: center;\n\t\tmargin: 0 0 var(--64) 0;\n\t\t&::before {\n\t\t\tdisplay: none;\n\t\t}\n\t\t@include d {\n\t\t\tmargin-bottom: var(--32);\n\t\t}\n\t\t@include t {\n\t\t\tmargin: 0;\n\t\t\tgrid-column: 1/1;\n\t\t\tgrid-row: 1/2;\n\t\t}\n\t}\n\t// .about__text\n\t&__text {\n\t\tgrid-column: 1/1;\n\t\t@include p;\n\t\tborder-radius: 40px;\n\t\tpadding: 24px 40px;\n\t\tbackground: var(--bg-1);\n\t\talign-self: self-end;\n\t\t.tag {\n\t\t\t&:first-child {\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t}\n\t\t\t&:last-child {\n\t\t\t\tmargin-top: 16px;\n\t\t\t}\n\t\t}\n\t\t@include t {\n\t\t\tgrid-column: 1/1;\n\t\t\tgrid-row: 2/3;\n\t\t\tpadding: 24px;\n\t\t}\n\t}\n\t// .about__img\n\t&__img {\n\t\tgrid-column: 2/3;\n\t\tgrid-row: 1/3;\n\t\tborder-radius: 16px;\n\t\tmargin-left: 64px;\n\t\t@media (max-width: 1680px) {\n\t\t\tmargin-left: 0;\n\t\t}\n\t\t@include d {\n\t\t\tmax-width: 100%;\n\t\t}\n\t\t@include t {\n\t\t\talign-self: start;\n\t\t\tgrid-column: 1/1;\n\t\t\tgrid-row: 3/4;\n\t\t\tjustify-self: center;\n\t\t\tmax-width: clamp(272px, vwt(462px), 462px);\n\t\t\theight: auto;\n\t\t\tmin-height: 364px;\n\t\t}\n\t}\n}\n\n.skills {\n\tbackground: url(../img/bg/bg-skills.jpg) 50% / cover no-repeat;\n\t// .skills__container\n\t&__container {\n\t\tmax-width: calc(960px + $paddingInline * 2);\n\t\tpadding-inline: $paddingInline;\n\t\tmargin: 0 auto;\n\t\tposition: relative;\n\t\tdisplay: grid;\n\t\t@include m {\n\t\t\tpadding-inline: 16px;\n\t\t}\n\t\t&::before {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\twidth: 255px;\n\t\t\theight: 193px;\n\t\t\tbackground: url(../img/svg/skils-decor.svg) 0 0 no-repeat;\n\t\t\t@include d {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t}\n\t// .skills__subtext\n\t&__subtext {\n\t\t@include p;\n\t\ttext-align: center;\n\t\tmargin-bottom: var(--64);\n\t}\n\t// .skills__body\n\t&__body {\n\t\tdisplay: flex;\n\t\tcolumn-gap: var(--128);\n\t\tjustify-content: center;\n\t}\n\t// .skills__kard\n\t&__kard {\n\t\tborder-left: 8px solid var(--css);\n\t\tborder-radius: 8px;\n\t\tpadding: 16px 24px;\n\t\tmax-width: 288px;\n\t\tbackground: var(--brand-2);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\trow-gap: 8px;\n\t\t@include link;\n\t\tmargin-bottom: 90px;\n\t\ttransition: transform var(--transition);\n\t\t&:hover {\n\t\t\t@media (any-hover) {\n\t\t\t\ttransform: scale(1.03);\n\t\t\t}\n\t\t}\n\t\t&:active {\n\t\t\ttransform: scale(0.99);\n\t\t}\n\t\t@include sm {\n\t\t\tmax-width: 100%;\n\t\t}\n\t}\n\t// .skills__kard-title\n\t&__kard-title {\n\t\t@include title;\n\t\tfont-size: 24px;\n\t\tline-height: 1.33;\n\t\ttext-transform: capitalize;\n\t\tcolor: var(--bg-1);\n\t\tword-wrap: none;\n\t\twidth: 100%;\n\t}\n\t// .skills__kard-text\n\t&__kard-text {\n\t\ttext-transform: uppercase;\n\t\tcolor: var(--grey);\n\t}\n\t// .skills__list\n\t&__list {\n\t\t@include list;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fit, minmax(144px, 1fr));\n\t\tjustify-content: center;\n\t\tgap: var(--128);\n\t\t@include d {\n\t\t\tgap: var(--64);\n\t\t}\n\t\t@include m {\n\t\t\tgrid-template-columns: repeat(auto-fit, minmax(114px, 1fr));\n\t\t}\n\t}\n\t// .skills__list-link\n\t&__list-link {\n\t\t@include link;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\trow-gap: 24px;\n\t\tfont-weight: 500;\n\t\tfont-size: 32px;\n\t\tline-height: 1.31;\n\t\ttext-transform: uppercase;\n\t\ttransition: transform var(--transition);\n\t\t&:hover {\n\t\t\t@media (any-hover) {\n\t\t\t\ttransform: scale(1.03);\n\t\t\t}\n\t\t}\n\t\t&:active {\n\t\t\ttransform: scale(0.99);\n\t\t}\n\t}\n\t&__list-link--html {\n\t\tcolor: var(--html);\n\t}\n\t&__list-link--css {\n\t\tcolor: var(--css);\n\t}\n\t&__list-link--js {\n\t\tcolor: var(--js);\n\t}\n\t&__list-link--react {\n\t\tcolor: var(--react);\n\t}\n\t// .skills__list-img\n\t&__list-img {\n\t\t@include m {\n\t\t\t// width: 114px;\n\t\t\t// aspect-ratio: 1;\n\t\t}\n\t}\n}\n\n.work {\n\tbackground: url(../img/bg/bg-work.jpg) 50% / cover no-repeat;\n\t// .work__container\n\t&__container {\n\t\tmax-width: calc(921px + $paddingInline * 2);\n\t\tpadding-inline: $paddingInline;\n\t\tmargin: 0 auto;\n\t\t@include m {\n\t\t\tpadding-inline: 16px;\n\t\t}\n\t}\n\t// .work__header\n\t&__header {\n\t\tdisplay: grid;\n\t\tmargin-bottom: var(--64);\n\t}\n\t// .work__title\n\t&__title {\n\t\ttext-align: center;\n\t}\n\t// .work__subtext\n\t&__subtext {\n\t\t@include p;\n\t\ttext-align: center;\n\t}\n}\n\n.contact {\n\tbackground: var(--bg-1);\n\t// .contact__container\n\t&__container {\n\t\tmax-width: calc(1120px + $paddingInline * 2);\n\t\tpadding-inline: $paddingInline;\n\t\tmargin: 0 auto;\n\t\tdisplay: grid;\n\t\t@include m {\n\t\t\tpadding-inline: 16px;\n\t\t}\n\t}\n\t// .contact__subtext\n\t&__subtext {\n\t\t@include p;\n\t\ttext-align: center;\n\t\tmargin-bottom: 100px;\n\t}\n\t// .contact__subtitle\n\t&__subtitle {\n\t\t@include title;\n\t\tborder: 2px solid var(--brand-1);\n\t\tborder-radius: 32px 0;\n\t\tpadding: 16px 40px;\n\t\ttext-align: center;\n\t\tjustify-self: center;\n\t\tfont-weight: 500;\n\t\tfont-size: clamp(24px, vwm(32px), 32px);\n\t\tline-height: 1.31;\n\t\ttext-transform: capitalize;\n\t\tcolor: var(--brand-1);\n\t\tmargin-bottom: var(--64);\n\t}\n\t// .contact__form\n\t&__form {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tcolumn-gap: clamp(64px, vwt(128px), 128px);\n\t\tfont-family: var(--font-family);\n\t\tfont-weight: 300;\n\t\tline-height: 1.2;\n\t\tcolor: var(--white);\n\t\t@include sm {\n\t\t\tgrid-template-columns: 1fr;\n\t\t}\n\t}\n\t// .contact__label\n\t&__label {\n\t\t&:first-child {\n\t\t\tgrid-column: 1/2;\n\t\t\tgrid-row: 1/2;\n\t\t}\n\t\tcolor: var(--brand-1);\n\t\tmargin-bottom: 24px;\n\t}\n\t&__input,\n\t&__textarea {\n\t\t@include input;\n\t\tmin-height: 26px;\n\t\tbackground-color: transparent;\n\t\tborder-bottom: 1px solid var(--brand-2);\n\t\tmargin-bottom: var(--64);\n\t}\n\t// .contact__input\n\t&__input {\n\t\t&:nth-child(2) {\n\t\t\tgrid-column: 1/2;\n\t\t\tgrid-row: 2/3;\n\t\t\t@include sm {\n\t\t\t\tgrid-column: 1/2;\n\t\t\t}\n\t\t}\n\t}\n\t// .contact__textarea\n\t&__textarea {\n\t\talign-content: center;\n\t\tgrid-column: 1/3;\n\t\tgrid-row: 4/5;\n\t\tresize: none;\n\t\t@include sm {\n\t\t\tgrid-column: 1/2;\n\t\t\tgrid-row: 6/7;\n\t\t}\n\t}\n\t// .contact__button\n\t&__button {\n\t\tfont-family: var(--font-family);\n\t\tjustify-self: center;\n\t\tborder-radius: 32px;\n\t\tborder: 0;\n\t\tpadding: 16px 32px;\n\t\tmin-height: 56px;\n\t\tbackground-color: var(--brand-1);\n\t\tfont-weight: 400;\n\t\tfont-size: 20px;\n\t\tline-height: 1.2;\n\t\ttext-transform: capitalize;\n\t\tcolor: var(--bg-1);\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tcolumn-gap: 16px;\n\t\ttransition: background-color var(--transition);\n\t\t&::after {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 22px;\n\t\t\taspect-ratio: 1;\n\t\t\tbackground: url(../img/svg/icon-send.svg) 0 0 no-repeat;\n\t\t}\n\t\t&:hover {\n\t\t\tbackground-color: var(--brand-2);\n\t\t}\n\t}\n}\n",".footer {\r\n\tborder-top: 1px solid var(--grey);\r\n\t// .footer__container\r\n\t&__container {\r\n\t\tmax-width: calc(1120px + $paddingInline * 2);\r\n\t\tpadding-inline: $paddingInline;\r\n\t\tmargin: 0 auto;\r\n\t\tmin-height: 64px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\t@include m {\r\n\t\t\tpadding-inline: 16px;\r\n\t\t}\r\n\t}\r\n\t// .footer__title\r\n\t&__title {\r\n\t\tfont-family: var(--font-family);\r\n\t\tfont-weight: 300;\r\n\t\tcolor: var(--white);\r\n\t}\r\n\t// .footer__social-list\r\n\t&__social-list,\r\n\t.social-list {\r\n\t\t@include list;\r\n\t\tdisplay: flex;\r\n\t\tcolumn-gap: var(--32);\r\n\t\t// .social-list__link\r\n\t\t&__link {\r\n\t\t\t@include link;\r\n\t\t\t@include hover;\r\n\t\t\tposition: relative;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tcolumn-gap: 8px;\r\n\t\t\tspan {\r\n\t\t\t\t@include sm {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .social-list__icon\r\n\t\t&__icon {\r\n\t\t\tcolor: var(--brand-1);\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/scss/components/swiper-bundle.min.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/scss/components/swiper-bundle.min.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:application/font-woff;charset=utf-8;base64, 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 */ "data:application/font-woff;charset=utf-8;base64, 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"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/svg/icon-mouse-pointer.svg */ "./src/img/svg/icon-mouse-pointer.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
 */

@font-face {
	font-family: swiper-icons;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	font-weight: 400;
	font-style: normal
}
:root {
	--swiper-theme-color: #007aff
}
:host {
	position: relative;
	display: block;
	margin-left: auto;
	margin-right: auto;
	z-index: 1
}
.swiper {
	margin-left: auto;
	margin-right: auto;
	position: relative;
	overflow: hidden;
	list-style: none;
	padding: 0;
	z-index: 1;
	display: block;
}
.swiper-vertical > .swiper-wrapper {
	flex-direction: column
}
.swiper-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	transition-property: transform;
	transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
	box-sizing: content-box
}
.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
	transform: translate3d(0px, 0, 0)
}
.swiper-horizontal {
	touch-action: pan-y
}
.swiper-vertical {
	touch-action: pan-x
}
.swiper-slide {
	flex-shrink: 0;
	width: 100%;
	height: 100%;
	position: relative;
	transition-property: transform;
	display: flex;
	justify-content: center;
}
.swiper-slide-link {
	position: relative;
	max-width: 100%;
}
.swiper-slide-img {
	max-width: 100%;
	height: auto;
}
.swiper-slide-img-wrap {
	position: absolute;
	top: 30%;
	right: 7.5%;
	width: 100%;
	height: 100%;
	max-width: 45.84%;
	max-height: 40.04%;
	overflow: auto;
}
.swiper-slide-code-wrap {
	position: absolute;
	top: 13%;
	left: 8.5%;
	width: 100%;
	max-width: 32.46%;
	max-height: 64.12%;
	overflow: auto;
}
.swiper-slide-code-wrap::-webkit-scrollbar,
.swiper-slide-img-wrap::-webkit-scrollbar {
	width: 3px;
}
.swiper-slide-code-wrap::-webkit-scrollbar-thumb,
.swiper-slide-img-wrap::-webkit-scrollbar-thumb {
	background-color: var(--bg-2);
	border-radius: 10px;
	border: none;
}
.swiper-slide-code-wrap::-webkit-scrollbar-track,
.swiper-slide-img-wrap::-webkit-scrollbar-track {
	background: var(--white);
}
.swiper-slide-code-wrap::-webkit-scrollbar-thumb:hover,
.swiper-slide-img-wrap::-webkit-scrollbar-thumb:hover {
	background-color: var(--bg-2);
}
.swiper-slide-img-site {
	width: 100%;
	object-fit: cover;
}
.swiper-slide-code {
	width: 100%;
	object-fit: cover;
}
.swiper-link {
	text-decoration: none;
	font-size: 24px;
	line-height: 1.33;
	text-transform: capitalize;
	color: var(--brand-1);
	position: relative;
}
.swiper-link-text {
	position: absolute;
	top: 14.58%;
	right: 18%;
	font-size: 24px;
	line-height: 1.33;
	text-transform: capitalize;
	color: var(--brand-1);
}
@media(max-width:767.98px) {
	.swiper-link-text {
		font-size: 16px;
	}
}
@media(max-width:424.98px) {
	.swiper-link-text {
		font-size: 14px;
	}
}
.swiper-link-text::before {
	content: '';
	position: absolute;
	bottom: -5px;
	left: 0;
	width: 100%;
	height: 2px;
	background-color: var(--white);
}
.swiper-link-text::after {
	content: '';
	position: absolute;
	top: 55%;
	right: -25px;
	width: 16px;
	height: 16px;
	background: url(${___CSS_LOADER_URL_REPLACEMENT_1___})0 0 no-repeat;
}
.swiper-slide-invisible-blank {
	visibility: hidden
}
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
	height: auto
}
.swiper-autoheight .swiper-wrapper {
	align-items: flex-start;
	transition-property: transform, height
}
.swiper-backface-hidden .swiper-slide {
	transform: translateZ(0);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden
}
.swiper-3d.swiper-css-mode .swiper-wrapper {
	perspective: 1200px
}
.swiper-3d .swiper-wrapper {
	transform-style: preserve-3d
}
.swiper-3d {
	perspective: 1200px
}
.swiper-3d .swiper-cube-shadow,
.swiper-3d .swiper-slide {
	transform-style: preserve-3d
}
.swiper-css-mode > .swiper-wrapper {
	overflow: auto;
	scrollbar-width: none;
	-ms-overflow-style: none
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
	display: none
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
	scroll-snap-align: start start
}
.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
	scroll-snap-type: x mandatory
}
.swiper-css-mode.swiper-vertical > .swiper-wrapper {
	scroll-snap-type: y mandatory
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
	scroll-snap-type: none
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
	scroll-snap-align: none
}
.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
	content: '';
	flex-shrink: 0;
	order: 9999
}
.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
	scroll-snap-align: center center;
	scroll-snap-stop: always
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
	margin-inline-start: var(--swiper-centered-offset-before)
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
	height: 100%;
	min-height: 1px;
	width: var(--swiper-centered-offset-after)
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
	margin-block-start: var(--swiper-centered-offset-before)
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
	width: 100%;
	min-width: 1px;
	height: var(--swiper-centered-offset-after)
}
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: 10
}
.swiper-3d .swiper-slide-shadow {
	background: rgba(0, 0, 0, .15)
}
.swiper-3d .swiper-slide-shadow-left {
	background-image: linear-gradient(to left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))
}
.swiper-3d .swiper-slide-shadow-right {
	background-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))
}
.swiper-3d .swiper-slide-shadow-top {
	background-image: linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))
}
.swiper-3d .swiper-slide-shadow-bottom {
	background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))
}
.swiper-lazy-preloader {
	width: 42px;
	height: 42px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -21px;
	margin-top: -21px;
	z-index: 10;
	transform-origin: 50%;
	box-sizing: border-box;
	border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
	border-radius: 50%;
	border-top-color: transparent
}
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader {
	animation: swiper-preloader-spin 1s infinite linear
}
.swiper-lazy-preloader-white {
	--swiper-preloader-color: #fff
}
.swiper-lazy-preloader-black {
	--swiper-preloader-color: #000
}
@keyframes swiper-preloader-spin {
	0% {
		transform: rotate(0deg)
	}
	100% {
		transform: rotate(360deg)
	}
}
.swiper-virtual .swiper-slide {
	-webkit-backface-visibility: hidden;
	transform: translateZ(0)
}
.swiper-virtual.swiper-css-mode .swiper-wrapper::after {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	pointer-events: none
}
.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
	height: 1px;
	width: var(--swiper-virtual-size)
}
.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
	width: 1px;
	height: var(--swiper-virtual-size)
}
:root {
	--swiper-navigation-size: 44px
}
.swiper-button-next,
.swiper-button-prev {
	position: absolute;
	top: var(--swiper-navigation-top-offset, 50%);
	width: 15px;
	height: 24px;
	margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
	z-index: 10;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--swiper-navigation-color, var(--swiper-theme-color))
}
@media(max-width:860px) {
	.swiper-button-next,
	.swiper-button-prev {
		top: var(--swiper-navigation-top-offset, 96%);
	}
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
	opacity: .35;
	cursor: auto;
	pointer-events: none
}
.swiper-button-next.swiper-button-hidden,
.swiper-button-prev.swiper-button-hidden {
	opacity: 0;
	cursor: auto;
	pointer-events: none
}
.swiper-navigation-disabled .swiper-button-next,
.swiper-navigation-disabled .swiper-button-prev {
	display: none !important
}
.swiper-button-next svg,
.swiper-button-prev svg {
	width: 100%;
	height: 100%;
	object-fit: contain;
	transform-origin: center;
}
.swiper-rtl .swiper-button-next svg,
.swiper-rtl .swiper-button-prev svg {
	transform: rotate(180deg)
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
	left: 3.9%;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
	right: 3.9%;
}
.swiper-button-lock {
	display: none
}
.swiper-button-next::before,
.swiper-button-prev::before {
	content: '';
	position: absolute;
	z-index: -1;
	width: 72px;
	aspect-ratio: 1;
	background-color: var(--bg-1);
	border-radius: 50%;
}
@media(max-width:860px) {
	.swiper-button-next::before,
	.swiper-button-prev::before {
		width: 36px;
	}
}
.swiper-button-next:after,
.swiper-button-prev:after {
	font-family: swiper-icons;
	text-transform: none !important;
	letter-spacing: 0;
	font-variant: initial;
	line-height: 1;
	color: var(--white);
	transition: color var(--transition);
}
.swiper-button-next:hover::after,
.swiper-button-prev:hover::after {
	color: var(--brand-1);
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
	content: 'prev'
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
	content: 'next'
}
.swiper-pagination {
	position: absolute;
	text-align: center;
	transition: .3s opacity;
	transform: translate3d(0, 0, 0);
	z-index: 10
}
.swiper-pagination.swiper-pagination-hidden {
	opacity: 0
}
.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
	display: none !important
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
	bottom: var(--swiper-pagination-bottom, 8px);
	top: var(--swiper-pagination-top, auto);
	left: 0;
	width: 100%
}
.swiper-pagination-bullets-dynamic {
	overflow: hidden;
	font-size: 0
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
	transform: scale(.33);
	position: relative
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
	transform: scale(1)
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
	transform: scale(1)
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
	transform: scale(.66)
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
	transform: scale(.33)
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
	transform: scale(.66)
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
	transform: scale(.33)
}
.swiper-pagination-bullet {
	width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
	height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
	display: inline-block;
	border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
	background: var(--swiper-pagination-bullet-inactive-color, #000);
	opacity: var(--swiper-pagination-bullet-inactive-opacity, .2)
}
button.swiper-pagination-bullet {
	border: none;
	margin: 0;
	padding: 0;
	box-shadow: none;
	-webkit-appearance: none;
	appearance: none
}
.swiper-pagination-clickable .swiper-pagination-bullet {
	cursor: pointer
}
.swiper-pagination-bullet:only-child {
	display: none !important
}
.swiper-pagination-bullet-active {
	opacity: var(--swiper-pagination-bullet-opacity, 1);
	background: var(--swiper-pagination-color, var(--swiper-theme-color))
}
.swiper-pagination-vertical.swiper-pagination-bullets,
.swiper-vertical > .swiper-pagination-bullets {
	right: var(--swiper-pagination-right, 8px);
	left: var(--swiper-pagination-left, auto);
	top: 50%;
	transform: translate3d(0px, -50%, 0)
}
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
	display: block
}
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
	top: 50%;
	transform: translateY(-50%);
	width: 8px
}
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
	display: inline-block;
	transition: .2s transform, .2s top
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px)
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
	left: 50%;
	transform: translateX(-50%);
	white-space: nowrap
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
	transition: .2s transform, .2s left
}
.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
	transition: .2s transform, .2s right
}
.swiper-pagination-fraction {
	color: var(--swiper-pagination-fraction-color, inherit)
}
.swiper-pagination-progressbar {
	background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));
	position: absolute
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
	background: var(--swiper-pagination-color, var(--swiper-theme-color));
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	transform: scale(0);
	transform-origin: left top
}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
	transform-origin: right top
}
.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
	width: 100%;
	height: var(--swiper-pagination-progressbar-size, 4px);
	left: 0;
	top: 0
}
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-vertical > .swiper-pagination-progressbar {
	width: var(--swiper-pagination-progressbar-size, 4px);
	height: 100%;
	left: 0;
	top: 0
}
.swiper-pagination-lock {
	display: none
}
.swiper-scrollbar {
	border-radius: var(--swiper-scrollbar-border-radius, 10px);
	position: relative;
	touch-action: none;
	background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))
}
.swiper-scrollbar-disabled > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-disabled {
	display: none !important
}
.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
	position: absolute;
	left: var(--swiper-scrollbar-sides-offset, 1%);
	bottom: var(--swiper-scrollbar-bottom, 4px);
	top: var(--swiper-scrollbar-top, auto);
	z-index: 50;
	height: var(--swiper-scrollbar-size, 4px);
	width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))
}
.swiper-scrollbar.swiper-scrollbar-vertical,
.swiper-vertical > .swiper-scrollbar {
	position: absolute;
	left: var(--swiper-scrollbar-left, auto);
	right: var(--swiper-scrollbar-right, 4px);
	top: var(--swiper-scrollbar-sides-offset, 1%);
	z-index: 50;
	width: var(--swiper-scrollbar-size, 4px);
	height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))
}
.swiper-scrollbar-drag {
	height: 100%;
	width: 100%;
	position: relative;
	background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));
	border-radius: var(--swiper-scrollbar-border-radius, 10px);
	left: 0;
	top: 0
}
.swiper-scrollbar-cursor-drag {
	cursor: move
}
.swiper-scrollbar-lock {
	display: none
}
.swiper-zoom-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center
}
.swiper-zoom-container > canvas,
.swiper-zoom-container > img,
.swiper-zoom-container > svg {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain
}
.swiper-slide-zoomed {
	cursor: move;
	touch-action: none
}
.swiper .swiper-notification {
	position: absolute;
	left: 0;
	top: 0;
	pointer-events: none;
	opacity: 0;
	z-index: -1000
}
.swiper-free-mode > .swiper-wrapper {
	transition-timing-function: ease-out;
	margin: 0 auto
}
.swiper-grid > .swiper-wrapper {
	flex-wrap: wrap
}
.swiper-grid-column > .swiper-wrapper {
	flex-wrap: wrap;
	flex-direction: column
}
.swiper-fade.swiper-free-mode .swiper-slide {
	transition-timing-function: ease-out
}
.swiper-fade .swiper-slide {
	pointer-events: none;
	transition-property: opacity
}
.swiper-fade .swiper-slide .swiper-slide {
	pointer-events: none
}
.swiper-fade .swiper-slide-active {
	pointer-events: auto
}
.swiper-fade .swiper-slide-active .swiper-slide-active {
	pointer-events: auto
}
.swiper-cube {
	overflow: visible
}
.swiper-cube .swiper-slide {
	pointer-events: none;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	z-index: 1;
	visibility: hidden;
	transform-origin: 0 0;
	width: 100%;
	height: 100%
}
.swiper-cube .swiper-slide .swiper-slide {
	pointer-events: none
}
.swiper-cube.swiper-rtl .swiper-slide {
	transform-origin: 100% 0
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-active .swiper-slide-active {
	pointer-events: auto
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-next,
.swiper-cube .swiper-slide-prev {
	pointer-events: auto;
	visibility: visible
}
.swiper-cube .swiper-cube-shadow {
	position: absolute;
	left: 0;
	bottom: 0px;
	width: 100%;
	height: 100%;
	opacity: .6;
	z-index: 0
}
.swiper-cube .swiper-cube-shadow:before {
	content: '';
	background: #000;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	filter: blur(50px)
}
.swiper-cube .swiper-slide-next + .swiper-slide {
	pointer-events: auto;
	visibility: visible
}
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top {
	z-index: 0;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden
}
.swiper-flip {
	overflow: visible
}
.swiper-flip .swiper-slide {
	pointer-events: none;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	z-index: 1
}
.swiper-flip .swiper-slide .swiper-slide {
	pointer-events: none
}
.swiper-flip .swiper-slide-active,
.swiper-flip .swiper-slide-active .swiper-slide-active {
	pointer-events: auto
}
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top {
	z-index: 0;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden
}
.swiper-creative .swiper-slide {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	overflow: hidden;
	transition-property: transform, opacity, height
}
.swiper-cards {
	overflow: visible
}
.swiper-cards .swiper-slide {
	transform-origin: center bottom;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	overflow: hidden
}`, "",{"version":3,"sources":["webpack://./src/scss/components/swiper-bundle.min.css"],"names":[],"mappings":"AAAA;;;;;;;;;;EAUE;;AAEF;CACC,yBAAyB;CACzB,4CAA6rE;CAC7rE,gBAAgB;CAChB;AACD;AACA;CACC;AACD;AACA;CACC,kBAAkB;CAClB,cAAc;CACd,iBAAiB;CACjB,kBAAkB;CAClB;AACD;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,kBAAkB;CAClB,gBAAgB;CAChB,gBAAgB;CAChB,UAAU;CACV,UAAU;CACV,cAAc;AACf;AACA;CACC;AACD;AACA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,UAAU;CACV,aAAa;CACb,8BAA8B;CAC9B,qFAAqF;CACrF;AACD;AACA;;;CAGC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC,cAAc;CACd,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,8BAA8B;CAC9B,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,eAAe;CACf,YAAY;AACb;AACA;CACC,kBAAkB;CAClB,QAAQ;CACR,WAAW;CACX,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,kBAAkB;CAClB,cAAc;AACf;AACA;CACC,kBAAkB;CAClB,QAAQ;CACR,UAAU;CACV,WAAW;CACX,iBAAiB;CACjB,kBAAkB;CAClB,cAAc;AACf;AACA;;CAEC,UAAU;AACX;AACA;;CAEC,6BAA6B;CAC7B,mBAAmB;CACnB,YAAY;AACb;AACA;;CAEC,wBAAwB;AACzB;AACA;;CAEC,6BAA6B;AAC9B;AACA;CACC,WAAW;CACX,iBAAiB;AAClB;AACA;CACC,WAAW;CACX,iBAAiB;AAClB;AACA;CACC,qBAAqB;CACrB,eAAe;CACf,iBAAiB;CACjB,0BAA0B;CAC1B,qBAAqB;CACrB,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,WAAW;CACX,UAAU;CACV,eAAe;CACf,iBAAiB;CACjB,0BAA0B;CAC1B,qBAAqB;AACtB;AACA;CACC;EACC,eAAe;CAChB;AACD;AACA;CACC;EACC,eAAe;CAChB;AACD;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,YAAY;CACZ,OAAO;CACP,WAAW;CACX,WAAW;CACX,8BAA8B;AAC/B;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,QAAQ;CACR,YAAY;CACZ,WAAW;CACX,YAAY;CACZ,gEAAkE;AACnE;AACA;CACC;AACD;AACA;;CAEC;AACD;AACA;CACC,uBAAuB;CACvB;AACD;AACA;CACC,wBAAwB;CACxB,mCAAmC;CACnC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;;CAEC;AACD;AACA;CACC,cAAc;CACd,qBAAqB;CACrB;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC,WAAW;CACX,cAAc;CACd;AACD;AACA;CACC,gCAAgC;CAChC;AACD;AACA;CACC;AACD;AACA;CACC,YAAY;CACZ,eAAe;CACf;AACD;AACA;CACC;AACD;AACA;CACC,WAAW;CACX,cAAc;CACd;AACD;AACA;;;;;CAKC,kBAAkB;CAClB,OAAO;CACP,MAAM;CACN,WAAW;CACX,YAAY;CACZ,oBAAoB;CACpB;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,SAAS;CACT,QAAQ;CACR,kBAAkB;CAClB,iBAAiB;CACjB,WAAW;CACX,qBAAqB;CACrB,sBAAsB;CACtB,0EAA0E;CAC1E,kBAAkB;CAClB;AACD;AACA;;CAEC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;EACC;CACD;CACA;EACC;CACD;AACD;AACA;CACC,mCAAmC;CACnC;AACD;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,OAAO;CACP,MAAM;CACN;AACD;AACA;CACC,WAAW;CACX;AACD;AACA;CACC,UAAU;CACV;AACD;AACA;CACC;AACD;AACA;;CAEC,kBAAkB;CAClB,6CAA6C;CAC7C,WAAW;CACX,YAAY;CACZ,0DAA0D;CAC1D,WAAW;CACX,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB;AACD;AACA;CACC;;EAEC,6CAA6C;CAC9C;AACD;AACA;;CAEC,YAAY;CACZ,YAAY;CACZ;AACD;AACA;;CAEC,UAAU;CACV,YAAY;CACZ;AACD;AACA;;CAEC;AACD;AACA;;CAEC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,wBAAwB;AACzB;AACA;;CAEC;AACD;AACA;;CAEC,UAAU;AACX;AACA;;CAEC,WAAW;AACZ;AACA;CACC;AACD;AACA;;CAEC,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,WAAW;CACX,eAAe;CACf,6BAA6B;CAC7B,kBAAkB;AACnB;AACA;CACC;;EAEC,WAAW;CACZ;AACD;AACA;;CAEC,yBAAyB;CACzB,+BAA+B;CAC/B,iBAAiB;CACjB,qBAAqB;CACrB,cAAc;CACd,mBAAmB;CACnB,mCAAmC;AACpC;AACA;;CAEC,qBAAqB;AACtB;AACA;;CAEC;AACD;AACA;;CAEC;AACD;AACA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,uBAAuB;CACvB,+BAA+B;CAC/B;AACD;AACA;CACC;AACD;AACA;;CAEC;AACD;AACA;;;;CAIC,4CAA4C;CAC5C,uCAAuC;CACvC,OAAO;CACP;AACD;AACA;CACC,gBAAgB;CAChB;AACD;AACA;CACC,qBAAqB;CACrB;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC,uFAAuF;CACvF,yFAAyF;CACzF,qBAAqB;CACrB,iEAAiE;CACjE,gEAAgE;CAChE;AACD;AACA;CACC,YAAY;CACZ,SAAS;CACT,UAAU;CACV,gBAAgB;CAChB,wBAAwB;CACxB;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC,mDAAmD;CACnD;AACD;AACA;;CAEC,0CAA0C;CAC1C,yCAAyC;CACzC,QAAQ;CACR;AACD;AACA;;CAEC,2DAA2D;CAC3D;AACD;AACA;;CAEC,QAAQ;CACR,2BAA2B;CAC3B;AACD;AACA;;CAEC,qBAAqB;CACrB;AACD;AACA;;CAEC;AACD;AACA;;CAEC,SAAS;CACT,2BAA2B;CAC3B;AACD;AACA;;CAEC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC,6EAA6E;CAC7E;AACD;AACA;CACC,qEAAqE;CACrE,kBAAkB;CAClB,OAAO;CACP,MAAM;CACN,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB;AACD;AACA;CACC;AACD;AACA;;;;CAIC,WAAW;CACX,sDAAsD;CACtD,OAAO;CACP;AACD;AACA;;;;CAIC,qDAAqD;CACrD,YAAY;CACZ,OAAO;CACP;AACD;AACA;CACC;AACD;AACA;CACC,0DAA0D;CAC1D,kBAAkB;CAClB,kBAAkB;CAClB;AACD;AACA;;CAEC;AACD;AACA;;CAEC,kBAAkB;CAClB,8CAA8C;CAC9C,2CAA2C;CAC3C,sCAAsC;CACtC,WAAW;CACX,yCAAyC;CACzC;AACD;AACA;;CAEC,kBAAkB;CAClB,wCAAwC;CACxC,yCAAyC;CACzC,6CAA6C;CAC7C,WAAW;CACX,wCAAwC;CACxC;AACD;AACA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;CAClB,oEAAoE;CACpE,0DAA0D;CAC1D,OAAO;CACP;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC,WAAW;CACX,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB;AACD;AACA;;;CAGC,eAAe;CACf,gBAAgB;CAChB;AACD;AACA;CACC,YAAY;CACZ;AACD;AACA;CACC,kBAAkB;CAClB,OAAO;CACP,MAAM;CACN,oBAAoB;CACpB,UAAU;CACV;AACD;AACA;CACC,oCAAoC;CACpC;AACD;AACA;CACC;AACD;AACA;CACC,eAAe;CACf;AACD;AACA;CACC;AACD;AACA;CACC,oBAAoB;CACpB;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;CACC,oBAAoB;CACpB,mCAAmC;CACnC,2BAA2B;CAC3B,UAAU;CACV,kBAAkB;CAClB,qBAAqB;CACrB,WAAW;CACX;AACD;AACA;CACC;AACD;AACA;CACC;AACD;AACA;;CAEC;AACD;AACA;;;CAGC,oBAAoB;CACpB;AACD;AACA;CACC,kBAAkB;CAClB,OAAO;CACP,WAAW;CACX,WAAW;CACX,YAAY;CACZ,WAAW;CACX;AACD;AACA;CACC,WAAW;CACX,gBAAgB;CAChB,kBAAkB;CAClB,OAAO;CACP,MAAM;CACN,SAAS;CACT,QAAQ;CACR;AACD;AACA;CACC,oBAAoB;CACpB;AACD;AACA;;;;CAIC,UAAU;CACV,mCAAmC;CACnC;AACD;AACA;CACC;AACD;AACA;CACC,oBAAoB;CACpB,mCAAmC;CACnC,2BAA2B;CAC3B;AACD;AACA;CACC;AACD;AACA;;CAEC;AACD;AACA;;;;CAIC,UAAU;CACV,mCAAmC;CACnC;AACD;AACA;CACC,mCAAmC;CACnC,2BAA2B;CAC3B,gBAAgB;CAChB;AACD;AACA;CACC;AACD;AACA;CACC,+BAA+B;CAC/B,mCAAmC;CACnC,2BAA2B;CAC3B;AACD","sourcesContent":["/**\n * Swiper 11.1.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2024 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: May 30, 2024\n */\n\n@font-face {\n\tfont-family: swiper-icons;\n\tsrc: url('data:application/font-woff;charset=utf-8;base64, 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');\n\tfont-weight: 400;\n\tfont-style: normal\n}\n:root {\n\t--swiper-theme-color: #007aff\n}\n:host {\n\tposition: relative;\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tz-index: 1\n}\n.swiper {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tposition: relative;\n\toverflow: hidden;\n\tlist-style: none;\n\tpadding: 0;\n\tz-index: 1;\n\tdisplay: block;\n}\n.swiper-vertical > .swiper-wrapper {\n\tflex-direction: column\n}\n.swiper-wrapper {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1;\n\tdisplay: flex;\n\ttransition-property: transform;\n\ttransition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n\tbox-sizing: content-box\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n\ttransform: translate3d(0px, 0, 0)\n}\n.swiper-horizontal {\n\ttouch-action: pan-y\n}\n.swiper-vertical {\n\ttouch-action: pan-x\n}\n.swiper-slide {\n\tflex-shrink: 0;\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\ttransition-property: transform;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.swiper-slide-link {\n\tposition: relative;\n\tmax-width: 100%;\n}\n.swiper-slide-img {\n\tmax-width: 100%;\n\theight: auto;\n}\n.swiper-slide-img-wrap {\n\tposition: absolute;\n\ttop: 30%;\n\tright: 7.5%;\n\twidth: 100%;\n\theight: 100%;\n\tmax-width: 45.84%;\n\tmax-height: 40.04%;\n\toverflow: auto;\n}\n.swiper-slide-code-wrap {\n\tposition: absolute;\n\ttop: 13%;\n\tleft: 8.5%;\n\twidth: 100%;\n\tmax-width: 32.46%;\n\tmax-height: 64.12%;\n\toverflow: auto;\n}\n.swiper-slide-code-wrap::-webkit-scrollbar,\n.swiper-slide-img-wrap::-webkit-scrollbar {\n\twidth: 3px;\n}\n.swiper-slide-code-wrap::-webkit-scrollbar-thumb,\n.swiper-slide-img-wrap::-webkit-scrollbar-thumb {\n\tbackground-color: var(--bg-2);\n\tborder-radius: 10px;\n\tborder: none;\n}\n.swiper-slide-code-wrap::-webkit-scrollbar-track,\n.swiper-slide-img-wrap::-webkit-scrollbar-track {\n\tbackground: var(--white);\n}\n.swiper-slide-code-wrap::-webkit-scrollbar-thumb:hover,\n.swiper-slide-img-wrap::-webkit-scrollbar-thumb:hover {\n\tbackground-color: var(--bg-2);\n}\n.swiper-slide-img-site {\n\twidth: 100%;\n\tobject-fit: cover;\n}\n.swiper-slide-code {\n\twidth: 100%;\n\tobject-fit: cover;\n}\n.swiper-link {\n\ttext-decoration: none;\n\tfont-size: 24px;\n\tline-height: 1.33;\n\ttext-transform: capitalize;\n\tcolor: var(--brand-1);\n\tposition: relative;\n}\n.swiper-link-text {\n\tposition: absolute;\n\ttop: 14.58%;\n\tright: 18%;\n\tfont-size: 24px;\n\tline-height: 1.33;\n\ttext-transform: capitalize;\n\tcolor: var(--brand-1);\n}\n@media(max-width:767.98px) {\n\t.swiper-link-text {\n\t\tfont-size: 16px;\n\t}\n}\n@media(max-width:424.98px) {\n\t.swiper-link-text {\n\t\tfont-size: 14px;\n\t}\n}\n.swiper-link-text::before {\n\tcontent: '';\n\tposition: absolute;\n\tbottom: -5px;\n\tleft: 0;\n\twidth: 100%;\n\theight: 2px;\n\tbackground-color: var(--white);\n}\n.swiper-link-text::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 55%;\n\tright: -25px;\n\twidth: 16px;\n\theight: 16px;\n\tbackground: url(../../img/svg/icon-mouse-pointer.svg)0 0 no-repeat;\n}\n.swiper-slide-invisible-blank {\n\tvisibility: hidden\n}\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n\theight: auto\n}\n.swiper-autoheight .swiper-wrapper {\n\talign-items: flex-start;\n\ttransition-property: transform, height\n}\n.swiper-backface-hidden .swiper-slide {\n\ttransform: translateZ(0);\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden\n}\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n\tperspective: 1200px\n}\n.swiper-3d .swiper-wrapper {\n\ttransform-style: preserve-3d\n}\n.swiper-3d {\n\tperspective: 1200px\n}\n.swiper-3d .swiper-cube-shadow,\n.swiper-3d .swiper-slide {\n\ttransform-style: preserve-3d\n}\n.swiper-css-mode > .swiper-wrapper {\n\toverflow: auto;\n\tscrollbar-width: none;\n\t-ms-overflow-style: none\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n\tdisplay: none\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n\tscroll-snap-align: start start\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n\tscroll-snap-type: x mandatory\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n\tscroll-snap-type: y mandatory\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n\tscroll-snap-type: none\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n\tscroll-snap-align: none\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n\tcontent: '';\n\tflex-shrink: 0;\n\torder: 9999\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n\tscroll-snap-align: center center;\n\tscroll-snap-stop: always\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n\tmargin-inline-start: var(--swiper-centered-offset-before)\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n\theight: 100%;\n\tmin-height: 1px;\n\twidth: var(--swiper-centered-offset-after)\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n\tmargin-block-start: var(--swiper-centered-offset-before)\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n\twidth: 100%;\n\tmin-width: 1px;\n\theight: var(--swiper-centered-offset-after)\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n\tz-index: 10\n}\n.swiper-3d .swiper-slide-shadow {\n\tbackground: rgba(0, 0, 0, .15)\n}\n.swiper-3d .swiper-slide-shadow-left {\n\tbackground-image: linear-gradient(to left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\n}\n.swiper-3d .swiper-slide-shadow-right {\n\tbackground-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\n}\n.swiper-3d .swiper-slide-shadow-top {\n\tbackground-image: linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\n}\n.swiper-lazy-preloader {\n\twidth: 42px;\n\theight: 42px;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tmargin-left: -21px;\n\tmargin-top: -21px;\n\tz-index: 10;\n\ttransform-origin: 50%;\n\tbox-sizing: border-box;\n\tborder: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n\tborder-radius: 50%;\n\tborder-top-color: transparent\n}\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader {\n\tanimation: swiper-preloader-spin 1s infinite linear\n}\n.swiper-lazy-preloader-white {\n\t--swiper-preloader-color: #fff\n}\n.swiper-lazy-preloader-black {\n\t--swiper-preloader-color: #000\n}\n@keyframes swiper-preloader-spin {\n\t0% {\n\t\ttransform: rotate(0deg)\n\t}\n\t100% {\n\t\ttransform: rotate(360deg)\n\t}\n}\n.swiper-virtual .swiper-slide {\n\t-webkit-backface-visibility: hidden;\n\ttransform: translateZ(0)\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tpointer-events: none\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n\theight: 1px;\n\twidth: var(--swiper-virtual-size)\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n\twidth: 1px;\n\theight: var(--swiper-virtual-size)\n}\n:root {\n\t--swiper-navigation-size: 44px\n}\n.swiper-button-next,\n.swiper-button-prev {\n\tposition: absolute;\n\ttop: var(--swiper-navigation-top-offset, 50%);\n\twidth: 15px;\n\theight: 24px;\n\tmargin-top: calc(0px - (var(--swiper-navigation-size)/ 2));\n\tz-index: 10;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--swiper-navigation-color, var(--swiper-theme-color))\n}\n@media(max-width:860px) {\n\t.swiper-button-next,\n\t.swiper-button-prev {\n\t\ttop: var(--swiper-navigation-top-offset, 96%);\n\t}\n}\n.swiper-button-next.swiper-button-disabled,\n.swiper-button-prev.swiper-button-disabled {\n\topacity: .35;\n\tcursor: auto;\n\tpointer-events: none\n}\n.swiper-button-next.swiper-button-hidden,\n.swiper-button-prev.swiper-button-hidden {\n\topacity: 0;\n\tcursor: auto;\n\tpointer-events: none\n}\n.swiper-navigation-disabled .swiper-button-next,\n.swiper-navigation-disabled .swiper-button-prev {\n\tdisplay: none !important\n}\n.swiper-button-next svg,\n.swiper-button-prev svg {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: contain;\n\ttransform-origin: center;\n}\n.swiper-rtl .swiper-button-next svg,\n.swiper-rtl .swiper-button-prev svg {\n\ttransform: rotate(180deg)\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n\tleft: 3.9%;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n\tright: 3.9%;\n}\n.swiper-button-lock {\n\tdisplay: none\n}\n.swiper-button-next::before,\n.swiper-button-prev::before {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: -1;\n\twidth: 72px;\n\taspect-ratio: 1;\n\tbackground-color: var(--bg-1);\n\tborder-radius: 50%;\n}\n@media(max-width:860px) {\n\t.swiper-button-next::before,\n\t.swiper-button-prev::before {\n\t\twidth: 36px;\n\t}\n}\n.swiper-button-next:after,\n.swiper-button-prev:after {\n\tfont-family: swiper-icons;\n\ttext-transform: none !important;\n\tletter-spacing: 0;\n\tfont-variant: initial;\n\tline-height: 1;\n\tcolor: var(--white);\n\ttransition: color var(--transition);\n}\n.swiper-button-next:hover::after,\n.swiper-button-prev:hover::after {\n\tcolor: var(--brand-1);\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n\tcontent: 'prev'\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n\tcontent: 'next'\n}\n.swiper-pagination {\n\tposition: absolute;\n\ttext-align: center;\n\ttransition: .3s opacity;\n\ttransform: translate3d(0, 0, 0);\n\tz-index: 10\n}\n.swiper-pagination.swiper-pagination-hidden {\n\topacity: 0\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n\tdisplay: none !important\n}\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal,\n.swiper-pagination-custom,\n.swiper-pagination-fraction {\n\tbottom: var(--swiper-pagination-bottom, 8px);\n\ttop: var(--swiper-pagination-top, auto);\n\tleft: 0;\n\twidth: 100%\n}\n.swiper-pagination-bullets-dynamic {\n\toverflow: hidden;\n\tfont-size: 0\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n\ttransform: scale(.33);\n\tposition: relative\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n\ttransform: scale(1)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n\ttransform: scale(1)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n\ttransform: scale(.66)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n\ttransform: scale(.33)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n\ttransform: scale(.66)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n\ttransform: scale(.33)\n}\n.swiper-pagination-bullet {\n\twidth: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n\theight: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n\tdisplay: inline-block;\n\tborder-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n\tbackground: var(--swiper-pagination-bullet-inactive-color, #000);\n\topacity: var(--swiper-pagination-bullet-inactive-opacity, .2)\n}\nbutton.swiper-pagination-bullet {\n\tborder: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-shadow: none;\n\t-webkit-appearance: none;\n\tappearance: none\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n\tcursor: pointer\n}\n.swiper-pagination-bullet:only-child {\n\tdisplay: none !important\n}\n.swiper-pagination-bullet-active {\n\topacity: var(--swiper-pagination-bullet-opacity, 1);\n\tbackground: var(--swiper-pagination-color, var(--swiper-theme-color))\n}\n.swiper-pagination-vertical.swiper-pagination-bullets,\n.swiper-vertical > .swiper-pagination-bullets {\n\tright: var(--swiper-pagination-right, 8px);\n\tleft: var(--swiper-pagination-left, auto);\n\ttop: 50%;\n\ttransform: translate3d(0px, -50%, 0)\n}\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n\tmargin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n\tdisplay: block\n}\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\twidth: 8px\n}\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n\tdisplay: inline-block;\n\ttransition: .2s transform, .2s top\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n\tmargin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px)\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\twhite-space: nowrap\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n\ttransition: .2s transform, .2s left\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n\ttransition: .2s transform, .2s right\n}\n.swiper-pagination-fraction {\n\tcolor: var(--swiper-pagination-fraction-color, inherit)\n}\n.swiper-pagination-progressbar {\n\tbackground: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));\n\tposition: absolute\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n\tbackground: var(--swiper-pagination-color, var(--swiper-theme-color));\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\ttransform: scale(0);\n\ttransform-origin: left top\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n\ttransform-origin: right top\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n\twidth: 100%;\n\theight: var(--swiper-pagination-progressbar-size, 4px);\n\tleft: 0;\n\ttop: 0\n}\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-vertical > .swiper-pagination-progressbar {\n\twidth: var(--swiper-pagination-progressbar-size, 4px);\n\theight: 100%;\n\tleft: 0;\n\ttop: 0\n}\n.swiper-pagination-lock {\n\tdisplay: none\n}\n.swiper-scrollbar {\n\tborder-radius: var(--swiper-scrollbar-border-radius, 10px);\n\tposition: relative;\n\ttouch-action: none;\n\tbackground: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))\n}\n.swiper-scrollbar-disabled > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-disabled {\n\tdisplay: none !important\n}\n.swiper-horizontal > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-horizontal {\n\tposition: absolute;\n\tleft: var(--swiper-scrollbar-sides-offset, 1%);\n\tbottom: var(--swiper-scrollbar-bottom, 4px);\n\ttop: var(--swiper-scrollbar-top, auto);\n\tz-index: 50;\n\theight: var(--swiper-scrollbar-size, 4px);\n\twidth: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))\n}\n.swiper-scrollbar.swiper-scrollbar-vertical,\n.swiper-vertical > .swiper-scrollbar {\n\tposition: absolute;\n\tleft: var(--swiper-scrollbar-left, auto);\n\tright: var(--swiper-scrollbar-right, 4px);\n\ttop: var(--swiper-scrollbar-sides-offset, 1%);\n\tz-index: 50;\n\twidth: var(--swiper-scrollbar-size, 4px);\n\theight: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))\n}\n.swiper-scrollbar-drag {\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n\tbackground: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));\n\tborder-radius: var(--swiper-scrollbar-border-radius, 10px);\n\tleft: 0;\n\ttop: 0\n}\n.swiper-scrollbar-cursor-drag {\n\tcursor: move\n}\n.swiper-scrollbar-lock {\n\tdisplay: none\n}\n.swiper-zoom-container {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center\n}\n.swiper-zoom-container > canvas,\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg {\n\tmax-width: 100%;\n\tmax-height: 100%;\n\tobject-fit: contain\n}\n.swiper-slide-zoomed {\n\tcursor: move;\n\ttouch-action: none\n}\n.swiper .swiper-notification {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tpointer-events: none;\n\topacity: 0;\n\tz-index: -1000\n}\n.swiper-free-mode > .swiper-wrapper {\n\ttransition-timing-function: ease-out;\n\tmargin: 0 auto\n}\n.swiper-grid > .swiper-wrapper {\n\tflex-wrap: wrap\n}\n.swiper-grid-column > .swiper-wrapper {\n\tflex-wrap: wrap;\n\tflex-direction: column\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n\ttransition-timing-function: ease-out\n}\n.swiper-fade .swiper-slide {\n\tpointer-events: none;\n\ttransition-property: opacity\n}\n.swiper-fade .swiper-slide .swiper-slide {\n\tpointer-events: none\n}\n.swiper-fade .swiper-slide-active {\n\tpointer-events: auto\n}\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n\tpointer-events: auto\n}\n.swiper-cube {\n\toverflow: visible\n}\n.swiper-cube .swiper-slide {\n\tpointer-events: none;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n\tz-index: 1;\n\tvisibility: hidden;\n\ttransform-origin: 0 0;\n\twidth: 100%;\n\theight: 100%\n}\n.swiper-cube .swiper-slide .swiper-slide {\n\tpointer-events: none\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n\ttransform-origin: 100% 0\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n\tpointer-events: auto\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev {\n\tpointer-events: auto;\n\tvisibility: visible\n}\n.swiper-cube .swiper-cube-shadow {\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 100%;\n\topacity: .6;\n\tz-index: 0\n}\n.swiper-cube .swiper-cube-shadow:before {\n\tcontent: '';\n\tbackground: #000;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tfilter: blur(50px)\n}\n.swiper-cube .swiper-slide-next + .swiper-slide {\n\tpointer-events: auto;\n\tvisibility: visible\n}\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top {\n\tz-index: 0;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden\n}\n.swiper-flip {\n\toverflow: visible\n}\n.swiper-flip .swiper-slide {\n\tpointer-events: none;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n\tz-index: 1\n}\n.swiper-flip .swiper-slide .swiper-slide {\n\tpointer-events: none\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n\tpointer-events: auto\n}\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top {\n\tz-index: 0;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden\n}\n.swiper-creative .swiper-slide {\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n\toverflow: hidden;\n\ttransition-property: transform, opacity, height\n}\n.swiper-cards {\n\toverflow: visible\n}\n.swiper-cards .swiper-slide {\n\ttransform-origin: center bottom;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n\toverflow: hidden\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./swiper-bundle.js */ "./src/swiper-bundle.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/banner/1.svg */ "./src/img/banner/1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/about/01.jpg */ "./src/img/about/01.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/icon-shape.svg */ "./src/img/svg/icon-shape.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/html.svg */ "./src/img/svg/html.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/css.svg */ "./src/img/svg/css.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/work/dual-screen.png */ "./src/img/work/dual-screen.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/work/site1.jpeg */ "./src/img/work/site1.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/work/code1.png */ "./src/img/work/code1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/work/site2.jpeg */ "./src/img/work/site2.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/work/site3.jpeg */ "./src/img/work/site3.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/work/site4.jpeg */ "./src/img/work/site4.jpeg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var code = "<!DOCTYPE html>\n<html lang=\"uk\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<title>Rozhanskyi Oleh Html coder</title>\n\t<" + "script defer src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"><" + "/script>\n</head>\n<body class=\"body\">\n\t<header class=\"header\">\n\t\t<div class=\"header__container\">\n\t\t\t<aside class=\"aside-menu\">\n\t\t\t\t<ul class=\"aside-menu__list\">\n\t\t\t\t\t<li class=\"aside-menu__item\">\n\t\t\t\t\t\t<a href=\"#top\" class=\"aside-menu__link aside-menu__link--home is-active\">\n\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 2C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10V3C11 2.44772 10.5523 2 10 2H3ZM4 9V4H9V9H4Z\" fill=\"white\" />\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 2C13.4477 2 13 2.44772 13 3V10C13 10.5523 13.4477 11 14 11H21C21.5523 11 22 10.5523 22 10V3C22 2.44772 21.5523 2 21 2H14ZM15 9V4H20V9H15Z\" fill=\"white\" />\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z\" fill=\"white\" />\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H10C10.5523 22 11 21.5523 11 21V14C11 13.4477 10.5523 13 10 13H3ZM4 20V15H9V20H4Z\" fill=\"white\" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"aside-menu__item\">\n\t\t\t\t\t\t<a href=\"#about\" class=\"aside-menu__link aside-menu__link--about-me\">\n\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7Z\" fill=\"white\" />\n\t\t\t\t\t\t\t\t<path d=\"M8 14C6.67392 14 5.40215 14.5268 4.46447 15.4645C3.52678 16.4021 3 17.6739 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 18.2043 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 17.6739 20.4732 16.4021 19.5355 15.4645C18.5979 14.5268 17.3261 14 16 14H8Z\" fill=\"white\" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"aside-menu__item\">\n\t\t\t\t\t\t<a href=\"#skills\" class=\"aside-menu__link aside-menu__link--skills\">\n\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t<path d=\"M8.70711 6.70711C9.09763 6.31658 9.09763 5.68342 8.70711 5.29289C8.31658 4.90237 7.68342 4.90237 7.29289 5.29289L1.29289 11.2929C0.902369 11.6834 0.902369 12.3166 1.29289 12.7071L7.29289 18.7071C7.68342 19.0976 8.31658 19.0976 8.70711 18.7071C9.09763 18.3166 9.09763 17.6834 8.70711 17.2929L3.41421 12L8.70711 6.70711Z\" fill=\"white\" />\n\t\t\t\t\t\t\t\t<path d=\"M16.7071 5.29289C16.3166 4.90237 15.6834 4.90237 15.2929 5.29289C14.9024 5.68342 14.9024 6.31658 15.2929 6.70711L20.5858 12L15.2929 17.2929C14.9024 17.6834 14.9024 18.3166 15.2929 18.7071C15.6834 19.0976 16.3166 19.0976 16.7071 18.7071L22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929L16.7071 5.29289Z\" fill=\"white\" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"aside-menu__item\">\n\t\t\t\t\t\t<a href=\"#work\" class=\"aside-menu__link aside-menu__link--works\">\n\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13 18H20C21.6569 18 23 16.6569 23 15V5C23 3.34315 21.6569 2 20 2H4C2.34315 2 1 3.34315 1 5V15C1 16.6569 2.34315 18 4 18H11V20H8C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H13V18ZM4 4C3.44772 4 3 4.44772 3 5V15C3 15.5523 3.44772 16 4 16H20C20.5523 16 21 15.5523 21 15V5C21 4.44772 20.5523 4 20 4H4Z\" fill=\"white\" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"aside-menu__item\">\n\t\t\t\t\t\t<a href=\"#contact\" class=\"aside-menu__link aside-menu__link--contact\">\n\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.00014 5.98266C0.999973 5.99253 0.999957 6.00239 1.00009 6.01225V18C1.00009 19.6523 2.3478 21 4.00009 21H20.0001C21.6524 21 23.0001 19.6523 23.0001 18V6.01236C23.0002 6.00242 23.0002 5.99247 23 5.98251C22.9906 4.33822 21.6465 3 20.0001 3H4.00009C2.35359 3 1.00953 4.3383 1.00014 5.98266ZM3.10666 5.55395C3.27204 5.22692 3.61212 5 4.00009 5H20.0001C20.3881 5 20.7281 5.22692 20.8935 5.55395L12.0001 11.7793L3.10666 5.55395ZM21.0001 7.92066V18C21.0001 18.5477 20.5478 19 20.0001 19H4.00009C3.45237 19 3.00009 18.5477 3.00009 18V7.92066L11.4266 13.8192C11.7709 14.0603 12.2292 14.0603 12.5735 13.8192L21.0001 7.92066Z\" fill=\"white\" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</aside>\n\t\t\t<a class=\"header__logo\"><span class=\"header__logo-span\">&ltC/&gt</span>РожанськийОлег</a>\n\t\t\t<nav class=\"header__menu menu\">\n\t\t\t\t<ul class=\"menu__list\">\n\t\t\t\t\t<li class=\"menu__item\"><a class=\"menu__link page-open\">Головна</a></li>\n\t\t\t\t\t<li class=\"menu__item\"><a href=\"#!\" class=\"menu__link\">Портфоліо</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"menu__social-list social-list social-list--burger\">\n\t\t\t\t\t<li><a href=\"https://github.com/HTML-coder-Oleh-Rozhanskyi\" class=\"social-list__link\" target=\"_blank\">\n\t\t\t\t\t\t\t<svg class=\"social-list__icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t<path d=\"M12 2.24658C9.62547 2.24668 7.32846 3.0917 5.51996 4.63043C3.71146 6.16916 2.5095 8.3012 2.12913 10.6451C1.74876 12.9889 2.21481 15.3917 3.4439 17.4233C4.67298 19.455 6.58488 20.9831 8.83752 21.7341C9.33752 21.8216 9.52502 21.5216 9.52502 21.2591C9.52502 21.0216 9.51251 20.2341 9.51251 19.3966C7 19.8591 6.35 18.7841 6.15 18.2216C5.92807 17.6745 5.57627 17.1897 5.125 16.8091C4.775 16.6216 4.275 16.1591 5.11249 16.1466C5.43227 16.1813 5.73898 16.2926 6.00663 16.471C6.27427 16.6494 6.49496 16.8897 6.65 17.1716C6.78677 17.4173 6.97068 17.6336 7.19119 17.8081C7.4117 17.9826 7.66447 18.1118 7.93503 18.1885C8.20559 18.2651 8.48861 18.2876 8.76788 18.2547C9.04714 18.2218 9.31717 18.134 9.56248 17.9966C9.60577 17.4882 9.83234 17.0129 10.2 16.6591C7.975 16.4091 5.65 15.5466 5.65 11.7216C5.63594 10.7278 6.00268 9.76619 6.675 9.03411C6.36928 8.17033 6.40505 7.2224 6.775 6.38411C6.775 6.38411 7.61247 6.1216 9.525 7.40911C11.1613 6.95909 12.8887 6.95909 14.525 7.40911C16.4375 6.10911 17.275 6.38411 17.275 6.38411C17.645 7.22238 17.6808 8.17034 17.375 9.03411C18.0493 9.76494 18.4164 10.7273 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.0761 16.901 14.2599 17.1914 14.3764 17.5106C14.4929 17.8298 14.5393 18.1704 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.4362 20.977 19.3426 19.4453 20.5664 17.4126C21.7903 15.3799 22.2519 12.9784 21.8689 10.6368C21.4859 8.29523 20.2832 6.16595 18.4755 4.62909C16.6678 3.09223 14.3727 2.24782 12 2.24658Z\" fill=\"black\" />\n\t\t\t\t\t\t\t</svg><span class=\"social-list__span\">GitHub</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a href=\"https://www.linkedin.com/feed/\" class=\"social-list__link\" target=\"_blank\">\n\t\t\t\t\t\t\t<svg class=\"social-list__icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44771 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t\t</svg><span class=\"social-list__span\">LinkedIn</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<ul class=\"header__social-list social-list\">\n\t\t\t\t<li><a href=\"https://github.com/HTML-coder-Oleh-Rozhanskyi\" class=\"social-list__link\" target=\"_blank\">\n\t\t\t\t\t\t<svg class=\"social-list__icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<path d=\"M12 2.24658C9.62547 2.24668 7.32846 3.0917 5.51996 4.63043C3.71146 6.16916 2.5095 8.3012 2.12913 10.6451C1.74876 12.9889 2.21481 15.3917 3.4439 17.4233C4.67298 19.455 6.58488 20.9831 8.83752 21.7341C9.33752 21.8216 9.52502 21.5216 9.52502 21.2591C9.52502 21.0216 9.51251 20.2341 9.51251 19.3966C7 19.8591 6.35 18.7841 6.15 18.2216C5.92807 17.6745 5.57627 17.1897 5.125 16.8091C4.775 16.6216 4.275 16.1591 5.11249 16.1466C5.43227 16.1813 5.73898 16.2926 6.00663 16.471C6.27427 16.6494 6.49496 16.8897 6.65 17.1716C6.78677 17.4173 6.97068 17.6336 7.19119 17.8081C7.4117 17.9826 7.66447 18.1118 7.93503 18.1885C8.20559 18.2651 8.48861 18.2876 8.76788 18.2547C9.04714 18.2218 9.31717 18.134 9.56248 17.9966C9.60577 17.4882 9.83234 17.0129 10.2 16.6591C7.975 16.4091 5.65 15.5466 5.65 11.7216C5.63594 10.7278 6.00268 9.76619 6.675 9.03411C6.36928 8.17033 6.40505 7.2224 6.775 6.38411C6.775 6.38411 7.61247 6.1216 9.525 7.40911C11.1613 6.95909 12.8887 6.95909 14.525 7.40911C16.4375 6.10911 17.275 6.38411 17.275 6.38411C17.645 7.22238 17.6808 8.17034 17.375 9.03411C18.0493 9.76494 18.4164 10.7273 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.0761 16.901 14.2599 17.1914 14.3764 17.5106C14.4929 17.8298 14.5393 18.1704 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.4362 20.977 19.3426 19.4453 20.5664 17.4126C21.7903 15.3799 22.2519 12.9784 21.8689 10.6368C21.4859 8.29523 20.2832 6.16595 18.4755 4.62909C16.6678 3.09223 14.3727 2.24782 12 2.24658Z\" fill=\"black\" />\n\t\t\t\t\t\t</svg><span class=\"social-list__span\">GitHub</span></a>\n\t\t\t\t</li>\n\t\t\t\t<li><a href=\"https://www.linkedin.com/feed/\" class=\"social-list__link\" target=\"_blank\">\n\t\t\t\t\t\t<svg class=\"social-list__icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44771 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t</svg><span class=\"social-list__span\">LinkedIn</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<button type=\"button\" class=\"burger-btn\" aria-label=\"open menu\" aria-expanded=\"false\"><span></span></button>\n\t\t</div>\n\t</header>\n\t<main class=\"main\" id=\"top\">\n\t\t<section class=\"section main__banner banner\" id=\"banner\">\n\t\t\t<div class=\"banner__container\">\n\t\t\t\t<h2 class=\"banner__subtitle\">Developer</h2>\n\t\t\t\t<article class=\"banner__cv cv\">\n\t\t\t\t\t<img class=\"cv__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n\t\t\t\t\t<h3 class=\"cv__titile\">Олег</h3>\n\t\t\t\t\t<span class=\"cv__subtitle\">Frontend developer</span>\n\t\t\t\t\t<ul class=\"cv__address-list\">\n\t\t\t\t\t\t<li class=\"cv__address-item cv__address-item_mail\"><a class=\"cv__address-link\" href=\"mailto:oleh.rozhanskyi@gmail.com\">oleh.rozhanskyi@gmail.com</a></li>\n\t\t\t\t\t\t<li class=\"cv__address-item cv__address-item_country\">Чехія</li>\n\t\t\t\t\t\t<li class=\"cv__address-item cv__address-item_work\">Повний робочий день</li>\n\t\t\t\t\t\t<li class=\"cv__address-item cv__address-item_web\"><a class=\"cv__address-link\" href=\"https://html-coder-oleh-rozhanskyi.github.io/portfolio/dist/\" target=\"_blank\">oleh-rozhanskyi.github</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"cv__skills-list\">\n\t\t\t\t\t\t<li class=\"cv__skills-item\">HTML</li>\n\t\t\t\t\t\t<li class=\"cv__skills-item\">CSS</li>\n\t\t\t\t\t\t<!-- <li class=\"cv__skills-item\">JS</li> -->\n\t\t\t\t\t\t<!-- <li class=\"cv__skills-item\">REACT</li> -->\n\t\t\t\t\t</ul>\n\t\t\t\t\t<button class=\"cv__button\" type=\"button\">Download CV</button>\n\t\t\t\t</article>\n\t\t\t\t<div class=\"banner__body\">\n\t\t\t\t\t<h1 class=\"banner__title\">\n\t\t\t\t\t\t<pre class=\"banner__pre\"><span class=\"tag\">&lth1&gt</span> Привіт\n я <span class=\"banner__name\">Олег</span>,\n Frontend developer<span class=\"tag\">&lt/h1&gt</span></pre>\n\t\t\t\t\t</h1>\n\t\t\t\t\t<p class=\"banner__text\">\n\t\t\t\t\t\t<span class=\"tag\">&ltp&gt</span> Допоможу Вам зробити корисний для Вашого бізнесу сайт <span class=\"tag\">&lt/p&gt</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<a class=\"banner__link\" href=\"mailto:oleh.rozhanskyi@gmail.com\">Напишіть мені</a>\n\t\t\t\t\t<article class=\"banner__skills\">\n\t\t\t\t\t\t<ul class=\"banner__skills-list\">\n\t\t\t\t\t\t\t<li class=\"banner__skills-item\"><span class=\"banner__skills-number\">2</span>Programming Language</li>\n\t\t\t\t\t\t\t<li class=\"banner__skills-item\"><span class=\"banner__skills-number\">0</span>Development Tools</li>\n\t\t\t\t\t\t\t<li class=\"banner__skills-item\"><span class=\"banner__skills-number\">0</span>Years of Experience</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</article>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<section class=\"section main__about about\" id=\"about\">\n\t\t\t<div class=\"about__container\">\n\t\t\t\t<div class=\"about__decor decor\">\n\t\t\t\t\t<svg width=\"32\" height=\"44\" viewBox=\"0 0 32 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t<g clip-path=\"url(#clip0_571_700)\">\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z\" fill=\"#12F7D6\" />\n\t\t\t\t\t\t\t<path d=\"M17.3333 9.16669V16.5H14.6666V9.16669H17.3333Z\" fill=\"#12F7D6\" />\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t<clipPath id=\"clip0_571_700\">\n\t\t\t\t\t\t\t\t<rect width=\"32\" height=\"44\" fill=\"white\" />\n\t\t\t\t\t\t\t</clipPath>\n\t\t\t\t\t\t</defs>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<svg width=\"12\" height=\"87\" viewBox=\"0 0 12 87\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t<path d=\"M6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L6.5 1ZM6 83.8867L8.88675 81L6 78.1132L3.11325 81L6 83.8867ZM5.5 3.85714C5.5 4.13329 5.72386 4.35714 6 4.35714C6.27614 4.35714 6.5 4.13329 6.5 3.85714H5.5ZM6.5 9.57143C6.5 9.29528 6.27614 9.07143 6 9.07143C5.72386 9.07143 5.5 9.29528 5.5 9.57143H6.5ZM5.5 15.2857C5.5 15.5619 5.72386 15.7857 6 15.7857C6.27614 15.7857 6.5 15.5619 6.5 15.2857H5.5ZM6.5 21C6.5 20.7239 6.27614 20.5 6 20.5C5.72386 20.5 5.5 20.7239 5.5 21H6.5ZM5.5 26.7143C5.5 26.9904 5.72386 27.2143 6 27.2143C6.27614 27.2143 6.5 26.9904 6.5 26.7143H5.5ZM6.5 32.4286C6.5 32.1524 6.27614 31.9286 6 31.9286C5.72386 31.9286 5.5 32.1524 5.5 32.4286H6.5ZM5.5 38.1429C5.5 38.419 5.72386 38.6429 6 38.6429C6.27614 38.6429 6.5 38.419 6.5 38.1429H5.5ZM6.5 43.8571C6.5 43.581 6.27614 43.3571 6 43.3571C5.72386 43.3571 5.5 43.581 5.5 43.8571H6.5ZM5.5 49.5714C5.5 49.8476 5.72386 50.0714 6 50.0714C6.27614 50.0714 6.5 49.8476 6.5 49.5714H5.5ZM6.5 55.2857C6.5 55.0096 6.27614 54.7857 6 54.7857C5.72386 54.7857 5.5 55.0096 5.5 55.2857H6.5ZM5.5 61C5.5 61.2761 5.72386 61.5 6 61.5C6.27614 61.5 6.5 61.2761 6.5 61H5.5ZM6.5 66.7143C6.5 66.4381 6.27614 66.2143 6 66.2143C5.72386 66.2143 5.5 66.4381 5.5 66.7143H6.5ZM5.5 72.4286C5.5 72.7047 5.72386 72.9286 6 72.9286C6.27614 72.9286 6.5 72.7047 6.5 72.4286H5.5ZM6.5 78.1429C6.5 77.8667 6.27614 77.6429 6 77.6429C5.72386 77.6429 5.5 77.8667 5.5 78.1429H6.5ZM5.5 1V3.85714H6.5V1L5.5 1ZM5.5 9.57143L5.5 15.2857H6.5L6.5 9.57143H5.5ZM5.5 21L5.5 26.7143H6.5L6.5 21H5.5ZM5.5 32.4286V38.1429H6.5V32.4286H5.5ZM5.5 43.8571L5.5 49.5714H6.5L6.5 43.8571H5.5ZM5.5 55.2857L5.5 61H6.5L6.5 55.2857H5.5ZM5.5 66.7143V72.4286H6.5V66.7143H5.5ZM5.5 78.1429L5.5 81H6.5L6.5 78.1429H5.5ZM7 1C7 0.447715 6.55228 5.96046e-08 6 5.96046e-08C5.44772 5.96046e-08 5 0.447715 5 1L7 1ZM6 86.7735L11.7735 81L6 75.2265L0.226498 81L6 86.7735ZM5 3.85714C5 4.40943 5.44772 4.85714 6 4.85714C6.55228 4.85714 7 4.40943 7 3.85714H5ZM7 9.57143C7 9.01914 6.55228 8.57143 6 8.57143C5.44772 8.57143 5 9.01914 5 9.57143H7ZM5 15.2857C5 15.838 5.44772 16.2857 6 16.2857C6.55228 16.2857 7 15.838 7 15.2857H5ZM7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21H7ZM5 26.7143C5 27.2666 5.44772 27.7143 6 27.7143C6.55228 27.7143 7 27.2666 7 26.7143H5ZM7 32.4286C7 31.8763 6.55228 31.4286 6 31.4286C5.44772 31.4286 5 31.8763 5 32.4286H7ZM5 38.1429C5 38.6951 5.44772 39.1429 6 39.1429C6.55228 39.1429 7 38.6951 7 38.1429H5ZM7 43.8571C7 43.3049 6.55228 42.8571 6 42.8571C5.44772 42.8571 5 43.3049 5 43.8571H7ZM5 49.5714C5 50.1237 5.44772 50.5714 6 50.5714C6.55228 50.5714 7 50.1237 7 49.5714H5ZM7 55.2857C7 54.7334 6.55228 54.2857 6 54.2857C5.44772 54.2857 5 54.7334 5 55.2857H7ZM5 61C5 61.5523 5.44772 62 6 62C6.55228 62 7 61.5523 7 61H5ZM7 66.7143C7 66.162 6.55228 65.7143 6 65.7143C5.44772 65.7143 5 66.162 5 66.7143H7ZM5 72.4286C5 72.9809 5.44772 73.4286 6 73.4286C6.55228 73.4286 7 72.9809 7 72.4286H5ZM7 78.1429C7 77.5906 6.55228 77.1429 6 77.1429C5.44772 77.1429 5 77.5906 5 78.1429H7ZM5 1V3.85714H7V1L5 1ZM5 9.57143L5 15.2857H7L7 9.57143H5ZM5 21L5 26.7143H7L7 21H5ZM5 32.4286L5 38.1429H7L7 32.4286H5ZM5 43.8571L5 49.5714H7L7 43.8571H5ZM5 55.2857L5 61H7L7 55.2857H5ZM5 66.7143V72.4286H7V66.7143H5ZM5 78.1429L5 81H7L7 78.1429H5Z\" fill=\"white\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<h2 class=\"about__title title\"> Title </h2>\n\t\t\t\t<p class=\"about__subtext\">I had the pleasure of working with these awesome Projects</p>\n\t\t\t\t<div class=\"about__body\">\n\t\t\t\t\t<h3 class=\"about__subtitle title\">About me</h3>\n\t\t\t\t\t<p class=\"about__text\">\n\t\t\t\t\t\t<span class=\"tag\">&ltp&gt</span>\n\t\t\t\t\t\t<span class=\"about__hello-text\">Hello!</span> My name is Oleh and I specialize in web developement that utilizes <span class=\"about__mark-text\">HTML</span>, <span class=\"about__mark-text\">CSS</span><br><br> I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving. <br><br> When I'm not coding, I am <span class=\"about__mark-text\">writing bolgs</span>, reading, or picking up some new hands-on art project like <span class=\"about__mark-text\">photography</span>. <br><br> I like to have my perspective and belief systems challenged so that I see the world through new eyes. <span class=\"tag\">&lt/p&gt</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<img class=\"about__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" width=\"462\" height=\"556\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<section class=\"section main__skills skills\" id=\"skills\">\n\t\t\t<div class=\"skills__container\">\n\t\t\t\t<div class=\"skills__decor decor\">\n\t\t\t\t\t<svg width=\"32\" height=\"44\" viewBox=\"0 0 32 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t<g clip-path=\"url(#clip0_571_700)\">\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z\" fill=\"#12F7D6\" />\n\t\t\t\t\t\t\t<path d=\"M17.3333 9.16669V16.5H14.6666V9.16669H17.3333Z\" fill=\"#12F7D6\" />\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t<clipPath id=\"clip0_571_700\">\n\t\t\t\t\t\t\t\t<rect width=\"32\" height=\"44\" fill=\"white\" />\n\t\t\t\t\t\t\t</clipPath>\n\t\t\t\t\t\t</defs>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<svg width=\"12\" height=\"87\" viewBox=\"0 0 12 87\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t<path d=\"M6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L6.5 1ZM6 83.8867L8.88675 81L6 78.1132L3.11325 81L6 83.8867ZM5.5 3.85714C5.5 4.13329 5.72386 4.35714 6 4.35714C6.27614 4.35714 6.5 4.13329 6.5 3.85714H5.5ZM6.5 9.57143C6.5 9.29528 6.27614 9.07143 6 9.07143C5.72386 9.07143 5.5 9.29528 5.5 9.57143H6.5ZM5.5 15.2857C5.5 15.5619 5.72386 15.7857 6 15.7857C6.27614 15.7857 6.5 15.5619 6.5 15.2857H5.5ZM6.5 21C6.5 20.7239 6.27614 20.5 6 20.5C5.72386 20.5 5.5 20.7239 5.5 21H6.5ZM5.5 26.7143C5.5 26.9904 5.72386 27.2143 6 27.2143C6.27614 27.2143 6.5 26.9904 6.5 26.7143H5.5ZM6.5 32.4286C6.5 32.1524 6.27614 31.9286 6 31.9286C5.72386 31.9286 5.5 32.1524 5.5 32.4286H6.5ZM5.5 38.1429C5.5 38.419 5.72386 38.6429 6 38.6429C6.27614 38.6429 6.5 38.419 6.5 38.1429H5.5ZM6.5 43.8571C6.5 43.581 6.27614 43.3571 6 43.3571C5.72386 43.3571 5.5 43.581 5.5 43.8571H6.5ZM5.5 49.5714C5.5 49.8476 5.72386 50.0714 6 50.0714C6.27614 50.0714 6.5 49.8476 6.5 49.5714H5.5ZM6.5 55.2857C6.5 55.0096 6.27614 54.7857 6 54.7857C5.72386 54.7857 5.5 55.0096 5.5 55.2857H6.5ZM5.5 61C5.5 61.2761 5.72386 61.5 6 61.5C6.27614 61.5 6.5 61.2761 6.5 61H5.5ZM6.5 66.7143C6.5 66.4381 6.27614 66.2143 6 66.2143C5.72386 66.2143 5.5 66.4381 5.5 66.7143H6.5ZM5.5 72.4286C5.5 72.7047 5.72386 72.9286 6 72.9286C6.27614 72.9286 6.5 72.7047 6.5 72.4286H5.5ZM6.5 78.1429C6.5 77.8667 6.27614 77.6429 6 77.6429C5.72386 77.6429 5.5 77.8667 5.5 78.1429H6.5ZM5.5 1V3.85714H6.5V1L5.5 1ZM5.5 9.57143L5.5 15.2857H6.5L6.5 9.57143H5.5ZM5.5 21L5.5 26.7143H6.5L6.5 21H5.5ZM5.5 32.4286V38.1429H6.5V32.4286H5.5ZM5.5 43.8571L5.5 49.5714H6.5L6.5 43.8571H5.5ZM5.5 55.2857L5.5 61H6.5L6.5 55.2857H5.5ZM5.5 66.7143V72.4286H6.5V66.7143H5.5ZM5.5 78.1429L5.5 81H6.5L6.5 78.1429H5.5ZM7 1C7 0.447715 6.55228 5.96046e-08 6 5.96046e-08C5.44772 5.96046e-08 5 0.447715 5 1L7 1ZM6 86.7735L11.7735 81L6 75.2265L0.226498 81L6 86.7735ZM5 3.85714C5 4.40943 5.44772 4.85714 6 4.85714C6.55228 4.85714 7 4.40943 7 3.85714H5ZM7 9.57143C7 9.01914 6.55228 8.57143 6 8.57143C5.44772 8.57143 5 9.01914 5 9.57143H7ZM5 15.2857C5 15.838 5.44772 16.2857 6 16.2857C6.55228 16.2857 7 15.838 7 15.2857H5ZM7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21H7ZM5 26.7143C5 27.2666 5.44772 27.7143 6 27.7143C6.55228 27.7143 7 27.2666 7 26.7143H5ZM7 32.4286C7 31.8763 6.55228 31.4286 6 31.4286C5.44772 31.4286 5 31.8763 5 32.4286H7ZM5 38.1429C5 38.6951 5.44772 39.1429 6 39.1429C6.55228 39.1429 7 38.6951 7 38.1429H5ZM7 43.8571C7 43.3049 6.55228 42.8571 6 42.8571C5.44772 42.8571 5 43.3049 5 43.8571H7ZM5 49.5714C5 50.1237 5.44772 50.5714 6 50.5714C6.55228 50.5714 7 50.1237 7 49.5714H5ZM7 55.2857C7 54.7334 6.55228 54.2857 6 54.2857C5.44772 54.2857 5 54.7334 5 55.2857H7ZM5 61C5 61.5523 5.44772 62 6 62C6.55228 62 7 61.5523 7 61H5ZM7 66.7143C7 66.162 6.55228 65.7143 6 65.7143C5.44772 65.7143 5 66.162 5 66.7143H7ZM5 72.4286C5 72.9809 5.44772 73.4286 6 73.4286C6.55228 73.4286 7 72.9809 7 72.4286H5ZM7 78.1429C7 77.5906 6.55228 77.1429 6 77.1429C5.44772 77.1429 5 77.5906 5 78.1429H7ZM5 1V3.85714H7V1L5 1ZM5 9.57143L5 15.2857H7L7 9.57143H5ZM5 21L5 26.7143H7L7 21H5ZM5 32.4286L5 38.1429H7L7 32.4286H5ZM5 43.8571L5 49.5714H7L7 43.8571H5ZM5 55.2857L5 61H7L7 55.2857H5ZM5 66.7143V72.4286H7V66.7143H5ZM5 78.1429L5 81H7L7 78.1429H5Z\" fill=\"white\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<h2 class=\"skills__title title\">Skills</h2>\n\t\t\t\t<p class=\"skills__subtext\">I am striving to never stop learning and improving</p>\n\t\t\t\t<div class=\"skills__body\">\n\t\t\t\t\t<a href=\"https://en.wikipedia.org/wiki/Front-end_web_development\" class=\"skills__kard\" target=\"_blank\">\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n\t\t\t\t\t\t<h3 class=\"skills__kard-title\">web developement</h3>\n\t\t\t\t\t\t<span class=\"skills__kard-text\">HTML CSS</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"skills__list\">\n\t\t\t\t\t<li class=\"skills__list-item\">\n\t\t\t\t\t\t<a href=\"https://en.wikipedia.org/wiki/HTML\" class=\"skills__list-link skills__list-link--html\" target=\"_blank\"><img class=\"skills__list-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">HTML</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"skills__list-item\">\n\t\t\t\t\t\t<a href=\"https://en.wikipedia.org/wiki/CSS\" class=\"skills__list-link skills__list-link--css\" target=\"_blank\"><img class=\"skills__list-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">CSS</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li class=\"skills__list-item\">\n\t\t\t\t\t\t<a href=\"https://en.wikipedia.org/wiki/JavaScript\" class=\"skills__list-link skills__list-link--js\" target=\"_blank\"><img class=\"skills__list-img\" src=\"img/svg/js.svg\" alt=\"\">JS</a>\n\t\t\t\t\t</li> -->\n\t\t\t\t\t<!-- <li class=\"skills__list-item\">\n\t\t\t\t\t\t<a href=\"https://en.wikipedia.org/wiki/React_(JavaScript_library)\" class=\"skills__list-link skills__list-link--react\" target=\"_blank\"><img src=\"img/svg/react.svg\" alt=\"\">REACT</a>\n\t\t\t\t\t</li> -->\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</section>\n\t\t<section class=\"section main__work work\" id=\"work\">\n\t\t\t<div class=\"work__container\">\n\t\t\t\t<div class=\"work__header\">\n\t\t\t\t\t<div class=\"work__decor decor\">\n\t\t\t\t\t\t<svg width=\"32\" height=\"44\" viewBox=\"0 0 32 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<g clip-path=\"url(#clip0_571_700)\">\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z\" fill=\"#12F7D6\" />\n\t\t\t\t\t\t\t\t<path d=\"M17.3333 9.16669V16.5H14.6666V9.16669H17.3333Z\" fill=\"#12F7D6\" />\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t<clipPath id=\"clip0_571_700\">\n\t\t\t\t\t\t\t\t\t<rect width=\"32\" height=\"44\" fill=\"white\" />\n\t\t\t\t\t\t\t\t</clipPath>\n\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t<svg width=\"12\" height=\"87\" viewBox=\"0 0 12 87\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<path d=\"M6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L6.5 1ZM6 83.8867L8.88675 81L6 78.1132L3.11325 81L6 83.8867ZM5.5 3.85714C5.5 4.13329 5.72386 4.35714 6 4.35714C6.27614 4.35714 6.5 4.13329 6.5 3.85714H5.5ZM6.5 9.57143C6.5 9.29528 6.27614 9.07143 6 9.07143C5.72386 9.07143 5.5 9.29528 5.5 9.57143H6.5ZM5.5 15.2857C5.5 15.5619 5.72386 15.7857 6 15.7857C6.27614 15.7857 6.5 15.5619 6.5 15.2857H5.5ZM6.5 21C6.5 20.7239 6.27614 20.5 6 20.5C5.72386 20.5 5.5 20.7239 5.5 21H6.5ZM5.5 26.7143C5.5 26.9904 5.72386 27.2143 6 27.2143C6.27614 27.2143 6.5 26.9904 6.5 26.7143H5.5ZM6.5 32.4286C6.5 32.1524 6.27614 31.9286 6 31.9286C5.72386 31.9286 5.5 32.1524 5.5 32.4286H6.5ZM5.5 38.1429C5.5 38.419 5.72386 38.6429 6 38.6429C6.27614 38.6429 6.5 38.419 6.5 38.1429H5.5ZM6.5 43.8571C6.5 43.581 6.27614 43.3571 6 43.3571C5.72386 43.3571 5.5 43.581 5.5 43.8571H6.5ZM5.5 49.5714C5.5 49.8476 5.72386 50.0714 6 50.0714C6.27614 50.0714 6.5 49.8476 6.5 49.5714H5.5ZM6.5 55.2857C6.5 55.0096 6.27614 54.7857 6 54.7857C5.72386 54.7857 5.5 55.0096 5.5 55.2857H6.5ZM5.5 61C5.5 61.2761 5.72386 61.5 6 61.5C6.27614 61.5 6.5 61.2761 6.5 61H5.5ZM6.5 66.7143C6.5 66.4381 6.27614 66.2143 6 66.2143C5.72386 66.2143 5.5 66.4381 5.5 66.7143H6.5ZM5.5 72.4286C5.5 72.7047 5.72386 72.9286 6 72.9286C6.27614 72.9286 6.5 72.7047 6.5 72.4286H5.5ZM6.5 78.1429C6.5 77.8667 6.27614 77.6429 6 77.6429C5.72386 77.6429 5.5 77.8667 5.5 78.1429H6.5ZM5.5 1V3.85714H6.5V1L5.5 1ZM5.5 9.57143L5.5 15.2857H6.5L6.5 9.57143H5.5ZM5.5 21L5.5 26.7143H6.5L6.5 21H5.5ZM5.5 32.4286V38.1429H6.5V32.4286H5.5ZM5.5 43.8571L5.5 49.5714H6.5L6.5 43.8571H5.5ZM5.5 55.2857L5.5 61H6.5L6.5 55.2857H5.5ZM5.5 66.7143V72.4286H6.5V66.7143H5.5ZM5.5 78.1429L5.5 81H6.5L6.5 78.1429H5.5ZM7 1C7 0.447715 6.55228 5.96046e-08 6 5.96046e-08C5.44772 5.96046e-08 5 0.447715 5 1L7 1ZM6 86.7735L11.7735 81L6 75.2265L0.226498 81L6 86.7735ZM5 3.85714C5 4.40943 5.44772 4.85714 6 4.85714C6.55228 4.85714 7 4.40943 7 3.85714H5ZM7 9.57143C7 9.01914 6.55228 8.57143 6 8.57143C5.44772 8.57143 5 9.01914 5 9.57143H7ZM5 15.2857C5 15.838 5.44772 16.2857 6 16.2857C6.55228 16.2857 7 15.838 7 15.2857H5ZM7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21H7ZM5 26.7143C5 27.2666 5.44772 27.7143 6 27.7143C6.55228 27.7143 7 27.2666 7 26.7143H5ZM7 32.4286C7 31.8763 6.55228 31.4286 6 31.4286C5.44772 31.4286 5 31.8763 5 32.4286H7ZM5 38.1429C5 38.6951 5.44772 39.1429 6 39.1429C6.55228 39.1429 7 38.6951 7 38.1429H5ZM7 43.8571C7 43.3049 6.55228 42.8571 6 42.8571C5.44772 42.8571 5 43.3049 5 43.8571H7ZM5 49.5714C5 50.1237 5.44772 50.5714 6 50.5714C6.55228 50.5714 7 50.1237 7 49.5714H5ZM7 55.2857C7 54.7334 6.55228 54.2857 6 54.2857C5.44772 54.2857 5 54.7334 5 55.2857H7ZM5 61C5 61.5523 5.44772 62 6 62C6.55228 62 7 61.5523 7 61H5ZM7 66.7143C7 66.162 6.55228 65.7143 6 65.7143C5.44772 65.7143 5 66.162 5 66.7143H7ZM5 72.4286C5 72.9809 5.44772 73.4286 6 73.4286C6.55228 73.4286 7 72.9809 7 72.4286H5ZM7 78.1429C7 77.5906 6.55228 77.1429 6 77.1429C5.44772 77.1429 5 77.5906 5 78.1429H7ZM5 1V3.85714H7V1L5 1ZM5 9.57143L5 15.2857H7L7 9.57143H5ZM5 21L5 26.7143H7L7 21H5ZM5 32.4286L5 38.1429H7L7 32.4286H5ZM5 43.8571L5 49.5714H7L7 43.8571H5ZM5 55.2857L5 61H7L7 55.2857H5ZM5 66.7143V72.4286H7V66.7143H5ZM5 78.1429L5 81H7L7 78.1429H5Z\" fill=\"white\" />\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h2 class=\"work__title title\">Works</h2>\n\t\t\t\t\t<p class=\"work__subtext\">I had the pleasure of working with these awesome projects</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"swiper\">\n\t\t\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t\t\t\t<a href=\"https://html-coder-oleh-rozhanskyi.github.io/growfy/\" class=\"swiper-slide-link\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<img class=\"swiper-slide-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" width=\"650\" height=\"432\"><span class=\"swiper-link-text\">view Website</span>\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-img-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"swiper-slide-img-site\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" width=\"294\" height=\"1184\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-code-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"swiper-slide-code\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" width=\"209\" height=\"1903\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t\t\t\t<a href=\"https://html-coder-oleh-rozhanskyi.github.io/Robin.W/\" class=\"swiper-slide-link\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<img class=\"swiper-slide-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" width=\"650\" height=\"432\"><span class=\"swiper-link-text\">view Website</span>\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-img-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"swiper-slide-img-site\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" width=\"294\" height=\"1184\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-code-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"swiper-slide-code\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" width=\"209\" height=\"1903\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t\t\t\t<a href=\"https://html-coder-oleh-rozhanskyi.github.io/rum_tibet/\" class=\"swiper-slide-link\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<img class=\"swiper-slide-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" width=\"650\" height=\"432\"><span class=\"swiper-link-text\">view Website</span>\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-img-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"swiper-slide-img-site\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" width=\"294\" height=\"1184\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-code-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"swiper-slide-code\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" width=\"209\" height=\"1903\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t\t\t\t<a href=\"https://html-coder-oleh-rozhanskyi.github.io/farm_vest/\" class=\"swiper-slide-link\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<img class=\"swiper-slide-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" width=\"650\" height=\"432\"><span class=\"swiper-link-text\">view Website</span>\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-img-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"swiper-slide-img-site\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" width=\"294\" height=\"1184\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-code-wrap\">\n\t\t\t\t\t\t\t\t\t<img class=\"swiper-slide-code\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" width=\"209\" height=\"1903\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"swiper-button-prev\"></div>\n\t\t\t\t\t<div class=\"swiper-button-next\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<section class=\"section main__contact contact\" id=\"contact\">\n\t\t\t<div class=\"contact__container\">\n\t\t\t\t<div class=\"contact__decor decor\">\n\t\t\t\t\t<svg width=\"32\" height=\"44\" viewBox=\"0 0 32 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t<g clip-path=\"url(#clip0_571_700)\">\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z\" fill=\"#12F7D6\" />\n\t\t\t\t\t\t\t<path d=\"M17.3333 9.16669V16.5H14.6666V9.16669H17.3333Z\" fill=\"#12F7D6\" />\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t<clipPath id=\"clip0_571_700\">\n\t\t\t\t\t\t\t\t<rect width=\"32\" height=\"44\" fill=\"white\" />\n\t\t\t\t\t\t\t</clipPath>\n\t\t\t\t\t\t</defs>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<svg width=\"12\" height=\"87\" viewBox=\"0 0 12 87\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t<path d=\"M6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L6.5 1ZM6 83.8867L8.88675 81L6 78.1132L3.11325 81L6 83.8867ZM5.5 3.85714C5.5 4.13329 5.72386 4.35714 6 4.35714C6.27614 4.35714 6.5 4.13329 6.5 3.85714H5.5ZM6.5 9.57143C6.5 9.29528 6.27614 9.07143 6 9.07143C5.72386 9.07143 5.5 9.29528 5.5 9.57143H6.5ZM5.5 15.2857C5.5 15.5619 5.72386 15.7857 6 15.7857C6.27614 15.7857 6.5 15.5619 6.5 15.2857H5.5ZM6.5 21C6.5 20.7239 6.27614 20.5 6 20.5C5.72386 20.5 5.5 20.7239 5.5 21H6.5ZM5.5 26.7143C5.5 26.9904 5.72386 27.2143 6 27.2143C6.27614 27.2143 6.5 26.9904 6.5 26.7143H5.5ZM6.5 32.4286C6.5 32.1524 6.27614 31.9286 6 31.9286C5.72386 31.9286 5.5 32.1524 5.5 32.4286H6.5ZM5.5 38.1429C5.5 38.419 5.72386 38.6429 6 38.6429C6.27614 38.6429 6.5 38.419 6.5 38.1429H5.5ZM6.5 43.8571C6.5 43.581 6.27614 43.3571 6 43.3571C5.72386 43.3571 5.5 43.581 5.5 43.8571H6.5ZM5.5 49.5714C5.5 49.8476 5.72386 50.0714 6 50.0714C6.27614 50.0714 6.5 49.8476 6.5 49.5714H5.5ZM6.5 55.2857C6.5 55.0096 6.27614 54.7857 6 54.7857C5.72386 54.7857 5.5 55.0096 5.5 55.2857H6.5ZM5.5 61C5.5 61.2761 5.72386 61.5 6 61.5C6.27614 61.5 6.5 61.2761 6.5 61H5.5ZM6.5 66.7143C6.5 66.4381 6.27614 66.2143 6 66.2143C5.72386 66.2143 5.5 66.4381 5.5 66.7143H6.5ZM5.5 72.4286C5.5 72.7047 5.72386 72.9286 6 72.9286C6.27614 72.9286 6.5 72.7047 6.5 72.4286H5.5ZM6.5 78.1429C6.5 77.8667 6.27614 77.6429 6 77.6429C5.72386 77.6429 5.5 77.8667 5.5 78.1429H6.5ZM5.5 1V3.85714H6.5V1L5.5 1ZM5.5 9.57143L5.5 15.2857H6.5L6.5 9.57143H5.5ZM5.5 21L5.5 26.7143H6.5L6.5 21H5.5ZM5.5 32.4286V38.1429H6.5V32.4286H5.5ZM5.5 43.8571L5.5 49.5714H6.5L6.5 43.8571H5.5ZM5.5 55.2857L5.5 61H6.5L6.5 55.2857H5.5ZM5.5 66.7143V72.4286H6.5V66.7143H5.5ZM5.5 78.1429L5.5 81H6.5L6.5 78.1429H5.5ZM7 1C7 0.447715 6.55228 5.96046e-08 6 5.96046e-08C5.44772 5.96046e-08 5 0.447715 5 1L7 1ZM6 86.7735L11.7735 81L6 75.2265L0.226498 81L6 86.7735ZM5 3.85714C5 4.40943 5.44772 4.85714 6 4.85714C6.55228 4.85714 7 4.40943 7 3.85714H5ZM7 9.57143C7 9.01914 6.55228 8.57143 6 8.57143C5.44772 8.57143 5 9.01914 5 9.57143H7ZM5 15.2857C5 15.838 5.44772 16.2857 6 16.2857C6.55228 16.2857 7 15.838 7 15.2857H5ZM7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21H7ZM5 26.7143C5 27.2666 5.44772 27.7143 6 27.7143C6.55228 27.7143 7 27.2666 7 26.7143H5ZM7 32.4286C7 31.8763 6.55228 31.4286 6 31.4286C5.44772 31.4286 5 31.8763 5 32.4286H7ZM5 38.1429C5 38.6951 5.44772 39.1429 6 39.1429C6.55228 39.1429 7 38.6951 7 38.1429H5ZM7 43.8571C7 43.3049 6.55228 42.8571 6 42.8571C5.44772 42.8571 5 43.3049 5 43.8571H7ZM5 49.5714C5 50.1237 5.44772 50.5714 6 50.5714C6.55228 50.5714 7 50.1237 7 49.5714H5ZM7 55.2857C7 54.7334 6.55228 54.2857 6 54.2857C5.44772 54.2857 5 54.7334 5 55.2857H7ZM5 61C5 61.5523 5.44772 62 6 62C6.55228 62 7 61.5523 7 61H5ZM7 66.7143C7 66.162 6.55228 65.7143 6 65.7143C5.44772 65.7143 5 66.162 5 66.7143H7ZM5 72.4286C5 72.9809 5.44772 73.4286 6 73.4286C6.55228 73.4286 7 72.9809 7 72.4286H5ZM7 78.1429C7 77.5906 6.55228 77.1429 6 77.1429C5.44772 77.1429 5 77.5906 5 78.1429H7ZM5 1V3.85714H7V1L5 1ZM5 9.57143L5 15.2857H7L7 9.57143H5ZM5 21L5 26.7143H7L7 21H5ZM5 32.4286L5 38.1429H7L7 32.4286H5ZM5 43.8571L5 49.5714H7L7 43.8571H5ZM5 55.2857L5 61H7L7 55.2857H5ZM5 66.7143V72.4286H7V66.7143H5ZM5 78.1429L5 81H7L7 78.1429H5Z\" fill=\"white\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<h2 class=\"contact__title title\">Contact</h2>\n\t\t\t\t<p class=\"contact__subtext\">I’m currently available for freelance work</p>\n\t\t\t\t<h3 class=\"contact__subtitle\">Send me a message</h3>\n\t\t\t\t<form class=\"contact__form\" action=\"#\" method=\"post\">\n\t\t\t\t\t<label class=\"contact__label\" for=\"name\">Your name *</label>\n\t\t\t\t\t<input class=\"contact__input\" id=\"name\" name=\"user-name\" type=\"text\" placeholder=\"Enter your name\">\n\t\t\t\t\t<label class=\"contact__label\" for=\"email\">Your email *</label>\n\t\t\t\t\t<input class=\"contact__input\" id=\"emeil\" name=\"user-email\" type=\"email\" placeholder=\"Enter your email\">\n\t\t\t\t\t<label class=\"contact__label\" for=\"message\">Your message *</label>\n\t\t\t\t\t<textarea class=\"contact__textarea\" name=\"message\" id=\"message\" placeholder=\"Enter your needs\"></textarea>\n\t\t\t\t</form>\n\t\t\t\t<button class=\"contact__button\" type=\"submit\">Send Message</button>\n\t\t\t</div>\n\t\t</section>\n\t</main>\n\t<footer class=\"footer\">\n\t\t<div class=\"footer__container\">\n\t\t\t<h2 class=\"footer__title\">Рожанський Олег</h2>\n\t\t\t<ul class=\"footer__social-list social-list\">\n\t\t\t\t<li><a href=\"https://github.com/HTML-coder-Oleh-Rozhanskyi\" class=\"social-list__link\" target=\"_blank\">\n\t\t\t\t\t\t<svg class=\"social-list__icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<path d=\"M12 2.24658C9.62547 2.24668 7.32846 3.0917 5.51996 4.63043C3.71146 6.16916 2.5095 8.3012 2.12913 10.6451C1.74876 12.9889 2.21481 15.3917 3.4439 17.4233C4.67298 19.455 6.58488 20.9831 8.83752 21.7341C9.33752 21.8216 9.52502 21.5216 9.52502 21.2591C9.52502 21.0216 9.51251 20.2341 9.51251 19.3966C7 19.8591 6.35 18.7841 6.15 18.2216C5.92807 17.6745 5.57627 17.1897 5.125 16.8091C4.775 16.6216 4.275 16.1591 5.11249 16.1466C5.43227 16.1813 5.73898 16.2926 6.00663 16.471C6.27427 16.6494 6.49496 16.8897 6.65 17.1716C6.78677 17.4173 6.97068 17.6336 7.19119 17.8081C7.4117 17.9826 7.66447 18.1118 7.93503 18.1885C8.20559 18.2651 8.48861 18.2876 8.76788 18.2547C9.04714 18.2218 9.31717 18.134 9.56248 17.9966C9.60577 17.4882 9.83234 17.0129 10.2 16.6591C7.975 16.4091 5.65 15.5466 5.65 11.7216C5.63594 10.7278 6.00268 9.76619 6.675 9.03411C6.36928 8.17033 6.40505 7.2224 6.775 6.38411C6.775 6.38411 7.61247 6.1216 9.525 7.40911C11.1613 6.95909 12.8887 6.95909 14.525 7.40911C16.4375 6.10911 17.275 6.38411 17.275 6.38411C17.645 7.22238 17.6808 8.17034 17.375 9.03411C18.0493 9.76494 18.4164 10.7273 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.0761 16.901 14.2599 17.1914 14.3764 17.5106C14.4929 17.8298 14.5393 18.1704 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.4362 20.977 19.3426 19.4453 20.5664 17.4126C21.7903 15.3799 22.2519 12.9784 21.8689 10.6368C21.4859 8.29523 20.2832 6.16595 18.4755 4.62909C16.6678 3.09223 14.3727 2.24782 12 2.24658Z\" fill=\"black\" />\n\t\t\t\t\t\t</svg><span>GitHub</span></a>\n\t\t\t\t</li>\n\t\t\t\t<li><a href=\"https://www.linkedin.com/feed/\" class=\"social-list__link\" target=\"_blank\">\n\t\t\t\t\t\t<svg class=\"social-list__icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44771 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z\" fill=\"#2D3648\" />\n\t\t\t\t\t\t</svg><span>LinkedIn</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</footer>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

/***/ }),

/***/ "./src/swiper-bundle.js":
/*!******************************!*\
  !*** ./src/swiper-bundle.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "swiper-bundle.js";

/***/ }),

/***/ "./src/fonts/IBMPlexMono-Medium.woff2":
/*!********************************************!*\
  !*** ./src/fonts/IBMPlexMono-Medium.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/IBMPlexMono-Medium.woff2";

/***/ }),

/***/ "./src/fonts/IBMPlexMono-Regular.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/IBMPlexMono-Regular.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/IBMPlexMono-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Ubuntu-Light.woff2":
/*!**************************************!*\
  !*** ./src/fonts/Ubuntu-Light.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Ubuntu-Light.woff2";

/***/ }),

/***/ "./src/fonts/Ubuntu-Medium.woff2":
/*!***************************************!*\
  !*** ./src/fonts/Ubuntu-Medium.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Ubuntu-Medium.woff2";

/***/ }),

/***/ "./src/fonts/Ubuntu-Regular.woff2":
/*!****************************************!*\
  !*** ./src/fonts/Ubuntu-Regular.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Ubuntu-Regular.woff2";

/***/ }),

/***/ "./src/img/about/01.jpg":
/*!******************************!*\
  !*** ./src/img/about/01.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/01.jpg";

/***/ }),

/***/ "./src/img/banner/1.svg":
/*!******************************!*\
  !*** ./src/img/banner/1.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/1.svg";

/***/ }),

/***/ "./src/img/bg/bg-about.jpg":
/*!*********************************!*\
  !*** ./src/img/bg/bg-about.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bg-about.jpg";

/***/ }),

/***/ "./src/img/bg/bg-skills.jpg":
/*!**********************************!*\
  !*** ./src/img/bg/bg-skills.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bg-skills.jpg";

/***/ }),

/***/ "./src/img/bg/bg-work.jpg":
/*!********************************!*\
  !*** ./src/img/bg/bg-work.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bg-work.jpg";

/***/ }),

/***/ "./src/img/svg/css.svg":
/*!*****************************!*\
  !*** ./src/img/svg/css.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/css.svg";

/***/ }),

/***/ "./src/img/svg/html.svg":
/*!******************************!*\
  !*** ./src/img/svg/html.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/html.svg";

/***/ }),

/***/ "./src/img/svg/icon-briefcase.svg":
/*!****************************************!*\
  !*** ./src/img/svg/icon-briefcase.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-briefcase.svg";

/***/ }),

/***/ "./src/img/svg/icon-download.svg":
/*!***************************************!*\
  !*** ./src/img/svg/icon-download.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-download.svg";

/***/ }),

/***/ "./src/img/svg/icon-line.svg":
/*!***********************************!*\
  !*** ./src/img/svg/icon-line.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-line.svg";

/***/ }),

/***/ "./src/img/svg/icon-link.svg":
/*!***********************************!*\
  !*** ./src/img/svg/icon-link.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-link.svg";

/***/ }),

/***/ "./src/img/svg/icon-mail.svg":
/*!***********************************!*\
  !*** ./src/img/svg/icon-mail.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-mail.svg";

/***/ }),

/***/ "./src/img/svg/icon-map-pin.svg":
/*!**************************************!*\
  !*** ./src/img/svg/icon-map-pin.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-map-pin.svg";

/***/ }),

/***/ "./src/img/svg/icon-mouse-pointer.svg":
/*!********************************************!*\
  !*** ./src/img/svg/icon-mouse-pointer.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-mouse-pointer.svg";

/***/ }),

/***/ "./src/img/svg/icon-send.svg":
/*!***********************************!*\
  !*** ./src/img/svg/icon-send.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-send.svg";

/***/ }),

/***/ "./src/img/svg/icon-shape.svg":
/*!************************************!*\
  !*** ./src/img/svg/icon-shape.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon-shape.svg";

/***/ }),

/***/ "./src/img/svg/skils-decor.svg":
/*!*************************************!*\
  !*** ./src/img/svg/skils-decor.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/skils-decor.svg";

/***/ }),

/***/ "./src/img/work/code1.png":
/*!********************************!*\
  !*** ./src/img/work/code1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/code1.png";

/***/ }),

/***/ "./src/img/work/dual-screen.png":
/*!**************************************!*\
  !*** ./src/img/work/dual-screen.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/dual-screen.png";

/***/ }),

/***/ "./src/img/work/site1.jpeg":
/*!*********************************!*\
  !*** ./src/img/work/site1.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/site1.jpeg";

/***/ }),

/***/ "./src/img/work/site2.jpeg":
/*!*********************************!*\
  !*** ./src/img/work/site2.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/site2.jpeg";

/***/ }),

/***/ "./src/img/work/site3.jpeg":
/*!*********************************!*\
  !*** ./src/img/work/site3.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/site3.jpeg";

/***/ }),

/***/ "./src/img/work/site4.jpeg":
/*!*********************************!*\
  !*** ./src/img/work/site4.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/site4.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider.js */ "./src/js/components/slider.js");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_slider_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_menu_burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu_burger.js */ "./src/js/components/menu_burger.js");
/* harmony import */ var _components_menu_burger_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_menu_burger_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header.js */ "./src/js/components/header.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_header_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_aside_bar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/aside-bar.js */ "./src/js/components/aside-bar.js");
/* harmony import */ var _components_aside_bar_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_aside_bar_js__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=main82474fecf1cad3dbe991.js.map