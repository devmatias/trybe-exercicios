def count_par(list):
    count = 0
    for num in list:
        if num % 2 == 0:
            count += 1
    return count


print(count_par([1, 3, 5, 2, 3, 5, 6, 7, 8, 10]))


def count_par_recursive(list):
    count = 0
    if len(list) == 0:
        return count
    elif list[-1] % 2 == 0:
        list.pop()
        return count + 1 + count_par_recursive(list)
    else:
        list.pop()
        return count + count_par_recursive(list)
        

print(count_par_recursive([1, 3, 5, 2, 3, 5, 6, 7, 8, 10, 11, 12]))


def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho-1)
        if maior_do_resto_da_lista > lista[tamanho-1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho-1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 300, 4, 57]))


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)