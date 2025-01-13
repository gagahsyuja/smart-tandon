<script lang="ts">

    import '@fortawesome/fontawesome-free/css/all.min.css';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import Title from '$lib/title.svelte';

    let {

        distance = $bindable(0),
        level = $bindable(0),
        temperature = $bindable('0.0'),
        manualToggle = $bindable(false),
        relayToggle = $bindable(false)

    } = $props();

    let dataLoaded = $state(false);

    const updateData = async (relayState: Boolean, manualState: Boolean) => {
        
        let body = {
            distance,
            level,
            temperature,
            state: {
                manualMode: manualState,
                relay: relayState
            }
        };
        
        let response = await fetch('http://127.0.0.1:3000/api/information', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const getInformation = async () => {
        
        let response = await fetch('http://127.0.0.1:3000/api/information');

        let result = await response.json();
        
        return result.data;
    }

    $effect(() => {

        if (dataLoaded) updateData(relayToggle, manualToggle);

    })

    onMount(async () => {

        let data = await getInformation();

        if (data.length) {

            distance = data[0].distance;
            level = data[0].level;
            temperature = data[0].temperature;
            manualToggle = data[0].state.manualMode;
            relayToggle = data[0].state.relay;
        }

        dataLoaded = true;

    })

</script>
{#if parseFloat(temperature) > 40.0}
    <div class="alert">
        <strong>Warning!</strong> water temperature is too high.
    </div>
{/if}

<Title />

<div class="card">
    <div class="tandon">
        <div class="upr"></div>
        <div class="up">
            <div class="txt1"><b>Distance :&nbsp; { distance } &nbsp;</b><b>cm</b></div>
            <div class="card3">
                <h3><b>Distance Costume</b></h3>
                <input type="number" id="dc" class="tb" placeholder="Enter here">
                <button type="submit" class="sbtn">Submit</button>
            </div>
            
        </div>
        <div class="md">
            <div class="txt1"><b>Level :&nbsp; { level } &nbsp;</b></div>
            <div class="card2">
                <h3><b>Manual</b></h3>
                <input type="checkbox" id="check1" class="toggle" bind:checked={ manualToggle }>
                <label for="check1"></label>
                <h3><b>Relay</b></h3>
                <input type="checkbox" id="check" class="toggle" bind:checked={ relayToggle } disabled={ !manualToggle }>
                <label for="check"></label>
            </div>
        </div>
        <div class="bt">
            <div class="txt1"><b>Temperature :&nbsp; { temperature } &nbsp;</b><b>°C</b></div>
            <div class="card3">
                <h3><b>Height Costume</b></h3>
                <input type="number" id="dc" class="tb" placeholder="Enter here"> 
                <button type="submit" class="sbtn">Submit</button>
            </div>
        </div>
        <div class="log">
            <button on:click={() => goto('/logs')}><i class="fa-solid fa-file-waveform fa-2x"></i></button>
        </div>
    </div>
</div>

<style>
   :global(html) {
    background: linear-gradient(to bottom, #ccf9ff, #7ce8ff, #55d0ff, #00acdf, #0080bf);
   }
   

   .alert {
    padding: 20px;
    background-color: #f44336;
    color: white;
    width: 100%;
    top: 0%;
    position: absolute;
    z-index: 3;
    }

    .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    }

    .closebtn:hover {
    color: black;
    }
   
   .log{
    width: 50px;
    height: 50px;
    border: 3px solid black;
    display: flex;
    margin-top: 0.5%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
   }

   .log:hover{
    background-color: black;
    color: aliceblue;
   }

   
   input[type="checkbox"].toggle{
    opacity: 0;
    position: absolute;
   }

   input[type="checkbox"].toggle + label{
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
   }

   input[type="checkbox"].toggle + label::before{
    content: "";
    width: 80px;
    height: 40px;
    border-radius: 5em;
    background-color: black;
    position: relative;
    transition: 350ms ease-in-out;
    outline: 2px solid black;
   }

   input[type="checkbox"].toggle:focus + label::before{
    outline: 2px solid black;
   }


   input[type="checkbox"].toggle + label::after{
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 5em;
    background-color: white;
    position: absolute;
    transition: 350ms ease-in-out;
   }

   input[type="checkbox"].toggle:checked + label::before{
    background-color: white;
   }

   input[type="checkbox"].toggle:checked + label::after{
    background-color: black;
    transform: translateX(100%);
   }

   input[type="checkbox"].toggle:disabled + label::after {
    background-color: gray;
    cursor: not-allowed;
   }

   input[type="checkbox"].toggle:disabled + label::before {
    cursor: not-allowed;
   }

   .card2{
    flex-direction: column;
    width: 250px;
    height: 150px;
    background-color: azure;
    z-index: 2;
    position: absolute;
    right: 25%;
    display: flex;
    border-radius: 5px;
    border: 3px solid;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
   }

   .card3{
    flex-direction: column;
    width: 250px;
    height: 115px;
    background-color: azure;
    z-index: 3;
    position: absolute;
    right: 25%;
    display: flex;
    border-radius: 5px;
    border: 3px solid;
    align-items: center;
    justify-content: center;
   }

   input[type="number"].tb{
    border: 3px solid black;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
   }
   
   input::placeholder{
    text-align: center;
   }

   .sbtn{
    margin-top: 5px;
    border: 3px solid black;
    color: black;
    border-radius: 20px;
    padding: 5px 10px;
    text-align: center;
    font-weight: bold;
   }
   .sbtn:hover{
    background-color: black;
    color: aliceblue;
   }

   .txt1{
    width: 250px;
    height: 30px;
    background-color: azure;
    z-index: 2;
    position: absolute;
    left: 25%;
    display: flex;
    border-radius: 5px;
    border: 3px solid;
    align-items: center;
    justify-content: center;
   }

   .tandon{
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
   }

   .upr{
    width: 50px;
    height: 10px;
    background-color: white;
    margin-top: 8%;
    border: 3px solid;
    border-radius: 15px 15px 0px 0px;
   }
   .up{
    width: 300px;
    height: 80px;
    background-color: white;
    margin-top: 0.5%;
    border: 3px solid;
    border-radius: 115px 115px 0px 0px;
    display: flex;
    align-items: center;
    z-index: 1;
   }

   .md{
    width: 300px;
    height: 150px;
    background-color: #47b0ff;
    margin-top: 0.5%;
    border: 3px solid;
    display: flex;
    align-items: center;
    z-index: 1;
   }

   .bt{
    width: 300px;
    height: 150px;
    background-color: #47b0ff;
    margin-top: 0.5%;
    border: 3px solid;
    border-radius: 0px 0px 25px 25px;
    display: flex;
    align-items: center;
    z-index: 1;
   }

   .card{
        color: black;
        background-color: azure;
        width: auto;
        height: 665px;
        box-shadow: 2px 20px 50px #ccf9ff;
        margin-top: 4%;
        margin-bottom: 20%;
        margin-left: 15%;
        margin-right: 15%;
        border-radius: 15px;
   }

   .head i{
        display: flex;
        z-index: 3;
        margin-top: 6%;
        justify-content: center;
        color: aliceblue;
        width: 100%;
        height: auto;
   }
</style>
