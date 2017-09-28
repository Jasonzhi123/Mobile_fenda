<template>
	
	<div class="workplace">
		<mt-header fixed title="科普">
		 <router-link to="/" slot="left">
    		<mt-button icon="back"></mt-button>
  		</router-link>
 	 <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<ul>
		<li>
			<profile></profile>

		</li>
	</ul>


	</div>
	
	
</template>

<script type="es6">
	import profile from '../../components/Profile'
	export default {
		data () {
	            return {
	            	
	            }
		        },
		components:{
			profile
		}
	}
</script>

<style lang="scss">
*{
	margin:0;padding:0;
}
.workplace{
	ul{
		margin-top:1.4rem;
	}
}
</style>