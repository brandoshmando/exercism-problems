#
# Skeleton file for the Python "Bob" exercise.
#
REPLIES = [ "Whatever.", "Sure.", "Whoa, chill out!"]

def hey(what):
  if what.upper() == what:
    return REPLIES[2]
  else:
    return check_punct(what[-1])

def check_punct(punct):
  return {
    '.':REPLIES[0],
    '!':REPLIES[0],
    '?':REPLIES[1]
  }[punct]




