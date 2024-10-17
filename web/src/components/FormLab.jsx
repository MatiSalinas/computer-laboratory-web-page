import { motion } from 'framer-motion'
import { useState } from 'react'


function FormLab() {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        texto: '',
        option: 'pps'
    });
    const [selectedOption, setSelectedOption] = useState("pps");
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.id)
        setFormData({
            ...formData,
            option: e.target.id
        }); 
    };
    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/forms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (response.ok) {

        }
    };
    return (
        <motion.div className="formContainer" >
            <motion.form onSubmit={handleSubmit} initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:0.8}}>
            <h1>Trabaja con nosotros</h1>
                <div className="nameNsurname">
                    <label className='labelForm' htmlFor="nombre">Nombre:
                        <input className="inputForm" type="text" name="nombre" id="nombre" onChange={handleFormData} />
                    </label>
                    <label className='labelForm'htmlFor="apellido">Apellido:
                        <input className="inputForm" type="text" name="apellido" id="apellido" onChange={handleFormData} />
                    </label>
                </div>
                <div className="questionBlock">
                    <label className='labelForm'htmlFor="email">Email:
                        <input className="inputForm" type="email" name="email" id="email" onChange={handleFormData} />
                    </label>
                </div>
                <div className="questionBlock">
                    <label className='labelForm'htmlFor="telefono">Telefono:
                        <input className="inputForm" type="tel" name="telefono" id="telefono" onChange={handleFormData} />
                    </label>
                </div>
                <div className="questionBlock">
                    <label className='labelForm'htmlFor="texto">Quiero Contactar con el laboratorio por qué...:
                        <textarea name="texto" id="texto" rows={10} cols={40} onChange={handleFormData} ></textarea>
                    </label>
                </div>
                <div className="questionOptionsBlock">
                    <p>Estoy interesado en:</p>
                    <label className='radioOption' htmlFor="pps">
                        <input type="radio" name="option" id="pps" checked={selectedOption == 'pps'} onChange={handleOptionChange} />
                        Prácticas Supervisadas Profesionales (PPS)
                    </label>
                    <label className='radioOption' htmlFor="pi">
                        <input type="radio" name="option" id="pi" checked={selectedOption == 'pi'} onChange={handleOptionChange}/>
                        Proyecto Integrador (PI)</label>
                    <label className='radioOption' htmlFor="inv">
                        <input type="radio" name="option" id="inv" checked={selectedOption == 'inv'} onChange={handleOptionChange}/>
                        Investigación</label>
                    <label className='radioOption' htmlFor="otro">
                        <input type="radio" name="option" id="otro" checked={selectedOption == 'otro'} onChange={handleOptionChange}/>
                        Otro
                        </label>
                    
                    
                </div>
                    {console.log(formData)}
                    <motion.button type="submit" whileHover={{scale:1.2}} transition={{duration:0.1}}>Enviar</motion.button>
                    </motion.form>
                            </motion.div>
                            )
}

                            export default FormLab