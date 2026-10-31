export const MAP_EVENTS={
 rain:{name:'Начался дождь',icon:'☂',color:'#85d8ff',duration:32,description:'Лужи на трассе: скользко, возможна потеря скорости'},
 tree:{name:'Упало дерево',icon:'⚠',color:'#ffc37e',duration:26,description:'Две полосы перекрыты — машины ищут объезд'},
 tires:{name:'Рассыпались шины',icon:'⚠',color:'#f4ce81',duration:24,description:'Шины на дороге: объезд или короткое торможение'},
 oil:{name:'Разлив масла',icon:'◉',color:'#c7acff',duration:27,description:'Скользкий участок: машину может занести'},
 charge:{name:'Энергокоридор',icon:'ϟ',color:'#82ffe1',duration:30,description:'Лови светящуюся полосу! Каждые 6 с она меняется и даёт разгон'}
};
export const EVENT_KEYS=Object.keys(MAP_EVENTS);
