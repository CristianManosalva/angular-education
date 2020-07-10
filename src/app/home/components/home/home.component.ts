import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  technologies = [
    {
      name: 'Angular',
      version: '10.0.2',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      description: 'Framework para aplicaciones web desarrollado en TypeScript',
    },
    {
      name: 'Flexbox Grid',
      version: '6.3.1',
      picture:
        'https://i1.wp.com/www.silocreativo.com/wp-content/uploads/2017/03/flexbox-cssgrid.png?fit=666%2C370&quality=100&strip=all&ssl=1',
      description:
        'Un sistema de cuadrícula basado en la propiedad flex de visualización.',
    },
    {
      name: 'Moment Js',
      version: '2.27.0',
      picture: 'https://miro.medium.com/max/918/1*s_yRzdt5-339dfl5r_AasQ.png',
      description:
        'Implementa un sistema de manejo de fechas mucho más cómodo que el nativo',
    },
    {
      name: 'A Material',
      version: '10.0.1',
      picture:
        'https://www.digital55.com/wp-content/uploads/2020/02/construir-un-tema-basico-con-angular-material.jpg',
      description: 'Conceptos de Material Design de Google para componentes',
    },
    {
      name: 'Adonis Js',
      version: '4.1',
      picture:
        'https://hackr.io/tutorials/learn-adonis-js/logo/logo-adonis-js?ver=1557508193',
      description: 'La api fue contruida en este framework para nodejs',
    },
    {
      name: 'Vercel',
      version: '2',
      picture: 'https://avatars0.githubusercontent.com/u/14985020?s=280&v=4',
      description: 'Lambda function server less usadas para desplegar la api',
    },
    {
      name: 'Postgresql',
      version: '10.1',
      picture:
        'https://www.softdor.com/blog/wp-content/uploads/2019/03/postgresql-logo.png',
      description: 'Motor de base de datos utilazado',
    },
    {
      name: 'Amazon RDS',
      version: '2.3',
      picture:
        'https://www.parkmycloud.com/wp-content/uploads/Amazon-RDS-1.png',
      description: 'Servicio de Bases de Datos Relacionales de AWS',
    },
    {
      name: '',
      version: '',
      picture: '',
      description: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
