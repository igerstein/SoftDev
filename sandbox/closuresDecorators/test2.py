import random

def doubler(f):
    def inner():
        name = f()
        return name + name
    return inner

@doubler
def get_name():
    names = ["tom", "sue", "harry", "lisa", "sarah", "horatio"]
    return random.choice(names)

print get_name()
