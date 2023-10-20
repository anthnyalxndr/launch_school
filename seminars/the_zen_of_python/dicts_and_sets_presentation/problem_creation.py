import string
import random

ALNUMS = set(string.ascii_lowercase + string.digits)

def insertDigits(pangram):
    newStr = list(pangram)
    for num in range(10):
        randIdx = random.randint(0, len(newStr) - 1)
        newStr.insert(randIdx, f'{num}')
    return ''.join(newStr)

def removeRandom(pangram):
    arr = list(pangram)
    arr.remove(random.choice(list(ALNUMS)))
    return ''.join(arr)

pangrams = ['Mr. Jock, TV quiz PhD., bags few lynx.', 'The quick brown fox jumps over a lazy dog.', 'Two driven jocks help fax my big quiz.']


pangramsWithDigits = [insertDigits(pangram) for pangram in pangrams]

# These are the source of the strings in the problem
pangrams_w_random_removed = [removeRandom(el) for el in pangramsWithDigits]
