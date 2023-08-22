import numpy as np


def maxNumber(num1, num2):
    return max(num1, num2)


def meanByList(numList):
    return np.mean(numList)


def squareBySide(number):
    for row in range(number):
        print(number * '*') 


def getBiggerString(stringList):
    biggerString = ''
    for name in stringList:
        if len(name) > len(biggerString):
            biggerString = name
    return biggerString


def measuringPaintByWall(wallArea):
    cans = np.ceil(wallArea / (18 * 3))
    return (cans, cans * 80)


def triangleType(side1, side2, side3):
    if side1 == side2 == side3:
        print('O triangulo é equilatero')
    elif side1 == side2 or side1 == side3 or side2 == side3:
        print('O triangulo é isosceles')
    else:
        print('O triangulo é escaleno')


def minElement(numberList):
    print(min(numberList))


def pyramidByIndex(number):
    for row in range(number + 1):
        print(row * '*') 


def sumRange(number):
    sum = 0
    for num in range(number + 1):
        sum += num
    return sum


print(sumRange(5))
pyramidByIndex(5)
minElement([5, 9, 3, 19, 70, 8, 100, 2, 35, 27])
triangleType(3, 3, 3)
print(measuringPaintByWall(500))
print(getBiggerString(['Matias', 'Fernando', 'Patrobinhas']))
squareBySide(5)
print(meanByList([1, 2, 45, 64]))
print(maxNumber(1, 5))

