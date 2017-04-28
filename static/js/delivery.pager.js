$(function () {
    //location.reload(true);

    $('.Pagination').pager({
        currPage: 1,
        pageNOName: "pageNo",
        form: "deliveryForm",
        pageCount: 1,
        pageSize: 5
    });
});