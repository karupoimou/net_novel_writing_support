// div data-idを取得
// data-id が１つしかないものを抽出する
$(function(){

    let array = [];

    //data-diをリストに追加
    $("div.comment_set").each(function(index, element){
      result =  $(element).data('id');
      array.unshift(result);
    });

    // 重複がないdata-idリストを作成
    const getUniqueValues = ([...array]) => {
      return array.filter((value, index, self) => self.indexOf(value) === self.lastIndexOf(value));
    }

    array = getUniqueValues(array);

    // 重複しないdate-idを持つdivを色付け
    $("div.comment_set").each(function(index, element){
      if (array.includes($(element).data('id'))) {
        $(element).addClass("border");
      }
    });

    // 未返信感想有無表示
    if (array.length != 0) {
        const non_reply_num_str = "<p align='right'><font size='3' color='#808080'><br>未返信感想あり</font></p>"
        $('#section_comment > div > div.move_set.clearfix').after(non_reply_num_str);
    }
});



// 作者エゴサボタン追加
$(function(){

    //作者ID抽出
    let userid = $("div.novel_author > p > a").attr('href');
    userid = userid.replace(/[^0-9]/g, '');

    const user_data_url = "https://mirunovel.com/n_log/user/?id=" + userid;
    const user_page_html_tag = "　(" + "<a target='_blank' href='" + user_data_url + "'>" + "作者分析ページ</a>" + ")"

    //class要素を取得する
    $('#section_works_info > div.content_inner > div.novel_author > p').append(user_page_html_tag);

});
