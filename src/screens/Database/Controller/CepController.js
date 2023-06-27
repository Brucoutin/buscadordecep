import realm from "../realm"

const CadastroSchema = realm.objects('cadastro_cep')

//tabelas
class CepController {
  static getEndereco = (id_cep) => {
    return CadastroSchema.filtered(`id_cep = ${id_cep}`)
  }

  static getCep = (cep_cep) => {
    return CadastroSchema.filtered(`cep_cep = ${cep_cep}`)
  }

  static logradouro = (id_logradouro) => {
    return CadastroSchema.filtered(`id_logradouro = ${id_logradouro}`)
  }

  static localidade = (id_localidade) => {
    return CadastroSchema.filtered(`id_localidade ="${id_localidade}"`)
  }

  static bairro = (id_bairro) => {
    return CadastroSchema.filtered(`id_bairro ="${id_bairro}"`)
  }

  static estado = (id_estado) => {
    return CadastroSchema.filtered(`id_estado ="${id_estado}"`)
  }

  static complemento = (id_complemento) => {
    return CadastroSchema.filtered(`id_complemento ="${id_complemento}"`)
  }

}

export default CepController
