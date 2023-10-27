
/* ========== header,footer,snb Include 관련 ========== */
function includeHTML(){
    var includeArea = $('[data-include]');
    var self,url;

    $.each(includeArea, function(){
        self = $(this);
        url = self.data('include');
        self.load(url, function(){
            self.removeAttr('data-include');
        });//load()
    });//each()
}//includeHTML();

/* ============페이지 로딩 완료시============== */
document.addEventListener('DOMContentLoaded',function(){
    // 호출 : header,footer,snb Include 관련
    includeHTML();
/* ============TOP 버튼============== */
$('#btn_toTop').click(function(){
    $('html,body').stop(true).animate({scrollTop:0},300);
});//click

/* ============모달창 닫기============== */ /* 20200915 */
$('.btn_closeModal_g').click(function(){
    $(this).parent().parent('.sect_modal').fadeOut(100);
});//click


});//DOMContentLoaded



