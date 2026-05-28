---
title: "数系 (I)（Number Systems I）"
tag: DSE课程笔记
---

# 1　数系 (I)（Number Systems I）

> 从计数出发，自然数是最原始的数的概念。本章将数的范围逐步扩展：自然数 → 整数 → 有理数 → 实数，并在每一阶段讨论数的分类、运算性质和大小比较。

---

## 1.1　自然数与质数（Natural Numbers and Primes）

### 1.1.1　带余除法

> 在上一章中我们定义了整除关系。如果两个自然数无法形成整除关系，我们可以用余数的概念来描述。

> [!info] 定理（Theorem）
> **定理（带余除法 / Division with Remainder）**  
> 对自然数 $n, b$（$n > b$），存在唯一的自然数 $q, r$ 使得
> $$n = b \times q + r,\quad (r < b)$$
> 称 $q$ 为**商**（quotient），$r$ 为**余数**（remainder）。若 $r = 0$，则 $n$ 被 $b$ 整除（即 $b \mid n$）。

> [!success] 证明（Proof）
> （非严谨）因 $n > b$，考虑将 $b$ 分别乘以 $1, 2, 3, \dots$：
> $$1 \times b,\; 2 \times b,\; 3 \times b,\; \dots$$
> 必定存在某个自然数 $q$ 使得 $n > b \times q$ 且 $n < b \times (q + 1)$。令 $r = n - b \times q$，则 $r < b$，且 $n = b \times q + r$。
>
> > 此证明依赖「存在最大 $q$ 使得 $b \times q \le n$」这一直观事实，严格证明需用到**良序原理**（Well-Ordering Principle），现阶段不深入。

> [!example] 例子（Example）
> 1. $15$ 不能被 $7$ 整除：$15 = 7 \times 2 + 1$，商为 $2$，余数为 $1$。
> 2. $28$ 可被 $7$ 整除：$28 = 7 \times 4 + 0$，余数为 $0$。

### 1.1.2　质数与合成数

> 自然数中除 $1$ 之外存在一类非常特殊的数，只能被 $1$ 和自己整除，如 $2,3,5,7,11,13,\dots$。这些数被称为质数。

> [!abstract] 定义（Definition）
> **定义（质数与合成数 / Prime and Composite）**  
> 若自然数 $p > 1$ 只能被 $1$ 和自己整除，则称 $p$ 为**质数**（Prime）。否则称 $p$ 为**合成数**或**合数**（Composite）。

> [!example] 例子（Example）
> 1. $7$ 只能被 $1$ 和 $7$ 整除，故 $7$ 是质数。
> 2. $35 = 5 \times 7$，故 $35$ 是合成数。
> 3. 前 $10$ 个质数：$2, 3, 5, 7, 11, 13, 17, 19, 23, 29$。

> [!info] 定理（Theorem）
> **定理：** $p$ 为合成数 $\iff$ $p = ab$，其中 $a, b > 1$ 为自然数。

> [!success] 证明（Proof）
> $(\Leftarrow)$ 若 $p = ab$（$a, b > 1$），则 $p$ 可被 $a$ 整除且 $a \neq 1, a \neq p$，故 $p$ 不是质数，即为合成数。
>
> $(\Rightarrow)$ 若 $p$ 为合成数，则 $p$ 可被某个大于 $1$ 且小于 $p$ 的数整除。设该数为 $a$，则 $p = ab$。因 $a < p$，故 $b > 1$。

### 1.1.3　质因数

> [!abstract] 定义（Definition）
> **定义（质因数 / Prime Factor）**  
> 若 $n$ 的某个因数 $p$ 为质数，则称 $p$ 为 $n$ 的**质因数**。

> 例如 $70$ 的因数为 $1,2,5,7,10,14,35,70$，其中 $2,5,7$ 是质数，故 $70$ 的质因数为 $2,5,7$。

> [!info] 定理（Theorem）
> **定理：** 任意大于 $1$ 的自然数必定有质因数。

> [!success] 证明（Proof）
> 反证法。假设存在某些大于 $1$ 的自然数没有质因数，取其中最小者记为 $m$。
>
> 若 $m$ 为质数，则 $m$ 以自身为质因数，矛盾。故 $m$ 为合数，可写为 $m = a \times b$（$a, b > 1$）。因 $a, b < m$，且 $m$ 为最小反例，故 $a, b$ 均有质因数。由引理 1.1.1，$a$ 的质因数亦是 $m$ 的质因数，矛盾。故原命题成立。

> [!example] 例子（Example）
> 求 $48$ 的质因数：$48$ 的因数为 $1,2,3,4,6,8,12,16,24,48$，其中质数为 $2, 3$，故质因数为 $2$ 和 $3$。

### 1.1.4　Euclid 定理

> [!info] 定理（Theorem）
> **定理（Euclid 定理 / Euclid's Theorem）：** 质数有无穷多个。

> [!success] 证明（Proof）
> 反证法。假设质数只有有限多个，记为 $p_1, p_2, \dots, p_n$。构造：
> $$m = p_1 \times p_2 \times \cdots \times p_n + 1$$
> 对每个 $p_i$，$m$ 除以 $p_i$ 的余数均为 $1$，故 $p_i \nmid m$。但由定理 1.1.3，$m$ 作为大于 $1$ 的自然数必定有质因数。这矛盾说明假设错误，故质数有无穷多个。

> 人类目前发现的最大质数为 $2^{136279841} - 1$，拥有超过 4100 万位数。

### 1.1.5　唯一质因数分解定理

> [!note] 引理（Lemma）
> **引理：** 若自然数 $a$ 有质因数 $p$，则 $m = a \times b$ 也有质因数 $p$。

> [!success] 证明（Proof）
> 因 $a$ 有质因数 $p$，可将 $a$ 写为 $a = pM$（$M$ 为自然数）。则
> $$m = a \times b = pM \times b$$
> 故 $p \mid m$，即 $m$ 有质因数 $p$。

> 该引理说明：任意自然数 $m$ 的因子的质因数也必定是 $m$ 的质因数。

> [!info] 定理（Theorem）
> **定理（唯一质因数分解定理 / Fundamental Theorem of Arithmetic）**  
> 任意大于 $1$ 的自然数都可被**唯一**地写为其质因数之积：
> $$n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$$
> 此表示式称为**质因数连乘式**（prime factorization）。

> [!success] 证明（Proof）
> （存在性部分，非完整证明）反证法。假设存在一些大于 $1$ 的自然数不可被写为质因数之积，取其中最小者记为 $m$。
>
> 若 $m$ 为质数，则 $m = m$ 已是质因数之积，矛盾。故 $m$ 为合数，$m = a \times b$（$a, b > 1$）。因 $a, b < m$ 且 $m$ 为最小反例，故 $a, b$ 均可被写为质因数之积。由引理 1.1.1，$a, b$ 的质因数均为 $m$ 的质因数，故 $m$ 亦可被写为质因数之积，矛盾。
>
> > 唯一性的证明对中学阶段而言无需掌握，在此略去。

> [!example] 例子（Example）
> 对 $120$ 进行质因数分解：
> $$120 = 12 \times 10 = (6 \times 2) \times (5 \times 2) = (3 \times 2) \times 2 \times 5 \times 2 = 2^3 \times 3 \times 5$$

---

## 1.2　整数与数轴（Integers and the Number Line）

> 在 §1.1 中我们学习了自然数的概念。在此节，我们将数字与方向的概念相互联系，以几何方式表示数，并引入「负数」，将自然数推广至整数。

### 1.2.1　数轴与数的几何表示

若将所有自然数按从小到大的顺序从左至右排列，会得到一条由自然数构成的数轴：
$$0 < 1 < 2 < 3 < 4 < 5 < 6 < \cdots$$

数轴上的基本规律：
1. 较大的数永远落在较小的数之右。
2. 若两个数在数轴上位于同一位置，则两个数相等。
3. $0$ 是自然数构成的数轴的最左端。
4. 对每一个在数轴上的数，它的右端总有其他数（即没有最大的数）。

 >加法与减法的**几何意义**：
 >
 >1. 对自然数 $a, b$，$a + b$ 意味着从 $a$ 向右走 $b$ 格；
 >
 >2. 若 $a \ge b$，$a - b$ 意味着从 $a$ 向左走 $b$ 格。
 >
> 乘法的**几何意义**（仅适用于自然数）：$a \times b$ 意味着将 $a$ 与 $0$ 的距离放大 $b$ 倍。

> [!example] 例子（Example）
> 取 $a = 7, b = 3$：
> - $a + b$ 为从 $7$ 向右走 $3$ 格，到达 $10$（$7+3=10$）；
> - $a - b$ 为从 $7$ 向左走 $3$ 格，到达 $4$（$7-3=4$）。
>
>   [subsection1.2.1_2.pdf](subsection1.2.1_2.pdf)
>
> 取 $a = 2, b = 3$：$2 \times 3$ 为将 $2$ 与 $0$ 的距离放大 $3$ 倍，到达 $6$。
>
> [subsection1.2.1_3.pdf](subsection1.2.1_3.pdf)

#### 数轴与有向数

将 $0$ 视为起始点，用从 $0$ 指向该数的箭头表示数轴上的数。箭头的长度就是数的大小，箭头的方向赋予该数的「方向」。所有自然数的方向都是向右的。

我们希望加入一些「向左的」数。考虑 $0 - 1$——虽然它不是自然数，但使用减法的几何意义，它是从 $0$ 向左移动 $1$ 格。由此定义：

> [!abstract] 定义（Definition）
> **定义（整数 / Integer）：**
> - 对任意自然数 $n$，规定 $0 - n = -n$，称 $-1, -2, -3, \dots$ 为**负整数**（Negative Integer）。
> - 相对地，$1, 2, 3, \dots$ 称为**正整数**（Positive Integer）。
> - $0$ 既非正整数，也非负整数。
> - $0$ 与正整数及负整数三者统称为**整数**，记作 $\mathbb{Z}$。

> [!example] 例子（Example）
> 在数轴上，$+5$ 是从 $0$ 向右走 $5$ 格；$-5$ 是从 $0$ 向左走 $5$ 格。两者关于 $0$ 对称。

> 向后文中，负整数对应「负方向（向左）」，正整数对应「正方向（向右）」。

### 1.2.2　整数的运算

#### 几何意义

利用数轴和方向性，可直观定义整数的加减运算：

> [!abstract] 定义（Definition）
> **定义（整数的加减法 / Addition and Subtraction of Integers）：**  
>
> 对任意整数 $a, b$：
> 1. $a + b = b + a$（加法交换律）
> 2. $(a + b) + c = a + (b + c)$（加法结合律）
> 3. $a - b = a + (-b)$

> 在数轴上，$a + b$ 即为将代表 $a$ 的箭头的首与代表 $b$ 的箭头的尾首尾相连后所在的位置。减法 $a - b$ 等价于 $a + (-b)$。

> [!abstract] 定义（Definition）
> **定义（整数的乘法 / Multiplication of Integers）：**  
>
> 对任意整数 $a, b, c$，乘法具有：
> 1. $a \times b = b \times a$（乘法交换律）
> 2. $(a \times b) \times c = a \times (b \times c)$（乘法结合律）
> 3. $a \times (b + c) = a \times b + a \times c$（乘法对加法的分配律）
> 4. $a \times (b - c) = a \times b - a \times c$（乘法对减法的分配律）

> [!abstract] 定义（Definition）
> **定义（整数的整除 / Divisibility of Integers）：**  
>
> 若整数 $n \neq 0$ 可写成两个非零整数相乘 $n = p \times q$（$p, q \neq 0$），则称 $p$ 整除 $n$，记为 $n \div p = q$ 或 $p \mid n$。特别地，$0$ 可被所有非零整数整除。

> [!abstract] 定义（Definition）
> **定义（整数的运算律 / Operation Laws of Integers）：**  
>
> 对任意整数 $a, b, c$：
> - 加法有单位元 $0$：$a + 0 = 0 + a = a$；有逆元 $-a$：$a + (-a) = 0$
> - 乘法有单位元 $1$：$a \times 1 = 1 \times a = a$
> - $-a = (-1) \times a$
> - 加法与乘法均满足交换律、结合律，乘法对加法满足分配律

#### 乘以 $-1$ 的几何意义

从数轴观察：$a$ 与 $-a$ 是以 $0$ 为中心对称的点，箭头长度相同、方向相反。因此可定义：

> 对任意整数 $a$，乘以 $-1$ 在数轴上意味着将 $a$ 的位置以 $0$ 为中心进行**反射**（Reflection）。

由此，$(-1) \times (-1)$ 即为将 $-1$（向左）反射一次，得到 $+1$（向右），即 $(-1) \times (-1) = 1$。进而推出「负负得正」：$(-a)(-b) = ab$。

> [!example] 例子（Example）
> 1. $3 \times (-1) = (-1) + (-1) + (-1) = -3$（有 $3$ 个 $-1$ 相加）。
> 2. $(-3) \times (-1) = 3$（将 $-3$ 以 $0$ 为中心反射）。

> [!info] 定理（Theorem）
> **定理：** $(-1)^2 = 1$。

> [!success] 证明（Proof）
> （纯代数证明，不使用数轴）从 $0 = 1 + (-1)$ 出发：
> $$
> \begin{aligned}
> 0^2 &= 0 \cdot 0 \\
> &= 0 \cdot (1 + (-1)) \\
> &= 0 \cdot 1 + 0 \cdot (-1) \\
> &= (1 + (-1)) \cdot 1 + (1 + (-1)) \cdot (-1) \\
> &= 1 \cdot 1 + (-1) \cdot 1 + 1 \cdot (-1) + (-1) \cdot (-1) \\
> &= 1 + (-1) + (-1) + (-1)^2 \\
> &= (-1) + (-1)^2
> \end{aligned}
> $$
> 所以 $0 = (-1) + (-1)^2$，即 $(-1)^2 = 1$。

> [!info] 定理（Theorem）
> **定理（乘除结合律）：** 对整数 $a, b, c$（$b, c \neq 0$）：
> 1. $a \div b \div c = a \div (bc)$
> 2. $a \times b \div c = a \div c \times b$

> [!info] 定理（Theorem）
> **定理：** 对整数 $a$，$a \div (-1) = -a$。

> [!info] 定理（Theorem）
> **定理：** 对整数 $a, b$（$b \neq 0$），$a \div (-b) = (-a) \div b = -(a \div b)$。

> [!info] 定理（Theorem）
> **定理：** 对整数 $a, b$（$b \neq 0$），$(-a) \div (-b) = a \div b$。

> [!success] 证明（Proof）
> （以定理 1.2.4 为例）证明 $a \div (-b) = -(a \div b)$：
>
> 设 $a \div (-b) = x$，$-(a \div b) = y$。由整除定义：
> $$a = (-b)x,\quad a \div b = -y \implies a = (-y)b$$
> 即 $(-y)b = (-b)x$，故 $-by = -bx$，得 $x = y$。
>
> > 其余证明思路类似（设商后利用整除定义消去），在此不逐一展开。

> **口诀：** 正正得正，负负得正，正负得负，负正得负。
>
> **括号前负号：** $-(a + b) = -a - b$；$-(a - b) = -a + b$。

> [!example] 例子（Example）
> 1. $(-20) \div 5 = -4$
> 2. $14 \div (-7) = -2$
> 3. $(-24) \div (-8) = 3$
> 4. $2 \times (-2) + (-5) \times 6 = -4 - 30 = -34$
> 5. $2(5 - 9) \div 8 = 2(-4) \div 8 = (-8) \div 8 = -1$

### 1.2.3　整除的性质

> [!abstract] 定义（Definition）
> **定义（整除记号 / Divisibility Notation）：**  
> $b \mid a$ 表示 $b$ 整除 $a$；$b \nmid a$ 表示 $b$ 不整除 $a$。

> [!abstract] 定义（Definition）
> **定义（正负号记法）：**  
> $a \pm b$ 及 $a \mp b$ 表示同时取上方或同时取下方符号。

> [!info] 定理（Theorem）
> **定理：** 若 $p \mid a$，则 $p \mid ab$；若 $p \mid a$ 且 $p \mid b$，则 $p \mid (ma + nb)$（对任意整数 $m, n$）。

> [!success] 证明（Proof）
> (1) 若 $p \mid a$，则 $a = pk$。故 $ab = pk \cdot b = p(kb)$，即 $p \mid ab$。
>
> (2) 若 $p \mid a$ 且 $p \mid b$，则 $a = pk_1$，$b = pk_2$。故
> $$ma + nb = m(pk_1) + n(pk_2) = p(mk_1 + nk_2)$$
> 即 $p \mid (ma + nb)$。

> [!info] 定理（Theorem）
> **定理：** 若 $p \mid ab$ 且 $p \nmid a$（$p$ 为质数），则 $p \mid b$。

> [!example] 例子（Example）
> 已知 $3 \mid 12$，则 $3 \mid 12 \times 5 = 60$（定理 1.2.6）。又 $3 \mid 12$ 且 $3 \mid 15$，则 $3 \mid (2 \times 12 + 3 \times 15) = 69$。

### 1.2.4　公因数、最大公因数与互质

> [!abstract] 定义（Definition）
> **定义（因数 / Factor）：** 若 $p \mid n$，则 $p$ 为 $n$ 的**因数**（因子 / Divisor / Factor）。

> [!abstract] 定义（Definition）
> **定义（公因数与互质 / Common Factor and Coprime）：**  
> 若 $p$ 同时整除 $n, m$，则 $p$ 为 $n, m$ 的**公因数**。公因数中最大者为**最大公因数**，记为 $\gcd(n, m)$ 或 H.C.F.。若 $\gcd(n, m) = 1$，则 $n, m$ **互质**（Coprime）。

> [!tip] 推论（Corollary）
> **推论：** 若 $p$ 为 $n, m$ 的公因数，则 $-p$ 亦为公因数。

> [!info] 定理（Theorem）
> **定理：** $\gcd(n, m)$ 可被任何 $n, m$ 的公因数整除。

> [!info] 定理（Theorem）
> **定理：** $\gcd(n, m) = \gcd(-n, m) = \gcd(n, -m) = \gcd(-n, -m)$。

> [!note] 引理（Lemma）
> **引理：** 若 $\gcd(n, m) = 1$，则 $n, m$ 只有公因数 $\pm 1$。

> [!example] 例子（Example）
> 1. $\gcd(12, 18) = 6$；公因数为 $\pm 1, \pm 2, \pm 3, \pm 6$。
> 2. $8$ 与 $15$ 互质（$\gcd(8, 15) = 1$），仅公因数 $\pm 1$。

### 1.2.5　位值原理

> [!abstract] 定义（Definition）
> **定义（十进制位值原理 / Decimal Place Value）：**  
> 对于 $A = a_n a_{n-1} \cdots a_2 a_1$（$n \ge 1$）：
> $$A = 10^{n-1} a_n + 10^{n-2} a_{n-1} + \cdots + 10 a_2 + a_1$$
> $a_1$ 为个位，$a_2$ 为十位，$a_3$ 为百位，余此类推。

> [!example] 例子（Example）
> $345 = 10^2 \times 3 + 10^1 \times 4 + 5 = 300 + 40 + 5$。

### 1.2.6　整除性判别

以下各判别法均基于位值原理：将 $A$ 展开后，利用 $10^k$ 可被相关除数整除的性质得出充要条件。

> [!info] 定理（Theorem）
> **定理（被 $2$ 整除）：** $A$ 可被 $2$ 整除 $\iff$ 末位 $a_1$ 为偶数（$0, 2, 4, 6, 8$）。

> [!info] 定理（Theorem）
> **定理（被 $3$ 整除）：** $A$ 可被 $3$ 整除 $\iff$ 各位数字之和可被 $3$ 整除。

> [!info] 定理（Theorem）
> **定理（被 $4$ 整除）：** $A$ 可被 $4$ 整除 $\iff$ 末两位 $a_2 a_1$ 可被 $4$ 整除。

> [!info] 定理（Theorem）
> **定理（被 $5$ 整除）：** $A$ 可被 $5$ 整除 $\iff$ 末位 $a_1 = 0$ 或 $5$。

> [!info] 定理（Theorem）
> **定理（被 $6$ 整除）：** $A$ 可被 $6$ 整除 $\iff$ $A$ 同时可被 $2$ 及 $3$ 整除。

> [!info] 定理（Theorem）
> **定理（被 $8$ 整除）：** $A$ 可被 $8$ 整除 $\iff$ 末三位可被 $8$ 整除。

> [!info] 定理（Theorem）
> **定理（被 $9$ 整除）：** $A$ 可被 $9$ 整除 $\iff$ 各位数字之和可被 $9$ 整除。

> [!success] 证明（Proof）
> （以被 $3$ 整除为例）设 $A = a_n a_{n-1} \cdots a_1$。由位值原理：
> $$A = 10^{n-1}a_n + \cdots + 10a_2 + a_1$$
> 注意到 $10^k = \underbrace{99\dots9}_{k \text{ 个}} + 1$，而每个 $\underbrace{99\dots9}_{k \text{ 个}}$ 均可被 $3$ 整除。故：
> $$A = (\text{可被 3 整除的部分}) + (a_1 + a_2 + \cdots + a_n)$$
> 因此 $3 \mid A \iff 3 \mid (a_1 + a_2 + \cdots + a_n)$。
>
> > 对 $2,4,5,8$ 的判别法利用 $10^k$ 本身即可被这些数整除；对 $9$ 与 $3$ 同理。对 $6$ 利用 $2$ 和 $3$ 的组合。

> [!example] 例子（Example）
> 1. $372$：$3+7+2=12$，可被 $3$ 整除，故 $3 \mid 372$。
> 2. $2024$：末两位 $24$，可被 $4$ 整除，故 $4 \mid 2024$。
> 3. $1225$：末位为 $5$，故 $5 \mid 1225$。
> 4. $117$：$1+1+7=9$，可被 $9$ 整除，故 $9 \mid 117$。

---

## 1.3　有理数及无理数（Rational and Irrational Numbers）

### 1.3.1　分数及其运算

> [!abstract] 定义（Definition）
> **定义（分数 / Fraction）：**  
> 对整数 $a, b$（$b \neq 0$），称 $\dfrac{a}{b}$ 为**分数**，$a$ 为**分子**（numerator），$b$ 为**分母**（denominator）。分数可视为 $a \div b$。特别地，$\dfrac{a}{1} = a$，故所有整数均为分数。

> [!info] 定理（Theorem）
> **定理（分数相等条件）：** $\dfrac{a}{b} = \dfrac{c}{d} \iff ad = bc$。

> [!success] 证明（Proof）
> $\dfrac{a}{b} = \dfrac{c}{d}$ 即 $a \div b = c \div d$。由整除定义，设共同的商为 $k$，则 $a = bk$、$c = dk$。故 $ad = bkd = b(dk) = bc$。反向同理。

> [!tip] 推论（Corollary）
> **推论（约分及通分 / Reduction）：** $\dfrac{ac}{bc} = \dfrac{a}{b}$（$c \neq 0$）。

> [!abstract] 定义（Definition）
> **定义（分数乘法 / Multiplication of Fractions）：** $\dfrac{a}{b} \cdot \dfrac{c}{d} = \dfrac{ac}{bd}$。

> [!abstract] 定义（Definition）
> **定义（倒数 / Reciprocal）：** $\dfrac{a}{b}$ 的倒数为 $\dfrac{b}{a}$（$a \neq 0$），且有 $\dfrac{a}{b} \cdot \dfrac{b}{a} = 1$。

> [!abstract] 定义（Definition）
> **定义（分数除法 / Division of Fractions）：** $\dfrac{a}{b} \div \dfrac{c}{d} = \dfrac{a}{b} \times \dfrac{d}{c}$（$c \neq 0$）。

> [!abstract] 定义（Definition）
> **定义（最简分数 / Simplest Fraction）：** 若 $\gcd(a, b) = 1$，则 $\dfrac{a}{b}$ 为**最简分数**，不可再约。

> [!info] 定理（Theorem）
> **定理（同分母加减）：** $\dfrac{a}{c} \pm \dfrac{b}{c} = \dfrac{a \pm b}{c}$。

> [!info] 定理（Theorem）
> **定理（异分母加减）：** $\dfrac{a}{c} \pm \dfrac{b}{d} = \dfrac{ad \pm bc}{cd}$。

> [!abstract] 定义（Definition）
> **定义（分数的运算律 / Operation Laws of Fractions）：**  
> 分数的加法和乘法同样满足交换律、结合律、分配律。加法有单位元 $0$ 及逆元 $-a$；乘法有单位元 $1$，且每个非零分数均有乘法逆元（即倒数）。

> [!example] 例子（Example）
> 1. $\dfrac{2}{3} \times \dfrac{5}{7} = \dfrac{10}{21}$
> 2. $\dfrac{3}{4} \div \dfrac{5}{2} = \dfrac{3}{4} \times \dfrac{2}{5} = \dfrac{6}{20} = \dfrac{3}{10}$
> 3. $\dfrac{1}{3} + \dfrac{1}{4} = \dfrac{4 + 3}{12} = \dfrac{7}{12}$
> 4. 将 $\dfrac{12}{18}$ 化为最简分数：$\gcd(12, 18) = 6$，约去得 $\dfrac{2}{3}$。

### 1.3.2　有理数、平方根与无理数

> [!abstract] 定义（Definition）
> **定义（有理数与无理数 / Rational and Irrational Numbers）：**  
> 可写为 $\dfrac{p}{q}$（$p, q \in \mathbb{Z}, q \neq 0$）形式的数为**有理数**（Rational Number），记全体有理数为 $\mathbb{Q}$。不能写为分数形式的数为**无理数**（Irrational Number）。有理数与无理数合称**实数**（Real Number），记作 $\mathbb{R}$。

> [!abstract] 定义（Definition）
> **定义（平方根 / Square Root）：** 若 $n^2 = m$（$m \ge 0$），则 $n$ 为 $m$ 的平方根，记为 $\pm\sqrt{m}$。其中 $\sqrt{m}$（非负）称为**算术平方根**（Principal Square Root）。

> [!abstract] 定义（Definition）
> **定义（$\pi$ 的几何定义）：** 半径为 $1$ 的圆，其面积为 $\pi$。

> [!info] 定理（Theorem）
> **定理：** $\sqrt{2}$ 是无理数。

> [!success] 证明（Proof）
> 反证法。假设 $\sqrt{2} = \dfrac{p}{q}$，其中 $p, q$ 互质（$\gcd(p, q) = 1$）。两边平方：
> $$2 = \dfrac{p^2}{q^2} \implies 2q^2 = p^2$$
> 故 $p^2$ 为偶数，从而 $p$ 为偶数。令 $p = 2k$，代入得 $2q^2 = 4k^2$，即 $q^2 = 2k^2$。故 $q$ 亦为偶数，与 $\gcd(p, q) = 1$ 矛盾。因此 $\sqrt{2}$ 不是有理数，即为无理数。

> [!info] 定理（Theorem）
> **定理：** 有理数的四则运算结果仍为有理数；有理数与无理数的四则运算结果（非零分母）为无理数。无理数之间的运算可能得有理数（如 $\sqrt{2} \times \sqrt{2} = 2$）。

> [!info] 定理（Theorem）
> **定理：** $\pi$ 为无理数；若正整数 $n$ 不为平方数，则 $\sqrt{n}$ 为无理数。

> [!example] 例子（Example）
> 1. $\sqrt{4} = 2$ 是有理数（$4$ 是平方数）。
> 2. $\sqrt{3}$ 是无理数（$3$ 不是平方数）。
> 3. $1 + \sqrt{2}$ 是无理数（有理数 $+$ 无理数 $\to$ 无理数）。

### 1.3.3　小数

> [!abstract] 定义（Definition）
> **定义（十进制位值原理之扩展 / Decimal Expansion）：**  
> 将位值原理扩展至小数位：
> $$A = a_n \cdots a_1 \;.\; c_1 c_2 \cdots = 10^{n-1}a_n + \cdots + a_1 + \frac{c_1}{10} + \frac{c_2}{100} + \cdots$$
> 若自某位起往后全为 $0$，则为**有限小数**（Terminating Decimal）；否则为**无限小数**。

> [!info] 定理（Theorem）
> **定理：** 乘/除以 $10$ 会使小数点向右/左移动一位。

> [!abstract] 定义（Definition）
> **定义（循环小数 / Recurring Decimal）：**  
> 小数部分自某位起重复出现某段数字者，称为**循环小数**，该段数字称为**循环节**（Recurring Period），以点号（$\dot{}$）标记。如 $0.\dot{3} = 0.333\dots$，$0.\dot{1}4285\dot{7} = 0.142857142857\dots$。

> [!info] 定理（Theorem）
> **定理（鸽笼原理 / Pigeonhole Principle）：** $n$ 个笼子放入 $n+1$ 只鸽子，必有至少一笼有超过一只鸽子。

> [!info] 定理（Theorem）
> **定理：** 一个数是有理数 $\iff$ 它是有限小数或循环小数。

> [!success] 证明（Proof）
> $(\Leftarrow)$ 循环小数可通过代数消去循环节化为分数。例如 $0.\dot{4}\dot{5}$：设 $x = 0.\dot{4}\dot{5}$，则 $100x = 45.\dot{4}\dot{5} = 45 + x$，解得 $x = \frac{45}{99} = \frac{5}{11}$。
>
> $(\Rightarrow)$ 对 $\frac{p}{q}$，用长除法时，每一步的余数只能取 $0, 1, \dots, q-1$（共 $q$ 种）。若出现余数 $0$，则得有限小数；否则由鸽笼原理（定理 1.3.8），余数必重复，此后小數位将周期循环，即得循环小数。

> [!info] 定理（Theorem）
> **定理：** 无理数均为无限不循环小数。

> [!example] 例子（Example）
> 1. $\dfrac{1}{3} = 0.\dot{3}$（循环小数 $\to$ 有理数）。
> 2. 将 $0.\dot{4}\dot{5}$ 化为分数：由证明中方法，得 $\dfrac{5}{11}$。

### 1.3.4　小数表示的不唯一性

> [!info] 定理（Theorem）
> **定理：** $0.\dot{9} = 1$。

> [!success] 证明（Proof）
> 设 $m = 0.\dot{9}$，则 $10m = 9.\dot{9} = 9 + m$，解得 $9m = 9$，故 $m = 1$。

> 同理，任何数可有两种小数表示（如 $17 = 17.\dot{0} = 16.\dot{9}$）。

---

## 1.4　比较不同的数大小的方法（Comparing Numbers）

> [!warning] 公理（Axiom）
> **公理（序公理 / Order Axioms）**  
> 对任意实数 $x, y$：
> 1. **三歧性（Trichotomy）：** $x > y$、$x < y$、$x = y$ 恰一成立。
> 2. **乘法性质：** 若 $x > 0$ 且 $y > 0$，则 $xy > 0$。
> 3. $x > y \iff y < x$。
> 4. **加法性质：** 若 $x > y$，则 $x + z > y + z$。
> 5. **传递性（Transitivity）：** 若 $x > y$ 且 $y > z$，则 $x > z$。

> [!info] 定理（Theorem）
> **定理：** $a > b \iff a - b > 0$。

> [!success] 证明（Proof）
> 由序公理加法性质：$a > b \implies a + (-b) > b + (-b) = 0$，即 $a - b > 0$。反向同理。

> [!info] 定理（Theorem）
> **定理：** $a < b \iff a - b < 0$。

> [!info] 定理（Theorem）
> **定理：** 若 $x > y$ 且 $z > 0$，则 $xz > yz$。

> [!success] 证明（Proof）
> 由定理 1.4.1，$x > y \implies x - y > 0$。由序公理乘法性质，$(x - y)z > 0$，即 $xz - yz > 0$。再由定理 1.4.1 得 $xz > yz$。

> [!info] 定理（Theorem）
> **定理：** 若 $x > y$，则 $-x < -y$。

> [!success] 证明（Proof）
> 由定理 1.4.1，$x > y \implies x - y > 0$。又 $-x - (-y) = -x + y = -(x - y) < 0$，由定理 1.4.2 得 $-x < -y$。

> [!info] 定理（Theorem）
> **定理：** 若 $x > y$ 且 $z < 0$，则 $xz < yz$。

> [!success] 证明（Proof）
> $z < 0$ 意味着 $-z > 0$。由定理 1.4.4，$x > y \implies -x < -y$。再由定理 1.4.3 乘正数 $-z > 0$：$(-x)(-z) < (-y)(-z)$，即 $xz < yz$。

> 将「$>$」「$<$」替换为「$\ge$」「$\le$」，上述定理仍成立。

> [!example] 例子（Example）
> 1. 比较 $-3$ 与 $-7$：因 $-3 - (-7) = 4 > 0$，由定理 1.4.1 得 $-3 > -7$。
> 2. 已知 $5 > 3$，两端乘 $-2$：$z = -2 < 0$，由定理 1.4.5 得 $5 \times (-2) < 3 \times (-2)$，即 $-10 < -6$。
> 3. 比较 $\dfrac{2}{3}$ 与 $\dfrac{3}{4}$：通分得 $\dfrac{8}{12}$ 与 $\dfrac{9}{12}$，$\dfrac{9}{12} - \dfrac{8}{12} = \dfrac{1}{12} > 0$，故 $\dfrac{3}{4} > \dfrac{2}{3}$。

---

## 1.5　数集包含关系

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

---

## 中英对照词汇表（Glossary）

| 中文 | English |
|------|---------|
| 自然数 | Natural Number |
| 整数 | Integer |
| 正整数 | Positive Integer |
| 负整数 | Negative Integer |
| 数轴 | Number Line |
| 有向数 | Directed Number |
| 几何意义 | Geometric Meaning |
| 反射 | Reflection |
| 带余除法 | Division with Remainder |
| 商 | Quotient |
| 余数 | Remainder |
| 质数 / 素数 | Prime (Number) |
| 合成数 / 合数 | Composite (Number) |
| 质因数 | Prime Factor |
| 质因数连乘式 / 质因数分解 | Prime Factorization |
| Euclid 定理 | Euclid's Theorem |
| 唯一质因数分解定理 | Fundamental Theorem of Arithmetic |
| 反证法 | Proof by Contradiction |
| 良序原理 | Well-Ordering Principle |
| 整除 | Divisibility |
| 整除记号 | Divisibility Notation |
| 倍数 | Multiple |
| 因数 / 因子 | Factor / Divisor |
| 公因数 | Common Factor |
| 最大公因数 | Greatest Common Divisor (GCD) / H.C.F. |
| 互质 | Coprime |
| 位值原理 | Place Value Principle |
| 十进制 | Decimal System |
| 有理数 | Rational Number |
| 无理数 | Irrational Number |
| 实数 | Real Number |
| 分数 | Fraction |
| 分子 | Numerator |
| 分母 | Denominator |
| 最简分数 | Simplest Fraction |
| 倒数 | Reciprocal |
| 约分 | Reduction |
| 通分 | Common Denominator |
| 平方根 | Square Root |
| 算术平方根 | Principal Square Root |
| $\pi$ | Pi |
| 有限小数 | Terminating Decimal |
| 无限小数 | Non-terminating Decimal |
| 循环小数 | Recurring Decimal |
| 循环节 | Recurring Period |
| 鸽笼原理 | Pigeonhole Principle |
| 三歧性 | Trichotomy |
| 传递性 | Transitivity |
| 序公理 | Order Axioms |
| 分配律 | Distributive Law |
| 交换律 | Commutative Law |
| 结合律 | Associative Law |
| 单位元 | Identity Element |
| 逆元 | Inverse Element |
