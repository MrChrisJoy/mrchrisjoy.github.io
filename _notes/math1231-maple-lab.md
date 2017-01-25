---
layout: post
title:  "Math1231: Maple Lab Test Questions & Solutions"
date: '2017-01-26 19:45:31 +1100'
author: Chris Joy
categories: unsw
---

**Disclaimer: These notes are in no way affiliated with UNSW's School of Mathematics and MathSoc. Use them at your own risk. I highly recommend you try doing the practice questions yourself first.
___
<br><br>
### Q1.
![q1-question](/images/maple-test/q1.PNG){:class="img-responsive"}
<br><strong>Q1 Solution:</strong>
<pre>
>>> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
>>> A := <<6534, 37886, 17462, -3738, 4430> | <32490, -26590, -49930, 21570, 51050> | <21912, -6552, -10284, -84984, -72360> | <-14745, -25505, -21035, 6315, 14575> | <26985, 26065, -20645, 16605, 24025>>;
>>> Eigenvalues(A);
</pre>
<br><br>
___
### Q2.
![q2-question](/images/maple-test/q2.PNG){:class="img-responsive"}
<br><strong>Q2 Solution:</strong>
<pre>
>>> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
>>> A := <<2490, 186, -538, 2294, 958> | <7200, 576, -2424, 7764, 1668> | <1680, 240, -328, 1640, 640> | <540, -36, -492, 876, -228> | <-7680, -192, 3008, -8308, -1436>>;
>>> Rank(A);
</pre>
<br><br>
___
### Q3.
![q3-question](/images/maple-test/q3.PNG){:class="img-responsive"}
<br><strong>Q3 Solution:</strong>
<pre>
>>> sum((5*x -3*k)^k, k=110..1900):
</pre>
<br><br>
___
### Q4.
![q4-question](/images/maple-test/q4.PNG){:class="img-responsive"}
<br><strong>Q4 Solution:</strong>
<pre>
>>> product(x^5 -k +5*x,k=150..1900):
</pre>
<br><br>
___
### Q5.
![q5-question](/images/maple-test/q5.PNG){:class="img-responsive"}
<br><strong>Q5 Solution:</strong>
<pre>
>>> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
>>> u:=<11,49,-9>; v:=<40,-8,-14>;
>>> CrossProduct(u,v);
</pre>
<br><br>
___
### Q6.
![q6-question](/images/maple-test/q6.PNG){:class="img-responsive"}
<br><strong>Q6 Solution:</strong>
<pre>
>>> p := -3*x^12-6*x^11+409*x^10-1882*x^9-1546*x^8+12188*x^7-36316*x^6+117442*x^5-149243*x^4+273136*x^3-234223*x^2+144906*x-110270;
>>> q := x^13-x^12-72*x^11+110*x^10+1309*x^9-1941*x^8-1338*x^7-5616*x^6-45444*x^5+21928*x^4-117880*x^3+84000*x^2-88000*x+70000;
>>> convert(p/q, parfrac, x);

         9       -3 x + 3      -x + 3       9        8
     - ----- + ------------ + --------- + ----- - --------
       x + 5    2                     3   x + 7          3
               x  + 2 x - 2   / 2    \            (x - 5)
                              \x  + 2/

</pre>
<br><br>
___
### Q7.
![q7-question](/images/maple-test/q7.PNG){:class="img-responsive"}
<br><strong>Q7 Solution:</strong>
<pre>
>>> f := (x,y)-> 8*x^8*y^3*sin(3*x-5*y);
>>> D[1$8, 2$8](f)(2,2) # where x is 1$ and y is 2$
</pre>
<br><br>
___
### Q8.
![q8-question](/images/maple-test/q8.PNG){:class="img-responsive"}
<br><strong>Q8 Solution:</strong>
<pre>
>>> ODE := y(x)*diff(y(x),x$2) + diff(y(x),x)^2 = 0;
>>> dsolve({ODE, y(0)=4, D(y)(0)=7}, y(x));

                                       (1/2)
                    y(x) = 2 (4 + 14 x)
</pre>
<br><br>
___
### Q9.
![q9-question](/images/maple-test/q9.PNG){:class="img-responsive"}
<br><strong>Q9 Solution:</strong>
<pre>
>>> ODE := y(x)*diff(y(x),x$2) - 1/2*diff(y(x),x)^2 = 0;
>>> dsolve({ODE, y(0)=1, D(y)(0)=6}, y(x));

                               2
                     y(x) = 9 x  + 6 x + 1
</pre>
<br><br>
___
### Q10.
![q10-question](/images/maple-test/q10.PNG){:class="img-responsive"}
<br><strong>Q10 Solution:</strong>
<pre>
>>> ODE := y(x)*diff(y(x), x$2) -2/3*diff(y(x),x)^2 = 0;
>>> dsolve({ODE, y(0)=2, D(y)(0)=7}, y(x));

                       343  3   49  2
                y(x) = --- x  + -- x  + 7 x + 2
                       108      6
</pre>
<br><br>
___
### Q11.
![q11-question](/images/maple-test/q11.PNG){:class="img-responsive"}
<br><strong>Q11 Solution:</strong>
<pre>
>>> ODE := y(x)*diff(y(x),x$2) + 4*diff(y(x),x)^2 = 0;
>>> dsolve({ODE, y(0)=4, D(y)(0)=3}, y(x));

                                        (1/5)
                   y(x) = 2 (120 x + 32)
</pre>
<br><br>
___
### Q12.
![q12-question](/images/maple-test/q12.PNG){:class="img-responsive"}
<br><br>
___
### Q13.
![q13-question](/images/maple-test/q13.PNG){:class="img-responsive"}
<br><br>
___
### Q14.
![q14-question](/images/maple-test/q14.PNG){:class="img-responsive"}
<br><br>
___
### Q15.
![q15-question](/images/maple-test/q15.PNG){:class="img-responsive"}
<br><br>
___
### Q16.
![q16-question](/images/maple-test/q16.PNG){:class="img-responsive"}
<br><br>
___
### Q17.
![q17-question](/images/maple-test/q17.PNG){:class="img-responsive"}
<br><br>
___
### Q18.
![q18-question](/images/maple-test/q18.PNG){:class="img-responsive"}
<br><br>
___
### Q19.
![q19-question](/images/maple-test/q19.PNG){:class="img-responsive"}
<br><br>
___
### Q20.
![q20-question](/images/maple-test/q20.PNG){:class="img-responsive"}
<br><br>
___
### Q21.
![q21-question](/images/maple-test/q21.PNG){:class="img-responsive"}
<br><br>
___
### Q22.
![q22-question](/images/maple-test/q22.PNG){:class="img-responsive"}
<br><br>
___
### Q23.
![q23-question](/images/maple-test/q23.PNG){:class="img-responsive"}
<br><br>
___
### Q24.
![q24-question](/images/maple-test/q24.PNG){:class="img-responsive"}
<br><strong>Q24 Solution:</strong>
<pre>
>>> restart; # clear memory as we need to reuse the A variable OR use A := 'A'
>>> with(geom3d): # Load the geom3d package, if not already loaded.
>>> point(A, [5,-4,-4]); point(B, [-2,2,2]); point(C, [-5,3,-1]);
>>> line(L1, [A, [2,4,2]]);
>>> plane(P, [B, [-4,-4,2]]);
>>> intersection(E, L1, P);
>>> sphere(S, [A,B,C,E]);
>>> center(F, S);
>>> line(L2, [C,F]);
>>> evalf[10](FindAngle(L1,P));
                         -0.7483271725
>>> coordinates(F);
                      [-1947  -239  -2577]
                      [-----, ----, -----]
                      [ 910    70    910 ]
>>> distance(A, L2);

                1               (1/2)         (1/2)
             -------- 1724588486      43625067
             43625067

</pre>
<br><br>
___
### Q25.
![q25-question](/images/maple-test/q25.PNG){:class="img-responsive"}
<br><strong>Q25 Solution:</strong>
<pre>
>>> restart; # clear memory as we need to reuse the A variable OR use A := 'A'
>>> with(geom3d): # Load the geom3d package, if not already loaded.
>>> point(A, [-3,0,1]); point(B, [3,6,6]); point(C, [19,19,17]);
>>> line(L1, [A, [2,4,2]]);
>>> plane(P, [B, [-4,-4,2]]);
>>> intersection(E, L1, P);
>>> sphere(S, [A,B,C,E]);
>>> center(F, S);
>>> line(L2, [C,F]);
>>> evalf[10](FindAngle(L1,P));
                         -0.7483271725
>>> coordinates(F);
                      [-1947  -239  -2577]
                      [-----, ----, -----]
                      [ 910    70    910 ]
>>> distance(A, L2);

                1               (1/2)         (1/2)
             -------- 1724588486      43625067
             43625067
</pre>
<br><br>
___
### Q26.
![q26-question](/images/maple-test/q26.PNG){:class="img-responsive"}
<br><strong>Q26 Solution:</strong>
<pre>
>>> restart; # clear memory
>>> a := proc(n)     # shift + enter
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
>>>
</pre>
<br><br>
___
### Q27.
<br>![q27-question](/images/maple-test/q27.PNG){:class="img-responsive"}
<br><strong>Q27 Solution:</strong>
<pre>
>>> restart; # clear memory
>>> Digits := 30;                             # shift + enter
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
>>> f(5);
                               -1
>>> f(13);
                0.999965406070608925874302546481
</pre>
<br><br>
