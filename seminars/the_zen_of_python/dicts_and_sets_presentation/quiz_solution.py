import string

ALNUMS = set(string.ascii_lowercase + string.digits)

def missing_alnum(pangram):
    # filter out non-alphanumeric characters
    filtered_pangram = set([char.lower() for char in pangram if char.isalnum()])
    # return the symmetric difference between the complete set of
    # of alphanumeric characters and the filtered pangram.
    return ALNUMS ^ filtered_pangram


str1 = 'Mr. J092ock,5 TV quiz3 48Ph6D., bags few ly1nx.'
str2 = 'Th7e 4quick 912b3rown fox ju085mps over a azy do6g.'
str3 = 'Two driven j1o4c05ks9 6hel 8fax my 3bi7g2 quiz.'

print(missing_alnum(str1)) # {'7'}
print(missing_alnum(str2)) # {'l'}
print(missing_alnum(str3)) # {'p'}
