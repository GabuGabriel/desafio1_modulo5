const Contactos = () => {
    return (
            <form className="formulario">
                <fieldset disabled>
                    <legend>¿Quieres contactarte con nosotros?</legend>
                    <div class="mb-3">
                        <label for="TextInput" class="form-label">Ingresa tu Nombre</label>
                        <input type="text" id="TextInput" class="form-control" placeholder="Ingresa tu nombre" />
                    </div>
                    <div class="mb-3">
                        <label for="TextInput" class="form-label">Ingresa tu correo</label>
                        <input type="text" id="TextInput" class="form-control" placeholder="Ingresa tu correo" />
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </fieldset>
            </form>
    )
}
export default Contactos