import { ScrollForm, ContainerForm, ContainerUf } from "./style"
import { BoxInput } from "../../components/BoxInput"

export function Home() {
    //hooks - states

    //hooks - effect
    //chamada da API
    return (
        //ScrollView
        //ContainerForm
        ///BoxInout
        //Label
        //Input
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel={"Informe o cep"}
                    placeholder={"Cep..."}
                    keyType={"numeric"}
                    maxLenght={9}
                    editable={true}
                />

                <BoxInput
                    textLabel={"Logradouro"}
                    placeholder={"Logradouro..."}
                />

                <BoxInput
                    textLabel={"Bairro"}
                    placeholder={"Bairro..."}
                />

                <BoxInput
                    textLabel={"Cidade"}
                    placeholder={"Cidade..."}
                />

                <ContainerUf>

                    <BoxInput
                        textLabel={"Estado"}
                        placeholder={"Logradouro..."}
                        fieldWidth= {67}
                    />

                    <BoxInput
                        textLabel={"UF"}
                        placeholder={"UF"}
                        fieldWidth={25}
                    />

                </ContainerUf>

            </ContainerForm>
        </ScrollForm>
    )
}