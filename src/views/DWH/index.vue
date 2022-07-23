<!-- vue -->
<template>
    <div class='box'>
        <div class="title">
           
        </div>
        <div class="buttom"></div>
        <div class="cicle3"></div>
        <canvas class="rain"></canvas>
    </div>
</template>
<script>

export default {
    components: {}, //import引入的组件需要注入到对象中才能使用
    data() {
        return {};
    }, //这里存放数据
    computed: {}, //监听属性 类似于data概念
    watch: {}, //监控data中的数据变化
    methods: {
        // 中间背景雨
        rainBg() {
            var c = document.querySelector(".rain");
            var ctx = c.getContext("2d");//获取canvas上下文
            var w = c.width = document.querySelector('.box').clientWidth;
            var h = c.height = document.querySelector('.box').clientHeight;
            //设置canvas宽、高

            function random(min, max) {
                return Math.random() * (max - min) + min;
            }

            function RainDrop() { }
            //雨滴对象 这是绘制雨滴动画的关键
            RainDrop.prototype = {
                init: function () {
                    this.x = random(0, w);//雨滴的位置x
                    this.y = h;//雨滴的位置y
                    this.color = 'hsl(180, 100%, 50%)';//雨滴颜色 长方形的填充色
                    this.vy = random(4, 5);//雨滴下落速度
                    this.hit = 0;//下落的最大值
                    this.size = 2;//长方形宽度
                },
                draw: function () {
                    if (this.y > this.hit) {
                        var linearGradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.size * 30)
                        // 设置起始颜色
                        linearGradient.addColorStop(0, '#14789c')
                        // 设置终止颜色
                        linearGradient.addColorStop(1, '#090723')
                        // 设置填充样式
                        ctx.fillStyle = linearGradient
                        ctx.fillRect(this.x, this.y, this.size, this.size * 50);//绘制长方形，通过多次叠加长方形，形成雨滴下落效果
                    }
                    this.update();//更新位置
                },
                update: function () {
                    if (this.y > this.hit) {
                        this.y -= this.vy;//未达到底部，增加雨滴y坐标
                    } else {
                        this.init();
                    }
                }
            };

            function resize() {
                w = c.width = window.innerWidth;
                h = c.height = window.innerHeight;
            }

            //初始化一个雨滴

            var rs = []
            for (var i = 0; i < 10; i++) {
                setTimeout(function () {
                    var r = new RainDrop();
                    r.init();
                    rs.push(r);
                }, i * 600)
            }

            function anim() {
                ctx.clearRect(0, 0, w, h);//填充背景色，注意不要用clearRect，否则会清空前面的雨滴，导致不能产生叠加的效果
                for (var i = 0; i < rs.length; i++) {
                    rs[i].draw();//绘制雨滴
                }
                requestAnimationFrame(anim);//控制动画帧
            }

            window.addEventListener("resize", resize);
            //启动动画
            anim()

        }
    }, //方法集合
    created() { }, //生命周期 - 创建完成可以访问当前this实例
    mounted() { this.rainBg() }, //生命周期 - 挂载完成（可以访问DOM元素）
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
.box {
    height: 100vh;
    width: 100vw;
    background-color: blue;
    position: relative;
    background-image: url('../../assets/DWH/bg.png');
    background-size: 100% 100%;

}

.title {
    width: 100vw;
    height: 10vh;
    position: absolute;
    background-image: url('../../assets/DWH/titlebg.png');
    background-size: 100% 100%;
    z-index: 1;

}

.buttom {
    width: 100vw;
    height: 10vh;
    position: absolute;
    bottom: 0;

    background-image: url('../../assets/DWH/bottomsjbg.png');
    background-size: 100% 100%;
    z-index: 1;
}

.cicle3 {
    width: 35vw;
    height: 55vh;
    background: url('../../assets/DWH/circle.png') no-repeat center;
    background-size: 100%;
    position: absolute;
    top: 52vh;
    left: 50%;
    transform-style: preserve-3d;
    transform: translateX(-50%) rotateX(75deg);
    animation: rotate3 20s linear infinite;
}

@keyframes rotate3 {
    0% {
        transform: translateX(-50%) rotateX(75deg) rotateZ(0);
    }

    100% {
        transform: translateX(-50%) rotateX(75deg) rotateZ(360deg);
    }
}

.rain {
    position: absolute;
    left: 0;
    top: 0;
}
</style>