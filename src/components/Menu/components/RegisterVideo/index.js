import React from "react";
import { StyledRegisterVideo } from "./styles";

//Custom Hook
//whiteboarding: reunião de equipes, brainstorming a respeito de como será elaborado o projeto
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            }); 
        },
        clearForm() {
            setValues({});
        }    
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm ({
        initialValues: { titulo: "", url: "" }

    });
    const [formVisivel, setFormVisivel] = React.useState(true);      

    // [x]Falta botão para adicionar
    // [x]Inserir Modal
    // [x]->Precisamos controlar o state
    // []-> Formulário em si
    /*
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
        - título
        -url do vídeo
    - precisamos ter um onSubmit do nosso form
    - limpar o formulário após o Submit
    */

    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={() =>setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formCadastro.values);
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() =>setFormVisivel(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Titulo do vídeo" 
                                name="titulo"
                                value={formCadastro.values.titulo} 
                                onChange={formCadastro.handleChange}                                    
                            />
                            <input 
                            placeholder="URL"
                            name = "url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}                           
                            />
                            <button type="submit" >
                                Cadastrar
                            </button>                    
                         </div>
                    </form>            
            
            )
            : false}
        </StyledRegisterVideo>
    )    
}