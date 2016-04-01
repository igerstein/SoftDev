# Isaac Gerstein
# SoftDev2 pd6
# HW07 -- Closures in Python
# 2016-04-04

def repeat(word):
    return lambda num: word * num

r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2)
print r2(2)
print repeat("cool")(3)
