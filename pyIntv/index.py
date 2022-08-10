from functools import reduce

from functools import reduce


def filterList(x):
    return int(x) > 5

filt = list(filter(filterList, [1,2,3,4,5,6]))


print(filt, range(8))


_map = list(map(lambda x:x**2, range(8)))

print("_map ", _map)

_reduce = reduce(lambda x,y:x-y, range(8))

print("_reduce ", _reduce)



