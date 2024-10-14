import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

function News() {
    const isMobile = window.innerWidth < 768;
    const refNews1 = useRef(null)
    const refNews2 = useRef(null)
    const { scrollYProgress: scrollNew1Yprogress } = useScroll({
        target: refNews1,
    });
    const { scrollYProgress: scrollNew2Yprogress } = useScroll({
        target: refNews2,
    });
    // Transform the scroll progress to the pixels we want the div to move
    const newsValues = useTransform(scrollNew1Yprogress, [0, 1], [0, 300])
    const news2Values = useTransform(scrollNew2Yprogress, [0, 1], [300, 0])
    let newsVariants = {};
    
    if (!isMobile){
        newsVariants = {
            appearLeft : {
                x: 200, opacity: 1
            },
            hideLeft:{
                x: -200, opacity: 0
            },
            appearRight : {
                x: 0, opacity: 1 
            },
            hideRight:{
                x: 200, opacity: 0
            },
            new1Initial:{
                y: 300
            },
            new1Scroll:{
                y: newsValues
            },
            new2Scroll:{
                y: news2Values
            },
        }
    }
    return (

        <div className="news">
            <div className="newContainer">
                <motion.div className="image" variants={newsVariants} initial='hideLeft' whileInView='appearLeft'  transition={{ duration: 1 }}>

                    <motion.div className="new" ref={refNews1} initial='new1Initial' style={(!isMobile) ? {y: newsValues} : {y:0}}  variants={newsVariants}  transition={{ duration: 0.4 }}>
                        <h2>Titulo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis animi nostrum cupiditate at?
                            Beatae maiores iusto labore, inventore impedit ipsa quidem pariatur. Aspernatur a quisquam, laudantium ratione maxime perferendis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur excepturi omnis nesciunt obcaecati consequuntur corrupti cum fugiat eius commodi veritatis laudantium laboriosam quo fugit, nemo, dolorem officiis ea quaerat?
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <div className="newContainer2">
                <motion.div className="image2" variants={newsVariants} initial='hideRight' whileInView='appearRight' transition={{ duration: 1 }} >

                    <motion.div className="new2"  variants={newsVariants} ref={refNews2} initial={{ y: 0 }} style={(!isMobile) ? {y: news2Values} : {y:0}} transition={{ duration: 0.4 }}>
                        <h2>Titulo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis animi nostrum cupiditate at?
                            Beatae maiores iusto labore, inventore impedit ipsa quidem pariatur. Aspernatur a quisquam, laudantium ratione maxime perferendis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur excepturi omnis nesciunt obcaecati consequuntur corrupti cum fugiat eius commodi veritatis laudantium laboriosam quo fugit, nemo, dolorem officiis ea quaerat?
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>

    )
}
export default News