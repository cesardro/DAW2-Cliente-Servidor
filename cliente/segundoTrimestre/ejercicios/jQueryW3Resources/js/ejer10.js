$("p").each(function () {
    let pdata = $(this);
    pdata.html(pdata.text().replace(/(^\w+)/, "<b>$1</b>"));
});
