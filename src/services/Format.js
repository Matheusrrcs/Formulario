const caracters = (item) => {
    return item.replace(/[^\d]/g, "");
}

export const formatCPF_CNPJ = (cpf) => {
    if (cpf.length === 11) {
        cpf = caracters(cpf)
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    else if (cpf.length === 14) {
        cpf = caracters(cpf)
        return cpf.replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5");
    }
    else {
        return <i> CPF OU CNPJ INVALIDO</i>
    }
}

export const formatCEP = (cep) => {
    if(cep.length === 8){ 
        cep = caracters(cep);
        return cep.replace(/^([\d]{2})\.*([\d]{3})-*([\d]{3})/, "$1.$2-$3")
    }
    else{
        return <i> CEP INVALIDO</i>
    }

}

export const formatPhone = (phone) => {
 
        phone = caracters(phone);
        return phone.replace(/^([\d]{2})?([\d]{1})?([\d]{4})?([\d]{4})/, "($1)$2$3-$4")
   
}