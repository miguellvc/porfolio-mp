import Swal from 'sweetalert2';

export const swalDelete = (fireObject) => {

    return Swal.fire({
        html: `
            <h3>Desea eliminar el objeto</h3>
            ${fireObject.content}    
        `,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
      }); 
} 


export const isConfirmed = () => {

    // la tercera opción el icon
    Swal.fire('Eliminado!', '', 'success')
}