import { createClient } from "@supabase/supabase-js";
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

const PROJECT_URL = "https://wfzyfwfldqpeojtcbztr.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indmenlmd2ZsZHFwZW9qdGNienRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjA2NTksImV4cCI6MTk4MzczNjY1OX0.1TgJsO8F0y5KHxYPZIOKE9KgcDnzvWxNwMM5N0svs9s";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

//get youtube thumbnail from video url
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

//get youtube video id
//function getVideoId(url) {
    //const videoId = url.split("v=1")[1];
    //const ampersandPosition = videoId.indexOf("&");
    //if (ampersandPosition !== -1) {
    //    return videoId.substring(0, ampersandPosition);
    //}
    //return videoId;
//}

export default function RegisterVideo() {
    const formCadastro = useForm ({
        initialValues: { titulo: "Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind", 
                         url: "https://www.youtube.com/watch?v=_oO4Qi5aVZs" }

    });
    const [formVisivel, setFormVisivel] = React.useState(false);
    
    

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

                        //Contrato entre o nosso Front e o BackEnd
                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "Tube Dicas",

                        })
                        .then((oqueveio) => {
                                console.log(oqueveio);
                        })
                        .catch((err) =>{
                            console.log(err);
                        })        

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