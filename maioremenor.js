maior = 0
menor = 999
soma_homens = 0
quant_homens = 0
quant_mulheres = 0

for i in range(15):
    print("Pessoa", i + 1)
    altura = float(input("Altura (em metros): "))
    genero = input("Gênero (M/F): ")

    if altura > maior:
        maior = altura
    if altura < menor:
        menor = altura

    if genero == "M":
        soma_homens = soma_homens + altura
        quant_homens = quant_homens + 1
    if genero == "F":
        quant_mulheres = quant_mulheres + 1

if quant_homens > 0:
    media_homens = soma_homens / quant_homens
else:
    media_homens = 0

print("Maior altura:", maior, "m")
print("Menor altura:", menor, "m")
print("Média de altura dos homens:", media_homens, "m")
print("Número de mulheres:", quant_mulheres)

