<template>
	<div class="kuaiwen">
		<ul class="up">
			<li><a href="/#/kuaiwenOne">
				<img src="../../assets/7.jpg">
				<div class="center">
					身体小毛病，快速问医生<br>
					<span>专业 及时解答</span>
				</div>
				<a class="ask">提问</a>
			</a></li>
			<li><a href="/#/kuaiwenOne">
				<img src="../../assets/7.jpg">
				<div class="center">
					情感小烦恼，专家来开导<br>
					<span>私密 多角度</span>
				</div>
				<a class="ask">提问</a>
			</a></li>
			<li><a href="/#/kuaiwenOne">
				<img src="../../assets/7.jpg">
				<div class="center">
					大小纠纷事，律师评评理<br>
					<span>专业律师 快速响应</span>
				</div>
				<a class="ask">提问</a>
			</a></li>
			<li><a href="/#/kuaiwenOne">
				<img src="../../assets/7.jpg">
				<div class="center">
					育儿经验谈，达人来支招<br>
					<span>达人指路 少走弯路</span>
				</div>
				<a class="ask">提问</a>
			</a></li>
		</ul>
		<ul class="down">
			<p><span>最新</span><span>已解答</span></p>
			<li>
				<a><div class="title">匿名用户<span>￥10</span></div>
				<p>老婆工作很辛苦经常一天一夜值班，我工作也很忙管理一个部门，业务涉及近百万群众福利，晚上还经常应酬，她老是抱怨我给她关心不够。但我有心却越来越没时间，答应陪她出去转转总是请不到假。想问怎么办？很困惑。</p>
				<div class="foot">还剩47小时  1人已抢答
					<a>抢答</a></div>
				</a>
				<div class="expert">
					<span class="exp">紫竹姐姐｜国家二级心理咨询师，高级培训师</span>
					<span class="time">28分钟内抢答</span>
				</div>
			</li>
			<li>
				<a><div class="title">匿名用户<span>￥10</span></div>
				<p>老婆工作很辛苦经常一天一夜值班，我工作也很忙管理一个部门，业务涉及近百万群众福利，晚上还经常应酬，她老是抱怨我给她关心不够。但我有心却越来越没时间，答应陪她出去转转总是请不到假。想问怎么办？很困惑。</p>
				<div class="foot">还剩47小时  1人已抢答
					<a>抢答</a></div>
				</a>
				<div class="expert">
					<span class="exp">紫竹姐姐｜国家二级心理咨询师，高级培训师</span>
					<span class="time">28分钟内抢答</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
}
</script>
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
.kuaiwen{
  font-size: 0.8rem;
  background: #f4f4f4;
}
.kuaiwen span{
	display: inline-block;
}
/*up*/
.kuaiwen .up >li{
	background: #fff;
	border-bottom: 1px solid #DED9D9;
}
.kuaiwen .up >li >a{
	padding: 1.1rem 1rem;
	width: calc(100% - 2rem);
}
.kuaiwen .up >li a >img{
	width: 2.6rem;
	height: 2.6rem;
	float: left;
	display: inline-block;
	margin-right: 0.8rem;
}
.kuaiwen .up >li a .center{
	font-size: 1.1rem;
	display: inline-block;
}
.kuaiwen .up >li a .center >span{
    font-size: 0.9rem;
    color: #999;
}
.kuaiwen .up >li a a.ask{
	float: right;
	color: #F85F48;
	border: 1px solid #F85F48;
	border-radius: 1rem;
	padding: 0.3rem 0.7rem;
}
.kuaiwen .down{
	margin-top: 0.64rem;
	margin-bottom: 3rem;
}
.kuaiwen .down >p{
	font-size: 1rem;
	border-bottom: 1px solid #DED9D9;
	padding: 1rem 0;
	background: #fff;
}
.kuaiwen .down >p >span{
	padding: 0rem 1rem;
	color: #999;
}
.kuaiwen .down >p >span:first-child{
	border-right: 1px solid #343434;
}
.kuaiwen .down >li{
	background: #fff;
	margin-bottom: 0.64rem;
}
.kuaiwen .down >li a{
	clear: both;
	padding: 1rem;
	border-bottom: 1px solid #DED9D9;
}
.kuaiwen .down >li a .title{
	font-size: 0.8rem;
	color: #999;
	overflow: hidden;
}
.kuaiwen .down >li a .title >span{
	color: #F85F48;
	font-size: 1rem;
	float: right;
	margin-bottom: 0.6rem; 
}
.kuaiwen .down >li a >p{
	height: 4rem;
	font-size: 1rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	margin-bottom: 0.8rem;
}
.kuaiwen .down >li a .foot{
	color: #999;
	clear: both;
}
.kuaiwen .down >li a .foot >a{
	float: right;
	color: #F85F48;
	border: 1px solid #F85F48;
	border-radius: 1rem;
	padding: 0.3rem 0.7rem;
}
.kuaiwen .down >li .expert{
	padding: 0.8rem 1rem;
	color: #999;
}
.kuaiwen .down >li .expert .exp{
	width: 70%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.kuaiwen .down >li .expert .time{
	margin-left: 1rem;
}
</style>