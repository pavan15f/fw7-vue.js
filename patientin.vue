<template>
    <f7-page>
      <f7-block>
          <h1 style="color:green">hello!</h1>
          
            <f7-list>

                            <f7-list-input
                                label="Enter Number"
                                type="number"
                                :value="phnumber"
                                @input="phnumber=$event.target.value"
                            ></f7-list-input>
                
                            <f7-list-input
                            label="Enter Your Name"
                            type ="text"
                            placeholder="Enter Your Name"
                            :value="name"
                            @input='name = $event.target.value'
                            > </f7-list-input>

                        <f7-list-item title="Resources" smart-select style="color:red">
                            <select name="Choose Item" v-model="resources">
                            <option value="Rice" selected>Rice</option>
                            <option value="Pulses">Pulses</option>
                            <option value="Water">Water</option>
                            <option value="Cereals">Cereals</option>
                            <option value="Monetary">Monetary</option>
                            <!-- <option value="Geriatric">Ge</option> -->
                            <!-- <option value="Dental">Dental</option> -->
                            </select>
                        </f7-list-item>



                        <f7-list-item title="Choose your Area" smart-select :smart-select-params="{openIn: 'sheet'}" style="color:red">
                            <select name="Choose Area" v-model="areas">
                            <option value="Kuvempunagar" selected>Kuvempunagar</option>
                            <option value="Saraswathipuram">Saraswatipuram</option>
                            <option value="Bogadi">Bogadi</option>
                            <option value="Vidyaranyapuram">Vidyaranyapuram</option>
                            <option value="VV-Mohalla">VV-Mohalla</option>
                            <option value="Siddartha layout">Siddartha layout</option>
                            </select>
                        </f7-list-item>
            </f7-list>
         <f7-button  raised fill @click="submit">Submit</f7-button>
         <p>Note: Our personnel will call you once you submit!!</p>
      </f7-block>
    </f7-page>
</template>





<script>
import firebase from '../js/firebaseInit'
export default {
    data() 
    {
        return {
            phnumber:"",
            name:"",
            areas:"",
            resources :"",

         }
    },
        methods:
      {
       
          submit() 
          {     
                alert("Response submitted");
                firebase.db.doc("city/"+this.phnumber).set({
                    name: this.name,
                    areas: this.areas,
                    resources : this.resources,
             }).then(snapshot=>{
                console.log("submtitted in firebase")
                })
            }
      }

}
</script>

<style>

</style>
