function MapGoogle(){
    return(
    <div className="mapa" >
        <div className="borderT"></div>

        <div className="mapa"><iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13617.083057234764!2d-64.181348!3d-31.434212!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1727935597767!5m2!1ses-419!2sar" width={'100%'}  height={600} style={{border:0}} allowFullScreen={''} loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe></div>
        <div className="borderB"></div>
    
    </div>)
}

export default MapGoogle