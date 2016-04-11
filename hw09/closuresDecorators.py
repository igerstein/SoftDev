# Isaac Gerstein
# SoftDev2 pd6
# HW09 -- Closures and Decorators
# 2016-04-11

import time

def find_time(fn):
    def inner(*args):
        start = time.time()
        returns = fn(*args)
        end = time.time()
        print "execution time: " + str(end - start)
        return returns
    return inner

@find_time
def timeTest():
    i = 0
    while i < 9999999:
        i += 1
    return "hello"

print timeTest()

def display_name(fn):
    def inner(*args):
        print fn.func_name + ": " + str(args)
        return fn(*args)
    return inner

@display_name
def nameTest(a, b):
    return a + b

print nameTest(2, 3)
