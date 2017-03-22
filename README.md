# bigmath

arithmetic operators for arbitrary-precision numbers using [`bignumber.js`](https://mikemcl.github.io/bignumber.js/)

rather than [constructing `BigNumber`](https://mikemcl.github.io/bignumber.js/#bignumber) instances from your numbers and using instance methods, this module provides the same methods as static functions.

```shell
npm install --save bigmath
```

## usage

### `BigMath = require('bigmath')`

`BigMath` is an grab-bag of the following operators from [`bignumber.js`](https://mikemcl.github.io/bignumber.js/):

if the operator normally returns a [`BigNumber`](https://mikemcl.github.io/bignumber.js/#bignumber), our operator instead returns a string using [`.valueOf()`](https://mikemcl.github.io/bignumber.js/#valueOf).

- [`absoluteValue`](https://mikemcl.github.io/bignumber.js/#abs)
- [`abs`](https://mikemcl.github.io/bignumber.js/#abs)
- [`ceil`](https://mikemcl.github.io/bignumber.js/#ceil)
- [`comparedTo`](https://mikemcl.github.io/bignumber.js/#cmp)
- [`cmp`](https://mikemcl.github.io/bignumber.js/#cmp)
- [`decimalPlaces`](https://mikemcl.github.io/bignumber.js/#dp)
- [`dp`](https://mikemcl.github.io/bignumber.js/#dp)
- [`dividedBy`](https://mikemcl.github.io/bignumber.js/#div)
- [`div`](https://mikemcl.github.io/bignumber.js/#div)
- [`dividedToIntegerBy`](https://mikemcl.github.io/bignumber.js/#divInt)
- [`divToInt`](https://mikemcl.github.io/bignumber.js/#divInt)
- [`equals`](https://mikemcl.github.io/bignumber.js/#eq)
- [`eq`](https://mikemcl.github.io/bignumber.js/#eq)
- [`floor`](https://mikemcl.github.io/bignumber.js/#floor)
- [`greaterThan`](https://mikemcl.github.io/bignumber.js/#
- [`gt`](https://mikemcl.github.io/bignumber.js/#gt)
- [`greaterThanOrEqualTo`](https://mikemcl.github.io/bignumber.js/#gte)
- [`gte`](https://mikemcl.github.io/bignumber.js/#gte)
- [`isFinite`](https://mikemcl.github.io/bignumber.js/#isF)
- [`isInteger`](https://mikemcl.github.io/bignumber.js/#isInt)
- [`isInt`](https://mikemcl.github.io/bignumber.js/#isInt)
- [`isNaN`](https://mikemcl.github.io/bignumber.js/#isNaN)
- [`isNegative`](https://mikemcl.github.io/bignumber.js/#isNeg)
- [`isNeg`](https://mikemcl.github.io/bignumber.js/#isNeg)
- [`isZero`](https://mikemcl.github.io/bignumber.js/#isZ)
- [`lessThan`](https://mikemcl.github.io/bignumber.js/#lt)
- [`lt`](https://mikemcl.github.io/bignumber.js/#lt)
- [`lessThanOrEqualTo`](https://mikemcl.github.io/bignumber.js/#lte)
- [`lte`](https://mikemcl.github.io/bignumber.js/#lte)
- [`minus`](https://mikemcl.github.io/bignumber.js/#minus)
- [`sub`](https://mikemcl.github.io/bignumber.js/#minus)
- [`modulo`](https://mikemcl.github.io/bignumber.js/#mod)
- [`mod`](https://mikemcl.github.io/bignumber.js/#mod)
- [`negated`](https://mikemcl.github.io/bignumber.js/#neg)
- [`neg`](https://mikemcl.github.io/bignumber.js/#neg)
- [`plus`](https://mikemcl.github.io/bignumber.js/#plus)
- [`add`](https://mikemcl.github.io/bignumber.js/#plus)
- [`precision`](https://mikemcl.github.io/bignumber.js/#sd)
- [`sd`](https://mikemcl.github.io/bignumber.js/#sd)
- [`round`](https://mikemcl.github.io/bignumber.js/#round)
- [`shift`](https://mikemcl.github.io/bignumber.js/#shift)
- [`squareRoot`](https://mikemcl.github.io/bignumber.js/#sqrt)
- [`sqrt`](https://mikemcl.github.io/bignumber.js/#sqrt)
- [`times`](https://mikemcl.github.io/bignumber.js/#times)
- [`max`](https://mikemcl.github.io/bignumber.js/#max)
- [`min`](https://mikemcl.github.io/bignumber.js/#min)
- [`mul`](https://mikemcl.github.io/bignumber.js/#times)
- [`toDigits`](https://mikemcl.github.io/bignumber.js/#toD)
- [`toExponential`](https://mikemcl.github.io/bignumber.js/#toE)
- [`toFixed`](https://mikemcl.github.io/bignumber.js/#toFix)
- [`toFormat`](https://mikemcl.github.io/bignumber.js/#toFor)
- [`toFraction`](https://mikemcl.github.io/bignumber.js/#toFr)
- [`toJSON`](https://mikemcl.github.io/bignumber.js/#toJSON)
- [`toNumber`](https://mikemcl.github.io/bignumber.js/#toN)
- [`toPower`](https://mikemcl.github.io/bignumber.js/#pow)
- [`pow`](https://mikemcl.github.io/bignumber.js/#pow)
- [`random`](https://mikemcl.github.io/bignumber.js/#random)
- [`toPrecision`](https://mikemcl.github.io/bignumber.js/#toP)
- [`toString`](https://mikemcl.github.io/bignumber.js/#toS)
- [`truncated`](https://mikemcl.github.io/bignumber.js/#trunc)
- [`trunc`](https://mikemcl.github.io/bignumber.js/#trunc)
- [`valueOf`](https://mikemcl.github.io/bignumber.js/#valueOf)

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
