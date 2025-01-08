<script>
    import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<body>
    
    <div class="card">
        <i class="fa-solid fa-droplet fa-3x">&nbsp; SMART TANDON</i>
        <div class="tandon">
            <div class="upr"></div>
            <div class="up">
                <div class="txt1"><b>Tinggi Air :&nbsp; 3 &nbsp;</b><b>m</b></div>
            </div>
            <div class="md">
                <div class="txt2"><b>Volume Air :&nbsp; 9.42 &nbsp;</b><b>m3</b></div>
            </div>
            <div class="bt">
                <div class="txt1"><b>Liter Air :&nbsp; 45 &nbsp;</b><b>Liter</b></div>
            </div>
        </div>
    </div>
</body>

<style>
   body{
    background: linear-gradient(to bottom, #ccf9ff, #7ce8ff, #55d0ff, #00acdf, #0080bf);
   }

   .txt2{
    width: 250px;
    height: 30px;
    background-color: azure;
    z-index: 2;
    position: absolute;
    right: 25%;
    display: flex;
    border-radius: 5px;
    border: 3px solid;
    padding-left: 5px;
    align-items: center;
    justify-content: center;
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
    padding-left: 5px;
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
        margin-top: 12%;
        margin-bottom: 4%;
        margin-left: 15%;
        margin-right: 15%;
        border-radius: 15px;
   }

   .card i{
        position: absolute;
        z-index: 3;
        top: 10%;
        left: 37%;
        right: 63%;
        color: aliceblue;
        width: 468px;
   }
</style>