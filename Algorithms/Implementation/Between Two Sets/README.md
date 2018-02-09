# Between Two Sets

https://www.hackerrank.com/challenges/between-two-sets/problem

Consider two sets of positive integers, A = a_0, a_1, ..., a_n-1 and B = b_0, b_1, ..., b_m-1. We say that a positive integer, x, is between sets A and B if the following conditions are satisfied:

1. All elements in A are factors of x.
2. x is a factor of all elements in B.

In other words, some x is between A and B if that value of x satisfies x  a_i = 0 for every a_i in A and also satisfies b_i  x = 0 for every b_i in B. For example, if A = 2, 6 and B = 12, then our possible x values are 6 and 12.

Given A and B, find and print the number of integers (i.e., possible x's) that are between the two sets.


양의 정수, A = a_0, a_1, ..., a_n-1과 B = b_0, b_1, ..., b_m-1의 두 세트를 고려하십시오. 다음 조건이 만족되면 양수 x가 세트 A와 B 사이에 있음을 나타냅니다.

1. A의 모든 요소는 x의 인수입니다.
2. x는 B의 모든 요소의 요소입니다.

즉, x의 값이 A의 모든 a_i에 대해 x a_i = 0을 만족하고 B의 모든 b_i에 대해 b_i x = 0을 만족하면 일부 x는 A와 B 사이에 있습니다. 예를 들어, A = 2, 6 및 B = 12이면 가능한 x 값은 6과 12입니다.

A와 B가 주어지면 두 세트 사이에있는 정수 (즉, 가능한 x)의 수를 찾아서 인쇄하십시오.