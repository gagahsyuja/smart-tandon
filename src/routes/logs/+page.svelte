<script lang="ts">

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

</script>

<div>
    <h1>LOGS</h1>
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
                    <td><h1>{information.createdAt}</h1></td>
                    <td><h1>{information.distance}</h1></td>
                    <td><h1>{information.level}</h1></td>
                    <td><h1>{information.temperature}</h1></td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>

:global(html) {
    background: linear-gradient(to bottom, #ccf9ff, #7ce8ff, #55d0ff, #00acdf, #0080bf);
}

</style>
