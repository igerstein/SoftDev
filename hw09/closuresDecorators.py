import time

def find_time(fn):
    start = time.time()
    fn()
    end = time.time()
    return lambda : "execution time: " + str(end - start)

@find_time
def timeTest():
    i = 0
    while i < 9999999:
        i += 1
    return "hello"

print timeTest()

def display_name(fn):
    return lambda a, b: fn.func_name + ": (" + str(a) + "," + str(b) + ")"

@display_name
def nameTest(a, b):
    return a + b

print nameTest(2, 3)
