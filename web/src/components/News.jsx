import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

function News(){
    const refNews1 = useRef(null)
    const refNews2 = useRef(null)
    const { scrollYProgress:scrollNew1Yprogress } = useScroll({
        target:refNews1, 
    });
    const { scrollYProgress:scrollNew2Yprogress } = useScroll({
        target:refNews2, 
    });
    const newsValues = useTransform(scrollNew1Yprogress,[0,1],[0,300])
    const news2Values = useTransform(scrollNew2Yprogress,[0,1],[300,0])
    return (

        <div className="news">
            <div className="newContainer">
                <motion.div className="image" initial={{x:-200,opacity:0}} whileInView={{x:200, opacity:1}} transition={{duration:1}}>
                        
                                   <motion.div className="new" ref={refNews1} initial={{y:300}} style={{y:newsValues}} transition={{duration:0.4}}>
                   <h2>Titulo</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis animi nostrum cupiditate at?
                       Beatae maiores iusto labore, inventore impedit ipsa quidem pariatur. Aspernatur a quisquam, laudantium ratione maxime perferendis?
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur excepturi omnis nesciunt obcaecati consequuntur corrupti cum fugiat eius commodi veritatis laudantium laboriosam quo fugit, nemo, dolorem officiis ea quaerat?
                   </p>
                   </motion.div>
                </motion.div>
                </div>

                <div className="newContainer2">
                <motion.div className="image2" initial={{x:200,opacity:0,}} whileInView={{x:0, opacity:1}} transition={{duration:1}} viewport={{once:true}}>
                        
                                   <motion.div className="new2" ref={refNews2} initial={{y:0}} style={{y:news2Values}} transition={{duration:0.4}}>
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