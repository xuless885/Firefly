---
title: "基础概念（Fundamental Concepts）"
tag: DSE课程笔记
---

# 0　基础概念（Fundamental Concepts）

> 数学之于其他自然科学的核心区别是：自然科学探索现实世界中的运行规律，数学所探索的是纯粹的**逻辑过程**（logical process），不依赖现实，只需一套基本的逻辑规则便可建立。本章建立公理体系，逐步推演出算术与代数的基本定理。

---

## 0.1　数理逻辑（Mathematical Logic）

### 0.1.1　定义与对象

> [!abstract] 定义（Definition）
> **定义（Definition）：** 对某个概念赋予陈述句进行解释。

> [!abstract] 定义（Definition）
> **对象（Object）：** 不构成陈述句的事物（如词语(猫)、符号 $x, 1, 2, \dots$）。

在此基础上，引出贯穿现代数学的四个核心术语：
1. 公理（axiom）
2. 定理（theorem）
3. 推论（corollary）
4. 引理（Lemma）
它们的意义将在后续逐步定义。

> ($=$)是作用於對象上的工具。兩命題邏輯上相同稱為(等價)，不能用($=$)表示。

### 0.1.2　命题逻辑（Propositional Logic）

#### 命题与开放命题

> [!abstract] 定义（Definition）
> **命题（Proposition）：** 一个陈述性语句，客观描述一个只可能为真（true）或假（false）的现象。

> [!abstract] 定义（Definition）
> **开放命题（Open Proposition）：** 包含一些可自由决定的对象 $x,y,\cdots$ 的命题 $P$，记作 $$P(x, y, \dots)$$
> 1. 这些对象 $x,y,\cdots$ 被称为变量。
> 2. 赋予变量具体值之前 $P(x,y,\cdots)$ 无真假之分。

> 一般而言，我们会将命题写作 $$P(在此罗列变量) = (具体内容)$$ 的形式。

> [!abstract] 定义（Definition）
> **真值（Truth Value）：** 真命题记 $\mathbb{T}$，假命题记 $\mathbb{F}$。

> 若一个命题 $P(变量)$ 为真，我们通常写为 $$ P(变量) = \mathbb T$$ 反之则写 $$ P(变量) = \mathbb F$$

> [!example] 例子（Example）
>
> 1. 命题 (英文字母有 26 个) 是真命题（$= \mathbb{T}$）。
> 2. 命题 (今天天气真好！) 不是命题（非陈述句）。
> 3. 命题 ($5 + 8 = 13$) 是真命题；($5 - 2 = 1$)是假命题（$= \mathbb{F}$）。
> 4. 命题 $P(x) = (x \leq 10)$ 是开放命题。
>    - $x = 6$ 时 $P(6) = \mathbb{T}$；
>    - $x = 11$ 时 $P(11) = \mathbb{F}$。

#### 等号与等式

> [!abstract] 定义（Definition）
> **等式（Equality）：** 若断言两对象 $A, B$ 一致，则写 $A = B$（读作 "$A$ 等于 $B$"）。$A = B$ 本身构成一个命题。若断言不一致，则写 $A \neq B$（读作 "$A$ 不等于 $B$"）。

> [!example] 例子（Example）
> 1. $P_1 = (3 + 2 = 5)$ 是真命题（$P_1 = \mathbb{T}$）。对象 $3+2$ 与 $5$ 写法不同，但表示同一个数。
> 2. $P_2 = (1 + 1 = 3)$ 是假命题（$P_2 = \mathbb{F}$），因为 $1+1$ 并不等于 $3$。
> 3. $P_3 = (\text{妈妈} = \text{母亲})$ 是真命题（两个词指同一对象）。
> 4. $P_4 = (\text{妈妈} \neq \text{父亲})$ 是真命题。

### 0.1.3　命题逻辑的运算

设 $P, Q$ 为命题。

> [!abstract] 定义（Definition）
> **否定（Negation）：** 设 $P$ 为命题，定义 $P$ 的否定命題 $\neg P$（读作(非 $P$)），其真值由 $P$ 的真值決定：
>
> | $P$ | $\neg P$ |
> |:---:|:---:|
> | $\mathbb{T}$ | $\mathbb{F}$ |
> | $\mathbb{F}$ | $\mathbb{T}$ |

> [!abstract] 定义（Definition）
> **合取（Conjunction）：** 设 $P, Q$ 为两命题，定义合取命題 $P \land Q$（读作($P$ 及 $Q$)），仅当 $P, Q$ 同时为真时 $P \land Q$ 为真：
>
> | $P$ | $Q$ | $P \land Q$ |
> |:---:|:---:|:---:|
> | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{F}$ |
> | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{F}$ |
> | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{F}$ |

> [!abstract] 定义（Definition）
> **析取（Disjunction）：** 设 $P, Q$ 为两命题，定义析取命題 $P \lor Q$（读作($P$ 或 $Q$)），当 $P, Q$ 至少一真时 $P \lor Q$ 为真：
>
> | $P$ | $Q$ | $P \lor Q$ |
> |:---:|:---:|:---:|
> | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{T}$ |
> | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{F}$ |

> [!abstract] 定义（Definition）
> **条件句（Conditional）：** 设 $P, Q$ 为两命题，定义条件命題 $P \to Q$（读作(若 $P$，则 $Q$)），其中 $P$ 称为**假设**（hypothesis），$Q$ 称为**结论**（conclusion）。仅当 $P$ 真而 $Q$ 假时，$P \to Q$ 为假：
>
> | $P$ | $Q$ | $P \to Q$ |
> |:---:|:---:|:---:|
> | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{F}$ |
> | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{T}$ |

> [!abstract] 定义（Definition）
> **双条件（Biconditional）：** 设 $P, Q$ 为两命题，定义双条件命題 $P \leftrightarrow Q$（读作($P$ 当且仅当 $Q$)），当 $P, Q$ 真值一致时为真：
>
> | $P$ | $Q$ | $P \leftrightarrow Q$ |
> |:---:|:---:|:---:|
> | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{F}$ |
> | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{F}$ |
> | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{T}$ |

我们将以上五种运算综合为真值表：

|     $P$      |     $Q$      |   $\neg P$   | $P \land Q$  |  $P \lor Q$  |  $P \to Q$   | $P \leftrightarrow Q$ |
| :----------: | :----------: | :----------: | :----------: | :----------: | :----------: | :-------------------: |
| $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ |     $\mathbb{T}$      |
| $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{F}$ |     $\mathbb{F}$      |
| $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{T}$ |     $\mathbb{F}$      |
| $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{T}$ |     $\mathbb{T}$      |
它表格显示了 $P,Q$ 在不同真值的情况下对应运算的结果。

> [!example] 例子（Example）
> 设 $P = \mathbb{T}$（(今天下雨)为真），$Q = \mathbb{F}$（(地面是干的)为真，不对，地面是湿的）。
>
> - $\neg P$：(今天不下雨)，即 $\mathbb{F}$
> - $P \land Q$：(今天下雨且地面是干的)，即 $\mathbb{F}$（两者不全真）
> - $P \lor Q$：(今天下雨或地面是干的)，即 $\mathbb{T}$（至少一真）
> - $P \to Q$：(若今天下雨，则地面是干的)，即 $\mathbb{F}$（$P$ 真而 $Q$ 假）

#### 逻辑蕴含与逻辑等价

> [!abstract] 定义（Definition）
> **逻辑蕴含（Logical Implication）：** 若 $P \to Q = \mathbb{T}$，即 $P$ 为真时 $Q$ 必为真，则记为 $P \implies Q$，读作($P$ 蕴含 $Q$)或($P$ 推出 $Q$)。

> [!abstract] 定义（Definition）
> **逻辑等价（Logical Equivalence）：** 若 $(P \to Q) \land (Q \to P) = \mathbb{T}$，则记为 $P \iff Q$，读作($P$ 等价于 $Q$)或($P$ 当且仅当 $Q$（$P$ if and only if $Q$）)。

> 判定 $P \implies Q$：仅需检查 $P = \mathbb{T}$ 时 $Q$ 是否可能为 $\mathbb{F}$。若不可能，则蕴含成立。

> [!example] 例子（Example）
> 1. 设 $P =$(太阳升起)，$Q =$(天空变亮)。$P \to Q$ 恒真，故 $P \implies Q$（太阳升起蕴含天空变亮）。
>
> 2. 设 $P =$(小明将红色颜料与黄色颜料混合)，$Q =$(小明得到橙色颜料)。$P \implies Q$ 成立。
>
>    但反方向 $Q \implies P$ 不成立：小明得到橙色颜料未必来自混合，也可能是别人给的。因此 $P$ 不等价于 $Q$。
>
> 3. 设 $P(x) = (x = 5 + 1)$，$Q(x) = (x = 4 + 2)$。两者都等价于 $x = 6$，故 $P \iff Q$（对任意 $x$，两端真假一致）。

### 0.1.4　全称量词与存在量词

设 $P(x)$ 为开放命题。这里 $x$ 指代了一系列变量。

> [!abstract] 定义（Definition）
> **全称量词（Universal Quantifier）：** $\forall x, P(x)$，读作(对所有 $x$，$P(x)$ 为真)。断言每一个对象都使命题成立。

> [!abstract] 定义（Definition）
> **存在量词（Existential Quantifier）：** $\exists x, P(x)$，读作(存在 $x$，$P(x)$ 为真)。断言至少有一个对象使命题成立。

| 量词 | 符号 | 含义 | 何时为假 |
|------|------|------|----------|
| 全称量词 | $\forall$ | 对**所有** | 存在一个反例 |
| 存在量词 | $\exists$ | 对**某些** | 没有任何对象能使命题成立 |

> [!example] 例子（Example）
> 1. $P(x) =$($x$ 是需要呼吸氧气的)。取 $x$ 为(地球上的哺乳动物)：
>    $\forall x, P(x)$ 为真，因为每个哺乳动物都需要呼吸氧气。
>
> 2. $P(x) =$($x$ 是奇数)。$x$ 可取 $\{1, 3, 5, 8\}$：
>    $\forall x, P(x)$ 为假（$\mathbb{F}$），因为 $8$ 是偶数，构成反例。
>
> 3. $Q(x) =$($x + 5 = 12$)。$x$ 取全体正整数：
>    $\exists x, Q(x)$ 为真（$\mathbb{T}$），因为 $x = 7$ 使命题成立。
>
> 4. $Q(x) =$($x + 10 = 5$)。$x$ 取全体正整数：
>    $\exists x, Q(x)$ 为假（$\mathbb{F}$），因为没有任何正整数满足等式。

### 0.1.5　现代数学的规则

> [!abstract] 定义（Definition）
> **公理（Axiom）：** 被定义为真命题的命题。公理是数学推理的出发点。

现在我们来看规定一些公理，这些公理定义了最基本的几个事实：

> [!warning] 公理（Axiom）
> **公理 0.1.1（等式公理 / Equality Axioms）**  
> 对任何对象 $a, b, c$：
> 1. **反身性（Reflexivity）：** $a = a$
> 2. **对称性（Symmetry）：** $a = b \iff b = a$
> 3. **传递性（Transitivity）：** $(a = b) \land (b = c) \implies a = c$
>
> >传递性可写为 $a = b = c \iff (a = b) \land (b = c)$。

> [!warning] 公理（Axiom）
> **公理 0.1.2（莱布尼茨定律 / 同一者不可分原理 / Leibniz's Law）**  
> 设 $x, y$ 为两对象，$P(x)$ 是关于 $x$ 的命题，则 $\forall x, y$：
> $$(x = y) \implies (P(x) \iff P(y))$$
>
> 两个相同的对象具有完全相同的性质。凡对 $x$ 成立的命题，对等于 $x$ 的 $y$ 也同样成立。

> [!example] 例子（Example）
> 设 $x = 2 + 3$，$y = 5$，显然 $x = y$。设 $P(A) =$($A$ 是奇数)。
>
> 已知 $P(5) = \mathbb{T}$（5 是奇数）。由莱布尼茨定律，$(x = y) \implies (P(x) \iff P(y))$，
> 故 $P(2+3) = \mathbb{T}$，即 $2 + 3$ 也是奇数。

莱布尼茨定律是逻辑学的一个基本事实，往后的许多证明中都会用到，但它会以一个更形象但更狭义的名词出现：代入法（Chapter 06）。
### 0.1.6　定理与数学证明

> [!abstract] 定义（Definition）
> **定理（Theorem）：** 在既定公理下的真命题。定理通常写为 $$(\text{前提}) \implies (\text{结论})$$

> [!abstract] 定义（Definition）
> **数学证明（Proof）：** 基于公理和已证定理推导出命题为真的逻辑过程。

> [!info] 定理（Theorem）
> **定理 0.1.2（假言三段论 / Hypothetical Syllogism）**  
> 对命题 $X, Y, Z$：
> $$(X \to Y) \land (Y \to Z) \implies (X \to Z)$$

> [!success] 证明（Proof）
> 列出 $X, Y, Z$ 所有 $2^3 = 8$ 种真值组合，计算 $(X \to Y) \land (Y \to Z)$ 与 $X \to Z$ 的真值：
>
> | $X$ | $Y$ | $Z$ | $(X \to Y) \land (Y \to Z)$ | $X \to Z$ |
> |:---:|:---:|:---:|:---:|:---:|
> | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{F}$ |
> | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{T}$ |
> | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{F}$ |
> | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{T}$ |
> | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{T}$ | $\mathbb{T}$ |
> | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{F}$ | $\mathbb{T}$ | $\mathbb{T}$ |
>
> 当前提 $(X \to Y) \land (Y \to Z) = \mathbb{T}$ 时（第 1、4、7、8 行），结论 $X \to Z$ 均为 $\mathbb{T}$。故蕴含成立。
> > 这种通过增值表穷举所有增值的方法，可以用来解决许多逻辑命题的证明。

> [!example] 例子（Example）
> 已知：(1) 若小明所在的球队赢球，则他们会进入决赛。 (2) 若他们进入决赛，则学校发放奖学金。
>
> 由假言三段论可推出：若小明球队赢球，则学校发放奖学金。逻辑链：赢球 $\to$ 决赛 $\to$ 奖学金。

> [!abstract] 定义（Definition）
> **推论（Corollary）：** 从定理直接推出的结论。

> [!abstract] 定义（Definition）
> **引理（Lemma）：** 为证明主要定理而准备的辅助命题。

> 在数字数学证明时，切记几点：
>
> 1. 数学证明是以逻辑推断来论证某个命题恒真或恒假。
>
> 2. 要证明某个定理，就要从该定理的前提条件出发，一步步用已知的结论推断出该定理的结论。

以下给出两个实例，分别从生活及数学情景入手，直观体会如何从前提一步一步推出结论。

> [!example] 例子（Example）
> **生活实例：**
>
> 已知：(1) 若下雨，则小明会带伞。 (2) 若小明带伞，则他不会淋湿。
>
> 今观察发现「正在下雨」。证明：小明不会淋湿。
>
> **证明：**
> 1. 由前提 (1)："若下雨，则小明会带伞"（即 $P \to Q$）。
> 2. 观察事实：正在下雨（$P = \mathbb{T}$），故由 $P \implies Q$，小明带了伞（$Q = \mathbb{T}$）。
> 3. 由前提 (2)："若小明带伞，则他不会淋湿"（即 $Q \to R$）。
> 4. 已知 $Q = \mathbb{T}$，故 $R = \mathbb{T}$（因为是前提条件，因此默认正确。），即小明不会淋湿。
>
> 核心结构：$P \implies Q \implies R$，每一步依据已知条件（或公理）向前推进。

> [!example] 例子（Example）
> **数学实例：** 证明 $13 + 7$ 是偶数。
>
> 设偶数（even number）定义为：可被二整除的数。
>
> **证明：**
> 1. 计算：$13 + 7 = 20$。
> 2. $20$ 是一个偶数。
> 3. 故 $13 + 7$ 是偶数。（莱布尼茨法则）

---

## 0.2　基础算术（Basic Arithmetic）

### 0.2.1　自然数

> [!abstract] 定义（Definition）
> **自然数（Natural Number）：** 全体正整数 $\{1, 2, 3, \dots\}$（亦常包含 $0$）。源于计数行为。

### 0.2.2　数的运算

> [!abstract] 定义（Definition）
> **算式（Arithmetic Expression）：** 只含有自然数及其运算的对象。
> >Note: ($=$)是逻辑符号而非运算。

> 现阶段暂时借用小学数学的直觉定义运算，严谨的运算将在(函数及其图像)一章中严谨定义。

#### 加法与减法

> [!warning] 公理（Axiom）
> **公理 0.2.1（自然数的加法公理）**  
> 对任意自然数 $a, b, c$：
> 1. **交换律（Commutativity）：** $a + b = b + a$
> 2. **结合律（Associativity）：** $(a + b) + c = a + (b + c)$
> 3. **单位元（Identity）：** $a + 0 = a$

> [!abstract] 定义（Definition）
> **减号（Minus Sign）：** 对任意自然数 $a, b, c$，若 $a = b + c$，则定义 $c = a - b$。称 $c$ 为 $a$ 与 $b$ 之差。同理 $b = a - c$。
>
> 即 $a = b + c \iff c = a - b$。

> [!example] 例子（Example）
> 1. 加法公理验证：
>    - $1 + 4 = 4 + 1 = 5$（交换律）；
>    - $(1+4)+6 = 1+(4+6) = 11$（结合律）；
>    - $5+0=5$（单位元）。
> 2. 减号应用：$13 = 6 + 7$ 等价于 $13-6=7$ 及 $13-7=6$。

> [!info] 定理（Theorem）
> **定理 0.2.1：** 对任意自然数 $a$，$a - a = 0$。

> [!success] 证明（Proof）
> 据减号定义：
> $$a - a = 0 \iff a = a + 0$$
> 右端 $a = a + 0$ 由公理 0.2.1(3) 及等式反身性恒真。故 $a - a = 0$ 恒真。

> [!tip] 推论（Corollary）
> **推论 0.2.1：** 对任意自然数 $a$，$0 + a = a$。

> [!success] 证明（Proof）
> 由加法交换律（公理 0.2.1(1)），$0 + a = a + 0$。再由加法单位元（公理 0.2.1(3)），$a + 0 = a$。故 $0 + a = a$。

#### 乘法与除法

> [!warning] 公理（Axiom）
> **公理 0.2.2（自然数的乘法公理）**  
> 对任意自然数 $a, b, c$：
> 1. **交换律（Commutativity）：** $a \times b = b \times a$
> 2. **单位元（Identity）：** $a \times 1 = 1 \times a = a$
> 3. **结合律（Associativity）：** $(ab) \times c = a \times (bc)$
> 4. **分配律（Distributivity）：** $a \times (b + c) = a \times b + a \times c$

> [!example] 例子（Example）
> 1. $3 \times 4 = 4 \times 3 = 12$（交换律）
> 2. $5 \times 1 = 1 \times 5 = 5$（单位元）
> 3. $(2 \times 4) \times 6 = 2 \times (4 \times 6) = 48$（结合律）
> 4. $3 \times (5 + 7) = 3 \times 5 + 3 \times 7$（分配律）

> [!abstract] 定义（Definition）
> **整除（Divisibility）：** 若一个自然数 $n \neq 0$ 可写成 $n = p \times q$（$p, q \neq 0$），则称 $p$ 整除 $n$，记为 $p \mid n$，或 $n \div p = q$。特别地，$0$ 可被所有非零自然数整除。

> [!example] 例子（Example）
> 因 $18 = 9 \times 2$，故 $9 \mid 18$ 且 $2 \mid 18$；$18 \div 9 = 2$，$18 \div 2 = 9$。而 $18 = 6 \times 3$，故 $6 \mid 18$ 且 $3 \mid 18$ 也成立。

#### 乘方的记号

> [!abstract] 定义（Definition）
> **乘方（Exponentiation）：** $$a^n = \underbrace{a \cdot a \cdots a}_{n \text{ 个 } a}$。
>
> $n^2$ 称 $n$ 的平方（square），$n^3$ 称 $n$ 的立方（cube）。

- 乘法记号：已知数之间用 $\times$ 或 $\cdot$；未知量之间可省略（如 $2x$、$nxyz$）。

同时，我们透过计算 $3^2\cdot 3^3$ 与 $3^5$，经过对比可以发现：
$$a^m \times a^n = a^{m+n}$$此外，我们约定 $n^0 = 1$（$n \neq 0$）

> [!example] 例子（Example）
> 1. $3^2 = 3 \times 3 = 9$（3 的平方）；$4^3 = 4 \times 4 \times 4 = 64$（4 的立方）。
> 2. $2^5 \times 2^3 = 2^{5+3} = 2^{8} = 256$。
> 3. $7^0 = 1$。

#### 公因数与公倍数

> [!abstract] 定义（Definition）
> **因数（Factor）：** 若 $p \mid n$，则 $p$ 为 $n$ 的因数。

> [!example] 例子（Example）
> 1. 求 $6$ 的因数：$6 = 1 \times 6 = 2 \times 3$，故因数为 $1, 2, 3, 6$。
> 2. 求 $12$ 的因数：$12 = 1 \times 12 = 2 \times 6 = 3 \times 4$，故因数为 $1, 2, 3, 4, 6, 12$。

> [!abstract] 定义（Definition）
> **公因数（Common Factor）：** 若 $p \mid n$ 且 $p \mid m$，则 $p$ 为 $n, m$ 的公因数。

> [!example] 例子（Example）
> 1. 求 $6$ 与 $15$ 的公因数：
>    - $6$ 的因数为 $1, 2, 3, 6$；
>    - $15$ 的因数为 $1, 3, 5, 15$。
>
>    故公因数为 $1, 3$。
> 1. 求 $12$ 与 $18$ 的公因数：
>    - $12$ 的因数 ：$1,2,3,4,6,12$，
> 	- $18$ 的因数： $1,2,3,6,9,18$。
>
> 	故公因数为 $1, 2, 3, 6$。

> [!abstract] 定义（Definition）
> **最大公因数 H.C.F.（Highest Common Factor）：** $\gcd(m, n)$ 为 $n, m$ 所有公因数中最大者。

> [!example] 例子（Example）
> 1. 求 $\gcd(70, 55)$：$70$ 的因数 $\{1,2,5,7,10,14,35,70\}$，$55$ 的因数 $\{1,5,11,55\}$，公因数 $\{1,5\}$，故 $\gcd = 5$。
> 2. 用短除法求 $\gcd(210, 385)$：
>    $$\begin{array}{c|cc} 5 & 210 & 385 \\ \hline 7 & 42 & 77 \\ \hline & 6 & 11 \end{array}$$
>    $\gcd = 5 \times 7 = 35$。

> [!abstract] 定义（Definition）
> **倍数（Multiple）：** 若 $p \mid n$，则 $n$ 为 $p$ 的倍数。

> [!example] 例子（Example）
> 1. $6$ 的倍数：$6, 12, 18, 24, 30, \dots$
> 2. $15$ 的倍数：$15, 30, 45, 60, 75, \dots$

> [!abstract] 定义（Definition）
> **公倍数（Common Multiple）：** 若 $p \mid n$ 且 $q \mid n$，则 $n$ 为 $p, q$ 的公倍数。

> [!example] 例子（Example）
> 由上例，$6$ 与 $15$ 的倍数列表中出现 $30, 60, 90, \dots$，这些均为 $6$ 与 $15$ 的公倍数。

> [!abstract] 定义（Definition）
> **最小公倍数 L.C.M.（Least Common Multiple）：** $\operatorname{lcm}(m, n)$ 为 $n, m$ 所有公倍数中最小者。

> [!example] 例子（Example）
> 1. 由上例，$6$ 与 $15$ 的公倍数中最小者为 $30$，故 $\operatorname{lcm}(6, 15) = 30$。
> 2. 用短除法求 $\operatorname{lcm}(210, 385)$：同上短除表格，$\operatorname{lcm} = 5 \times 7 \times 6 \times 11 = 2310$。

> [!tip] 推论（Corollary）
> **推论 0.2.2：** 若 $n = p \times q$，则 $p, q$ 均为 $n$ 的因数。

#### 四则运算

- **四则运算（Four Arithmetic Operations）：** 加法、减法、乘法、除法。
- **表示法：** 乘法可用 $a \times b$、$a \cdot b$、$ab$；除法可用 $a \div b$、$a/b$、$\frac{a}{b}$。
- **运算优先级：** 先乘除、后加减；有括号先算括号内。

---

## 0.3　基础代数（Basic Algebra）

> 核心区分：代数式本身不含真假，是**对象**；等式和方程则构成可判真假的**命题**。

### 0.3.1　对象与命题在代数中的体现

> [!abstract] 定义（Definition）
> **变量（Variable）：** 用来表示未知数或可变数值的符号，通常用字母（$x, y, z, \dots$）表示。变量本身是一个**对象**。

> [!example] 例子（Example）
>   $x, y, z$ 这些符号可以代表某个未知数。当确实如此时（即我们显式地声明了 $x, y, z$ 是某些未知数），$x, y, z$ 即是一种变量。

> [!abstract] 定义（Definition）
> **代数式（Algebraic Expression）：** 由数、变量和运算符号组成的式子（如 $3x + 5y - 2$）。代数式是一个**对象**，即不含真假。

> [!example] 例子（Example）
> 1. $5a + 3b$ 含变量和运算，无等号，是代数式（对象）。
> 2. $2(x - 1) + 4$ 同样是代数式。
> 3. $\frac{x}{y} + z^2$ 含除法和乘方，仍是代数式。

> 代数式与变量均为对象，但前者可由后者组合而成。换言之，变量本身就是代数式的一种。写为逻辑符号：
> $$ \text{变量} \implies \text{代数式} $$

> [!abstract] 定义（Definition）
> **等式（Equation as Equality）：** 以($=$)连接两个对象（代数式），断言两者在数值上一致。等式是一个**命题**。

> [!example] 例子（Example）
> 以下三个均为等式的例子：
> 1. $P_1 = (3 + 4 = 7)$ 是恒真命题（$P_1 = \mathbb{T}$），不含变量。
> 2. $P_2 = (2 \times 3 = 5)$ 是恒假命题（$P_2 = \mathbb{F}$），但不含变量，仍是等式。
> 3. $P_3(a, b) = (a + b = b + a)$ 含变量但恒真（加法交换律）。
> > 注意：虽然 $P_2$ 为假命题，但它仍然是等式，只不过内容是**错误的**。

> [!abstract] 定义（Definition）
> **方程（Equation as Open Proposition）：** 含有变量的等式，即一个**开放命题**（如 $P(x) = (2x - 5 = 11)$）。其真值取决于变量的取值。

> [!example] 例子（Example）
> 1. $P(x) = (2x - 5 = 11)$ 是开放命题，$x = 8$ 时 $P(8) = \mathbb{T}$；$x = 3$ 时 $P(3) = \mathbb{F}$。
> 2. $P(x) = (x = 2)$ 是开放命题，$x = 2$ 时 $P(2) = \mathbb{T}$，其余为 $\mathbb{F}$。
> 3. $P(y) = (y^2 = 9)$ 是开放命题，$y = 3$ 或 $y = -3$ 时 $P(y) = \mathbb{T}$。
> 4. $P(x, y) = (x + y = 10)$ 是含两个变量的开放命题，如 $P(3, 7) = \mathbb{T}$。

> 框架回顾：代数式 $\leftrightarrow$ 对象，等式 $\leftrightarrow$ 命题，方程 $\leftrightarrow$ 开放命题，解方程 $\leftrightarrow$ 判断开放命题何时为真。

### 0.3.2　等式的性质

> [!info] 定理（Theorem）
> **定理 0.3.1（等式的性质 / Properties of Equality）**
> 1. **加减法不变性：** $a = b \implies a + c = b + c$
> 2. **乘除法不变性：** 若 $c \neq 0$，则 $a = b \iff ac = bc$

> [!success] 证明（Proof）
> （加减法不变性）设 $P(x)$ 为命题 "$x + c = a + c$"。由莱布尼茨定律：
> $$a = b \implies (P(a) \iff P(b))$$
> 即 $(a + c = a + c) \iff (b + c = a + c)$。左端由反身性恒真，故右端亦真，即 $a + c = b + c$。
> （乘除法不变性，正向）设 $P(x)$ 为 "$xc = ac$"。同理，$a = b \implies (ac = ac \iff bc = ac)$，左端恒真，故 $ac = bc$。
> （反向）设 $ac = bc$ 且 $c \neq 0$。由正向结论两端除以 $c$ 即得 $a = b$。

> [!example] 例子（Example）
> 1. 设 $P(x) = (x - 5 = 3)$。两端加 $5$：$(x - 5) + 5 = 3 + 5 \implies P(8) = \mathbb{T}$，解 $x = 8$。（加减法不变性）
> 2. 设 $P(x) = (3x = 12)$。两端除以 $3$：$x = 4$，即 $P(4) = \mathbb{T}$。（乘除法不变性，$c = 1/3 \neq 0$）

### 0.3.3　简易代数运算

- 代数式中的四则运算同样遵循交换律、结合律、分配律。

> [!abstract] 定义（Definition）
> **代入法（Substitution）：** 将具体数值或代数式替换公式中对应的变量，从而计算结果的过程。本质上是将开放命题中的变量赋予特定对象。

> 本质上，代入法就是对莱布尼茨法则在代数下的应用。我们将在**第六章往后**的课题正式使用“代入法” 取代 “莱布尼茨法则” 表示取代变量的过程。

> [!example] 例子（Example）
> 1. 已知公式 $y = 2x + 1$，当 $x = 3$ 时，代入得 $y = 2(3) + 1 = 7$。
> 2. 已知公式 $d = vt$，当 $v = 60 \text{ km/h}$、$t = 2 \text{ h}$ 时，代入得 $d = 60 \times 2 = 120 \text{ km}$。

---

## 0.4　物理量与单位表示（Physical Quantities and Units）

> [!abstract] 定义（Definition）
> **物理量（Physical Quantity）：** 由数值和单位共同组成（如 $5 \text{ m}$（5 米）、$20 \text{ kg}$（20 千克））。

- 不同单位的量不能直接加减（如 $3 \text{ kg} + 5 \text{ cm}$ 无意义）。
- 运算时单位也需参与：速度（$\text{m/s}$）$\times$ 时间（$\text{s}$）$=$ 路程（$\text{m}$）。

> [!example] 例子（Example）
> 1. 将 $1.5 \text{ m}$ 换算为 $\text{cm}$：$1.5 \text{ m} = 1.5 \times 100 \text{ cm} = 150 \text{ cm}$。
> 2. 以 $v = 5 \text{ m/s}$ 跑了 $t = 10 \text{ s}$，路程 $d = 5 \times 10 = 50 \text{ m}$。



---

## 中英对照词汇表（Glossary）

| 中文       | English                        |
| -------- | ------------------------------ |
| 定义       | Definition                     |
| 对象       | Object                         |
| 公理       | Axiom                          |
| 定理       | Theorem                        |
| 推论       | Corollary                      |
| 引理       | Lemma                          |
| 证明       | Proof                          |
| 命题       | Proposition                    |
| 开放命题     | Open Proposition               |
| 真值       | Truth Value                    |
| 变量       | Variable                       |
| 等式       | Equality                       |
| 否定       | Negation                       |
| 合取       | Conjunction                    |
| 析取       | Disjunction                    |
| 条件句      | Conditional                    |
| 双条件      | Biconditional                  |
| 逻辑蕴含     | Logical Implication            |
| 逻辑等价     | Logical Equivalence            |
| 全称量词     | Universal Quantifier           |
| 存在量词     | Existential Quantifier         |
| 反身性      | Reflexivity                    |
| 对称性      | Symmetry                       |
| 传递性      | Transitivity                   |
| 莱布尼茨定律   | Leibniz's Law                  |
| 同一者不可分原理 | Identity of Indiscernibles     |
| 假言三段论    | Hypothetical Syllogism         |
| 自然数      | Natural Number                 |
| 算式       | Arithmetic Expression          |
| 加法       | Addition                       |
| 减法       | Subtraction                    |
| 乘法       | Multiplication                 |
| 除法       | Division                       |
| 乘方 / 指数  | Exponentiation                 |
| 交换律      | Commutative Law                |
| 结合律      | Associative Law                |
| 分配律      | Distributive Law               |
| 单位元      | Identity Element               |
| 整除       | Divisibility                   |
| 因数       | Factor                         |
| 公因数      | Common Factor                  |
| 最大公因数    | Highest Common Factor (H.C.F.) |
| 倍数       | Multiple                       |
| 公倍数      | Common Multiple                |
| 最小公倍数    | Least Common Multiple (L.C.M.) |
| 四则运算     | Four Arithmetic Operations     |
| 代数式      | Algebraic Expression           |
| 方程       | Equation                       |
| 代入法      | Substitution                   |
| 物理量      | Physical Quantity              |
| 单位       | Unit                           |
