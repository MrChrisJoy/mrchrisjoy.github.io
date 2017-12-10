---
layout: post
title:  "Math1231: Maple Lab Test Questions & Solutions"
image: /images/notes/maple-test/maple-cover.jpg
date: '2017-01-26 19:45:31 +1100'
author: Chris Joy
categories: unsw-math
published: true
---

These solutions have been extracted from the 2016s2 maple lab practice test. These notes are in no way affiliated with UNSW's School of Mathematics nor UNSW's MathSoc. I highly recommend you try doing the practice questions yourself and use these notes if your really stuck.
Maple 18 was used to generate the solutions.

# Question 1
![q1](/images/notes/maple-test/q1.PNG)
```R
>>> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
>>> A := <<6534, 37886, 17462, -3738, 4430> | <32490, -26590, -49930, 21570, 51050> | <21912, -6552, -10284, -84984, -72360> | <-14745, -25505, -21035, 6315, 14575> | <26985, 26065, -20645, 16605, 24025>>;
>>> Eigenvalues(A);
```

# Question 2
![q2](/images/notes/maple-test/q2.PNG)
```R
>>> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
>>> A := <<2490, 186, -538, 2294, 958> | <7200, 576, -2424, 7764, 1668> | <1680, 240, -328, 1640, 640> | <540, -36, -492, 876, -228> | <-7680, -192, 3008, -8308, -1436>>;
>>> Rank(A);
```

# Question 3
![q3](/images/notes/maple-test/q3.PNG)
```R
>>> sum((5*x -3*k)^k, k=110..1900):
```

# Question 4
![q4](/images/notes/maple-test/q4.PNG)
```R
>>> product(x^5 -k +5*x,k=150..1900):
```

# Question 5
![q5](/images/notes/maple-test/q5.PNG)
```R
>>> with(LinearAlgebra): # Include the LinearAlgebra package, if not already loaded.
>>> u:=<11,49,-9>; v:=<40,-8,-14>;
>>> CrossProduct(u,v);
```

# Question 6
![q6](/images/notes/maple-test/q6.PNG)
```R
>>> p := -3*x^12-6*x^11+409*x^10-1882*x^9-1546*x^8+12188*x^7-36316*x^6+117442*x^5-149243*x^4+273136*x^3-234223*x^2+144906*x-110270;
>>> q := x^13-x^12-72*x^11+110*x^10+1309*x^9-1941*x^8-1338*x^7-5616*x^6-45444*x^5+21928*x^4-117880*x^3+84000*x^2-88000*x+70000;
>>> convert(p/q, parfrac, x);

         9       -3 x + 3      -x + 3       9        8
     - ----- + ------------ + --------- + ----- - --------
       x + 5    2                     3   x + 7          3
               x  + 2 x - 2   / 2    \            (x - 5)
                              \x  + 2/
```

# Question 7
![q7](/images/notes/maple-test/q7.PNG)
```R
>>> f := (x,y)-> 8*x^8*y^3*sin(3*x-5*y);
>>> D[1$8, 2$8](f)(2,2) # where x is 1$ and y is 2$
```

# Question 8
![q8](/images/notes/maple-test/q8.PNG)
```R
>>> ODE := y(x)*diff(y(x),x$2) + diff(y(x),x)^2 = 0;
>>> dsolve({ODE, y(0)=4, D(y)(0)=7}, y(x));

                                       (1/2)
                    y(x) = 2 (4 + 14 x)
```

# Question 9
![q9](/images/notes/maple-test/q9.PNG)
```R
>>> ODE := y(x)*diff(y(x),x$2) - 1/2*diff(y(x),x)^2 = 0;
>>> dsolve({ODE, y(0)=1, D(y)(0)=6}, y(x));
                               2
                     y(x) = 9 x  + 6 x + 1
```

# Question 10
![q10](/images/notes/maple-test/q10.PNG)
```R
>>> ODE := y(x)*diff(y(x), x$2) -2/3*diff(y(x),x)^2 = 0;
>>> dsolve({ODE, y(0)=2, D(y)(0)=7}, y(x));

                       343  3   49  2
                y(x) = --- x  + -- x  + 7 x + 2
                       108      6
```

# Question 11
![q11](/images/notes/maple-test/q11.PNG)
```R
>>> ODE := y(x)*diff(y(x),x$2) + 4*diff(y(x),x)^2 = 0;
>>> dsolve({ODE, y(0)=4, D(y)(0)=3}, y(x));
                                        (1/5)
                   y(x) = 2 (120 x + 32)
```

# Question 12
![q12](/images/notes/maple-test/q12.PNG)

# Question 13
![q13](/images/notes/maple-test/q13.PNG)

# Question 14
![q14](/images/notes/maple-test/q14.PNG)

# Question 15
![q15](/images/notes/maple-test/q15.PNG)

# Question 16
![q16](/images/notes/maple-test/q16.PNG)

# Question 17
![q17](/images/notes/maple-test/q17.PNG)

# Question 18
![q18](/images/notes/maple-test/q18.PNG)

# Question 19
![q19](/images/notes/maple-test/q19.PNG)

# Question 20
![q20](/images/notes/maple-test/q20.PNG)

# Question 21
![q21](/images/notes/maple-test/q21.PNG)

# Question 22
![q22](/images/notes/maple-test/q22.PNG)

# Question 23
![q23](/images/notes/maple-test/q23.PNG)

# Question 24
![q24](/images/notes/maple-test/q24.PNG)
```R
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
```

# Question 24
![q25](/images/notes/maple-test/q25.PNG)
```R
>>> restart; # clear memory as we need to reuse the A variable OR use A := 'A'
>>> with(geom3d): # Load the geom3d package, if not already loaded.
>>> point(A, [-3,0,1]); point(B, [3,6,6]); point(C, [19,19,17]);
>>> sphere(S1, [A,12]);
>>> sphere(S2, [B,C])
>>> intersection(T, S1, S2);
>>> center(E, T);
>>> line(L1, [B,E]);
>>> line(L2, [A, [4,1,1]]);
>>> coordinates(E);
                      [ 761    235   1172]
                      [-----, ----, -----]
                      [ 185    37    185 ]
>>> evalf[10](FindAngle(L1,L2));
                         0.07183271725
>>> distance(L1, L2);
0
```

# Question 26
![q26](/images/notes/maple-test/q26.PNG)
```R
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
```


# Question 27
![q27](/images/notes/maple-test/q27.PNG)
```R
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
```