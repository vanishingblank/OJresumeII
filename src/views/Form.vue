<template>
    <div class="star">
        <div class="formPart">
            <div class="title">
            <h1>请填写以下信息</h1>
            </div>
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item label="姓名" required>
                    <el-input class="custom-input" v-model="form.name" placeholder="请告诉我你的名字"/>
                </el-form-item>
                <el-form-item label="性别" required>
                    <el-radio-group v-model="form.gender">
                        <el-radio value="male">男</el-radio>
                        <el-radio value="female">女</el-radio>
                        <el-radio value="no">沃尔玛购物袋</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="学号" required>
                    <el-input class="custom-input" v-model="form.studentID" placeholder="每个学号只能提交一次"/>
                </el-form-item>

                <el-form-item label="专业" required>
                    <el-select v-model="form.major" id="major" @change="classSerlect">
                        <el-option value="first" label="一专">一专</el-option>
                        <el-option value="second" label="二专">二专</el-option>
                        <el-option value="third" label="三专">三专</el-option>
                        <el-option value="fifth" label="五专">五专</el-option>
                        <el-option value="ninth" label="九专">九专</el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="班级" required>
                    <el-select v-model="form.class" id="class">
                        <el-option
                            v-for="option in classOptions"
                            :key="option.value"
                            :label="option.label"
                            :value="option.value"
                        />
                    </el-select>
                </el-form-item>

                <el-form-item label="QQ号" required>
                    <el-input class="custom-input" v-model="form.QQNumber" placeholder="联系方式"/>
                </el-form-item>

                <el-form-item label="英语水平" required>
                    <el-input class="custom-input" v-model="form.grade" placeholder="高考成绩或四六级"/>
                </el-form-item>

                <el-form-item label="学生会" required>
                    <el-select v-model="form.studentU" placeholder="请选择">
                        <el-option label="未加入学生会" value="1"></el-option>
                        <el-option label="已加入学生会" value="2"></el-option>
                        <el-option label="已加入学生会并担任重要职务" value="3"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="自我介绍" required>
                    <el-input class="custom-input textA" v-model="form.introduction" type="textarea" :autosize="{ minRows: 4, maxRows: 4}" placeholder="anything!OWO"/>
                </el-form-item>
                <el-form-item>
                    <el-popconfirm confirm-button-text='确定' cancel-button-text='算了' @confirm="walmat" title="你确定要提交吗？">
                        <template #reference>
                            <el-button type="primary" plain size="mini" class="submit">提交</el-button>
                        </template>
                    </el-popconfirm>
                </el-form-item>
            </el-form>

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
.custom-input .el-input__inner {
    height: 40px;
    /* 设置输入框高度 */
    font-size: 18px;
    /* 设置字体大小 */
}

.el-form-item__label {
    font-size: 30px;
    /* 设置标签字体大小 */
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

.navbar {
    box-sizing: border-box;
    width: 100%;
    /* 设置宽度为100% */
    position: relative;
    /* 使阴影效果更明显 */
    z-index: 1;
    /* 确保导航栏在其他内容之上 */
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 5%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 5.0);
}

.navbar .logo {
    font-size: 24px;
    font-weight: bold;
}

.navbar .nav-buttons {
    display: flex;
    gap: 15px;
}

.navbar .nav-button {
    text-decoration: none;
    color: #333;
    padding: 8px 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: background-color 0.3s, border-color 0.3s;
}

.navbar .nav-button:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
}
</style>