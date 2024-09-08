let dados = [
    
    {
        "titulo": "Attack on Titan",
        "genero": "Ação, Aventura, Drama, Fantasia, Mistério",
        "resumo": "Attack on Titan é uma série de anime e mangá que se passa em um mundo onde a humanidade vive dentro de muralhas gigantes para se proteger dos Titãs, criaturas gigantes que devoram humanos. A história segue Eren Yeager e seus amigos, Mikasa e Armin, enquanto eles se juntam à tropa de exploração para combater os Titãs e desvendar os segredos por trás de sua existência e a origem das muralhas.",
        "link": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/attack-on-titan"
    },
    {
        "titulo": "Bleach",
        "genero": "Ação, Aventura, Sobrenatural, Fantasia",
        "resumo": "Bleach segue Ichigo Kurosaki, um adolescente que ganha os poderes de um Ceifador de Almas após um encontro com uma ceifadora de almas chamada Rukia Kuchiki. Agora com habilidades sobrenaturais, Ichigo deve proteger os vivos dos espíritos malignos e guiar as almas dos mortos para o além.",
        "link": "https://pt.wikipedia.org/wiki/Bleach_(anime)",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/bleach"
    },
    {
        "titulo": "Boruto: Naruto Next Generations",
        "genero": "Ação, Aventura, Fantasia, Shounen",
        "resumo": "Boruto é a continuação da popular série Naruto, focando na nova geração de ninjas. A história segue Boruto Uzumaki, o filho de Naruto, enquanto ele lida com os desafios de ser um jovem ninja em um mundo que mudou muito desde a era de seu pai.",
        "link": "https://pt.wikipedia.org/wiki/Boruto:_Naruto_Next_Generations",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/boruto-naruto-next-generations"
    },
    {
        "titulo": "Clannad",
        "genero": "Drama, Romance, Slice of Life",
        "resumo": "Clannad é uma história comovente sobre a vida de Tomoya Okazaki e sua jornada através da escola e da vida familiar. Ele conhece várias pessoas e enfrenta diversos desafios enquanto busca um propósito e tenta mudar o curso de sua vida.",
        "link": "https://pt.wikipedia.org/wiki/Clannad",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/clannad"
    },
    {
        "titulo": "Cowboy Bebop",
        "genero": "Ação, Aventura, Ficção Científica, Neo-noir",
        "resumo": "Cowboy Bebop segue um grupo de caçadores de recompensas viajantes espaciais em um futuro distópico. Cada membro da tripulação do Bebop tem um passado misterioso e a série mistura elementos de ficção científica, ação e jazz em uma narrativa envolvente.",
        "link": "https://pt.wikipedia.org/wiki/Cowboy_Bebop",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/cowboy-bebop"
    },
    {
        "titulo": "Death Note",
        "genero": "Mistério, Psicológico, Sobrenatural, Thriller",
        "resumo": "Death Note é a história de Light Yagami, um estudante que encontra um caderno que lhe permite matar qualquer pessoa apenas escrevendo o nome dela. Com o poder nas mãos, ele tenta criar um mundo perfeito, mas logo se vê em uma luta mental com um misterioso detetive conhecido apenas como L.",
        "link": "https://pt.wikipedia.org/wiki/Death_Note",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/death-note"
    },
    {
        "titulo": "Demon Slayer: Kimetsu no Yaiba",
        "genero": "Ação, Aventura, Fantasia, Sobrenatural",
        "resumo": "Demon Slayer segue Tanjiro Kamado, um jovem que se torna um caçador de demônios após sua família ser massacrada por demônios e sua irmã transformada em uma dessas criaturas. A série é conhecida por suas cenas de ação impressionantes e animação de alta qualidade.",
        "link": "https://pt.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/demon-slayer"
    },
    {
        "titulo": "Dragon Ball",
        "genero": "Ação, Aventura, Fantasia, Artes Marciais",
        "resumo": "Dragon Ball segue as aventuras de Goku desde sua infância até a idade adulta, enquanto ele busca as Esferas do Dragão e enfrenta vários adversários poderosos. A série é famosa por suas batalhas épicas e desenvolvimento de personagens.",
        "link": "https://pt.wikipedia.org/wiki/Dragon_Ball",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/dragon-ball"
    },
    {
        "titulo": "Dragon Ball Super",
        "genero": "Ação, Aventura, Fantasia, Artes Marciais",
        "resumo": "Dragon Ball Super é a sequência de Dragon Ball Z e continua a saga de Goku e seus amigos enquanto enfrentam novos inimigos e desafios em um universo mais vasto. A série introduz novas formas de poder e universos paralelos.",
        "link": "https://pt.wikipedia.org/wiki/Dragon_Ball_Super",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/dragon-ball-super"
    },
    {
        "titulo": "Dragon Ball Z",
        "genero": "Ação, Aventura, Fantasia, Artes Marciais",
        "resumo": "Dragon Ball Z é a sequência de Dragon Ball e continua as aventuras de Goku enquanto ele enfrenta inimigos ainda mais poderosos e protege a Terra de ameaças cósmicas. A série é conhecida por suas batalhas intensas e transformações épicas.",
        "link": "https://pt.wikipedia.org/wiki/Dragon_Ball_Z",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/dragon-ball-z"
    },
    {
        "titulo": "Fairy Tail",
        "genero": "Ação, Aventura, Fantasia, Magia",
        "resumo": "Fairy Tail segue Natsu Dragneel e seus amigos da guilda Fairy Tail enquanto eles embarcam em aventuras mágicas e enfrentam vários desafios. A série é conhecida por sua ênfase na amizade e batalhas mágicas.",
        "link": "https://pt.wikipedia.org/wiki/Fairy_Tail",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/fairy-tail"
    },
    {
        "titulo": "Fate/Stay Night",
        "genero": "Ação, Fantasia, Sobrenatural",
        "resumo": "Fate/Stay Night é ambientado em uma batalha secreta entre magos e seus servos, heróis lendários de diversas eras, para obter o Santo Graal. A série explora temas de destino, magia e guerra.",
        "link": "https://pt.wikipedia.org/wiki/Fate/stay_night",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/fate-stay-night"
    },
    {
        "titulo": "Fullmetal Alchemist",
        "genero": "Ação, Aventura, Fantasia, Drama",
        "resumo": "Fullmetal Alchemist segue os irmãos Edward e Alphonse Elric em sua busca para restaurar seus corpos após uma tentativa falha de usar alquimia para reviver sua mãe. A série mistura aventura, filosofia e uma trama profunda.",
        "link": "https://pt.wikipedia.org/wiki/Fullmetal_Alchemist",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/fullmetal-alchemist"
    },
    {
        "titulo": "Fullmetal Alchemist: Brotherhood",
        "genero": "Ação, Aventura, Fantasia, Drama",
        "resumo": "Fullmetal Alchemist: Brotherhood é uma adaptação mais fiel do mangá comparada à versão anterior. A série segue os irmãos Elric em sua jornada para restaurar seus corpos e enfrentar uma conspiração maior envolvendo a alquimia.",
        "link": "https://pt.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/fullmetal-alchemist-brotherhood"
    },
    {
        "titulo": "Gintama",
        "genero": "Ação, Comédia, Drama, Paródia",
        "resumo": "Gintama é uma série que mistura comédia e ação, seguindo Gintoki Sakata, um samurai preguiçoso em um mundo alternativo onde extraterrestres dominam o Japão. A série é conhecida por seu humor irreverente e referências à cultura pop.",
        "link": "https://pt.wikipedia.org/wiki/Gintama",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/gintama"
    },
    {
        "titulo": "Hellsing",
        "genero": "Ação, Horror, Sobrenatural, Vampiros",
        "resumo": "Hellsing segue a organização Hellsing, que luta contra criaturas sobrenaturais, incluindo vampiros. A série é centrada no vampiro Alucard, que trabalha para proteger a Inglaterra de ameaças sobrenaturais.",
        "link": "https://pt.wikipedia.org/wiki/Hellsing",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/hellsing"
    },
    {
        "titulo": "Hunter x Hunter",
        "genero": "Ação, Aventura, Fantasia, Shounen",
        "resumo": "Hunter x Hunter segue Gon Freecss, um jovem que se torna um Hunter para encontrar seu pai, um renomado Hunter. A série é conhecida por suas complexas estratégias de batalha e desenvolvimento profundo de personagens.",
        "link": "https://pt.wikipedia.org/wiki/Hunter_x_Hunter",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/hunter-x-hunter"
    },
    {
        "titulo": "JoJo's Bizarre Adventure",
        "genero": "Ação, Aventura, Fantasia, Superpoderes",
        "resumo": "JoJo's Bizarre Adventure é uma série que segue a saga da família Joestar e suas batalhas contra inimigos sobrenaturais. A série é conhecida por seu estilo artístico único e enredos excêntricos.",
        "link": "https://pt.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/jojos-bizarre-adventure"
    },
    {
        "titulo": "Kaguya-sama: Love Is War",
        "genero": "Comédia, Romance, Escolar",
        "resumo": "Kaguya-sama: Love Is War é uma comédia romântica que segue dois estudantes do ensino médio que se amam, mas ambos se recusam a confessar seus sentimentos. A série gira em torno das estratégias elaboradas para fazer o outro confessar primeiro.",
        "link": "https://pt.wikipedia.org/wiki/Kaguya-sama:_Love_Is_War",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/kaguya-sama-love-is-war"
    },
    {
        "titulo": "Kakegurui",
        "genero": "Comédia, Drama, Jogos, Psicologia",
        "resumo": "Kakegurui é ambientado em uma escola de elite onde os alunos competem em jogos de azar para subir na hierarquia social. A protagonista, Yumeko Jabami, é uma nova aluna que adora o risco e desestabiliza o sistema da escola.",
        "link": "https://pt.wikipedia.org/wiki/Kakegurui",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/kakegurui"
    },
    {
        "titulo": "Kill la Kill",
        "genero": "Ação, Comédia, Fantasia, Superpoderes",
        "resumo": "Kill la Kill segue Ryuko Matoi, uma estudante que busca vingança pela morte de seu pai. Ela entra em uma escola dominada por uniformes especiais que concedem superpoderes aos seus usuários e enfrenta vários desafios.",
        "link": "https://pt.wikipedia.org/wiki/Kill_la_Kill",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/kill-la-kill"
    },
    {
        "titulo": "Mob Psycho 100",
        "genero": "Ação, Comédia, Sobrenatural, Psicológico",
        "resumo": "Mob Psycho 100 segue Shigeo 'Mob' Kageyama, um jovem com poderes psíquicos imensos que tenta levar uma vida normal enquanto lida com as consequências de suas habilidades sobrenaturais.",
        "link": "https://pt.wikipedia.org/wiki/Mob_Psycho_100",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/mob-psycho-100"
    },
    {
        "titulo": "My Hero Academia (Boku no Hero Academia)",
        "genero": "Ação, Aventura, Fantasia, Shounen",
        "resumo": "My Hero Academia se passa em um mundo onde a maioria das pessoas possui superpoderes conhecidos como 'Quirks'. A história segue Izuku Midoriya, um jovem sem poderes que sonha em se tornar um herói, e sua jornada para alcançar esse objetivo.",
        "link": "https://pt.wikipedia.org/wiki/My_Hero_Academia",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/my-hero-academia"
    },
    {
        "titulo": "Naruto",
        "genero": "Ação, Aventura, Fantasia, Shounen",
        "resumo": "Naruto segue a jornada de Naruto Uzumaki, um jovem ninja com o sonho de se tornar o Hokage, o líder de sua aldeia. A série explora temas de amizade, superação e a luta contra o preconceito.",
        "link": "https://pt.wikipedia.org/wiki/Naruto",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/naruto"
    },
    {
        "titulo": "Naruto Shippuden",
        "genero": "Ação, Aventura, Fantasia, Shounen",
        "resumo": "Naruto Shippuden é a continuação de Naruto, acompanhando Naruto Uzumaki após seu retorno à aldeia depois de um treinamento intensivo. A série aborda suas batalhas contra inimigos poderosos e a busca por seu amigo Sasuke.",
        "link": "https://pt.wikipedia.org/wiki/Naruto_Shippuden",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/naruto-shippuden"
    },
    {
        "titulo": "Neon Genesis Evangelion",
        "genero": "Ação, Mecha, Psicologia, Drama",
        "resumo": "Neon Genesis Evangelion é uma série sobre a luta da humanidade contra seres misteriosos chamados Anjos usando robôs gigantes conhecidos como Evas. A série é conhecida por sua complexa narrativa psicológica e filosófica.",
        "link": "https://pt.wikipedia.org/wiki/Neon_Genesis_Evangelion",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/neon-genesis-evangelion"
    },
    {
        "titulo": "One Piece",
        "genero": "Ação, Aventura, Fantasia, Shounen",
        "resumo": "One Piece segue Monkey D. Luffy e sua tripulação de piratas em sua busca pelo tesouro lendário conhecido como One Piece. A série é famosa por seu mundo expansivo e personagens carismáticos.",
        "link": "https://pt.wikipedia.org/wiki/One_Piece",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/one-piece"
    },
    {
        "titulo": "One Punch Man",
        "genero": "Ação, Comédia, Superpoderes",
        "resumo": "One Punch Man é a história de Saitama, um herói que pode derrotar qualquer inimigo com um único soco. A série explora sua busca por um desafio digno e a monotonia de ser um herói invencível.",
        "link": "https://pt.wikipedia.org/wiki/One_Punch_Man",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/one-punch-man"
    },
    {
        "titulo": "Overlord",
        "genero": "Ação, Aventura, Fantasia, Isekai",
        "resumo": "Overlord segue um jogador que é transportado para o mundo do jogo que ele estava jogando, agora como seu personagem de jogo, um poderoso mago não-morto. A série foca em sua tentativa de conquistar o novo mundo e encontrar outras pessoas do seu mundo anterior.",
        "link": "https://pt.wikipedia.org/wiki/Overlord_(light_novel)",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/overlord"
    },
    {
        "titulo": "Psycho-Pass",
        "genero": "Ação, Crime, Psicológico, Ficção Científica",
        "resumo": "Psycho-Pass se passa em um futuro onde um sistema de monitoramento pode prever e prevenir crimes antes que aconteçam. A série segue agentes que lidam com criminosos e o sistema que julga suas ações.",
        "link": "https://pt.wikipedia.org/wiki/Psycho-Pass",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/psycho-pass"
    },
    {
        "titulo": "Re:Zero - Starting Life in Another World",
        "genero": "Ação, Aventura, Fantasia, Isekai",
        "resumo": "Re:Zero segue Subaru Natsuki, um jovem que é transportado para um mundo de fantasia e descobre que possui a habilidade de voltar no tempo sempre que morre. A série explora suas tentativas de salvar aqueles que ama e lidar com as consequências de suas ações.",
        "link": "https://pt.wikipedia.org/wiki/Re:_Zero_kara_Hajimeru_Isekai_Seikatsu",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/re-zero-starting-life-in-another-world"
    },
    {
        "titulo": "Sword Art Online",
        "genero": "Ação, Aventura, Fantasia, Isekai",
        "resumo": "Sword Art Online segue Kirito, um jogador preso em um jogo de realidade virtual onde a morte no jogo significa a morte na vida real. A série explora suas aventuras e desafios enquanto tenta escapar do jogo e sobreviver.",
        "link": "https://pt.wikipedia.org/wiki/Sword_Art_Online",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/sword-art-online"
    },
    {
        "titulo": "Steins;Gate",
        "genero": "Ficção Científica, Thriller, Psicológico",
        "resumo": "Steins;Gate segue um grupo de amigos que acidentalmente descobrem uma forma de enviar mensagens de texto para o passado, desencadeando uma série de eventos que ameaçam a linha do tempo e suas próprias vidas.",
        "link": "https://pt.wikipedia.org/wiki/Steins;Gate",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/steins-gate"
    },
    {
        "titulo": "Tokyo Ghoul",
        "genero": "Ação, Horror, Sobrenatural, Drama",
        "resumo": "Tokyo Ghoul segue Ken Kaneki, um jovem que se torna um ghoul após um acidente e deve lidar com sua nova identidade enquanto enfrenta o conflito entre ghouls e humanos.",
        "link": "https://pt.wikipedia.org/wiki/Tokyo_Ghoul",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/tokyo-ghoul"
    },
    {
        "titulo": "Toradora!",
        "genero": "Comédia, Romance, Escolar, Slice of Life",
        "resumo": "Toradora! é uma comédia romântica que segue Ryuuji e Taiga, dois estudantes com personalidades opostas que fazem um pacto para ajudar um ao outro a conquistar seus respectivos interesses amorosos.",
        "link": "https://pt.wikipedia.org/wiki/Toradora!",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/toradora"
    },
    {
        "titulo": "Trigun",
        "genero": "Ação, Aventura, Ficção Científica, Western",
        "resumo": "Trigun segue Vash the Stampede, um pistoleiro com uma enorme recompensa por sua cabeça, que busca evitar conflitos e promover a paz em um mundo pós-apocalíptico com estilo western.",
        "link": "https://pt.wikipedia.org/wiki/Trigun",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/trigun"
    },
    {
        "titulo": "Vinland Saga",
        "genero": "Ação, Aventura, Histórico, Drama",
        "resumo": "Vinland Saga segue Thorfinn, um jovem guerreiro viking que busca vingança contra o homem que matou seu pai. A série é baseada em eventos históricos e explora temas de guerra, honra e vingança.",
        "link": "https://pt.wikipedia.org/wiki/Vinland_Saga",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/vinland-saga"
    },
    {
        "titulo": "Black Clover",
        "genero": "Ação, Aventura, Fantasia, Shounen",
        "resumo": "Black Clover segue Asta, um jovem sem habilidades mágicas em um mundo onde a magia é tudo, que luta para se tornar o Wizard King e superar seus rivais, incluindo seu irmão adotivo Yuno.",
        "link": "https://pt.wikipedia.org/wiki/Black_Clover",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/black-clover"
    },
    {
        "titulo": "Bleach: Thousand-Year Blood War",
        "genero": "Ação, Aventura, Fantasia, Shounen",
        "resumo": "Bleach: Thousand-Year Blood War é a saga final da série Bleach, que segue a batalha entre os Shinigami e os Quincy, uma antiga e poderosa raça de guerreiros. A série encerra a trama com batalhas épicas e revelações importantes.",
        "link": "https://pt.wikipedia.org/wiki/Bleach:_Thousand-Year_Blood_War",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/bleach-thousand-year-blood-war"
    },
    {
        "titulo": "Blue Exorcist (Ao no Exorcist)",
        "genero": "Ação, Fantasia, Sobrenatural, Shounen",
        "resumo": "Blue Exorcist segue Rin Okumura, um adolescente que descobre ser o filho de Satanás e decide se tornar um exorcista para combater o mal e proteger seus entes queridos.",
        "link": "https://pt.wikipedia.org/wiki/Ao_no_Exorcist",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/blue-exorcist"
    },
    {
        "titulo": "Elfen Lied",
        "genero": "Ação, Drama, Horror, Sobrenatural",
        "resumo": "Elfen Lied é a história de Lucy, uma diclonius com poderes telecinéticos que escapa de um laboratório e começa uma jornada violenta e emocional. A série aborda temas de discriminação e violência.",
        "link": "https://pt.wikipedia.org/wiki/Elfen_Lied",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/elfen-lied"
    },
    {
        "titulo": "Great Teacher Onizuka",
        "genero": "Comédia, Drama, Escolar, Slice of Life",
        "resumo": "Great Teacher Onizuka segue Eikichi Onizuka, um ex-motociclista que se torna professor e enfrenta vários desafios para conquistar o respeito e o coração de seus alunos problemáticos.",
        "link": "https://pt.wikipedia.org/wiki/Great_Teacher_Onizuka",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/great-teacher-onizuka"
    },
    {
        "titulo": "Hajime no Ippo",
        "genero": "Ação, Drama, Esportes, Shounen",
        "resumo": "Hajime no Ippo segue Ippo Makunouchi, um jovem que se torna boxeador para encontrar um propósito na vida e superar seus desafios pessoais. A série é conhecida por suas intensas cenas de boxe e desenvolvimento de personagens.",
        "link": "https://pt.wikipedia.org/wiki/Hajime_no_Ippo",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/hajime-no-ippo"
    },
    {
        "titulo": "Howl's Moving Castle (film)",
        "genero": "Animação, Aventura, Fantasia, Romance",
        "resumo": "Howl's Moving Castle é um filme de animação que segue Sophie, uma jovem transformada em uma velha por uma bruxa. Ela se refugia no castelo ambulante de Howl e começa uma jornada mágica para reverter sua maldição.",
        "link": "https://pt.wikipedia.org/wiki/Howl%27s_Moving_Castle",
        "assistirOnline": "https://www.netflix.com/title/60022219"
    },
    {
        "titulo": "Inuyasha",
        "genero": "Ação, Aventura, Fantasia, Romance",
        "resumo": "Inuyasha segue Kagome Higurashi, uma adolescente que é transportada para o Japão feudal e encontra Inuyasha, um meio-demônio. Juntos, eles buscam fragmentos da Joia Shikon enquanto enfrentam vários perigos.",
        "link": "https://pt.wikipedia.org/wiki/Inuyasha",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/inuyasha"
    },
    {
        "titulo": "K-On!",
        "genero": "Comédia, Musical, Escolar, Slice of Life",
        "resumo": "K-On! segue um grupo de garotas do ensino médio que formam uma banda no clube de música da escola. A série é conhecida por seu foco nas atividades cotidianas e no desenvolvimento das amizades.",
        "link": "https://pt.wikipedia.org/wiki/K-On!",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/k-on"
    },
    {
        "titulo": "Made in Abyss",
        "genero": "Aventura, Drama, Fantasia, Mistério",
        "resumo": "Made in Abyss segue Riko, uma jovem que entra no Abismo, um vasto e perigoso poço de profundidade desconhecida, para encontrar sua mãe desaparecida. A série é conhecida por seu tom sombrio e mundo intrigante.",
        "link": "https://pt.wikipedia.org/wiki/Made_in_Abyss",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/made-in-abyss"
    },
    {
        "titulo": "No Game No Life",
        "genero": "Ação, Aventura, Fantasia, Jogos",
        "resumo": "No Game No Life segue Sora e Shiro, irmãos que são transportados para um mundo onde tudo é decidido por jogos. Usando sua inteligência e habilidades, eles tentam conquistar o novo mundo e enfrentar desafios.",
        "link": "https://pt.wikipedia.org/wiki/No_Game_No_Life",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/no-game-no-life"
    },
    {
        "titulo": "The Rising of the Shield Hero",
        "genero": "Ação, Aventura, Fantasia, Isekai",
        "resumo": "The Rising of the Shield Hero segue Naofumi Iwatani, que é transportado para um mundo de fantasia e se torna o Herói do Escudo. Inicialmente desrespeitado e traído, ele deve lutar para ganhar o reconhecimento e proteger o mundo.",
        "link": "https://pt.wikipedia.org/wiki/The_Rising_of_the_Shield_Hero",
        "assistirOnline": "https://www.crunchyroll.com/pt-br/the-rising-of-the-shield-hero"
    },
    {
        "titulo": "Your Name",
        "genero": "Animação, Drama, Romance, Fantasia",
        "resumo": "Your Name segue Taki e Mitsuha, dois adolescentes que começam a trocar de corpos de forma inexplicável. Enquanto tentam entender o fenômeno e encontrar-se, eles enfrentam desafios que afetam suas vidas.",
        "link": "https://pt.wikipedia.org/wiki/Your_Name",
        "assistirOnline": "https://www.amazon.com.br/Your-Name-Takao-Osawa/dp/B079B7GFC4"
    },

    
];
