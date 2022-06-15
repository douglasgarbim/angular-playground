import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  rules = [
    {
      id: 1,
      desc: 'Usando a API do Github, devem ser listados todos os projetos públicos da globo.com.'
    },
    {
      id: 2,
      desc: 'Os projetos devem ser ordenados por stars de forma decrescente.'
    },
    {
      id: 3,
      desc: 'No clique desses projetos, devem ser exibidos:',
      sub: [
        {
          id: 1,
          desc: 'Nome do projeto'
        },
        {
          id: 2,
          desc: 'Número de stars'
        },
        {
          id: 3,
          desc: 'Número de forks'
        },
        {
          id: 4,
          desc: 'Lista de commits'
        }
      ]
    },
    {
      id: 4,
      desc: 'Os commits dos projetos devem ser paginados de 20 em 20.'
    },
    {
      id: 5,
      desc: 'Deverá haver um botão ao final da página para que sejam carregados mais 20 commits a cada clique.'
    },
    {
      id: 6,
      desc: 'O botão deverá ser ocultado quando não houver mais commits a serem carregados.'
    },
    {
      id: 7,
      desc: 'O layout é livre, sendo mandatório:',
      sub: [
        {
          id: 1,
          desc: 'Haver duas colunas: a da esquerda (azul) deverá conter a lista de projetos. A da direita (branca) deverá conter as informações de cada projeto'
        },
        {
          id: 2,
          desc: 'O layout deve ficar centralizado e o restante de tela que sobrar a esquerda deve ser preenchido com a cor azul e a direita com a cor branca'
        },
      ]
    },
    {
      id: 8,
      desc: 'As URLs de navegação do projeto devem seguir os seguintes requisitos:',
      sub: [
        {
          id: 1,
          desc: '/projetos: lista com todos os projetos'
        },
        {
          id: 2,
          desc: '/projetos/{nome_do_projeto}: detalhes do projeto'
        },
      ]
    }
  ];
}
