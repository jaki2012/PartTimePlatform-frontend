$(function () {
	//验证表单
	$("#loginForm").validate({
		/* onkeyup: false,
	focusCleanup:true, */
		rules: {
			email: {
				required: true,
				email: true
			},
			password: {
				required: true
			}
		},
		messages: {
			email: {
				required: "请输入登录邮箱地址",
				email: "请输入有效的邮箱地址，如：vivi@lagou.com"
			},
			password: {
				required: "请输入密码"
			}
		},
		submitHandler: function (form) {
			if ($('#remember').prop("checked")) {
				$('#remember').val(1);
			} else {
				$('#remember').val(null);
			}
			var email = $('#email').val();
			var password = $('#password').val();
			var remember = $('#remember').val();

			var callback = $('#callback').val();
			var authType = $('#authType').val();
			var signature = $('#signature').val();
			var timestamp = $('#timestamp').val();

			$(form).find(":submit").attr("disabled", true);
			$.ajax({
				type: 'POST',
				data: { email: email, password: password, autoLogin: remember, callback: callback, authType: authType, signature: signature, timestamp: timestamp },
				url: ctx + '/user/login.json'
			}).done(function (result) {
				if (result.success) {
					if (result.content.loginToUrl) {
						window.location.href = result.content.loginToUrl;
					} else {
						window.location.href = ctx + '/';
					}
				} else {
					$('#beError').text(result.msg).show();
				}
				$(form).find(":submit").attr("disabled", false);
			});
		}
	});

	$('#mylogin').validate({
		onfocusout: function (element) {
			$(element).valid();
		},
		rules: {
			account :{
				required:true
			},
			password: {
				required:true,
				minlength: 6
			}
		},
		messages: {
			account:{
				required: "请输入正确的手机或邮箱"
			},
			password: {
				required: "请输入密码",
				minlength: "密码不能小于6个字母"
			}

		}
	});
})