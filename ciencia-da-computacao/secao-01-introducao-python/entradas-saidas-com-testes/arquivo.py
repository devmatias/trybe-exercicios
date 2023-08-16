import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)

# user_input = input("Digite uma mensagem: ")
# print('O valor recebido foi:', user_input)

# msg_input = input('Digite algo: ')
# for letter in msg_input:
#     print(letter)


def soma_numeros(array_num):
    print(type(array_num[0]))
    sum_num = 0
    for num in array_num:
        if not isinstance(num, int):
            print(f"Erro ao somar valores, {num} é um valor inválido")
        else:
            sum_num += num
    return sum_num


print(soma_numeros([3, 4, 5, 6, '1']))

a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3)  # Quando um * está presente no desempacotamento, os 
# valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]