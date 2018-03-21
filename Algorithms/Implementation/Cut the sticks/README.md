# Cut the sticks

You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of N sticks, print the number of sticks that are left before each iteration until there are none left.

Note: Before each iteration you must determine the current shortest stick.


당신은 다양한 길이의 스틱을 받습니다. 반복적으로 스틱을 자르고, 가장 짧은 조각이 남을때까지 버리지 않습니다. 반복 할 때마다 남은 가장 짧은 스틱의 길이를 결정하고 긴 스틱 각각에서 해당 길이를 잘라 낸 다음 가장 짧은 길이의 스틱는 모든 조각을 버립니다.

N 스틱의 길이를 감안할 때, 각 반복 전에 남아있는 스틱의 수를 인쇄하십시오.

참고 : 각 반복 전에 가장 짧은 현재 스틱을 결정해야합니다.