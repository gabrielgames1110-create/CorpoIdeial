/* Conteúdo do site coringa. Troque os textos aqui e as imagens na pasta imagens/ (mesmo nome de arquivo).
   Tudo abaixo é exemplo: nomes, preços, horários e contatos devem ser os do cliente. */
(function () {
  var I = 'imagens/';
  var T = 'tema/';

  function plans(p) {
    return [
      { name: 'Básico', tagline: 'Para começar', taglineIcon: 'rocket', price: p[0],
        features: ['Área de musculação', 'Área de cardio', 'Vestiários e armários'] },
      { name: 'Completo', tagline: 'O mais escolhido', taglineIcon: 'crown', price: p[1], featured: true, badge: 'Popular',
        features: ['Tudo do Básico', 'Aulas coletivas', 'Treino funcional', 'Avaliação física'] },
      { name: 'Premium', tagline: 'Acompanhamento total', taglineIcon: 'gem', price: p[2],
        features: ['Tudo do Completo', 'Consulta com nutricionista', 'Acompanhamento personalizado'] }
    ];
  }

  window.FL_DATA = {
    brand: {
      name: 'Academia Corpo Ideal',
      tagline: 'Academia & centro de treinamento',
      logo: I + 'logo.png',
      logoHeight: 60,
      logoFooterHeight: 80,
      phone: '(00) 00000-0000',
      phoneHref: 'tel:+5500000000000',
      email: 'contato@suaacademia.com.br',
      address: 'Rua Exemplo, 123 · Bairro · Cidade/UF',
      instagram: '#',
      facebook: '#'
    },
    hero: {
      description: 'Mais do que uma academia, somos uma comunidade que motiva você a se tornar a melhor versão de você.'
    },
    images: {
      hero: I + '01-hero.jpg',
      hours: I + '12-horarios.jpg',
      brushTop: T + 'pincel-topo.png',
      brushSide: T + 'pincel-lateral.png'
    },
    nav: [
      { label: 'Início', href: '#inicio' },
      { label: 'Estrutura', href: '#estrutura' },
      { label: 'Equipe', href: '#equipe' },
      { label: 'Planos', href: '#planos' },
      { label: 'Horários', href: '#horarios' },
      { label: 'Contato', href: '#contato' }
    ],
    features: [
      { icon: 'dumbbell', label: 'Equipamentos modernos' },
      { icon: 'award', label: 'Profissionais qualificados' },
      { icon: 'heart-pulse', label: 'Acompanhamento personalizado' },
      { icon: 'users', label: 'Ambiente motivador' }
    ],
    amenities: [
      { title: 'Musculação', icon: 'dumbbell', image: I + '02-musculacao.jpg', description: 'Pesos livres e máquinas para todos os níveis.' },
      { title: 'Cardio', icon: 'heart-pulse', image: I + '03-cardio.jpg', description: 'Esteiras e bikes para condicionamento e resistência.' },
      { title: 'Treino funcional', icon: 'flame', image: I + '04-funcional.jpg', description: 'Espaço livre para circuitos e treinos funcionais.' },
      { title: 'Aulas coletivas', icon: 'users', image: I + '05-aulas-coletivas.jpg', description: 'Aulas em grupo para treinar com energia e companhia.' },
      { title: 'Vestiários e armários', icon: 'lock', image: I + '06-vestiarios.jpg', description: 'Vestiários limpos e armários para seus pertences.' },
      { title: 'Recepção', icon: 'coffee', image: I + '07-recepcao.jpg', description: 'Atendimento acolhedor, café e bebidas geladas.' }
    ],
    team: [
      { name: 'Rafael Costa', role: 'Personal trainer', meta: 'CREF 000000-G/UF', photo: I + '08-equipe-personal.jpg',
        social: [{ network: 'instagram', href: '#' }] },
      { name: 'Juliana Alves', role: 'Professora de musculação', meta: 'CREF 000000-G/UF', photo: I + '09-equipe-professora.jpg',
        social: [{ network: 'instagram', href: '#' }] },
      { name: 'Mariana Rocha', role: 'Nutricionista', meta: 'CRN 00000', photo: I + '10-equipe-nutricionista.jpg',
        social: [{ network: 'instagram', href: '#' }] },
      { name: 'Lucas Pereira', role: 'Recepcionista', meta: 'Atendimento e matrículas', photo: I + '11-equipe-recepcionista.jpg' }
    ],
    hours: [
      { day: 'Segunda a sexta', times: ['06:00 às 22:00'] },
      { day: 'Sábado', times: ['08:00 às 14:00'] },
      { day: 'Domingo e feriados', times: ['08:00 às 12:00'] }
    ],
    planGroups: [
      { id: 'mensal', label: 'Mensal', note: 'Plano mensal, renovado todo mês.', plans: plans(['99', '139', '189']) },
      { id: 'semestral', label: 'Semestral', note: 'Valor por mês no plano semestral (6 meses).', plans: plans(['89', '129', '169']) },
      { id: 'anual', label: 'Anual', note: 'Valor por mês no plano anual (12 meses).', plans: plans(['79', '119', '149']) }
    ]
  };
})();
