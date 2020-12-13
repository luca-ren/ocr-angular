export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll(): void{
      for (const appareil of this.appareils) {
        appareil.status = 'éteint';
      }
  }

  // tslint:disable-next-line:typedef
  switchOnOne(i: number | undefined) {
    // @ts-ignore
    this.appareils[i].status = 'allumé';
  }

  // tslint:disable-next-line:typedef
  switchOffOne(i: number | undefined) {
    // @ts-ignore
    this.appareils[i].status = 'éteint';
  }

  // tslint:disable-next-line:typedef
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

}
