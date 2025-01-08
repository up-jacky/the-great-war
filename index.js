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
    var map6 = map(dictApply.Functor0());
    return function(a) {
      return function(b) {
        return apply1(map6($$const(identity2))(a))(b);
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

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqBooleanImpl = refEq;
  var eqIntImpl = refEq;
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

  // output/Data.Array/index.js
  var slice = /* @__PURE__ */ runFn3(sliceImpl);
  var range2 = /* @__PURE__ */ runFn2(rangeImpl);
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
  var splitAt = function(i) {
    return function(s) {
      return { before: s.substring(0, i), after: s.substring(i) };
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
      return function __do() {
        var ws = create(addr)([])();
        var avPlayerId = empty2();
        var avSendQueue = $$new2([])();
        var avRecvQueue = $$new2([])();
        var send = function(payload) {
          return function __do2() {
            var maybePlayerId = tryRead(avPlayerId)();
            if (maybePlayerId instanceof Nothing) {
              log2("Added to send queue: " + payload)();
              var doWhenFilled = function(v) {
                if (v instanceof Left) {
                  return pure2(unit);
                }
                ;
                if (v instanceof Right) {
                  return function __do3() {
                    $$void2(put(append12(v.value0)([payload]))(avSendQueue)(function(v1) {
                      return pure2(unit);
                    }))();
                    return unit;
                  };
                }
                ;
                throw new Error("Failed pattern match at CS150241Project.Networking (line 84, column 13 - line 84, column 46): " + [v.constructor.name]);
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
            throw new Error("Failed pattern match at CS150241Project.Networking (line 79, column 7 - line 94, column 39): " + [maybePlayerId.constructor.name]);
          };
        };
        var recv = function __do2() {
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
          throw new Error("Failed pattern match at CS150241Project.Networking (line 108, column 7 - line 112, column 25): " + [maybeRecvQueue.constructor.name]);
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
            throw new Error("Failed pattern match at CS150241Project.Networking (line 99, column 9 - line 99, column 51): " + [v.constructor.name]);
          };
          return function __do2() {
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
              return function __do2() {
                $$void2(put(append12(v.value0)([new Just(message2)]))(avRecvQueue)(function(v1) {
                  return pure2(unit);
                }))();
                return unit;
              };
            }
            ;
            throw new Error("Failed pattern match at CS150241Project.Networking (line 117, column 9 - line 117, column 42): " + [v.constructor.name]);
          };
          return function __do2() {
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
                return function __do2() {
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
                  throw new Error("Failed pattern match at CS150241Project.Networking (line 141, column 21 - line 148, column 47): " + [maybePlayerId.constructor.name]);
                };
              }
              ;
              throw new Error("Failed pattern match at CS150241Project.Networking (line 136, column 17 - line 148, column 47): " + [v2.constructor.name]);
            }
            ;
            throw new Error("Failed pattern match at CS150241Project.Networking (line 133, column 13 - line 148, column 47): " + [v1.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at CS150241Project.Networking (line 128, column 5 - line 148, column 47): " + [v.constructor.name]);
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
    return function __do() {
      var w = windowImpl();
      return $$void3(setTimeout2(div2(1e3)(engine.fps))($$void3(flip(requestAnimationFrame)(w)(function __do2() {
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
              return function __do3() {
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
    return function __do() {
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
            return function __do2() {
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
          return function __do2() {
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
          return function __do2() {
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
          return function __do2() {
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
      return function __do() {
        setFillStyle(ctx)(color)();
        return stroke(ctx)();
      };
    };
  };
  var startCircle = function(ctx) {
    return function(v) {
      return function __do() {
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
      return function __do() {
        setFillStyle(ctx)(color)();
        return fill(ctx)();
      };
    };
  };
  var drawText = function(ctx) {
    return function(v) {
      var style = show3(v.size) + ("px " + v.font);
      return function __do() {
        setFont(ctx)(style)();
        setFillStyle(ctx)(v.color)();
        var metrics = measureText(ctx)(v.text)();
        return fillText(ctx)(v.text)(v.x - metrics.width / 2)(v.y)();
      };
    };
  };
  var drawRectOutline = function(ctx) {
    return function(v) {
      return function __do() {
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
      return function __do() {
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
      return function __do() {
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
      return function __do() {
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

  // output/Main/index.js
  var show4 = /* @__PURE__ */ show(showInt);
  var genericShowConstructor3 = /* @__PURE__ */ genericShowConstructor(genericShowArgsNoArguments);
  var compare2 = /* @__PURE__ */ compare(ordInt);
  var compare12 = /* @__PURE__ */ compare(ordBoolean);
  var pure4 = /* @__PURE__ */ pure(applicativeEffect);
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
  var bind3 = /* @__PURE__ */ bind(bindEffect);
  var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorArray);
  var foldl3 = /* @__PURE__ */ foldl(foldableArray);
  var mod2 = /* @__PURE__ */ mod(euclideanRingInt);
  var show22 = /* @__PURE__ */ show(showPlayerId);
  var show32 = /* @__PURE__ */ show(/* @__PURE__ */ showMaybe(showPlayerId));
  var lookup2 = /* @__PURE__ */ lookup(ordString);
  var foldl12 = /* @__PURE__ */ foldl(foldableList);
  var eq3 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqBoolean));
  var not1 = /* @__PURE__ */ not(/* @__PURE__ */ heytingAlgebraFunction(heytingAlgebraBoolean));
  var foldl22 = /* @__PURE__ */ foldl(foldableMap);
  var mapFlipped1 = /* @__PURE__ */ mapFlipped(functorMap);
  var map5 = /* @__PURE__ */ map(functorArray);
  var show42 = /* @__PURE__ */ show(/* @__PURE__ */ showArray(showRecord2));
  var eq4 = /* @__PURE__ */ eq(eqPlayerId);
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
  var HumanUpgraded = /* @__PURE__ */ function() {
    function HumanUpgraded2() {
    }
    ;
    HumanUpgraded2.value = new HumanUpgraded2();
    return HumanUpgraded2;
  }();
  var GoblinUpgraded = /* @__PURE__ */ function() {
    function GoblinUpgraded2() {
    }
    ;
    GoblinUpgraded2.value = new GoblinUpgraded2();
    return GoblinUpgraded2;
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
      throw new Error("Failed pattern match at Main (line 119, column 1 - line 121, column 65): " + [v.constructor.name]);
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
        return HumanUpgraded.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr)))))))))))) {
        return GoblinUpgraded.value;
      }
      ;
      throw new Error("Failed pattern match at Main (line 114, column 1 - line 114, column 35): " + [x.constructor.name]);
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
      if (x instanceof HumanUpgraded) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value)))))))))))));
      }
      ;
      if (x instanceof GoblinUpgraded) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(NoArguments.value)))))))))))));
      }
      ;
      throw new Error("Failed pattern match at Main (line 114, column 1 - line 114, column 35): " + [x.constructor.name]);
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
        return "HumanUpgraded";
      }
    }))(/* @__PURE__ */ genericShowConstructor3({
      reflectSymbol: function() {
        return "GoblinUpgraded";
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
        if (x instanceof HumanUpgraded && y instanceof HumanUpgraded) {
          return true;
        }
        ;
        if (x instanceof GoblinUpgraded && y instanceof GoblinUpgraded) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var eq5 = /* @__PURE__ */ eq(eqUnitType);
  var eqState = {
    eq: function(x) {
      return function(y) {
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
  var eq6 = /* @__PURE__ */ eq(eqState);
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
  var eq7 = /* @__PURE__ */ eq(eqPosition);
  var eq8 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqPosition));
  var eq9 = /* @__PURE__ */ eq(/* @__PURE__ */ eqArray(eqPosition));
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
          return x.value0.opponent === y.value0.opponent && eq7(x.value0.pos)(y.value0.pos) && eq5(x.value0.type)(y.value0.type);
        }
        ;
        if (x instanceof Hand && y instanceof Hand) {
          return x.value0.count === y.value0.count && x.value0.opponent === y.value0.opponent && eq7(x.value0.pos)(y.value0.pos) && eq5(x.value0.type)(y.value0.type);
        }
        ;
        return false;
      };
    }
  };
  var eq10 = /* @__PURE__ */ eq(eqPiece);
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
    throw new Error("Failed pattern match at Main (line 715, column 5 - line 717, column 47): " + [piece.constructor.name]);
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
    throw new Error("Failed pattern match at Main (line 720, column 18 - line 722, column 42): " + [piece.constructor.name]);
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
        throw new Error("Failed pattern match at Main (line 823, column 19 - line 825, column 24): " + [v2.constructor.name]);
      }
      ;
      throw new Error("Failed pattern match at Main (line 821, column 9 - line 825, column 24): " + [v.constructor.name]);
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
        throw new Error("Failed pattern match at Main (line 828, column 19 - line 830, column 24): " + [v2.constructor.name]);
      }
      ;
      throw new Error("Failed pattern match at Main (line 826, column 9 - line 830, column 24): " + [v.constructor.name]);
    }();
    var $442 = c === (-1 | 0);
    if ($442) {
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
        return function __do() {
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
      throw new Error("Failed pattern match at Main (line 770, column 5 - line 775, column 34): " + [v.constructor.name]);
    };
  };
  var rows4 = 13;
  var pieceToArray = function(piece) {
    return [piece];
  };
  var onMessage2 = function(v) {
    return function(message2) {
      return function(state3) {
        return function __do() {
          log2("Received message: " + show1(message2))();
          return {
            actions: state3.actions,
            attackedPositions: state3.attackedPositions,
            availableMoves: state3.availableMoves,
            board: state3.board,
            canSend: state3.canSend,
            flagPosition: state3.flagPosition,
            hand: state3.hand,
            playerId: state3.playerId,
            score: state3.score,
            selectedPiece: state3.selectedPiece,
            state: state3.state,
            tickCount: state3.tickCount,
            turn: state3.turn,
            winner: state3.winner,
            lastReceivedMessage: new Just(message2),
            messages: append13(state3.messages)([message2])
          };
        };
      };
    };
  };
  var onKeyUp = function(v) {
    return function(v1) {
      return function(state3) {
        return pure4(state3);
      };
    };
  };
  var onKeyDown = function(send) {
    return function(key2) {
      return function(state3) {
        return function __do() {
          (function() {
            if (key2 === "KeyR") {
              return send("Request New Match")();
            }
            ;
            if (key2 === "KeyY") {
              return send("Request Accept")();
            }
            ;
            if (key2 === "KeyN") {
              return send("Request Decline")();
            }
            ;
            return unit;
          })();
          return state3;
        };
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
      var $451 = show1(message2) === show1(message$prime);
      if ($451) {
        return false;
      }
      ;
      return true;
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
    throw new Error("Failed pattern match at Main (line 750, column 5 - line 752, column 29): " + [piece.constructor.name]);
  };
  var movePiece = function(pos1) {
    return function(pos2) {
      return function(state3) {
        var shouldUpgrade = function(opponent) {
          if (pos2 instanceof Grid) {
            var $456 = opponent && pos2.value0.r > 9;
            if ($456) {
              return true;
            }
            ;
            var $457 = !opponent && pos2.value0.r < 3;
            if ($457) {
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
            var $462 = (piece.value0.count - 1 | 0) === 0;
            if ($462) {
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
            return function __do() {
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
              var $468 = isOpponent(v1.value0);
              if ($468) {
                return {
                  attackedPositions: state3.attackedPositions,
                  availableMoves: state3.availableMoves,
                  canSend: state3.canSend,
                  flagPosition: state3.flagPosition,
                  lastReceivedMessage: state3.lastReceivedMessage,
                  messages: state3.messages,
                  playerId: state3.playerId,
                  score: state3.score,
                  selectedPiece: state3.selectedPiece,
                  state: state3.state,
                  tickCount: state3.tickCount,
                  turn: state3.turn,
                  winner: state3.winner,
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
                flagPosition: state3.flagPosition,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                playerId: state3.playerId,
                score: state3.score,
                state: state3.state,
                tickCount: state3.tickCount,
                turn: state3.turn,
                winner: state3.winner,
                selectedPiece: new Just(piece),
                actions: state3.actions - 1 | 0,
                board,
                hand
              };
            };
          }
          ;
          throw new Error("Failed pattern match at Main (line 951, column 20 - line 960, column 122): " + [v1.constructor.name]);
        }
        ;
        if (v instanceof Just) {
          return function __do() {
            var piece = function() {
              if (v.value0 instanceof Board) {
                if (v.value0.value0.type instanceof Human) {
                  var $472 = shouldUpgrade(isOpponent(v.value0));
                  if ($472) {
                    return new Board({
                      opponent: v.value0.value0.opponent,
                      pos: pos2,
                      type: HumanUpgraded.value
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
                  var $473 = shouldUpgrade(isOpponent(v.value0));
                  if ($473) {
                    return new Board({
                      opponent: v.value0.value0.opponent,
                      pos: pos2,
                      type: GoblinUpgraded.value
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
            var $475 = isOpponent(v.value0);
            if ($475) {
              return {
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                canSend: state3.canSend,
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                playerId: state3.playerId,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                state: state3.state,
                tickCount: state3.tickCount,
                turn: state3.turn,
                winner: state3.winner,
                actions: state3.actions + 1 | 0,
                board
              };
            }
            ;
            return {
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              canSend: state3.canSend,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              playerId: state3.playerId,
              score: state3.score,
              state: state3.state,
              tickCount: state3.tickCount,
              turn: state3.turn,
              winner: state3.winner,
              selectedPiece: new Just(piece),
              actions: state3.actions - 1 | 0,
              board
            };
          };
        }
        ;
        throw new Error("Failed pattern match at Main (line 950, column 5 - line 971, column 108): " + [v.constructor.name]);
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
    throw new Error("Failed pattern match at Main (line 744, column 5 - line 746, column 25): " + [piece.constructor.name]);
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
    throw new Error("Failed pattern match at Main (line 738, column 5 - line 740, column 24): " + [piece.constructor.name]);
  };
  var isOccupied = function(pos) {
    return function(piece) {
      var $483 = eq7(getPos(piece))(pos);
      if ($483) {
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
    throw new Error("Failed pattern match at Main (line 726, column 5 - line 728, column 33): " + [position2.constructor.name]);
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
    throw new Error("Failed pattern match at Main (line 732, column 5 - line 734, column 56): " + [piece.constructor.name]);
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
    var opponentPieces = mapFlipped2(mapFlipped2(ownedPieces)(toOpponent))(flipPiece);
    var allPieces = append13(ownedPieces)(opponentPieces);
    return foldl3(pieceToMap)(empty3)(allPieces);
  }();
  var initialState = /* @__PURE__ */ function() {
    return pure4({
      tickCount: 0,
      actions: -3 | 0,
      canSend: true,
      score: 0,
      turn: false,
      playerId: Nothing.value,
      board: defaultBoard,
      hand: empty3,
      selectedPiece: Nothing.value,
      availableMoves: [],
      attackedPositions: [],
      flagPosition: new Grid({
        r: 11,
        c: 8
      }),
      state: Waiting.value,
      winner: Nothing.value,
      messages: [],
      lastReceivedMessage: Nothing.value
    });
  }();
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
      throw new Error("Failed pattern match at Main (line 798, column 9 - line 802, column 94): " + [piecePos.constructor.name]);
    }();
    var x = function() {
      if (piecePos instanceof Grid) {
        return gridSize * toNumber(piecePos.value0.c);
      }
      ;
      if (piecePos instanceof OnHand) {
        return gridSize * toNumber(cols2) + gridSize * toNumber(mod2(piecePos.value1)(4));
      }
      ;
      throw new Error("Failed pattern match at Main (line 795, column 9 - line 797, column 93): " + [piecePos.constructor.name]);
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
      var $509 = pos.value0.r < 0 || (pos.value0.r >= rows4 || (pos.value0.c < 0 || pos.value0.c >= cols2));
      if ($509) {
        return true;
      }
      ;
      return false;
    }
    ;
    throw new Error("Failed pattern match at Main (line 779, column 5 - line 783, column 23): " + [pos.constructor.name]);
  };
  var isValid = function(board) {
    return function(pos) {
      var $511 = any3(isOccupied(pos))(board) || isOutOfBounds(pos);
      if ($511) {
        return false;
      }
      ;
      return true;
    };
  };
  var width8 = /* @__PURE__ */ function() {
    return gridSize * (toNumber(cols2) + 4);
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
  var onRender = function(images2) {
    return function(ctx) {
      return function(state3) {
        var renderWaiting = function() {
          var renderWaitingText = function() {
            var y = height8 / 2;
            var x = width8 / 2;
            var text5 = function() {
              if (state3.playerId instanceof Nothing) {
                return "Not Connected to a Server";
              }
              ;
              if (state3.playerId instanceof Just) {
                var $513 = mod2(state3.tickCount)(60) > 40;
                if ($513) {
                  return "Loading...";
                }
                ;
                var $514 = mod2(state3.tickCount)(60) > 20;
                if ($514) {
                  return "Loading..";
                }
                ;
                return "Loading.";
              }
              ;
              throw new Error("Failed pattern match at Main (line 453, column 17 - line 458, column 40): " + [state3.playerId.constructor.name]);
            }();
            return drawText(ctx)({
              x,
              y,
              text: text5,
              color: colors["default"],
              font: "courier",
              size: 36
            });
          }();
          var renderPlayerText = function() {
            var y = height8 / 2 + 0.25 * height8;
            var x = width8 / 2;
            var text5 = function() {
              if (state3.playerId instanceof Nothing) {
                return "";
              }
              ;
              if (state3.playerId instanceof Just) {
                var v = show22(state3.playerId.value0);
                if (v === "Player1") {
                  return "You are player 1.";
                }
                ;
                if (v === "Player2") {
                  return "You are player 2.";
                }
                ;
                return "Unknown PlayerId";
              }
              ;
              throw new Error("Failed pattern match at Main (line 468, column 17 - line 474, column 52): " + [state3.playerId.constructor.name]);
            }();
            return drawText(ctx)({
              x,
              y,
              text: text5,
              color: colors["default"],
              font: "courier",
              size: 24
            });
          }();
          return function __do() {
            clearCanvas(ctx)({
              width: width8,
              height: height8,
              color: colors.background
            })();
            renderWaitingText();
            return renderPlayerText();
          };
        }();
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
          throw new Error("Failed pattern match at Main (line 547, column 9 - line 555, column 32): " + [state3.selectedPiece.constructor.name]);
        }();
        var renderPiece = function(effect) {
          return function(piece) {
            var playerId = function() {
              var $521 = show32(state3.playerId) === "(Just Player1)";
              if ($521) {
                return "1";
              }
              ;
              var $522 = show32(state3.playerId) === "(Just Player2)";
              if ($522) {
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
                var $524 = pieceTeam && playerId === "2";
                if ($524) {
                  return "images/Flag1.png";
                }
                ;
                var $525 = pieceTeam && playerId === "1";
                if ($525) {
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
                return colors["default"];
              }
              ;
              if (state3.playerId instanceof Just) {
                var v = show22(state3.playerId.value0);
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
                return colors["default"];
              }
              ;
              throw new Error("Failed pattern match at Main (line 610, column 13 - line 616, column 44): " + [state3.playerId.constructor.name]);
            }();
            return function __do() {
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
                throw new Error("Failed pattern match at Main (line 588, column 9 - line 590, column 84): " + [v.constructor.name]);
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
              throw new Error("Failed pattern match at Main (line 591, column 9 - line 593, column 150): " + [piece.constructor.name]);
            };
          };
        };
        var renderPieces = function __do() {
          foldl12(renderPiece)(pure4(unit))(values(state3.board))();
          return foldl12(renderPiece)(pure4(unit))(values(state3.hand))();
        };
        var renderMove = function(color) {
          return function(effect) {
            return function(piecePos) {
              var screenPos = getScreenPos(piecePos);
              var x = screenPos.x + gridSize / 2;
              var y = screenPos.y + gridSize / 2;
              var radius = gridSize / 8;
              return function __do() {
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
          var x = gridSize * (toNumber(cols2) + 2);
          var text5 = function() {
            if (state3.state instanceof Waiting) {
              return "";
            }
            ;
            if (state3.state instanceof InGame) {
              if (state3.turn) {
                return "Your turn! " + (show4(3 - state3.actions | 0) + "/3");
              }
              ;
              return "Opponent's turn! " + (show4(3 + state3.actions | 0) + "/3");
            }
            ;
            if (state3.state instanceof End) {
              var $539 = eq3(state3.winner)(new Just(true));
              if ($539) {
                return "You win!";
              }
              ;
              return "You lose!";
            }
            ;
            throw new Error("Failed pattern match at Main (line 502, column 16 - line 506, column 81): " + [state3.state.constructor.name]);
          }();
          var color = function() {
            if (state3.state instanceof End) {
              var $541 = eq3(state3.winner)(new Just(true));
              if ($541) {
                return colors.available;
              }
              ;
              return colors.attacked;
            }
            ;
            return "white";
          }();
          return function __do() {
            drawText(ctx)({
              x,
              y: y - 16,
              color,
              font: "courier",
              size: 14,
              text: "The Great War"
            })();
            drawText(ctx)({
              x,
              y: y - 4,
              color,
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
              return function __do() {
                effect();
                var y = gridSize * toNumber(row) - gridSize;
                var x = gridSize * toNumber(col) - gridSize;
                var color = function() {
                  var $542 = mod2(row + col | 0)(2) === 0;
                  if ($542) {
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
            return foldl3(renderGridHand(row))(effect)(range2(cols2 + 1 | 0)(cols2 + 4 | 0));
          };
        };
        var renderHand = function() {
          var y = gridSize * 10 + 0.8;
          var x = gridSize * 16 + 0.8;
          return function __do() {
            foldl3(renderRowHand)(pure4(unit))(append13(range2(1)(3))(range2(11)(rows4)))();
            drawRectOutline(ctx)({
              x,
              y: 0,
              width: gridSize * 4 - 1.6,
              height: gridSize * 3,
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
              return function __do() {
                effect();
                var y = gridSize * toNumber(row) - gridSize;
                var x = gridSize * toNumber(col) - gridSize;
                var color = function() {
                  var $543 = mod2(row + col | 0)(2) === 0;
                  if ($543) {
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
            return foldl3(renderGrid(row))(effect)(range2(1)(cols2));
          };
        };
        var renderBoard = foldl3(renderRow)(pure4(unit))(range2(1)(rows4));
        var renderAvailableMoves = foldl3(renderMove(colors.available))(pure4(unit))(state3.availableMoves);
        var renderGame = function __do() {
          clearCanvas(ctx)({
            width: width8,
            height: height8,
            color: colors.background
          })();
          renderBoard();
          renderHand();
          renderMessage();
          renderSelectedPiece();
          renderPieces();
          return renderAvailableMoves();
        };
        if (state3.state instanceof Waiting) {
          return renderWaiting;
        }
        ;
        return renderGame;
      };
    };
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
      throw new Error("Failed pattern match at Main (line 764, column 28 - line 766, column 42): " + [piece.constructor.name]);
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
      throw new Error("Failed pattern match at Main (line 806, column 5 - line 813, column 38): " + [v.constructor.name]);
    };
  };
  var filterSettings = function(board) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(pos) {
            var $551 = isOutOfBounds(pos);
            if ($551) {
              return false;
            }
            ;
            var $552 = canCapture(board)(pos);
            if ($552) {
              return a;
            }
            ;
            var $553 = any3(isOccupied(pos))(board);
            if ($553) {
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
    return function(includeFlag) {
      return function(includeOpponent) {
        return function(attackedPositions) {
          var isImportantPiece = function(opponent) {
            return function(piece) {
              var $554 = isOpponent(piece) === opponent;
              if ($554) {
                if (includeFlag) {
                  var v = getType(piece);
                  if (v instanceof King) {
                    return true;
                  }
                  ;
                  if (v instanceof Queen) {
                    return true;
                  }
                  ;
                  if (v instanceof Flag) {
                    return true;
                  }
                  ;
                  return false;
                }
                ;
                var v = getType(piece);
                if (v instanceof King) {
                  return true;
                }
                ;
                if (v instanceof Queen) {
                  return true;
                }
                ;
                return false;
              }
              ;
              return false;
            };
          };
          var alliedPieces = mapFlipped2(filter(not1(isOpponent))(foldl22(append13)([])(mapFlipped1(board)(pieceToArray))))(toOpponent);
          var alliedImportantPieces = foldl3(append13)([])(mapFlipped2(filter(isImportantPiece(false))(foldl22(append13)([])(mapFlipped1(board)(pieceToArray))))(getAvailableMoves(board)(attackedPositions)));
          var allPieces = mapFlipped2(foldl22(append13)([])(mapFlipped1(board)(pieceToArray)))(toOpponent);
          var board$prime = foldl3(pieceToMap)(empty3)(allPieces);
          var attackedPositions$prime = foldl3(append13)([])(mapFlipped2(alliedPieces)(getAvailableMoves(board$prime)([])));
          var opponentImportantPieces = foldl3(append13)([])(mapFlipped2(mapFlipped2(filter(isImportantPiece(true))(foldl22(append13)([])(mapFlipped1(board)(pieceToArray))))(toAllied))(getAvailableMoves(board$prime)(attackedPositions$prime)));
          if (includeOpponent) {
            return append13(alliedImportantPieces)(opponentImportantPieces);
          }
          ;
          return alliedImportantPieces;
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
            return foldl3(append13)([])(map5(rowColPos(r))(range2(0)(cols2 - 1 | 0)));
          };
          var hindersMove = function(moves) {
            return function(dropPos) {
              var $560 = any2(function(x) {
                return eq7(x)(dropPos);
              })(moves);
              if ($560) {
                return false;
              }
              ;
              return true;
            };
          };
          var makeDropMoves = filter(hindersMove(getImportantPiecesMoves(board)(true)(true)(attackedPositions)))(filter(isValid(board))(foldl3(append13)([])(mapFlipped2(range2(3)(rows4 - 1 | 0))(rowPos))));
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
                        var $564 = canCapture(board)(pos);
                        if ($564) {
                          return [pos];
                        }
                        ;
                        return [];
                      }();
                      var $565 = max6 > 0;
                      if ($565) {
                        var $566 = isValid(board)(pos);
                        if ($566) {
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
                var $568 = canCapture(board)(pos);
                if ($568) {
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
              return foldl3(append13)([])(map5(capturePos)(moves));
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
              var $570 = eq7(pos)(atk);
              if ($570) {
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
                  return filter(settings)(foldl3(append13)([])(map5(steady(true)(size3)(0)([]))(forward2)));
                }
                ;
                if (movement === 2) {
                  return filter(settings)(foldl3(append13)([])(map5(steady(true)(size3)(1)([]))(backward)));
                }
                ;
                if (movement === 3) {
                  return filter(settings)(foldl3(append13)([])(map5(steady(true)(size3)(2)([]))(leftSide)));
                }
                ;
                if (movement === 4) {
                  return filter(settings)(foldl3(append13)([])(map5(steady(true)(size3)(3)([]))(rightSide)));
                }
                ;
                return [];
              };
            };
          };
          var upgraded = append13(block(defaultSettings)(1)(1))(filter(defaultSettings)([down, left, right]));
          var attackedPos = function(pos) {
            var $572 = any2(isAttacked(pos))(attackedPositions);
            if ($572) {
              return false;
            }
            ;
            return true;
          };
          var v1 = getType(piece);
          if (v1 instanceof King) {
            var $574 = isOpponent(piece);
            if ($574) {
              return [];
            }
            ;
            return filter(attackedPos)(block(filterSettings(board)(false)(false)(true))(1)(0));
          }
          ;
          if (v1 instanceof Queen) {
            var $575 = isOpponent(piece);
            if ($575) {
              return [];
            }
            ;
            return filter(attackedPos)(append13(line(false)(rows4))(diagonal(false)(rows4)));
          }
          ;
          if (v1 instanceof Flag) {
            var $576 = isOpponent(piece);
            if ($576) {
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
            var $577 = isOpponent(piece);
            if ($577) {
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
          if (v1 instanceof HumanUpgraded) {
            return upgraded;
          }
          ;
          if (v1 instanceof GoblinUpgraded) {
            return upgraded;
          }
          ;
          throw new Error("Failed pattern match at Main (line 1000, column 13 - line 1014, column 43): " + [v1.constructor.name]);
        }
        ;
        throw new Error("Failed pattern match at Main (line 988, column 5 - line 1099, column 72): " + [v.constructor.name]);
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
                    var $585 = eq8(prev)(Nothing.value);
                    if ($585) {
                      return next;
                    }
                    ;
                    return prev;
                  }
                  ;
                  if (v1 instanceof Just) {
                    var $586 = eq5(getType(v1.value0))(getType(piece$prime));
                    if ($586) {
                      return prev;
                    }
                    ;
                    return next;
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 914, column 37 - line 916, column 85): " + [v1.constructor.name]);
                }
                ;
                throw new Error("Failed pattern match at Main (line 912, column 28 - line 916, column 85): " + [prev.constructor.name]);
              }
              ;
              if (v instanceof Just) {
                var $589 = eq5(getType(v.value0))(getType(piece$prime));
                if ($589) {
                  return next;
                }
                ;
                return prev;
              }
              ;
              throw new Error("Failed pattern match at Main (line 911, column 29 - line 917, column 77): " + [v.constructor.name]);
            }
            ;
            throw new Error("Failed pattern match at Main (line 909, column 9 - line 917, column 77): " + [next.constructor.name]);
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
                var $593 = eq5(getType(v.value0))(unitType);
                if ($593) {
                  return new Just(new OnHand(o, c));
                }
                ;
                return Nothing.value;
              }
              ;
              throw new Error("Failed pattern match at Main (line 903, column 9 - line 905, column 83): " + [v.constructor.name]);
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
            throw new Error("Failed pattern match at Main (line 897, column 33 - line 899, column 87): " + [n_piece.constructor.name]);
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
        return function __do() {
          var piece = function() {
            var v2 = getType(piece$prime);
            if (v2 instanceof HumanUpgraded) {
              return changeType(piece$prime)(Human.value);
            }
            ;
            if (v2 instanceof GoblinUpgraded) {
              return changeType(piece$prime)(Goblin.value);
            }
            ;
            return piece$prime;
          }();
          var availablePos = foldl3(lookupSlot)(Nothing.value)(mapFlipped2(range2(0)(11))(findSlots(opponent)(getType(piece))));
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
            throw new Error("Failed pattern match at Main (line 885, column 21 - line 889, column 31): " + [v.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Main (line 881, column 5 - line 889, column 31): " + [availablePos.constructor.name]);
        };
      };
    };
  };
  var capturePiece = function(pos1) {
    return function(pos2) {
      return function(state3) {
        var shouldUpgrade = function(opponent) {
          if (pos2 instanceof Grid) {
            var $608 = opponent && pos2.value0.r > 9;
            if ($608) {
              return true;
            }
            ;
            var $609 = !opponent && pos2.value0.r < 3;
            if ($609) {
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
          return function __do() {
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
                  var $616 = shouldUpgrade(isOpponent(v.value0));
                  if ($616) {
                    return new Board({
                      opponent: v.value0.value0.opponent,
                      pos: pos2,
                      type: HumanUpgraded.value
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
                  var $617 = shouldUpgrade(isOpponent(v.value0));
                  if ($617) {
                    return new Board({
                      opponent: v.value0.value0.opponent,
                      pos: pos2,
                      type: GoblinUpgraded.value
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
              throw new Error("Failed pattern match at Main (line 932, column 21 - line 934, column 68): " + [capturedPiece.constructor.name]);
            }();
            var board$prime = $$delete2(pos1)($$delete2(pos2)(state3.board));
            var board = insert3(getPos(piece))(piece)(board$prime);
            var $621 = isOpponent(v.value0);
            if ($621) {
              return {
                attackedPositions: state3.attackedPositions,
                availableMoves: state3.availableMoves,
                canSend: state3.canSend,
                flagPosition: state3.flagPosition,
                lastReceivedMessage: state3.lastReceivedMessage,
                messages: state3.messages,
                playerId: state3.playerId,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                state: state3.state,
                tickCount: state3.tickCount,
                turn: state3.turn,
                winner: state3.winner,
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
              flagPosition: state3.flagPosition,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              playerId: state3.playerId,
              score: state3.score,
              state: state3.state,
              tickCount: state3.tickCount,
              turn: state3.turn,
              winner: state3.winner,
              selectedPiece: new Just(piece),
              actions: state3.actions - 1 | 0,
              board,
              hand
            };
          };
        }
        ;
        throw new Error("Failed pattern match at Main (line 921, column 5 - line 938, column 118): " + [v.constructor.name]);
      };
    };
  };
  var onMouseDown = function(send) {
    return function(v) {
      return function(state$prime) {
        if (eq6(state$prime.state)(Waiting.value)) {
          return pure4(state$prime);
        }
        ;
        if (eq6(state$prime.state)(End.value)) {
          return pure4(state$prime);
        }
        ;
        if (otherwise) {
          var r = floor2(toNumber(v.y - 7 | 0) / gridSize);
          var c = floor2(toNumber(v.x - 7 | 0) / gridSize);
          var p = function() {
            var $626 = c > 15 && r < 3;
            if ($626) {
              return new Just(new OnHand(true, (r * 4 | 0) + (c - 16 | 0) | 0));
            }
            ;
            var $627 = c > 15 && r > 9;
            if ($627) {
              return new Just(new OnHand(false, ((r - 10 | 0) * 4 | 0) + (c - 16 | 0) | 0));
            }
            ;
            var $628 = c < 16;
            if ($628) {
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
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      playerId: state3.playerId,
                      score: state3.score,
                      state: state3.state,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      winner: state3.winner,
                      selectedPiece: Nothing.value
                    });
                  }
                  ;
                  if (v2 instanceof Just) {
                    if (state3.selectedPiece instanceof Nothing) {
                      var $633 = isOpponent(v2.value0);
                      if ($633) {
                        return pure4({
                          actions: state3.actions,
                          attackedPositions: state3.attackedPositions,
                          availableMoves: state3.availableMoves,
                          board: state3.board,
                          canSend: state3.canSend,
                          flagPosition: state3.flagPosition,
                          hand: state3.hand,
                          lastReceivedMessage: state3.lastReceivedMessage,
                          messages: state3.messages,
                          playerId: state3.playerId,
                          score: state3.score,
                          state: state3.state,
                          tickCount: state3.tickCount,
                          turn: state3.turn,
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
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        playerId: state3.playerId,
                        score: state3.score,
                        state: state3.state,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        winner: state3.winner,
                        selectedPiece: new Just(v2.value0)
                      });
                    }
                    ;
                    if (state3.selectedPiece instanceof Just) {
                      var $634 = isOpponent(v2.value0);
                      if ($634) {
                        return pure4({
                          actions: state3.actions,
                          attackedPositions: state3.attackedPositions,
                          availableMoves: state3.availableMoves,
                          board: state3.board,
                          canSend: state3.canSend,
                          flagPosition: state3.flagPosition,
                          hand: state3.hand,
                          lastReceivedMessage: state3.lastReceivedMessage,
                          messages: state3.messages,
                          playerId: state3.playerId,
                          score: state3.score,
                          state: state3.state,
                          tickCount: state3.tickCount,
                          turn: state3.turn,
                          winner: state3.winner,
                          selectedPiece: Nothing.value
                        });
                      }
                      ;
                      var $635 = eq10(state3.selectedPiece.value0)(v2.value0);
                      if ($635) {
                        return pure4({
                          actions: state3.actions,
                          attackedPositions: state3.attackedPositions,
                          availableMoves: state3.availableMoves,
                          board: state3.board,
                          canSend: state3.canSend,
                          flagPosition: state3.flagPosition,
                          hand: state3.hand,
                          lastReceivedMessage: state3.lastReceivedMessage,
                          messages: state3.messages,
                          playerId: state3.playerId,
                          score: state3.score,
                          state: state3.state,
                          tickCount: state3.tickCount,
                          turn: state3.turn,
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
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        playerId: state3.playerId,
                        score: state3.score,
                        state: state3.state,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        winner: state3.winner,
                        selectedPiece: new Just(v2.value0)
                      });
                    }
                    ;
                    throw new Error("Failed pattern match at Main (line 369, column 37 - line 374, column 97): " + [state3.selectedPiece.constructor.name]);
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 366, column 29 - line 374, column 97): " + [v2.constructor.name]);
                }
                ;
                if (v1 instanceof Just) {
                  if (state3.selectedPiece instanceof Nothing) {
                    var $639 = isOpponent(v1.value0);
                    if ($639) {
                      return pure4({
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        playerId: state3.playerId,
                        score: state3.score,
                        state: state3.state,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
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
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      playerId: state3.playerId,
                      score: state3.score,
                      state: state3.state,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      winner: state3.winner,
                      selectedPiece: new Just(v1.value0)
                    });
                  }
                  ;
                  if (state3.selectedPiece instanceof Just) {
                    var $640 = isOpponent(v1.value0);
                    if ($640) {
                      return pure4({
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        playerId: state3.playerId,
                        score: state3.score,
                        state: state3.state,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
                        winner: state3.winner,
                        selectedPiece: Nothing.value
                      });
                    }
                    ;
                    var $641 = eq10(state3.selectedPiece.value0)(v1.value0);
                    if ($641) {
                      return pure4({
                        actions: state3.actions,
                        attackedPositions: state3.attackedPositions,
                        availableMoves: state3.availableMoves,
                        board: state3.board,
                        canSend: state3.canSend,
                        flagPosition: state3.flagPosition,
                        hand: state3.hand,
                        lastReceivedMessage: state3.lastReceivedMessage,
                        messages: state3.messages,
                        playerId: state3.playerId,
                        score: state3.score,
                        state: state3.state,
                        tickCount: state3.tickCount,
                        turn: state3.turn,
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
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      playerId: state3.playerId,
                      score: state3.score,
                      state: state3.state,
                      tickCount: state3.tickCount,
                      turn: state3.turn,
                      winner: state3.winner,
                      selectedPiece: new Just(v1.value0)
                    });
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 376, column 29 - line 381, column 90): " + [state3.selectedPiece.constructor.name]);
                }
                ;
                throw new Error("Failed pattern match at Main (line 364, column 21 - line 381, column 90): " + [v1.constructor.name]);
              };
              var updateMove = function(state3) {
                var $644 = !state3.turn;
                if ($644) {
                  return pure4(state3);
                }
                ;
                if (state3.selectedPiece instanceof Nothing) {
                  return pure4(state3);
                }
                ;
                if (state3.selectedPiece instanceof Just) {
                  var $646 = !any2(function(z) {
                    return eq7(p.value0)(z);
                  })(state3.availableMoves);
                  if ($646) {
                    return pure4(state3);
                  }
                  ;
                  var v1 = lookup1(p.value0)(state3.board);
                  if (v1 instanceof Nothing) {
                    if (state3.canSend) {
                      return function __do() {
                        send("Action: Move " + (show5(getPos(state3.selectedPiece.value0)) + (" to " + show5(p.value0))))();
                        var movedState = movePiece(getPos(state3.selectedPiece.value0))(p.value0)(state3)();
                        return movedState;
                      };
                    }
                    ;
                    return function __do() {
                      log2("Waiting if message is received...")();
                      return state3;
                    };
                  }
                  ;
                  if (v1 instanceof Just) {
                    if (state3.canSend) {
                      return function __do() {
                        send("Action: Capture " + (show5(getPos(state3.selectedPiece.value0)) + (" to " + show5(p.value0))))();
                        var capturedState = capturePiece(getPos(state3.selectedPiece.value0))(p.value0)(state3)();
                        return capturedState;
                      };
                    }
                    ;
                    return function __do() {
                      log2("Waiting if message is received...")();
                      return state3;
                    };
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 393, column 38 - line 409, column 59): " + [v1.constructor.name]);
                }
                ;
                throw new Error("Failed pattern match at Main (line 387, column 25 - line 409, column 59): " + [state3.selectedPiece.constructor.name]);
              };
              return bind3(bind3(pure4(state$prime))(updateMove))(updateSelectedPiece);
            }
            ;
            throw new Error("Failed pattern match at Main (line 354, column 9 - line 409, column 59): " + [p.constructor.name]);
          }();
          return newState;
        }
        ;
        throw new Error("Failed pattern match at Main (line 339, column 1 - line 339, column 98): " + [send.constructor.name, v.constructor.name, state$prime.constructor.name]);
      };
    };
  };
  var onTick = function(send) {
    return function(state$prime) {
      if (eq6(state$prime.state)(End.value)) {
        return pure4(state$prime);
      }
      ;
      if (otherwise) {
        var updateWinner = function(state3) {
          var pieces = getImportantPiecesMoves(state3.board)(false)(false)(state3.attackedPositions);
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
            throw new Error("Failed pattern match at Main (line 329, column 28 - line 331, column 88): " + [v.constructor.name]);
          }();
          var $659 = eq6(state3.state)(Waiting.value) || eq6(state3.state)(End.value);
          if ($659) {
            return pure4(state3);
          }
          ;
          if (state3.flagPosition instanceof Grid) {
            var $661 = state3.flagPosition.value0.r < 3;
            if ($661) {
              return function __do() {
                send("Win")();
                return {
                  actions: state3.actions,
                  attackedPositions: state3.attackedPositions,
                  availableMoves: state3.availableMoves,
                  board: state3.board,
                  canSend: state3.canSend,
                  flagPosition: state3.flagPosition,
                  hand: state3.hand,
                  lastReceivedMessage: state3.lastReceivedMessage,
                  messages: state3.messages,
                  playerId: state3.playerId,
                  score: state3.score,
                  selectedPiece: state3.selectedPiece,
                  tickCount: state3.tickCount,
                  turn: state3.turn,
                  winner: new Just(true),
                  state: End.value
                };
              };
            }
            ;
            var $662 = eq9(pieces)([]) || eq9(getFlagMoves)([]);
            if ($662) {
              return function __do() {
                send("Lose")();
                return {
                  actions: state3.actions,
                  attackedPositions: state3.attackedPositions,
                  availableMoves: state3.availableMoves,
                  board: state3.board,
                  canSend: state3.canSend,
                  flagPosition: state3.flagPosition,
                  hand: state3.hand,
                  lastReceivedMessage: state3.lastReceivedMessage,
                  messages: state3.messages,
                  playerId: state3.playerId,
                  score: state3.score,
                  selectedPiece: state3.selectedPiece,
                  tickCount: state3.tickCount,
                  turn: state3.turn,
                  winner: new Just(false),
                  state: End.value
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
          var $666 = state3.actions === 0 && state3.turn;
          if ($666) {
            return pure4({
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              playerId: state3.playerId,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              state: state3.state,
              tickCount: state3.tickCount,
              winner: state3.winner,
              actions: -3 | 0,
              turn: false
            });
          }
          ;
          var $667 = state3.actions === 0 && !state3.turn;
          if ($667) {
            return pure4({
              attackedPositions: state3.attackedPositions,
              availableMoves: state3.availableMoves,
              board: state3.board,
              canSend: state3.canSend,
              flagPosition: state3.flagPosition,
              hand: state3.hand,
              lastReceivedMessage: state3.lastReceivedMessage,
              messages: state3.messages,
              playerId: state3.playerId,
              score: state3.score,
              selectedPiece: state3.selectedPiece,
              state: state3.state,
              tickCount: state3.tickCount,
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
            canSend: state3.canSend,
            score: state3.score,
            turn: state3.turn,
            playerId: state3.playerId,
            board: state3.board,
            hand: state3.hand,
            selectedPiece: state3.selectedPiece,
            availableMoves: state3.availableMoves,
            flagPosition: state3.flagPosition,
            attackedPositions: state3.attackedPositions,
            state: state3.state,
            winner: state3.winner,
            messages: state3.messages,
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
                throw new Error("Failed pattern match at Main (line 310, column 24 - line 312, column 42): " + [next.constructor.name]);
              }
              ;
              if (prev instanceof Just) {
                return new Just(prev.value0);
              }
              ;
              throw new Error("Failed pattern match at Main (line 309, column 27 - line 313, column 33): " + [prev.constructor.name]);
            };
          };
          var isFlag = function(piece) {
            var $672 = eq5(getType(piece))(Flag.value) && !isOpponent(piece);
            if ($672) {
              return new Just(piece);
            }
            ;
            return Nothing.value;
          };
          var maybeFlagPosition = foldl22(isPos)(Nothing.value)(mapFlipped1(state3.board)(isFlag));
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
            throw new Error("Failed pattern match at Main (line 301, column 24 - line 303, column 28): " + [maybeFlagPosition.constructor.name]);
          }();
          return {
            tickCount: state3.tickCount,
            actions: state3.actions,
            canSend: state3.canSend,
            score: state3.score,
            turn: state3.turn,
            playerId: state3.playerId,
            board: state3.board,
            hand: state3.hand,
            selectedPiece: state3.selectedPiece,
            availableMoves: state3.availableMoves,
            attackedPositions: state3.attackedPositions,
            state: state3.state,
            winner: state3.winner,
            messages: state3.messages,
            lastReceivedMessage: state3.lastReceivedMessage,
            flagPosition
          };
        };
        var updateAvailableMoves = function(state3) {
          if (state3.selectedPiece instanceof Nothing) {
            return {
              tickCount: state3.tickCount,
              actions: state3.actions,
              canSend: state3.canSend,
              score: state3.score,
              turn: state3.turn,
              playerId: state3.playerId,
              board: state3.board,
              hand: state3.hand,
              selectedPiece: state3.selectedPiece,
              flagPosition: state3.flagPosition,
              attackedPositions: state3.attackedPositions,
              state: state3.state,
              winner: state3.winner,
              messages: state3.messages,
              lastReceivedMessage: state3.lastReceivedMessage,
              availableMoves: []
            };
          }
          ;
          if (state3.selectedPiece instanceof Just) {
            return {
              tickCount: state3.tickCount,
              actions: state3.actions,
              canSend: state3.canSend,
              score: state3.score,
              turn: state3.turn,
              playerId: state3.playerId,
              board: state3.board,
              hand: state3.hand,
              selectedPiece: state3.selectedPiece,
              flagPosition: state3.flagPosition,
              attackedPositions: state3.attackedPositions,
              state: state3.state,
              winner: state3.winner,
              messages: state3.messages,
              lastReceivedMessage: state3.lastReceivedMessage,
              availableMoves: getAvailableMoves(state3.board)(state3.attackedPositions)(state3.selectedPiece.value0)
            };
          }
          ;
          throw new Error("Failed pattern match at Main (line 282, column 9 - line 284, column 113): " + [state3.selectedPiece.constructor.name]);
        };
        var updateAttackedPositions = function(state3) {
          var opponentPieces = mapFlipped2(filter(isOpponent)(foldl22(append13)([])(mapFlipped1(state3.board)(pieceToArray))))(flipPiece);
          var allPieces = mapFlipped2(mapFlipped2(foldl22(append13)([])(mapFlipped1(state3.board)(pieceToArray)))(flipPiece))(toOpponent);
          var pieces = foldl3(pieceToMap)(empty3)(allPieces);
          var attackedPositions = mapFlipped2(foldl3(append13)([])(mapFlipped2(opponentPieces)(getAvailableMoves(pieces)([]))))(flipPosition);
          return {
            tickCount: state3.tickCount,
            actions: state3.actions,
            canSend: state3.canSend,
            score: state3.score,
            turn: state3.turn,
            playerId: state3.playerId,
            board: state3.board,
            hand: state3.hand,
            selectedPiece: state3.selectedPiece,
            availableMoves: state3.availableMoves,
            flagPosition: state3.flagPosition,
            state: state3.state,
            winner: state3.winner,
            messages: state3.messages,
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
            return function __do() {
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
                flagPosition: state3.flagPosition,
                hand: state3.hand,
                messages: state3.messages,
                playerId: state3.playerId,
                score: state3.score,
                selectedPiece: state3.selectedPiece,
                state: state3.state,
                tickCount: state3.tickCount,
                turn: state3.turn,
                winner: state3.winner,
                lastReceivedMessage: Nothing.value
              };
            };
          }
          ;
          throw new Error("Failed pattern match at Main (line 194, column 9 - line 200, column 70): " + [state3.lastReceivedMessage.constructor.name]);
        };
        var processAction = function(action2) {
          return function(message2) {
            return function(state3) {
              var $680 = contains("Move")(action2.payload);
              if ($680) {
                return function __do() {
                  var maybeMove = stripPrefix("Move ")(action2.payload);
                  if (maybeMove instanceof Nothing) {
                    return state3;
                  }
                  ;
                  if (maybeMove instanceof Just) {
                    var tokens = split(" to ")(maybeMove.value0);
                    var pos1 = tokensToPos(tokens)(0)();
                    var pos2 = tokensToPos(tokens)(1)();
                    var movedState = movePiece(flipPosition(pos1))(flipPosition(pos2))(state3)();
                    log2(show1(message2) + ("---" + show42(state3.messages)))();
                    return {
                      actions: movedState.actions,
                      attackedPositions: movedState.attackedPositions,
                      availableMoves: movedState.availableMoves,
                      board: movedState.board,
                      canSend: movedState.canSend,
                      flagPosition: movedState.flagPosition,
                      hand: movedState.hand,
                      lastReceivedMessage: movedState.lastReceivedMessage,
                      playerId: movedState.playerId,
                      score: movedState.score,
                      selectedPiece: movedState.selectedPiece,
                      state: movedState.state,
                      tickCount: movedState.tickCount,
                      turn: movedState.turn,
                      winner: movedState.winner,
                      messages: filter(messageFilter(message2))(state3.messages)
                    };
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 221, column 13 - line 230, column 99): " + [maybeMove.constructor.name]);
                };
              }
              ;
              var $683 = contains("Capture")(message2.payload);
              if ($683) {
                return function __do() {
                  var maybeCapture = stripPrefix("Capture ")(action2.payload);
                  if (maybeCapture instanceof Nothing) {
                    return state3;
                  }
                  ;
                  if (maybeCapture instanceof Just) {
                    var tokens = split(" to ")(maybeCapture.value0);
                    var pos1 = tokensToPos(tokens)(0)();
                    var pos2 = tokensToPos(tokens)(1)();
                    var capturedState = capturePiece(flipPosition(pos1))(flipPosition(pos2))(state3)();
                    log2(show1(message2) + ("---" + show42(state3.messages)))();
                    return {
                      actions: capturedState.actions,
                      attackedPositions: capturedState.attackedPositions,
                      availableMoves: capturedState.availableMoves,
                      board: capturedState.board,
                      canSend: capturedState.canSend,
                      flagPosition: capturedState.flagPosition,
                      hand: capturedState.hand,
                      lastReceivedMessage: capturedState.lastReceivedMessage,
                      playerId: capturedState.playerId,
                      score: capturedState.score,
                      selectedPiece: capturedState.selectedPiece,
                      state: capturedState.state,
                      tickCount: capturedState.tickCount,
                      turn: capturedState.turn,
                      winner: capturedState.winner,
                      messages: filter(messageFilter(message2))(state3.messages)
                    };
                  }
                  ;
                  throw new Error("Failed pattern match at Main (line 233, column 13 - line 242, column 102): " + [maybeCapture.constructor.name]);
                };
              }
              ;
              return function __do() {
                log2("Unknown Action: " + show1(message2))();
                return state3;
              };
            };
          };
        };
        var processMessage = function(effect) {
          return function(message2) {
            return function __do() {
              var state3 = effect();
              log2("processing " + message2.payload)();
              if (state3.playerId instanceof Nothing) {
                return state3;
              }
              ;
              if (state3.playerId instanceof Just) {
                var state1 = function() {
                  var $687 = eq6(state3.state)(Waiting.value);
                  if ($687) {
                    return {
                      attackedPositions: state3.attackedPositions,
                      availableMoves: state3.availableMoves,
                      board: state3.board,
                      canSend: state3.canSend,
                      flagPosition: state3.flagPosition,
                      hand: state3.hand,
                      lastReceivedMessage: state3.lastReceivedMessage,
                      messages: state3.messages,
                      playerId: state3.playerId,
                      score: state3.score,
                      selectedPiece: state3.selectedPiece,
                      tickCount: state3.tickCount,
                      winner: state3.winner,
                      actions: -3 | 0,
                      turn: false,
                      state: InGame.value
                    };
                  }
                  ;
                  return state3;
                }();
                var state22 = function() {
                  var $688 = !eq4(state3.playerId.value0)(message2.playerId);
                  if ($688) {
                    return state1;
                  }
                  ;
                  return state1;
                }();
                var state32 = function() {
                  var $689 = eq4(state3.playerId.value0)(message2.playerId);
                  if ($689) {
                    return {
                      actions: state22.actions,
                      attackedPositions: state22.attackedPositions,
                      availableMoves: state22.availableMoves,
                      board: state22.board,
                      canSend: state22.canSend,
                      flagPosition: state22.flagPosition,
                      hand: state22.hand,
                      lastReceivedMessage: state22.lastReceivedMessage,
                      playerId: state22.playerId,
                      score: state22.score,
                      selectedPiece: state22.selectedPiece,
                      state: state22.state,
                      tickCount: state22.tickCount,
                      turn: state22.turn,
                      winner: state22.winner,
                      messages: filter(messageFilter(message2))(state22.messages)
                    };
                  }
                  ;
                  if (message2.payload === "Join") {
                    return {
                      attackedPositions: state22.attackedPositions,
                      availableMoves: state22.availableMoves,
                      board: state22.board,
                      canSend: state22.canSend,
                      flagPosition: state22.flagPosition,
                      hand: state22.hand,
                      lastReceivedMessage: state22.lastReceivedMessage,
                      playerId: state22.playerId,
                      score: state22.score,
                      selectedPiece: state22.selectedPiece,
                      tickCount: state22.tickCount,
                      winner: state22.winner,
                      actions: 3,
                      turn: true,
                      state: InGame.value,
                      messages: filter(messageFilter(message2))(state22.messages)
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
                      flagPosition: state22.flagPosition,
                      hand: state22.hand,
                      lastReceivedMessage: state22.lastReceivedMessage,
                      playerId: state22.playerId,
                      score: state22.score,
                      selectedPiece: state22.selectedPiece,
                      tickCount: state22.tickCount,
                      turn: state22.turn,
                      winner: new Just(true),
                      state: End.value,
                      messages: filter(messageFilter(message2))(state22.messages)
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
                      flagPosition: state22.flagPosition,
                      hand: state22.hand,
                      lastReceivedMessage: state22.lastReceivedMessage,
                      playerId: state22.playerId,
                      score: state22.score,
                      selectedPiece: state22.selectedPiece,
                      tickCount: state22.tickCount,
                      turn: state22.turn,
                      winner: new Just(false),
                      state: End.value,
                      messages: filter(messageFilter(message2))(state22.messages)
                    };
                  }
                  ;
                  var $691 = contains("Action")(message2.payload);
                  if ($691) {
                    var maybeAction = stripPrefix("Action: ")(message2.payload);
                    var actionMessage = function() {
                      if (maybeAction instanceof Nothing) {
                        return message2;
                      }
                      ;
                      if (maybeAction instanceof Just) {
                        return {
                          playerId: message2.playerId,
                          payload: maybeAction.value0
                        };
                      }
                      ;
                      throw new Error("Failed pattern match at Main (line 265, column 46 - line 267, column 73): " + [maybeAction.constructor.name]);
                    }();
                    return processAction(actionMessage)(message2)(state22)();
                  }
                  ;
                  log2("Unknown Message: " + show1(message2))();
                  return {
                    actions: state22.actions,
                    attackedPositions: state22.attackedPositions,
                    availableMoves: state22.availableMoves,
                    board: state22.board,
                    canSend: state22.canSend,
                    flagPosition: state22.flagPosition,
                    hand: state22.hand,
                    lastReceivedMessage: state22.lastReceivedMessage,
                    playerId: state22.playerId,
                    score: state22.score,
                    selectedPiece: state22.selectedPiece,
                    state: state22.state,
                    tickCount: state22.tickCount,
                    turn: state22.turn,
                    winner: state22.winner,
                    messages: filter(messageFilter(message2))(state22.messages)
                  };
                }();
                return state32;
              }
              ;
              throw new Error("Failed pattern match at Main (line 252, column 9 - line 272, column 28): " + [state3.playerId.constructor.name]);
            };
          };
        };
        var readMessages = function(state3) {
          if (state3.playerId instanceof Nothing) {
            if (state3.lastReceivedMessage instanceof Nothing) {
              return function __do() {
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
                  flagPosition: state3.flagPosition,
                  hand: state3.hand,
                  lastReceivedMessage: state3.lastReceivedMessage,
                  score: state3.score,
                  selectedPiece: state3.selectedPiece,
                  state: state3.state,
                  tickCount: state3.tickCount,
                  turn: state3.turn,
                  winner: state3.winner,
                  playerId: new Just(state3.lastReceivedMessage.value0.playerId),
                  messages: filter(messageFilter(state3.lastReceivedMessage.value0))(state3.messages)
                });
              }
              ;
              return pure4(state3);
            }
            ;
            throw new Error("Failed pattern match at Main (line 206, column 17 - line 212, column 40): " + [state3.lastReceivedMessage.constructor.name]);
          }
          ;
          if (state3.playerId instanceof Just) {
            return foldl3(processMessage)(pure4(state3))(state3.messages);
          }
          ;
          throw new Error("Failed pattern match at Main (line 204, column 9 - line 215, column 65): " + [state3.playerId.constructor.name]);
        };
        var newState = mapFlipped22(mapFlipped22(mapFlipped22(bind3(bind3(mapFlipped22(bind3(bind3(pure4(state$prime))(receiveMessage))(readMessages))(updateFlagPosition))(updateWinner))(updateTurn))(updateAvailableMoves))(updateAttackedPositions))(updateTickCount);
        return newState;
      }
      ;
      throw new Error("Failed pattern match at Main (line 176, column 1 - line 176, column 67): " + [send.constructor.name, state$prime.constructor.name]);
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
    port: 15e3,
    imagePaths: ["images/King.png", "images/Queen.png", "images/Flag.png", "images/Flag1.png", "images/Flag2.png", "images/Prince.png", "images/Wizard.png", "images/Dragon.png", "images/Orc.png", "images/Dwarf.png", "images/ElfRanged.png", "images/ElfMelee.png", "images/Human.png", "images/Goblin.png", "images/HumanUpgraded.png", "images/GoblinUpgraded.png"]
  });

  // <stdin>
  main();
})();
