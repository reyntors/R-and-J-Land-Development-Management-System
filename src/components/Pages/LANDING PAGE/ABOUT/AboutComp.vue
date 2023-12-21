<template>
        <container-widget id="about" title="About" typeBG="2">
            <article class="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae molestias soluta officia! Magnam repudiandae corrupti saepe quos nobis quis dolorem sint maxime, necessitatibus dolorum.ing elit. Ullam quae molestias soluta officia! Magnam repudiandae corrupti saepe quos nobis quis dolorem sint maxime, necessitatibus dolorum.   </p>
            </article>
            <article class="mission-vision mb-5">
                <section class="vision">
                    <h3 class="subtitle">VISION</h3>
                    <span class="line"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse qui beatae porro facilis aliquam error omnis dicta quasi, magnam voluptates quam reprehenderit cupiditate soluta non, quod, nobis veritatis! Aspernatur!</p>
                </section>
                <section class="mission">
                    <h3 class="subtitle">MISSION</h3>
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

</template>

<style scoped>
.subtitle{
    color: white;
}
.line{
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 90%;
}
.description{
    margin-top: .5rem;
    text-align: center;
    line-height: 1.5rem;
    width: 75%;
    margin: auto;
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
@media only screen and (max-width: 600px) {
    .mission-vision{
        display: block;
        
    }
    .vision,.mission{
        margin-top: 1rem;
        width: 100%;
    }
    
}
@media only screen and (max-width: 900px) {
    .description{
        width: 100%;
    }
    .mission-vision{
        display: block;
    }
    .vision, .mission{
        width: 100%;
        margin-top: 1rem;
    }
}
</style>