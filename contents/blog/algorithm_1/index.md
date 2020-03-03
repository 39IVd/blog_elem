---
title: "[Algorithm] 백준 1068 : 트리 "
date: 2020-03-03
template: blog
image: ../images/algorithm.jpg
description: 
---
## Tree에서 한 node를 제거했을 때, 남은 leaf node의 개수를 구하는 프로그램.

![image](./img1.png)
![image](./img2.png)

1. node 1개 제거 후, 같이 제거되는 모든 node를 표시한다.
   -  parent[node]=-2로 표시.
   -  각 node의 모든 조상 중, 제거된 node가 하나라도 있을 경우 parent[node]=-2로 표시한다.

2. 남은 node의 개수를 res에 저장. > parent[]=-2인 node의 개수를 구함.
3. 남은 node들의 parent를 Set에 저장한다.
4. 남은 node의 개수 (res)-parent Set의 size = leaf node의 개수를 구한다.

### Java Code
<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=css&lang=sql&skin=desert"></script>
<pre class="prettyprint lang-java">
public class test {
    public static void main(String[] args) {
        
    }
}
</pre>
<pre><code>
public class test {
    public static void main(String[] args) {
        
    }
}
</code></pre>
[git](https://gist.github.com/39IVd/b9c8209c35c8c47c20fa826508039b00.js)
<script src="https://gist.github.com/39IVd/b9c8209c35c8c47c20fa826508039b00.js"></script>



