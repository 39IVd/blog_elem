---
title: "[Algorithm] 백준 3780 : 네트워크 연결 "
date: 2020-03-20
template: blog
image: ../images/algorithm.jpg
description: 
categories : 
    - algorithm
---

## Union-Find 문제
![image](./img1.png)


### 알고리즘

1. 모든 노드의 부모 노드 (parent[])를 자기 자신으로 초기화한다.
2. 명령어가 I이면, (I A B)
    - 기업 A를 기업 B에 연결하고, B가 센터가 된다. => A의 부모 노드는 B가 된다.
    - A의 라인 길이는 (Math.abs(A-B)%1000)가 된다.
3. 명령어가 E이면, (E A)
    - 재귀 함수를 수행하면서 (findLine(A))
    최종적으로 parent[node]=node인 A의 Root(node)를 반환하고,
    line[A]에는 A를 포함한 A의 조상들의 line길이의 합이 저장된다.


   

<br><br>
## Java Code

```java 
import java.util.Scanner;

public class Main {
    static Scanner in = new Scanner(System.in);
    static int t, n;
    static StringBuilder sb = new StringBuilder();
    static int[] parent;
    static int[] line;
    public static void main(String[] args) {
        t = in.nextInt();
        while (t-->0){
            n = in.nextInt(); in.nextLine();
            parent = new int[n+1];
            line = new int[n+1];
            for(int j=1;j<=n;j++) parent[j]=j;
            while (true) {
                String com = in.next();
                if(com.equals("O")) break;
                else if(com.equals("E")) {
//                    현재 기업에 연결된 센터까지 가는 line의 총 길이 구하기
                    int a = in.nextInt();
                    findLine(a);
                    sb.append(line[a]+"\n");
                }
                else if(com.equals("I")) {
//                    기업 a를 기업 b에 연결 (기업 b가 센터)
                    int a = in.nextInt(); int b = in.nextInt();
                    union(a, b);
                }
            }
        }
        System.out.println(sb.toString());
    }
    public static void union(int a, int b) {
        parent[a] = b;
        line[a] = (Math.abs(a-b)%1000);
    }
    public static int findLine(int a) {
        if(parent[a]==a) return a;
        else {
            int tmp = findLine(parent[a]);
            line[a] += line[parent[a]];
            parent[a] = tmp;
            return parent[a];
        }
    }
}


```






