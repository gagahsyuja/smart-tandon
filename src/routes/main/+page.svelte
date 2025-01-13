<script lang="ts">

    import Main from "$lib/main.svelte";
	import type { PageData } from '../$types';

    /* TODO:
        - INPUTAN NOMOR UNTUK MENGATUR KAPAN KRAN TERBUKA BISA BERUPA JARAK (CM)
        - INPUTAN NOMOR UNTUK MENDEFINISIKAN TINGGI TANDON (CM)
        - WARNING KETIKA SUHU PANAS, MISALNYA DIATAS 30 DERAJAT
    */

	let { data }: { data: PageData } = $props();

</script>

<Main />

<a href="/logs">Logs</a>
