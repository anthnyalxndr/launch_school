import string

ALNUMS = set(string.ascii_lowercase + string.digits)

def missing_alnum(pangram):
    # filter out non-alphanumeric characters
    filtered_pangram = set([char.lower() for char in pangram if char.isalnum()])
    # return the symmetric difference between the complete set of
    # of alphanumeric characters and the filtered pangram.
    return ALNUMS ^ filtered_pangram


strings = [
    'Mr. J092ock,5 TV quiz3 48Ph6D., bags few ly1nx.',
'Th7e 4quick 912b3rown fox ju085mps over a azy do6g.',
'Two driven j1o4c05ks9 6hel 8fax my 3bi7g2 quiz.'
]

for pangram in strings:
    print(missing_alnum(pangram))
# {'7'}
# {'l'}
# {'p'}
