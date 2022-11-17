import {con} from './connection.js'


//listar produtos na home

export async function listarProdutosInicio(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
        where vl_camisa < 400
    `

    const [registros] = await con.query (comando);
    return registros;
}

export async function listarProdutoscatalogo(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
        
    `
    const [registros] = await con.query (comando);
    return registros;
}



//query que esta sendo ultilizada na ladinpage para listar as camisas da puma 
export async function teste(){
    const comando = `
    select id_camisa        id ,
    nm_camisa               nome,
    vl_camisa               valor,
    nm_marca                marca,
    ds_descricao            descricao,
    img_camisa	            imagem
    from tb_cadastro_camisa
    where nm_marca = 'Puma'
        and vl_camisa <= 289
    
    `
    const [registros] = await con.query(comando)
    return registros;
}

//listando as camisa nike na primeira faixa 
export async function testeNike(){
    const comando = `
    select id_camisa        id ,
    nm_camisa               nome,
    vl_camisa               valor,
    nm_marca                marca,
    ds_descricao            descricao,
    img_camisa	            imagem
    from tb_cadastro_camisa
    where nm_marca = 'Nike'
        and vl_camisa <= 299
    `
    const [registros] = await con.query(comando)
    return registros;
}
//listando as camisas Adidas na segunda faixa
export async function Adidas(){
    const comando = 
    `select id_camisa        id ,
    nm_camisa               nome,
    vl_camisa               valor,
    nm_marca                marca,
    ds_descricao            descricao,
    img_camisa	            imagem
    from tb_cadastro_camisa
    where nm_marca = 'Adidas'
        and vl_camisa <= 289
    
    `
    const [registros] = await con.query(comando )
    return registros;
}

//listando as camisas Umbro na Home 
export async function Umbro(){
    const comando =  `
    
    select id_camisa        id ,
    nm_camisa               nome,
    vl_camisa               valor,
    nm_marca                marca,
    ds_descricao            descricao,
    img_camisa	            imagem
    from tb_cadastro_camisa
    where nm_marca = 'Umbro'
        and vl_camisa <= 249
    
    `
    const [registros] = await con.query(comando)
    return registros;
}


//Filtro camisas Puma
export async function listarProdutosPuma(){
    const comando = `

    select id_camisa        id ,
    nm_camisa               nome,
    vl_camisa               valor,
    nm_marca                marca,
    ds_descricao            descricao,
    img_camisa	            imagem
    from tb_cadastro_camisa
        where nm_marca = 'Puma'
        and vl_camisa < 400
    `

    const [registros] = await con.query (comando);
    return registros;
}


//filtro de camisas Adidas Na page catalogo
export async function listarProdutosAdidas(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
        where nm_marca = 'Adidas'
    `

    const [registros] = await con.query (comando);
    return registros;
}


//Filtro camisas Nike
export async function listarProdutosNike(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao
        
        from tb_cadastro_camisa
        where nm_marca = 'Nike'
    `

    const [registros] = await con.query (comando);
    return registros;
}


//Listar camisas Umbro
export async function listarProdutosUmbro(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
        where nm_marca = 'Umbro'

    `

    const [registros] = await con.query (comando);
    return registros;
}


export async function listarTamanhoP(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
       where ds_tamanho = 'P'
    `

    const [registros] = await con.query (comando);
    return registros;
}


export async function listarTamanhoM(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
       where ds_tamanho = 'M'
    `

    const [registros] = await con.query (comando);
    return registros;
}


export async function listarTamanhoG(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
       where ds_tamanho = 'G'
    `

    const [registros] = await con.query (comando);
    return registros;
}


export async function listarTamanhoGG(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
       where ds_tamanho = 'GG'
    `

    const [registros] = await con.query (comando);
    return registros;
}

export async function listarPorNome(nome){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
       where nm_camisa like ?
    `

    const [registros] = await con.query (comando, [`${nome}`]);
    return registros;
}
