import { Injectable } from '@angular/core';
import { Post } from "../interface/post.interface";
import { delay, Observable, of, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  // info post
  data: Post[] = [
    {
      "_id": 1,
      "name": "Lucía Roldán",
      "description": "Artista de murales urbanos que retrata la cultura local en sus obras."
    },
    {
      "_id": 2,
      "name": "Esteban Calderón",
      "description": "Veterinario especializado en animales exóticos, trabaja en una reserva natural."
    },
    {
      "_id": 3,
      "name": "Alejandra Valdés",
      "description": "Ingeniera ambiental, apasionada por proyectos de energía renovable."
    },
    {
      "_id": 4,
      "name": "Ignacio Quintana",
      "description": "Chef y dueño de un restaurante de cocina fusión en la ciudad."
    },
    {
      "_id": 5,
      "name": "María Fernanda López",
      "description": "Fotógrafa documental, se dedica a captar historias de comunidades rurales."
    },
    {
      "_id": 6,
      "name": "Carlos Pizarro",
      "description": "Biólogo marino, investigador de la biodiversidad en los arrecifes de coral."
    },
    {
      "_id": 7,
      "name": "Rocío Olivares",
      "description": "Abogada de derechos humanos que trabaja en una ONG internacional."
    },
    {
      "_id": 8,
      "name": "Julio Santamaría",
      "description": "Carpintero artesanal que rescata técnicas tradicionales de su región."
    },
    {
      "_id": 9,
      "name": "Valentina Uribe",
      "description": "Periodista y reportera de viajes, redactora en una revista de turismo."
    },
    {
      "_id": 10,
      "name": "Manuel Gutiérrez",
      "description": "Profesor de historia, especialista en estudios precolombinos."
    },
    {
      "_id": 11,
      "name": "Sofía Ramírez",
      "description": "Diseñadora de moda, crea prendas sostenibles inspiradas en el arte indígena."
    },
    {
      "_id": 12,
      "name": "Pablo Aguilera",
      "description": "Ingeniero de software, desarrolla aplicaciones para empresas tecnológicas."
    }
  ];

  constructor() { }

  // Lista de post
  public getAllPost(): Observable<Post[]> {
    return of(this.data).pipe(delay(1500));
  }

  // Elimina post
  public deletePost(id: number | undefined): Observable<number> {
    const index = this.data.findIndex(post => post._id === id);
    if (index > -1) {
      const copyArray = this.data.slice().sort();
      copyArray.splice(index, 1);
      // @ts-ignore
      return of(id).pipe(delay(1000));
    } else {
      return throwError(() => new Error('Post no encontrado'));
    }
  }

  // Crear nuevo post
  public addPost(post: Post): Observable<Post> {
    const newPost = { ...post, _id: this.getRandomInt(9999) };
    this.data = [...this.data, newPost]
    return of(newPost).pipe(delay(1000));
  }

  // Genera un nuevo ID
  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
