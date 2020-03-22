---
title: "[Algorithm] 백준 1753 : 최단 경로 "
date: 2020-03-20
template: blog
image: ../images/algorithm.jpg
description: 
categories : 
    - algorithm
---

## 방향 그래프에서, 시작 노드에서 다른 모든 노드로 가는 Shortest Path 구하기. (Dijkstra)
![image](./img1.png)

   
### 조건 : 경로가 존재하지 않을 수 있음. 서로 다른 두 정점 사이에 여러 개의 간선이 존재할 수도 있음.

    모든 정점까지의 경로가 존재한다고 가정했을 때, dijkstra는 n-1번 반복하지만,
    경로가 존재하지 않을 경우 nullpointer exception이 발생한다.
    따라서 d[]값이 갱신될 경우 (edge가 존재하며 항상 최소 거리일 경우)에만 Priority Queue에 추가하고,
    PQ가 모두 비워질 때까지만 반복해야 한다.
## 알고리즘 :
1. 모든 노드의 d[]값을 MAX VALUE로 초기화한다.
2. 각 노드의 인접한 노드와 가중치를 ArrayList로 생성한다. (nodes배열의 크기는 정점의 개수 n으로 초기화.)
3. Priority Queue에 시작 노드와 가중치 0을 추가한다.
4. PQ가 빌 때까지 while문을 돌면서,
    - PQ에서 노드를 꺼냄 : curr
    - 현재 노드와 인접한 노드들(adj)에 대해 for문을 돌면서, (nodes[] : ArrayList)
    - d[인접 노드] > d[현재 노드]+인접 노드의 가중치 이면,
    - d[인접 노드] 값을 갱신하고, PQ에 추가한다.
  
<br><br>
## Java Code

```java 
import java.util.ArrayList;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Scanner;

class node_SP2 {
    int dest, w;
    node_SP2(int dest, int w) {
        this.dest = dest; this.w = w;
    }

}
public class Main {
    static Scanner in = new Scanner(System.in);
    static int v, e, k;
    static int[] d = new int[20001];
    static ArrayList<node_SP2>[] nodes = new ArrayList[20001];
    static PriorityQueue<node_SP2> pq = new PriorityQueue<>(new Comparator<node_SP2>() {
        @Override
        public int compare(node_SP2 o1, node_SP2 o2) {
            return o1.w-o2.w;
        }
    });
    public static void main(String[] args) {
        v = in.nextInt(); e = in.nextInt();k=in.nextInt();
        for(int i=1;i<=v;i++) {
            nodes[i] = new ArrayList<>();
            d[i] = Integer.MAX_VALUE;
        }
        for(int i=0;i<e;i++) {
            nodes[in.nextInt()].add(new node_SP2(in.nextInt(), in.nextInt()));
        }
        d[k] = 0;
        pq.add(new node_SP2(k, 0));
        while (!pq.isEmpty()) {
            node_SP2 curr = pq.poll();
            for(node_SP2 adj : nodes[curr.dest]) {
                if(d[adj.dest]>d[curr.dest]+adj.w) {
                    d[adj.dest]=d[curr.dest]+adj.w;
                    pq.add(new node_SP2(adj.dest, d[adj.dest]));
                }
            }
        }
        for(int i=1;i<=v;i++) {
            System.out.println(d[i]==Integer.MAX_VALUE?"INF":d[i]);
        }
    }
}


```






