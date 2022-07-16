import math

hours = 24
half_life = 6

for t in range(hours):
    exponent = -1 * (t + 1)*(math.log(2) / half_life)
    result = math.exp(exponent)
    print("{}: {:.6f}".format(t+1,result) )
    # print(t+1 + " " + (result, 6) )

# i = 1
# nth_term = 0
# start = 10000

 
# def printPi(num):
#     nth_term = 0
#     if(num > 100000):
#         return
#     for i in range(num):
#         nth_term += ((-1)**((i+1)+1)) / (2*(i+1) - 1)
#     print(nth_term * 4)
#     num += 10000
#     printPi(num)

# printPi(start)


