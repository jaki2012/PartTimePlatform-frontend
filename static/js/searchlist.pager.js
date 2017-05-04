$(function () {
    /***************************
    * 分页
    */
    $('.Pagination').pager({
        currPage: 1,
        pageNOName: "pn",
        form: "searchForm",
        pageCount: 30,
        pageSize: 5
    });

    $(".workplace dd").not('.more').children('a').click(function () {
        $('#lc').val(1);
        editForm("cityInput", $(this).html());
    });

    $("#box_expectCity dd span").click(function () {
        $('#lc').val(1);
        editForm("cityInput", $(this).html());
    });

    $('#options dd div').click(function () {
        var firstName = $(this).parents('dl').children('dt').text();
        var fn = $.trim(firstName);
        if (fn == "月薪范围") {
            editForm("yxInput", $(this).html());
        }
        else if (fn == "工作经验") {
            editForm("gjInput", $(this).html());
        }
        else if (fn == "最低学历") {
            editForm("xlInput", $(this).html());
        }
        else if (fn == "工作性质") {
            editForm("gxInput", $(this).html());
        }
        else if (fn == "发布时间") {
            editForm("stInput", $(this).html());
        }
    });

    $('#selected ul').delegate('li span.select_remove', 'click', function (event) {
        var firstName = $(this).parent('li').find('strong').text();
        var fn = $.trim(firstName);
        if (fn == "月薪范围")
            editForm("yxInput", "");
        else if (fn == "工作经验")
            editForm("gjInput", "");
        else if (fn == "最低学历")
            editForm("xlInput", "");
        else if (fn == "工作性质")
            editForm("gxInput", "");
        else if (fn == "发布时间")
            editForm("stInput", "");
    });

    /* search结果飘绿	*/
    (function ($) {
        var searchVal = $('#search_input').val();
        var reg = /\s/g;
        searchVal = searchVal.replace(reg, "").split("");

        var resultL = '';
        var resultR = '';
        $('.hot_pos li').each(function () {
            resultL = $('.hot_pos_l a', this).text().split("");
            $.each(resultL, function (i, v) {
                if ($.inArray(v.toLowerCase(), searchVal) != -1 || $.inArray(v.toUpperCase(), searchVal) != -1) {
                    resultL[i] = '<span>' + v + '</span>';
                }
            });
            $('.hot_pos_l a', this).html(resultL.join(''));

            resultR = $('.hot_pos_r .mb10 a', this).text().split("");
            $.each(resultR, function (i, v) {
                if ($.inArray(v.toLowerCase(), searchVal) != -1 || $.inArray(v.toUpperCase(), searchVal) != -1) {
                    resultR[i] = '<span>' + v + '</span>';
                }
            });
            $('.hot_pos_r .mb10 a', this).html(resultR.join(''));
        });

    })(jQuery);

    //didi tip
    if ($.cookie('didiTip') != 1 && false) {
        $('#tip_didi').show();
    }
    $('#tip_didi a').click(function () {
        $(this).parent().remove();
        $.cookie('didiTip', 1, { expires: 30, path: '/' });
    });

});

function editForm(inputId, inputValue) {
    $("#" + inputId).val(inputValue);
    var keyword = $.trim($('#search_input').val());
    var reg = /[`~!@\$%\^\&\*\(\)_<>\?:"\{\},\\\/;'\[\]]/ig;
    var re = /#/g;
    var r = /\./g;
    var kw = keyword.replace(reg, " ");

    if (kw == '') {
        $('#searchForm').attr('action', 'list.html所有职位').submit();
    } else {
        kw = kw.replace(re, '井');
        kw = kw.replace(r, '。');
        $('#searchForm').attr('action', 'list.html' + kw).submit();
    }
    //$("#searchForm").submit();
}