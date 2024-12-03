<template>
    <div class="star">
        <div class="container">
            <h1>Welcome to OJLab</h1>
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in images" :key="item">
                    <div class="carousel-content">
                        <img :src="`src/assets/${item}.jpeg`" alt="Carousel Image">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [1, 2, 3, 4, 5] // 这里可以根据你的图片命名来调整
        };
    }
};
</script>

<style scoped>
@keyframes backgroundMove {
    0% {
        background-position: 0% 0%; /* 起始位置 */
    }
  
    50% {
        background-position:50% 50%; /* 向右下角移动 */
    }

    100% {
        background-position: 100% 100%; /* 回到起始位置 */
    }
}


.container img {
    max-width: 100%; /* 最大宽度为父元素的100% */
    max-height: 100%; /* 最大高度为父元素的100% */
    height: auto; /* 高度自动调整 */
}

.star {
    width: 100%;
    height: 150vh;
    background-image: url(../assets/background.jpeg);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    animation: backgroundMove 10s linear infinite; 
}

.container {
    display:grid;
    width: auto;
    font-family: "微软雅黑";
    font-size: larger;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    /* 黑色透明背景 */
    color: white;
    /* 字体颜色为白色 */
    border-radius: 10%;
    /* 圆角边框 */
    padding: 20px 50px;
    /* 内边距 */
    max-width: 500px;
    /* 最大宽度 */
    margin: 0px auto;
    /* 居中显示 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    /* 阴影效果 */
}


</style>