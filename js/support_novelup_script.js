// div data-idを取得
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
