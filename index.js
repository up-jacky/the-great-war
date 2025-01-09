(() => {
  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b) {
      return function(a) {
        return f(a)(b);
      };
    };
  };
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };

  // output/Data.Functor/foreign.js
  var arrayMap = function(f) {
    return function(arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Type.Proxy/index.js
  var $$Proxy = /* @__PURE__ */ function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var mapFlipped = function(dictFunctor) {
    var map1 = map(dictFunctor);
    return function(fa) {
      return function(f) {
        return map1(f)(fa);
      };
    };
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply(dictApply);
    var map7 = map(dictApply.Functor0());
    return function(a) {
      return function(b) {
        return apply1(map7($$const(identity2))(a))(b);
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var liftA1 = function(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    var pure1 = pure(dictApplicative);
    return function(f) {
      return function(a) {
        return apply2(pure1(f))(a);
      };
    };
  };

  // output/Control.Bind/index.js
  var bind = function(dict) {
    return dict.bind;
  };

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind4 = bind(dictMonad.Bind1());
    var pure5 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a) {
        return bind4(f)(function(f$prime) {
          return bind4(a)(function(a$prime) {
            return pure5(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0) return ys;
      if (ys.length === 0) return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Symbol/index.js
  var reflectSymbol = function(dict) {
    return dict.reflectSymbol;
  };

  // output/Record.Unsafe/foreign.js
  var unsafeGet = function(label4) {
    return function(rec) {
      return rec[label4];
    };
  };

  // output/Data.Semigroup/index.js
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Data.Bounded/foreign.js
  var topInt = 2147483647;
  var bottomInt = -2147483648;
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl = function(lt) {
    return function(eq2) {
      return function(gt) {
        return function(x) {
          return function(y) {
            return x < y ? lt : x === y ? eq2 : gt;
          };
        };
      };
    };
  };
  var ordBooleanImpl = unsafeCompareImpl;
  var ordIntImpl = unsafeCompareImpl;
  var ordStringImpl = unsafeCompareImpl;
  var ordCharImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqBooleanImpl = refEq;
  var eqIntImpl = refEq;
  var eqCharImpl = refEq;
  var eqStringImpl = refEq;
  var eqArrayImpl = function(f) {
    return function(xs) {
      return function(ys) {
        if (xs.length !== ys.length) return false;
        for (var i = 0; i < xs.length; i++) {
          if (!f(xs[i])(ys[i])) return false;
        }
        return true;
      };
    };
  };

  // output/Data.Eq/index.js
  var eqString = {
    eq: eqStringImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eqChar = {
    eq: eqCharImpl
  };
  var eqBoolean = {
    eq: eqBooleanImpl
  };
  var eq = function(dict) {
    return dict.eq;
  };
  var eqArray = function(dictEq) {
    return {
      eq: eqArrayImpl(eq(dictEq))
    };
  };

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */ function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = /* @__PURE__ */ function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = /* @__PURE__ */ function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();

  // output/Data.Ring/foreign.js
  var intSub = function(x) {
    return function(y) {
      return x - y | 0;
    };
  };

  // output/Data.Semiring/foreign.js
  var intAdd = function(x) {
    return function(y) {
      return x + y | 0;
    };
  };
  var intMul = function(x) {
    return function(y) {
      return x * y | 0;
    };
  };

  // output/Data.Semiring/index.js
  var semiringInt = {
    add: intAdd,
    zero: 0,
    mul: intMul,
    one: 1
  };

  // output/Data.Ring/index.js
  var ringInt = {
    sub: intSub,
    Semiring0: function() {
      return semiringInt;
    }
  };

  // output/Data.Ord/index.js
  var ordString = /* @__PURE__ */ function() {
    return {
      compare: ordStringImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqString;
      }
    };
  }();
  var ordInt = /* @__PURE__ */ function() {
    return {
      compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqInt;
      }
    };
  }();
  var ordChar = /* @__PURE__ */ function() {
    return {
      compare: ordCharImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqChar;
      }
    };
  }();
  var ordBoolean = /* @__PURE__ */ function() {
    return {
      compare: ordBooleanImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqBoolean;
      }
    };
  }();
  var compare = function(dict) {
    return dict.compare;
  };

  // output/Data.Bounded/index.js
  var top = function(dict) {
    return dict.top;
  };
  var boundedInt = {
    top: topInt,
    bottom: bottomInt,
    Ord0: function() {
      return ordInt;
    }
  };
  var boundedChar = {
    top: topChar,
    bottom: bottomChar,
    Ord0: function() {
      return ordChar;
    }
  };
  var bottom = function(dict) {
    return dict.bottom;
  };

  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };
  var showStringImpl = function(s) {
    var l = s.length;
    return '"' + s.replace(
      /[\0-\x1F\x7F"\\]/g,
      // eslint-disable-line no-control-regex
      function(c, i) {
        switch (c) {
          case '"':
          case "\\":
            return "\\" + c;
          case "\x07":
            return "\\a";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "	":
            return "\\t";
          case "\v":
            return "\\v";
        }
        var k = i + 1;
        var empty4 = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
        return "\\" + c.charCodeAt(0).toString(10) + empty4;
      }
    ) + '"';
  };
  var showArrayImpl = function(f) {
    return function(xs) {
      var ss = [];
      for (var i = 0, l = xs.length; i < l; i++) {
        ss[i] = f(xs[i]);
      }
      return "[" + ss.join(",") + "]";
    };
  };

  // output/Data.Show/index.js
  var showString = {
    show: showStringImpl
  };
  var showRecordFields = function(dict) {
    return dict.showRecordFields;
  };
  var showRecord = function() {
    return function() {
      return function(dictShowRecordFields) {
        var showRecordFields1 = showRecordFields(dictShowRecordFields);
        return {
          show: function(record) {
            return "{" + (showRecordFields1($$Proxy.value)(record) + "}");
          }
        };
      };
    };
  };
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };
  var showArray = function(dictShow) {
    return {
      show: showArrayImpl(show(dictShow))
    };
  };
  var showRecordFieldsCons = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(dictShowRecordFields) {
      var showRecordFields1 = showRecordFields(dictShowRecordFields);
      return function(dictShow) {
        var show12 = show(dictShow);
        return {
          showRecordFields: function(v) {
            return function(record) {
              var tail = showRecordFields1($$Proxy.value)(record);
              var key2 = reflectSymbol2($$Proxy.value);
              var focus2 = unsafeGet(key2)(record);
              return " " + (key2 + (": " + (show12(focus2) + ("," + tail))));
            };
          }
        };
      };
    };
  };
  var showRecordFieldsConsNil = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(dictShow) {
      var show12 = show(dictShow);
      return {
        showRecordFields: function(v) {
          return function(record) {
            var key2 = reflectSymbol2($$Proxy.value);
            var focus2 = unsafeGet(key2)(record);
            return " " + (key2 + (": " + (show12(focus2) + " ")));
          };
        }
      };
    };
  };

  // output/Data.Generic.Rep/index.js
  var Inl = /* @__PURE__ */ function() {
    function Inl2(value0) {
      this.value0 = value0;
    }
    ;
    Inl2.create = function(value0) {
      return new Inl2(value0);
    };
    return Inl2;
  }();
  var Inr = /* @__PURE__ */ function() {
    function Inr2(value0) {
      this.value0 = value0;
    }
    ;
    Inr2.create = function(value0) {
      return new Inr2(value0);
    };
    return Inr2;
  }();
  var NoArguments = /* @__PURE__ */ function() {
    function NoArguments2() {
    }
    ;
    NoArguments2.value = new NoArguments2();
    return NoArguments2;
  }();
  var from = function(dict) {
    return dict.from;
  };

  // output/Data.Maybe/index.js
  var identity3 = /* @__PURE__ */ identity(categoryFn);
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var showMaybe = function(dictShow) {
    var show7 = show(dictShow);
    return {
      show: function(v) {
        if (v instanceof Just) {
          return "(Just " + (show7(v.value0) + ")");
        }
        ;
        if (v instanceof Nothing) {
          return "Nothing";
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 223, column 1 - line 225, column 28): " + [v.constructor.name]);
      }
    };
  };
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var isNothing = /* @__PURE__ */ maybe(true)(/* @__PURE__ */ $$const(false));
  var isJust = /* @__PURE__ */ maybe(false)(/* @__PURE__ */ $$const(true));
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var map2 = /* @__PURE__ */ map(functorMaybe);
  var fromMaybe = function(a) {
    return maybe(a)(identity3);
  };
  var fromJust = function() {
    return function(v) {
      if (v instanceof Just) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [v.constructor.name]);
    };
  };
  var eqMaybe = function(dictEq) {
    var eq2 = eq(dictEq);
    return {
      eq: function(x) {
        return function(y) {
          if (x instanceof Nothing && y instanceof Nothing) {
            return true;
          }
          ;
          if (x instanceof Just && y instanceof Just) {
            return eq2(x.value0)(y.value0);
          }
          ;
          return false;
        };
      }
    };
  };
  var applyMaybe = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return map2(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };
  var bindMaybe = {
    bind: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return v1(v.value0);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Apply0: function() {
      return applyMaybe;
    }
  };

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */ function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */ function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();
  var functorEither = {
    map: function(f) {
      return function(m) {
        if (m instanceof Left) {
          return new Left(m.value0);
        }
        ;
        if (m instanceof Right) {
          return new Right(f(m.value0));
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
      };
    }
  };
  var either = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Left) {
          return v(v2.value0);
        }
        ;
        if (v2 instanceof Right) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };

  // output/Effect/foreign.js
  var pureE = function(a) {
    return function() {
      return a;
    };
  };
  var bindE = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };

  // output/Data.EuclideanRing/foreign.js
  var intDegree = function(x) {
    return Math.min(Math.abs(x), 2147483647);
  };
  var intDiv = function(x) {
    return function(y) {
      if (y === 0) return 0;
      return y > 0 ? Math.floor(x / y) : -Math.floor(x / -y);
    };
  };
  var intMod = function(x) {
    return function(y) {
      if (y === 0) return 0;
      var yy = Math.abs(y);
      return (x % yy + yy) % yy;
    };
  };

  // output/Data.CommutativeRing/index.js
  var commutativeRingInt = {
    Ring0: function() {
      return ringInt;
    }
  };

  // output/Data.EuclideanRing/index.js
  var mod = function(dict) {
    return dict.mod;
  };
  var euclideanRingInt = {
    degree: intDegree,
    div: intDiv,
    mod: intMod,
    CommutativeRing0: function() {
      return commutativeRingInt;
    }
  };
  var div = function(dict) {
    return dict.div;
  };

  // output/Data.Monoid/index.js
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name15, moduleName, init2) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init2();
      state3 = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
    return {
      apply: ap(monadEffect),
      Functor0: function() {
        return $lazy_functorEffect(0);
      }
    };
  });
  var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);
  var applyEffect = /* @__PURE__ */ $lazy_applyEffect(23);

  // output/Control.Monad.Error.Class/index.js
  var throwError = function(dict) {
    return dict.throwError;
  };

  // output/Data.Identity/index.js
  var Identity = function(x) {
    return x;
  };
  var functorIdentity = {
    map: function(f) {
      return function(m) {
        return f(m);
      };
    }
  };
  var applyIdentity = {
    apply: function(v) {
      return function(v1) {
        return v(v1);
      };
    },
    Functor0: function() {
      return functorIdentity;
    }
  };
  var bindIdentity = {
    bind: function(v) {
      return function(f) {
        return f(v);
      };
    },
    Apply0: function() {
      return applyIdentity;
    }
  };
  var applicativeIdentity = {
    pure: Identity,
    Apply0: function() {
      return applyIdentity;
    }
  };
  var monadIdentity = {
    Applicative0: function() {
      return applicativeIdentity;
    },
    Bind1: function() {
      return bindIdentity;
    }
  };

  // output/Effect.Ref/foreign.js
  var _new = function(val) {
    return function() {
      return { value: val };
    };
  };
  var read = function(ref) {
    return function() {
      return ref.value;
    };
  };
  var write = function(val) {
    return function(ref) {
      return function() {
        ref.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$new = _new;

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x) {
    return x;
  };

  // output/Data.HeytingAlgebra/foreign.js
  var boolConj = function(b1) {
    return function(b2) {
      return b1 && b2;
    };
  };
  var boolDisj = function(b1) {
    return function(b2) {
      return b1 || b2;
    };
  };
  var boolNot = function(b) {
    return !b;
  };

  // output/Data.HeytingAlgebra/index.js
  var tt = function(dict) {
    return dict.tt;
  };
  var not = function(dict) {
    return dict.not;
  };
  var implies = function(dict) {
    return dict.implies;
  };
  var ff = function(dict) {
    return dict.ff;
  };
  var disj = function(dict) {
    return dict.disj;
  };
  var heytingAlgebraBoolean = {
    ff: false,
    tt: true,
    implies: function(a) {
      return function(b) {
        return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
      };
    },
    conj: boolConj,
    disj: boolDisj,
    not: boolNot
  };
  var conj = function(dict) {
    return dict.conj;
  };
  var heytingAlgebraFunction = function(dictHeytingAlgebra) {
    var ff1 = ff(dictHeytingAlgebra);
    var tt1 = tt(dictHeytingAlgebra);
    var implies1 = implies(dictHeytingAlgebra);
    var conj1 = conj(dictHeytingAlgebra);
    var disj1 = disj(dictHeytingAlgebra);
    var not12 = not(dictHeytingAlgebra);
    return {
      ff: function(v) {
        return ff1;
      },
      tt: function(v) {
        return tt1;
      },
      implies: function(f) {
        return function(g) {
          return function(a) {
            return implies1(f(a))(g(a));
          };
        };
      },
      conj: function(f) {
        return function(g) {
          return function(a) {
            return conj1(f(a))(g(a));
          };
        };
      },
      disj: function(f) {
        return function(g) {
          return function(a) {
            return disj1(f(a))(g(a));
          };
        };
      },
      not: function(f) {
        return function(a) {
          return not12(f(a));
        };
      }
    };
  };

  // output/Data.Tuple/index.js
  var Tuple = /* @__PURE__ */ function() {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function(value0) {
      return function(value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  }();
  var snd = function(v) {
    return v.value1;
  };
  var fst = function(v) {
    return v.value0;
  };

  // output/Control.Monad.Except.Trans/index.js
  var map3 = /* @__PURE__ */ map(functorEither);
  var ExceptT = function(x) {
    return x;
  };
  var runExceptT = function(v) {
    return v;
  };
  var mapExceptT = function(f) {
    return function(v) {
      return f(v);
    };
  };
  var functorExceptT = function(dictFunctor) {
    var map1 = map(dictFunctor);
    return {
      map: function(f) {
        return mapExceptT(map1(map3(f)));
      }
    };
  };
  var monadExceptT = function(dictMonad) {
    return {
      Applicative0: function() {
        return applicativeExceptT(dictMonad);
      },
      Bind1: function() {
        return bindExceptT(dictMonad);
      }
    };
  };
  var bindExceptT = function(dictMonad) {
    var bind4 = bind(dictMonad.Bind1());
    var pure5 = pure(dictMonad.Applicative0());
    return {
      bind: function(v) {
        return function(k) {
          return bind4(v)(either(function($193) {
            return pure5(Left.create($193));
          })(function(a) {
            var v1 = k(a);
            return v1;
          }));
        };
      },
      Apply0: function() {
        return applyExceptT(dictMonad);
      }
    };
  };
  var applyExceptT = function(dictMonad) {
    var functorExceptT1 = functorExceptT(dictMonad.Bind1().Apply0().Functor0());
    return {
      apply: ap(monadExceptT(dictMonad)),
      Functor0: function() {
        return functorExceptT1;
      }
    };
  };
  var applicativeExceptT = function(dictMonad) {
    return {
      pure: function() {
        var $194 = pure(dictMonad.Applicative0());
        return function($195) {
          return ExceptT($194(Right.create($195)));
        };
      }(),
      Apply0: function() {
        return applyExceptT(dictMonad);
      }
    };
  };
  var monadThrowExceptT = function(dictMonad) {
    var monadExceptT1 = monadExceptT(dictMonad);
    return {
      throwError: function() {
        var $204 = pure(dictMonad.Applicative0());
        return function($205) {
          return ExceptT($204(Left.create($205)));
        };
      }(),
      Monad0: function() {
        return monadExceptT1;
      }
    };
  };

  // output/Data.Array/foreign.js
  var rangeImpl = function(start2, end) {
    var step2 = start2 > end ? -1 : 1;
    var result = new Array(step2 * (end - start2) + 1);
    var i = start2, n = 0;
    while (i !== end) {
      result[n++] = i;
      i += step2;
    }
    result[n] = i;
    return result;
  };
  var replicateFill = function(count, value12) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value12);
  };
  var replicatePolyfill = function(count, value12) {
    var result = [];
    var n = 0;
    for (var i = 0; i < count; i++) {
      result[n++] = value12;
    }
    return result;
  };
  var replicateImpl = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var length = function(xs) {
    return xs.length;
  };
  var unconsImpl = function(empty4, next, xs) {
    return xs.length === 0 ? empty4({}) : next(xs[0])(xs.slice(1));
  };
  var indexImpl = function(just, nothing, xs, i) {
    return i < 0 || i >= xs.length ? nothing : just(xs[i]);
  };
  var filterImpl = function(f, xs) {
    return xs.filter(f);
  };
  var sliceImpl = function(s, e, l) {
    return l.slice(s, e);
  };
  var anyImpl = function(p, xs) {
    var len = xs.length;
    for (var i = 0; i < len; i++) {
      if (p(xs[i])) return true;
    }
    return false;
  };

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init2) {
      return function(xs) {
        var acc = init2;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init2) {
      return function(xs) {
        var acc = init2;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };

  // output/Control.Plus/index.js
  var empty = function(dict) {
    return dict.empty;
  };

  // output/Data.Foldable/index.js
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond3 = applySecond(dictApplicative.Apply0());
    var pure5 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr22 = foldr(dictFoldable);
      return function(f) {
        return foldr22(function($454) {
          return applySecond3(f($454));
        })(pure5(unit));
      };
    };
  };
  var for_ = function(dictApplicative) {
    var traverse_1 = traverse_(dictApplicative);
    return function(dictFoldable) {
      return flip(traverse_1(dictFoldable));
    };
  };
  var foldl = function(dict) {
    return dict.foldl;
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr22 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append3 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldr22(function(x) {
          return function(acc) {
            return append3(f(x))(acc);
          };
        })(mempty2);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };

  // output/Data.Function.Uncurried/foreign.js
  var runFn2 = function(fn) {
    return function(a) {
      return function(b) {
        return fn(a, b);
      };
    };
  };
  var runFn3 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        };
      };
    };
  };
  var runFn4 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };

  // output/Data.FunctorWithIndex/foreign.js
  var mapWithIndexArray = function(f) {
    return function(xs) {
      var l = xs.length;
      var result = Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(i)(xs[i]);
      }
      return result;
    };
  };

  // output/Data.FunctorWithIndex/index.js
  var mapWithIndex = function(dict) {
    return dict.mapWithIndex;
  };
  var functorWithIndexArray = {
    mapWithIndex: mapWithIndexArray,
    Functor0: function() {
      return functorArray;
    }
  };

  // output/Data.Unfoldable/foreign.js
  var unfoldrArrayImpl = function(isNothing2) {
    return function(fromJust4) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b) {
              var result = [];
              var value12 = b;
              while (true) {
                var maybe2 = f(value12);
                if (isNothing2(maybe2)) return result;
                var tuple = fromJust4(maybe2);
                result.push(fst2(tuple));
                value12 = snd2(tuple);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/foreign.js
  var unfoldr1ArrayImpl = function(isNothing2) {
    return function(fromJust4) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b) {
              var result = [];
              var value12 = b;
              while (true) {
                var tuple = f(value12);
                result.push(fst2(tuple));
                var maybe2 = snd2(tuple);
                if (isNothing2(maybe2)) return result;
                value12 = fromJust4(maybe2);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/index.js
  var fromJust2 = /* @__PURE__ */ fromJust();
  var unfoldable1Array = {
    unfoldr1: /* @__PURE__ */ unfoldr1ArrayImpl(isNothing)(fromJust2)(fst)(snd)
  };

  // output/Data.Unfoldable/index.js
  var fromJust3 = /* @__PURE__ */ fromJust();
  var unfoldr = function(dict) {
    return dict.unfoldr;
  };
  var unfoldableArray = {
    unfoldr: /* @__PURE__ */ unfoldrArrayImpl(isNothing)(fromJust3)(fst)(snd),
    Unfoldable10: function() {
      return unfoldable1Array;
    }
  };

  // output/Data.Array/index.js
  var uncons = /* @__PURE__ */ function() {
    return runFn3(unconsImpl)($$const(Nothing.value))(function(x) {
      return function(xs) {
        return new Just({
          head: x,
          tail: xs
        });
      };
    });
  }();
  var slice = /* @__PURE__ */ runFn3(sliceImpl);
  var range2 = /* @__PURE__ */ runFn2(rangeImpl);
  var mapWithIndex2 = /* @__PURE__ */ mapWithIndex(functorWithIndexArray);
  var index = /* @__PURE__ */ function() {
    return runFn4(indexImpl)(Just.create)(Nothing.value);
  }();
  var foldl2 = /* @__PURE__ */ foldl(foldableArray);
  var filter = /* @__PURE__ */ runFn2(filterImpl);
  var any2 = /* @__PURE__ */ runFn2(anyImpl);

  // output/Data.Int/foreign.js
  var fromNumberImpl = function(just) {
    return function(nothing) {
      return function(n) {
        return (n | 0) === n ? just(n) : nothing;
      };
    };
  };
  var toNumber = function(n) {
    return n;
  };
  var fromStringAsImpl = function(just) {
    return function(nothing) {
      return function(radix) {
        var digits;
        if (radix < 11) {
          digits = "[0-" + (radix - 1).toString() + "]";
        } else if (radix === 11) {
          digits = "[0-9a]";
        } else {
          digits = "[0-9a-" + String.fromCharCode(86 + radix) + "]";
        }
        var pattern2 = new RegExp("^[\\+\\-]?" + digits + "+$", "i");
        return function(s) {
          if (pattern2.test(s)) {
            var i = parseInt(s, radix);
            return (i | 0) === i ? just(i) : nothing;
          } else {
            return nothing;
          }
        };
      };
    };
  };

  // output/Data.Number/foreign.js
  var isFiniteImpl = isFinite;
  var floor = Math.floor;

  // output/Data.Number/index.js
  var pi = 3.141592653589793;

  // output/Data.Int/index.js
  var top2 = /* @__PURE__ */ top(boundedInt);
  var bottom2 = /* @__PURE__ */ bottom(boundedInt);
  var fromStringAs = /* @__PURE__ */ function() {
    return fromStringAsImpl(Just.create)(Nothing.value);
  }();
  var fromString = /* @__PURE__ */ fromStringAs(10);
  var fromNumber = /* @__PURE__ */ function() {
    return fromNumberImpl(Just.create)(Nothing.value);
  }();
  var unsafeClamp = function(x) {
    if (!isFiniteImpl(x)) {
      return 0;
    }
    ;
    if (x >= toNumber(top2)) {
      return top2;
    }
    ;
    if (x <= toNumber(bottom2)) {
      return bottom2;
    }
    ;
    if (otherwise) {
      return fromMaybe(0)(fromNumber(x));
    }
    ;
    throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): " + [x.constructor.name]);
  };
  var floor2 = function($39) {
    return unsafeClamp(floor($39));
  };

  // output/Data.Show.Generic/foreign.js
  var intercalate2 = function(separator) {
    return function(xs) {
      return xs.join(separator);
    };
  };

  // output/Data.Show.Generic/index.js
  var append2 = /* @__PURE__ */ append(semigroupArray);
  var genericShowArgsNoArguments = {
    genericShowArgs: function(v) {
      return [];
    }
  };
  var genericShowArgs = function(dict) {
    return dict.genericShowArgs;
  };
  var genericShowConstructor = function(dictGenericShowArgs) {
    var genericShowArgs1 = genericShowArgs(dictGenericShowArgs);
    return function(dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return {
        "genericShow'": function(v) {
          var ctor = reflectSymbol2($$Proxy.value);
          var v1 = genericShowArgs1(v);
          if (v1.length === 0) {
            return ctor;
          }
          ;
          return "(" + (intercalate2(" ")(append2([ctor])(v1)) + ")");
        }
      };
    };
  };
  var genericShow$prime = function(dict) {
    return dict["genericShow'"];
  };
  var genericShowSum = function(dictGenericShow) {
    var genericShow$prime1 = genericShow$prime(dictGenericShow);
    return function(dictGenericShow1) {
      var genericShow$prime2 = genericShow$prime(dictGenericShow1);
      return {
        "genericShow'": function(v) {
          if (v instanceof Inl) {
            return genericShow$prime1(v.value0);
          }
          ;
          if (v instanceof Inr) {
            return genericShow$prime2(v.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): " + [v.constructor.name]);
        }
      };
    };
  };
  var genericShow = function(dictGeneric) {
    var from2 = from(dictGeneric);
    return function(dictGenericShow) {
      var genericShow$prime1 = genericShow$prime(dictGenericShow);
      return function(x) {
        return genericShow$prime1(from2(x));
      };
    };
  };

  // output/Data.String.Common/foreign.js
  var split = function(sep) {
    return function(s) {
      return s.split(sep);
    };
  };
  var toLower = function(s) {
    return s.toLowerCase();
  };
  var joinWith = function(s) {
    return function(xs) {
      return xs.join(s);
    };
  };

  // output/Effect.AVar/foreign.js
  var AVar = function() {
    function MutableQueue() {
      this.head = null;
      this.last = null;
      this.size = 0;
    }
    function MutableCell(queue, value12) {
      this.queue = queue;
      this.value = value12;
      this.next = null;
      this.prev = null;
    }
    function AVar2(value12) {
      this.draining = false;
      this.error = null;
      this.value = value12;
      this.takes = new MutableQueue();
      this.reads = new MutableQueue();
      this.puts = new MutableQueue();
    }
    var EMPTY = {};
    function runEff(eff) {
      try {
        eff();
      } catch (error3) {
        setTimeout(function() {
          throw error3;
        }, 0);
      }
    }
    function putLast(queue, value12) {
      var cell = new MutableCell(queue, value12);
      switch (queue.size) {
        case 0:
          queue.head = cell;
          break;
        case 1:
          cell.prev = queue.head;
          queue.head.next = cell;
          queue.last = cell;
          break;
        default:
          cell.prev = queue.last;
          queue.last.next = cell;
          queue.last = cell;
      }
      queue.size++;
      return cell;
    }
    function takeLast(queue) {
      var cell;
      switch (queue.size) {
        case 0:
          return null;
        case 1:
          cell = queue.head;
          queue.head = null;
          break;
        case 2:
          cell = queue.last;
          queue.head.next = null;
          queue.last = null;
          break;
        default:
          cell = queue.last;
          queue.last = cell.prev;
          queue.last.next = null;
      }
      cell.prev = null;
      cell.queue = null;
      queue.size--;
      return cell.value;
    }
    function takeHead(queue) {
      var cell;
      switch (queue.size) {
        case 0:
          return null;
        case 1:
          cell = queue.head;
          queue.head = null;
          break;
        case 2:
          cell = queue.head;
          queue.last.prev = null;
          queue.head = queue.last;
          queue.last = null;
          break;
        default:
          cell = queue.head;
          queue.head = cell.next;
          queue.head.prev = null;
      }
      cell.next = null;
      cell.queue = null;
      queue.size--;
      return cell.value;
    }
    function deleteCell2(cell) {
      if (cell.queue === null) {
        return;
      }
      if (cell.queue.last === cell) {
        takeLast(cell.queue);
        return;
      }
      if (cell.queue.head === cell) {
        takeHead(cell.queue);
        return;
      }
      if (cell.prev) {
        cell.prev.next = cell.next;
      }
      if (cell.next) {
        cell.next.prev = cell.prev;
      }
      cell.queue.size--;
      cell.queue = null;
      cell.value = null;
      cell.next = null;
      cell.prev = null;
    }
    function drainVar(util, avar) {
      if (avar.draining) {
        return;
      }
      var ps = avar.puts;
      var ts = avar.takes;
      var rs = avar.reads;
      var p, r, t, value12, rsize;
      avar.draining = true;
      while (1) {
        p = null;
        r = null;
        t = null;
        value12 = avar.value;
        rsize = rs.size;
        if (avar.error !== null) {
          value12 = util.left(avar.error);
          while (p = takeHead(ps)) {
            runEff(p.cb(value12));
          }
          while (r = takeHead(rs)) {
            runEff(r(value12));
          }
          while (t = takeHead(ts)) {
            runEff(t(value12));
          }
          break;
        }
        if (value12 === EMPTY && (p = takeHead(ps))) {
          avar.value = value12 = p.value;
        }
        if (value12 !== EMPTY) {
          t = takeHead(ts);
          while (rsize-- && (r = takeHead(rs))) {
            runEff(r(util.right(value12)));
          }
          if (t !== null) {
            avar.value = EMPTY;
            runEff(t(util.right(value12)));
          }
        }
        if (p !== null) {
          runEff(p.cb(util.right(void 0)));
        }
        if (avar.value === EMPTY && ps.size === 0 || avar.value !== EMPTY && ts.size === 0) {
          break;
        }
      }
      avar.draining = false;
    }
    AVar2.EMPTY = EMPTY;
    AVar2.putLast = putLast;
    AVar2.takeLast = takeLast;
    AVar2.takeHead = takeHead;
    AVar2.deleteCell = deleteCell2;
    AVar2.drainVar = drainVar;
    return AVar2;
  }();
  function empty2() {
    return new AVar(AVar.EMPTY);
  }
  function _newVar(value12) {
    return function() {
      return new AVar(value12);
    };
  }
  function _putVar(util, value12, avar, cb) {
    return function() {
      var cell = AVar.putLast(avar.puts, { cb, value: value12 });
      AVar.drainVar(util, avar);
      return function() {
        AVar.deleteCell(cell);
      };
    };
  }
  function _takeVar(util, avar, cb) {
    return function() {
      var cell = AVar.putLast(avar.takes, cb);
      AVar.drainVar(util, avar);
      return function() {
        AVar.deleteCell(cell);
      };
    };
  }
  function _tryPutVar(util, value12, avar) {
    return function() {
      if (avar.value === AVar.EMPTY && avar.error === null) {
        avar.value = value12;
        AVar.drainVar(util, avar);
        return true;
      } else {
        return false;
      }
    };
  }
  function _tryTakeVar(util, avar) {
    return function() {
      var value12 = avar.value;
      if (value12 === AVar.EMPTY) {
        return util.nothing;
      } else {
        avar.value = AVar.EMPTY;
        AVar.drainVar(util, avar);
        return util.just(value12);
      }
    };
  }
  function _tryReadVar(util, avar) {
    return function() {
      if (avar.value === AVar.EMPTY) {
        return util.nothing;
      } else {
        return util.just(avar.value);
      }
    };
  }

  // output/Effect.AVar/index.js
  var Killed = /* @__PURE__ */ function() {
    function Killed2(value0) {
      this.value0 = value0;
    }
    ;
    Killed2.create = function(value0) {
      return new Killed2(value0);
    };
    return Killed2;
  }();
  var Filled = /* @__PURE__ */ function() {
    function Filled2(value0) {
      this.value0 = value0;
    }
    ;
    Filled2.create = function(value0) {
      return new Filled2(value0);
    };
    return Filled2;
  }();
  var Empty = /* @__PURE__ */ function() {
    function Empty3() {
    }
    ;
    Empty3.value = new Empty3();
    return Empty3;
  }();
  var $$new2 = _newVar;
  var ffiUtil = /* @__PURE__ */ function() {
    return {
      left: Left.create,
      right: Right.create,
      nothing: Nothing.value,
      just: Just.create,
      killed: Killed.create,
      filled: Filled.create,
      empty: Empty.value
    };
  }();
  var put = function(value12) {
    return function(avar) {
      return function(cb) {
        return _putVar(ffiUtil, value12, avar, cb);
      };
    };
  };
  var take = function(avar) {
    return function(cb) {
      return _takeVar(ffiUtil, avar, cb);
    };
  };
  var tryPut = function(value12) {
    return function(avar) {
      return _tryPutVar(ffiUtil, value12, avar);
    };
  };
  var tryRead = function(avar) {
    return _tryReadVar(ffiUtil, avar);
  };
  var tryTake = function(avar) {
    return _tryTakeVar(ffiUtil, avar);
  };

  // output/Effect.Console/foreign.js
  var log2 = function(s) {
    return function() {
      console.log(s);
    };
  };

  // output/Foreign/foreign.js
  function tagOf(value12) {
    return Object.prototype.toString.call(value12).slice(8, -1);
  }
  var isArray = Array.isArray || function(value12) {
    return Object.prototype.toString.call(value12) === "[object Array]";
  };

  // output/Data.NonEmpty/index.js
  var NonEmpty = /* @__PURE__ */ function() {
    function NonEmpty2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    NonEmpty2.create = function(value0) {
      return function(value1) {
        return new NonEmpty2(value0, value1);
      };
    };
    return NonEmpty2;
  }();
  var singleton2 = function(dictPlus) {
    var empty4 = empty(dictPlus);
    return function(a) {
      return new NonEmpty(a, empty4);
    };
  };

  // output/Data.List.Types/index.js
  var Nil = /* @__PURE__ */ function() {
    function Nil2() {
    }
    ;
    Nil2.value = new Nil2();
    return Nil2;
  }();
  var Cons = /* @__PURE__ */ function() {
    function Cons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons2.create = function(value0) {
      return function(value1) {
        return new Cons2(value0, value1);
      };
    };
    return Cons2;
  }();
  var NonEmptyList = function(x) {
    return x;
  };
  var listMap = function(f) {
    var chunkedRevMap = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Cons)) {
            $tco_var_v = new Cons(v1, v);
            $copy_v1 = v1.value1.value1.value1;
            return;
          }
          ;
          var unrolledMap = function(v2) {
            if (v2 instanceof Cons && (v2.value1 instanceof Cons && v2.value1.value1 instanceof Nil)) {
              return new Cons(f(v2.value0), new Cons(f(v2.value1.value0), Nil.value));
            }
            ;
            if (v2 instanceof Cons && v2.value1 instanceof Nil) {
              return new Cons(f(v2.value0), Nil.value);
            }
            ;
            return Nil.value;
          };
          var reverseUnrolledMap = function($copy_v2) {
            return function($copy_v3) {
              var $tco_var_v2 = $copy_v2;
              var $tco_done1 = false;
              var $tco_result2;
              function $tco_loop2(v2, v3) {
                if (v2 instanceof Cons && (v2.value0 instanceof Cons && (v2.value0.value1 instanceof Cons && v2.value0.value1.value1 instanceof Cons))) {
                  $tco_var_v2 = v2.value1;
                  $copy_v3 = new Cons(f(v2.value0.value0), new Cons(f(v2.value0.value1.value0), new Cons(f(v2.value0.value1.value1.value0), v3)));
                  return;
                }
                ;
                $tco_done1 = true;
                return v3;
              }
              ;
              while (!$tco_done1) {
                $tco_result2 = $tco_loop2($tco_var_v2, $copy_v3);
              }
              ;
              return $tco_result2;
            };
          };
          $tco_done = true;
          return reverseUnrolledMap(v)(unrolledMap(v1));
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return chunkedRevMap(Nil.value);
  };
  var functorList = {
    map: listMap
  };
  var foldableList = {
    foldr: function(f) {
      return function(b) {
        var rev3 = function() {
          var go2 = function($copy_v) {
            return function($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return v;
                }
                ;
                if (v1 instanceof Cons) {
                  $tco_var_v = new Cons(v1.value0, v);
                  $copy_v1 = v1.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
          return go2(Nil.value);
        }();
        var $284 = foldl(foldableList)(flip(f))(b);
        return function($285) {
          return $284(rev3($285));
        };
      };
    },
    foldl: function(f) {
      var go2 = function($copy_b) {
        return function($copy_v) {
          var $tco_var_b = $copy_b;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(b, v) {
            if (v instanceof Nil) {
              $tco_done1 = true;
              return b;
            }
            ;
            if (v instanceof Cons) {
              $tco_var_b = f(b)(v.value0);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_b, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
      return go2;
    },
    foldMap: function(dictMonoid) {
      var append22 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldl(foldableList)(function(acc) {
          var $286 = append22(acc);
          return function($287) {
            return $286(f($287));
          };
        })(mempty2);
      };
    }
  };
  var foldr2 = /* @__PURE__ */ foldr(foldableList);
  var semigroupList = {
    append: function(xs) {
      return function(ys) {
        return foldr2(Cons.create)(ys)(xs);
      };
    }
  };
  var append1 = /* @__PURE__ */ append(semigroupList);
  var altList = {
    alt: append1,
    Functor0: function() {
      return functorList;
    }
  };
  var plusList = /* @__PURE__ */ function() {
    return {
      empty: Nil.value,
      Alt0: function() {
        return altList;
      }
    };
  }();

  // output/Data.List.NonEmpty/index.js
  var singleton3 = /* @__PURE__ */ function() {
    var $200 = singleton2(plusList);
    return function($201) {
      return NonEmptyList($200($201));
    };
  }();

  // output/Data.String.CodeUnits/foreign.js
  var singleton4 = function(c) {
    return c;
  };
  var length3 = function(s) {
    return s.length;
  };
  var _indexOf = function(just) {
    return function(nothing) {
      return function(x) {
        return function(s) {
          var i = s.indexOf(x);
          return i === -1 ? nothing : just(i);
        };
      };
    };
  };
  var drop2 = function(n) {
    return function(s) {
      return s.substring(n);
    };
  };
  var splitAt = function(i) {
    return function(s) {
      return { before: s.substring(0, i), after: s.substring(i) };
    };
  };

  // output/Data.String.Unsafe/foreign.js
  var charAt = function(i) {
    return function(s) {
      if (i >= 0 && i < s.length) return s.charAt(i);
      throw new Error("Data.String.Unsafe.charAt: Invalid index.");
    };
  };

  // output/Data.String.CodeUnits/index.js
  var stripPrefix = function(v) {
    return function(str) {
      var v1 = splitAt(length3(v))(str);
      var $20 = v1.before === v;
      if ($20) {
        return new Just(v1.after);
      }
      ;
      return Nothing.value;
    };
  };
  var indexOf = /* @__PURE__ */ function() {
    return _indexOf(Just.create)(Nothing.value);
  }();
  var contains = function(pat) {
    var $23 = indexOf(pat);
    return function($24) {
      return isJust($23($24));
    };
  };

  // output/Foreign/index.js
  var TypeMismatch = /* @__PURE__ */ function() {
    function TypeMismatch2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    TypeMismatch2.create = function(value0) {
      return function(value1) {
        return new TypeMismatch2(value0, value1);
      };
    };
    return TypeMismatch2;
  }();
  var unsafeFromForeign = unsafeCoerce2;
  var fail = function(dictMonad) {
    var $153 = throwError(monadThrowExceptT(dictMonad));
    return function($154) {
      return $153(singleton3($154));
    };
  };
  var unsafeReadTagged = function(dictMonad) {
    var pure1 = pure(applicativeExceptT(dictMonad));
    var fail1 = fail(dictMonad);
    return function(tag) {
      return function(value12) {
        if (tagOf(value12) === tag) {
          return pure1(unsafeFromForeign(value12));
        }
        ;
        if (otherwise) {
          return fail1(new TypeMismatch(tag, tagOf(value12)));
        }
        ;
        throw new Error("Failed pattern match at Foreign (line 123, column 1 - line 123, column 104): " + [tag.constructor.name, value12.constructor.name]);
      };
    };
  };
  var readString = function(dictMonad) {
    return unsafeReadTagged(dictMonad)("String");
  };

  // output/Web.Event.EventTarget/foreign.js
  function eventListener(fn) {
    return function() {
      return function(event) {
        return fn(event)();
      };
    };
  }
  function addEventListener(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target5) {
          return function() {
            return target5.addEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }

  // output/Web.Socket.Event.EventTypes/index.js
  var onMessage = "message";

  // output/Web.Socket.Event.MessageEvent/foreign.js
  function data_(e) {
    return e.data;
  }

  // output/Web.Internal.FFI/foreign.js
  function _unsafeReadProtoTagged(nothing, just, name15, value12) {
    if (typeof window !== "undefined") {
      var ty = window[name15];
      if (ty != null && value12 instanceof ty) {
        return just(value12);
      }
    }
    var obj = value12;
    while (obj != null) {
      var proto = Object.getPrototypeOf(obj);
      var constructorName = proto.constructor.name;
      if (constructorName === name15) {
        return just(value12);
      } else if (constructorName === "Object") {
        return nothing;
      }
      obj = proto;
    }
    return nothing;
  }

  // output/Web.Internal.FFI/index.js
  var unsafeReadProtoTagged = function(name15) {
    return function(value12) {
      return _unsafeReadProtoTagged(Nothing.value, Just.create, name15, value12);
    };
  };

  // output/Web.Socket.Event.MessageEvent/index.js
  var fromEvent = /* @__PURE__ */ unsafeReadProtoTagged("MessageEvent");

  // output/Web.Socket.WebSocket/foreign.js
  function create(url3) {
    return function(protocols) {
      return function() {
        return new WebSocket(url3, protocols);
      };
    };
  }
  function sendImpl(ws) {
    return function(value12) {
      return function() {
        ws.send(value12);
      };
    };
  }

  // output/Data.Enum/foreign.js
  function toCharCode(c) {
    return c.charCodeAt(0);
  }
  function fromCharCode(c) {
    return String.fromCharCode(c);
  }

  // output/Data.Enum/index.js
  var bottom1 = /* @__PURE__ */ bottom(boundedChar);
  var top1 = /* @__PURE__ */ top(boundedChar);
  var toEnum = function(dict) {
    return dict.toEnum;
  };
  var fromEnum = function(dict) {
    return dict.fromEnum;
  };
  var toEnumWithDefaults = function(dictBoundedEnum) {
    var toEnum1 = toEnum(dictBoundedEnum);
    var fromEnum1 = fromEnum(dictBoundedEnum);
    var bottom22 = bottom(dictBoundedEnum.Bounded0());
    return function(low2) {
      return function(high2) {
        return function(x) {
          var v = toEnum1(x);
          if (v instanceof Just) {
            return v.value0;
          }
          ;
          if (v instanceof Nothing) {
            var $140 = x < fromEnum1(bottom22);
            if ($140) {
              return low2;
            }
            ;
            return high2;
          }
          ;
          throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): " + [v.constructor.name]);
        };
      };
    };
  };
  var defaultSucc = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a) {
        return toEnum$prime(fromEnum$prime(a) + 1 | 0);
      };
    };
  };
  var defaultPred = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a) {
        return toEnum$prime(fromEnum$prime(a) - 1 | 0);
      };
    };
  };
  var charToEnum = function(v) {
    if (v >= toCharCode(bottom1) && v <= toCharCode(top1)) {
      return new Just(fromCharCode(v));
    }
    ;
    return Nothing.value;
  };
  var enumChar = {
    succ: /* @__PURE__ */ defaultSucc(charToEnum)(toCharCode),
    pred: /* @__PURE__ */ defaultPred(charToEnum)(toCharCode),
    Ord0: function() {
      return ordChar;
    }
  };
  var boundedEnumChar = /* @__PURE__ */ function() {
    return {
      cardinality: toCharCode(top1) - toCharCode(bottom1) | 0,
      toEnum: charToEnum,
      fromEnum: toCharCode,
      Bounded0: function() {
        return boundedChar;
      },
      Enum1: function() {
        return enumChar;
      }
    };
  }();

  // output/Web.Socket.WebSocket/index.js
  var toEventTarget = unsafeCoerce2;
  var sendString = sendImpl;

  // output/CS150241Project.Networking/index.js
  var genericShowConstructor2 = /* @__PURE__ */ genericShowConstructor(genericShowArgsNoArguments);
  var bind2 = /* @__PURE__ */ bind(bindMaybe);
  var show2 = /* @__PURE__ */ show(showInt);
  var pure2 = /* @__PURE__ */ pure(applicativeEffect);
  var $$void2 = /* @__PURE__ */ $$void(functorEffect);
  var append12 = /* @__PURE__ */ append(semigroupArray);
  var for_2 = /* @__PURE__ */ for_(applicativeEffect)(foldableArray);
  var readString2 = /* @__PURE__ */ readString(monadIdentity);
  var Player1 = /* @__PURE__ */ function() {
    function Player12() {
    }
    ;
    Player12.value = new Player12();
    return Player12;
  }();
  var Player2 = /* @__PURE__ */ function() {
    function Player22() {
    }
    ;
    Player22.value = new Player22();
    return Player22;
  }();
  var genericPlayerId_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return Player1.value;
      }
      ;
      if (x instanceof Inr) {
        return Player2.value;
      }
      ;
      throw new Error("Failed pattern match at CS150241Project.Networking (line 34, column 1 - line 34, column 35): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof Player1) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof Player2) {
        return new Inr(NoArguments.value);
      }
      ;
      throw new Error("Failed pattern match at CS150241Project.Networking (line 34, column 1 - line 34, column 35): " + [x.constructor.name]);
    }
  };
  var showPlayerId = {
    show: /* @__PURE__ */ genericShow(genericPlayerId_)(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2({
      reflectSymbol: function() {
        return "Player1";
      }
    }))(/* @__PURE__ */ genericShowConstructor2({
      reflectSymbol: function() {
        return "Player2";
      }
    })))
  };
  var eqPlayerId = {
    eq: function(x) {
      return function(y) {
        if (x instanceof Player1 && y instanceof Player1) {
          return true;
        }
        ;
        if (x instanceof Player2 && y instanceof Player2) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var toPlayerId = function(n) {
    if (n === 1) {
      return new Just(Player1.value);
    }
    ;
    if (n === 2) {
      return new Just(Player2.value);
    }
    ;
    if (otherwise) {
      return Nothing.value;
    }
    ;
    throw new Error("Failed pattern match at CS150241Project.Networking (line 42, column 1 - line 42, column 36): " + [n.constructor.name]);
  };
  var toMessage = function(s) {
    var tokens = split(" ")(s);
    return bind2(bind2(bind2(index(tokens)(0))(fromString))(toPlayerId))(function(playerId) {
      var payload = joinWith(" ")(slice(1)(length(tokens))(tokens));
      return new Just({
        playerId,
        payload
      });
    });
  };
  var sendMessage = function(ws) {
    return function(message2) {
      return sendString(ws)(message2.payload);
    };
  };
  var connect = function(ipAddr) {
    return function(port2) {
      var addr = "ws://" + (ipAddr + (":" + show2(port2)));
      return function __do2() {
        log2(addr)();
        var ws = create(addr)([])();
        var avPlayerId = empty2();
        var avSendQueue = $$new2([])();
        var avRecvQueue = $$new2([])();
        var send = function(payload) {
          return function __do3() {
            var maybePlayerId = tryRead(avPlayerId)();
            if (maybePlayerId instanceof Nothing) {
              log2("Added to send queue: " + payload)();
              var doWhenFilled = function(v) {
                if (v instanceof Left) {
                  return pure2(unit);
                }
                ;
                if (v instanceof Right) {
                  return function __do4() {
                    $$void2(put(append12(v.value0)([payload]))(avSendQueue)(function(v1) {
                      return pure2(unit);
                    }))();
                    return unit;
                  };
                }
                ;
                throw new Error("Failed pattern match at CS150241Project.Networking (line 85, column 13 - line 85, column 46): " + [v.constructor.name]);
              };
              $$void2(take(avSendQueue)(doWhenFilled))();
              return unit;
            }
            ;
            if (maybePlayerId instanceof Just) {
              var messageToSend = {
                playerId: maybePlayerId.value0,
                payload
              };
              return sendMessage(ws)(messageToSend)();
            }
            ;
            throw new Error("Failed pattern match at CS150241Project.Networking (line 80, column 7 - line 95, column 39): " + [maybePlayerId.constructor.name]);
          };
        };
        var recv = function __do3() {
          var maybeRecvQueue = tryTake(avRecvQueue)();
          if (maybeRecvQueue instanceof Nothing) {
            return [];
          }
          ;
          if (maybeRecvQueue instanceof Just) {
            $$void2(tryPut([])(avRecvQueue))();
            return maybeRecvQueue.value0;
          }
          ;
          throw new Error("Failed pattern match at CS150241Project.Networking (line 109, column 7 - line 113, column 25): " + [maybeRecvQueue.constructor.name]);
        };
        var processSendQueue = /* @__PURE__ */ function() {
          var doWhenSendQueueFilled = function(v) {
            if (v instanceof Left) {
              return pure2(unit);
            }
            ;
            if (v instanceof Right) {
              return for_2(v.value0)(send);
            }
            ;
            throw new Error("Failed pattern match at CS150241Project.Networking (line 100, column 9 - line 100, column 51): " + [v.constructor.name]);
          };
          return function __do3() {
            $$void2(take(avSendQueue)(doWhenSendQueueFilled))();
            return unit;
          };
        }();
        var state3 = {
          avPlayerId,
          send,
          processSendQueue,
          recv
        };
        var addToRecvQueue = function(message2) {
          var doWhenFilled = function(v) {
            if (v instanceof Left) {
              return pure2(unit);
            }
            ;
            if (v instanceof Right) {
              return function __do3() {
                $$void2(put(append12(v.value0)([new Just(message2)]))(avRecvQueue)(function(v1) {
                  return pure2(unit);
                }))();
                return unit;
              };
            }
            ;
            throw new Error("Failed pattern match at CS150241Project.Networking (line 118, column 9 - line 118, column 42): " + [v.constructor.name]);
          };
          return function __do3() {
            $$void2(take(avRecvQueue)(doWhenFilled))();
            return unit;
          };
        };
        var messageListener = eventListener(function(ev) {
          var v = fromEvent(ev);
          if (v instanceof Nothing) {
            return log2("Failed to convert Event to MessageEvent");
          }
          ;
          if (v instanceof Just) {
            var v1 = runExceptT(readString2(data_(v.value0)));
            if (v1 instanceof Left) {
              return log2("Failed to read Foreign as String");
            }
            ;
            if (v1 instanceof Right) {
              var v2 = toMessage(v1.value0);
              if (v2 instanceof Nothing) {
                return log2("Failed to make message from " + v1.value0);
              }
              ;
              if (v2 instanceof Just) {
                return function __do3() {
                  var maybePlayerId = tryRead(state3.avPlayerId)();
                  if (maybePlayerId instanceof Nothing) {
                    $$void2(put(v2.value0.playerId)(state3.avPlayerId)(function(v3) {
                      return pure2(unit);
                    }))();
                    return state3.processSendQueue();
                  }
                  ;
                  if (maybePlayerId instanceof Just) {
                    addToRecvQueue(v2.value0)();
                    return state3.processSendQueue();
                  }
                  ;
                  throw new Error("Failed pattern match at CS150241Project.Networking (line 142, column 21 - line 149, column 47): " + [maybePlayerId.constructor.name]);
                };
              }
              ;
              throw new Error("Failed pattern match at CS150241Project.Networking (line 137, column 17 - line 149, column 47): " + [v2.constructor.name]);
            }
            ;
            throw new Error("Failed pattern match at CS150241Project.Networking (line 134, column 13 - line 149, column 47): " + [v1.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at CS150241Project.Networking (line 129, column 5 - line 149, column 47): " + [v.constructor.name]);
        })();
        addEventListener(onMessage)(messageListener)(false)(toEventTarget(ws))();
        return state3;
      };
    };
  };

  // output/Data.Map.Internal/index.js
  var $runtime_lazy2 = function(name15, moduleName, init2) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init2();
      state3 = 2;
      return val;
    };
  };
  var Leaf = /* @__PURE__ */ function() {
    function Leaf2() {
    }
    ;
    Leaf2.value = new Leaf2();
    return Leaf2;
  }();
  var Node = /* @__PURE__ */ function() {
    function Node2(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    Node2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return new Node2(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return Node2;
  }();
  var SplitLast = /* @__PURE__ */ function() {
    function SplitLast2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    SplitLast2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new SplitLast2(value0, value1, value22);
        };
      };
    };
    return SplitLast2;
  }();
  var unsafeNode = function(k, v, l, r) {
    if (l instanceof Leaf) {
      if (r instanceof Leaf) {
        return new Node(1, 1, k, v, l, r);
      }
      ;
      if (r instanceof Node) {
        return new Node(1 + r.value0 | 0, 1 + r.value1 | 0, k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 702, column 5 - line 706, column 39): " + [r.constructor.name]);
    }
    ;
    if (l instanceof Node) {
      if (r instanceof Leaf) {
        return new Node(1 + l.value0 | 0, 1 + l.value1 | 0, k, v, l, r);
      }
      ;
      if (r instanceof Node) {
        return new Node(1 + function() {
          var $280 = l.value0 > r.value0;
          if ($280) {
            return l.value0;
          }
          ;
          return r.value0;
        }() | 0, (1 + l.value1 | 0) + r.value1 | 0, k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 708, column 5 - line 712, column 68): " + [r.constructor.name]);
    }
    ;
    throw new Error("Failed pattern match at Data.Map.Internal (line 700, column 32 - line 712, column 68): " + [l.constructor.name]);
  };
  var singleton5 = function(k) {
    return function(v) {
      return new Node(1, 1, k, v, Leaf.value, Leaf.value);
    };
  };
  var unsafeBalancedNode = /* @__PURE__ */ function() {
    var height9 = function(v) {
      if (v instanceof Leaf) {
        return 0;
      }
      ;
      if (v instanceof Node) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 757, column 12 - line 759, column 26): " + [v.constructor.name]);
    };
    var rotateLeft = function(k, v, l, rk, rv, rl, rr) {
      if (rl instanceof Node && rl.value0 > height9(rr)) {
        return unsafeNode(rl.value2, rl.value3, unsafeNode(k, v, l, rl.value4), unsafeNode(rk, rv, rl.value5, rr));
      }
      ;
      return unsafeNode(rk, rv, unsafeNode(k, v, l, rl), rr);
    };
    var rotateRight = function(k, v, lk, lv, ll, lr, r) {
      if (lr instanceof Node && height9(ll) <= lr.value0) {
        return unsafeNode(lr.value2, lr.value3, unsafeNode(lk, lv, ll, lr.value4), unsafeNode(k, v, lr.value5, r));
      }
      ;
      return unsafeNode(lk, lv, ll, unsafeNode(k, v, lr, r));
    };
    return function(k, v, l, r) {
      if (l instanceof Leaf) {
        if (r instanceof Leaf) {
          return singleton5(k)(v);
        }
        ;
        if (r instanceof Node && r.value0 > 1) {
          return rotateLeft(k, v, l, r.value2, r.value3, r.value4, r.value5);
        }
        ;
        return unsafeNode(k, v, l, r);
      }
      ;
      if (l instanceof Node) {
        if (r instanceof Node) {
          if (r.value0 > (l.value0 + 1 | 0)) {
            return rotateLeft(k, v, l, r.value2, r.value3, r.value4, r.value5);
          }
          ;
          if (l.value0 > (r.value0 + 1 | 0)) {
            return rotateRight(k, v, l.value2, l.value3, l.value4, l.value5, r);
          }
          ;
        }
        ;
        if (r instanceof Leaf && l.value0 > 1) {
          return rotateRight(k, v, l.value2, l.value3, l.value4, l.value5, r);
        }
        ;
        return unsafeNode(k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 717, column 40 - line 738, column 34): " + [l.constructor.name]);
    };
  }();
  var $lazy_unsafeSplitLast = /* @__PURE__ */ $runtime_lazy2("unsafeSplitLast", "Data.Map.Internal", function() {
    return function(k, v, l, r) {
      if (r instanceof Leaf) {
        return new SplitLast(k, v, l);
      }
      ;
      if (r instanceof Node) {
        var v1 = $lazy_unsafeSplitLast(779)(r.value2, r.value3, r.value4, r.value5);
        return new SplitLast(v1.value0, v1.value1, unsafeBalancedNode(k, v, l, v1.value2));
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 776, column 37 - line 780, column 57): " + [r.constructor.name]);
    };
  });
  var unsafeSplitLast = /* @__PURE__ */ $lazy_unsafeSplitLast(775);
  var unsafeJoinNodes = function(v, v1) {
    if (v instanceof Leaf) {
      return v1;
    }
    ;
    if (v instanceof Node) {
      var v2 = unsafeSplitLast(v.value2, v.value3, v.value4, v.value5);
      return unsafeBalancedNode(v2.value0, v2.value1, v2.value2, v1);
    }
    ;
    throw new Error("Failed pattern match at Data.Map.Internal (line 764, column 25 - line 768, column 38): " + [v.constructor.name, v1.constructor.name]);
  };
  var update = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(f) {
      return function(k) {
        var go2 = function(v) {
          if (v instanceof Leaf) {
            return Leaf.value;
          }
          ;
          if (v instanceof Node) {
            var v1 = compare3(k)(v.value2);
            if (v1 instanceof LT) {
              return unsafeBalancedNode(v.value2, v.value3, go2(v.value4), v.value5);
            }
            ;
            if (v1 instanceof GT) {
              return unsafeBalancedNode(v.value2, v.value3, v.value4, go2(v.value5));
            }
            ;
            if (v1 instanceof EQ) {
              var v2 = f(v.value3);
              if (v2 instanceof Nothing) {
                return unsafeJoinNodes(v.value4, v.value5);
              }
              ;
              if (v2 instanceof Just) {
                return new Node(v.value0, v.value1, v.value2, v2.value0, v.value4, v.value5);
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 531, column 11 - line 535, column 38): " + [v2.constructor.name]);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 527, column 7 - line 535, column 38): " + [v1.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 524, column 8 - line 535, column 38): " + [v.constructor.name]);
        };
        return go2;
      };
    };
  };
  var lookup = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      var go2 = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v instanceof Leaf) {
            $tco_done = true;
            return Nothing.value;
          }
          ;
          if (v instanceof Node) {
            var v1 = compare3(k)(v.value2);
            if (v1 instanceof LT) {
              $copy_v = v.value4;
              return;
            }
            ;
            if (v1 instanceof GT) {
              $copy_v = v.value5;
              return;
            }
            ;
            if (v1 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value3);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 283, column 7 - line 286, column 22): " + [v1.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 280, column 8 - line 286, column 22): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      return go2;
    };
  };
  var insert = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      return function(v) {
        var go2 = function(v1) {
          if (v1 instanceof Leaf) {
            return singleton5(k)(v);
          }
          ;
          if (v1 instanceof Node) {
            var v2 = compare3(k)(v1.value2);
            if (v2 instanceof LT) {
              return unsafeBalancedNode(v1.value2, v1.value3, go2(v1.value4), v1.value5);
            }
            ;
            if (v2 instanceof GT) {
              return unsafeBalancedNode(v1.value2, v1.value3, v1.value4, go2(v1.value5));
            }
            ;
            if (v2 instanceof EQ) {
              return new Node(v1.value0, v1.value1, k, v, v1.value4, v1.value5);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 471, column 7 - line 474, column 35): " + [v2.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 468, column 8 - line 474, column 35): " + [v1.constructor.name]);
        };
        return go2;
      };
    };
  };
  var functorMap = {
    map: function(f) {
      var go2 = function(v) {
        if (v instanceof Leaf) {
          return Leaf.value;
        }
        ;
        if (v instanceof Node) {
          return new Node(v.value0, v.value1, v.value2, f(v.value3), go2(v.value4), go2(v.value5));
        }
        ;
        throw new Error("Failed pattern match at Data.Map.Internal (line 147, column 10 - line 150, column 39): " + [v.constructor.name]);
      };
      return go2;
    }
  };
  var foldableMap = {
    foldr: function(f) {
      return function(z) {
        var $lazy_go = $runtime_lazy2("go", "Data.Map.Internal", function() {
          return function(m$prime, z$prime) {
            if (m$prime instanceof Leaf) {
              return z$prime;
            }
            ;
            if (m$prime instanceof Node) {
              return $lazy_go(172)(m$prime.value4, f(m$prime.value3)($lazy_go(172)(m$prime.value5, z$prime)));
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 169, column 26 - line 172, column 43): " + [m$prime.constructor.name]);
          };
        });
        var go2 = $lazy_go(169);
        return function(m) {
          return go2(m, z);
        };
      };
    },
    foldl: function(f) {
      return function(z) {
        var $lazy_go = $runtime_lazy2("go", "Data.Map.Internal", function() {
          return function(z$prime, m$prime) {
            if (m$prime instanceof Leaf) {
              return z$prime;
            }
            ;
            if (m$prime instanceof Node) {
              return $lazy_go(178)(f($lazy_go(178)(z$prime, m$prime.value4))(m$prime.value3), m$prime.value5);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 175, column 26 - line 178, column 43): " + [m$prime.constructor.name]);
          };
        });
        var go2 = $lazy_go(175);
        return function(m) {
          return go2(z, m);
        };
      };
    },
    foldMap: function(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      var append14 = append(dictMonoid.Semigroup0());
      return function(f) {
        var go2 = function(v) {
          if (v instanceof Leaf) {
            return mempty2;
          }
          ;
          if (v instanceof Node) {
            return append14(go2(v.value4))(append14(f(v.value3))(go2(v.value5)));
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 181, column 10 - line 184, column 28): " + [v.constructor.name]);
        };
        return go2;
      };
    }
  };
  var values = /* @__PURE__ */ function() {
    return foldr(foldableMap)(Cons.create)(Nil.value);
  }();
  var empty3 = /* @__PURE__ */ function() {
    return Leaf.value;
  }();
  var $$delete = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      var go2 = function(v) {
        if (v instanceof Leaf) {
          return Leaf.value;
        }
        ;
        if (v instanceof Node) {
          var v1 = compare3(k)(v.value2);
          if (v1 instanceof LT) {
            return unsafeBalancedNode(v.value2, v.value3, go2(v.value4), v.value5);
          }
          ;
          if (v1 instanceof GT) {
            return unsafeBalancedNode(v.value2, v.value3, v.value4, go2(v.value5));
          }
          ;
          if (v1 instanceof EQ) {
            return unsafeJoinNodes(v.value4, v.value5);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 498, column 7 - line 501, column 43): " + [v1.constructor.name]);
        }
        ;
        throw new Error("Failed pattern match at Data.Map.Internal (line 495, column 8 - line 501, column 43): " + [v.constructor.name]);
      };
      return go2;
    };
  };
  var any3 = function(predicate) {
    var go2 = function(v) {
      if (v instanceof Leaf) {
        return false;
      }
      ;
      if (v instanceof Node) {
        return predicate(v.value3) || (go2(v.value4) || go2(v.value5));
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 683, column 8 - line 685, column 58): " + [v.constructor.name]);
    };
    return go2;
  };

  // output/Effect.Timer/foreign.js
  function setTimeoutImpl(ms) {
    return function(fn) {
      return function() {
        return setTimeout(fn, ms);
      };
    };
  }

  // output/Effect.Timer/index.js
  var setTimeout2 = setTimeoutImpl;

  // output/Graphics.Canvas/foreign.js
  function tryLoadImageImpl(src9) {
    return function(e) {
      return function(f) {
        return function() {
          var img = new Image();
          img.src = src9;
          img.addEventListener("load", function() {
            f(img)();
          }, false);
          img.addEventListener("error", function() {
            e();
          }, false);
        };
      };
    };
  }
  function getCanvasElementByIdImpl(id2, Just2, Nothing2) {
    return function() {
      var el = document.getElementById(id2);
      if (el && el instanceof HTMLCanvasElement) {
        return Just2(el);
      } else {
        return Nothing2;
      }
    };
  }
  function getContext2D(c) {
    return function() {
      return c.getContext("2d");
    };
  }
  function setCanvasWidth(canvas) {
    return function(width9) {
      return function() {
        canvas.width = width9;
      };
    };
  }
  function setCanvasHeight(canvas) {
    return function(height9) {
      return function() {
        canvas.height = height9;
      };
    };
  }
  function setFillStyle(ctx) {
    return function(style) {
      return function() {
        ctx.fillStyle = style;
      };
    };
  }
  function beginPath(ctx) {
    return function() {
      ctx.beginPath();
    };
  }
  function stroke(ctx) {
    return function() {
      ctx.stroke();
    };
  }
  function fill(ctx) {
    return function() {
      ctx.fill();
    };
  }
  function arc(ctx) {
    return function(a) {
      return function() {
        ctx.arc(a.x, a.y, a.radius, a.start, a.end, a.useCounterClockwise);
      };
    };
  }
  function rect(ctx) {
    return function(r) {
      return function() {
        ctx.rect(r.x, r.y, r.width, r.height);
      };
    };
  }
  function setFont(ctx) {
    return function(fontspec) {
      return function() {
        ctx.font = fontspec;
      };
    };
  }
  function fillText(ctx) {
    return function(text5) {
      return function(x) {
        return function(y) {
          return function() {
            ctx.fillText(text5, x, y);
          };
        };
      };
    };
  }
  function measureText(ctx) {
    return function(text5) {
      return function() {
        return ctx.measureText(text5);
      };
    };
  }
  function drawImageScale(ctx) {
    return function(image_source) {
      return function(dx) {
        return function(dy) {
          return function(dWidth) {
            return function(dHeight) {
              return function() {
                ctx.drawImage(image_source, dx, dy, dWidth, dHeight);
              };
            };
          };
        };
      };
    };
  }

  // output/Graphics.Canvas/index.js
  var applySecond2 = /* @__PURE__ */ applySecond(applyEffect);
  var tryLoadImage = function(path) {
    return function(k) {
      return tryLoadImageImpl(path)(k(Nothing.value))(function($54) {
        return k(Just.create($54));
      });
    };
  };
  var setCanvasDimensions = function(ce) {
    return function(d) {
      return applySecond2(setCanvasHeight(ce)(d.height))(setCanvasWidth(ce)(d.width));
    };
  };
  var getCanvasElementById = function(elId) {
    return getCanvasElementByIdImpl(elId, Just.create, Nothing.value);
  };

  // output/Web.DOM.Document/foreign.js
  var getEffProp = function(name15) {
    return function(doc) {
      return function() {
        return doc[name15];
      };
    };
  };
  var url2 = getEffProp("URL");
  var documentURI = getEffProp("documentURI");
  var origin2 = getEffProp("origin");
  var compatMode = getEffProp("compatMode");
  var characterSet = getEffProp("characterSet");
  var contentType = getEffProp("contentType");
  var _documentElement = getEffProp("documentElement");

  // output/Data.Nullable/foreign.js
  function nullable(a, r, f) {
    return a == null ? r : f(a);
  }

  // output/Data.Nullable/index.js
  var toMaybe = function(n) {
    return nullable(n, Nothing.value, Just.create);
  };

  // output/Web.DOM.Document/index.js
  var toNonElementParentNode = unsafeCoerce2;

  // output/Web.DOM.Element/foreign.js
  var getProp = function(name15) {
    return function(doctype) {
      return doctype[name15];
    };
  };
  var _namespaceURI = getProp("namespaceURI");
  var _prefix = getProp("prefix");
  var localName = getProp("localName");
  var tagName = getProp("tagName");

  // output/Web.DOM.ParentNode/foreign.js
  var getEffProp2 = function(name15) {
    return function(node) {
      return function() {
        return node[name15];
      };
    };
  };
  var children = getEffProp2("children");
  var _firstElementChild = getEffProp2("firstElementChild");
  var _lastElementChild = getEffProp2("lastElementChild");
  var childElementCount = getEffProp2("childElementCount");

  // output/Web.DOM.Element/index.js
  var toEventTarget2 = unsafeCoerce2;

  // output/Web.DOM.NonElementParentNode/foreign.js
  function _getElementById(id2) {
    return function(node) {
      return function() {
        return node.getElementById(id2);
      };
    };
  }

  // output/Web.DOM.NonElementParentNode/index.js
  var map4 = /* @__PURE__ */ map(functorEffect);
  var getElementById = function(eid) {
    var $2 = map4(toMaybe);
    var $3 = _getElementById(eid);
    return function($4) {
      return $2($3($4));
    };
  };

  // output/Web.Event.Event/foreign.js
  function preventDefault(e) {
    return function() {
      return e.preventDefault();
    };
  }

  // output/Web.HTML/foreign.js
  var windowImpl = function() {
    return window;
  };

  // output/Web.HTML.HTMLDocument/index.js
  var toEventTarget3 = unsafeCoerce2;
  var toDocument = unsafeCoerce2;

  // output/Web.HTML.Window/foreign.js
  function document2(window2) {
    return function() {
      return window2.document;
    };
  }
  function requestAnimationFrame(fn) {
    return function(window2) {
      return function() {
        return window2.requestAnimationFrame(fn);
      };
    };
  }

  // output/Web.UIEvent.KeyboardEvent/foreign.js
  function code(e) {
    return e.code;
  }

  // output/Web.UIEvent.KeyboardEvent/index.js
  var fromEvent2 = /* @__PURE__ */ unsafeReadProtoTagged("KeyboardEvent");

  // output/Web.UIEvent.MouseEvent/foreign.js
  function clientX(e) {
    return e.clientX;
  }
  function clientY(e) {
    return e.clientY;
  }

  // output/Web.UIEvent.MouseEvent/index.js
  var fromEvent3 = /* @__PURE__ */ unsafeReadProtoTagged("MouseEvent");

  // output/CS150241Project.GameEngine/index.js
  var $$void3 = /* @__PURE__ */ $$void(functorEffect);
  var div2 = /* @__PURE__ */ div(euclideanRingInt);
  var pure3 = /* @__PURE__ */ pure(applicativeEffect);
  var for_3 = /* @__PURE__ */ for_(applicativeEffect)(foldableArray);
  var insert2 = /* @__PURE__ */ insert(ordString);
  var gameLoop = function(engine) {
    return function __do2() {
      var w = windowImpl();
      return $$void3(setTimeout2(div2(1e3)(engine.fps))($$void3(flip(requestAnimationFrame)(w)(function __do3() {
        var state1 = read(engine.refState)();
        var state22 = engine.onTick(engine.networkingState.send)(state1)();
        var messages = engine.networkingState.recv();
        var state3 = foldl2(function(acc) {
          return function(maybeMsg) {
            if (maybeMsg instanceof Nothing) {
              return acc;
            }
            ;
            if (maybeMsg instanceof Just) {
              return function __do4() {
                var state4 = acc();
                return engine.onMessage(engine.networkingState.send)(maybeMsg.value0)(state4)();
              };
            }
            ;
            throw new Error("Failed pattern match at CS150241Project.GameEngine (line 162, column 13 - line 166, column 71): " + [maybeMsg.constructor.name]);
          };
        })(pure3(state22))(messages)();
        write(state3)(engine.refState)();
        var images2 = read(engine.refImages)();
        engine.onRender(images2)(engine.ctx)(state3)();
        return gameLoop(engine)();
      }))))();
    };
  };
  var startNetworkGame = function(settings) {
    return function __do2() {
      var networkingState = connect(settings.ipAddress)(settings.port)();
      var w = windowImpl();
      var doc = document2(w)();
      var maybeCanvas = getCanvasElementById("cs150-game-canvas")();
      var maybeElemCanvas = getElementById("cs150-game-canvas")(toNonElementParentNode(toDocument(doc)))();
      var initState = settings.initialState();
      var refState = $$new(initState)();
      var refImages = $$new(empty3)();
      for_3(settings.imagePaths)(function(path) {
        return tryLoadImage(path)(function(maybeImg) {
          if (maybeImg instanceof Nothing) {
            return pure3(unit);
          }
          ;
          if (maybeImg instanceof Just) {
            return function __do3() {
              var images2 = read(refImages)();
              return write(insert2(path)(maybeImg.value0)(images2))(refImages)();
            };
          }
          ;
          throw new Error("Failed pattern match at CS150241Project.GameEngine (line 83, column 15 - line 87, column 67): " + [maybeImg.constructor.name]);
        });
      })();
      var keyDownHandler = eventListener(function(e) {
        var v = fromEvent2(e);
        if (v instanceof Just) {
          return function __do3() {
            preventDefault(e)();
            var state3 = read(refState)();
            var newState = settings.onKeyDown(networkingState.send)(code(v.value0))(state3)();
            return write(newState)(refState)();
          };
        }
        ;
        if (v instanceof Nothing) {
          return pure3(unit);
        }
        ;
        throw new Error("Failed pattern match at CS150241Project.GameEngine (line 92, column 13 - line 98, column 29): " + [v.constructor.name]);
      })();
      var keyUpHandler = eventListener(function(e) {
        var v = fromEvent2(e);
        if (v instanceof Just) {
          return function __do3() {
            preventDefault(e)();
            var state3 = read(refState)();
            var newState = settings.onKeyUp(networkingState.send)(code(v.value0))(state3)();
            return write(newState)(refState)();
          };
        }
        ;
        if (v instanceof Nothing) {
          return pure3(unit);
        }
        ;
        throw new Error("Failed pattern match at CS150241Project.GameEngine (line 102, column 13 - line 108, column 29): " + [v.constructor.name]);
      })();
      var mouseDownHandler = eventListener(function(e) {
        var v = fromEvent3(e);
        if (v instanceof Just) {
          return function __do3() {
            preventDefault(e)();
            var state3 = read(refState)();
            var newState = settings.onMouseDown(networkingState.send)({
              x: clientX(v.value0),
              y: clientY(v.value0)
            })(state3)();
            return write(newState)(refState)();
          };
        }
        ;
        if (v instanceof Nothing) {
          return pure3(unit);
        }
        ;
        throw new Error("Failed pattern match at CS150241Project.GameEngine (line 112, column 13 - line 120, column 29): " + [v.constructor.name]);
      })();
      addEventListener("keydown")(keyDownHandler)(false)(toEventTarget3(doc))();
      addEventListener("keyup")(keyUpHandler)(false)(toEventTarget3(doc))();
      if (maybeCanvas instanceof Just && maybeElemCanvas instanceof Just) {
        addEventListener("mousedown")(mouseDownHandler)(false)(toEventTarget2(maybeElemCanvas.value0))();
        setCanvasDimensions(maybeCanvas.value0)({
          width: settings.width,
          height: settings.height
        })();
        var ctx = getContext2D(maybeCanvas.value0)();
        var engine = {
          initialState: settings.initialState,
          onTick: settings.onTick,
          onMouseDown: settings.onMouseDown,
          onKeyDown: settings.onKeyDown,
          onRender: settings.onRender,
          onMessage: settings.onMessage,
          fps: settings.fps,
          ctx,
          refState,
          width: settings.width,
          height: settings.height,
          ipAddress: settings.ipAddress,
          port: settings.port,
          networkingState,
          refImages
        };
        return gameLoop(engine)();
      }
      ;
      return log2("Canvas not found.")();
    };
  };

  // output/CS150241Project.Graphics/index.js
  var show3 = /* @__PURE__ */ show(showInt);
  var strokeWith = function(ctx) {
    return function(color) {
      return function __do2() {
        setFillStyle(ctx)(color)();
        return stroke(ctx)();
      };
    };
  };
  var startCircle = function(ctx) {
    return function(v) {
      return function __do2() {
        beginPath(ctx)();
        return arc(ctx)({
          start: 0,
          end: 2 * pi,
          radius: v.radius,
          useCounterClockwise: false,
          x: v.x,
          y: v.y
        })();
      };
    };
  };
  var fillWith = function(ctx) {
    return function(color) {
      return function __do2() {
        setFillStyle(ctx)(color)();
        return fill(ctx)();
      };
    };
  };
  var drawTextLeft = function(ctx) {
    return function(v) {
      var style = show3(v.size) + ("px " + v.font);
      return function __do2() {
        setFont(ctx)(style)();
        setFillStyle(ctx)(v.color)();
        return fillText(ctx)(v.text)(v.x)(v.y)();
      };
    };
  };
  var drawText = function(ctx) {
    return function(v) {
      var style = show3(v.size) + ("px " + v.font);
      return function __do2() {
        setFont(ctx)(style)();
        setFillStyle(ctx)(v.color)();
        var metrics = measureText(ctx)(v.text)();
        return fillText(ctx)(v.text)(v.x - metrics.width / 2)(v.y)();
      };
    };
  };
  var drawRectOutline = function(ctx) {
    return function(v) {
      return function __do2() {
        beginPath(ctx)();
        rect(ctx)({
          x: v.x,
          y: v.y,
          width: v.width,
          height: v.height
        })();
        return strokeWith(ctx)(v.color)();
      };
    };
  };
  var drawRect = function(ctx) {
    return function(v) {
      return function __do2() {
        beginPath(ctx)();
        rect(ctx)({
          x: v.x,
          y: v.y,
          width: v.width,
          height: v.height
        })();
        return fillWith(ctx)(v.color)();
      };
    };
  };
  var drawImageScaled = function(ctx) {
    return function(img) {
      return function(v) {
        return drawImageScale(ctx)(img)(v.x)(v.y)(v.width)(v.height);
      };
    };
  };
  var drawCircle = function(ctx) {
    return function(v) {
      return function __do2() {
        startCircle(ctx)({
          x: v.x,
          y: v.y,
          radius: v.radius
        })();
        return fillWith(ctx)(v.color)();
      };
    };
  };
  var clearCanvas = function(ctx) {
    return function(v) {
      return function __do2() {
        setFillStyle(ctx)(v.color)();
        rect(ctx)({
          x: 0,
          y: 0,
          width: v.width,
          height: v.height
        })();
        return fill(ctx)();
      };
    };
  };

  // output/Data.String.CodePoints/foreign.js
  var hasArrayFrom = typeof Array.from === "function";
  var hasStringIterator = typeof Symbol !== "undefined" && Symbol != null && typeof Symbol.iterator !== "undefined" && typeof String.prototype[Symbol.iterator] === "function";
  var hasFromCodePoint = typeof String.prototype.fromCodePoint === "function";
  var hasCodePointAt = typeof String.prototype.codePointAt === "function";
  var _unsafeCodePointAt0 = function(fallback) {
    return hasCodePointAt ? function(str) {
      return str.codePointAt(0);
    } : fallback;
  };
  var _singleton = function(fallback) {
    return hasFromCodePoint ? String.fromCodePoint : fallback;
  };
  var _take = function(fallback) {
    return function(n) {
      if (hasStringIterator) {
        return function(str) {
          var accum = "";
          var iter = str[Symbol.iterator]();
          for (var i = 0; i < n; ++i) {
            var o = iter.next();
            if (o.done) return accum;
            accum += o.value;
          }
          return accum;
        };
      }
      return fallback(n);
    };
  };
  var _toCodePointArray = function(fallback) {
    return function(unsafeCodePointAt02) {
      if (hasArrayFrom) {
        return function(str) {
          return Array.from(str, unsafeCodePointAt02);
        };
      }
      return fallback;
    };
  };

  // output/Data.String.CodePoints/index.js
  var fromEnum2 = /* @__PURE__ */ fromEnum(boundedEnumChar);
  var map5 = /* @__PURE__ */ map(functorMaybe);
  var unfoldr2 = /* @__PURE__ */ unfoldr(unfoldableArray);
  var div3 = /* @__PURE__ */ div(euclideanRingInt);
  var mod2 = /* @__PURE__ */ mod(euclideanRingInt);
  var unsurrogate = function(lead) {
    return function(trail) {
      return (((lead - 55296 | 0) * 1024 | 0) + (trail - 56320 | 0) | 0) + 65536 | 0;
    };
  };
  var isTrail = function(cu) {
    return 56320 <= cu && cu <= 57343;
  };
  var isLead = function(cu) {
    return 55296 <= cu && cu <= 56319;
  };
  var uncons3 = function(s) {
    var v = length3(s);
    if (v === 0) {
      return Nothing.value;
    }
    ;
    if (v === 1) {
      return new Just({
        head: fromEnum2(charAt(0)(s)),
        tail: ""
      });
    }
    ;
    var cu1 = fromEnum2(charAt(1)(s));
    var cu0 = fromEnum2(charAt(0)(s));
    var $43 = isLead(cu0) && isTrail(cu1);
    if ($43) {
      return new Just({
        head: unsurrogate(cu0)(cu1),
        tail: drop2(2)(s)
      });
    }
    ;
    return new Just({
      head: cu0,
      tail: drop2(1)(s)
    });
  };
  var unconsButWithTuple = function(s) {
    return map5(function(v) {
      return new Tuple(v.head, v.tail);
    })(uncons3(s));
  };
  var toCodePointArrayFallback = function(s) {
    return unfoldr2(unconsButWithTuple)(s);
  };
  var unsafeCodePointAt0Fallback = function(s) {
    var cu0 = fromEnum2(charAt(0)(s));
    var $47 = isLead(cu0) && length3(s) > 1;
    if ($47) {
      var cu1 = fromEnum2(charAt(1)(s));
      var $48 = isTrail(cu1);
      if ($48) {
        return unsurrogate(cu0)(cu1);
      }
      ;
      return cu0;
    }
    ;
    return cu0;
  };
  var unsafeCodePointAt0 = /* @__PURE__ */ _unsafeCodePointAt0(unsafeCodePointAt0Fallback);
  var toCodePointArray = /* @__PURE__ */ _toCodePointArray(toCodePointArrayFallback)(unsafeCodePointAt0);
  var length6 = function($74) {
    return length(toCodePointArray($74));
  };
  var fromCharCode2 = /* @__PURE__ */ function() {
    var $75 = toEnumWithDefaults(boundedEnumChar)(bottom(boundedChar))(top(boundedChar));
    return function($76) {
      return singleton4($75($76));
    };
  }();
  var singletonFallback = function(v) {
    if (v <= 65535) {
      return fromCharCode2(v);
    }
    ;
    var lead = div3(v - 65536 | 0)(1024) + 55296 | 0;
    var trail = mod2(v - 65536 | 0)(1024) + 56320 | 0;
    return fromCharCode2(lead) + fromCharCode2(trail);
  };
  var singleton6 = /* @__PURE__ */ _singleton(singletonFallback);
  var takeFallback = function(v) {
    return function(v1) {
      if (v < 1) {
        return "";
      }
      ;
      var v2 = uncons3(v1);
      if (v2 instanceof Just) {
        return singleton6(v2.value0.head) + takeFallback(v - 1 | 0)(v2.value0.tail);
      }
      ;
      return v1;
    };
  };
  var take4 = /* @__PURE__ */ _take(takeFallback);
  var splitAt2 = function(i) {
    return function(s) {
      var before = take4(i)(s);
      return {
        before,
        after: drop2(length3(before))(s)
      };
    };
  };

  // output/Effect.Random/foreign.js
  var random = Math.random;

  // output/Effect.Random/index.js
  var randomInt = function(low2) {
    return function(high2) {
      return function __do2() {
        var n = random();
        var asNumber = (toNumber(high2) - toNumber(low2) + 1) * n + toNumber(low2);
        return floor2(asNumber);
      };
    };
  };

  // output/Main/index.js
  var show4 = /* @__PURE__ */ show(showInt);
  var genericShowConstructor3 = /* @__PURE__ */ genericShowConstructor(genericShowArgsNoArguments);
  var compare2 = /* @__PURE__ */ compare(ordInt);
  var compare12 = /* @__PURE__ */ compare(ordBoolean);
  var pure4 = /* @__PURE__ */ pure(applicativeEffect);
  var bind3 = /* @__PURE__ */ bind(bindEffect);
  var showRecord2 = /* @__PURE__ */ showRecord()()(/* @__PURE__ */ showRecordFieldsCons({
    reflectSymbol: function() {
      return "payload";
    }
  })(/* @__PURE__ */ showRecordFieldsConsNil({
    reflectSymbol: function() {
      return "playerId";
    }
  })(showPlayerId))(showString));
  var show1 = /* @__PURE__ */ show(showRecord2);
  var append13 = /* @__PURE__ */ append(semigroupArray);
  var foldl3 = /* @__PURE__ */ foldl(foldableMap);
  var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorMap);
  var mapFlipped1 = /* @__PURE__ */ mapFlipped(functorArray);
  var foldl12 = /* @__PURE__ */ foldl(foldableArray);
  var show22 = /* @__PURE__ */ show(/* @__PURE__ */ showMaybe(showPlayerId));
  var mod3 = /* @__PURE__ */ mod(euclideanRingInt);
  var not1 = /* @__PURE__ */ not(/* @__PURE__ */ heytingAlgebraFunction(heytingAlgebraBoolean));
  var map6 = /* @__PURE__ */ map(functorArray);
  var eq3 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqPlayerId));
  var eq4 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqBoolean));
  var show32 = /* @__PURE__ */ show(showPlayerId);
  var lookup2 = /* @__PURE__ */ lookup(ordString);
  var foldl22 = /* @__PURE__ */ foldl(foldableList);
  var show42 = /* @__PURE__ */ show(/* @__PURE__ */ showArray(showRecord2));
  var eq5 = /* @__PURE__ */ eq(eqPlayerId);
  var mapFlipped22 = /* @__PURE__ */ mapFlipped(functorEffect);
  var King = /* @__PURE__ */ function() {
    function King2() {
    }
    ;
    King2.value = new King2();
    return King2;
  }();
  var Queen = /* @__PURE__ */ function() {
    function Queen2() {
    }
    ;
    Queen2.value = new Queen2();
    return Queen2;
  }();
  var Flag = /* @__PURE__ */ function() {
    function Flag2() {
    }
    ;
    Flag2.value = new Flag2();
    return Flag2;
  }();
  var Prince = /* @__PURE__ */ function() {
    function Prince2() {
    }
    ;
    Prince2.value = new Prince2();
    return Prince2;
  }();
  var Wizard = /* @__PURE__ */ function() {
    function Wizard2() {
    }
    ;
    Wizard2.value = new Wizard2();
    return Wizard2;
  }();
  var Dragon = /* @__PURE__ */ function() {
    function Dragon2() {
    }
    ;
    Dragon2.value = new Dragon2();
    return Dragon2;
  }();
  var Orc = /* @__PURE__ */ function() {
    function Orc2() {
    }
    ;
    Orc2.value = new Orc2();
    return Orc2;
  }();
  var Dwarf = /* @__PURE__ */ function() {
    function Dwarf2() {
    }
    ;
    Dwarf2.value = new Dwarf2();
    return Dwarf2;
  }();
  var ElfRanged = /* @__PURE__ */ function() {
    function ElfRanged2() {
    }
    ;
    ElfRanged2.value = new ElfRanged2();
    return ElfRanged2;
  }();
  var ElfMelee = /* @__PURE__ */ function() {
    function ElfMelee2() {
    }
    ;
    ElfMelee2.value = new ElfMelee2();
    return ElfMelee2;
  }();
  var Human = /* @__PURE__ */ function() {
    function Human2() {
    }
    ;
    Human2.value = new Human2();
    return Human2;
  }();
  var Goblin = /* @__PURE__ */ function() {
    function Goblin2() {
    }
    ;
    Goblin2.value = new Goblin2();
    return Goblin2;
  }();
  var Warrior = /* @__PURE__ */ function() {
    function Warrior2() {
    }
    ;
    Warrior2.value = new Warrior2();
    return Warrior2;
  }();
  var Hobgoblin = /* @__PURE__ */ function() {
    function Hobgoblin2() {
    }
    ;
    Hobgoblin2.value = new Hobgoblin2();
    return Hobgoblin2;
  }();
  var NotConnected = /* @__PURE__ */ function() {
    function NotConnected2() {
    }
    ;
    NotConnected2.value = new NotConnected2();
    return NotConnected2;
  }();
  var Waiting = /* @__PURE__ */ function() {
    function Waiting2() {
    }
    ;
    Waiting2.value = new Waiting2();
    return Waiting2;
  }();
  var InGame = /* @__PURE__ */ function() {
    function InGame2() {
    }
    ;
    InGame2.value = new InGame2();
    return InGame2;
  }();
  var End = /* @__PURE__ */ function() {
    function End2() {
    }
    ;
    End2.value = new End2();
    return End2;
  }();
  var Grid = /* @__PURE__ */ function() {
    function Grid2(value0) {
      this.value0 = value0;
    }
    ;
    Grid2.create = function(value0) {
      return new Grid2(value0);
    };
    return Grid2;
  }();
  var OnHand = /* @__PURE__ */ function() {
    function OnHand2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    OnHand2.create = function(value0) {
      return function(value1) {
        return new OnHand2(value0, value1);
      };
    };
    return OnHand2;
  }();
  var Board = /* @__PURE__ */ function() {
    function Board2(value0) {
      this.value0 = value0;
    }
    ;
    Board2.create = function(value0) {
      return new Board2(value0);
    };
    return Board2;
  }();
  var Hand = /* @__PURE__ */ function() {
    function Hand2(value0) {
      this.value0 = value0;
    }
    ;
    Hand2.create = function(value0) {
      return new Hand2(value0);
    };
    return Hand2;
  }();
  var showPosition = {
    show: function(v) {
      if (v instanceof Grid) {
        return show4(v.value0.r) + (", " + show4(v.value0.c));
      }
      ;
      if (v instanceof OnHand) {
        if (v.value0) {
          return "Enemy " + show4(v.value1);
        }
        ;
        return show4(v.value1);
      }
      ;
      throw new Error("Failed pattern match at Main (line 121, column 1 - line 123, column 65): " + [v.constructor.name]);
    }
  };
  var show5 = /* @__PURE__ */ show(showPosition);
  var genericUnitType_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return King.value;
      }
      ;
      if (x instanceof Inr && x.value0 instanceof Inl) {
        return Queen.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && x.value0.value0 instanceof Inl)) {
        return Flag.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && x.value0.value0.value0 instanceof Inl))) {
        return Prince.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0 instanceof Inl)))) {
        return Wizard.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0 instanceof Inl))))) {
        return Dragon.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0 instanceof Inl)))))) {
        return Orc.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0 instanceof Inl))))))) {
        return Dwarf.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inl)))))))) {
        return ElfRanged.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inl))))))))) {
        return ElfMelee.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inl)))))))))) {
        return Human.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inl))))))))))) {
        return Goblin.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inl)))))))))))) {
        return Warrior.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr)))))))))))) {
        return Hobgoblin.value;
      }
      ;
      throw new Error("Failed pattern match at Main (line 116, column 1 - line 116, column 35): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof King) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof Queen) {
        return new Inr(new Inl(NoArguments.value));
      }
      ;
      if (x instanceof Flag) {
        return new Inr(new Inr(new Inl(NoArguments.value)));
      }
      ;
      if (x instanceof Prince) {
        return new Inr(new Inr(new Inr(new Inl(NoArguments.value))));
      }
      ;
      if (x instanceof Wizard) {
        return new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value)))));
      }
      ;
      if (x instanceof Dragon) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value))))));
      }
      ;
      if (x instanceof Orc) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value)))))));
      }
      ;
      if (x instanceof Dwarf) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value))))))));
      }
      ;
      if (x instanceof ElfRanged) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value)))))))));
      }
      ;
      if (x instanceof ElfMelee) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value))))))))));
      }
      ;
      if (x instanceof Human) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value)))))))))));
      }
      ;
      if (x instanceof Goblin) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value))))))))))));
      }
      ;
      if (x instanceof Warrior) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value)))))))))))));
      }
      ;
      if (x instanceof Hobgoblin) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(NoArguments.value)))))))))))));
      }
      ;
      throw new Error("Failed pattern match at Main (line 116, column 1 - line 116, column 35): " + [x.constructor.name]);
    }
  };
  var showUnitType = {
    show: /* @__PURE__ */ genericShow(genericUnitType_)(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "King";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Queen";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Flag";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Prince";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Wizard";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Dragon";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Orc";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Dwarf";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "ElfRanged";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "ElfMelee";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Human";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Goblin";
      }
    }))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Warrior";
      }
    }))(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "Hobgoblin";
      }
    })))))))))))))))
  };
  var show6 = /* @__PURE__ */ show(showUnitType);
  var eqUnitType = {
    eq: function(x) {
      return function(y) {
        if (x instanceof King && y instanceof King) {
          return true;
        }
        ;
        if (x instanceof Queen && y instanceof Queen) {
          return true;
        }
        ;
        if (x instanceof Flag && y instanceof Flag) {
          return true;
        }
        ;
        if (x instanceof Prince && y instanceof Prince) {
          return true;
        }
        ;
        if (x instanceof Wizard && y instanceof Wizard) {
          return true;
        }
        ;
        if (x instanceof Dragon && y instanceof Dragon) {
          return true;
        }
        ;
        if (x instanceof Orc && y instanceof Orc) {
          return true;
        }
        ;
        if (x instanceof Dwarf && y instanceof Dwarf) {
          return true;
        }
        ;
        if (x instanceof ElfRanged && y instanceof ElfRanged) {
          return true;
        }
        ;
        if (x instanceof ElfMelee && y instanceof ElfMelee) {
          return true;
        }
        ;
        if (x instanceof Human && y instanceof Human) {
          return true;
        }
        ;
        if (x instanceof Goblin && y instanceof Goblin) {
          return true;
        }
        ;
        if (x instanceof Warrior && y instanceof Warrior) {
          return true;
        }
        ;
        if (x instanceof Hobgoblin && y instanceof Hobgoblin) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var eq6 = /* @__PURE__ */ eq(eqUnitType);
  var eqStatus = {
    eq: function(x) {
      return function(y) {
        if (x instanceof NotConnected && y instanceof NotConnected) {
          return true;
        }
        ;
        if (x instanceof Waiting && y instanceof Waiting) {
          return true;
        }
        ;
        if (x instanceof InGame && y instanceof InGame) {
          return true;
        }
        ;
        if (x instanceof End && y instanceof End) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var eq7 = /* @__PURE__ */ eq(eqStatus);
  var eqPosition = {
    eq: function(x) {
      return function(y) {
        if (x instanceof Grid && y instanceof Grid) {
          return x.value0.c === y.value0.c && x.value0.r === y.value0.r;
        }
        ;
        if (x instanceof OnHand && y instanceof OnHand) {
          return x.value0 === y.value0 && x.value1 === y.value1;
        }
        ;
        return false;
      };
    }
  };
  var eq8 = /* @__PURE__ */ eq(eqPosition);
  var eq9 = /* @__PURE__ */ eq(/* @__PURE__ */ eqArray(eqPosition));
  var eq10 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqPosition));
  var ordPosition = {
    compare: function(x) {
      return function(y) {
        if (x instanceof Grid && y instanceof Grid) {
          var v = compare2(x.value0.c)(y.value0.c);
          if (v instanceof LT) {
            return LT.value;
          }
          ;
          if (v instanceof GT) {
            return GT.value;
          }
          ;
          return compare2(x.value0.r)(y.value0.r);
        }
        ;
        if (x instanceof Grid) {
          return LT.value;
        }
        ;
        if (y instanceof Grid) {
          return GT.value;
        }
        ;
        if (x instanceof OnHand && y instanceof OnHand) {
          var v = compare12(x.value0)(y.value0);
          if (v instanceof LT) {
            return LT.value;
          }
          ;
          if (v instanceof GT) {
            return GT.value;
          }
          ;
          return compare2(x.value1)(y.value1);
        }
        ;
        throw new Error("Failed pattern match at Main (line 0, column 0 - line 0, column 0): " + [x.constructor.name, y.constructor.name]);
      };
    },
    Eq0: function() {
      return eqPosition;
    }
  };
  var lookup1 = /* @__PURE__ */ lookup(ordPosition);
  var update2 = /* @__PURE__ */ update(ordPosition);
  var insert3 = /* @__PURE__ */ insert(ordPosition);
  var $$delete2 = /* @__PURE__ */ $$delete(ordPosition);
  var eqPiece = {
    eq: function(x) {
      return function(y) {
        if (x instanceof Board && y instanceof Board) {
          return x.value0.opponent === y.value0.opponent && eq8(x.value0.pos)(y.value0.pos) && eq6(x.value0.type)(y.value0.type);
        }
        ;
        if (x instanceof Hand && y instanceof Hand) {
          return x.value0.count === y.value0.count && x.value0.opponent === y.value0.opponent && eq8(x.value0.pos)(y.value0.pos) && eq6(x.value0.type)(y.value0.type);
        }
        ;
        return false;
      };
    }
  };
  var eq11 = /* @__PURE__ */ eq(eqPiece);
  var toOpponent = function(piece) {
    if (piece instanceof Board) {
      return new Board({
        pos: piece.value0.pos,
        type: piece.value0.type,
        opponent: true
      });
    }
    ;
    if (piece instanceof Hand) {
      return new Hand({
        pos: piece.value0.pos,
        count: piece.value0.count,
        type: piece.value0.type,
        opponent: true
      });
    }
    ;
    throw new Error("Failed pattern match at Main (line 1003, column 5 - line 1005, column 47): " + [piece.constructor.name]);
  };
  var toAllied = function(piece) {
    if (piece instanceof Board) {
      return new Board({
        pos: piece.value0.pos,
        type: piece.value0.type,
        opponent: false
      });
    }
    ;
    if (piece instanceof Hand) {
      return new Hand({
        pos: piece.value0.pos,
        count: piece.value0.count,
        type: piece.value0.type,
        opponent: false
      });
    }
    ;
    throw new Error("Failed pattern match at Main (line 1008, column 18 - line 1010, column 42): " + [piece.constructor.name]);
  };
  var stringToPos = function(str) {
    var tokens = split(", ")(str);
    var r = function() {
      var v = index(tokens)(0);
      if (v instanceof Nothing) {
        return -1 | 0;
      }
      ;
      if (v instanceof Just) {
        var v2 = fromString(v.value0);
        if (v2 instanceof Nothing) {
          return -1 | 0;
        }
        ;
        if (v2 instanceof Just) {
          return v2.value0;
        }
        ;
        throw new Error("Failed pattern match at Main (line 1116, column 19 - line 1118, column 24): " + [v2.constructor.name]);
      }
      ;
      throw new Error("Failed pattern match at Main (line 1114, column 9 - line 1118, column 24): " + [v.constructor.name]);
    }();
    var c = function() {
      var v = index(tokens)(1);
      if (v instanceof Nothing) {
        return -1 | 0;
      }
      ;
      if (v instanceof Just) {
        var v2 = fromString(v.value0);
        if (v2 instanceof Nothing) {
          return -1 | 0;
        }
        ;
        if (v2 instanceof Just) {
          return v2.value0;
        }
        ;
        throw new Error("Failed pattern match at Main (line 1121, column 19 - line 1123, column 24): " + [v2.constructor.name]);
      }
      ;
      throw new Error("Failed pattern match at Main (line 1119, column 9 - line 1123, column 24): " + [v.constructor.name]);
    }();
    var $494 = c === (-1 | 0);
    if ($494) {
      return pure4(new OnHand(true, r));
    }
    ;
    return pure4(new Grid({
      r,
      c
    }));
  };
  var tokensToPos = function(tokens) {
    return function(i) {
      var v = index(tokens)(i);
      if (v instanceof Nothing) {
        return function __do2() {
          log2("Error: No value at index " + show4(i))();
          return new Grid({
            r: -1 | 0,
            c: -1 | 0
          });
        };
      }
      ;
      if (v instanceof Just) {
        return stringToPos(v.value0);
      }
      ;
      throw new Error("Failed pattern match at Main (line 1063, column 5 - line 1068, column 34): " + [v.constructor.name]);
    };
  };
  var rows4 = 13;
  var pieceToArray = function(piece) {
    return [piece];
  };
  var onKeyUp = function(v) {
    return function(key2) {
      return function(state3) {
        if (key2 === "ShiftLeft") {
          return pure4({
            actions: state3.actions,
            attackedPositions: state3.attackedPositions,
            availableMoves: state3.availableMoves,
            board: state3.board,
            canSend: state3.canSend,
            changeName: state3.changeName,
            chat: state3.chat,
            chatLog: state3.chatLog,
            chatState: state3.chatState,
            flagPosition: state3.flagPosition,
            hand: state3.hand,
            lastReceivedMessage: state3.lastReceivedMessage,
            messages: state3.messages,
            name: state3.name,
            nameChanged: state3.nameChanged,
            opponentName: state3.opponentName,
            playerId: state3.playerId,
            previousMove: state3.previousMove,
            request: state3.request,
            score: state3.score,
            selectedPiece: state3.selectedPiece,
            status: state3.status,
            tickCount: state3.tickCount,
            turn: state3.turn,
            winner: state3.winner,
            upperCase: !state3.upperCase
          });
        }
        ;
        return pure4(state3);
      };
    };
  };
  var onKeyDown = function(send) {
    return function(key2) {
      return function(state3) {
        if (state3.chatState) {
          if (key2 === "Enter") {
            var $502 = state3.chat === "";
            if ($502) {
              return pure4({
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                chatState: false
              });
            }
            ;
            return function __do2() {
              send("Chat: Send " + state3.chat)();
              return state3;
            };
          }
          ;
          if (key2 === "Escape") {
            return pure4({
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              request: state3.request,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              upperCase: state3.upperCase,
              winner: state3.winner,
              chatState: false
            });
          }
          ;
          if (key2 === "Backspace") {
            return function __do2() {
              var l = length6(state3.chat) - 1 | 0;
              var split2 = splitAt2(l)(state3.chat);
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                chat: split2.before
              };
            };
          }
          ;
          if (key2 === "Space") {
            return pure4({
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              request: state3.request,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              upperCase: state3.upperCase,
              winner: state3.winner,
              chat: state3.chat + " "
            });
          }
          ;
          if (key2 === "ShiftLeft") {
            return pure4({
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              request: state3.request,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              winner: state3.winner,
              upperCase: !state3.upperCase
            });
          }
          ;
          if (key2 === "CapsLock") {
            return pure4({
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              request: state3.request,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              winner: state3.winner,
              upperCase: !state3.upperCase
            });
          }
          ;
          var $503 = length6(state3.chat) <= 30;
          if ($503) {
            var $504 = contains("Key")(key2);
            if ($504) {
              return function __do2() {
                var maybeKey = stripPrefix("Key")(key2);
                if (maybeKey instanceof Nothing) {
                  return state3;
                }
                ;
                if (maybeKey instanceof Just) {
                  if (state3.upperCase) {
                    return {
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      name: state3.name,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      selectedPiece: state3.selectedPiece,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      chat: state3.chat + maybeKey.value0
                    };
                  }
                  ;
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    name: state3.name,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    chat: state3.chat + toLower(maybeKey.value0)
                  };
                }
                ;
                throw new Error("Failed pattern match at Main (line 534, column 25 - line 536, column 158): " + [maybeKey.constructor.name]);
              };
            }
            ;
            var $508 = contains("Digit")(key2);
            if ($508) {
              return function __do2() {
                var maybeKey = stripPrefix("Digit")(key2);
                if (maybeKey instanceof Nothing) {
                  return state3;
                }
                ;
                if (maybeKey instanceof Just) {
                  if (state3.upperCase) {
                    return {
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      name: state3.name,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      selectedPiece: state3.selectedPiece,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      chat: state3.chat + maybeKey.value0
                    };
                  }
                  ;
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    name: state3.name,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    chat: state3.chat + toLower(maybeKey.value0)
                  };
                }
                ;
                throw new Error("Failed pattern match at Main (line 539, column 25 - line 541, column 158): " + [maybeKey.constructor.name]);
              };
            }
            ;
            var $512 = contains("Numpad")(key2);
            if ($512) {
              return function __do2() {
                var maybeKey = stripPrefix("Numpad")(key2);
                if (maybeKey instanceof Nothing) {
                  return state3;
                }
                ;
                if (maybeKey instanceof Just) {
                  if (state3.upperCase) {
                    return {
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      name: state3.name,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      selectedPiece: state3.selectedPiece,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      chat: state3.chat + maybeKey.value0
                    };
                  }
                  ;
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    name: state3.name,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    chat: state3.chat + toLower(maybeKey.value0)
                  };
                }
                ;
                throw new Error("Failed pattern match at Main (line 544, column 25 - line 546, column 158): " + [maybeKey.constructor.name]);
              };
            }
            ;
            return pure4(state3);
          }
          ;
          return pure4(state3);
        }
        ;
        if (state3.changeName) {
          if (key2 === "Enter") {
            return function __do2() {
              send("Name: " + state3.name)();
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                changeName: false,
                nameChanged: false
              };
            };
          }
          ;
          if (key2 === "Backspace") {
            return function __do2() {
              var l = length6(state3.name) - 1 | 0;
              var split2 = splitAt2(l)(state3.name);
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                name: split2.before
              };
            };
          }
          ;
          if (key2 === "Space") {
            return pure4({
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              request: state3.request,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              upperCase: state3.upperCase,
              winner: state3.winner,
              name: state3.name + " "
            });
          }
          ;
          if (key2 === "ShiftLeft") {
            return pure4({
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              request: state3.request,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              winner: state3.winner,
              upperCase: !state3.upperCase
            });
          }
          ;
          if (key2 === "CapsLock") {
            return pure4({
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              request: state3.request,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              winner: state3.winner,
              upperCase: !state3.upperCase
            });
          }
          ;
          var $517 = length6(state3.name) <= 15;
          if ($517) {
            var $518 = contains("Key")(key2);
            if ($518) {
              return function __do2() {
                var maybeKey = stripPrefix("Key")(key2);
                if (maybeKey instanceof Nothing) {
                  return state3;
                }
                ;
                if (maybeKey instanceof Just) {
                  if (state3.upperCase) {
                    return {
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chat: state3.chat,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      selectedPiece: state3.selectedPiece,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      name: state3.name + maybeKey.value0
                    };
                  }
                  ;
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chat: state3.chat,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    name: state3.name + toLower(maybeKey.value0)
                  };
                }
                ;
                throw new Error("Failed pattern match at Main (line 564, column 25 - line 566, column 158): " + [maybeKey.constructor.name]);
              };
            }
            ;
            var $522 = contains("Digit")(key2);
            if ($522) {
              return function __do2() {
                var maybeKey = stripPrefix("Digit")(key2);
                if (maybeKey instanceof Nothing) {
                  return state3;
                }
                ;
                if (maybeKey instanceof Just) {
                  if (state3.upperCase) {
                    return {
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chat: state3.chat,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      selectedPiece: state3.selectedPiece,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      name: state3.name + maybeKey.value0
                    };
                  }
                  ;
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chat: state3.chat,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    name: state3.name + toLower(maybeKey.value0)
                  };
                }
                ;
                throw new Error("Failed pattern match at Main (line 569, column 25 - line 571, column 158): " + [maybeKey.constructor.name]);
              };
            }
            ;
            var $526 = contains("Numpad")(key2);
            if ($526) {
              return function __do2() {
                var maybeKey = stripPrefix("Numpad")(key2);
                if (maybeKey instanceof Nothing) {
                  return state3;
                }
                ;
                if (maybeKey instanceof Just) {
                  if (state3.upperCase) {
                    return {
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chat: state3.chat,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      selectedPiece: state3.selectedPiece,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      name: state3.name + maybeKey.value0
                    };
                  }
                  ;
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chat: state3.chat,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    name: state3.name + toLower(maybeKey.value0)
                  };
                }
                ;
                throw new Error("Failed pattern match at Main (line 574, column 25 - line 576, column 158): " + [maybeKey.constructor.name]);
              };
            }
            ;
            return pure4(state3);
          }
          ;
          return pure4(state3);
        }
        ;
        if (otherwise) {
          return function __do2() {
            log2("Pressed: " + key2)();
            if (key2 === "ShiftLeft") {
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                winner: state3.winner,
                upperCase: !state3.upperCase
              };
            }
            ;
            if (key2 === "CapsLock") {
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                winner: state3.winner,
                upperCase: !state3.upperCase
              };
            }
            ;
            if (key2 === "KeyR") {
              send("Request: New Match")();
              return state3;
            }
            ;
            if (key2 === "Enter") {
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                chatState: true
              };
            }
            ;
            if (key2 === "KeyC") {
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                changeName: true
              };
            }
            ;
            if (key2 === "KeyY") {
              send("Request: Accept")();
              return state3;
            }
            ;
            if (key2 === "KeyN") {
              send("Request: Decline")();
              return state3;
            }
            ;
            return state3;
          };
        }
        ;
        throw new Error("Failed pattern match at Main (line 514, column 1 - line 514, column 80): " + [send.constructor.name, key2.constructor.name, state3.constructor.name]);
      };
    };
  };
  var moveType = function(move) {
    var changePos = function(r$prime) {
      return function(c$prime) {
        return function(pos) {
          if (pos instanceof Grid) {
            return new Grid({
              r: r$prime + pos.value0.r | 0,
              c: c$prime + pos.value0.c | 0
            });
          }
          ;
          return pos;
        };
      };
    };
    if (move === 0) {
      return changePos(-1 | 0)(0);
    }
    ;
    if (move === 1) {
      return changePos(1)(0);
    }
    ;
    if (move === 2) {
      return changePos(0)(-1 | 0);
    }
    ;
    if (move === 3) {
      return changePos(0)(1);
    }
    ;
    if (move === 4) {
      return changePos(-1 | 0)(-1 | 0);
    }
    ;
    if (move === 5) {
      return changePos(-1 | 0)(1);
    }
    ;
    if (move === 6) {
      return changePos(1)(-1 | 0);
    }
    ;
    if (move === 7) {
      return changePos(1)(1);
    }
    ;
    return changePos(0)(0);
  };
  var messageFilter = function(message2) {
    return function(message$prime) {
      var $536 = show1(message2) === show1(message$prime);
      if ($536) {
        return false;
      }
      ;
      return true;
    };
  };
  var onMessage2 = function(v) {
    return function(message2) {
      return function(state3) {
        return function __do2() {
          log2("Received message: " + show1(message2))();
          return {
            actions: state3.actions,
            attackedPositions: state3.attackedPositions,
            availableMoves: state3.availableMoves,
            board: state3.board,
            canSend: state3.canSend,
            changeName: state3.changeName,
            chat: state3.chat,
            chatLog: state3.chatLog,
            chatState: state3.chatState,
            flagPosition: state3.flagPosition,
            hand: state3.hand,
            name: state3.name,
            nameChanged: state3.nameChanged,
            opponentName: state3.opponentName,
            playerId: state3.playerId,
            previousMove: state3.previousMove,
            request: state3.request,
            score: state3.score,
            selectedPiece: state3.selectedPiece,
            status: state3.status,
            tickCount: state3.tickCount,
            turn: state3.turn,
            upperCase: state3.upperCase,
            winner: state3.winner,
            lastReceivedMessage: new Just(message2),
            messages: append13(filter(messageFilter(message2))(state3.messages))([message2])
          };
        };
      };
    };
  };
  var isOpponent = function(piece) {
    if (piece instanceof Board) {
      return piece.value0.opponent;
    }
    ;
    if (piece instanceof Hand) {
      return piece.value0.opponent;
    }
    ;
    throw new Error("Failed pattern match at Main (line 1043, column 5 - line 1045, column 29): " + [piece.constructor.name]);
  };
  var movePiece = function(pos1) {
    return function(pos2) {
      return function(state3) {
        var shouldUpgrade = function(opponent) {
          if (pos2 instanceof Grid) {
            var $541 = opponent && pos2.value0.r > 9;
            if ($541) {
              return true;
            }
            ;
            var $542 = !opponent && pos2.value0.r < 3;
            if ($542) {
              return true;
            }
            ;
            return false;
          }
          ;
          return false;
        };
        var checkHand = function(piece) {
          if (piece instanceof Hand) {
            var $547 = (piece.value0.count - 1 | 0) === 0;
            if ($547) {
              return Nothing.value;
            }
            ;
            return new Just(new Hand({
              pos: piece.value0.pos,
              opponent: piece.value0.opponent,
              type: piece.value0.type,
              count: piece.value0.count - 1 | 0
            }));
          }
          ;
          return Nothing.value;
        };
        var v = lookup1(pos1)(state3.board);
        if (v instanceof Nothing) {
          var v1 = lookup1(pos1)(state3.hand);
          if (v1 instanceof Nothing) {
            return pure4(state3);
          }
          ;
          if (v1 instanceof Just) {
            return function __do2() {
              var piece = function() {
                if (v1.value0 instanceof Hand) {
                  return new Board({
                    pos: pos2,
                    opponent: v1.value0.value0.opponent,
                    type: v1.value0.value0.type
                  });
                }
                ;
                return v1.value0;
              }();
              var hand = update2(checkHand)(pos1)(state3.hand);
              var board = insert3(pos2)(piece)(state3.board);
              var $553 = isOpponent(v1.value0);
              if ($553) {
                return {
                  attackedPositions: state3.attackedPositions,
                  availableMoves: state3.availableMoves,
                  canSend: state3.canSend,
                  changeName: state3.changeName,
                  chat: state3.chat,
                  chatLog: state3.chatLog,
                  chatState: state3.chatState,
                  flagPosition: state3.flagPosition,
                  lastReceivedMessage: state3.lastReceivedMessage,
                  messages: state3.messages,
                  name: state3.name,
                  nameChanged: state3.nameChanged,
                  opponentName: state3.opponentName,
                  playerId: state3.playerId,
                  request: state3.request,
                  score: state3.score,
                  selectedPiece: state3.selectedPiece,
                  status: state3.status,
                  tickCount: state3.tickCount,
                  turn: state3.turn,
                  upperCase: state3.upperCase,
                  winner: state3.winner,
                  previousMove: new Just({
                    from: pos1,
                    to: pos2
                  }),
                  actions: state3.actions + 1 | 0,
                  board,
                  hand
                };
              }
              ;
              return {
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                request: state3.request,
                score: state3.score,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                previousMove: new Just({
                  from: pos1,
                  to: pos2
                }),
                selectedPiece: new Just(piece),
                actions: state3.actions - 1 | 0,
                board,
                hand
              };
            };
          }
          ;
          throw new Error("Failed pattern match at Main (line 1257, column 20 - line 1266, column 168): " + [v1.constructor.name]);
        }
        ;
        if (v instanceof Just) {
          return function __do2() {
            var piece = function() {
              if (v.value0 instanceof Board) {
                if (v.value0.value0.type instanceof Human) {
                  var $557 = shouldUpgrade(isOpponent(v.value0));
                  if ($557) {
                    return new Board({
                      opponent: v.value0.value0.opponent,
                      pos: pos2,
                      type: Warrior.value
                    });
                  }
                  ;
                  return new Board({
                    opponent: v.value0.value0.opponent,
                    type: v.value0.value0.type,
                    pos: pos2
                  });
                }
                ;
                if (v.value0.value0.type instanceof Goblin) {
                  var $558 = shouldUpgrade(isOpponent(v.value0));
                  if ($558) {
                    return new Board({
                      opponent: v.value0.value0.opponent,
                      pos: pos2,
                      type: Hobgoblin.value
                    });
                  }
                  ;
                  return new Board({
                    opponent: v.value0.value0.opponent,
                    type: v.value0.value0.type,
                    pos: pos2
                  });
                }
                ;
                return new Board({
                  opponent: v.value0.value0.opponent,
                  type: v.value0.value0.type,
                  pos: pos2
                });
              }
              ;
              return v.value0;
            }();
            var board$prime = $$delete2(pos1)(state3.board);
            var board = insert3(pos2)(piece)(board$prime);
            var $560 = isOpponent(v.value0);
            if ($560) {
              return {
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                previousMove: new Just({
                  from: pos1,
                  to: pos2
                }),
                actions: state3.actions + 1 | 0,
                board
              };
            }
            ;
            return {
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              request: state3.request,
              score: state3.score,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              upperCase: state3.upperCase,
              winner: state3.winner,
              previousMove: new Just({
                from: pos1,
                to: pos2
              }),
              selectedPiece: new Just(piece),
              actions: state3.actions - 1 | 0,
              board
            };
          };
        }
        ;
        throw new Error("Failed pattern match at Main (line 1256, column 5 - line 1277, column 154): " + [v.constructor.name]);
      };
    };
  };
  var gridSize = 50;
  var height8 = /* @__PURE__ */ function() {
    return gridSize * toNumber(rows4);
  }();
  var getType = function(piece) {
    if (piece instanceof Board) {
      return piece.value0.type;
    }
    ;
    if (piece instanceof Hand) {
      return piece.value0.type;
    }
    ;
    throw new Error("Failed pattern match at Main (line 1032, column 5 - line 1034, column 25): " + [piece.constructor.name]);
  };
  var getPos = function(piece) {
    if (piece instanceof Board) {
      return piece.value0.pos;
    }
    ;
    if (piece instanceof Hand) {
      return piece.value0.pos;
    }
    ;
    throw new Error("Failed pattern match at Main (line 1026, column 5 - line 1028, column 24): " + [piece.constructor.name]);
  };
  var isOccupied = function(pos) {
    return function(piece) {
      var $568 = eq8(getPos(piece))(pos);
      if ($568) {
        return true;
      }
      ;
      return false;
    };
  };
  var pieceToMap = function(mapped) {
    return function(piece$prime) {
      return insert3(getPos(piece$prime))(piece$prime)(mapped);
    };
  };
  var getPieces = function(pieces) {
    return function(unitType) {
      return function(opponent) {
        return filter(function(p) {
          var $569 = isOpponent(p) === opponent;
          if ($569) {
            return true;
          }
          ;
          return false;
        })(filter(function(p) {
          var $570 = eq6(getType(p))(unitType);
          if ($570) {
            return true;
          }
          ;
          return false;
        })(foldl3(append13)([])(mapFlipped2(pieces)(pieceToArray))));
      };
    };
  };
  var getName = function(n) {
    if (n === 0) {
      return "King";
    }
    ;
    if (n === 1) {
      return "Queen";
    }
    ;
    if (n === 2) {
      return "Flag";
    }
    ;
    if (n === 3) {
      return "Prince";
    }
    ;
    if (n === 4) {
      return "Wizard";
    }
    ;
    if (n === 5) {
      return "Dragon";
    }
    ;
    if (n === 6) {
      return "Orc";
    }
    ;
    if (n === 7) {
      return "Dwarf";
    }
    ;
    if (n === 8) {
      return "Elf Ranged";
    }
    ;
    if (n === 9) {
      return "Elf Melee";
    }
    ;
    if (n === 10) {
      return "Human";
    }
    ;
    if (n === 11) {
      return "Goblin";
    }
    ;
    if (n === 12) {
      return "Warrior";
    }
    ;
    if (n === 13) {
      return "Hobgoblin";
    }
    ;
    return "Anonymous";
  };
  var fps = 60;
  var cols2 = 16;
  var flipPosition = function(position2) {
    if (position2 instanceof Grid) {
      return new Grid({
        r: rows4 - (position2.value0.r + 1 | 0) | 0,
        c: cols2 - (position2.value0.c + 1 | 0) | 0
      });
    }
    ;
    if (position2 instanceof OnHand) {
      return new OnHand(position2.value0, position2.value1);
    }
    ;
    throw new Error("Failed pattern match at Main (line 1014, column 5 - line 1016, column 33): " + [position2.constructor.name]);
  };
  var flipPiece = function(piece) {
    if (piece instanceof Board) {
      return new Board({
        opponent: piece.value0.opponent,
        type: piece.value0.type,
        pos: flipPosition(piece.value0.pos)
      });
    }
    ;
    if (piece instanceof Hand) {
      return new Hand({
        opponent: piece.value0.opponent,
        count: piece.value0.count,
        type: piece.value0.type,
        pos: flipPosition(piece.value0.pos)
      });
    }
    ;
    throw new Error("Failed pattern match at Main (line 1020, column 5 - line 1022, column 56): " + [piece.constructor.name]);
  };
  var defaultBoard = /* @__PURE__ */ function() {
    var ownedPieces = [new Board({
      pos: new Grid({
        r: 12,
        c: 8
      }),
      opponent: false,
      type: King.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 7
      }),
      opponent: false,
      type: Queen.value
    }), new Board({
      pos: new Grid({
        r: 11,
        c: 8
      }),
      opponent: false,
      type: Flag.value
    }), new Board({
      pos: new Grid({
        r: 11,
        c: 7
      }),
      opponent: false,
      type: Prince.value
    }), new Board({
      pos: new Grid({
        r: 11,
        c: 1
      }),
      opponent: false,
      type: Dragon.value
    }), new Board({
      pos: new Grid({
        r: 11,
        c: 14
      }),
      opponent: false,
      type: Dragon.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 6
      }),
      opponent: false,
      type: Wizard.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 9
      }),
      opponent: false,
      type: Wizard.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 5
      }),
      opponent: false,
      type: ElfRanged.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 10
      }),
      opponent: false,
      type: ElfRanged.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 4
      }),
      opponent: false,
      type: ElfMelee.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 11
      }),
      opponent: false,
      type: ElfMelee.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 3
      }),
      opponent: false,
      type: Orc.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 2
      }),
      opponent: false,
      type: Orc.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 12
      }),
      opponent: false,
      type: Orc.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 13
      }),
      opponent: false,
      type: Orc.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 1
      }),
      opponent: false,
      type: Dwarf.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 0
      }),
      opponent: false,
      type: Dwarf.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 14
      }),
      opponent: false,
      type: Dwarf.value
    }), new Board({
      pos: new Grid({
        r: 12,
        c: 15
      }),
      opponent: false,
      type: Dwarf.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 0
      }),
      opponent: false,
      type: Human.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 2
      }),
      opponent: false,
      type: Human.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 4
      }),
      opponent: false,
      type: Human.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 6
      }),
      opponent: false,
      type: Human.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 8
      }),
      opponent: false,
      type: Human.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 10
      }),
      opponent: false,
      type: Human.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 12
      }),
      opponent: false,
      type: Human.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 14
      }),
      opponent: false,
      type: Human.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 1
      }),
      opponent: false,
      type: Goblin.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 3
      }),
      opponent: false,
      type: Goblin.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 5
      }),
      opponent: false,
      type: Goblin.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 7
      }),
      opponent: false,
      type: Goblin.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 9
      }),
      opponent: false,
      type: Goblin.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 11
      }),
      opponent: false,
      type: Goblin.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 13
      }),
      opponent: false,
      type: Goblin.value
    }), new Board({
      pos: new Grid({
        r: 10,
        c: 15
      }),
      opponent: false,
      type: Goblin.value
    })];
    var opponentPieces = mapFlipped1(mapFlipped1(ownedPieces)(toOpponent))(flipPiece);
    var allPieces = append13(ownedPieces)(opponentPieces);
    return foldl12(pieceToMap)(empty3)(allPieces);
  }();
  var defaultNewMatch = function(state3) {
    var turn = function() {
      var $581 = show22(state3.playerId) === "(Just Player1)";
      if ($581) {
        return true;
      }
      ;
      return false;
    }();
    var actions = function() {
      var $582 = show22(state3.playerId) === "(Just Player1)";
      if ($582) {
        return 3;
      }
      ;
      return -3 | 0;
    }();
    return {
      tickCount: state3.tickCount,
      name: state3.name,
      chat: state3.chat,
      upperCase: state3.upperCase,
      chatLog: state3.chatLog,
      chatState: state3.chatState,
      opponentName: state3.opponentName,
      changeName: state3.changeName,
      nameChanged: state3.nameChanged,
      canSend: state3.canSend,
      score: state3.score,
      playerId: state3.playerId,
      availableMoves: state3.availableMoves,
      flagPosition: state3.flagPosition,
      attackedPositions: state3.attackedPositions,
      board: defaultBoard,
      hand: empty3,
      actions,
      winner: Nothing.value,
      messages: [],
      turn,
      status: InGame.value,
      selectedPiece: Nothing.value,
      previousMove: Nothing.value,
      request: Nothing.value,
      lastReceivedMessage: Nothing.value
    };
  };
  var initialState = function __do() {
    var rand1 = randomInt(0)(13)();
    var name15 = getName(rand1);
    return {
      tickCount: 0,
      actions: -3 | 0,
      canSend: true,
      name: name15,
      opponentName: "",
      chat: "",
      chatLog: [],
      changeName: false,
      nameChanged: false,
      upperCase: false,
      chatState: false,
      score: {
        me: 0,
        opponent: 0
      },
      turn: false,
      playerId: Nothing.value,
      previousMove: Nothing.value,
      board: defaultBoard,
      hand: empty3,
      selectedPiece: Nothing.value,
      availableMoves: [],
      attackedPositions: [],
      flagPosition: new Grid({
        r: 11,
        c: 8
      }),
      status: NotConnected.value,
      winner: Nothing.value,
      messages: [],
      request: Nothing.value,
      lastReceivedMessage: Nothing.value
    };
  };
  var getScreenPos = function(piecePos) {
    var y = function() {
      if (piecePos instanceof Grid) {
        return gridSize * toNumber(piecePos.value0.r);
      }
      ;
      if (piecePos instanceof OnHand) {
        if (piecePos.value0) {
          return gridSize * toNumber(floor2(toNumber(piecePos.value1) / 4));
        }
        ;
        return gridSize * 10 + gridSize * toNumber(floor2(toNumber(piecePos.value1) / 4));
      }
      ;
      throw new Error("Failed pattern match at Main (line 1091, column 9 - line 1095, column 94): " + [piecePos.constructor.name]);
    }();
    var x = function() {
      if (piecePos instanceof Grid) {
        return gridSize * toNumber(piecePos.value0.c);
      }
      ;
      if (piecePos instanceof OnHand) {
        return gridSize * toNumber(cols2) + gridSize * toNumber(mod3(piecePos.value1)(4));
      }
      ;
      throw new Error("Failed pattern match at Main (line 1088, column 9 - line 1090, column 93): " + [piecePos.constructor.name]);
    }();
    return {
      x,
      y
    };
  };
  var isOutOfBounds = function(pos) {
    if (pos instanceof OnHand) {
      return true;
    }
    ;
    if (pos instanceof Grid) {
      var $599 = pos.value0.r < 0 || (pos.value0.r >= rows4 || (pos.value0.c < 0 || pos.value0.c >= cols2));
      if ($599) {
        return true;
      }
      ;
      return false;
    }
    ;
    throw new Error("Failed pattern match at Main (line 1072, column 5 - line 1076, column 23): " + [pos.constructor.name]);
  };
  var isValid = function(board) {
    return function(pos) {
      var $601 = any3(isOccupied(pos))(board) || isOutOfBounds(pos);
      if ($601) {
        return false;
      }
      ;
      return true;
    };
  };
  var width8 = /* @__PURE__ */ function() {
    return gridSize * (toNumber(cols2) + 10);
  }();
  var colors = {
    background: "#1D0F02",
    tile1: "#2D393E",
    tile2: "#45575F",
    hand1: "#3E322D",
    hand2: "#5F4D45",
    "default": "#F1FDFE",
    attacked: "#EB5956",
    available: "#7FC973",
    selected: "#358230",
    player1: "#42A5F1",
    player2: "#FF3D43"
  };
  var changeType = function(piece) {
    return function(newType) {
      if (piece instanceof Hand) {
        return new Hand({
          pos: piece.value0.pos,
          opponent: piece.value0.opponent,
          count: piece.value0.count,
          type: newType
        });
      }
      ;
      if (piece instanceof Board) {
        return new Board({
          pos: piece.value0.pos,
          opponent: piece.value0.opponent,
          type: newType
        });
      }
      ;
      throw new Error("Failed pattern match at Main (line 1057, column 28 - line 1059, column 42): " + [piece.constructor.name]);
    };
  };
  var canCapture = function(board) {
    return function(pos) {
      var v = lookup1(pos)(board);
      if (v instanceof Nothing) {
        return false;
      }
      ;
      if (v instanceof Just) {
        var v1 = getType(v.value0);
        if (v1 instanceof King) {
          return false;
        }
        ;
        if (v1 instanceof Queen) {
          return false;
        }
        ;
        if (v1 instanceof Flag) {
          return false;
        }
        ;
        return isOpponent(v.value0);
      }
      ;
      throw new Error("Failed pattern match at Main (line 1099, column 5 - line 1106, column 38): " + [v.constructor.name]);
    };
  };
  var filterSettings = function(board) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(pos) {
            var $608 = isOutOfBounds(pos);
            if ($608) {
              return false;
            }
            ;
            var $609 = canCapture(board)(pos);
            if ($609) {
              return a;
            }
            ;
            var $610 = any3(isOccupied(pos))(board);
            if ($610) {
              return b;
            }
            ;
            return c;
          };
        };
      };
    };
  };
  var getImportantPiecesMoves = function(board) {
    return function(unitTypes) {
      return function(getAll) {
        return function(attackedPositions) {
          var isImportantPiece = function(opponent) {
            return function(piece) {
              var $611 = isOpponent(piece) === opponent;
              if ($611) {
                var $613 = any2(function(u) {
                  var $612 = eq6(u)(getType(piece));
                  if ($612) {
                    return true;
                  }
                  ;
                  return false;
                })(unitTypes);
                if ($613) {
                  return true;
                }
                ;
                return false;
              }
              ;
              return false;
            };
          };
          var alliedPieces = mapFlipped1(filter(not1(isOpponent))(foldl3(append13)([])(mapFlipped2(board)(pieceToArray))))(toOpponent);
          var alliedImportantPieces = foldl12(append13)([])(mapFlipped1(filter(isImportantPiece(false))(foldl3(append13)([])(mapFlipped2(board)(pieceToArray))))(getAvailableMoves(board)(attackedPositions)));
          var allPieces = mapFlipped1(foldl3(append13)([])(mapFlipped2(board)(pieceToArray)))(toOpponent);
          var board$prime = foldl12(pieceToMap)(empty3)(allPieces);
          var attackedPositions$prime = foldl12(append13)([])(mapFlipped1(alliedPieces)(getAvailableMoves(board$prime)([])));
          var opponentImportantPieces = foldl12(append13)([])(mapFlipped1(mapFlipped1(filter(isImportantPiece(true))(foldl3(append13)([])(mapFlipped2(board)(pieceToArray))))(toAllied))(getAvailableMoves(board$prime)(attackedPositions$prime)));
          if (getAll instanceof Nothing) {
            return append13(alliedImportantPieces)(opponentImportantPieces);
          }
          ;
          if (getAll instanceof Just && getAll.value0) {
            return opponentImportantPieces;
          }
          ;
          if (getAll instanceof Just && !getAll.value0) {
            return alliedImportantPieces;
          }
          ;
          throw new Error("Failed pattern match at Main (line 1126, column 68 - line 1129, column 40): " + [getAll.constructor.name]);
        };
      };
    };
  };
  var getAvailableMoves = function(board) {
    return function(attackedPositions) {
      return function(piece) {
        var v = getPos(piece);
        if (v instanceof OnHand) {
          var rowColPos = function(r) {
            return function(c) {
              return [new Grid({
                r,
                c
              })];
            };
          };
          var rowPos = function(r) {
            return foldl12(append13)([])(map6(rowColPos(r))(range2(0)(cols2 - 1 | 0)));
          };
          var hindersMove = function(moves) {
            return function(dropPos) {
              var $618 = any2(function(x) {
                return eq8(x)(dropPos);
              })(moves);
              if ($618) {
                return false;
              }
              ;
              return true;
            };
          };
          var makeDropMoves = filter(hindersMove(getImportantPiecesMoves(board)([King.value, Queen.value, Flag.value])(Nothing.value)(attackedPositions)))(filter(isValid(board))(foldl12(append13)([])(mapFlipped1(range2(3)(rows4 - 1 | 0))(rowPos))));
          if (v.value0) {
            return [];
          }
          ;
          return makeDropMoves;
        }
        ;
        if (v instanceof Grid) {
          var steady = function($copy_capture) {
            return function($copy_max) {
              return function($copy_movement) {
                return function($copy_moves) {
                  return function($copy_pos) {
                    var $tco_var_capture = $copy_capture;
                    var $tco_var_max = $copy_max;
                    var $tco_var_movement = $copy_movement;
                    var $tco_var_moves = $copy_moves;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(capture, max6, movement, moves, pos) {
                      var move = moveType(movement)(pos);
                      var capturePos = function() {
                        var $622 = canCapture(board)(pos);
                        if ($622) {
                          return [pos];
                        }
                        ;
                        return [];
                      }();
                      var $623 = max6 > 0;
                      if ($623) {
                        var $624 = isValid(board)(pos);
                        if ($624) {
                          $tco_var_capture = capture;
                          $tco_var_max = max6 - 1 | 0;
                          $tco_var_movement = movement;
                          $tco_var_moves = append13(moves)([pos]);
                          $copy_pos = move;
                          return;
                        }
                        ;
                        if (capture) {
                          $tco_done = true;
                          return append13(moves)(capturePos);
                        }
                        ;
                        $tco_done = true;
                        return moves;
                      }
                      ;
                      $tco_done = true;
                      return moves;
                    }
                    ;
                    while (!$tco_done) {
                      $tco_result = $tco_loop($tco_var_capture, $tco_var_max, $tco_var_movement, $tco_var_moves, $copy_pos);
                    }
                    ;
                    return $tco_result;
                  };
                };
              };
            };
          };
          var ranged = function(movement) {
            return function(range3) {
              var rightSide = [new Grid({
                r: v.value0.r,
                c: v.value0.c + range3 | 0
              }), new Grid({
                r: v.value0.r + 1 | 0,
                c: v.value0.c + range3 | 0
              }), new Grid({
                r: v.value0.r - 1 | 0,
                c: v.value0.c + range3 | 0
              })];
              var leftSide = [new Grid({
                r: v.value0.r,
                c: v.value0.c - range3 | 0
              }), new Grid({
                r: v.value0.r + 1 | 0,
                c: v.value0.c - range3 | 0
              }), new Grid({
                r: v.value0.r - 1 | 0,
                c: v.value0.c - range3 | 0
              })];
              var forward2 = [new Grid({
                r: v.value0.r - range3 | 0,
                c: v.value0.c
              }), new Grid({
                r: v.value0.r - range3 | 0,
                c: v.value0.c + 1 | 0
              }), new Grid({
                r: v.value0.r - range3 | 0,
                c: v.value0.c - 1 | 0
              })];
              var capturePos = function(pos) {
                var $626 = canCapture(board)(pos);
                if ($626) {
                  return [pos];
                }
                ;
                return [];
              };
              var backward = [new Grid({
                r: v.value0.r + range3 | 0,
                c: v.value0.c
              }), new Grid({
                r: v.value0.r + range3 | 0,
                c: v.value0.c + 1 | 0
              }), new Grid({
                r: v.value0.r + range3 | 0,
                c: v.value0.c - 1 | 0
              })];
              var moves = function() {
                if (movement === 0) {
                  return append13(forward2)(append13(backward)(append13(leftSide)(rightSide)));
                }
                ;
                if (movement === 1) {
                  return forward2;
                }
                ;
                if (movement === 2) {
                  return backward;
                }
                ;
                if (movement === 3) {
                  return leftSide;
                }
                ;
                if (movement === 4) {
                  return rightSide;
                }
                ;
                return [];
              }();
              return foldl12(append13)([])(map6(capturePos)(moves));
            };
          };
          var line = function(capture) {
            return function(max6) {
              return append13(steady(capture)(max6)(0)([])(new Grid({
                r: v.value0.r - 1 | 0,
                c: v.value0.c
              })))(append13(steady(capture)(max6)(1)([])(new Grid({
                r: v.value0.r + 1 | 0,
                c: v.value0.c
              })))(append13(steady(capture)(max6)(2)([])(new Grid({
                r: v.value0.r,
                c: v.value0.c - 1 | 0
              })))(steady(capture)(max6)(3)([])(new Grid({
                r: v.value0.r,
                c: v.value0.c + 1 | 0
              })))));
            };
          };
          var knight = function(settings) {
            return filter(settings)([new Grid({
              r: v.value0.r + 2 | 0,
              c: v.value0.c + 1 | 0
            }), new Grid({
              r: v.value0.r + 2 | 0,
              c: v.value0.c - 1 | 0
            }), new Grid({
              r: v.value0.r - 2 | 0,
              c: v.value0.c + 1 | 0
            }), new Grid({
              r: v.value0.r - 2 | 0,
              c: v.value0.c - 1 | 0
            }), new Grid({
              r: v.value0.r + 1 | 0,
              c: v.value0.c + 2 | 0
            }), new Grid({
              r: v.value0.r - 1 | 0,
              c: v.value0.c + 2 | 0
            }), new Grid({
              r: v.value0.r + 1 | 0,
              c: v.value0.c - 2 | 0
            }), new Grid({
              r: v.value0.r - 1 | 0,
              c: v.value0.c - 2 | 0
            })]);
          };
          var isAttacked = function(pos) {
            return function(atk) {
              var $628 = eq8(pos)(atk);
              if ($628) {
                return true;
              }
              ;
              return false;
            };
          };
          var diagonal = function(capture) {
            return function(max6) {
              return append13(steady(capture)(max6)(4)([])(new Grid({
                r: v.value0.r - 1 | 0,
                c: v.value0.c - 1 | 0
              })))(append13(steady(capture)(max6)(5)([])(new Grid({
                r: v.value0.r - 1 | 0,
                c: v.value0.c + 1 | 0
              })))(append13(steady(capture)(max6)(6)([])(new Grid({
                r: v.value0.r + 1 | 0,
                c: v.value0.c - 1 | 0
              })))(steady(capture)(max6)(7)([])(new Grid({
                r: v.value0.r + 1 | 0,
                c: v.value0.c + 1 | 0
              })))));
            };
          };
          var defaultSettings = filterSettings(board)(true)(false)(true);
          var defaultPos = new Grid({
            r: v.value0.r,
            c: v.value0.c
          });
          var down = moveType(1)(defaultPos);
          var left = moveType(2)(defaultPos);
          var right = moveType(3)(defaultPos);
          var up = moveType(0)(defaultPos);
          var block = function(settings) {
            return function(size3) {
              return function(movement) {
                var rightSide = [right, moveType(5)(defaultPos), moveType(7)(defaultPos)];
                var leftSide = [left, moveType(4)(defaultPos), moveType(6)(defaultPos)];
                var forward2 = [up, moveType(4)(defaultPos), moveType(5)(defaultPos)];
                var backward = [down, moveType(6)(defaultPos), moveType(7)(defaultPos)];
                if (movement === 0) {
                  return filter(settings)(append13(forward2)(append13(backward)([left, right])));
                }
                ;
                if (movement === 1) {
                  return filter(settings)(foldl12(append13)([])(map6(steady(true)(size3)(0)([]))(forward2)));
                }
                ;
                if (movement === 2) {
                  return filter(settings)(foldl12(append13)([])(map6(steady(true)(size3)(1)([]))(backward)));
                }
                ;
                if (movement === 3) {
                  return filter(settings)(foldl12(append13)([])(map6(steady(true)(size3)(2)([]))(leftSide)));
                }
                ;
                if (movement === 4) {
                  return filter(settings)(foldl12(append13)([])(map6(steady(true)(size3)(3)([]))(rightSide)));
                }
                ;
                return [];
              };
            };
          };
          var upgraded = append13(block(defaultSettings)(1)(1))(filter(defaultSettings)([down, left, right]));
          var attackedPos = function(pos) {
            var $630 = any2(isAttacked(pos))(attackedPositions);
            if ($630) {
              return false;
            }
            ;
            return true;
          };
          var v1 = getType(piece);
          if (v1 instanceof King) {
            var $632 = isOpponent(piece);
            if ($632) {
              return [];
            }
            ;
            return filter(attackedPos)(block(filterSettings(board)(false)(false)(true))(1)(0));
          }
          ;
          if (v1 instanceof Queen) {
            var $633 = isOpponent(piece);
            if ($633) {
              return [];
            }
            ;
            return filter(attackedPos)(append13(line(false)(rows4))(diagonal(false)(rows4)));
          }
          ;
          if (v1 instanceof Flag) {
            var $634 = isOpponent(piece);
            if ($634) {
              return [];
            }
            ;
            return filter(attackedPos)(block(filterSettings(board)(false)(false)(true))(1)(0));
          }
          ;
          if (v1 instanceof Prince) {
            return append13(knight(defaultSettings))(block(defaultSettings)(1)(0));
          }
          ;
          if (v1 instanceof Wizard) {
            return append13(diagonal(true)(rows4))(filter(defaultSettings)([down]));
          }
          ;
          if (v1 instanceof Dragon) {
            return append13(line(true)(4))(diagonal(true)(4));
          }
          ;
          if (v1 instanceof Orc) {
            return append13(block(defaultSettings)(2)(1))(filter(defaultSettings)([down]));
          }
          ;
          if (v1 instanceof Dwarf) {
            return line(true)(rows4);
          }
          ;
          if (v1 instanceof ElfRanged) {
            var $635 = isOpponent(piece);
            if ($635) {
              return ranged(1)(2);
            }
            ;
            return append13(block(filterSettings(board)(false)(false)(true))(1)(0))(ranged(1)(2));
          }
          ;
          if (v1 instanceof ElfMelee) {
            return append13(block(defaultSettings)(2)(1))(block(defaultSettings)(2)(2));
          }
          ;
          if (v1 instanceof Human) {
            return block(defaultSettings)(1)(1);
          }
          ;
          if (v1 instanceof Goblin) {
            return steady(true)(2)(0)([])(up);
          }
          ;
          if (v1 instanceof Warrior) {
            return upgraded;
          }
          ;
          if (v1 instanceof Hobgoblin) {
            return upgraded;
          }
          ;
          throw new Error("Failed pattern match at Main (line 1306, column 13 - line 1320, column 38): " + [v1.constructor.name]);
        }
        ;
        throw new Error("Failed pattern match at Main (line 1294, column 5 - line 1405, column 72): " + [v.constructor.name]);
      };
    };
  };
  var onRender = function(images2) {
    return function(ctx) {
      return function(state3) {
        var renderSelectedPiece = function() {
          if (state3.selectedPiece instanceof Nothing) {
            return pure4(unit);
          }
          ;
          if (state3.selectedPiece instanceof Just) {
            var piecePos = getPos(state3.selectedPiece.value0);
            var screenPos = getScreenPos(piecePos);
            return drawRect(ctx)({
              x: screenPos.x,
              y: screenPos.y,
              width: gridSize,
              height: gridSize,
              color: colors.selected
            });
          }
          ;
          throw new Error("Failed pattern match at Main (line 768, column 9 - line 776, column 32): " + [state3.selectedPiece.constructor.name]);
        }();
        var renderRequest = function() {
          if (state3.request instanceof Nothing) {
            return pure4(unit);
          }
          ;
          if (state3.request instanceof Just) {
            var y = height8 / 2;
            var x = gridSize * toNumber(cols2 + 2 | 0);
            var requestType = function() {
              var $642 = contains("New Match")(state3.request.value0.payload);
              if ($642) {
                return "Rematch";
              }
              ;
              return "";
            }();
            var $643 = eq3(new Just(state3.request.value0.playerId))(state3.playerId);
            if ($643) {
              return drawText(ctx)({
                x,
                y: y + gridSize,
                font: "courier",
                size: 14,
                color: colors["default"],
                text: requestType + " sent"
              });
            }
            ;
            return function __do2() {
              drawText(ctx)({
                x,
                y: y - gridSize,
                font: "courier",
                size: 14,
                color: colors["default"],
                text: requestType
              })();
              return drawText(ctx)({
                x,
                y: y + gridSize,
                font: "courier",
                size: 14,
                color: colors["default"],
                text: "Y / N"
              })();
            };
          }
          ;
          throw new Error("Failed pattern match at Main (line 665, column 21 - line 678, column 113): " + [state3.request.constructor.name]);
        }();
        var renderPreviousMove = function() {
          if (state3.previousMove instanceof Nothing) {
            return pure4(unit);
          }
          ;
          if (state3.previousMove instanceof Just) {
            var screenPos2 = getScreenPos(state3.previousMove.value0.to);
            var screenPos1 = getScreenPos(state3.previousMove.value0.from);
            return function __do2() {
              drawRect(ctx)({
                x: screenPos1.x,
                y: screenPos1.y,
                width: gridSize,
                height: gridSize,
                color: colors.selected
              })();
              return drawRect(ctx)({
                x: screenPos2.x,
                y: screenPos2.y,
                width: gridSize,
                height: gridSize,
                color: colors.selected
              })();
            };
          }
          ;
          throw new Error("Failed pattern match at Main (line 757, column 9 - line 764, column 45): " + [state3.previousMove.constructor.name]);
        }();
        var renderPlayers = function() {
          var y = height8 / 2;
          var x = gridSize * toNumber(cols2 + 2 | 0);
          var text5 = function() {
            var $649 = state3.changeName && mod3(state3.tickCount)(30) > 15;
            if ($649) {
              return state3.name + "|";
            }
            ;
            return state3.name;
          }();
          var color2 = function() {
            var $650 = eq4(state3.winner)(new Just(true));
            if ($650) {
              return colors.attacked;
            }
            ;
            var $651 = eq4(state3.winner)(new Just(false));
            if ($651) {
              return colors.available;
            }
            ;
            return colors["default"];
          }();
          var color1 = function() {
            var $652 = eq4(state3.winner)(new Just(true));
            if ($652) {
              return colors.available;
            }
            ;
            var $653 = eq4(state3.winner)(new Just(false));
            if ($653) {
              return colors.attacked;
            }
            ;
            return colors["default"];
          }();
          return function __do2() {
            drawText(ctx)({
              x,
              y: y + gridSize * 3,
              color: color1,
              font: "courier",
              size: 14,
              text: text5
            })();
            drawText(ctx)({
              x,
              y: y + gridSize * 2,
              color: color1,
              font: "courier",
              size: 16,
              text: show4(state3.score.me)
            })();
            drawText(ctx)({
              x,
              y: y - gridSize * 3,
              color: color2,
              font: "courier",
              size: 14,
              text: state3.opponentName
            })();
            return drawText(ctx)({
              x,
              y: y - gridSize * 2,
              color: color2,
              font: "courier",
              size: 16,
              text: show4(state3.score.opponent)
            })();
          };
        }();
        var renderPiece = function(effect) {
          return function(piece) {
            var playerId = function() {
              var $654 = show22(state3.playerId) === "(Just Player1)";
              if ($654) {
                return "1";
              }
              ;
              var $655 = show22(state3.playerId) === "(Just Player2)";
              if ($655) {
                return "2";
              }
              ;
              return "";
            }();
            var pieceTeam = isOpponent(piece);
            var piecePos = getPos(piece);
            var screenPos = getScreenPos(piecePos);
            var xr = screenPos.x + gridSize / 2;
            var yr = screenPos.y + gridSize / 2;
            var imagePath = function() {
              var v = getType(piece);
              if (v instanceof Flag) {
                var $657 = pieceTeam && playerId === "2";
                if ($657) {
                  return "images/Flag1.png";
                }
                ;
                var $658 = pieceTeam && playerId === "1";
                if ($658) {
                  return "images/Flag2.png";
                }
                ;
                return "images/Flag" + (playerId + ".png");
              }
              ;
              return "images/" + (show6(getType(piece)) + ".png");
            }();
            var color = function() {
              if (state3.playerId instanceof Nothing) {
                return colors.background;
              }
              ;
              if (state3.playerId instanceof Just) {
                var v = show32(state3.playerId.value0);
                if (v === "Player1") {
                  if (pieceTeam) {
                    return colors.player2;
                  }
                  ;
                  return colors.player1;
                }
                ;
                if (v === "Player2") {
                  if (pieceTeam) {
                    return colors.player1;
                  }
                  ;
                  return colors.player2;
                }
                ;
                return colors.background;
              }
              ;
              throw new Error("Failed pattern match at Main (line 879, column 13 - line 885, column 47): " + [state3.playerId.constructor.name]);
            }();
            return function __do2() {
              effect();
              (function() {
                var v = getType(piece);
                if (v instanceof Flag) {
                  return unit;
                }
                ;
                return drawCircle(ctx)({
                  x: xr,
                  y: yr + 3,
                  radius: 12,
                  color
                })();
              })();
              (function() {
                var v = lookup2(imagePath)(images2);
                if (v instanceof Nothing) {
                  return unit;
                }
                ;
                if (v instanceof Just) {
                  return drawImageScaled(ctx)(v.value0)({
                    x: screenPos.x,
                    y: screenPos.y,
                    width: gridSize,
                    height: gridSize
                  })();
                }
                ;
                throw new Error("Failed pattern match at Main (line 857, column 9 - line 859, column 84): " + [v.constructor.name]);
              })();
              if (piece instanceof Board) {
                return unit;
              }
              ;
              if (piece instanceof Hand) {
                return drawText(ctx)({
                  x: screenPos.x + gridSize * 0.8,
                  y: screenPos.y + gridSize,
                  size: 14,
                  color: colors["default"],
                  font: "courier",
                  text: show4(piece.value0.count)
                })();
              }
              ;
              throw new Error("Failed pattern match at Main (line 860, column 9 - line 862, column 150): " + [piece.constructor.name]);
            };
          };
        };
        var renderPieces = function __do2() {
          foldl22(renderPiece)(pure4(unit))(values(state3.board))();
          return foldl22(renderPiece)(pure4(unit))(values(state3.hand))();
        };
        var renderMove = function(color) {
          return function(effect) {
            return function(piecePos) {
              var screenPos = getScreenPos(piecePos);
              var x = screenPos.x + gridSize / 2;
              var y = screenPos.y + gridSize / 2;
              var radius = gridSize / 8;
              return function __do2() {
                effect();
                return drawCircle(ctx)({
                  x,
                  y,
                  radius,
                  color
                })();
              };
            };
          };
        };
        var renderMessage = function() {
          var y = height8 / 2;
          var x = gridSize * toNumber(cols2 + 2 | 0);
          var text5 = function() {
            if (state3.status instanceof NotConnected) {
              return "Not Connected";
            }
            ;
            if (state3.status instanceof Waiting) {
              var $671 = mod3(state3.tickCount)(60) > 45;
              if ($671) {
                return "Waiting...";
              }
              ;
              var $672 = mod3(state3.tickCount)(60) > 30;
              if ($672) {
                return "Waiting..";
              }
              ;
              var $673 = mod3(state3.tickCount)(60) > 15;
              if ($673) {
                return "Waiting.";
              }
              ;
              return "Waiting";
            }
            ;
            if (state3.status instanceof End) {
              var $674 = eq4(state3.winner)(new Just(true));
              if ($674) {
                return "You win!";
              }
              ;
              return "You lose!";
            }
            ;
            if (state3.turn) {
              return "Your turn! " + (show4(3 - state3.actions | 0) + "/3");
            }
            ;
            return "Opponent's turn! " + (show4(3 + state3.actions | 0) + "/3");
          }();
          var color = function() {
            if (state3.status instanceof End) {
              var $677 = eq4(state3.winner)(new Just(true));
              if ($677) {
                return colors.available;
              }
              ;
              return colors.attacked;
            }
            ;
            return "white";
          }();
          return function __do2() {
            drawText(ctx)({
              x,
              y: y - 16,
              color: colors["default"],
              font: "courier",
              size: 14,
              text: "The Great War"
            })();
            drawText(ctx)({
              x,
              y: y - 4,
              color: colors["default"],
              font: "courier",
              size: 14,
              text: "of the Ancients"
            })();
            return drawText(ctx)({
              x,
              y: y + 16,
              color,
              font: "courier",
              size: 14,
              text: text5
            })();
          };
        }();
        var renderGridHand = function(row) {
          return function(effect) {
            return function(col) {
              return function __do2() {
                effect();
                var y = gridSize * toNumber(row) - gridSize;
                var x = gridSize * toNumber(col) - gridSize;
                var color = function() {
                  var $678 = mod3(row + col | 0)(2) === 0;
                  if ($678) {
                    return colors.hand1;
                  }
                  ;
                  return colors.hand2;
                }();
                return drawRect(ctx)({
                  x,
                  y,
                  width: gridSize,
                  height: gridSize,
                  color
                })();
              };
            };
          };
        };
        var renderRowHand = function(effect) {
          return function(row) {
            return foldl12(renderGridHand(row))(effect)(range2(cols2 + 1 | 0)(cols2 + 4 | 0));
          };
        };
        var renderHand = function() {
          var y = gridSize * 10 + 0.8;
          var x = gridSize * 16 + 0.8;
          return function __do2() {
            foldl12(renderRowHand)(pure4(unit))(append13(range2(1)(3))(range2(11)(rows4)))();
            drawRectOutline(ctx)({
              x,
              y: 0,
              width: gridSize * 4 - 1.6,
              height: gridSize * 3,
              color: "#1E292A"
            })();
            drawRectOutline(ctx)({
              x,
              y: gridSize * 3,
              width: gridSize * 4 - 1.6,
              height: gridSize * 7,
              color: "#1E292A"
            })();
            return drawRectOutline(ctx)({
              x,
              y,
              width: gridSize * 4 - 1.6,
              height: gridSize * 3,
              color: "#1E292A"
            })();
          };
        }();
        var renderGrid = function(row) {
          return function(effect) {
            return function(col) {
              return function __do2() {
                effect();
                var y = gridSize * toNumber(row) - gridSize;
                var x = gridSize * toNumber(col) - gridSize;
                var color = function() {
                  var $679 = mod3(row + col | 0)(2) === 0;
                  if ($679) {
                    return colors.tile1;
                  }
                  ;
                  return colors.tile2;
                }();
                return drawRect(ctx)({
                  x,
                  y,
                  width: gridSize,
                  height: gridSize,
                  color
                })();
              };
            };
          };
        };
        var renderRow = function(effect) {
          return function(row) {
            return foldl12(renderGrid(row))(effect)(range2(1)(cols2));
          };
        };
        var renderEndCondition = function() {
          var queenScreenPos = function() {
            var v = index(getPieces(state3.board)(Queen.value)(false))(0);
            if (v instanceof Nothing) {
              return getScreenPos(new Grid({
                r: -1 | 0,
                c: -1 | 0
              }));
            }
            ;
            if (v instanceof Just) {
              return getScreenPos(getPos(v.value0));
            }
            ;
            throw new Error("Failed pattern match at Main (line 821, column 26 - line 823, column 54): " + [v.constructor.name]);
          }();
          var kingScreenPos = function() {
            var v = index(getPieces(state3.board)(King.value)(false))(0);
            if (v instanceof Nothing) {
              return getScreenPos(new Grid({
                r: -1 | 0,
                c: -1 | 0
              }));
            }
            ;
            if (v instanceof Just) {
              return getScreenPos(getPos(v.value0));
            }
            ;
            throw new Error("Failed pattern match at Main (line 818, column 25 - line 820, column 54): " + [v.constructor.name]);
          }();
          var flagScreenPos = getScreenPos(state3.flagPosition);
          var enemyQueenScreenPos = function() {
            var v = index(getPieces(state3.board)(Queen.value)(true))(0);
            if (v instanceof Nothing) {
              return getScreenPos(new Grid({
                r: -1 | 0,
                c: -1 | 0
              }));
            }
            ;
            if (v instanceof Just) {
              return getScreenPos(getPos(v.value0));
            }
            ;
            throw new Error("Failed pattern match at Main (line 814, column 31 - line 816, column 54): " + [v.constructor.name]);
          }();
          var enemyKingScreenPos = function() {
            var v = index(getPieces(state3.board)(King.value)(true))(0);
            if (v instanceof Nothing) {
              return getScreenPos(new Grid({
                r: -1 | 0,
                c: -1 | 0
              }));
            }
            ;
            if (v instanceof Just) {
              return getScreenPos(getPos(v.value0));
            }
            ;
            throw new Error("Failed pattern match at Main (line 811, column 30 - line 813, column 54): " + [v.constructor.name]);
          }();
          var enemyFlagPos = function() {
            var v = index(getPieces(state3.board)(Flag.value)(true))(0);
            if (v instanceof Nothing) {
              return new Grid({
                r: -1 | 0,
                c: -1 | 0
              });
            }
            ;
            if (v instanceof Just) {
              return getPos(v.value0);
            }
            ;
            throw new Error("Failed pattern match at Main (line 808, column 24 - line 810, column 39): " + [v.constructor.name]);
          }();
          var enemyFlagScreenPos = getScreenPos(enemyFlagPos);
          var condition6 = function() {
            var $690 = eq9(getImportantPiecesMoves(state3.board)([King.value, Queen.value])(new Just(true))(state3.attackedPositions))([]);
            if ($690) {
              return true;
            }
            ;
            return false;
          }();
          var condition5 = function() {
            var $691 = eq9(getImportantPiecesMoves(state3.board)([Flag.value])(new Just(true))(state3.attackedPositions))([]);
            if ($691) {
              return true;
            }
            ;
            return false;
          }();
          var condition4 = function() {
            if (enemyFlagPos instanceof Grid) {
              var $693 = enemyFlagPos.value0.r > 9;
              if ($693) {
                return true;
              }
              ;
              return false;
            }
            ;
            return false;
          }();
          var condition3 = function() {
            var $697 = eq9(getImportantPiecesMoves(state3.board)([King.value, Queen.value])(new Just(false))(state3.attackedPositions))([]);
            if ($697) {
              return true;
            }
            ;
            return false;
          }();
          var condition2 = function() {
            var $698 = eq9(getImportantPiecesMoves(state3.board)([Flag.value])(new Just(false))(state3.attackedPositions))([]);
            if ($698) {
              return true;
            }
            ;
            return false;
          }();
          var condition1 = function() {
            if (state3.flagPosition instanceof Grid) {
              var $700 = state3.flagPosition.value0.r < 3;
              if ($700) {
                return true;
              }
              ;
              return false;
            }
            ;
            return false;
          }();
          var $704 = eq7(state3.status)(End.value);
          if ($704) {
            if (condition1) {
              return drawRect(ctx)({
                x: flagScreenPos.x,
                y: flagScreenPos.y,
                width: gridSize,
                height: gridSize,
                color: colors.available
              });
            }
            ;
            if (condition2) {
              return drawRect(ctx)({
                x: flagScreenPos.x,
                y: flagScreenPos.y,
                width: gridSize,
                height: gridSize,
                color: colors.attacked
              });
            }
            ;
            if (condition3) {
              return function __do2() {
                drawRect(ctx)({
                  x: kingScreenPos.x,
                  y: kingScreenPos.y,
                  width: gridSize,
                  height: gridSize,
                  color: colors.attacked
                })();
                return drawRect(ctx)({
                  x: queenScreenPos.x,
                  y: queenScreenPos.y,
                  width: gridSize,
                  height: gridSize,
                  color: colors.attacked
                })();
              };
            }
            ;
            if (condition4) {
              return drawRect(ctx)({
                x: enemyFlagScreenPos.x,
                y: enemyFlagScreenPos.y,
                width: gridSize,
                height: gridSize,
                color: colors.attacked
              });
            }
            ;
            if (condition5) {
              return drawRect(ctx)({
                x: enemyFlagScreenPos.x,
                y: enemyFlagScreenPos.y,
                width: gridSize,
                height: gridSize,
                color: colors.available
              });
            }
            ;
            if (condition6) {
              return function __do2() {
                drawRect(ctx)({
                  x: enemyKingScreenPos.x,
                  y: enemyKingScreenPos.y,
                  width: gridSize,
                  height: gridSize,
                  color: colors.available
                })();
                return drawRect(ctx)({
                  x: enemyQueenScreenPos.x,
                  y: enemyQueenScreenPos.y,
                  width: gridSize,
                  height: gridSize,
                  color: colors.available
                })();
              };
            }
            ;
            return function __do2() {
              log2("Unknown End Condition")();
              return unit;
            };
          }
          ;
          return pure4(unit);
        }();
        var renderChatMessage = function(effect) {
          return function(v) {
            var y = 20 * toNumber(v.i + 1 | 0);
            var x = gridSize * toNumber(cols2 + 4 | 0) + 12;
            return function __do2() {
              effect();
              return drawTextLeft(ctx)({
                x,
                y,
                color: colors["default"],
                font: "courier",
                size: 12,
                text: v.chat
              })();
            };
          };
        };
        var renderChatLog = function() {
          var prefixIndex = function(i) {
            return function(chat) {
              return {
                i,
                chat
              };
            };
          };
          return foldl12(renderChatMessage)(pure4(unit))(mapWithIndex2(prefixIndex)(state3.chatLog));
        }();
        var renderChatBox = function() {
          var x = gridSize * toNumber(cols2 + 4 | 0) + 12;
          var text5 = function() {
            if (state3.chatState) {
              var $716 = mod3(state3.tickCount)(30) > 15;
              if ($716) {
                return state3.chat + "|";
              }
              ;
              return state3.chat;
            }
            ;
            var $717 = state3.chat === "";
            if ($717) {
              return "Press Enter to Chat";
            }
            ;
            return state3.chat;
          }();
          var color = function() {
            var $718 = state3.chatState || !(state3.chat === "");
            if ($718) {
              return colors["default"];
            }
            ;
            return colors.hand2;
          }();
          return drawTextLeft(ctx)({
            x,
            y: gridSize * toNumber(rows4) - 12,
            color,
            font: "courier",
            size: 12,
            text: text5
          });
        }();
        var renderBoard = foldl12(renderRow)(pure4(unit))(range2(1)(rows4));
        var renderAvailableMoves = foldl12(renderMove(colors.available))(pure4(unit))(state3.availableMoves);
        var renderGame = function __do2() {
          clearCanvas(ctx)({
            width: width8,
            height: height8,
            color: colors.background
          })();
          renderBoard();
          renderHand();
          renderPlayers();
          renderMessage();
          renderRequest();
          renderChatBox();
          renderChatLog();
          renderSelectedPiece();
          renderPreviousMove();
          renderEndCondition();
          renderPieces();
          return renderAvailableMoves();
        };
        return renderGame;
      };
    };
  };
  var addToHand = function(hand) {
    return function(opponent) {
      return function(piece$prime) {
        var lookupSlot = function(prev) {
          return function(next) {
            if (next instanceof Nothing) {
              return prev;
            }
            ;
            if (next instanceof Just) {
              var v = lookup1(next.value0)(hand);
              if (v instanceof Nothing) {
                if (prev instanceof Nothing) {
                  return next;
                }
                ;
                if (prev instanceof Just) {
                  var v1 = lookup1(prev.value0)(hand);
                  if (v1 instanceof Nothing) {
                    var $723 = eq10(prev)(Nothing.value);
                    if ($723) {
                      return next;
                    }
                    ;
                    return prev;
                  }
                  ;
                  if (v1 instanceof Just) {
                    var $724 = eq6(getType(v1.value0))(getType(piece$prime));
                    if ($724) {
                      return prev;
                    }
                    ;
                    return next;
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 1220, column 37 - line 1222, column 85): " + [v1.constructor.name]);
                }
                ;
                throw new Error("Failed pattern match at Main (line 1218, column 28 - line 1222, column 85): " + [prev.constructor.name]);
              }
              ;
              if (v instanceof Just) {
                var $727 = eq6(getType(v.value0))(getType(piece$prime));
                if ($727) {
                  return next;
                }
                ;
                return prev;
              }
              ;
              throw new Error("Failed pattern match at Main (line 1217, column 29 - line 1223, column 77): " + [v.constructor.name]);
            }
            ;
            throw new Error("Failed pattern match at Main (line 1215, column 9 - line 1223, column 77): " + [next.constructor.name]);
          };
        };
        var findSlots = function(o) {
          return function(unitType) {
            return function(c) {
              var v = lookup1(new OnHand(o, c))(hand);
              if (v instanceof Nothing) {
                return new Just(new OnHand(o, c));
              }
              ;
              if (v instanceof Just) {
                var $731 = eq6(getType(v.value0))(unitType);
                if ($731) {
                  return new Just(new OnHand(o, c));
                }
                ;
                return Nothing.value;
              }
              ;
              throw new Error("Failed pattern match at Main (line 1209, column 9 - line 1211, column 83): " + [v.constructor.name]);
            };
          };
        };
        var convertToHand = function(n_piece) {
          return function(pos) {
            if (n_piece instanceof Hand) {
              return new Hand(n_piece.value0);
            }
            ;
            if (n_piece instanceof Board) {
              return new Hand({
                pos,
                count: 1,
                type: n_piece.value0.type,
                opponent: !n_piece.value0.opponent
              });
            }
            ;
            throw new Error("Failed pattern match at Main (line 1203, column 33 - line 1205, column 87): " + [n_piece.constructor.name]);
          };
        };
        var checkHand = function(n_piece) {
          if (n_piece instanceof Hand) {
            return new Just(new Hand({
              pos: n_piece.value0.pos,
              opponent: n_piece.value0.opponent,
              type: n_piece.value0.type,
              count: n_piece.value0.count + 1 | 0
            }));
          }
          ;
          return Nothing.value;
        };
        return function __do2() {
          var piece = function() {
            var v2 = getType(piece$prime);
            if (v2 instanceof Warrior) {
              return changeType(piece$prime)(Human.value);
            }
            ;
            if (v2 instanceof Hobgoblin) {
              return changeType(piece$prime)(Goblin.value);
            }
            ;
            return piece$prime;
          }();
          var availablePos = foldl12(lookupSlot)(Nothing.value)(mapFlipped1(range2(0)(11))(findSlots(opponent)(getType(piece))));
          if (availablePos instanceof Nothing) {
            log2("Error: No available slots in hand")();
            return hand;
          }
          ;
          if (availablePos instanceof Just) {
            var v = lookup1(availablePos.value0)(hand);
            if (v instanceof Nothing) {
              return insert3(availablePos.value0)(convertToHand(piece)(availablePos.value0))(hand);
            }
            ;
            if (v instanceof Just) {
              if (v.value0 instanceof Hand) {
                return update2(checkHand)(availablePos.value0)(hand);
              }
              ;
              return hand;
            }
            ;
            throw new Error("Failed pattern match at Main (line 1191, column 21 - line 1195, column 31): " + [v.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Main (line 1187, column 5 - line 1195, column 31): " + [availablePos.constructor.name]);
        };
      };
    };
  };
  var capturePiece = function(pos1) {
    return function(pos2) {
      return function(state3) {
        var shouldUpgrade = function(opponent) {
          if (pos2 instanceof Grid) {
            var $746 = opponent && pos2.value0.r > 9;
            if ($746) {
              return true;
            }
            ;
            var $747 = !opponent && pos2.value0.r < 3;
            if ($747) {
              return true;
            }
            ;
            return false;
          }
          ;
          return false;
        };
        var v = lookup1(pos1)(state3.board);
        if (v instanceof Nothing) {
          return pure4(state3);
        }
        ;
        if (v instanceof Just) {
          return function __do2() {
            var piece = function() {
              if (v.value0 instanceof Board) {
                if (v.value0.value0.type instanceof ElfRanged) {
                  return new Board({
                    opponent: v.value0.value0.opponent,
                    type: v.value0.value0.type,
                    pos: pos1
                  });
                }
                ;
                if (v.value0.value0.type instanceof Human) {
                  var $754 = shouldUpgrade(isOpponent(v.value0));
                  if ($754) {
                    return new Board({
                      opponent: v.value0.value0.opponent,
                      pos: pos2,
                      type: Warrior.value
                    });
                  }
                  ;
                  return new Board({
                    opponent: v.value0.value0.opponent,
                    type: v.value0.value0.type,
                    pos: pos2
                  });
                }
                ;
                if (v.value0.value0.type instanceof Goblin) {
                  var $755 = shouldUpgrade(isOpponent(v.value0));
                  if ($755) {
                    return new Board({
                      opponent: v.value0.value0.opponent,
                      pos: pos2,
                      type: Hobgoblin.value
                    });
                  }
                  ;
                  return new Board({
                    opponent: v.value0.value0.opponent,
                    type: v.value0.value0.type,
                    pos: pos2
                  });
                }
                ;
                return new Board({
                  opponent: v.value0.value0.opponent,
                  type: v.value0.value0.type,
                  pos: pos2
                });
              }
              ;
              return v.value0;
            }();
            var capturedPiece = lookup1(pos2)(state3.board);
            var hand = function() {
              if (capturedPiece instanceof Nothing) {
                return state3.hand;
              }
              ;
              if (capturedPiece instanceof Just) {
                return addToHand(state3.hand)(isOpponent(piece))(capturedPiece.value0)();
              }
              ;
              throw new Error("Failed pattern match at Main (line 1238, column 21 - line 1240, column 68): " + [capturedPiece.constructor.name]);
            }();
            var board$prime = $$delete2(pos1)($$delete2(pos2)(state3.board));
            var board = insert3(getPos(piece))(piece)(board$prime);
            var $759 = isOpponent(v.value0);
            if ($759) {
              return {
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                previousMove: new Just({
                  from: pos1,
                  to: pos2
                }),
                actions: state3.actions + 1 | 0,
                board,
                hand
              };
            }
            ;
            return {
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              request: state3.request,
              score: state3.score,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              upperCase: state3.upperCase,
              winner: state3.winner,
              previousMove: new Just({
                from: pos1,
                to: pos2
              }),
              selectedPiece: new Just(piece),
              actions: state3.actions - 1 | 0,
              board,
              hand
            };
          };
        }
        ;
        throw new Error("Failed pattern match at Main (line 1227, column 5 - line 1244, column 164): " + [v.constructor.name]);
      };
    };
  };
  var onMouseDown = function(send) {
    return function(v) {
      return function(state$prime) {
        if (eq7(state$prime.status)(Waiting.value)) {
          return pure4(state$prime);
        }
        ;
        if (eq7(state$prime.status)(End.value)) {
          return pure4(state$prime);
        }
        ;
        if (otherwise) {
          var r = floor2(toNumber(v.y - 7 | 0) / gridSize);
          var c = floor2(toNumber(v.x - 7 | 0) / gridSize);
          var p = function() {
            var $764 = c > 15 && r < 3;
            if ($764) {
              return new Just(new OnHand(true, (r * 4 | 0) + (c - 16 | 0) | 0));
            }
            ;
            var $765 = c > 15 && r > 9;
            if ($765) {
              return new Just(new OnHand(false, ((r - 10 | 0) * 4 | 0) + (c - 16 | 0) | 0));
            }
            ;
            var $766 = c < 16;
            if ($766) {
              return new Just(new Grid({
                r,
                c
              }));
            }
            ;
            return Nothing.value;
          }();
          var newState = function() {
            if (p instanceof Nothing) {
              return pure4(state$prime);
            }
            ;
            if (p instanceof Just) {
              var updateSelectedPiece = function(state3) {
                var v1 = lookup1(p.value0)(state3.board);
                if (v1 instanceof Nothing) {
                  var v2 = lookup1(p.value0)(state3.hand);
                  if (v2 instanceof Nothing) {
                    return pure4({
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chat: state3.chat,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      name: state3.name,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      selectedPiece: Nothing.value
                    });
                  }
                  ;
                  if (v2 instanceof Just) {
                    if (state3.selectedPiece instanceof Nothing) {
                      var $771 = isOpponent(v2.value0);
                      if ($771) {
                        return pure4({
                          actions: state3.actions,
                          attackedPositions: state3.attackedPositions,
                          availableMoves: state3.availableMoves,
                          board: state3.board,
                          canSend: state3.canSend,
                          changeName: state3.changeName,
                          chat: state3.chat,
                          chatLog: state3.chatLog,
                          chatState: state3.chatState,
                          flagPosition: state3.flagPosition,
                          hand: state3.hand,
                          lastReceivedMessage: state3.lastReceivedMessage,
                          messages: state3.messages,
                          name: state3.name,
                          nameChanged: state3.nameChanged,
                          opponentName: state3.opponentName,
                          playerId: state3.playerId,
                          previousMove: state3.previousMove,
                          request: state3.request,
                          score: state3.score,
                          status: state3.status,
                          tickCount: state3.tickCount,
                          turn: state3.turn,
                          upperCase: state3.upperCase,
                          winner: state3.winner,
                          selectedPiece: Nothing.value
                        });
                      }
                      ;
                      return pure4({
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        changeName: state3.changeName,
                        chat: state3.chat,
                        chatLog: state3.chatLog,
                        chatState: state3.chatState,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        name: state3.name,
                        nameChanged: state3.nameChanged,
                        opponentName: state3.opponentName,
                        playerId: state3.playerId,
                        previousMove: state3.previousMove,
                        request: state3.request,
                        score: state3.score,
                        status: state3.status,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        upperCase: state3.upperCase,
                        winner: state3.winner,
                        selectedPiece: new Just(v2.value0)
                      });
                    }
                    ;
                    if (state3.selectedPiece instanceof Just) {
                      var $772 = isOpponent(v2.value0);
                      if ($772) {
                        return pure4({
                          actions: state3.actions,
                          attackedPositions: state3.attackedPositions,
                          availableMoves: state3.availableMoves,
                          board: state3.board,
                          canSend: state3.canSend,
                          changeName: state3.changeName,
                          chat: state3.chat,
                          chatLog: state3.chatLog,
                          chatState: state3.chatState,
                          flagPosition: state3.flagPosition,
                          hand: state3.hand,
                          lastReceivedMessage: state3.lastReceivedMessage,
                          messages: state3.messages,
                          name: state3.name,
                          nameChanged: state3.nameChanged,
                          opponentName: state3.opponentName,
                          playerId: state3.playerId,
                          previousMove: state3.previousMove,
                          request: state3.request,
                          score: state3.score,
                          status: state3.status,
                          tickCount: state3.tickCount,
                          turn: state3.turn,
                          upperCase: state3.upperCase,
                          winner: state3.winner,
                          selectedPiece: Nothing.value
                        });
                      }
                      ;
                      var $773 = eq11(state3.selectedPiece.value0)(v2.value0);
                      if ($773) {
                        return pure4({
                          actions: state3.actions,
                          attackedPositions: state3.attackedPositions,
                          availableMoves: state3.availableMoves,
                          board: state3.board,
                          canSend: state3.canSend,
                          changeName: state3.changeName,
                          chat: state3.chat,
                          chatLog: state3.chatLog,
                          chatState: state3.chatState,
                          flagPosition: state3.flagPosition,
                          hand: state3.hand,
                          lastReceivedMessage: state3.lastReceivedMessage,
                          messages: state3.messages,
                          name: state3.name,
                          nameChanged: state3.nameChanged,
                          opponentName: state3.opponentName,
                          playerId: state3.playerId,
                          previousMove: state3.previousMove,
                          request: state3.request,
                          score: state3.score,
                          status: state3.status,
                          tickCount: state3.tickCount,
                          turn: state3.turn,
                          upperCase: state3.upperCase,
                          winner: state3.winner,
                          selectedPiece: Nothing.value
                        });
                      }
                      ;
                      return pure4({
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        changeName: state3.changeName,
                        chat: state3.chat,
                        chatLog: state3.chatLog,
                        chatState: state3.chatState,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        name: state3.name,
                        nameChanged: state3.nameChanged,
                        opponentName: state3.opponentName,
                        playerId: state3.playerId,
                        previousMove: state3.previousMove,
                        request: state3.request,
                        score: state3.score,
                        status: state3.status,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        upperCase: state3.upperCase,
                        winner: state3.winner,
                        selectedPiece: new Just(v2.value0)
                      });
                    }
                    ;
                    throw new Error("Failed pattern match at Main (line 472, column 37 - line 477, column 97): " + [state3.selectedPiece.constructor.name]);
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 469, column 29 - line 477, column 97): " + [v2.constructor.name]);
                }
                ;
                if (v1 instanceof Just) {
                  if (state3.selectedPiece instanceof Nothing) {
                    var $777 = isOpponent(v1.value0);
                    if ($777) {
                      return pure4({
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        changeName: state3.changeName,
                        chat: state3.chat,
                        chatLog: state3.chatLog,
                        chatState: state3.chatState,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        name: state3.name,
                        nameChanged: state3.nameChanged,
                        opponentName: state3.opponentName,
                        playerId: state3.playerId,
                        previousMove: state3.previousMove,
                        request: state3.request,
                        score: state3.score,
                        status: state3.status,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        upperCase: state3.upperCase,
                        winner: state3.winner,
                        selectedPiece: Nothing.value
                      });
                    }
                    ;
                    return pure4({
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chat: state3.chat,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      name: state3.name,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      selectedPiece: new Just(v1.value0)
                    });
                  }
                  ;
                  if (state3.selectedPiece instanceof Just) {
                    var $778 = isOpponent(v1.value0);
                    if ($778) {
                      return pure4({
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        changeName: state3.changeName,
                        chat: state3.chat,
                        chatLog: state3.chatLog,
                        chatState: state3.chatState,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        name: state3.name,
                        nameChanged: state3.nameChanged,
                        opponentName: state3.opponentName,
                        playerId: state3.playerId,
                        previousMove: state3.previousMove,
                        request: state3.request,
                        score: state3.score,
                        status: state3.status,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        upperCase: state3.upperCase,
                        winner: state3.winner,
                        selectedPiece: Nothing.value
                      });
                    }
                    ;
                    var $779 = eq11(state3.selectedPiece.value0)(v1.value0);
                    if ($779) {
                      return pure4({
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        changeName: state3.changeName,
                        chat: state3.chat,
                        chatLog: state3.chatLog,
                        chatState: state3.chatState,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        name: state3.name,
                        nameChanged: state3.nameChanged,
                        opponentName: state3.opponentName,
                        playerId: state3.playerId,
                        previousMove: state3.previousMove,
                        request: state3.request,
                        score: state3.score,
                        status: state3.status,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        upperCase: state3.upperCase,
                        winner: state3.winner,
                        selectedPiece: Nothing.value
                      });
                    }
                    ;
                    return pure4({
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chat: state3.chat,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      name: state3.name,
                      nameChanged: state3.nameChanged,
                      opponentName: state3.opponentName,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      selectedPiece: new Just(v1.value0)
                    });
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 479, column 29 - line 484, column 90): " + [state3.selectedPiece.constructor.name]);
                }
                ;
                throw new Error("Failed pattern match at Main (line 467, column 21 - line 484, column 90): " + [v1.constructor.name]);
              };
              var updateMove = function(state3) {
                var $782 = !state3.turn;
                if ($782) {
                  return pure4(state3);
                }
                ;
                if (state3.selectedPiece instanceof Nothing) {
                  return pure4(state3);
                }
                ;
                if (state3.selectedPiece instanceof Just) {
                  var $784 = !any2(function(z) {
                    return eq8(p.value0)(z);
                  })(state3.availableMoves);
                  if ($784) {
                    return pure4(state3);
                  }
                  ;
                  var v1 = lookup1(p.value0)(state3.board);
                  if (v1 instanceof Nothing) {
                    if (state3.canSend) {
                      return function __do2() {
                        send("Action: Move " + (show5(getPos(state3.selectedPiece.value0)) + (" to " + show5(p.value0))))();
                        return movePiece(getPos(state3.selectedPiece.value0))(p.value0)(state3)();
                      };
                    }
                    ;
                    return function __do2() {
                      log2("Waiting if message is received...")();
                      return state3;
                    };
                  }
                  ;
                  if (v1 instanceof Just) {
                    if (state3.canSend) {
                      return function __do2() {
                        send("Action: Capture " + (show5(getPos(state3.selectedPiece.value0)) + (" to " + show5(p.value0))))();
                        return capturePiece(getPos(state3.selectedPiece.value0))(p.value0)(state3)();
                      };
                    }
                    ;
                    return function __do2() {
                      log2("Waiting if message is received...")();
                      return state3;
                    };
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 496, column 38 - line 512, column 59): " + [v1.constructor.name]);
                }
                ;
                throw new Error("Failed pattern match at Main (line 490, column 25 - line 512, column 59): " + [state3.selectedPiece.constructor.name]);
              };
              return bind3(bind3(pure4(state$prime))(updateMove))(updateSelectedPiece);
            }
            ;
            throw new Error("Failed pattern match at Main (line 457, column 9 - line 512, column 59): " + [p.constructor.name]);
          }();
          return newState;
        }
        ;
        throw new Error("Failed pattern match at Main (line 443, column 1 - line 443, column 98): " + [send.constructor.name, v.constructor.name, state$prime.constructor.name]);
      };
    };
  };
  var onTick = function(send) {
    return function(state$prime) {
      var updateWinner = function(state3) {
        var pieces = getImportantPiecesMoves(state3.board)([King.value, Queen.value])(new Just(false))(state3.attackedPositions);
        var getFlagMoves = function() {
          var v = lookup1(state3.flagPosition)(state3.board);
          if (v instanceof Nothing) {
            return [];
          }
          ;
          if (v instanceof Just) {
            return getAvailableMoves(state3.board)(state3.attackedPositions)(v.value0);
          }
          ;
          throw new Error("Failed pattern match at Main (line 433, column 28 - line 435, column 88): " + [v.constructor.name]);
        }();
        var $795 = eq7(state3.status)(Waiting.value) || eq7(state3.status)(End.value);
        if ($795) {
          return pure4(state3);
        }
        ;
        if (state3.flagPosition instanceof Grid) {
          var $797 = state3.flagPosition.value0.r < 3;
          if ($797) {
            return function __do2() {
              send("Win")();
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                selectedPiece: state3.selectedPiece,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: new Just(true),
                score: {
                  opponent: state3.score.opponent,
                  me: state3.score.me + 1 | 0
                },
                status: End.value
              };
            };
          }
          ;
          var $798 = eq9(pieces)([]) || eq9(getFlagMoves)([]);
          if ($798) {
            return function __do2() {
              send("Lose")();
              return {
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                playerId: state3.playerId,
                previousMove: state3.previousMove,
                request: state3.request,
                selectedPiece: state3.selectedPiece,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: new Just(false),
                score: {
                  me: state3.score.me,
                  opponent: state3.score.opponent + 1 | 0
                },
                status: End.value
              };
            };
          }
          ;
          return pure4(state3);
        }
        ;
        return pure4(state3);
      };
      var updateTurn = function(state3) {
        var $802 = state3.actions === 0 && state3.turn;
        if ($802) {
          return pure4({
            attackedPositions: state3.attackedPositions,
            availableMoves: state3.availableMoves,
            board: state3.board,
            canSend: state3.canSend,
            changeName: state3.changeName,
            chat: state3.chat,
            chatLog: state3.chatLog,
            chatState: state3.chatState,
            flagPosition: state3.flagPosition,
            hand: state3.hand,
            lastReceivedMessage: state3.lastReceivedMessage,
            messages: state3.messages,
            name: state3.name,
            nameChanged: state3.nameChanged,
            opponentName: state3.opponentName,
            playerId: state3.playerId,
            previousMove: state3.previousMove,
            request: state3.request,
            score: state3.score,
            selectedPiece: state3.selectedPiece,
            status: state3.status,
            tickCount: state3.tickCount,
            upperCase: state3.upperCase,
            winner: state3.winner,
            actions: -3 | 0,
            turn: false
          });
        }
        ;
        var $803 = state3.actions === 0 && !state3.turn;
        if ($803) {
          return pure4({
            attackedPositions: state3.attackedPositions,
            availableMoves: state3.availableMoves,
            board: state3.board,
            canSend: state3.canSend,
            changeName: state3.changeName,
            chat: state3.chat,
            chatLog: state3.chatLog,
            chatState: state3.chatState,
            flagPosition: state3.flagPosition,
            hand: state3.hand,
            lastReceivedMessage: state3.lastReceivedMessage,
            messages: state3.messages,
            name: state3.name,
            nameChanged: state3.nameChanged,
            opponentName: state3.opponentName,
            playerId: state3.playerId,
            previousMove: state3.previousMove,
            request: state3.request,
            score: state3.score,
            selectedPiece: state3.selectedPiece,
            status: state3.status,
            tickCount: state3.tickCount,
            upperCase: state3.upperCase,
            winner: state3.winner,
            actions: 3,
            turn: true
          });
        }
        ;
        return pure4(state3);
      };
      var updateTickCount = function(state3) {
        return {
          actions: state3.actions,
          name: state3.name,
          chat: state3.chat,
          upperCase: state3.upperCase,
          chatLog: state3.chatLog,
          chatState: state3.chatState,
          opponentName: state3.opponentName,
          changeName: state3.changeName,
          nameChanged: state3.nameChanged,
          canSend: state3.canSend,
          score: state3.score,
          turn: state3.turn,
          playerId: state3.playerId,
          previousMove: state3.previousMove,
          board: state3.board,
          hand: state3.hand,
          selectedPiece: state3.selectedPiece,
          availableMoves: state3.availableMoves,
          flagPosition: state3.flagPosition,
          attackedPositions: state3.attackedPositions,
          status: state3.status,
          winner: state3.winner,
          messages: state3.messages,
          request: state3.request,
          lastReceivedMessage: state3.lastReceivedMessage,
          tickCount: state3.tickCount + 1 | 0
        };
      };
      var updateFlagPosition = function(state3) {
        var isPos = function(prev) {
          return function(next) {
            if (prev instanceof Nothing) {
              if (next instanceof Nothing) {
                return Nothing.value;
              }
              ;
              if (next instanceof Just) {
                return new Just(getPos(next.value0));
              }
              ;
              throw new Error("Failed pattern match at Main (line 414, column 24 - line 416, column 42): " + [next.constructor.name]);
            }
            ;
            if (prev instanceof Just) {
              return new Just(prev.value0);
            }
            ;
            throw new Error("Failed pattern match at Main (line 413, column 27 - line 417, column 33): " + [prev.constructor.name]);
          };
        };
        var isFlag = function(piece) {
          var $808 = eq6(getType(piece))(Flag.value) && !isOpponent(piece);
          if ($808) {
            return new Just(piece);
          }
          ;
          return Nothing.value;
        };
        var maybeFlagPosition = foldl3(isPos)(Nothing.value)(mapFlipped2(state3.board)(isFlag));
        var flagPosition = function() {
          if (maybeFlagPosition instanceof Nothing) {
            return new Grid({
              r: -1 | 0,
              c: -1 | 0
            });
          }
          ;
          if (maybeFlagPosition instanceof Just) {
            return maybeFlagPosition.value0;
          }
          ;
          throw new Error("Failed pattern match at Main (line 405, column 24 - line 407, column 28): " + [maybeFlagPosition.constructor.name]);
        }();
        return {
          tickCount: state3.tickCount,
          actions: state3.actions,
          name: state3.name,
          chat: state3.chat,
          upperCase: state3.upperCase,
          chatLog: state3.chatLog,
          chatState: state3.chatState,
          opponentName: state3.opponentName,
          changeName: state3.changeName,
          nameChanged: state3.nameChanged,
          canSend: state3.canSend,
          score: state3.score,
          turn: state3.turn,
          playerId: state3.playerId,
          previousMove: state3.previousMove,
          board: state3.board,
          hand: state3.hand,
          selectedPiece: state3.selectedPiece,
          availableMoves: state3.availableMoves,
          attackedPositions: state3.attackedPositions,
          status: state3.status,
          winner: state3.winner,
          messages: state3.messages,
          request: state3.request,
          lastReceivedMessage: state3.lastReceivedMessage,
          flagPosition
        };
      };
      var updateAvailableMoves = function(state3) {
        if (state3.selectedPiece instanceof Nothing) {
          return {
            tickCount: state3.tickCount,
            actions: state3.actions,
            name: state3.name,
            chat: state3.chat,
            upperCase: state3.upperCase,
            chatLog: state3.chatLog,
            chatState: state3.chatState,
            opponentName: state3.opponentName,
            changeName: state3.changeName,
            nameChanged: state3.nameChanged,
            canSend: state3.canSend,
            score: state3.score,
            turn: state3.turn,
            playerId: state3.playerId,
            previousMove: state3.previousMove,
            board: state3.board,
            hand: state3.hand,
            selectedPiece: state3.selectedPiece,
            flagPosition: state3.flagPosition,
            attackedPositions: state3.attackedPositions,
            status: state3.status,
            winner: state3.winner,
            messages: state3.messages,
            request: state3.request,
            lastReceivedMessage: state3.lastReceivedMessage,
            availableMoves: []
          };
        }
        ;
        if (state3.selectedPiece instanceof Just) {
          return {
            tickCount: state3.tickCount,
            actions: state3.actions,
            name: state3.name,
            chat: state3.chat,
            upperCase: state3.upperCase,
            chatLog: state3.chatLog,
            chatState: state3.chatState,
            opponentName: state3.opponentName,
            changeName: state3.changeName,
            nameChanged: state3.nameChanged,
            canSend: state3.canSend,
            score: state3.score,
            turn: state3.turn,
            playerId: state3.playerId,
            previousMove: state3.previousMove,
            board: state3.board,
            hand: state3.hand,
            selectedPiece: state3.selectedPiece,
            flagPosition: state3.flagPosition,
            attackedPositions: state3.attackedPositions,
            status: state3.status,
            winner: state3.winner,
            messages: state3.messages,
            request: state3.request,
            lastReceivedMessage: state3.lastReceivedMessage,
            availableMoves: getAvailableMoves(state3.board)(state3.attackedPositions)(state3.selectedPiece.value0)
          };
        }
        ;
        throw new Error("Failed pattern match at Main (line 386, column 9 - line 388, column 113): " + [state3.selectedPiece.constructor.name]);
      };
      var updateAttackedPositions = function(state3) {
        var opponentPieces = mapFlipped1(filter(isOpponent)(foldl3(append13)([])(mapFlipped2(state3.board)(pieceToArray))))(flipPiece);
        var allPieces = mapFlipped1(mapFlipped1(foldl3(append13)([])(mapFlipped2(state3.board)(pieceToArray)))(flipPiece))(toOpponent);
        var pieces = foldl12(pieceToMap)(empty3)(allPieces);
        var attackedPositions = mapFlipped1(foldl12(append13)([])(mapFlipped1(opponentPieces)(getAvailableMoves(pieces)([]))))(flipPosition);
        return {
          tickCount: state3.tickCount,
          actions: state3.actions,
          name: state3.name,
          chat: state3.chat,
          upperCase: state3.upperCase,
          chatLog: state3.chatLog,
          chatState: state3.chatState,
          opponentName: state3.opponentName,
          changeName: state3.changeName,
          nameChanged: state3.nameChanged,
          canSend: state3.canSend,
          score: state3.score,
          turn: state3.turn,
          playerId: state3.playerId,
          previousMove: state3.previousMove,
          board: state3.board,
          hand: state3.hand,
          selectedPiece: state3.selectedPiece,
          availableMoves: state3.availableMoves,
          flagPosition: state3.flagPosition,
          status: state3.status,
          winner: state3.winner,
          messages: state3.messages,
          request: state3.request,
          lastReceivedMessage: state3.lastReceivedMessage,
          attackedPositions
        };
      };
      var receiveMessage = function(state3) {
        if (state3.lastReceivedMessage instanceof Nothing) {
          return pure4(state3);
        }
        ;
        if (state3.lastReceivedMessage instanceof Just) {
          return function __do2() {
            log2(show42(state3.messages))();
            if (state3.playerId instanceof Nothing) {
              return state3;
            }
            ;
            return {
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              request: state3.request,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              upperCase: state3.upperCase,
              winner: state3.winner,
              lastReceivedMessage: Nothing.value
            };
          };
        }
        ;
        throw new Error("Failed pattern match at Main (line 216, column 9 - line 222, column 70): " + [state3.lastReceivedMessage.constructor.name]);
      };
      var processRequest = function(message2) {
        return function(state3) {
          return function __do2() {
            log2(show1(message2))();
            var $816 = contains("Accept")(message2.payload);
            if ($816) {
              if (state3.request instanceof Nothing) {
                log2("No requests to be accepted")();
                return state3;
              }
              ;
              if (state3.request instanceof Just) {
                log2("Accepting Request: " + show1(state3.request.value0))();
                var $818 = eq5(message2.playerId)(state3.request.value0.playerId);
                if ($818) {
                  return state3;
                }
                ;
                var $819 = contains("New Match")(state3.request.value0.payload);
                if ($819) {
                  log2("New Match Started")();
                  return defaultNewMatch(state3);
                }
                ;
                log2("Unknown Request: " + show1(message2))();
                return {
                  actions: state3.actions,
                  attackedPositions: state3.attackedPositions,
                  availableMoves: state3.availableMoves,
                  board: state3.board,
                  canSend: state3.canSend,
                  changeName: state3.changeName,
                  chat: state3.chat,
                  chatLog: state3.chatLog,
                  chatState: state3.chatState,
                  flagPosition: state3.flagPosition,
                  hand: state3.hand,
                  lastReceivedMessage: state3.lastReceivedMessage,
                  messages: state3.messages,
                  name: state3.name,
                  nameChanged: state3.nameChanged,
                  opponentName: state3.opponentName,
                  playerId: state3.playerId,
                  previousMove: state3.previousMove,
                  score: state3.score,
                  selectedPiece: state3.selectedPiece,
                  status: state3.status,
                  tickCount: state3.tickCount,
                  turn: state3.turn,
                  upperCase: state3.upperCase,
                  winner: state3.winner,
                  request: Nothing.value
                };
              }
              ;
              throw new Error("Failed pattern match at Main (line 274, column 13 - line 286, column 57): " + [state3.request.constructor.name]);
            }
            ;
            var $821 = contains("Decline")(message2.payload);
            if ($821) {
              if (state3.request instanceof Nothing) {
                log2("No request to be declined")();
                return state3;
              }
              ;
              if (state3.request instanceof Just) {
                log2("Declining Request: " + show1(state3.request.value0))();
                return {
                  actions: state3.actions,
                  attackedPositions: state3.attackedPositions,
                  availableMoves: state3.availableMoves,
                  board: state3.board,
                  canSend: state3.canSend,
                  changeName: state3.changeName,
                  chat: state3.chat,
                  chatLog: state3.chatLog,
                  chatState: state3.chatState,
                  flagPosition: state3.flagPosition,
                  hand: state3.hand,
                  lastReceivedMessage: state3.lastReceivedMessage,
                  messages: state3.messages,
                  name: state3.name,
                  nameChanged: state3.nameChanged,
                  opponentName: state3.opponentName,
                  playerId: state3.playerId,
                  previousMove: state3.previousMove,
                  score: state3.score,
                  selectedPiece: state3.selectedPiece,
                  status: state3.status,
                  tickCount: state3.tickCount,
                  turn: state3.turn,
                  upperCase: state3.upperCase,
                  winner: state3.winner,
                  request: Nothing.value
                };
              }
              ;
              throw new Error("Failed pattern match at Main (line 288, column 13 - line 294, column 53): " + [state3.request.constructor.name]);
            }
            ;
            log2("Added Request: " + show1(message2))();
            return {
              actions: state3.actions,
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              changeName: state3.changeName,
              chat: state3.chat,
              chatLog: state3.chatLog,
              chatState: state3.chatState,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              name: state3.name,
              nameChanged: state3.nameChanged,
              opponentName: state3.opponentName,
              playerId: state3.playerId,
              previousMove: state3.previousMove,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              status: state3.status,
              tickCount: state3.tickCount,
              turn: state3.turn,
              upperCase: state3.upperCase,
              winner: state3.winner,
              request: new Just(message2)
            };
          };
        };
      };
      var processName = function(message2) {
        return function(state3) {
          var $824 = contains("Name:")(message2.payload);
          if ($824) {
            return function __do2() {
              var maybeName = stripPrefix("Name: ")(message2.payload);
              if (state3.playerId instanceof Nothing) {
                return state3;
              }
              ;
              if (state3.playerId instanceof Just) {
                var $826 = eq5(message2.playerId)(state3.playerId.value0) && !state3.nameChanged;
                if ($826) {
                  send("Name: " + state3.name)();
                  return state3;
                }
                ;
                var $827 = !eq5(message2.playerId)(state3.playerId.value0);
                if ($827) {
                  if (maybeName instanceof Nothing) {
                    return state3;
                  }
                  ;
                  if (maybeName instanceof Just) {
                    send("Name Changed")();
                    return {
                      actions: state3.actions,
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      changeName: state3.changeName,
                      chat: state3.chat,
                      chatLog: state3.chatLog,
                      chatState: state3.chatState,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      name: state3.name,
                      nameChanged: state3.nameChanged,
                      playerId: state3.playerId,
                      previousMove: state3.previousMove,
                      request: state3.request,
                      score: state3.score,
                      selectedPiece: state3.selectedPiece,
                      status: state3.status,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      upperCase: state3.upperCase,
                      winner: state3.winner,
                      opponentName: maybeName.value0
                    };
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 335, column 69 - line 339, column 63): " + [maybeName.constructor.name]);
                }
                ;
                return state3;
              }
              ;
              throw new Error("Failed pattern match at Main (line 329, column 13 - line 340, column 36): " + [state3.playerId.constructor.name]);
            };
          }
          ;
          return function __do2() {
            log2("Unknown Name: " + show1(message2))();
            return state3;
          };
        };
      };
      var processChat = function(message2) {
        return function(state3) {
          var $831 = contains("Chat: Send")(message2.payload);
          if ($831) {
            return function __do2() {
              var maybeChat = stripPrefix("Chat: Send ")(message2.payload);
              if (state3.playerId instanceof Nothing) {
                return state3;
              }
              ;
              if (state3.playerId instanceof Just) {
                var $833 = eq5(message2.playerId)(state3.playerId.value0);
                if ($833) {
                  var $834 = length(state3.chatLog) > 30;
                  if ($834) {
                    var maybeChatLog = uncons(state3.chatLog);
                    if (maybeChatLog instanceof Nothing) {
                      return state3;
                    }
                    ;
                    if (maybeChatLog instanceof Just) {
                      return {
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        changeName: state3.changeName,
                        chatState: state3.chatState,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        name: state3.name,
                        nameChanged: state3.nameChanged,
                        opponentName: state3.opponentName,
                        playerId: state3.playerId,
                        previousMove: state3.previousMove,
                        request: state3.request,
                        score: state3.score,
                        selectedPiece: state3.selectedPiece,
                        status: state3.status,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        upperCase: state3.upperCase,
                        winner: state3.winner,
                        chat: "",
                        chatLog: append13(maybeChatLog.value0.tail)([state3.name + (": " + state3.chat)])
                      };
                    }
                    ;
                    throw new Error("Failed pattern match at Main (line 309, column 29 - line 311, column 141): " + [maybeChatLog.constructor.name]);
                  }
                  ;
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    name: state3.name,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    chat: "",
                    chatLog: append13(state3.chatLog)([state3.name + (": " + state3.chat)])
                  };
                }
                ;
                if (maybeChat instanceof Nothing) {
                  return state3;
                }
                ;
                if (maybeChat instanceof Just) {
                  var $840 = length(state3.chatLog) > 30;
                  if ($840) {
                    var maybeChatLog = uncons(state3.chatLog);
                    if (maybeChatLog instanceof Nothing) {
                      return state3;
                    }
                    ;
                    if (maybeChatLog instanceof Just) {
                      return {
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        changeName: state3.changeName,
                        chat: state3.chat,
                        chatState: state3.chatState,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        name: state3.name,
                        nameChanged: state3.nameChanged,
                        opponentName: state3.opponentName,
                        playerId: state3.playerId,
                        previousMove: state3.previousMove,
                        request: state3.request,
                        score: state3.score,
                        selectedPiece: state3.selectedPiece,
                        status: state3.status,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        upperCase: state3.upperCase,
                        winner: state3.winner,
                        chatLog: append13(maybeChatLog.value0.tail)([state3.opponentName + (": " + maybeChat.value0)])
                      };
                    }
                    ;
                    throw new Error("Failed pattern match at Main (line 317, column 33 - line 319, column 134): " + [maybeChatLog.constructor.name]);
                  }
                  ;
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chat: state3.chat,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    name: state3.name,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    chatLog: append13(state3.chatLog)([state3.opponentName + (": " + maybeChat.value0)])
                  };
                }
                ;
                throw new Error("Failed pattern match at Main (line 313, column 26 - line 320, column 114): " + [maybeChat.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Main (line 303, column 13 - line 320, column 114): " + [state3.playerId.constructor.name]);
            };
          }
          ;
          return function __do2() {
            log2("Unknown Chat: " + show1(message2))();
            return state3;
          };
        };
      };
      var processAction = function(message2) {
        return function(state3) {
          var $847 = contains("Move")(message2.payload);
          if ($847) {
            return function __do2() {
              var maybeMove = stripPrefix("Action: Move ")(message2.payload);
              if (maybeMove instanceof Nothing) {
                return state3;
              }
              ;
              if (maybeMove instanceof Just) {
                var tokens = split(" to ")(maybeMove.value0);
                var pos1 = tokensToPos(tokens)(0)();
                var pos2 = tokensToPos(tokens)(1)();
                return movePiece(flipPosition(pos1))(flipPosition(pos2))(state3)();
              }
              ;
              throw new Error("Failed pattern match at Main (line 244, column 13 - line 251, column 76): " + [maybeMove.constructor.name]);
            };
          }
          ;
          var $850 = contains("Capture")(message2.payload);
          if ($850) {
            return function __do2() {
              var maybeCapture = stripPrefix("Action: Capture ")(message2.payload);
              if (maybeCapture instanceof Nothing) {
                return state3;
              }
              ;
              if (maybeCapture instanceof Just) {
                var tokens = split(" to ")(maybeCapture.value0);
                var pos1 = tokensToPos(tokens)(0)();
                var pos2 = tokensToPos(tokens)(1)();
                return capturePiece(flipPosition(pos1))(flipPosition(pos2))(state3)();
              }
              ;
              throw new Error("Failed pattern match at Main (line 256, column 13 - line 263, column 79): " + [maybeCapture.constructor.name]);
            };
          }
          ;
          return function __do2() {
            log2("Unknown Action: " + show1(message2))();
            return state3;
          };
        };
      };
      var processMessages = function(effect) {
        return function(message2) {
          return function __do2() {
            var state3 = effect();
            log2("processing " + message2.payload)();
            if (state3.playerId instanceof Nothing) {
              return state3;
            }
            ;
            if (state3.playerId instanceof Just) {
              var state1 = function() {
                var $854 = eq7(state3.status)(NotConnected.value);
                if ($854) {
                  return {
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chat: state3.chat,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    name: state3.name,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    tickCount: state3.tickCount,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    actions: -3 | 0,
                    turn: false,
                    status: Waiting.value
                  };
                }
                ;
                return state3;
              }();
              var state22 = function() {
                var $855 = !eq5(state3.playerId.value0)(message2.playerId);
                if ($855) {
                  return state1;
                }
                ;
                if (message2.payload === "Start") {
                  return {
                    attackedPositions: state1.attackedPositions,
                    availableMoves: state1.availableMoves,
                    board: state1.board,
                    canSend: state1.canSend,
                    changeName: state1.changeName,
                    chat: state1.chat,
                    chatLog: state1.chatLog,
                    chatState: state1.chatState,
                    flagPosition: state1.flagPosition,
                    hand: state1.hand,
                    lastReceivedMessage: state1.lastReceivedMessage,
                    messages: state1.messages,
                    name: state1.name,
                    nameChanged: state1.nameChanged,
                    opponentName: state1.opponentName,
                    playerId: state1.playerId,
                    previousMove: state1.previousMove,
                    request: state1.request,
                    score: state1.score,
                    selectedPiece: state1.selectedPiece,
                    tickCount: state1.tickCount,
                    upperCase: state1.upperCase,
                    winner: state1.winner,
                    actions: 3,
                    turn: true,
                    status: InGame.value
                  };
                }
                ;
                var $857 = contains("Request: ")(message2.payload);
                if ($857) {
                  return processRequest(message2)(state1)();
                }
                ;
                var $858 = contains("Chat: ")(message2.payload);
                if ($858) {
                  return processChat(message2)(state1)();
                }
                ;
                var $859 = contains("Name: ")(message2.payload);
                if ($859) {
                  return processName(message2)(state1)();
                }
                ;
                return state1;
              }();
              var state32 = function() {
                var $860 = eq5(state3.playerId.value0)(message2.playerId);
                if ($860) {
                  return state22;
                }
                ;
                if (message2.payload === "Join") {
                  send("Start")();
                  return state22;
                }
                ;
                if (message2.payload === "Name Changed") {
                  return {
                    actions: state3.actions,
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chat: state3.chat,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    name: state3.name,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    status: state3.status,
                    tickCount: state3.tickCount,
                    turn: state3.turn,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    nameChanged: true
                  };
                }
                ;
                if (message2.payload === "Start") {
                  return {
                    attackedPositions: state3.attackedPositions,
                    availableMoves: state3.availableMoves,
                    board: state3.board,
                    canSend: state3.canSend,
                    changeName: state3.changeName,
                    chat: state3.chat,
                    chatLog: state3.chatLog,
                    chatState: state3.chatState,
                    flagPosition: state3.flagPosition,
                    hand: state3.hand,
                    lastReceivedMessage: state3.lastReceivedMessage,
                    messages: state3.messages,
                    name: state3.name,
                    nameChanged: state3.nameChanged,
                    opponentName: state3.opponentName,
                    playerId: state3.playerId,
                    previousMove: state3.previousMove,
                    request: state3.request,
                    score: state3.score,
                    selectedPiece: state3.selectedPiece,
                    tickCount: state3.tickCount,
                    upperCase: state3.upperCase,
                    winner: state3.winner,
                    actions: -3 | 0,
                    turn: false,
                    status: InGame.value
                  };
                }
                ;
                if (message2.payload === "Lose") {
                  return {
                    actions: state22.actions,
                    attackedPositions: state22.attackedPositions,
                    availableMoves: state22.availableMoves,
                    board: state22.board,
                    canSend: state22.canSend,
                    changeName: state22.changeName,
                    chat: state22.chat,
                    chatLog: state22.chatLog,
                    chatState: state22.chatState,
                    flagPosition: state22.flagPosition,
                    hand: state22.hand,
                    lastReceivedMessage: state22.lastReceivedMessage,
                    messages: state22.messages,
                    name: state22.name,
                    nameChanged: state22.nameChanged,
                    opponentName: state22.opponentName,
                    playerId: state22.playerId,
                    previousMove: state22.previousMove,
                    request: state22.request,
                    selectedPiece: state22.selectedPiece,
                    tickCount: state22.tickCount,
                    turn: state22.turn,
                    upperCase: state22.upperCase,
                    winner: new Just(true),
                    score: {
                      opponent: state3.score.opponent,
                      me: state3.score.me + 1 | 0
                    },
                    status: End.value
                  };
                }
                ;
                if (message2.payload === "Win") {
                  return {
                    actions: state22.actions,
                    attackedPositions: state22.attackedPositions,
                    availableMoves: state22.availableMoves,
                    board: state22.board,
                    canSend: state22.canSend,
                    changeName: state22.changeName,
                    chat: state22.chat,
                    chatLog: state22.chatLog,
                    chatState: state22.chatState,
                    flagPosition: state22.flagPosition,
                    hand: state22.hand,
                    lastReceivedMessage: state22.lastReceivedMessage,
                    messages: state22.messages,
                    name: state22.name,
                    nameChanged: state22.nameChanged,
                    opponentName: state22.opponentName,
                    playerId: state22.playerId,
                    previousMove: state22.previousMove,
                    request: state22.request,
                    selectedPiece: state22.selectedPiece,
                    tickCount: state22.tickCount,
                    turn: state22.turn,
                    upperCase: state22.upperCase,
                    winner: new Just(false),
                    score: {
                      me: state3.score.me,
                      opponent: state3.score.opponent + 1 | 0
                    },
                    status: End.value
                  };
                }
                ;
                var $862 = contains("Action: ")(message2.payload);
                if ($862) {
                  return processAction(message2)(state22)();
                }
                ;
                var $863 = contains("Request: ")(message2.payload);
                if ($863) {
                  return processRequest(message2)(state22)();
                }
                ;
                var $864 = contains("Chat: ")(message2.payload);
                if ($864) {
                  return processChat(message2)(state22)();
                }
                ;
                var $865 = contains("Name: ")(message2.payload);
                if ($865) {
                  return processName(message2)(state22)();
                }
                ;
                log2("Unknown Message: " + show1(message2))();
                return state22;
              }();
              return {
                actions: state32.actions,
                attackedPositions: state32.attackedPositions,
                availableMoves: state32.availableMoves,
                board: state32.board,
                canSend: state32.canSend,
                changeName: state32.changeName,
                chat: state32.chat,
                chatLog: state32.chatLog,
                chatState: state32.chatState,
                flagPosition: state32.flagPosition,
                hand: state32.hand,
                lastReceivedMessage: state32.lastReceivedMessage,
                name: state32.name,
                nameChanged: state32.nameChanged,
                opponentName: state32.opponentName,
                playerId: state32.playerId,
                previousMove: state32.previousMove,
                request: state32.request,
                score: state32.score,
                selectedPiece: state32.selectedPiece,
                status: state32.status,
                tickCount: state32.tickCount,
                turn: state32.turn,
                upperCase: state32.upperCase,
                winner: state32.winner,
                messages: filter(messageFilter(message2))(state32.messages)
              };
            }
            ;
            throw new Error("Failed pattern match at Main (line 349, column 9 - line 376, column 90): " + [state3.playerId.constructor.name]);
          };
        };
      };
      var readMessages = function(state3) {
        if (state3.playerId instanceof Nothing) {
          if (state3.lastReceivedMessage instanceof Nothing) {
            return function __do2() {
              send("Join")();
              return state3;
            };
          }
          ;
          if (state3.lastReceivedMessage instanceof Just) {
            if (state3.lastReceivedMessage.value0.payload === "Join") {
              return pure4({
                actions: state3.actions,
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                board: state3.board,
                canSend: state3.canSend,
                changeName: state3.changeName,
                chat: state3.chat,
                chatLog: state3.chatLog,
                chatState: state3.chatState,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                name: state3.name,
                nameChanged: state3.nameChanged,
                opponentName: state3.opponentName,
                previousMove: state3.previousMove,
                request: state3.request,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                status: state3.status,
                tickCount: state3.tickCount,
                turn: state3.turn,
                upperCase: state3.upperCase,
                winner: state3.winner,
                playerId: new Just(state3.lastReceivedMessage.value0.playerId),
                messages: filter(messageFilter(state3.lastReceivedMessage.value0))(state3.messages)
              });
            }
            ;
            return pure4(state3);
          }
          ;
          throw new Error("Failed pattern match at Main (line 228, column 17 - line 234, column 40): " + [state3.lastReceivedMessage.constructor.name]);
        }
        ;
        if (state3.playerId instanceof Just) {
          return function __do2() {
            (function() {
              var $871 = state3.nameChanged === false;
              if ($871) {
                return send("Name: " + state3.name)();
              }
              ;
              return unit;
            })();
            return foldl12(processMessages)(pure4(state3))(state3.messages)();
          };
        }
        ;
        throw new Error("Failed pattern match at Main (line 226, column 9 - line 238, column 66): " + [state3.playerId.constructor.name]);
      };
      var newState = mapFlipped22(mapFlipped22(mapFlipped22(bind3(bind3(mapFlipped22(bind3(bind3(pure4(state$prime))(receiveMessage))(readMessages))(updateFlagPosition))(updateWinner))(updateTurn))(updateAvailableMoves))(updateAttackedPositions))(updateTickCount);
      return newState;
    };
  };
  var main = /* @__PURE__ */ startNetworkGame({
    initialState,
    onTick,
    onMouseDown,
    onKeyDown,
    onKeyUp,
    onRender,
    onMessage: onMessage2,
    fps,
    width: width8,
    height: height8,
    ipAddress: "localhost",
    port: 443,
    imagePaths: ["images/King.png", "images/Queen.png", "images/Flag.png", "images/Flag1.png", "images/Flag2.png", "images/Prince.png", "images/Wizard.png", "images/Dragon.png", "images/Orc.png", "images/Dwarf.png", "images/ElfRanged.png", "images/ElfMelee.png", "images/Human.png", "images/Goblin.png", "images/Warrior.png", "images/Hobgoblin.png"]
  });

  // <stdin>
  main();
})();
