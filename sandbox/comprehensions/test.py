import math

#Returns all pythagorean triples up to n
def pt(n):
    L = []
    for a in range(1, n):
        for b in range (a, n):
            for c in range (b, n): 
                if (a * a + b * b == c * c):
                    L.append([a, b, c])
    return L

#Uses list comprehensions
def pt2(n):
    return [[a, b, c]
            for a in range(1, n)
            for b in range(a, n)
            for c in range(b, n)
            if a * a + b * b == c * c]
