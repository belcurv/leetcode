
# Explanation

It took writing down multiple iterations before the pattern emerged:

For any given `n`, the number of ways to reach steps `s` is equal to the sum of the previous two `n`'s steps

<span><pre>s<sub>n</sub> = s<sub>n-2</sub> + s<sub>n-1</sub></pre><span>

The first `n`'s are easily brute forced:

---

For `n = 1`, steps = 1

```
step     permutation
--------------------
1        1
```

---

For `n = 2`, steps = 2

```
step     permutation
--------------------
1        1, 1
2        2
```

Every future `n` is based on the previous two `n`'s results:

---

For `n = 3`, steps = 3  (2 + 1)

```
step     permutation
--------------------
1        1, 1, 1
2        1, 2
3        2, 1
```

---

For `n = 4`, steps = 5  (3 + 2)

```
step     permutation
--------------------
1        1, 1, 1, 1
2        1, 1, 2
3        1, 2, 1
4        2, 1, 1
5        2, 2
```

---

For `n = 5`, steps = 8  (5 + 3)

```
step     permutation
----------------------
1        1, 1, 1, 1, 1
2        1, 1, 1, 2   
3        1, 1, 2, 1   
4        1, 2, 1, 1   
5        2, 1, 1, 1   
6        1, 2, 2      
7        2, 1, 2      
8        2, 2, 1      
```

---

For `n = 6`, steps = 13  (8 + 5)

```
step     permutation
-------------------------
1        1, 1, 1, 1, 1, 1
2        1, 1, 1, 1, 2
3        1, 1, 1, 2, 1
4        1, 1, 2, 1, 1
5        1, 2, 1, 1, 1
6        2, 1, 1, 1, 1
7        1, 1, 2, 2
8        1, 2, 1, 2
9        2, 1, 1, 2
10       1, 2, 2, 1
11       2, 1, 2, 1
12       2, 2, 1, 1
13       2, 2, 2
```

---

For `n = 7`, steps = 21  (13 + 8)

```
step     permutation
----------------------------
1        1, 1, 1, 1, 1, 1, 1
2        1, 1, 1, 1, 1, 2   
3        1, 1, 1, 1, 2, 1
4        1, 1, 1, 2, 1, 1
5        1, 1, 2, 1, 1, 1
6        1, 2, 1, 1, 1, 1
7        2, 1, 1, 1, 1, 1
8        1, 1, 1, 2, 2
9        1, 1, 2, 1, 2
10       1, 2, 1, 1, 2
11       2, 1, 1, 1, 2
12       1, 1, 2, 2, 1
13       1, 2, 1, 2, 1
14       2, 1, 1, 2, 1
15       1, 2, 2, 1, 1
16       2, 1, 2, 1, 1
17       2, 2, 1, 1, 1
18       1, 2, 2, 2
19       2, 1, 2, 2
20       2, 2, 1, 2
21       2, 2, 2, 1
```

---

## Hypothesis:

for `n = 8`, steps = `34`

<span>
  <pre>
    s<sub>8</sub> = s<sub>6</sub> + s<sub>7</sub>
    s<sub>8</sub> = 13 + 21 = 34
  </pre>
<span>
