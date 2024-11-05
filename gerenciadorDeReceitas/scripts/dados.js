const receitas = [
    // Categoria: Bolos
    {
        id:1,
        categoria:"bolos",
        nome: "bolo de cenoura",
        ingredientes: [
            { ingrediente: "Cenoura", quantidade: "3 unidades", idIngrediente:1 },
            { ingrediente: "Farinha de trigo", quantidade: "2 xícaras" , idIngrediente:2},
            { ingrediente: "Ovos", quantidade: "3 unidades", idIngrediente:3 },
            { ingrediente: "Açúcar", quantidade: "2 xícaras", idIngrediente:4 },
            { ingrediente: "Óleo", quantidade: "1/2 xícara" , idIngrediente:5},
            { ingrediente: "Fermento", quantidade: "1 colher de sopa" , idIngrediente:6}
        ],
        tempo: "45 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Bata a cenoura, ovos, açúcar e óleo no liquidificador. Adicione a farinha e o fermento. Leve ao forno por 40 minutos."
    },
    {
        id:2,
        categoria:"bolos",
        nome: "bolo de chocolate",
        ingredientes: [
            { ingrediente: "Farinha de trigo", quantidade: "2 xícaras" , idIngrediente:2},
            { ingrediente: "Ovos", quantidade: "4 unidades" , idIngrediente:3},
            { ingrediente: "Açúcar", quantidade: "2 xícaras" },
            { ingrediente: "Manteiga", quantidade: "1/2 xícara" },
            { ingrediente: "Leite", quantidade: "1 xícara" },
            { ingrediente: "Chocolate em pó", quantidade: "1 xícara" }
        ],
        tempo: "50 minutos",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Misture os ingredientes, bata na batedeira, coloque em uma forma untada e leve ao forno por 50 minutos."
    },
    {
        id:3,
        categoria:"bolos",
        nome: "bolo de fubá",
        ingredientes: [
            { ingrediente: "Fubá", quantidade: "1 xícara" },
            { ingrediente: "Farinha de trigo", quantidade: "1 xícara" },
            { ingrediente: "Ovos", quantidade: "3 unidades" },
            { ingrediente: "Açúcar", quantidade: "1 xícara" },
            { ingrediente: "Óleo", quantidade: "1/2 xícara" },
            { ingrediente: "Fermento", quantidade: "1 colher de sopa" }
        ],
        tempo: "40 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Misture os ingredientes no liquidificador, adicione o fermento, e asse em forno pré-aquecido por 40 minutos."
    },
    {
        id:4,
        categoria:"bolos",
        nome: "bolo de laranja",
        ingredientes: [
            { ingrediente: "Farinha de trigo", quantidade: "2 xícaras" },
            { ingrediente: "Açúcar", quantidade: "2 xícaras" },
            { ingrediente: "Ovos", quantidade: "3 unidades" },
            { ingrediente: "Suco de laranja", quantidade: "1 xícara" },
            { ingrediente: "Óleo", quantidade: "1/2 xícara" },
            { ingrediente: "Fermento", quantidade: "1 colher de sopa" }
        ],
        tempo: "50 minutos",
        dificuldade: [1, 2], // Fácil a Médio
        modoPreparo: "Misture tudo no liquidificador, adicione a farinha e o fermento e asse em forno médio por 50 minutos."
    },
    {
        id:5,
        categoria:"bolos",
        nome: "bolo de milho",
        ingredientes: [
            { ingrediente: "Milho verde", quantidade: "2 latas" },
            { ingrediente: "Farinha de trigo", quantidade: "1 xícara" },
            { ingrediente: "Ovos", quantidade: "3 unidades" },
            { ingrediente: "Leite condensado", quantidade: "1 lata" },
            { ingrediente: "Óleo", quantidade: "1/2 xícara" },
            { ingrediente: "Fermento", quantidade: "1 colher de sopa" }
        ],
        tempo: "55 minutos",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Bata o milho, ovos, leite condensado e óleo no liquidificador. Adicione a farinha e o fermento e asse por 55 minutos."
    },

    // Categoria: Doces
    {
        id:6,
        categoria:"doces",
        nome: "brigadeiro",
        ingredientes: [
            { ingrediente: "Leite condensado", quantidade: "1 lata" },
            { ingrediente: "Chocolate em pó", quantidade: "2 colheres de sopa" },
            { ingrediente: "Manteiga", quantidade: "1 colher de sopa" },
            { ingrediente: "Granulado", quantidade: "A gosto" }
        ],
        tempo: "20 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Misture o leite condensado, o chocolate e a manteiga em uma panela. Cozinhe até desgrudar do fundo. Enrole e passe no granulado."
    },
    {
        id:7,
        categoria:"doces",
        nome: "beijinho",
        ingredientes: [
            { ingrediente: "Leite condensado", quantidade: "1 lata" },
            { ingrediente: "Coco ralado", quantidade: "100g" },
            { ingrediente: "Manteiga", quantidade: "1 colher de sopa" },
            { ingrediente: "Açúcar", quantidade: "Para enrolar" }
        ],
        tempo: "20 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Misture o leite condensado, o coco e a manteiga. Cozinhe até desgrudar do fundo da panela. Enrole e passe no açúcar."
    },
    {
        id:8,
        categoria:"doces",
        nome: "pudim de leite",
        ingredientes: [
            { ingrediente: "Leite condensado", quantidade: "1 lata" },
            { ingrediente: "Leite", quantidade: "2 latas (medida do leite condensado)" },
            { ingrediente: "Ovos", quantidade: "3 unidades" },
            { ingrediente: "Açúcar", quantidade: "1 xícara (para calda)" }
        ],
        tempo: "1 hora e 30 minutos",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Bata o leite condensado, leite e ovos no liquidificador. Faça a calda com o açúcar, despeje na forma e asse o pudim em banho-maria por 1h30."
    },
    {
        id:9,
        categoria:"doces",
        nome: "mousse de maracujá",
        ingredientes: [
            { ingrediente: "Leite condensado", quantidade: "1 lata" },
            { ingrediente: "Creme de leite", quantidade: "1 lata" },
            { ingrediente: "Suco de maracujá", quantidade: "1 xícara" }
        ],
        tempo: "15 minutos + geladeira",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Bata todos os ingredientes no liquidificador e leve à geladeira por 2 horas antes de servir."
    },
    {
        id:10,
        categoria:"doces",
        nome: "doce de abóbora",
        ingredientes: [
            { ingrediente: "Abóbora", quantidade: "1 kg" },
            { ingrediente: "Açúcar", quantidade: "500g" },
            { ingrediente: "Canela em pau", quantidade: "1 unidade" },
            { ingrediente: "Cravo-da-índia", quantidade: "5 unidades" }
        ],
        tempo: "1 hora",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Cozinhe a abóbora com o açúcar, a canela e os cravos até desmanchar. Deixe esfriar e sirva."
    },
    {
        id:11,
        categoria:"sopas",
        nome: "sopa de legumes",
        ingredientes: [
            { ingrediente: "Batata", quantidade: "2 unidades" },
            { ingrediente: "Cenoura", quantidade: "2 unidades" },
            { ingrediente: "Chuchu", quantidade: "1 unidade" },
            { ingrediente: "Cebola", quantidade: "1 unidade" },
            { ingrediente: "Caldo de legumes", quantidade: "1 tablete" }
        ],
        tempo: "40 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Cozinhe todos os legumes em água com o caldo. Depois de cozidos, bata no liquidificador e sirva."
    },
    {
        id:12,
        categoria:"sopas",
        nome: "sopa de ervilha",
        ingredientes: [
            { ingrediente: "Ervilha seca", quantidade: "500g" },
            { ingrediente: "Calabresa", quantidade: "1 unidade" },
            { ingrediente: "Cebola", quantidade: "1 unidade" },
            { ingrediente: "Alho", quantidade: "2 dentes" },
            { ingrediente: "Caldo de carne", quantidade: "1 tablete" }
        ],
        tempo: "1 hora",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Cozinhe a ervilha em água com o caldo de carne. Em outra panela, refogue a calabresa, a cebola e o alho. Junte tudo e sirva."
    },
    {
        id:13,
        categoria:"sopas",
        nome: "sopa de feijão",
        ingredientes: [
            { ingrediente: "Feijão cozido", quantidade: "2 xícaras" },
            { ingrediente: "Batata", quantidade: "2 unidades" },
            { ingrediente: "Cenoura", quantidade: "1 unidade" },
            { ingrediente: "Cebola", quantidade: "1 unidade" },
            { ingrediente: "Caldo de carne", quantidade: "1 tablete" }
        ],
        tempo: "50 minutos",
        dificuldade: [1, 2], // Fácil a Médio
        modoPreparo: "Bata o feijão cozido no liquidificador. Cozinhe os legumes em outra panela e depois misture com o feijão batido."
    },
    {
        id:14,
        categoria:"sopas",
        nome: "caldo verde",
        ingredientes: [
            { ingrediente: "Couve", quantidade: "5 folhas" },
            { ingrediente: "Batata", quantidade: "4 unidades" },
            { ingrediente: "Calabresa", quantidade: "1 unidade" },
            { ingrediente: "Cebola", quantidade: "1 unidade" },
            { ingrediente: "Alho", quantidade: "2 dentes" }
        ],
        tempo: "1 hora",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Cozinhe as batatas e bata no liquidificador. Em outra panela, refogue a calabresa, a cebola e o alho. Misture com o creme de batata e adicione a couve fatiada."
    },
    {
        id:15,
        categoria:"sopas",
        nome: "sopa de abóbora",
        ingredientes: [
            { ingrediente: "Abóbora", quantidade: "1 kg" },
            { ingrediente: "Cebola", quantidade: "1 unidade" },
            { ingrediente: "Alho", quantidade: "2 dentes" },
            { ingrediente: "Caldo de legumes", quantidade: "1 tablete" },
            { ingrediente: "Creme de leite", quantidade: "200 ml" }
        ],
        tempo: "40 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Cozinhe a abóbora com o caldo. Bata no liquidificador. Refogue a cebola e o alho e junte ao creme de abóbora. Finalize com o creme de leite."
    },

    // Categoria: Carnes
    {
        id:16,
        categoria:"carnes",
        nome: "estrogonofe de frango",
        ingredientes: [
            { ingrediente: "Peito de frango", quantidade: "500g" },
            { ingrediente: "Creme de leite", quantidade: "200 ml" },
            { ingrediente: "Molho de tomate", quantidade: "2 colheres de sopa" },
            { ingrediente: "Champignon", quantidade: "100g" },
            { ingrediente: "Cebola", quantidade: "1 unidade" }
        ],
        tempo: "30 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Refogue o frango e a cebola. Adicione o molho de tomate, o creme de leite e o champignon. Cozinhe por mais 10 minutos."
    },
    {
        id:17,
        categoria:"carnes",
        nome: "carne assada",
        ingredientes: [
            { ingrediente: "Picanha", quantidade: "1 peça" },
            { ingrediente: "Alho", quantidade: "5 dentes" },
            { ingrediente: "Sal grosso", quantidade: "A gosto" },
            { ingrediente: "Azeite", quantidade: "2 colheres de sopa" },
            { ingrediente: "Pimenta-do-reino", quantidade: "A gosto" }
        ],
        tempo: "2 horas",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Tempere a carne com sal, alho e pimenta. Coloque em uma assadeira e regue com azeite. Leve ao forno por 2 horas."
    },
    {
        id:18,
        categoria:"carnes",
        nome: "bife à parmegiana",
        ingredientes: [
            { ingrediente: "Filé de carne", quantidade: "500g" },
            { ingrediente: "Molho de tomate", quantidade: "2 xícaras" },
            { ingrediente: "Queijo muçarela", quantidade: "200g" },
            { ingrediente: "Farinha de rosca", quantidade: "1 xícara" },
            { ingrediente: "Ovo", quantidade: "2 unidades" }
        ],
        tempo: "50 minutos",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Empane os bifes no ovo e farinha de rosca. Frite e cubra com o molho de tomate e o queijo. Leve ao forno para gratinar."
    },
    {
        id:19,
        categoria:"carnes",
        nome: "picadinho de carne",
        ingredientes: [
            { ingrediente: "Carne em cubos", quantidade: "500g" },
            { ingrediente: "Cebola", quantidade: "1 unidade" },
            { ingrediente: "Alho", quantidade: "2 dentes" },
            { ingrediente: "Tomate", quantidade: "2 unidades" },
            { ingrediente: "Pimentão", quantidade: "1 unidade" }
        ],
        tempo: "40 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Refogue a carne com cebola e alho. Adicione o tomate e o pimentão. Cozinhe até a carne ficar macia."
    },
    {
        id:20,
        categoria:"carnes",
        nome: "frango à passarinho",
        ingredientes: [
            { ingrediente: "Coxinhas de frango", quantidade: "1 kg" },
            { ingrediente: "Alho", quantidade: "4 dentes" },
            { ingrediente: "Limão", quantidade: "1 unidade" },
            { ingrediente: "Sal", quantidade: "A gosto" },
            { ingrediente: "Pimenta-do-reino", quantidade: "A gosto" }
        ],
        tempo: "45 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Tempere o frango com alho, limão, sal e pimenta. Frite em óleo quente até dourar."
    },

    // Categoria: Assados
    {
        id:21,
        categoria:"assados",
        nome: "frango assado",
        ingredientes: [
            { ingrediente: "Frango inteiro", quantidade: "1 unidade" },
            { ingrediente: "Alho", quantidade: "5 dentes" },
            { ingrediente: "Limão", quantidade: "2 unidades" },
            { ingrediente: "Sal", quantidade: "A gosto" },
            { ingrediente: "Azeite", quantidade: "2 colheres de sopa" }
        ],
        tempo: "2 horas",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Tempere o frango com alho, limão, sal e azeite. Leve ao forno por 2 horas até dourar."
    },
    {
        id:22,
        categoria:"assados",
        nome: "lasanha de carne",
        ingredientes: [
            { ingrediente: "Massa de lasanha", quantidade: "500g" },
            { ingrediente: "Carne moída", quantidade: "500g" },
            { ingrediente: "Molho de tomate", quantidade: "2 xícaras" },
            { ingrediente: "Queijo muçarela", quantidade: "300g" },
            { ingrediente: "Presunto", quantidade: "200g" }
        ],
        tempo: "1 hora",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Monte camadas de massa, carne, molho e queijo. Asse por 40 minutos em forno médio."
    },
    {
        id:23,
        categoria:"assados",
        nome: "batata gratinada",
        ingredientes: [
            { ingrediente: "Batata", quantidade: "1 kg" },
            { ingrediente: "Creme de leite", quantidade: "200 ml" },
            { ingrediente: "Queijo parmesão", quantidade: "100g" },
            { ingrediente: "Manteiga", quantidade: "2 colheres de sopa" },
            { ingrediente: "Sal", quantidade: "A gosto" }
        ],
        tempo: "1 hora",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Cozinhe as batatas, corte em fatias e monte camadas com creme de leite e queijo. Asse até gratinar."
    },
    {
        id:24,
        categoria:"assados",
        nome: "costelinha assada",
        ingredientes: [
            { ingrediente: "Costelinha de porco", quantidade: "1 kg" },
            { ingrediente: "Alho", quantidade: "4 dentes" },
            { ingrediente: "Sal", quantidade: "A gosto" },
            { ingrediente: "Molho barbecue", quantidade: "A gosto" }
        ],
        tempo: "2 horas",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Tempere a costelinha com alho e sal. Asse por 2 horas, pincele com molho barbecue nos últimos 30 minutos."
    },
    {
        id:25,
        categoria:"assados",
        nome: "pernil assado",
        ingredientes: [
            { ingrediente: "Pernil de porco", quantidade: "2 kg" },
            { ingrediente: "Alho", quantidade: "6 dentes" },
            { ingrediente: "Vinho branco", quantidade: "1 xícara" },
            { ingrediente: "Sal", quantidade: "A gosto" },
            { ingrediente: "Azeite", quantidade: "3 colheres de sopa" }
        ],
        tempo: "4 horas",
        dificuldade: [3], // 3 = Difícil
        modoPreparo: "Tempere o pernil com alho, vinho, sal e azeite. Deixe marinar por 12 horas e asse por 4 horas em fogo baixo."
    },

    // Categoria: Massas
    {
        id:26,
        categoria:"massas",
        nome: "macarrão à bolonhesa",
        ingredientes: [
            { ingrediente: "Macarrão", quantidade: "500g" },
            { ingrediente: "Carne moída", quantidade: "300g" },
            { ingrediente: "Molho de tomate", quantidade: "2 xícaras" },
            { ingrediente: "Cebola", quantidade: "1 unidade" },
            { ingrediente: "Alho", quantidade: "2 dentes" }
        ],
        tempo: "30 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Cozinhe o macarrão e refogue a carne com a cebola e o alho. Misture o molho e sirva com o macarrão."
    },
    {
        id:27,
        categoria:"massas",
        nome: "ravioli de queijo",
        ingredientes: [
            { ingrediente: "Ravioli de queijo", quantidade: "500g" },
            { ingrediente: "Manteiga", quantidade: "2 colheres de sopa" },
            { ingrediente: "Sálvia", quantidade: "5 folhas" },
            { ingrediente: "Parmesão ralado", quantidade: "A gosto" }
        ],
        tempo: "20 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Cozinhe o ravioli e reserve. Derreta a manteiga e frite a sálvia. Sirva o ravioli com a manteiga e o parmesão."
    },
    {
        id:28,
        categoria:"massas",
        nome: "nhoque de batata",
        ingredientes: [
            { ingrediente: "Batata", quantidade: "1 kg" },
            { ingrediente: "Farinha de trigo", quantidade: "2 xícaras" },
            { ingrediente: "Ovo", quantidade: "1 unidade" },
            { ingrediente: "Sal", quantidade: "A gosto" },
            { ingrediente: "Molho de tomate", quantidade: "2 xícaras" }
        ],
        tempo: "1 hora",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Cozinhe as batatas e amasse. Misture com o ovo e a farinha até formar uma massa. Cozinhe os nhoques e sirva com molho de tomate."
    },
    {
        id:29,
        categoria:"massas",
        nome: "talharim ao pesto",
        ingredientes: [
            { ingrediente: "Talharim", quantidade: "500g" },
            { ingrediente: "Manjericão", quantidade: "1 xícara" },
            { ingrediente: "Azeite", quantidade: "1/2 xícara" },
            { ingrediente: "Queijo parmesão", quantidade: "100g" },
            { ingrediente: "Alho", quantidade: "2 dentes" }
        ],
        tempo: "25 minutos",
        dificuldade: [1], // 1 = Fácil
        modoPreparo: "Cozinhe o talharim. Bata o manjericão, azeite, alho e parmesão no liquidificador. Misture com o talharim cozido."
    },
    {
        id:30,
        categoria:"massas",
        nome: "lasagna de espinafre",
        ingredientes: [
            { ingrediente: "Massa de lasanha", quantidade: "500g" },
            { ingrediente: "Espinafre", quantidade: "2 maços" },
            { ingrediente: "Ricota", quantidade: "300g" },
            { ingrediente: "Molho branco", quantidade: "2 xícaras" },
            { ingrediente: "Queijo parmesão", quantidade: "100g" }
        ],
        tempo: "1 hora",
        dificuldade: [2], // 2 = Médio
        modoPreparo: "Monte camadas de massa, espinafre, ricota e molho branco. Asse por 40 minutos e finalize com o parmesão."
    }

    // Outras categorias seguem o mesmo padrão...
];
