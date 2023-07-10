import binascii 
def strxor(x, y):
    x=x.encode('utf-8')
    x=int(x.hex(), 16)
    y=y.encode('utf-8')
    y=int(y.hex(), 16)
    return x^y
def strint(x, y):
	x=x.encode('utf-8')
	x=int(x.hex(), 16)
	ans=x^y
	ans=hex(ans)
	ans=binascii.unhexlify(ans[2:])
	return ans
print('Welcome to my secure system')
print('Type the password down below')
s=input()
flag=1485945625209786269787278071503638
key='ICEDTEA'
print(strxor(s, key))
if strxor(s, key)==5205074989832415786:
    print(strint(s, flag))
else:
    print('Wrong answer')