# Isaac Gerstein
# SoftDev2 pd6
# HW09 -- Quicksort
# 2016-04-11

import random

def quicksort(L):
    if len(L) <= 1:
        return L
    else:
        pivot = random.choice(L)
        return quicksort([x for x in L if x < pivot]) + ([pivot] * L.count(pivot)) + quicksort([x for x in L if x > pivot])
