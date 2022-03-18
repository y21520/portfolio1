function checkForm(){
    if(document.form1.input01.value == "" || document.form1.input02.value == ""){
        alert("必須項目を入力して下さい。");
	return false;
    }else if(document.form1.input01.value == "元良優作" || document.form1.input02.value == "y21520@iwate-it.ac.jp"){
        return true;
    }else{
	return false;
    }
}