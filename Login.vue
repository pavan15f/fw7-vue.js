<template>
    <f7-page>
        <f7-navbar title="Health"  back-link="Back">
            
        </f7-navbar>
        <f7-list>
            <f7-list-input
                label="userName"
                type="text"
                :value="username"
                @input="username=$event.target.value"
            ></f7-list-input>
            <f7-list-input
                label="Password"
                type="text"
                :value="password"
                @input="password=$event.target.value"
            ></f7-list-input>
            
        </f7-list>  
        <f7-button @click="submit" href="/patientin">Login</f7-button>  
                
    </f7-page>
</template>

<script>
// import firebase from '../../js/firebaseInit'
export default {
    data()
    {
        return {
            selected:{}
        }
        
    },
    
    methods:{
        submit()
        {
            console.log("Submitted")
    
            if(this.username!="sk" || this.password!= "12345")
                alert("Invalid Username or password!!!")
            
        }
    }


}
</script>

<style>

</style>