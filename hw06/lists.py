# Isaac Gerstein
# SoftDev2 pd6
# HW06 -- List Comprehensions
# 2016-04-01

lowerCase = "abcdefghijklmnopqrstuvwxyz"
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
nums = "0123456789"
nonAlph = ".?!&#,;:-_*"

# Whether the password contains at least one uppercase letter, lowercase letter, and number
def meetsThreshold(pw):
    L = [0 if x in lowerCase else 1 if x in upperCase else 2 if x in nums else 3 for x in pw]
    return 0 in L and 1 in L and 2 in L

# Returns the strength rating of a password from 1-10
def strength(pw):
    L = [0 if x in lowerCase else 1 if x in upperCase else 2 if x in nums else 3 if x in nonAlph else 4 for x in pw]
    

print strength("abc123*?*")
