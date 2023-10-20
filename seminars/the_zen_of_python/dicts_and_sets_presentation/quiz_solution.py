import string

ALNUMS = set(string.ascii_lowercase + string.digits)

def missingAlnum(pangram):
    onlyalnum = set([char.lower() for char in pangram if char.isalnum()])
    return ALNUMS ^ onlyalnum


strings = [
    'Mr. J092ock,5 TV quiz3 48Ph6D., bags few ly1nx.',
'Th7e 4quick 912b3rown fox ju085mps over a azy do6g.',
'Two driven j1o4c05ks9 6hel 8fax my 3bi7g2 quiz.'
]

for pangram in strings:
    print(missingAlnum(pangram))
