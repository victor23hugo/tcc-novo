use casportsDB;


-- login adm

insert into tb_admin_login(ds_email, ds_senha)
						values('adm@gmail.com', '12');
select id_admin_login 		id,
       ds_email			email,
       ds_senha			senha
  from tb_admin_login
 where ds_email 		= 'adm@gmail.com'
   and ds_senha			= '12';

-- cadastrar Camisa
   -- CADASTRAR CAMISA
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Palmeiras 2024','camisa bacana', '50', '350', 'Puma', 'G');

	select id_camisa	id,
		nm_camisa		nome,
        ds_descricao	descricao,
        qtd_camisa		quantidade,
        vl_camisa		valor,
        nm_marca		marca,
        ds_tamanho		tamanho
from tb_cadastro_camisa
where nm_camisa			= 'Camisa Palmeiras 2024'
and		ds_tamanho		= 'G';

--Cadastro imagem camisa

update tb_cadastro_camisa
set img_camisa1 = 'imagem'
where id_camisa = 1;



---- Inserts Produtos/camisas


insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Puma Olympique de Marseille Away 2023','A Puma apresenta a camisa Away do Olympique de Marseille para 2023,
									o manto ideal para o torcedor apaixonado pelo time francês.
									Confeccionada em poliéster leve, a peça traz design na cor marinho,
									além de possuir o escudo do time bordado na região do tórax.', '100', '369', 'Puma', 'G');
                                    
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Puma Olympique de Marseille Away 2023','A Puma apresenta a camisa Away do Olympique de Marseille para 2023,
									o manto ideal para o torcedor apaixonado pelo time francês.
									Confeccionada em poliéster leve, a peça traz design na cor marinho,
									além de possuir o escudo do time bordado na região do tórax.', '70', '369', 'Puma', 'GG');


insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Puma Olympique de Marseille Away 2023','A Puma apresenta a camisa Away do Olympique de Marseille para 2023,
									o manto ideal para o torcedor apaixonado pelo time francês.
									Confeccionada em poliéster leve, a peça traz design na cor marinho,
									além de possuir o escudo do time bordado na região do tórax.', '50', '369', 'Puma', 'M');
                                    
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Puma Olympique de Marseille Away 2023','A Puma apresenta a camisa Away do Olympique de Marseille para 2023,
									o manto ideal para o torcedor apaixonado pelo time francês.
									Confeccionada em poliéster leve, a peça traz design na cor marinho,
									além de possuir o escudo do time bordado na região do tórax.', '50', '369', 'Puma', 'P');


insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Adidas Internacional II 2021 Libertadores','A Adidas apresenta a camisa II do Colorado para 2021, a peça que homenageia o ano de 2006, quando o Inter conquistou seu primeiro título mundial.
									O manto exibe a frase "Yokohama 2006" próxima à nuca,
									além de trazer o patch da Libertadores nas mangas.', '100', '219', 'Adidas', 'G');
                                    
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Adidas Internacional II 2021 Libertadores','A Adidas apresenta a camisa II do Colorado para 2021, a peça que homenageia o ano de 2006, quando o Inter conquistou seu primeiro título mundial.
									O manto exibe a frase "Yokohama 2006" próxima à nuca,
									além de trazer o patch da Libertadores nas mangas.', '50', '219', 'Adidas', 'GG');
                                    
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Adidas Internacional II 2021 Libertadores','A Adidas apresenta a camisa II do Colorado para 2021, a peça que homenageia o ano de 2006, quando o Inter conquistou seu primeiro título mundial.
									O manto exibe a frase "Yokohama 2006" próxima à nuca,
									além de trazer o patch da Libertadores nas mangas.', '50', '219', 'Adidas', 'M');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Adidas Internacional II 2021 Libertadores','A Adidas apresenta a camisa II do Colorado para 2021, a peça que homenageia o ano de 2006, quando o Inter conquistou seu primeiro título mundial.
									O manto exibe a frase "Yokohama 2006" próxima à nuca,
									além de trazer o patch da Libertadores nas mangas.', '70', '219', 'Adidas', 'P');        



insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camiseta Nike Liverpool Strike Masculina','A camiseta Liverpool FC Strike inclui detalhes de design
										especialmente projetados para as estrelas em ascensão do futebol.
										Um ajuste simplificado e elegante garante que nada fique entre você e a bola,
										enquanto o tecido antissuor ajuda a manter o frescor e o ritmo enquanto você aprimora suas habilidades.
										Este produto é 100% feito com fibras de poliéster reciclado.', '50', '179', 'Nike', 'G');                       


insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camiseta Nike Liverpool Strike Masculina','A camiseta Liverpool FC Strike inclui detalhes de design
										especialmente projetados para as estrelas em ascensão do futebol.
										Um ajuste simplificado e elegante garante que nada fique entre você e a bola,
										enquanto o tecido antissuor ajuda a manter o frescor e o ritmo enquanto você aprimora suas habilidades.
										Este produto é 100% feito com fibras de poliéster reciclado.', '50', '179', 'Nike', 'GG');
                                        
									
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camiseta Nike Liverpool Strike Masculina','A camiseta Liverpool FC Strike inclui detalhes de design
										especialmente projetados para as estrelas em ascensão do futebol.
										Um ajuste simplificado e elegante garante que nada fique entre você e a bola,
										enquanto o tecido antissuor ajuda a manter o frescor e o ritmo enquanto você aprimora suas habilidades.
										Este produto é 100% feito com fibras de poliéster reciclado.', '50', '179', 'Nike', 'M');
                                        
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camiseta Nike Liverpool Strike Masculina','A camiseta Liverpool FC Strike inclui detalhes de design
										especialmente projetados para as estrelas em ascensão do futebol.
										Um ajuste simplificado e elegante garante que nada fique entre você e a bola,
										enquanto o tecido antissuor ajuda a manter o frescor e o ritmo enquanto você aprimora suas habilidades.
										Este produto é 100% feito com fibras de poliéster reciclado.', '50', '179', 'Nike', 'P');      


insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Umbro Grêmio I 2021','Nada se assemelha ao orgulho de levar no peito o peso da história do Tricolor
										dos Pampas com a camisa I do Grêmio para 2021.
										O manto traz dois selos em comemoração às conquistas
										do Campeonato Gaúcho de 1921 e do Brasileirão de 1981 e 1996.', '60', '147', 'Umbro', 'G');
                                        
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Umbro Grêmio I 2021','Nada se assemelha ao orgulho de levar no peito o peso da história do Tricolor
										dos Pampas com a camisa I do Grêmio para 2021.
										O manto traz dois selos em comemoração às conquistas
										do Campeonato Gaúcho de 1921 e do Brasileirão de 1981 e 1996.', '50', '147', 'Umbro', 'GG');
                                        
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Umbro Grêmio I 2021','Nada se assemelha ao orgulho de levar no peito o peso da história do Tricolor
										dos Pampas com a camisa I do Grêmio para 2021.
										O manto traz dois selos em comemoração às conquistas
										do Campeonato Gaúcho de 1921 e do Brasileirão de 1981 e 1996.', '60', '147', 'Umbro', 'M');
									
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Umbro Grêmio I 2021','Nada se assemelha ao orgulho de levar no peito o peso da história do Tricolor
										dos Pampas com a camisa I do Grêmio para 2021.
										O manto traz dois selos em comemoração às conquistas
										do Campeonato Gaúcho de 1921 e do Brasileirão de 1981 e 1996.', '60', '147', 'Umbro', 'P');
                                        
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Puma Milan Home 2023','Feche os olhos e sinta-se como os craques do Rossoneri no San Siro
												com o manto Home do Milan para 2023, criado pela Puma.
												A camisa exibe design listrado com detalhes nas cores da bandeira italiana, além de selo,
                        abaixo da nuca, com a frase "SEMPRE MILAN".', '50', '369', 'Puma', 'G');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Puma Milan Home 2023','Feche os olhos e sinta-se como os craques do Rossoneri no San Siro
												com o manto Home do Milan para 2023, criado pela Puma.
												A camisa exibe design listrado com detalhes nas cores da bandeira italiana, além de selo,
                        abaixo da nuca, com a frase "SEMPRE MILAN".', '40', '369', 'Puma', 'GG');
                        
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Puma Milan Home 2023','Feche os olhos e sinta-se como os craques do Rossoneri no San Siro
												com o manto Home do Milan para 2023, criado pela Puma.
												A camisa exibe design listrado com detalhes nas cores da bandeira italiana, além de selo,
                        abaixo da nuca, com a frase "SEMPRE MILAN".', '50', '369', 'Puma', 'M');
                       
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Puma Milan Home 2023','Feche os olhos e sinta-se como os craques do Rossoneri no San Siro
												com o manto Home do Milan para 2023, criado pela Puma.
												A camisa exibe design listrado com detalhes nas cores da bandeira italiana, além de selo,
                        abaixo da nuca, com a frase "SEMPRE MILAN".', '50', '369', 'Puma', 'G');    


insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Adidas Real Madrid Away 2023 9 Benzema','A Adidas apresenta a camisa 
										Away do Real Madrid para 2023, o manto ideal para 
										os fanáticos Madridistas Madrilenhos. O uniforme é confeccionado em poliéster,
										exibe design na cor roxa e traz o número 
								09 e o nome do craque Benzema estampados nas costas.', '100', '369', 'Adidas', 'G');
                                
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Adidas Real Madrid Away 2023 9 Benzema','A Adidas apresenta a camisa 
										Away do Real Madrid para 2023, o manto ideal para 
										os fanáticos Madridistas Madrilenhos. O uniforme é confeccionado em poliéster,
										exibe design na cor roxa e traz o número 
								09 e o nome do craque Benzema estampados nas costas.', '100', '369', 'Adidas', 'GG'); 
                                
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Adidas Real Madrid Away 2023 9 Benzema','A Adidas apresenta a camisa 
										Away do Real Madrid para 2023, o manto ideal para 
										os fanáticos Madridistas Madrilenhos. O uniforme é confeccionado em poliéster,
										exibe design na cor roxa e traz o número 
								09 e o nome do craque Benzema estampados nas costas.', '100', '369', 'Adidas', 'M');
                              
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Adidas Real Madrid Away 2023 9 Benzema','A Adidas apresenta a camisa 
										Away do Real Madrid para 2023, o manto ideal para 
										os fanáticos Madridistas Madrilenhos. O uniforme é confeccionado em poliéster,
										exibe design na cor roxa e traz o número 
								09 e o nome do craque Benzema estampados nas costas.', '100', '369', 'Adidas', 'P');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Nike Barcelona I 2022/23 Torcedor Masculina','Como outras da nossa coleção Torcedor Pro,
										ela combina detalhes da camisa profissional com tecnologia antissuor
										para oferecer um look pronto para o jogo e inspirado no seu time favorito.
										Este produto é 100% feito com fibras de poliéster reciclado.', '100', '399', 'Nike', 'G');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Nike Barcelona I 2022/23 Torcedor Masculina','Como outras da nossa coleção Torcedor Pro,
										ela combina detalhes da camisa profissional com tecnologia antissuor
										para oferecer um look pronto para o jogo e inspirado no seu time favorito.
										Este produto é 100% feito com fibras de poliéster reciclado.', '100', '399', 'Nike', 'GG');
             
             
             insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Nike Barcelona I 2022/23 Torcedor Masculina','Como outras da nossa coleção Torcedor Pro,
										ela combina detalhes da camisa profissional com tecnologia antissuor
										para oferecer um look pronto para o jogo e inspirado no seu time favorito.
										Este produto é 100% feito com fibras de poliéster reciclado.', '60', '399', 'Nike', 'M');
                                    
             insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Nike Barcelona I 2022/23 Torcedor Masculina','Como outras da nossa coleção Torcedor Pro,
										ela combina detalhes da camisa profissional com tecnologia antissuor
										para oferecer um look pronto para o jogo e inspirado no seu time favorito.
										Este produto é 100% feito com fibras de poliéster reciclado.', '70', '399', 'Nike', 'P');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Masculina Umbro Santos Of.2 2021','Tradição não se discute. O manto
						listrado está marcado nos 109 anos do Santos. 
						Uma história marcante e que de branco e preto veste a paixão santista.',
                        '100', '124', 'Umbro', 'G');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Masculina Umbro Santos Of.2 2021','Tradição não se discute. O manto
						listrado está marcado nos 109 anos do Santos. 
						Uma história marcante e que de branco e preto veste a paixão santista.',
                        '80', '124', 'Umbro', 'GG');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Masculina Umbro Santos Of.2 2021','Tradição não se discute. O manto
						listrado está marcado nos 109 anos do Santos. 
						Uma história marcante e que de branco e preto veste a paixão santista.',
                        '80', '124', 'Umbro', 'M');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Masculina Umbro Santos Of.2 2021','Tradição não se discute. O manto
						listrado está marcado nos 109 anos do Santos. 
						Uma história marcante e que de branco e preto veste a paixão santista.',
                        '50', '124', 'Umbro', 'P');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('CAMISA PALMEIRAS AWAY 2022 MASCULINA','A visão de sustentabilidade do Palmeiras busca
                        consolidar o clube como uma organização responsável que gera impacto positivo para a indústria do
                        futebol e toda a sociedade.
A Camisa Palmeiras Away 2022 abraça a causa sustentável e traz uma camisa construída em fio cru, que elimina tinta
 e alvejante do processo produtivo, além de fio reciclado em sua produção.
Pela primeira vez, as camisas terão uma etiqueta com o propósito da PUMA e do Palmeiras de buscar um futuro mais
 verde.', '100', '400', 'Puma', 'G');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('CAMISA PALMEIRAS AWAY 2022 MASCULINA','A visão de sustentabilidade do Palmeiras busca
                        consolidar o clube como uma organização responsável que gera impacto positivo para a indústria do
                        futebol e toda a sociedade.
A Camisa Palmeiras Away 2022 abraça a causa sustentável e traz uma camisa construída em fio cru, que elimina tinta
 e alvejante do processo produtivo, além de fio reciclado em sua produção.
Pela primeira vez, as camisas terão uma etiqueta com o propósito da PUMA e do Palmeiras de buscar um futuro mais
 verde.', '100', '400', 'Puma', 'GG');
 
 insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('CAMISA PALMEIRAS AWAY 2022 MASCULINA','A visão de sustentabilidade do Palmeiras busca
                        consolidar o clube como uma organização responsável que gera impacto positivo para a indústria do
                        futebol e toda a sociedade.
A Camisa Palmeiras Away 2022 abraça a causa sustentável e traz uma camisa construída em fio cru, que elimina tinta
 e alvejante do processo produtivo, além de fio reciclado em sua produção.
Pela primeira vez, as camisas terão uma etiqueta com o propósito da PUMA e do Palmeiras de buscar um futuro mais
 verde.', '70', '400', 'Puma', 'M');

 insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('CAMISA PALMEIRAS AWAY 2022 MASCULINA','A visão de sustentabilidade do Palmeiras busca
                        consolidar o clube como uma organização responsável que gera impacto positivo para a indústria do
                        futebol e toda a sociedade.
A Camisa Palmeiras Away 2022 abraça a causa sustentável e traz uma camisa construída em fio cru, que elimina tinta
 e alvejante do processo produtivo, além de fio reciclado em sua produção.
Pela primeira vez, as camisas terão uma etiqueta com o propósito da PUMA e do Palmeiras de buscar um futuro mais
 verde.', '50', '400', 'Puma', 'P');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('CAMISA 3 SÃO PAULO FC 20/21','Parte do clássico e despojado terceiro uniforme do São Paulo.
                        Vista esta versão juvenil da camisa de futebol adidas da equipe para compartilhar o mesmo look dos
                        grandes craques em campo. Uma inscrição especial nas costas marca o 90º aniversário do clube.
                        O tecido macio antissuor com um escudo de alta qualidade do time faz dela sua 
                        primeira escolha no guarda-roupa em qualquer ocasião.', '80', '260', 'Adidas', 'G');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('CAMISA 3 SÃO PAULO FC 20/21','Parte do clássico e despojado terceiro uniforme do São Paulo.
                        Vista esta versão juvenil da camisa de futebol adidas da equipe para compartilhar o mesmo look dos
                        grandes craques em campo. Uma inscrição especial nas costas marca o 90º aniversário do clube.
                        O tecido macio antissuor com um escudo de alta qualidade do time faz dela sua 
                        primeira escolha no guarda-roupa em qualquer ocasião.', '100', '260', 'Adidas', 'GG');
 
 insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('CAMISA 3 SÃO PAULO FC 20/21','Parte do clássico e despojado terceiro uniforme do São Paulo.
                        Vista esta versão juvenil da camisa de futebol adidas da equipe para compartilhar o mesmo look dos
                        grandes craques em campo. Uma inscrição especial nas costas marca o 90º aniversário do clube.
                        O tecido macio antissuor com um escudo de alta qualidade do time faz dela sua 
                        primeira escolha no guarda-roupa em qualquer ocasião.', '80', '260', 'Adidas', 'M');
                       
 insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('CAMISA 3 SÃO PAULO FC 20/21','Parte do clássico e despojado terceiro uniforme do São Paulo.
                        Vista esta versão juvenil da camisa de futebol adidas da equipe para compartilhar o mesmo look dos
                        grandes craques em campo. Uma inscrição especial nas costas marca o 90º aniversário do clube.
                        O tecido macio antissuor com um escudo de alta qualidade do time faz dela sua 
                        primeira escolha no guarda-roupa em qualquer ocasião.', '70', '260', 'Adidas', 'P');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa do Corinthians I 22 Stadium Nike - Masculina','Assism como outras camisas
                        da coleção Stadium, a camisa Corinthians 2022/2023 combina detalhes
                        de desing réplica com tecido antissuor para proporcionar um look
                        ideal para jogos, inspirado pelo seu time favorito.', '100', '350', 'Nike', 'G');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa do Corinthians I 22 Stadium Nike - Masculina','Assism como outras camisas
                        da coleção Stadium, a camisa Corinthians 2022/2023 combina detalhes
                        de desing réplica com tecido antissuor para proporcionar um look
                        ideal para jogos, inspirado pelo seu time favorito.', '100', '350', 'Nike', 'GG');
 
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa do Corinthians I 22 Stadium Nike - Masculina','Assism como outras camisas
                        da coleção Stadium, a camisa Corinthians 2022/2023 combina detalhes
                        de desing réplica com tecido antissuor para proporcionar um look
                        ideal para jogos, inspirado pelo seu time favorito.', '100', '350', 'Nike', 'M');
  
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa do Corinthians I 22 Stadium Nike - Masculina','Assism como outras camisas
                        da coleção Stadium, a camisa Corinthians 2022/2023 combina detalhes
                        de desing réplica com tecido antissuor para proporcionar um look
                        ideal para jogos, inspirado pelo seu time favorito.', '50', '350', 'Nike', 'P');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Umbro Fluminense I 2022','Eterno amor! A Umbro apresenta a nova armadura 
                        titular do Tricolor das Laranjeiras para a temporada 2022, o manto que celebra os 120 anos
                        de fundação do clube. O novo traje traz o tradicional design listrado, além de selo em
                        referência à idade comemorada.', '100', '250', 'Umbro', 'G');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Umbro Fluminense I 2022','Eterno amor! A Umbro apresenta a nova armadura 
                        titular do Tricolor das Laranjeiras para a temporada 2022, o manto que celebra os 120 anos
                        de fundação do clube. O novo traje traz o tradicional design listrado, além de selo em
                        referência à idade comemorada.', '100', '250', 'Umbro', 'GG');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Umbro Fluminense I 2022','Eterno amor! A Umbro apresenta a nova armadura 
                        titular do Tricolor das Laranjeiras para a temporada 2022, o manto que celebra os 120 anos
                        de fundação do clube. O novo traje traz o tradicional design listrado, além de selo em
                        referência à idade comemorada.', '80', '250', 'Umbro', 'M');

insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
						values    ('Camisa Umbro Fluminense I 2022','Eterno amor! A Umbro apresenta a nova armadura 
                        titular do Tricolor das Laranjeiras para a temporada 2022, o manto que celebra os 120 anos
                        de fundação do clube. O novo traje traz o tradicional design listrado, além de selo em
                        referência à idade comemorada.', '100', '250', 'Umbro', 'P'); 
 
 
 
                                                                                                               