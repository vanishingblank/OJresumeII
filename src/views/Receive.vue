<template>
    <div class="star">
        <div class="formPart">
            <div class="title">
            <h1>查询简历</h1>
            </div>
            <el-form :model="form" label-width="auto" style="width: 300px">
                
                <el-form-item label="专业">
                    <el-select v-model="form.major" id="major" @change="classSerlect">
                        <el-option value="first" label="一专">一专</el-option>
                        <el-option value="second" label="二专">二专</el-option>
                        <el-option value="third" label="三专">三专</el-option>
                        <el-option value="fifth" label="五专">五专</el-option>
                        <el-option value="ninth" label="九专">九专</el-option>
                        <el-option value="no" label="无">无</el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="班级">
                    <el-select v-model="form.class" id="class" :disabled="form.major === 'no'">
                        <el-option value="zero" label="无">无</el-option>
                        <el-option
                            v-for="option in classOptions"
                            :key="option.value"
                            :label="option.label"
                            :value="option.value"
                        />
                    </el-select>
                </el-form-item>

                <el-form-item label="学生会">
                    <el-select v-model="form.studentU" placeholder="请选择">
                        <el-option label="未加入学生会" value="1"></el-option>
                        <el-option label="已加入学生会" value="2"></el-option>
                        <el-option label="已加入学生会并担任重要职务" value="3"></el-option>
                        <el-option label="无" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                            <el-button type="primary" plain size="mini" class="submit">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="collapsePart">
            <el-collapse>
                <el-collapse-item title="one" name="1">
                    <div>姓名 学号</div>
                    <div>信息</div>
                </el-collapse-item>
                <el-collapse-item title="two" name="2">
                    <div>姓名 学号</div>
                    <div>信息</div>
                </el-collapse-item>
                <el-collapse-item title="three" name="3">
                    <div>姓名 学号</div>
                    <div>信息</div>
                </el-collapse-item>
                <el-collapse-item title="four" name="4">
                    <div>姓名 学号</div>
                    <div>信息</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script setup>
import { ref,getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus';
const form = ref({
    name: '',
    gender: '',
    studentID: '',
    class: '',
    major: '',
    QQNumber: '',
    introduction: '',
    studentU: '',
    grade: '',
});
const { proxy } = getCurrentInstance(); // 获取组件实例

function walmat() {
  if (form.value.gender === "no") { // 使用 === 进行比较
        ElMessageBox.alert("沃尔玛购物袋是不行的~", "请修改性别", {
        confirmButtonText: 'OK',
    });
  }
}

const classOptions = ref([]); 
function classSerlect() {
    const selectedValue = form.value.major;
    classOptions.value = [];
    if (selectedValue === "fifth") {
        classOptions.value.push({ value: "first", label: "1班" });
    } else {
        classOptions.value.push(
            { value: "one", label: "1班" },
            { value: "two", label: "2班" }
        );
    }
}
</script>

<style>
.title{
    font-family: "PingFang SC";
    text-align: center;
}
.custom-textarea .el-textarea__inner {
    height:40px;
    max-height: 200px; /* 设置最大高度 */
    min-height: 100px; /* 设置最小高度 */
    resize: vertical; /* 允许用户垂直调整大小 */
}


.submit {
    width: 200px;
    height:50px;
    margin: 0px auto;
}

.formPart {
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
    max-width: 400px;
    /* 最大宽度 */
    margin: 0px auto;
    /* 居中显示 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    /* 阴影效果 */
}

@keyframes backgroundMove {
    0% {
        background-position: 0% 0%; /* 起始位置 */
    }
 
    50% {
        background-position: 50% 50%; /* 向右下角移动 */
    }
 
    100% {
        background-position: 100% 100%; /* 回到起始位置 */
    }
}
.star {
    width: 100%;
    height:150vh;
    background-image: url(../assets/background.jpeg);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    animation: backgroundMove 10s linear infinite; 
}

.collapsePart {
    display: grid;
    width: 400px;
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
    margin: 0px auto;
    /* 居中显示 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    /* 阴影效果 */
}

</style>