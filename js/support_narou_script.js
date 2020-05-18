//みてみんページからurlの切り出し
$(function(){
    var str = $("#mainContent2").text();  //テキストで取得
    console.log(str);//For debugging

    var url_head = str.indexOf('https://');
    console.log(url_head);

    imgID = str.substr(-9,7)//画像ID
    console.log(imgID);

    var pre_userID =str.slice(url_head+8)
    console.log(pre_userID);
    var cut = pre_userID.indexOf('.mitemin');
    console.log(cut);
    userID = pre_userID.slice(0,cut)
    console.log(userID);//ユーザーID

});

$(function(){
    // みてみんに画像を挿入
    $("body").html(
        $("body").html().replace(/この画像のＵＲＬ/g, '挿絵の貼り付けコード<br>'+"&lt;"+imgID+'|'+userID+'&gt;<br><br>活動報告への貼付けURL<br>'+"&lt;"+"img src=&quot;http:&#047;&#047;"+userID+".mitemin.net/userpageimage/viewimage/icode/"+imgID+"/&quot; height=&quot;400&quot; width=&quot;100%&quot; alt=&quot;"+imgID+"&quot;/&gt;<br><br>")
    );
});


//<img src="http://28121.mitemin.net/userpageimage/viewimage/icode/i374583/" height="400" alt="i374583" />
