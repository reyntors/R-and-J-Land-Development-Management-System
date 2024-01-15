<template>
        <container-widget id="about" title="About" typeBG="2">
            <article class="description" id="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae molestias soluta officia! Magnam repudiandae corrupti saepe quos nobis quis dolorem sint maxime, necessitatibus dolorum.ing elit. Ullam quae molestias soluta officia! Magnam repudiandae corrupti saepe quos nobis quis dolorem sint maxime, necessitatibus dolorum.   </p>
            </article>
            <article class="mission-vision mb-5" id="misson-vision">
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
       
        
            <article id="sustainability" class="mb-5">
                <h3 class="subtitle">Sustainability</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ad quia adipisci ipsa sit. Maiores ut natus itaque sequi magni illum laboriosam doloribus perferendis commodi officia, vitae excepturi consectetur quod! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto et ipsum distinctio reprehenderit adipisci sit porro est? Facilis tempora non odit ab, ducimus sunt, eum atque expedita cumque cupiditate asperiores?
            </article>
            <article id="corp-officers" class="mb-5">
                <h3 class="subtitle">Corporation Officers</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ad quia adipisci ipsa sit. Maiores ut natus itaque sequi magni illum laboriosam doloribus perferendis commodi officia, vitae excepturi consectetur quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam aperiam consectetur voluptatibus harum saepe illo rem amet, deleniti, dignissimos voluptatum cumque nulla, optio ea delectus debitis placeat eius molestias.
            </article>
            <article id="licenses&permits" class="licenses mb-5" v-scrollObserver>
                <h3 class="subtitle">Licenses and Permits</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ad quia adipisci ipsa sit. Maiores ut natus itaque sequi magni illum laboriosam doloribus perferendis commodi officia, vitae excepturi consectetur quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam aperiam consectetur voluptatibus harum saepe illo rem amet, deleniti, dignissimos voluptatum cumque nulla, optio ea delectus debitis placeat eius molestias.
            </article>
         </container-widget>  

</template>

<script>
export default {
    mounted(){
        const scrollObserver = new IntersectionObserver(
            (entries,scrollObserver) => {
                console.log("hello world")
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        entry.target.classList.add('animateNow')
                        scrollObserver.unobserve(entry.target)
                    }
                })
            }
        )
 
        const description = document.getElementById('description')
        const sustainability = document.getElementById('sustainability')
        const corpOfficers = document.getElementById('corp-officers')
        const licensesPermits = document.getElementById('licenses&permits')
        const missonVision = document.getElementById('misson-vision')
        description.classList.add('before-shown')
        scrollObserver.observe(description)
        sustainability.classList.add('before-shown')
        scrollObserver.observe(sustainability)
        corpOfficers.classList.add('before-shown')
        scrollObserver.observe(corpOfficers)
        licensesPermits.classList.add('before-shown')
        scrollObserver.observe(licensesPermits)
        missonVision.classList.add('before-shown')        
        scrollObserver.observe(missonVision)
    }
}
</script>>

<style scoped>
.before-shown{
    opacity: 0;
    transform: translateY(5rem);
    transition: all 1s cubic-bezier(.56,-0.01,.23,1.43);
    transition-delay: .5s;
}
.animateNow{
    opacity: 1;
    transform: translateY(0px);
}
#sustainability,#corp-officers,.licenses{
    margin-top: .5rem;
    text-align: center;
    line-height: 1.5rem;
    width: 75%;
    margin: auto;
}
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
    width: 75%;
    margin: auto;
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