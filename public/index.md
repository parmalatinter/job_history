<header class="no_print">
    <div id="nav-drawer">
      <input id="nav-input" type="checkbox" class="nav-unshown">
      <label id="nav-open" for="nav-input"><span></span></label>
      <label class="nav-unshown" id="nav-close" for="nav-input"></label>
      <div id="nav-content">
            <h4><a onclick="change_content('/static/appeal.html')">自己アピール</a></h4>
            <h4><a onclick="change_content('/static/history.html')">職務経歴書</a></h4>
      </div>
    </div>
</header>

<iframe id="main" src="/static/appeal.html" name="main" width="100%" height="600px" frameborder="no"></iframe>

<script type="text/javascript">
     function change_content(loc) {
        document.getElementById('main').src = loc;
    }
    var h = window.innerHeight;

    document.getElementById("main").style.height = h + "px";
</script>
<link rel="stylesheet" type="text/css" href="css/main.css">
<script type="text/javascript"></script>
<style type="text/css">
    body {
        min-width: 100%;
    }
    a{
        cursor: pointer;
    }
    #main{
        text-align: center;
            margin: 0 auto 0px auto;
    }
    .container {
    	max-width: 100%;
    }
    @media print{
	    .no_print{
	        display: none;
	    }
	    .container {
    		max-width: 920px;
    	}
	  }
    #nav-content > h4{
        text-align: center;
    }
    #markup article {
        padding-top: 0px;
    }
    /*ヘッダーまわりはサイトに合わせて調整してください*/
    header {
      padding:10px;
      background: skyblue;
    }

    #nav-drawer {
      position: relative;
    }

    /*チェックボックス等は非表示に*/
    .nav-unshown {
      display:none;
    }

    /*アイコンのスペース*/
    #nav-open {
      display: inline-block;
      width: 30px;
      height: 22px;
      vertical-align: middle;
    }

    /*ハンバーガーアイコンをCSSだけで表現*/
    #nav-open span, #nav-open span:before, #nav-open span:after {
      position: absolute;
      height: 3px;/*線の太さ*/
      width: 25px;/*長さ*/
      border-radius: 3px;
      background: #555;
      display: block;
      content: '';
      cursor: pointer;
    }
    #nav-open span:before {
      bottom: -8px;
    }
    #nav-open span:after {
      bottom: -16px;
    }

    /*閉じる用の薄黒カバー*/
    #nav-close {
      display: none;/*はじめは隠しておく*/
      position: fixed;
      z-index: 99;
      top: 0;/*全体に広がるように*/
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0;
      transition: .3s ease-in-out;
    }

    /*中身*/
    #nav-content {
      overflow: auto;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;/*最前面に*/
      width: 90%;/*右側に隙間を作る（閉じるカバーを表示）*/
      max-width: 330px;/*最大幅（調整してください）*/
      height: 100%;
      background: #fff;/*背景色*/
      transition: .3s ease-in-out;/*滑らかに表示*/
      -webkit-transform: translateX(-105%);
      transform: translateX(-105%);/*左に隠しておく*/
          padding: 20px;
    }

    /*チェックが入ったらもろもろ表示*/
    #nav-input:checked ~ #nav-close {
      display: block;/*カバーを表示*/
      opacity: .5;
    }

    #nav-input:checked ~ #nav-content {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);/*中身を表示（右へスライド）*/
      box-shadow: 6px 0 25px rgba(0,0,0,.15);
    }
    @media screen and (min-width:400px) {
      #nav-content {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);/*中身を表示（右へスライド）*/
        box-shadow: 6px 0 25px rgba(0,0,0,.15);
      }
      .container {
          max-width: 70%;
      }
      header {
          padding: 0px;
          background: inherit;
      }
      #nav-open{
          display: none;
      }
    }
</style>