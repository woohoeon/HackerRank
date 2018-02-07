# Grading Students

https://www.hackerrank.com/challenges/grading/problem

HackerLand University has the following grading policy:
* Every student receives a grade in the inclusive range from 0 to 100.
* Any grade less than 40 is a failing grade. 
Sam is a professor at the university and likes to round each student's grade according to these rules:
* If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
* If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
For example, grade = 84 will be rounded to 85 but grade = 29 will not be rounded because the rounding would result in a number that is less than 40.  
Given the initial value of grade for each of Sam's n students, write code to automate the rounding process. Complete the function `solve` that takes an integer array of all grades, and return an integer array consisting of the rounded grades. For each grade_i, round it according to the rules above and print the result on a new line.  

HackerLand University는 다음 등급 결정 방침을 가지고 있습니다.
* 모든 학생들은 0에서 100까지의 포괄적 인 범위의 성적을받습니다.
* 40 미만의 학년은 실패 학년입니다.
Sam은 대학의 교수이며 다음 규칙에 따라 각 학생의 성적을 매길 수 있습니다.
* 5 학년과 다음 배수 사이의 차이가 3보다 작 으면 5의 배수로 반올림하십시오.
* 학년의 가치가 38보다 작 으면 결과가 여전히 실패한 성적이되므로 반올림은 발생하지 않습니다.
예를 들어, 반올림으로 인해 40보다 작은 숫자가 나오기 때문에 학년 = 84는 85로 반올림되지만 학년 = 29는 반올림되지 않습니다.
Sam 's n 학생 각각의 학년의 초기 값을 감안할 때 반올림 프로세스를 자동화하는 코드를 작성하십시오. 모든 등급의 정수 배열을 취하고 둥근 등급으로 구성된 정수 배열을 반환하는`solve` 함수를 완성하십시오. 각 grade_i에 대해 위의 규칙에 따라 반올림하고 결과를 새 줄에 인쇄하십시오.