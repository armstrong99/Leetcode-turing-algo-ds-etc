from curses.ascii import isupper
import random
import os

def isPalin(w1 = ""):
       return w1.lower()[::-1] == w1.lower()
 
# print(isPalin("Madam"))


def sumList(_list = list(range(4))):
    if(len(_list) <= 0):
        return 0
    if(len(_list) == 1):
        return _list[0]

    return _list.pop(0) +  sumList(_list)



# print(sumList([2, 4, 5, 6, 7]), range(4))

def random_line(fname):
    lines = open(fname).read().splitlines()
    return random.choice(lines)


print(random_line("pyIntv/text.txt"))

def capital_chars_file(fname):
    with open(fname) as today:
        count = 0
        for i in today.read():
            if i.isupper():
                count += 1
        print(count)


capital_chars_file("pyIntv/text.txt")
