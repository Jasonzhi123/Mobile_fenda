<template>
	<div class="kuaiwenTopic">
		<div class="up">
			<div class="title">
				情感小烦恼
				<img src="../../assets/7.jpg">
				专家来引导
			</div>
			<a href="/#/kwenAsk">我也来问</a>
			<ul class="footLabel">
				<li>保护隐私</li>
				<li>多角度分析</li>
				<li>快速回复</li>
			</ul>
		</div>
		<ul class="down">
			<li>
				<a href="/#/kwenDetail">
					<div class="title">匿名用户<span>￥10</span></div>
				<p>老婆工作很辛苦经常一天一夜值班，我工作也很忙管理一个部门，业务涉及近百万群众福利，晚上还经常应酬，她老是抱怨我给她关心不够。但我有心却越来越没时间，答应陪她出去转转总是请不到假。想问怎么办？很困惑。</p>
				<div class="foot">还剩47小时  1人已抢答
					<!-- <a>抢答</a> -->
				</div>
				</a>
				<div class="expert">
					<span class="exp">紫竹姐姐｜国家二级心理咨询师，高级培训师</span>
					<span class="time">28分钟内抢答</span>
				</div>
			</li>
			<li>
				<a href="/#/kwenDetail">
					<div class="title">匿名用户<span>￥10</span></div>
				<p>老婆工作很辛苦经常一天一夜值班，我工作也很忙管理一个部门，业务涉及近百万群众福利，晚上还经常应酬，她老是抱怨我给她关心不够。但我有心却越来越没时间，答应陪她出去转转总是请不到假。想问怎么办？很困惑。</p>
				<div class="foot">还剩47小时  1人已抢答
					<!-- <a>抢答</a> -->
				</div>
				</a>
				<div class="expert">
					<span class="exp">紫竹姐姐｜国家二级心理咨询师，高级培训师</span>
					<span class="time">28分钟内抢答</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css">
p,html,body,ul,li,a,i,div,h5{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: #191919;
  display: inline-block;
}
.kuaiwenTopic{
  font-size: 0.8rem;
  background: #f4f4f4;
}
.kuaiwenTopic span{
	display: inline-block;
}
/*up*/
.kuaiwenTopic .up{
	text-align: center;
	background: #fff;
	margin-bottom: 0.5rem;
}
.kuaiwenTopic .up .title{
	text-align: center;
	font-size: 1rem;
	padding: 2rem 0;
}
.kuaiwenTopic .up .title >img{
	width: 2.2rem;
	height: 2.2rem;
	vertical-align: middle;
}
.kuaiwenTopic .up >a{
	font-size: 0.9rem;
	background: #F85F48;
	color: #fff;
	border-radius: 1rem;
	padding: 0.4rem 1rem;
	margin-bottom: 0.8rem;
}
.kuaiwenTopic .up .footLabel{
	border-top: 1px solid #DED9D9;
}
.kuaiwenTopic .up .footLabel >li{
	display: inline-block;
	width: 25%;
	height: 2.3rem;
	line-height: 2.3rem;
	color: #999;
}
/*down*/
.kuaiwenTopic .down{
	margin-bottom: 3.6rem;
}
.kuaiwenTopic .down >li{
	background: #fff;
	margin-bottom: 0.64rem;
}
.kuaiwenTopic .down >li a{
	clear: both;
	padding: 1rem 0.8rem;
	border-bottom: 1px solid #DED9D9;
}
.kuaiwenTopic .down >li a .title{
	font-size: 0.8rem;
	color: #999;
	overflow: hidden;
}
.kuaiwenTopic .down >li a .title >span{
	color: #F85F48;
	font-size: 1rem;
	float: right;
	margin-bottom: 0.6rem; 
}
.kuaiwenTopic .down >li a >p{
	height: 3.6rem;
	font-size: 0.9rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	margin-bottom: 0.8rem;
}
.kuaiwenTopic .down >li a .foot{
	color: #999;
	clear: both;
}
/*.kuaiwenTopic .down >li a .foot >a{
	float: right;
	color: #F85F48;
	border: 1px solid #F85F48;
	border-radius: 1rem;
	padding: 0.3rem 0.7rem;
}*/
.kuaiwenTopic .down >li .expert{
	padding: 0.8rem 0.8rem;
	color: #999;
}
.kuaiwenTopic .down >li .expert .exp{
	width: 65%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.kuaiwenTopic .down >li .expert .time{
	margin-left: 0.8rem;
}
</style>