function split(a) {
	return a.replace("；", ";"), a.split(/;\s*/)
}
function extractLast(a) {
	return split(a).pop()
}
function suggestEmail(a) {
	var b = "";
	$.ajax({
		type: "GET",
		async: !1,
		url: ctx + "/corpResume/forwardEmails.json",
		dataType: "json"
	}).done(function(a) {
		b = a.content
	}), $("#" + a).autocomplete({
		source: function(a, c) {
			c($.ui.autocomplete.filter(b, extractLast(a.term)))
		},
		focus: function() {
			return !1
		},
		select: function(a, b) {
			var c = split(this.value);
			return c.pop(), c.push(b.item.value), c.push(""), this.value = c.join("; "), !1
		}
	})
}
function popQR() {
	$.ajax({
		url: ctx + "/mycenter/showQRCode",
		type: "GET"
	}).done(function(a) {
		a.success && ($("#weixinQR .qr img").attr("src", a.content), $.colorbox({
			inline: !0,
			href: $("#weixinQR"),
			title: "关注拉勾微信服务号"
		}))
	})
}
function highlight() {
	var a = $("#filterForm ul.resumeLists li").eq(0).height();
	$("#filterForm ul.resumeLists").prepend('<li class="borderHighlight"></li>'), $("#filterForm ul.resumeLists li.borderHighlight").css("height", a).fadeIn(400).delay(2500).fadeOut(400)
}
$(function() {
	$("#filter_btn").bind("click", function() {
		"show" == $(this).attr("class") ? ($("#filterStatus").val(0), $(this).removeClass("show").children("em").removeClass("transform"), $(".filter_options").slideUp(200).prev(".filter_actions").removeClass("btm")) : ($("#filterStatus").val(1), $(this).addClass("show").children("em").addClass("transform"), $(".filter_options").slideDown(200).prev(".filter_actions").addClass("btm"))
	}), $(".filter_actions .checkbox input").bind("click", function() {
		return $(this).attr("checked") ? ($(this).removeAttr("checked"), $(this).siblings("i").fadeOut(200), $(".resumeLists li").each(function() {
			$(".checkbox i", this).fadeOut(200), $(".checkbox input", this).removeAttr("checked"), $(".checkbox", this).removeClass("checkhover")
		})) : ($(this).attr("checked", "checked"), $(this).siblings("i").fadeIn(200), $(".resumeLists li").each(function() {
			$(".checkbox i", this).fadeIn(200), $(".checkbox input", this).attr("checked", "checked"), $(".checkbox", this).removeClass("checkhover")
		})), $(this).parent().removeClass("checkhover"), !1
	}), $(".resumeLists .checkbox input").bind("click", function() {
		if ($(this).attr("checked")) {
			$(this).removeAttr("checked"), $(this).siblings("i").fadeOut(200);
			var a = !1;
			$(".resumeLists li").each(function() {
				$(".checkbox input", this).attr("checked") && (a = !0)
			}), a || $(".filter_actions .checkbox input").removeAttr("checked").siblings("i").fadeOut(200)
		} else $(this).attr("checked", "checked"), $(this).siblings("i").fadeIn(200);
		return $(this).parent().removeClass("checkhover"), !1
	}), $(".checkbox").hover(function() {
		$(this).children("input").attr("checked") || $(this).addClass("checkhover")
	}, function() {
		$(this).children("input").attr("checked") || $(this).removeClass("checkhover")
	}), $(".filter_options").on("click", "dd a", function() {
		$(this).text();
		var b = $(this).attr("rel");
		$(this).siblings('input[type="hidden"]').val(b), $("#filterForm").submit()
	}), $(".resume_del").bind("click", function() {
		var a = $(this),
			b = a.parents("li").attr("data-id"),
			c = $("#resubmitToken").val();
		return confirm("确定要删除该简历吗？") ? ($.ajax({
			type: "POST",
			url: ctx + "/corpResume/delete.json",
			data: {
				deliverIds: b,
				resubmitToken: c
			},
			dataType: "json"
		}).done(function(a) {
			$("#resubmitToken").val(a.resubmitToken), a.success ? top.location.href = top.location.href : alert(a.msg)
		}), void 0) : !1
	}), $("#resumeDelAll").bind("click", function() {
		var a = new Array,
			b = $("#resubmitToken").val();
		return $(".resumeLists li").each(function() {
			$(this).find('input[type="checkbox"]').attr("checked") && a.push($(this).attr("data-id"))
		}), a = a.join(","), 0 == a.length ? (alert("请选择要删除的简历"), !1) : confirm("确定要删除选中的简历吗？") ? ($.ajax({
			type: "POST",
			url: ctx + "/corpResume/delete.json",
			data: {
				deliverIds: a,
				resubmitToken: b
			},
			dataType: "json"
		}).done(function(a) {
			$("#resubmitToken").val(a.resubmitToken), a.success ? top.location.href = top.location.href : alert(a.msg)
		}), void 0) : !1
	}), $(".resume_refuse").bind("click", function() {
		var a = $(this).attr("data-deliverId");
		$('#refuseMailForm input[name="deliverId"]').val(a), $.ajax({
			url: ctx + "/corpResume/viewRefuseTpl.json",
			dataType: "json",
			type: "POST",
			async: !1,
			data: {}
		}).done(function(a) {
			a.success && ($("#refuseMailForm textarea").val(a.content.content).removeClass("error").removeClass("valid"), $("#refuseMailForm span.error").remove()), $.colorbox({
				inline: !0,
				href: $("#confirmRefuse"),
				title: "确认简历不合适"
			})
		})
	}), $("#refuseMailForm").validate({
		onkeyup: !1,
		focusCleanup: !0,
		rules: {
			content: {
				required: !0,
				maxlength: 200
			}
		},
		messages: {
			content: {
				required: "请输入你的邮件内容",
				maxlength: "请输入200字符以内的邮件内容"
			}
		},
		submitHandler: function(a) {
			var b = $('textarea[name="content"]', a).val(),
				c = $('input[name="deliverId"]', a).val(),
				d = $("#resubmitToken").val();
			$.ajax({
				url: ctx + "/corpResume/markRefuse.json",
				type: "POST",
				data: {
					content: b,
					deliverIds: c,
					resubmitToken: d
				},
				dataType: "json"
			}).done(function(a) {
				$("#resubmitToken").val(a.resubmitToken), a.success ? $.colorbox({
					inline: !0,
					href: $("#refuseMailSuccess"),
					title: "确认简历不合适"
				}) : alert(a.msg)
			})
		}
	}), $("#resumeRefuseAll").click(function() {
		var a = new Array,
			b = $("#resubmitToken").val();
		return $(".resumeLists li").each(function() {
			$(this).find('input[type="checkbox"]').attr("checked") && a.push($(this).attr("data-id"))
		}), a = a.join(","), "" == a ? (alert("请选择要标记的简历"), !1) : confirm("确定要标记选中的简历为不合适简历吗？确认后系统将自动发送拒绝信至用户邮箱") ? ($.ajax({
			type: "POST",
			url: ctx + "/corpResume/markRefuse.json",
			data: {
				deliverIds: a,
				resubmitToken: b
			},
			dataType: "json"
		}).done(function(a) {
			$("#resubmitToken").val(a.resubmitToken), a.success ? top.location.href = top.location.href : alert(a.msg)
		}), void 0) : !1
	}), $(".resume_caninterview").click(function() {
		var a = $(this).attr("data-deliverId"),
			b = $("#resubmitToken").val();
		$.ajax({
			type: "POST",
			url: ctx + "/corpResume/markInterview.json",
			data: {
				deliverIds: a,
				resubmitToken: b
			},
			dataType: "json"
		}).done(function(a) {
			$("#resubmitToken").val(a.resubmitToken), a.success ? top.location.href = top.location.href : alert(a.msg)
		})
	}), $("#resumeInterviewAll").click(function() {
		var a = new Array,
			b = $("#resubmitToken").val();
		return $(".resumeLists li").each(function() {
			$(this).find('input[type="checkbox"]').attr("checked") && a.push($(this).attr("data-id"))
		}), a = a.join(","), "" == a ? (alert("请选择要标记的简历"), !1) : confirm("确定要标记选中的简历为待定简历吗？") ? ($.ajax({
			type: "POST",
			url: ctx + "/corpResume/markInterview.json",
			data: {
				deliverIds: a,
				resubmitToken: b
			},
			dataType: "json"
		}).done(function(a) {
			$("#resubmitToken").val(a.resubmitToken), a.success ? top.location.href = top.location.href : alert(a.msg)
		}), void 0) : !1
	}), $(".resume_forward").bind("click", function() {
		var a, b, c, d, e;
		$(this).children("dl").hide(), a = $(this).attr("data-resumeKey"), b = $(this).attr("data-positionId"), c = $(this).attr("data-deliverId"), d = "（简历来自拉勾）" + $(this).attr("data-positionName") + "：" + $(this).attr("data-resumeName"), e = "评价该兼职工作的内容的真实符合程度", $('#forwardResumeForm input[name="resumeKey"]').val(a), $('#forwardResumeForm input[name="positionId"]').val(b), $('#forwardResumeForm input[name="deliverId"]').val(c), $('#forwardResumeForm input[name="title"]').val(d).removeClass("error").removeClass("valid"), $('#forwardResumeForm textarea[name="content"]').val(e).removeClass("error").removeClass("valid"), $("#forwardResumeForm span.error").remove(), $("#recipients").val(""), placeholderFn(), suggestEmail("recipients"), $.colorbox({
			inline: !0,
			href: $("#forwardResume"),
			title: "审核操作提示"
		})
	}), $("#forwardResumeForm").validate({
		onkeyup: !1,
		focusCleanup: !0,
		rules: {
			recipients: {
				required: !0,
				moreEmail: !0
			},
			title: {
				required: !0,
				maxlength: 200
			},
			content: {
				required: !0,
				maxlength: 500
			}
		},
		messages: {
			recipients: {
				required: "请输入收件人的邮件地址",
				moreEmail: "请输入有效的收件人的邮件地址，最多2个，并用;隔开"
			},
			title: {
				required: "请输入你的主题",
				maxlength: "请输入200字符以内的主题"
			},
			content: {
				required: "请输入你的正文",
				maxlength: "请输入500字符以内的正文"
			}
		},
		submitHandler: function(a) {
			var b = $('input[name="recipients"]', a).val(),
				c = $('input[name="title"]', a).val(),
				d = $('textarea[name="content"]', a).val(),
				e = $('input[name="resumeKey"]', a).val(),
				f = $('input[name="deliverId"]', a).val(),
				g = $('input[name="positionId"]', a).val(),
				h = $("#resubmitToken").val();
			$.ajax({
				type: "POST",
				url: ctx + "/corpResume/forward.json",
				data: {
					recipients: b,
					title: c,
					content: d,
					resumeKey: e,
					deliverId: f,
					positionId: g,
					resubmitToken: h
				},
				dataType: "json"
			}).done(function(a) {
				$("#resubmitToken").val(a.resubmitToken), a.success ? $.colorbox({
					inline: !0,
					href: $("#forwardResumeSuccess"),
					title: "兼职结算及评价"
				}) : ($("#forwardResumeError").html(a.msg).addClass("error"), $("#forwardResumeForm .beError").html(a.msg).show())
			})
		}
	}), $(".resume_notice").bind("click", function() {
		var a = $(this).attr("data-email"),
			b = $(this).attr("data-positionId"),
			c = $(this).attr("data-name"),
			d = $(this).attr("data-deliverId");
		$.ajax({
			type: "POST",
			url: ctx + "/corpResume/preNotice.json",
			data: {
				email: a,
				positionId: b,
				name: c
			},
			dataType: "json"
		}).done(function(a) {
			a.success ? ($("#receiveEmail").text(a.content.email), $('#noticeInterview input[name="email"]').val(a.content.email), $('#noticeInterview input[name="name"]').val(a.content.name), $('#noticeInterview input[name="subject"]').val(a.content.subject).removeClass("error").removeClass("valid"), $('#noticeInterview input[name="interAdd"]').val(a.content.interAdd).removeClass("error").removeClass("valid"), $('#noticeInterview input[name="linkPhone"]').val(a.content.linkPhone).removeClass("error").removeClass("valid"), $('#noticeInterview input[name="linkMan"]').val(a.content.linkMan), $('#noticeInterview textarea[name="content"]').val(a.content.content), $('#noticeInterview input[name="positionName"]').val(a.content.positionName), $('#noticeInterview input[name="companyName"]').val(a.content.companyName), $('#noticeInterview input[name="deliverId"]').val(d), $("#noticeInterview span.error").remove(), $.colorbox({
				inline: !0,
				href: $("#noticeInterview"),
				title: "通知面试"
			})) : alert(a.msg)
		})
	}), $("#noticeInterviewForm").validate({
		onkeyup: !1,
		focusCleanup: !0,
		rules: {
			subject: {
				required: !0,
				maxlength: 200
			},
			interTime: {
				required: !0
			},
			interAdd: {
				required: !0,
				maxlength: 200
			},
			linkMan: {
				required: !1,
				rangelength: [2, 16]
			},
			linkPhone: {
				required: !0,
				isTel: !0
			},
			content: {
				required: !1,
				maxlength: 500
			}
		},
		messages: {
			subject: {
				required: "请输入你的主题",
				maxlength: "请输入200字符以内的主题"
			},
			interTime: {
				required: "请输入你的面试时间"
			},
			interAdd: {
				required: "请输入你的面试地点",
				maxlength: "请输入200字符以内的面试地点"
			},
			linkPhone: {
				required: "请输入你的联系电话",
				isTel: "请输入正确的手机号或座机号，座机格式如010-62555255或010-6255255-分机号，多个电话用英文逗号隔开"
			},
			linkMan: {
				maxlength: "请输入2-32个字符的联系人"
			},
			content: {
				maxlength: "请输入500字符以内的补充内容"
			}
		},
		submitHandler: function(a) {
			var b = $('input[name="name"]', a).val(),
				c = $('input[name="email"]', a).val(),
				d = $('input[name="subject"]', a).val(),
				e = $('input[name="interTime"]', a).val(),
				f = $('input[name="interAdd"]', a).val(),
				g = $('input[name="linkMan"]', a).val(),
				h = $('input[name="linkPhone"]', a).val(),
				i = $('textarea[name="content"]', a).val(),
				j = $('input[name="positionName"]', a).val(),
				k = $('input[name="companyName"]', a).val(),
				l = $('input[name="deliverId"]', a).val(),
				m = $("#resubmitToken").val();
			$.ajax({
				type: "POST",
				data: {
					name: b,
					email: c,
					subject: d,
					interTime: e,
					interAdd: f,
					linkMan: g,
					linkPhone: h,
					content: i,
					positionName: j,
					companyName: k,
					deliverId: l,
					resubmitToken: m
				},
				url: ctx + "/corpResume/noticeInterview.json",
				dataType: "json"
			}).done(function(a) {
				$("#resubmitToken").val(a.resubmitToken), a.success ? $.colorbox({
					inline: !0,
					href: $("#noticeInterviewSuccess"),
					title: "通知面试"
				}) : alert(a.msg)
			})
		}
	}), $("#noticeInterview .emailPreview").bind("click", function() {
		var j, k, a = $('#noticeInterviewForm input[name="name"]').val(),
			b = $('#noticeInterviewForm input[name="email"]').val(),
			c = $('#noticeInterviewForm input[name="subject"]').val(),
			d = $('#noticeInterviewForm input[name="interTime"]').val(),
			e = $('#noticeInterviewForm input[name="interAdd"]').val(),
			f = $('#noticeInterviewForm input[name="linkMan"]').val(),
			g = $('#noticeInterviewForm input[name="linkPhone"]').val(),
			h = $('#noticeInterviewForm textarea[name="content"]').val();
		h = h.replace("/\r\n/g", "<br>"), $("#noticeInterviewPreview .f18").html(c), $("#noticeInterviewPreview .c9 span").html(b), j = a + "，您好：<br />您的简历已通过我们的筛选，很高兴通知您参加我们的面试。<br /><br />" + "面试时间：" + d + "<br />面试地点：" + e + "<br />", "" != f && (j += "联系人：" + f + "<br />"), j += "联系电话：" + g, h && (j += "<br /><br />" + h), $("#emailText").html(j), k = !1, ("" == c || $('#noticeInterviewForm input[name="subject"]').hasClass("error")) && (k = !0), ("" == d || $('#noticeInterviewForm input[name="interTime"]').hasClass("error")) && (k = !0), ("" == e || $('#noticeInterviewForm input[name="interAdd"]').hasClass("error")) && (k = !0), ("" == g || $('#noticeInterviewForm input[name="linkPhone"]').hasClass("error")) && (k = !0), $('#noticeInterviewForm textarea[name="content"]').hasClass("error") && (k = !0), k ? $("#noticeInterviewPreview .btn").hide() : $("#noticeInterviewPreview .btn").show(), $.colorbox({
			inline: !0,
			href: $("#noticeInterviewPreview"),
			title: "通知面试"
		})
	}), $("#noticeInterviewPreview .btn").bind("click", function() {
		$("#noticeInterviewForm").submit()
	}), new Date, $("#datetimepicker").datetimepicker({
		showMonthAfterYear: !0,
		controlType: "select",
		minDate: 0,
		hourMin: 7,
		hourMax: 23,
		stepMinute: 10,
		dateFormat: "yy-mm-dd"
	}), $("#colorbox").on("click", "#cboxClose", function() {
		"forwardResumeSuccess" == $(this).siblings("#cboxLoadedContent").children("div").attr("id") && (top.location.href = top.location.href)
	}), $("#forwardResumeSuccess .btn,#noticeInterviewSuccess .btn,#refuseMailSuccess .btn").bind("click", function() {
		top.location.href = top.location.href
	}), $(".emial_cancel").bind("click", function() {
		$.colorbox.close(), parent.jQuery.colorbox.close()
	}), $(".resume_download").bind("click", function() {
		$.colorbox({
			inline: !0,
			href: $("#downloadOnlineResume"),
			title: "下载简历"
		})
	}), $("#weixinQR .btn_s,#weixinQR .qr_cancel").click(function() {
		var a = new Date;
		$.cookie("showQRCode", a.getDate(), {
			expired: 180
		}), $.colorbox.close(), parent.jQuery.colorbox.close()
	}), $(".resumeLists li a.resumeImg").bind("click", function() {
		$(this).siblings(".resumeIntro").children("h3").removeClass("unread").addClass("read")
	}), $(".resumeLists li h3.unread a").bind("click", function() {
		$(this).parent("h3").removeClass("unread").addClass("read")
	}), $(".resumeLists li .links a.resume_forward").hover(function() {
		var a = $(this),
			b = a.attr("data-forwardCount"),
			c = a.attr("data-deliverId");
		0 != b && (1 == a.find("dl").length ? a.find("dl").show() : $.ajax({
			url: ctx + "/corpResume/showForwardEmails.json",
			type: "POST",
			data: {
				deliverId: c
			},
			dataType: "json"
		}).done(function(b) {
			var c, d;
			if (b.success) {
				for (c = "<dl><dt>已转发给：</dt><dd><ul>", d = 0; d < b.content.length; d++) c += "<li>" + b.content[d] + "</li>";
				c += "</ul></dd></dl>", a.append(c)
			} else alert(b.msg)
		}))
	}, function() {
		$(this).find("dl").hide()
	}), $(".resumeLists a.resume_forward").on("click", "dl", function() {
		return !1
	})
});