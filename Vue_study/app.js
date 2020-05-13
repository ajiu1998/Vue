// 实例化Vue 对象
new Vue({
	el:"#vue-app",    // el ：element 需要获取到的元素、一定是html中的跟他容器元素
	data:{			 // data：用于数据的存储
		name:"米斯特戴",
		age:18,
		job:"web开发",
		website:"http://erge1998.cn",
		websiteTag:'<a href="http://erge1998.cn">这是一个跳转标签</a>'
	},
	methods:{
		greet:function(time){
			return 'Good '+ time+" "+ this.name+' !' ;
		},
	}
});
