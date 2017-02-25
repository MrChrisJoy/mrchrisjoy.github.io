---
layout: post
title:  "Math1231: Maple Lab Test Questions & Solutions"
date: '2017-01-26 19:45:31 +1100'
author: Chris Joy
categories: unsw-math
---

These solutions have been extracted from the 2016s2 maple lab practice test. These notes are in no way affiliated with UNSW's School of Mathematics nor UNSW's MathSoc. I highly recommend you try doing the practice questions yourself and use these notes if your really stuck.
Maple 18 was used to generate the solutions.
<br><br><br>
<hr><br><strong>Q1 Solution:</strong>
![q1-question](/images/maple-test/q1.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
<code style="color:red;">>>></code> A := <<6534, 37886, 17462, -3738, 4430> | <32490, -26590, -49930, 21570, 51050> | <21912, -6552, -10284, -84984, -72360> | <-14745, -25505, -21035, 6315, 14575> | <26985, 26065, -20645, 16605, 24025>>;
<code style="color:red;">>>></code> Eigenvalues(A);
</pre>
<br><br>
<hr><br><strong>Q2 Solution:</strong>
![q2-question](/images/maple-test/q2.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
<code style="color:red;">>>></code> A := <<2490, 186, -538, 2294, 958> | <7200, 576, -2424, 7764, 1668> | <1680, 240, -328, 1640, 640> | <540, -36, -492, 876, -228> | <-7680, -192, 3008, -8308, -1436>>;
<code style="color:red;">>>></code> Rank(A);
</pre>
<br><br>
<hr><br><strong>Q3 Solution:</strong>
![q3-question](/images/maple-test/q3.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> sum((5*x -3*k)^k, k=110..1900):
</pre>
<br><br>
<hr><br><strong>Q4 Solution:</strong>
![q4-question](/images/maple-test/q4.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> product(x^5 -k +5*x,k=150..1900):
</pre>
<br><br>
<hr><br><strong>Q5 Solution:</strong>
![q5-question](/images/maple-test/q5.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
<code style="color:red;">>>></code> u:=<11,49,-9>; v:=<40,-8,-14>;
<code style="color:red;">>>></code> CrossProduct(u,v);
</pre>
<br><br>
<hr><br><strong>Q6 Solution:</strong>
![q6-question](/images/maple-test/q6.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> p := -3*x^12-6*x^11+409*x^10-1882*x^9-1546*x^8+12188*x^7-36316*x^6+117442*x^5-149243*x^4+273136*x^3-234223*x^2+144906*x-110270;
<code style="color:red;">>>></code> q := x^13-x^12-72*x^11+110*x^10+1309*x^9-1941*x^8-1338*x^7-5616*x^6-45444*x^5+21928*x^4-117880*x^3+84000*x^2-88000*x+70000;
<code style="color:red;">>>></code> convert(p/q, parfrac, x);

         9       -3 x + 3      -x + 3       9        8
     - ----- + ------------ + --------- + ----- - --------
       x + 5    2                     3   x + 7          3
               x  + 2 x - 2   / 2    \            (x - 5)
                              \x  + 2/
</pre>
<br><br>
<hr><br><strong>Q7 Solution:</strong>
![q7-question](/images/maple-test/q7.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> f := (x,y)-> 8*x^8*y^3*sin(3*x-5*y);
<code style="color:red;">>>></code> D[1$8, 2$8](f)(2,2) # where x is 1$ and y is 2$
</pre>
<br><br>
<hr><br><strong>Q8 Solution:</strong>
![q8-question](/images/maple-test/q8.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> ODE := y(x)*diff(y(x),x$2) + diff(y(x),x)^2 = 0;
<code style="color:red;">>>></code> dsolve({ODE, y(0)=4, D(y)(0)=7}, y(x));

                                       (1/2)
                    y(x) = 2 (4 + 14 x)
</pre>
<br><br>
<hr><br><strong>Q9 Solution:</strong>
![q9-question](/images/maple-test/q9.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> ODE := y(x)*diff(y(x),x$2) - 1/2*diff(y(x),x)^2 = 0;
<code style="color:red;">>>></code> dsolve({ODE, y(0)=1, D(y)(0)=6}, y(x));

                               2
                     y(x) = 9 x  + 6 x + 1
</pre>
<br><br>
<hr><br><strong>Q10 Solution:</strong>
![q10-question](/images/maple-test/q10.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> ODE := y(x)*diff(y(x), x$2) -2/3*diff(y(x),x)^2 = 0;
<code style="color:red;">>>></code> dsolve({ODE, y(0)=2, D(y)(0)=7}, y(x));

                       343  3   49  2
                y(x) = --- x  + -- x  + 7 x + 2
                       108      6
</pre>
<br><br>
<hr><br><strong>Q11 Solution:</strong>
![q11-question](/images/maple-test/q11.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> ODE := y(x)*diff(y(x),x$2) + 4*diff(y(x),x)^2 = 0;
<code style="color:red;">>>></code> dsolve({ODE, y(0)=4, D(y)(0)=3}, y(x));

                                        (1/5)
                   y(x) = 2 (120 x + 32)
</pre>
<br><br>
<hr><br><strong>Q12 Solution:</strong>
![q12-question](/images/maple-test/q12.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q13 Solution:</strong>
![q13-question](/images/maple-test/q13.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q14 Solution:</strong>
![q14-question](/images/maple-test/q14.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q15 Solution:</strong>
![q15-question](/images/maple-test/q15.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q16 Solution:</strong>
![q16-question](/images/maple-test/q16.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q17 Solution:</strong>
![q17-question](/images/maple-test/q17.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q18 Solution:</strong>
![q18-question](/images/maple-test/q18.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q19 Solution:</strong>
![q19-question](/images/maple-test/q19.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q20 Solution:</strong>
![q20-question](/images/maple-test/q20.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q21 Solution:</strong>
![q21-question](/images/maple-test/q21.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q22 Solution:</strong>
![q22-question](/images/maple-test/q22.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q23 Solution:</strong>
![q23-question](/images/maple-test/q23.PNG){:class="img-responsive"}
<br><br>
<hr><br><strong>Q24 Solution:</strong>
![q24-question](/images/maple-test/q24.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> restart; # clear memory as we need to reuse the A variable OR use A := 'A'
<code style="color:red;">>>></code> with(geom3d): # Load the geom3d package, if not already loaded.
<code style="color:red;">>>></code> point(A, [5,-4,-4]); point(B, [-2,2,2]); point(C, [-5,3,-1]);
<code style="color:red;">>>></code> line(L1, [A, [2,4,2]]);
<code style="color:red;">>>></code> plane(P, [B, [-4,-4,2]]);
<code style="color:red;">>>></code> intersection(E, L1, P);
<code style="color:red;">>>></code> sphere(S, [A,B,C,E]);
<code style="color:red;">>>></code> center(F, S);
<code style="color:red;">>>></code> line(L2, [C,F]);
<code style="color:red;">>>></code> evalf[10](FindAngle(L1,P));
                         -0.7483271725
<code style="color:red;">>>></code> coordinates(F);
                      [-1947  -239  -2577]
                      [-----, ----, -----]
                      [ 910    70    910 ]
<code style="color:red;">>>></code> distance(A, L2);

                1               (1/2)         (1/2)
             -------- 1724588486      43625067
             43625067

</pre>
<br><br>
<hr><br><strong>Q25 Solution:</strong>
![q25-question](/images/maple-test/q25.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> restart; # clear memory as we need to reuse the A variable OR use A := 'A'
<code style="color:red;">>>></code> with(geom3d): # Load the geom3d package, if not already loaded.
<code style="color:red;">>>></code> point(A, [-3,0,1]); point(B, [3,6,6]); point(C, [19,19,17]);
<code style="color:red;">>>></code> sphere(S1, [A,12]);
<code style="color:red;">>>></code> sphere(S2, [B,C])
<code style="color:red;">>>></code> intersection(T, S1, S2);
<code style="color:red;">>>></code> center(E, T);
<code style="color:red;">>>></code> line(L1, [B,E]);
<code style="color:red;">>>></code> line(L2, [A, [4,1,1]]);
<code style="color:red;">>>></code> coordinates(E);
                      [ 761    235   1172]
                      [-----, ----, -----]
                      [ 185    37    185 ]
<code style="color:red;">>>></code> evalf[10](FindAngle(L1,L2));
                         0.07183271725
<code style="color:red;">>>></code> distance(L1, L2);
0
</pre>
<br><br>
<hr><br><strong>Q26 Solution:</strong>
![q26-question](/images/maple-test/q26.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> restart; # clear memory
<code style="color:red;">>>></code> a := proc(n)     # shift + enter
      local a,i;     # shift + enter
      a[1]:=2;     # shift + enter
      a[2]:=0;     # shift + enter
      a[3]:=-1;     # shift + enter
      for i from 3 to n-1 do     # shift + enter
          a[i+1]:=a[i]-4*a[i-1]+a[i-2]     # shift + enter
      end do;     # shift + enter
      return a[n]     # shift + enter
    end proc;     # shift + enter
    a(90);
                       -6124977648188652773170728
<code style="color:red;">>>></code>
</pre>
<br><br>
<hr><br><strong>Q27 Solution:</strong>
<br>![q27-question](/images/maple-test/q27.PNG){:class="img-responsive"}
<pre>
<code style="color:red;">>>></code> restart; # clear memory
<code style="color:red;">>>></code> Digits := 30;                             # shift + enter
    f := proc(m)                              # shift + enter
      local a,i;                              # shift + enter
      a[0]:=0;                                # shift + enter
      for i from 1 to m do                    # shift + enter
          a[i] := evalf(sin((1+a[i-1]/4)^2))    # shift + enter
      end do;                                 # shift + enter
      if abs(a[m]-a[m-1]) < 10^(-18) then     # shift + enter
          a[m]                                  # shift + enter
      else                                    # shift + enter
          -1                                    # shift + enter
      end if                                  # shift + enter
    end proc;                                 # shift + enter
<code style="color:red;">>>></code> f(5);
                               -1
<code style="color:red;">>>></code> f(13);
                0.999965406070608925874302546481
</pre>
<br><br>
