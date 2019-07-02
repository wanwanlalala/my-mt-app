<template>
    <div></div>
</template>
<script>
export default {
    layout:'blank',
    middleware:async (ctx)=>{
        let {status,data} = await ctx.$axios.get('/users/exit')
        if(status === 200){
            if(data && data.code ===  1){
                location.href = '/'
            }
        }
    }
}
</script>
