import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from '../models/models';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  private usuarioCollection : AngularFirestoreCollection<Usuario>;
  private usuarioDoc: AngularFirestoreDocument<Usuario>;
  constructor(private angularFirestore: AngularFirestore) { }
  
  getUsuarios() {
    this.usuarioCollection = this.angularFirestore.collection<Usuario>('usuario')
      return  this.usuarioCollection
             .snapshotChanges()
             .pipe(map(action=>{
                return action.map(a =>{
                  const data = a.payload.doc.data() as Usuario
                  data.id = a.payload.doc.id;
                  return data;
                });
             }));
  }

  getUsuario(clave?:string, valor?:string) {
    this.usuarioCollection = this.angularFirestore
    .collection<Usuario>('usuario', ref => ref.where( `${clave}`, '==', `${valor}`));
    return this.usuarioCollection.snapshotChanges()
    .pipe(map(action => {
        return action.map(a => {
          const data = a.payload.doc.data() as Usuario;
          data.id = a.payload.doc.id;
          return data;
        });
    }));
  }

  newUsuario(usuario:Usuario){
      this.usuarioCollection = this.angularFirestore.collection<Usuario>('usuario');
     return this.usuarioCollection.add(usuario);
  }

  deleteUsuario(usuario:Usuario) {
    this.usuarioDoc = this.angularFirestore.doc<Usuario>(`usuario/${usuario.dni}`);
    this.usuarioDoc.delete();
  }
}
