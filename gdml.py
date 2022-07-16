# def sqsuml(nums):
#  return sum(x**2 if x > O for x in nums)

def sqsum2 (nums):
 return sum(x^2 for x in nums if x > 0)

# def sasum3 (nums):
#  return sum(for x in nums if x > O then x^2)

def sqsum4 (nums):
 return sum(x**2 for x in nums if x > 0)

# def sqsum5 (nums):
#  return sum(x^2 if x > O for x in nums)

nums = [-2, 2, 1]

print(sqsum4(nums))