'''
import binascii
print("plz make sure that you have the key first!!!")
print("The key is in the exe file")
print("enter your key down below")
key=int(input())*999999999999999999999999999999
flag=27410858655704894410481839558778428385132031985221920
print(binascii.unhexlify(hex(key^flag)[2:]))
'''
for i in range(11, b):
	s=input()#題目名稱
	r=input()#類別
	c=input()#敘述
	k=input()#檔案
	u=input()#提示
	print(' <div class="container"> <div class="row"> <div class="col-xl-12"> <div class="panel-group" id="accordion" is-disabled="true"> <div class="panel panel-default"> <div class="container"> <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+str(i)+'"> <div class="panel-title"> <h4>Challenge '+str(i)+'. '+s+'<p style="float:right">'+r+'</p> </h4> </div> </a> </div> <div id="collapse'+str(i)+'" class="panel-collapse collapse in"> <div class="panel-body">'+c+'<br> <br> <div class="row justify-content-between"> <div class="col-xl-4 align-self-center"> <a href="Problems/'+k+'" class="btn btn-shadow text-mono btn-outline-success" style="width:100%"><span class="fa fa-download mr-2"></span>Checkout challenge</a> </div> <div class="col-xl-4 align-self-center"> <button type="button" class="btn btn-shadow btn-outline-success" data-toggle="modal" data-target="#hint'+str(i)+'" style="width:100%"><span class="far fa-lightbulb mr-2"></span>Get HINT</button> </div> <div class="col-xl-4 align-self-center"> <button type="button" class="btn btn-shadow btn-outline-success" data-toggle="modal"  style="width:100%" onclick="location.href='+"'"+'https://docs.google.com/forms/d/e/1FAIpQLSe4Jih7PAe-u6MKchlQnVUj6ZHfK4p4f7NgprSN47qiln3VjQ/alreadyresponded'+"'"+'"><span class="far fa-plane mr-2"></span>Submit</button> </div> </div></div></div></div></div></div></div></div> </div> </div> </div> </div><div class="modal fade" id="hint'+str(i)+'" tabindex="-1" role="dialog" aria-labelledby="hint label" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-body">'+u+'</div></div></div></div></div></div></div></div></div></div></div>')
