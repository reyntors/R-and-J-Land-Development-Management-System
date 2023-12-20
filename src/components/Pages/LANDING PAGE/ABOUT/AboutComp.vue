<template>
    <!-- <div id="about"> -->

        <container-widget id="about" title="About" typeBG="2">
            <header>
                <!-- <h2>ABOUT</h2>
                <span class="line"></span> -->
            </header>
            <article class="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae molestias soluta officia! Magnam repudiandae corrupti saepe quos nobis quis dolorem sint maxime, necessitatibus dolorum.ing elit. Ullam quae molestias soluta officia! Magnam repudiandae corrupti saepe quos nobis quis dolorem sint maxime, necessitatibus dolorum.   </p>
            </article>
            <article class="mission-vision">
                <section class="vision">
                    <h4>VISION</h4>
                    <span class="line"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse qui beatae porro facilis aliquam error omnis dicta quasi, magnam voluptates quam reprehenderit cupiditate soluta non, quod, nobis veritatis! Aspernatur!</p>
                </section>
                <section class="mission">
                    <h4>MISSION</h4>
                    <span class="line"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sint corrupti libero doloribus temporibus labore nemo facilis, dicta qui quibusdam quo voluptatem saepe ducimus voluptatibus perspiciatis impedit perferendis eius mollitia.</p>
                </section>
            </article>
       
        
            <article id="sustainability" style="border: 1px solid black; width: 100%; height: 300px;">
                SUSTAINABLITY
            </article>
            <article id="corp-officers" style="border: 1px solid black; width: 100%; height: 300px;">
                CORPORATE OFFICERS
            </article>
            <article id="licenses&permits" style="border: 1px solid black; width: 100%; height: 300px;">
                LICENSES AND PERMITS
            </article>
         </container-widget>  
        <!-- </div> -->

</template>

<script>
export default {

}
</script>

<style scoped>


.line{
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 90%;
}
.description{
    margin-top: .5rem;
    text-align: center;
    line-height: 1.5rem;
}
.mission-vision{
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: .5rem;
}
.vision, .mission{
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
    line-height: 1.5rem;
    padding-top: .5rem;
    text-align: center;
}
</style>