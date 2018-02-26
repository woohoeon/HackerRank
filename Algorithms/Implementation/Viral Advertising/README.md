# Viral Advertising

HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media. 

On the first day, half of those 5 people (i.e., floor(5/2) = 2) like the advertisement and each person shares it with 3 of their friends; the remaining people (i.e., 5 - floor(5/2) = 3) delete the advertisement because it doesn't interest them. So, at the beginning of the second day, floor(5/2) * 3 = 2 * 3 = 6 people receive the advertisement. 

On the second day, half of the 6 people who received the advertisement share it with 3 new friends. So, at the beginning of the third day, floor(6/2) * 3 = 3 * 3 = 9 people receive the advertisement. The diagram below depicts the advertisement's virality over the first three days (green denotes a person that likes the advertisement and red denotes a person that disliked and deleted it):

![strange ad.png](https://s3.amazonaws.com/hr-challenge-images/26216/1475677928-3788004924-strangead.png)

Assume that at the beginning of the ith day, m people received the advertisement, floor(m/2) people like and share it with 3 new friends, and m - floor(m/2) people dislike and delete it. At the beginning of the (i+1)th day, floor(m/2) * 3 people receive the advertisement.

Given an integer, n, find and print the total number of people who *liked HackerLand Enterprise's advertisement* during the first n days. It is guaranteed that no two people have any friends in common and, after a person shares the advertisement with a friend, the friend always sees it the next day.


HackerLand Enterprise는 새로운 바이러스 광고 전략을 채택하고 있습니다. 신제품을 출시하면 소셜 미디어를 통해 정확히 5 명에게 광고를 게재합니다.

첫날에는 광고를 좋아하는 사람 (즉, 층 (5/2) = 2) 중 5 명 중 절반이 친구들과 3 명을 공유합니다. 나머지 사람들 (즉, 5 - 층 (5/2) = 3)은 관심이 없기 때문에 광고를 삭제합니다. 따라서 두 번째 날 초에 층 (5/2) * 3 = 2 * 3 = 6 명이 광고를 수신합니다.

둘째 날에는 광고를받은 6 명의 사람들 중 절반이 3 명의 새로운 친구들과 그것을 나눕니 다. 따라서 3 일째되는 날, 층 (6/2) * 3 = 3 * 3 = 9 명이 광고를 수신합니다. 아래 다이어그램은 처음 3 일 동안의 광고 효과를 보여줍니다 (초록색은 광고를 좋아하는 사람을 나타내고 빨간색은 싫어하고 삭제 한 사람을 나타냄).

i 번째 날 초에 m 명이 광고를 받고 m / 2 명의 사람들이 좋아하고 3 명의 새 친구와 공유한다고 가정하고 m-floor (m / 2) 사람들은 그것을 싫어하고 삭제합니다. (i + 1) 번째 날 초에 층 (m / 2) * 3 명이 광고를 수신합니다.

정수 n이 주어지면 처음 n 일 동안 HackerLand Enterprise의 광고 *를 좋아하는 사람의 수를 찾아서 인쇄하십시오. 두 사람이 공통적으로 친구가 없다는 것을 보장하고, 친구와 광고를 공유 한 후에 친구는 항상 다음날 그것을 봅니다.