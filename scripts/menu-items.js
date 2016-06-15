//Map markers:
//https://www.google.com/fusiontables/DataSource?dsrcid=308519#map:id=3

items =  [
  {name: 'Музеи',
  subitems: [
    {
      name: 'Художественные музеи',
      //https://www.google.com/fusiontables/data?docid=1nDC4PwehCaXlcrrlAbKaYz4pzs33WnHvhj-kcFJa#rows:id=5
      tableId: '1nDC4PwehCaXlcrrlAbKaYz4pzs33WnHvhj-kcFJa',
      locationColumn: 'Адрес',
      iconName: 'museum',
      layer:  new google.maps.FusionTablesLayer({
        query: {
          select: this.locationColumn,
          from: this.tableId
        }
      })
    },
    {
      name: 'Естественно-научные музеи',
      iconName: 'museum'
    },
    {
      name: 'Литературные музеи',
      iconName: 'museum'
    },
    {
      name: 'Театральные и музыкальные музеи',
      iconName: 'museum'
    },
    {
      name: 'Исторические музеи >',
      has_sub: true,
      subsubitems: [
        {
          name: 'Этнографические и археологические музеи',
          iconName: 'museum'
        },
        {
          name: 'Музеи политической истории и истории религии',
          iconName: 'museum'
        },
        {
          name: 'Музеи истории блокады Ленинграда и Великой Отечественной войны',
          iconName: 'museum'
        },
        {
          name: 'Военно-исторические музеи',
          iconName: 'museum'
        },
        {
          name: 'Историко-бытовые музеи',
          iconName: 'museum'
        }
      ]
    },
    {
      name: 'Музеи-памятники',
      iconName: 'museum'
    }
  ]},
  {name: 'Театры',
  subitems: [
    {
      name: 'Драматические театры',
      iconName: 'arts'
    },
    {
      name: 'Театры оперы и балета',
      iconName: 'arts'
    },
    {
      name: 'Музыкальные театры',
      iconName: 'arts'
    },
    {
      name: 'Театры кукол',
      iconName: 'arts'
    },
    {
      name: 'Театры других жанров',
      iconName: 'arts'
    },
    {
      name: 'Театральные и концертные площадки',
      iconName: 'arts'
    }
  ]},
  {name: 'Парки',
  subitems: [
    {
      name: 'Парки 1',
      iconName: 'parks'
    },
    {
      name: 'Парки 2'
    },
    {
      name: 'Парки 3'
    }
  ]},
  {name: 'Другое',
  subitems: [
    {
      name: 'Аптеки'
    },
    {
      name: 'Точки доступа Wi-Fi'
    },
    {
      name: 'Гостиницы и отели'
    }
  ]}
];
