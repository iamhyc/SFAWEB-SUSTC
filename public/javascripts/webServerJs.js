/*BEGINNING reg_page*/
function check (){
		var id = $('#id_text').val();
			$.post('/users/reg_page', {'id':id}, function (sign){
				if (sign == "occupied") {
					$('#textin').addClass('has-error');
					$('#error-tick').addClass('glyphicon glyphicon-remove form-control-feedback')
				}

				if (sign == "formatError") {
				alert('格式错误！')
				}

				if (sign == "error"){
					alert("Something wrong happened.\nWe're sorry!")
					window.location.replace('/users/reg_page')
				}

				if (sign == "success") {
					alert('注册成功！(～￣▽￣)～*')
					window.location.replace('/users');
				}
			})
}

function rmErr(){
	$('#textin').removeClass('has-error');
	$('#error-tick').removeClass('glyphicon glyphicon-remove form-control-feedback')
}
/*ENDING	reg_page*/