<script lang="ts">
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import { goto } from "$app/navigation";
    import Title from '$lib/title.svelte';

    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<Title />

<div class="card">
    
    <div class="tw">
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Distance</th>
                    <th>Level</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <tbody>
                {#each data.information.data as information}
                <tr>
                    <td>{information.createdAt}</td>
                    <td>{information.distance}</td>
                    <td>{information.level}</td>
                    <td>{information.temperature}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
    <div class="home">
        <button on:click={() => goto('/')}><i class="fa-solid fa-house fa-2x"></i></button>
    </div>
</div>

<style>
    :global(html) {
    background: linear-gradient(to bottom, #ccf9ff, #7ce8ff, #55d0ff, #00acdf, #0080bf);
   }
   .home{
    width: 50px;
    height: 50px;
    border: 3px solid black;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 0.5%;
   }

   .home:hover{
    background-color: black;
    color: aliceblue;
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
        display: flex;
        align-items: center;
        flex-direction: column;
   }
   .tw{
    border-radius: 5px;
    border: 1px solid;
    margin-top: 10%;
    display: flex;
    width: 880px;
    height: 331px;
    overflow: auto;
   }
   th, td{
    width: 300px;
    border: 3px solid black;
    border-collapse: collapse;
    text-align: center;
    font-weight: bold;
   }
   th{
    padding-top: 20px;
    padding-bottom: 20px;
   }
   
   ::-webkit-scrollbar{
    width: 8px;
   }

   ::-webkit-scrollbar-track {
        background-color: black;
        border-radius: 5px;
        
    }
                        
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: aliceblue;
    }
</style>
