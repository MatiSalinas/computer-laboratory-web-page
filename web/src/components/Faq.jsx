import { motion } from 'framer-motion'
import { useState } from 'react'

function Faq() {

    const [isOpen, setIsOpen] = useState({ question1: false, question2: false, question3: false, question4: false })
    const questionVariants = {
        closed: {
            maxHeight: "4rem",
            overflowY: "hidden"
        },
        open: {
            maxHeight: "12rem",
            transition: { type: "spring" }
        },
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            maxHeight: "12rem",
        }

    }
    return (
        <motion.div className="faqContainer" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h1>Preguntas Frecuentes</h1>
            <motion.div className='question' variants={questionVariants} animate={isOpen.question1 ? "open" : "closed"} initial="closed" onClick={() => setIsOpen({ ...isOpen, ['question1']: !isOpen['question1'] })} transition={{ duration: 0.5 }}>
                    <h3>¿Dónde se encuentra el Laboratorio de Computación?</h3> 
                    <motion.div className='faqArrow'
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                    >
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </motion.div>
                <motion.p variants={questionVariants} animate={isOpen.question1 ? "visible" : "hidden"}>El laboratorio está ubicado en el edificio de la Facultad de Ciencias Exactas, Físicas y Naturales, en la Universidad de Córdoba. Arriba del aula de informática 111.</motion.p>
            </motion.div>


            <motion.div className='question' variants={questionVariants} animate={isOpen['question2'] ? "open" : "closed"} initial="closed" onClick={() => setIsOpen({ ...isOpen, ['question2']: !isOpen['question2'] })} transition={{ duration: 0.5 }}>
                    <h3>¿Cómo puedo participar en un proyecto de investigación?</h3>
                    <motion.div className='faqArrow'
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ originY: 0.55 }}
                        >
                            <svg width="15" height="15" viewBox="0 0 20 20">
                                <path d="M0 7 L 20 7 L 10 16" />
                            </svg>
                        </motion.div>
                <motion.p variants={questionVariants} animate={isOpen.question2 ? "visible" : "hidden"}>Para participar en un proyecto de investigación, primero debes ponerte en contacto con uno de nuestros profesores o investigadores principales. Ellos te proporcionarán información sobre los proyectos en curso y los requisitos necesarios para unirte.</motion.p>
            </motion.div>


            <motion.div className='question' variants={questionVariants} animate={isOpen['question3'] ? "open" : "closed"} initial="closed" onClick={() => setIsOpen({ ...isOpen, ['question3']: !isOpen['question3'] })} transition={{ duration: 0.5 }}>
                
                    <h3>Que requisitos debo cumplir para unirme a una PPS o PI?</h3>
                    <motion.div className='faqArrow'
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ originY: 0.55 }}
                        >
                            <svg width="15" height="15" viewBox="0 0 20 20">
                                <path d="M0 7 L 20 7 L 10 16" />
                            </svg>
                        </motion.div>
                <motion.p variants={questionVariants} animate={isOpen.question3 ? "visible" : "hidden"} >Depende de cada facultad. Para el caso de la FCEFyN se necesita el 70% de las materias aprobadas. Para más información, se puede consultar el siguiente link
                    <a href="https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-computacion/proyecto-integrador-7/"> Prácticas FCEFyN PI FCEFyN</a>.</motion.p>
            </motion.div>


            <motion.div className='question' variants={questionVariants} animate={isOpen['question4'] ? "open" : "closed"} initial="closed" onClick={() => setIsOpen({ ...isOpen, ['question4']: !isOpen['question4'] })} transition={{ duration: 0.5 }}>
                    <motion.div className='faqArrow'
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ originY: 0.55 }}
                        >
                            <svg width="15" height="15" viewBox="0 0 20 20">
                                <path d="M0 7 L 20 7 L 10 16" />
                            </svg>
                        </motion.div>
                <div className="questionTittle">
                    <h3>¿Cómo puedo sugerir una colaboración o un nuevo proyecto?</h3>
                </div>
                <motion.p variants={questionVariants} animate={isOpen.question4 ? "visible" : "hidden"}>Si tienes una idea para una colaboración o un nuevo proyecto, te invitamos a enviarnos una propuesta detallada por correo electrónico. Incluye una descripción del proyecto, tus objetivos y cualquier otro detalle relevante. Nuestro equipo revisará tu propuesta y se pondrá en contacto contigo para discutir posibles pasos a seguir.</motion.p>
            </motion.div>
        </motion.div>
    )
}

export default Faq