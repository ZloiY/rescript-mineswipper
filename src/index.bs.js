(function (exports) {
  'use strict';

  function sub(x, offset, len) {
    var result = new Array(len);
    var j = 0;
    var i = offset;
    while(j < len) {
      result[j] = x[i];
      j = j + 1 | 0;
      i = i + 1 | 0;
    }  return result;
  }

  function get$3(xs, index) {
    if (index < 0 || index >= xs.length) {
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
          };
    }
    return xs[index];
  }
  /* No side effect */

  function app(_f, _args) {
    while(true) {
      var args = _args;
      var f = _f;
      var init_arity = f.length;
      var arity = init_arity === 0 ? 1 : init_arity;
      var len = args.length;
      var d = arity - len | 0;
      if (d === 0) {
        return f.apply(null, args);
      }
      if (d >= 0) {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat([x]));
        }
        }(f,args));
      }
      _args = sub(args, arity, -d | 0);
      _f = f.apply(null, sub(args, 0, arity));
      continue ;
    }}

  function _1(o, a0) {
    var arity = o.length;
    if (arity === 1) {
      return o(a0);
    } else {
      switch (arity) {
        case 1 :
            return o(a0);
        case 2 :
            return function (param) {
              return o(a0, param);
            };
        case 3 :
            return function (param, param$1) {
              return o(a0, param, param$1);
            };
        case 4 :
            return function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            };
        case 5 :
            return function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            };
        case 6 :
            return function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            };
        case 7 :
            return function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            };
        default:
          return app(o, [a0]);
      }
    }
  }

  function __1(o) {
    var arity = o.length;
    if (arity === 1) {
      return o;
    } else {
      return function (a0) {
        return _1(o, a0);
      };
    }
  }

  function _2(o, a0, a1) {
    var arity = o.length;
    if (arity === 2) {
      return o(a0, a1);
    } else {
      switch (arity) {
        case 1 :
            return app(o(a0), [a1]);
        case 2 :
            return o(a0, a1);
        case 3 :
            return function (param) {
              return o(a0, a1, param);
            };
        case 4 :
            return function (param, param$1) {
              return o(a0, a1, param, param$1);
            };
        case 5 :
            return function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            };
        case 6 :
            return function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            };
        case 7 :
            return function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            };
        default:
          return app(o, [
                      a0,
                      a1
                    ]);
      }
    }
  }

  function __2(o) {
    var arity = o.length;
    if (arity === 2) {
      return o;
    } else {
      return function (a0, a1) {
        return _2(o, a0, a1);
      };
    }
  }

  function _3(o, a0, a1, a2) {
    var arity = o.length;
    if (arity === 3) {
      return o(a0, a1, a2);
    } else {
      switch (arity) {
        case 1 :
            return app(o(a0), [
                        a1,
                        a2
                      ]);
        case 2 :
            return app(o(a0, a1), [a2]);
        case 3 :
            return o(a0, a1, a2);
        case 4 :
            return function (param) {
              return o(a0, a1, a2, param);
            };
        case 5 :
            return function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            };
        case 6 :
            return function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            };
        case 7 :
            return function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            };
        default:
          return app(o, [
                      a0,
                      a1,
                      a2
                    ]);
      }
    }
  }

  function __3(o) {
    var arity = o.length;
    if (arity === 3) {
      return o;
    } else {
      return function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      };
    }
  }
  /* No side effect */

  function MakeComparable(M) {
    var cmp = M.cmp;
    var cmp$1 = __2(cmp);
    return {
            cmp: cmp$1
          };
  }
  /* No side effect */

  var max = 2147483647;

  var min = -2147483648;
  /* No side effect */

  function floor_int(f) {
    if (f > max) {
      return max;
    } else if (f < min) {
      return min;
    } else {
      return Math.floor(f);
    }
  }

  function random_int(min, max) {
    return floor_int(Math.random() * (max - min | 0)) + min | 0;
  }
  /* No side effect */

  function some(x) {
    if (x === undefined) {
      return {
              BS_PRIVATE_NESTED_SOME_NONE: 0
            };
    } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
      return {
              BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
            };
    } else {
      return x;
    }
  }

  function valFromOption(x) {
    if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined)) {
      return x;
    }
    var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
    if (depth === 0) {
      return ;
    } else {
      return {
              BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
            };
    }
  }
  /* No side effect */

  function caml_int_compare(x, y) {
    if (x < y) {
      return -1;
    } else if (x === y) {
      return 0;
    } else {
      return 1;
    }
  }

  function caml_bool_compare(x, y) {
    if (x) {
      if (y) {
        return 0;
      } else {
        return 1;
      }
    } else if (y) {
      return -1;
    } else {
      return 0;
    }
  }

  function caml_string_compare(s1, s2) {
    if (s1 === s2) {
      return 0;
    } else if (s1 < s2) {
      return -1;
    } else {
      return 1;
    }
  }
  /* No side effect */

  function concat(a1, a2) {
    var l1 = a1.length;
    var l2 = a2.length;
    var a1a2 = new Array(l1 + l2 | 0);
    for(var i = 0; i < l1; ++i){
      a1a2[i] = a1[i];
    }
    for(var i$1 = 0; i$1 < l2; ++i$1){
      a1a2[l1 + i$1 | 0] = a2[i$1];
    }
    return a1a2;
  }

  function forEachU$1(a, f) {
    for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
      f(a[i]);
    }
    
  }

  function forEach$1(a, f) {
    return forEachU$1(a, __1(f));
  }

  function mapU(a, f) {
    var l = a.length;
    var r = new Array(l);
    for(var i = 0; i < l; ++i){
      r[i] = f(a[i]);
    }
    return r;
  }

  function map(a, f) {
    return mapU(a, __1(f));
  }

  function reduceU$3(a, x, f) {
    var r = x;
    for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
      r = f(r, a[i]);
    }
    return r;
  }

  function reduce$1(a, x, f) {
    return reduceU$3(a, x, __2(f));
  }
  /* No side effect */

  function sortedLengthAuxMore(xs, _prec, _acc, len, lt) {
    while(true) {
      var acc = _acc;
      var prec = _prec;
      if (acc >= len) {
        return acc;
      }
      var v = xs[acc];
      if (!lt(v, prec)) {
        return acc;
      }
      _acc = acc + 1 | 0;
      _prec = v;
      continue ;
    }}

  function strictlySortedLengthU(xs, lt) {
    var len = xs.length;
    if (len === 0 || len === 1) {
      return len;
    }
    var x0 = xs[0];
    var x1 = xs[1];
    if (lt(x0, x1)) {
      var _prec = x1;
      var _acc = 2;
      while(true) {
        var acc = _acc;
        var prec = _prec;
        if (acc >= len) {
          return acc;
        }
        var v = xs[acc];
        if (!lt(prec, v)) {
          return acc;
        }
        _acc = acc + 1 | 0;
        _prec = v;
        continue ;
      }  } else if (lt(x1, x0)) {
      return -sortedLengthAuxMore(xs, x1, 2, len, lt) | 0;
    } else {
      return 1;
    }
  }
  /* No side effect */

  function treeHeight(n) {
    if (n !== undefined) {
      return n.h;
    } else {
      return 0;
    }
  }

  function create$1(l, x, d, r) {
    var hl = treeHeight(l);
    var hr = treeHeight(r);
    return {
            k: x,
            v: d,
            h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
            l: l,
            r: r
          };
  }

  function singleton$1(x, d) {
    return {
            k: x,
            v: d,
            h: 1,
            l: undefined,
            r: undefined
          };
  }

  function updateValue(n, newValue) {
    if (n.v === newValue) {
      return n;
    } else {
      return {
              k: n.k,
              v: newValue,
              h: n.h,
              l: n.l,
              r: n.r
            };
    }
  }

  function bal$1(l, x, d, r) {
    var hl = l !== undefined ? l.h : 0;
    var hr = r !== undefined ? r.h : 0;
    if (hl > (hr + 2 | 0)) {
      var ll = l.l;
      var lr = l.r;
      if (treeHeight(ll) >= treeHeight(lr)) {
        return create$1(ll, l.k, l.v, create$1(lr, x, d, r));
      } else {
        return create$1(create$1(ll, l.k, l.v, lr.l), lr.k, lr.v, create$1(lr.r, x, d, r));
      }
    }
    if (hr <= (hl + 2 | 0)) {
      return {
              k: x,
              v: d,
              h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
              l: l,
              r: r
            };
    }
    var rl = r.l;
    var rr = r.r;
    if (treeHeight(rr) >= treeHeight(rl)) {
      return create$1(create$1(l, x, d, rl), r.k, r.v, rr);
    } else {
      return create$1(create$1(l, x, d, rl.l), rl.k, rl.v, create$1(rl.r, r.k, r.v, rr));
    }
  }

  function reduceU$2(_m, _accu, f) {
    while(true) {
      var accu = _accu;
      var m = _m;
      if (m === undefined) {
        return accu;
      }
      var v = m.k;
      var d = m.v;
      var l = m.l;
      var r = m.r;
      _accu = f(reduceU$2(l, accu, f), v, d);
      _m = r;
      continue ;
    }}

  function get$2(_n, x, cmp) {
    while(true) {
      var n = _n;
      if (n === undefined) {
        return ;
      }
      var v = n.k;
      var c = cmp(x, v);
      if (c === 0) {
        return some(n.v);
      }
      _n = c < 0 ? n.l : n.r;
      continue ;
    }}

  function has$5(_n, x, cmp) {
    while(true) {
      var n = _n;
      if (n === undefined) {
        return false;
      }
      var v = n.k;
      var c = cmp(x, v);
      if (c === 0) {
        return true;
      }
      _n = c < 0 ? n.l : n.r;
      continue ;
    }}
  /* No side effect */

  function set$1(t, newK, newD, cmp) {
    if (t === undefined) {
      return singleton$1(newK, newD);
    }
    var k = t.k;
    var c = cmp(newK, k);
    if (c === 0) {
      return updateValue(t, newD);
    }
    var l = t.l;
    var r = t.r;
    var v = t.v;
    if (c < 0) {
      return bal$1(set$1(l, newK, newD, cmp), k, v, r);
    } else {
      return bal$1(l, k, v, set$1(r, newK, newD, cmp));
    }
  }

  var has$4 = has$5;

  var reduceU$1 = reduceU$2;

  var get$1 = get$2;
  /* No side effect */

  function set(m, key, d) {
    var cmp = m.cmp;
    return {
            cmp: cmp,
            data: set$1(m.data, key, d, cmp)
          };
  }

  function make$1(id) {
    return {
            cmp: id.cmp,
            data: undefined
          };
  }

  function reduceU(m, acc, f) {
    return reduceU$1(m.data, acc, f);
  }

  function reduce(m, acc, f) {
    return reduceU(m, acc, __3(f));
  }

  function get(map, x) {
    return get$1(map.data, x, map.cmp);
  }

  function has$3(map, x) {
    return has$4(map.data, x, map.cmp);
  }
  /* No side effect */

  function create(l, v, r) {
    var hl = l !== undefined ? l.h : 0;
    var hr = r !== undefined ? r.h : 0;
    return {
            v: v,
            h: (
              hl >= hr ? hl : hr
            ) + 1 | 0,
            l: l,
            r: r
          };
  }

  function singleton(x) {
    return {
            v: x,
            h: 1,
            l: undefined,
            r: undefined
          };
  }

  function heightGe(l, r) {
    if (r !== undefined) {
      if (l !== undefined) {
        return l.h >= r.h;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  function bal(l, v, r) {
    var hl = l !== undefined ? l.h : 0;
    var hr = r !== undefined ? r.h : 0;
    if (hl > (hr + 2 | 0)) {
      var ll = l.l;
      var lr = l.r;
      if (heightGe(ll, lr)) {
        return create(ll, l.v, create(lr, v, r));
      } else {
        return create(create(ll, l.v, lr.l), lr.v, create(lr.r, v, r));
      }
    }
    if (hr <= (hl + 2 | 0)) {
      return {
              v: v,
              h: (
                hl >= hr ? hl : hr
              ) + 1 | 0,
              l: l,
              r: r
            };
    }
    var rl = r.l;
    var rr = r.r;
    if (heightGe(rr, rl)) {
      return create(create(l, v, rl), r.v, rr);
    } else {
      return create(create(l, v, rl.l), rl.v, create(rl.r, r.v, rr));
    }
  }

  function removeMinAuxWithRef(n, v) {
    var ln = n.l;
    if (ln !== undefined) {
      return bal(removeMinAuxWithRef(ln, v), n.v, n.r);
    } else {
      v.contents = n.v;
      return n.r;
    }
  }

  function stackAllLeft(_v, _s) {
    while(true) {
      var s = _s;
      var v = _v;
      if (v === undefined) {
        return s;
      }
      _s = {
        hd: v,
        tl: s
      };
      _v = v.l;
      continue ;
    }}

  function lengthNode(n) {
    var l = n.l;
    var r = n.r;
    var sizeL = l !== undefined ? lengthNode(l) : 0;
    var sizeR = r !== undefined ? lengthNode(r) : 0;
    return (1 + sizeL | 0) + sizeR | 0;
  }

  function size$1(n) {
    if (n !== undefined) {
      return lengthNode(n);
    } else {
      return 0;
    }
  }

  function fromSortedArrayRevAux(arr, off, len) {
    switch (len) {
      case 0 :
          return ;
      case 1 :
          return singleton(arr[off]);
      case 2 :
          var x0 = arr[off];
          var x1 = arr[off - 1 | 0];
          return {
                  v: x1,
                  h: 2,
                  l: singleton(x0),
                  r: undefined
                };
      case 3 :
          var x0$1 = arr[off];
          var x1$1 = arr[off - 1 | 0];
          var x2 = arr[off - 2 | 0];
          return {
                  v: x1$1,
                  h: 2,
                  l: singleton(x0$1),
                  r: singleton(x2)
                };
      default:
        var nl = len / 2 | 0;
        var left = fromSortedArrayRevAux(arr, off, nl);
        var mid = arr[off - nl | 0];
        var right = fromSortedArrayRevAux(arr, (off - nl | 0) - 1 | 0, (len - nl | 0) - 1 | 0);
        return create(left, mid, right);
    }
  }

  function fromSortedArrayAux(arr, off, len) {
    switch (len) {
      case 0 :
          return ;
      case 1 :
          return singleton(arr[off]);
      case 2 :
          var x0 = arr[off];
          var x1 = arr[off + 1 | 0];
          return {
                  v: x1,
                  h: 2,
                  l: singleton(x0),
                  r: undefined
                };
      case 3 :
          var x0$1 = arr[off];
          var x1$1 = arr[off + 1 | 0];
          var x2 = arr[off + 2 | 0];
          return {
                  v: x1$1,
                  h: 2,
                  l: singleton(x0$1),
                  r: singleton(x2)
                };
      default:
        var nl = len / 2 | 0;
        var left = fromSortedArrayAux(arr, off, nl);
        var mid = arr[off + nl | 0];
        var right = fromSortedArrayAux(arr, (off + nl | 0) + 1 | 0, (len - nl | 0) - 1 | 0);
        return create(left, mid, right);
    }
  }

  function has$2(_t, x, cmp) {
    while(true) {
      var t = _t;
      if (t === undefined) {
        return false;
      }
      var v = t.v;
      var c = cmp(x, v);
      if (c === 0) {
        return true;
      }
      _t = c < 0 ? t.l : t.r;
      continue ;
    }}

  function cmp$3(s1, s2, cmp$1) {
    var len1 = size$1(s1);
    var len2 = size$1(s2);
    if (len1 === len2) {
      var _e1 = stackAllLeft(s1, /* [] */0);
      var _e2 = stackAllLeft(s2, /* [] */0);
      while(true) {
        var e2 = _e2;
        var e1 = _e1;
        if (!e1) {
          return 0;
        }
        if (!e2) {
          return 0;
        }
        var h2 = e2.hd;
        var h1 = e1.hd;
        var c = cmp$1(h1.v, h2.v);
        if (c !== 0) {
          return c;
        }
        _e2 = stackAllLeft(h2.r, e2.tl);
        _e1 = stackAllLeft(h1.r, e1.tl);
        continue ;
      }  } else if (len1 < len2) {
      return -1;
    } else {
      return 1;
    }
  }

  function rotateWithLeftChild(k2) {
    var k1 = k2.l;
    k2.l = k1.r;
    k1.r = k2;
    var n = k2.l;
    var hlk2 = n !== undefined ? n.h : 0;
    var n$1 = k2.r;
    var hrk2 = n$1 !== undefined ? n$1.h : 0;
    k2.h = (
      hlk2 > hrk2 ? hlk2 : hrk2
    ) + 1 | 0;
    var n$2 = k1.l;
    var hlk1 = n$2 !== undefined ? n$2.h : 0;
    var hk2 = k2.h;
    k1.h = (
      hlk1 > hk2 ? hlk1 : hk2
    ) + 1 | 0;
    return k1;
  }

  function rotateWithRightChild(k1) {
    var k2 = k1.r;
    k1.r = k2.l;
    k2.l = k1;
    var n = k1.l;
    var hlk1 = n !== undefined ? n.h : 0;
    var n$1 = k1.r;
    var hrk1 = n$1 !== undefined ? n$1.h : 0;
    k1.h = (
      hlk1 > hrk1 ? hlk1 : hrk1
    ) + 1 | 0;
    var n$2 = k2.r;
    var hrk2 = n$2 !== undefined ? n$2.h : 0;
    var hk1 = k1.h;
    k2.h = (
      hrk2 > hk1 ? hrk2 : hk1
    ) + 1 | 0;
    return k2;
  }

  function doubleWithLeftChild(k3) {
    var k3l = k3.l;
    var v = rotateWithRightChild(k3l);
    k3.l = v;
    return rotateWithLeftChild(k3);
  }

  function doubleWithRightChild(k2) {
    var k2r = k2.r;
    var v = rotateWithLeftChild(k2r);
    k2.r = v;
    return rotateWithRightChild(k2);
  }

  function heightUpdateMutate(t) {
    var n = t.l;
    var hlt = n !== undefined ? n.h : 0;
    var n$1 = t.r;
    var hrt = n$1 !== undefined ? n$1.h : 0;
    t.h = (
      hlt > hrt ? hlt : hrt
    ) + 1 | 0;
    return t;
  }

  function balMutate(nt) {
    var l = nt.l;
    var r = nt.r;
    var hl = l !== undefined ? l.h : 0;
    var hr = r !== undefined ? r.h : 0;
    if (hl > (2 + hr | 0)) {
      var ll = l.l;
      var lr = l.r;
      if (heightGe(ll, lr)) {
        return heightUpdateMutate(rotateWithLeftChild(nt));
      } else {
        return heightUpdateMutate(doubleWithLeftChild(nt));
      }
    }
    if (hr > (2 + hl | 0)) {
      var rl = r.l;
      var rr = r.r;
      if (heightGe(rr, rl)) {
        return heightUpdateMutate(rotateWithRightChild(nt));
      } else {
        return heightUpdateMutate(doubleWithRightChild(nt));
      }
    }
    nt.h = (
      hl > hr ? hl : hr
    ) + 1 | 0;
    return nt;
  }

  function addMutate(cmp, t, x) {
    if (t === undefined) {
      return singleton(x);
    }
    var k = t.v;
    var c = cmp(x, k);
    if (c === 0) {
      return t;
    }
    var l = t.l;
    var r = t.r;
    if (c < 0) {
      var ll = addMutate(cmp, l, x);
      t.l = ll;
    } else {
      t.r = addMutate(cmp, r, x);
    }
    return balMutate(t);
  }

  function fromArray$2(xs, cmp) {
    var len = xs.length;
    if (len === 0) {
      return ;
    }
    var next = strictlySortedLengthU(xs, (function (x, y) {
            return cmp(x, y) < 0;
          }));
    var result;
    if (next >= 0) {
      result = fromSortedArrayAux(xs, 0, next);
    } else {
      next = -next | 0;
      result = fromSortedArrayRevAux(xs, next - 1 | 0, next);
    }
    for(var i = next; i < len; ++i){
      result = addMutate(cmp, result, xs[i]);
    }
    return result;
  }
  /* No side effect */

  function add$1(t, x, cmp) {
    if (t === undefined) {
      return singleton(x);
    }
    var k = t.v;
    var c = cmp(x, k);
    if (c === 0) {
      return t;
    }
    var l = t.l;
    var r = t.r;
    if (c < 0) {
      var ll = add$1(l, x, cmp);
      if (ll === l) {
        return t;
      } else {
        return bal(ll, k, r);
      }
    }
    var rr = add$1(r, x, cmp);
    if (rr === r) {
      return t;
    } else {
      return bal(l, k, rr);
    }
  }

  function remove$1(t, x, cmp) {
    if (t === undefined) {
      return t;
    }
    var v = t.v;
    var l = t.l;
    var r = t.r;
    var c = cmp(x, v);
    if (c === 0) {
      if (l === undefined) {
        return r;
      }
      if (r === undefined) {
        return l;
      }
      var v$1 = {
        contents: r.v
      };
      var r$1 = removeMinAuxWithRef(r, v$1);
      return bal(l, v$1.contents, r$1);
    }
    if (c < 0) {
      var ll = remove$1(l, x, cmp);
      if (ll === l) {
        return t;
      } else {
        return bal(ll, v, r);
      }
    }
    var rr = remove$1(r, x, cmp);
    if (rr === r) {
      return t;
    } else {
      return bal(l, v, rr);
    }
  }

  var fromArray$1 = fromArray$2;

  var has$1 = has$2;

  var cmp$2 = cmp$3;
  /* No side effect */

  function fromArray(data, id) {
    var cmp = id.cmp;
    return {
            cmp: cmp,
            data: fromArray$1(data, cmp)
          };
  }

  function remove(m, e) {
    var data = m.data;
    var cmp = m.cmp;
    var newData = remove$1(data, e, cmp);
    if (newData === data) {
      return m;
    } else {
      return {
              cmp: cmp,
              data: newData
            };
    }
  }

  function add(m, e) {
    var data = m.data;
    var cmp = m.cmp;
    var newData = add$1(data, e, cmp);
    if (newData === data) {
      return m;
    } else {
      return {
              cmp: cmp,
              data: newData
            };
    }
  }

  function make(id) {
    return {
            cmp: id.cmp,
            data: undefined
          };
  }

  function cmp$1(m, n) {
    var cmp$1 = m.cmp;
    return cmp$2(m.data, n.data, cmp$1);
  }

  function has(m, e) {
    return has$1(m.data, e, m.cmp);
  }
  /* No side effect */

  var for_in = (function(o,foo){
          for (var x in o) { foo(x); }});

  function caml_compare(a, b) {
    if (a === b) {
      return 0;
    }
    var a_type = typeof a;
    var b_type = typeof b;
    switch (a_type) {
      case "boolean" :
          if (b_type === "boolean") {
            return caml_bool_compare(a, b);
          }
          break;
      case "function" :
          if (b_type === "function") {
            throw {
                  RE_EXN_ID: "Invalid_argument",
                  _1: "compare: functional value",
                  Error: new Error()
                };
          }
          break;
      case "number" :
          if (b_type === "number") {
            return caml_int_compare(a, b);
          }
          break;
      case "string" :
          if (b_type === "string") {
            return caml_string_compare(a, b);
          } else {
            return 1;
          }
      case "undefined" :
          return -1;
        
    }
    switch (b_type) {
      case "string" :
          return -1;
      case "undefined" :
          return 1;
      default:
        if (a_type === "boolean") {
          return 1;
        }
        if (b_type === "boolean") {
          return -1;
        }
        if (a_type === "function") {
          return 1;
        }
        if (b_type === "function") {
          return -1;
        }
        if (a_type === "number") {
          if (b === null || b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
            return 1;
          } else {
            return -1;
          }
        }
        if (b_type === "number") {
          if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
            return -1;
          } else {
            return 1;
          }
        }
        if (a === null) {
          if (b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
            return 1;
          } else {
            return -1;
          }
        }
        if (b === null) {
          if (a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
            return -1;
          } else {
            return 1;
          }
        }
        if (a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          if (b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
            return aux_obj_compare(a, b);
          } else {
            return -1;
          }
        }
        var tag_a = a.TAG | 0;
        var tag_b = b.TAG | 0;
        if (tag_a === 248) {
          return caml_int_compare(a[1], b[1]);
        }
        if (tag_a === 251) {
          throw {
                RE_EXN_ID: "Invalid_argument",
                _1: "equal: abstract value",
                Error: new Error()
              };
        }
        if (tag_a !== tag_b) {
          if (tag_a < tag_b) {
            return -1;
          } else {
            return 1;
          }
        }
        var len_a = a.length | 0;
        var len_b = b.length | 0;
        if (len_a === len_b) {
          if (Array.isArray(a)) {
            var _i = 0;
            while(true) {
              var i = _i;
              if (i === len_a) {
                return 0;
              }
              var res = caml_compare(a[i], b[i]);
              if (res !== 0) {
                return res;
              }
              _i = i + 1 | 0;
              continue ;
            }        } else if ((a instanceof Date && b instanceof Date)) {
            return (a - b);
          } else {
            return aux_obj_compare(a, b);
          }
        } else if (len_a < len_b) {
          var _i$1 = 0;
          while(true) {
            var i$1 = _i$1;
            if (i$1 === len_a) {
              return -1;
            }
            var res$1 = caml_compare(a[i$1], b[i$1]);
            if (res$1 !== 0) {
              return res$1;
            }
            _i$1 = i$1 + 1 | 0;
            continue ;
          }      } else {
          var _i$2 = 0;
          while(true) {
            var i$2 = _i$2;
            if (i$2 === len_b) {
              return 1;
            }
            var res$2 = caml_compare(a[i$2], b[i$2]);
            if (res$2 !== 0) {
              return res$2;
            }
            _i$2 = i$2 + 1 | 0;
            continue ;
          }      }
    }
  }

  function aux_obj_compare(a, b) {
    var min_key_lhs = {
      contents: undefined
    };
    var min_key_rhs = {
      contents: undefined
    };
    var do_key = function (param, key) {
      var min_key = param[2];
      var b = param[1];
      if (!(!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0)) {
        return ;
      }
      var mk = min_key.contents;
      if (mk !== undefined && key >= mk) {
        return ;
      } else {
        min_key.contents = key;
        return ;
      }
    };
    var partial_arg = [
      a,
      b,
      min_key_rhs
    ];
    var do_key_a = function (param) {
      return do_key(partial_arg, param);
    };
    var partial_arg$1 = [
      b,
      a,
      min_key_lhs
    ];
    var do_key_b = function (param) {
      return do_key(partial_arg$1, param);
    };
    for_in(a, do_key_a);
    for_in(b, do_key_b);
    var match = min_key_lhs.contents;
    var match$1 = min_key_rhs.contents;
    if (match !== undefined) {
      if (match$1 !== undefined) {
        return caml_string_compare(match, match$1);
      } else {
        return -1;
      }
    } else if (match$1 !== undefined) {
      return 1;
    } else {
      return 0;
    }
  }

  function caml_equal(a, b) {
    if (a === b) {
      return true;
    }
    var a_type = typeof a;
    if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
      return false;
    }
    var b_type = typeof b;
    if (a_type === "function" || b_type === "function") {
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "equal: functional value",
            Error: new Error()
          };
    }
    if (b_type === "number" || b_type === "undefined" || b === null) {
      return false;
    }
    var tag_a = a.TAG | 0;
    var tag_b = b.TAG | 0;
    if (tag_a === 248) {
      return a[1] === b[1];
    }
    if (tag_a === 251) {
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "equal: abstract value",
            Error: new Error()
          };
    }
    if (tag_a !== tag_b) {
      return false;
    }
    var len_a = a.length | 0;
    var len_b = b.length | 0;
    if (len_a === len_b) {
      if (Array.isArray(a)) {
        var _i = 0;
        while(true) {
          var i = _i;
          if (i === len_a) {
            return true;
          }
          if (!caml_equal(a[i], b[i])) {
            return false;
          }
          _i = i + 1 | 0;
          continue ;
        }    } else if ((a instanceof Date && b instanceof Date)) {
        return !(a > b || a < b);
      } else {
        var result = {
          contents: true
        };
        var do_key_a = function (key) {
          if (!b.hasOwnProperty(key)) {
            result.contents = false;
            return ;
          }
          
        };
        var do_key_b = function (key) {
          if (!a.hasOwnProperty(key) || !caml_equal(b[key], a[key])) {
            result.contents = false;
            return ;
          }
          
        };
        for_in(a, do_key_a);
        if (result.contents) {
          for_in(b, do_key_b);
        }
        return result.contents;
      }
    } else {
      return false;
    }
  }
  /* No side effect */

  function forEachU(s, f, action) {
    for(var i = s; i <= f; ++i){
      action(i);
    }
    
  }

  function forEach(s, f, action) {
    return forEachU(s, f, __1(action));
  }
  /* No side effect */

  var asHtmlElement = (function(element) {
        if ((window.constructor.name !== undefined && /^HTML\w*Element$/.test(element.constructor.name))
            || (/^\[object HTML\w*Element\]$/.test(element.constructor.toString()))) {
          return element;
        }
      });
  /* include Not a pure module */

  // Generated by ReScript, PLEASE EDIT WITH CARE

  function cmp(param, param$1) {
    var rowB = param$1[0];
    var rowA = param[0];
    if (caml_equal(rowA, rowB)) {
      return caml_compare(param[1], param$1[1]);
    } else {
      return caml_compare(rowA, rowB);
    }
  }

  var CellCmp = MakeComparable({
        cmp: cmp
      });

  var flaggedCellsSet = {
    contents: make(CellCmp)
  };

  var revealedCellsSet = {
    contents: make(CellCmp)
  };

  var cellsDomMap = {
    contents: make$1(CellCmp)
  };

  var mineField = document.getElementById("minefield");

  var restart = document.getElementById("restart");

  var congrats = document.getElementById("congrats");

  var congrats$1 = (congrats == null) ? undefined : some(congrats);

  var loh = document.getElementById("loh");

  var loh$1 = (loh == null) ? undefined : some(loh);

  function toggleElement(element, displayValue) {
    if (element === undefined) {
      return ;
    }
    var htmlElement = asHtmlElement(valFromOption(element));
    if (htmlElement === undefined) {
      return ;
    }
    var __x = valFromOption(htmlElement).style;
    __x.setProperty("display", displayValue, "");
    
  }

  function neighbourCells(param) {
    var col = param[1];
    var row = param[0];
    var neighbours = [
      [
        row,
        col + 1 | 0
      ],
      [
        row,
        col - 1 | 0
      ],
      [
        row + 1 | 0,
        col + 1 | 0
      ],
      [
        row + 1 | 0,
        col - 1 | 0
      ],
      [
        row - 1 | 0,
        col + 1 | 0
      ],
      [
        row - 1 | 0,
        col - 1 | 0
      ],
      [
        row + 1 | 0,
        col
      ],
      [
        row - 1 | 0,
        col
      ]
    ];
    var filter = function (param) {
      var col = param[1];
      var row = param[0];
      return !(row < 0 || col < 0 || row > 8 || col > 8);
    };
    return neighbours.filter(filter);
  }

  function applyStyling(param) {
    if (mineField == null) {
      return ;
    }
    var htmlMineField = asHtmlElement(mineField);
    if (htmlMineField === undefined) {
      return ;
    }
    var htmlMineField$1 = valFromOption(htmlMineField);
    var __x = htmlMineField$1.style;
    __x.setProperty("width", String(270) + "px", "");
    var __x$1 = htmlMineField$1.style;
    __x$1.setProperty("height", String(270) + "px", "");
    
  }

  function showBombs(bombsMap, cell) {
    var domCell = get(cellsDomMap.contents, cell);
    if (domCell !== undefined) {
      var htmlCell = asHtmlElement(valFromOption(domCell));
      if (htmlCell !== undefined) {
        toggleElement(loh$1, "block");
        var __x = valFromOption(htmlCell).style;
        __x.setProperty("background-color", "red", "");
      }
      
    }
    var __x$1 = reduce(bombsMap, [], (function (cells, cell, value) {
            if (value !== 0) {
              return cells;
            } else {
              return concat(cells, [cell]);
            }
          }));
    return forEach$1(__x$1, (function (cell) {
                  var domCell = get(cellsDomMap.contents, cell);
                  if (domCell === undefined) {
                    return ;
                  }
                  var __x = valFromOption(domCell);
                  __x.textContent = "💣";
                  
                }));
  }

  function revealCell(bombsMap, cell, cellDom) {
    var setBtnStyle = function (value, color) {
      cellDom.textContent = value;
      var htmlCell = asHtmlElement(cellDom);
      if (htmlCell === undefined) {
        return ;
      }
      var __x = valFromOption(htmlCell).style;
      __x.setProperty("color", color, "");
      
    };
    var value = get(bombsMap, cell);
    if (value !== undefined) {
      switch (value) {
        case 0 :
            return showBombs(bombsMap, cell);
        case 1 :
            return setBtnStyle("1", "blue");
        case 2 :
            return setBtnStyle("2", "green");
        default:
          return setBtnStyle(String(value), "red");
      }
    } else {
      var cellHtml = asHtmlElement(cellDom);
      if (cellHtml === undefined) {
        return ;
      }
      var __x = valFromOption(cellHtml).style;
      __x.setProperty("background-color", "grey", "");
      return ;
    }
  }

  function revealCells(bombsMap, cell) {
    var reducer = function (cell) {
      if (has(revealedCellsSet.contents, cell)) {
        return ;
      }
      var cellDom = get(cellsDomMap.contents, cell);
      if (cellDom !== undefined) {
        revealCell(bombsMap, cell, valFromOption(cellDom));
      }
      revealedCellsSet.contents = add(revealedCellsSet.contents, cell);
      return revealCells(bombsMap, cell);
    };
    if (has$3(bombsMap, cell)) {
      return ;
    } else {
      return forEach$1(neighbourCells(cell), reducer);
    }
  }

  function toggleFlag(cell, domCell) {
    if (has(flaggedCellsSet.contents, cell)) {
      flaggedCellsSet.contents = remove(flaggedCellsSet.contents, cell);
      domCell.textContent = "";
    } else {
      flaggedCellsSet.contents = add(flaggedCellsSet.contents, cell);
      domCell.textContent = "🚩";
    }
    
  }

  function createButton(bombsMap, cell) {
    var cellDom = document.createElement("button");
    cellsDomMap.contents = set(cellsDomMap.contents, cell, cellDom);
    cellDom.addEventListener("contextmenu", (function ($$event) {
            toggleFlag(cell, cellDom);
            $$event.preventDefault();
            var bombsCells = reduce(bombsMap, [], (function (arr, k, v) {
                    if (v !== 0) {
                      return arr;
                    } else {
                      return concat(arr, [k]);
                    }
                  }));
            var match = cmp$1(flaggedCellsSet.contents, fromArray(bombsCells, CellCmp));
            if (match !== 0) {
              return ;
            } else {
              return toggleElement(congrats$1, "block");
            }
          }));
    cellDom.addEventListener("click", (function (param) {
            revealCell(bombsMap, cell, cellDom);
            return revealCells(bombsMap, cell);
          }));
    var htmlCell = asHtmlElement(cellDom);
    if (htmlCell !== undefined) {
      var htmlCell$1 = valFromOption(htmlCell);
      var __x = htmlCell$1.style;
      __x.setProperty("float", "left", "");
      var __x$1 = htmlCell$1.style;
      __x$1.setProperty("width", String(30) + "px", "");
      var __x$2 = htmlCell$1.style;
      __x$2.setProperty("height", String(30) + "px", "");
    }
    return cellDom;
  }

  function generateBombsMap(bombs) {
    var bombsMap = make$1(CellCmp);
    var increaseDanger = function (map, cell) {
      var value = get(map, cell);
      if (value !== undefined) {
        if (value === 0) {
          return map;
        } else {
          return set(map, cell, value + 1 | 0);
        }
      } else {
        return set(map, cell, 1);
      }
    };
    var reducer = function (map, bombCell) {
      var __x = neighbourCells(bombCell);
      return reduce$1(__x, set(map, bombCell, 0), increaseDanger);
    };
    return reduce$1(bombs, bombsMap, reducer);
  }

  function generateBombs(_gennedBombs, bombsCount) {
    while(true) {
      var gennedBombs = _gennedBombs;
      var genCoordTuple = function (param) {
        return [
                random_int(0, 9),
                random_int(0, 9)
              ];
      };
      if (gennedBombs !== undefined) {
        var length = gennedBombs.length;
        if (length < bombsCount) {
          return generateBombs(gennedBombs.concat([genCoordTuple(undefined)]), bombsCount);
        }
        var bombs = gennedBombs.reduce((function (withoutCoopies, param) {
                var row = param[1];
                var col = param[0];
                var match = withoutCoopies.find(function (param) {
                      if (param[1] === row) {
                        return param[0] === col;
                      } else {
                        return false;
                      }
                    });
                if (match !== undefined) {
                  return withoutCoopies;
                } else {
                  return withoutCoopies.concat([[
                                col,
                                row
                              ]]);
                }
              }), [get$3(gennedBombs, 0)]);
        if (bombsCount === bombs.length) {
          return bombs;
        } else {
          return generateBombs(bombs, bombsCount);
        }
      }
      _gennedBombs = [genCoordTuple(undefined)];
      continue ;
    }}

  function generateField(param) {
    var bombsMap = generateBombsMap(generateBombs(undefined, 9));
    var reducer = function (colId) {
      return forEach(0, 8, (function (rowId) {
                    if (mineField == null) {
                      return ;
                    }
                    var btn = createButton(bombsMap, [
                          colId,
                          rowId
                        ]);
                    mineField.appendChild(btn);
                    
                  }));
    };
    return forEach(0, 8, reducer);
  }

  function startGame(param) {
    applyStyling();
    return generateField();
  }

  applyStyling();

  generateField();

  if (!(restart == null)) {
    restart.addEventListener("click", (function (param) {
            flaggedCellsSet.contents = make(CellCmp);
            revealedCellsSet.contents = make(CellCmp);
            cellsDomMap.contents = make$1(CellCmp);
            toggleElement(loh$1, "none");
            toggleElement(congrats$1, "none");
            if (mineField == null) {
              return ;
            }
            var __x = Array.prototype.slice.call(mineField.children);
            map(__x, (function (child) {
                    return mineField.removeChild(child);
                  }));
            applyStyling();
            return generateField();
          }));
  }

  var rows = 9;

  var cols = 9;

  var size = 30;

  var mineField$1 = (mineField == null) ? undefined : some(mineField);

  var restart$1 = (restart == null) ? undefined : some(restart);
  /* CellCmp Not a pure module */

  exports.CellCmp = CellCmp;
  exports.applyStyling = applyStyling;
  exports.cellsDomMap = cellsDomMap;
  exports.cols = cols;
  exports.congrats = congrats$1;
  exports.createButton = createButton;
  exports.flaggedCellsSet = flaggedCellsSet;
  exports.generateBombs = generateBombs;
  exports.generateBombsMap = generateBombsMap;
  exports.generateField = generateField;
  exports.loh = loh$1;
  exports.mineField = mineField$1;
  exports.neighbourCells = neighbourCells;
  exports.restart = restart$1;
  exports.revealCell = revealCell;
  exports.revealCells = revealCells;
  exports.revealedCellsSet = revealedCellsSet;
  exports.rows = rows;
  exports.showBombs = showBombs;
  exports.size = size;
  exports.startGame = startGame;
  exports.toggleElement = toggleElement;
  exports.toggleFlag = toggleFlag;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
