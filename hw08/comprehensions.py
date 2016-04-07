# Isaac Gerstein
# SoftDev2 pd6
# HW08 -- List Comprehension Functions
# 2016-04-08

def union(a, b):
    return a + [x for x in b if not x in a]

def intersection(a, b):
    return [x for x in a if x in b]

def setDifference(u, a):
    return [x for x in u if not x in a]

def symmetricDifference(a, b):
    return [x for x in a if not x in b] + [x for x in b if not x in a]

def cartesianProduct(a, b):
    return [[x, y] for x in a for y in b]
