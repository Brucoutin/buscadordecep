import Realm from "realm";

class CadastroSchema extends Realm.Object {}
CadastroSchema.schema ={
    name: 'cadastro_cep',
    primaryKey: 'id_cep',
    properties: {
        id_cep: { type: 'string', indexed: true },
        cep_cep: {type: 'string'},
        id_logradouro: {type: 'string'},
        id_localidade: {type: 'string'},
        id_bairro: { type: 'string' },
        id_estado: { type: 'string' },
        id_complemento: { type: 'string' },
    }
}

let realm = new Realm
    ({
        schema: [CadastroSchema, 
                 ],
        schemaVersion: 21,
    });

    let getEndereco = () => {
        return realm.objects('cadastro_cep')
    };
    
    let deleteAllCadastroEndereco= () => {
        realm.write(() => {
            realm.delete(getEndereco());
        });
    };
    


export default realm;

export {
    getEndereco,
    deleteAllCadastroEndereco,
}


