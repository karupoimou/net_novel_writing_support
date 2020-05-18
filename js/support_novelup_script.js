// 未返信コメントのハイライト機能
// data-id が１つしかないものを抽出する
$(function(){

    var array = [];

    //data-diをリストに追加
    $("div.comment_set").each(function(index, element){
      //console.log(index);
      result =  $(element).data('id');
      array.unshift(result);
    });

    //console.log(array);

    // 重複がないdata-idリストを作成
    const getUniqueValues = ([...array]) => {
      return array.filter((value, index, self) => self.indexOf(value) === self.lastIndexOf(value));
    }

    array = getUniqueValues(array);
    // console.log(getUniqueValues(array));

    // 重複しないdate-idを持つdivを色付け
    $("div.comment_set").each(function(index, element){
      if (array.includes($(element).data('id'))) {
        $(element).addClass("border");
        //console.log($(element).data('id'));
      }
    });
});


// 作者エゴサボタン追加
$(function(){

    //作者ID抽出
    let userid = $("div.novel_author > p > a").attr('href');
    userid = userid.replace(/[^0-9]/g, '');

    const user_data_url = "https://mirunovel.com/n_log/user/?id=" + userid;
    const user_page_html_tag = "　(" + "<a target='_blank' href='" + user_data_url + "'>" + "作者分析ページ</a>" + ")"
    //console.log(user_page_html_tag);

    //class要素を取得する
    $('#section_works_info > div.content_inner > div.novel_author > p').append(user_page_html_tag);

});
