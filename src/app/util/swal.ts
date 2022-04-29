import Swal from 'sweetalert2';

export const swalDelete = (fireObject) => {

    return Swal.fire({
        html: `
            <h3>Desea eliminar el contenido</h3>
            ${fireObject.content}    
        `,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
      }); 
} 


export const swalIsConfirmed = () => {

    // la tercera opción el icon
    Swal.fire('Eliminado!', '', 'success')
}

export const swalError = (msg:string) => {
    Swal.fire(msg, '', 'error')
}