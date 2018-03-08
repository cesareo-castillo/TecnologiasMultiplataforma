/*
get     obtener     obtener/id obtener/10
post    insertar    body:{"id":0, "nombre": "fulano", "apellidos":"apellidos 12"}
put     actualizar  body:{"id":0, "nombre": "fulano", "apellidos":"apellidos 12"}
delete  eliminar/id
*/
//const URL_API ='http://programacion.xyz/mtw/204/crud/index.php/api/';
const URL_API ='http://localhost:8080/crud/index.php/api/';

function nuevo(){
    window.location.href = 'edicion.html?id=0';
}

function editar(id){
    window.location.href = 'edicion.html?id='+id;
}
function eliminar(id){
    swal({
        title: "Estas seguro?",
        text: "Estas a punto de eliminar este usuario!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Sí, borralo!",
        closeOnConfirm: false
        },
        function(){
          $.ajax({
            url : URL_API+"usuarios/eliminar/"+id,
            type: "DELETE",
            dataType: "JSON",
            success: function(data){
              swal("Bien!", "Registro eliminado con exito", "success")
              $('#btnBuscar').trigger('click');
            },
            error: function (jqXHR, textStatus, errorThrown){
              swal("Error", "Algo salio mal al eliminar", "error");
            }
          });
        });
}
function tblUsuario(data){
    console.log(data);
    if(data.status)
    {
        var tbl = '';
        var filtro = $.trim($('#cliente').val());
        $.each(data.result, function(id, usuario){            
            if(filtro === '' || (usuario.nombre + ' ' + usuario.apellidos).indexOf(filtro)!=-1)
            {
                tbl += '<tr>';
                tbl += '<td class="d-none d-md-table-cell">'+ usuario.id +'</td>';
                tbl += '<td class="d-none d-md-table-cell">'+ usuario.nombre +'</td>';
                tbl += '<td class="d-none d-md-table-cell">'+ usuario.apellidos +'</td>';
                tbl += '<td class="d-table-cell d-md-none">'+ usuario.nombre + ' ' + usuario.apellidos +'</td>';
                tbl += '<td>';
                tbl += '<div class="d-flex justify-content-center">';
                tbl += '<button class="btn btn-primary" onclick="editar('+usuario.id+')">Editar</button>';
                tbl += '<button class="btn btn-danger ml-2" onclick="eliminar('+usuario.id+')">Eliminar</button>';
                tbl += '</div>';
                tbl += '</td>';
                tbl += '</tr>';
            }
        });
        $('#usuarios-table-body').html(tbl);
    }
    else
    {
        console.log('Error en el servicio');
    }
}
$(document).ready(()=>{
    console.log('Documento cargado!');
    $('#btnBuscar').click(()=>{
        //console.log('btnBuscar_Click');
        var url = URL_API+'usuarios/obtener';
        $.ajax({
                type:'get',
                url:url,
                data:'',
                contentType:'application/json;charset=utf-8',
                traditional:true,
                success: tblUsuario,
                error: function(){
                    console.log('Error en el servicio');
                }
            });
    });
    $('#btnNuevo').click(()=>{
        console.log('btnNuevo_Click');        
    });
});