<template>
    <el-form v-bind:model="form" :rules="rules">
        <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
            <el-input type="password" v-model="form.cpwd"></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    layout:'blank',
    data(){
        return {
            form:{
                name:'',
                pwd:'',
                cpwd:''
            },
            rules:{
                name:[
                    {required:true,type:"string",message:"请输入用户名",triggle:"blur"}
                ],
                pwd:[
                    {required:true,type:"string",message:"请输入密码",triggle:"blur"}
                ],
                cpwd:[
                    {required:true,type:"string",message:"请输入确认密码",triggle:"blur"},
                    {
                        validator:(rules,value,callback)=>{
                            console.log("this",this);
                            if(value === ""){
                                callback(new Error("请输入确认密码"));
                            }else if(value !== this.form.pwd){
                                callback(new Error("两次密码不一致"));
                            }else{
                                callback();
                            }
                        },
                        triggle:'blur'
                    }
                ]
            }
        }
    }
}
</script>

