// 实例化Vue 对象
new Vue({
	el:"#vue-app",    // el ：element 需要获取到的元素、一定是html中的跟他容器元素
	data:{			 // data：用于数据的存储
		age:18,
		x:0,
		y:0
	},
	methods:{
		add:function(inc){
			this.age += inc;
		},
		subtract:function(dec){
			this.age -= dec;
		},
		updateXY:function(event){
			// console.log(event)
			this.x = event.offsetX;
			this.y = event.offsetY;
			return this.y
		}
	}
});
