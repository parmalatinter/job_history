
<div id="menu" class="no_print">
	<h4><a onclick="change_content('/static/appeal.html')">自己アピール</a></h4>
	<h4><a onclick="change_content('/static/history.html')">職務経歴書</a></h4>
</div>


<iframe id="main" src="/static/appeal.html" name="main" width="100%" height="600px" frameborder="no"></iframe>

<div style="text-align: center;margin-top: 200px">
	<i><a href="/">Written by MarkDown</a></i>
</div>

<script type="text/javascript">
     function change_content(loc) {
        document.getElementById('main').src = loc;
    }
    var h = window.innerHeight;

    document.getElementById("main").style.height = h + "px";
</script>

<style type="text/css">
    a{
        cursor: pointer;
    }
    #menu{
        text-align: center;
        position: absolute;
        left: 10%;
    }
    #main{
        text-align: center;
    }
    .container {
    	max-width: inherit !important;
    }
    @media print{
	    .no_print{
	        display: none;
	    }
	}
</style>