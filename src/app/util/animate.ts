
import ScrollReveal from 'scrollreveal';

export const animate = (NameClass:string, duration:Number, origin:string, distance:string) => {

    ScrollReveal().reveal(`.${NameClass}`, {
        duration,
        origin, 
        distance
      });

}