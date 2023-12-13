

export default function CodigoEstudianteLayer() {


    
    const EvaluacionEstudiante = () => {
           return (

            
            <><p style={{ marginBottom: '20px' }} className="font-sans-serif text-lg">Ingresa la solucion que creas pertiente al desafio</p>

                <form onSubmit={(e) => handleSubmit(e)} style={{ marginBottom: '20px' }}>
                    <textarea value={codigo} onChange={(e) => setCodigo(e.target.value)} name="content" rows={20} cols={200} />

                    <div style={{ textAlign: 'right' }}>
                        <Button tradius="full" className="bg-gradient-to-tr from-blue-300 to-violet-800 text-white shadow-lg"  size="lg">Enviar Solución</Button>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <Button tradius="full" className="bg-gradient-to-tr from-blue-300 to-violet-800 text-white shadow-lg"  size="lg">Volver al DashBoard</Button>
                    </div>
                </form>

                {showAdditionalCard && (
                    <Card style={{ marginBottom: '20px', marginRight: '20px' }}>
                        <CardBody>
                            {/* Assuming `pruebaTecnica` is a variable you have */}
                            <p style={{ whiteSpace: 'pre-line' }}>{resultado.data.resultadoEvaluacion}</p>
                        </CardBody>
                    </Card>
                )}

                
            </>

        );
    };

    return (

        <div className="container-fluid h-100">
            <div className="row h-100">
                {/* Contenedor a la derecha */}
                <div className="contenido-derecha col-9 d-flex align-items-center justify-content-center p-3 text-center" >
                    <div className="p-5" style={{ maxWidth: 'auto' }}>

                        <EvaluacionEstudiante />

                    </div>
                </div>
            </div>
        </div>
    );

}


