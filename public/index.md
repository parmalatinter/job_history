
<div id="menu">
	<h4><a onclick="change_content('/static/appeal.html')">自己アピール</a></h4>
	<h4><a onclick="change_content('/static/history.html')">職務経歴書</a></h4>
</div>


<iframe id="content" src="/static/appeal.html" name="content" width="100%" height="100%" frameborder="no"></iframe>

<div style="text-align: center;margin-top: 200px">
	<i><a href="/">Written by MarkDown</a></i>
</div>

<script type="text/javascript">
	 function change_content(loc) {
		document.getElementById('content').src = loc;
	}
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
	#content{
		text-align: center;
	}
</style>