# Jumping on the Clouds

https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

Emma is playing a new mobile game that starts with consecutively numbered clouds.  Some of the clouds are thunderheads and others are cumulus.  She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.  She must avoid the thunderheads.  Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud.  It is always possible to win the game.  

For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.  For example, c = [0,1,0,0,0,1,0] indexed from 0 ... 6.  The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5.  She could follow the following two paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6.  The first path takes 3 jumps while the second takes 4.


Emma는 연속적으로 번호가 매겨진 구름으로 시작하는 새로운 모바일 게임을하고 있습니다. 구름의 일부는 천둥과 다른 것은 적 운입니다. 그녀는 현재의 구름 수에 1 또는 2를 더한 수의 적운 구름으로 뛰어 올 수 있습니다. 천둥 머리를 피해야합니다. Emma가 출발점에서 마지막 구름으로 점프하는 데 걸리는 최소 점프 횟수를 결정합니다. 항상 게임에서이기는 것이 가능합니다.

각 게임에 대해 Emma는 안전한 경우 0의 번호가 매겨진 구름 배열을 가져오고, 피해야하는 경우 1의 번호를 부여합니다. 예를 들어, 0 ... 6부터 인덱싱 된 c = [0,1,0,0,0,1,0]. 각 클라우드의 번호는 목록의 인덱스이므로 인덱스 1과 5에서 구름을 피해야합니다. 그녀는 다음 두 경로를 따를 수 있습니다 : 0 -> 2 -> 4 -> 6 또는 0 -> 2 -> 3 -> 4 -> 6. 첫 번째 경로는 3 점프를받는 반면 두 번째 경로는 4 점을 취합니다.