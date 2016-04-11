# Isaac Gerstein
# SoftDev2 pd6
# HW09 -- Quicksort
# 2016-04-11

def quicksort(L):
    if len(L) <= 1:
        return L
    else:
        return quicksort([x for x in L if x < L[0]]) + [L[0]] + quicksort([x for x in L if x > L[0]])
