<script lang="ts">
    import srcBackground from "../assets/images/helpers/background.jpg";
</script>

<div>
    <img draggable="false" alt={'image flip'} src={srcBackground} />
</div>


<style>
    div{
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: -2;
    }

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    
</style>