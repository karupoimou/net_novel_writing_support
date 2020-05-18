//popup.htmlのみてみんのボタン動作指定
$(function(){
　$("#mitemin_toukou_btn").click(function(){
　　chrome.tabs.create({url: 'https://mitemin.net/imageupload/input/' });
　});
});
$(function(){
　$("#mitemin_edit_btn").click(function(){
　　chrome.tabs.create({url: 'https://mitemin.net/userimagesearch/search/' });
　});
});

//小説家になろう
$(function(){
　$("#narou_w_btn").click(function(){
　　chrome.tabs.create({url: 'https://syosetu.com/userwrittingnovel/list/' });
　});
});
$(function(){
　$("#narou_posted_btn").click(function(){
　　chrome.tabs.create({url: 'https://syosetu.com/usernovel/list/' });
　});
});
$(function(){
　$("#narou_backup_btn").click(function(){
　　chrome.tabs.create({url: 'https://syosetu.com/userwrittingnovel/backup/' });
　});
});

//カクヨム
$(function(){
　$("#kakuyomu_kanri_btn").click(function(){
　　chrome.tabs.create({url: 'https://kakuyomu.jp/my' });
　});
});
$(function(){
　$("#kakuyomu_mypage_btn").click(function(){
　　chrome.tabs.create({url: 'https://kakuyomu.jp/my/antenna/works' });
　});
});

//ハーメルン
$(function(){
　$("#hameln_btn").click(function(){
　　chrome.tabs.create({url: 'https://syosetu.org/' });
　});
});


//ノベルアップ＋
$(function(){
　$("#novelup_story_btn").click(function(){
　　chrome.tabs.create({url: 'https://novelup.plus/my/story' });
　});
});
$(function(){
　$("#novelup_image_btn").click(function(){
　　chrome.tabs.create({url: 'https://novelup.plus/my/image' });
　});
});
$(function(){
　$("#novelup_mypage_btn").click(function(){
　　chrome.tabs.create({url: 'https://novelup.plus/my/profile' });
　});
});



//About.htmlを開く
$(function(){
　$("#about_btn").click(function(){
　　chrome.tabs.create({url: 'about.html' });
　});
});
