const Contactos = () => {
    return (
        <>
            <form>
                <fieldset disabled>
                    <legend>¿Quieres contactarte con nosotros?</legend>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Ingresa tu Nombre</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Ingresa tu correo</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" />
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </fieldset>
            </form>
        </>
    )
}
export default Contactos