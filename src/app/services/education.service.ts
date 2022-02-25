import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {


 private educationData: any[] = [
   {
    id: '123', 
    certificate: 'Argentina Programa primera etapa', 
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia.',
    year: 2021,
    color: '#ff4f4f'
   },
   {
    id: '124', 
    certificate: 'MERN Stack', 
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia.',
    year: 2021,
    color: '#ffb84f'
   },
   {
    id: '126', 
    certificate: 'Intruducción a la programación', 
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia.',
    year: 2019,
    color: '#0000ff'
   },
   {
    id: '127', 
    certificate: 'Técnico Universitario en Informática', 
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia.',
    year: 2011,
    color: '#3dca5c'
   }
 ];

  constructor() { }

  getEducationData() {
      return this.educationData; 
  }

  // const updatedOSArray = osArray.map(p =>
  //   p.id === 1
  //     ? { ...p, name: 'Ubuntu' }
  //     : p
  // );


  upDateEducationData(id, key, value) {
    const updateData = this.educationData.map(data => {
      data.id === id ? {...data, key: value} : data
    });

    return updateData; 
  }

  deleteEducationData(id) {

    const deleteData = this.educationData.filter(data => {
         if(data.id != id) return data;  
    })
    return deleteData; 
    
    // this.educationData.splice(idex, 1); 
  }
}
