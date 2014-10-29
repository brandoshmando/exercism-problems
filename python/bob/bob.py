#
# Skeleton file for the Python "Bob" exercise.
#
REPLIES = [ "Whatever.", "Sure.", "Whoa, chill out!"]

def hey(what):
  char_phrase = strip_numbers(what)
  if char_phrase.upper() == char_phrase:
    return REPLIES[2]
  else:
    return check_punct(what[-1])

def strip_numbers(string):
  return ''.join(char for char in string if not char.isdigit())

def check_punct(punct):
  return {
    '.':REPLIES[0],
    '!':REPLIES[0],
    '?':REPLIES[1]
  }[punct]




