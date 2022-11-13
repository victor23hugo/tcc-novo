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
        and vl_camisa < 400
    
    `
    const [registros] = await con.query(comando)
    return registros;
}

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
        and vl_camisa < 400
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