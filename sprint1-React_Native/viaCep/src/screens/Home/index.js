import { ScrollForm, ContainerForm, ContainerUf } from "./style"
import { BoxInput } from "../../components/BoxInput"
import axios from "axios"
import { useEffect, useState } from "react"

export function Home() {

    const [cep, setCep] = useState("");
     
    const [endereco, setEndereco] = useState({})

    useEffect(() => {

     }, [])


    async function getCep (){
        
        try {
            if(cep === ""){
                setEndereco({});
            }
            else{
                const promise = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
                setEndereco(promise.data)
            }
            
        } catch (error) {
          
            alert("Deu erro na requisição! Tente novamente. " + error.message)
            setEndereco({});
        }

       
    }

    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel={"Informe o cep"}
                    placeholder={"Cep..."}
                    keyType={"numeric"}
                    maxLength={8}
                    editable={true}
                    onChangeText={setCep}
                    onBlur={getCep}
                />

                <BoxInput
                    textLabel={"Logradouro"}
                    placeholder={"Logradouro..."}
                    fieldValue={endereco.logradouro}
                />

                <BoxInput
                    textLabel={"Bairro"}
                    placeholder={"Bairro..."}
                    fieldValue={endereco.bairro}
                />

                <BoxInput
                    textLabel={"Cidade"}
                    placeholder={"Cidade..."}
                    fieldValue={endereco.localidade}
                />

                <ContainerUf>

                    <BoxInput
                        textLabel={"Estado"}
                        placeholder={"Logradouro..."}
                        fieldWidth= {67}
                        fieldValue={endereco.uf}
                    />

                    <BoxInput
                        textLabel={"UF"}
                        placeholder={"UF"}
                        fieldWidth={25}
                        fieldValue={endereco.uf}
                    />

                </ContainerUf>

            </ContainerForm>
        </ScrollForm>
    )
}