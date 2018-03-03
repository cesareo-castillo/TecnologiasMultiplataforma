<?php   
    defined('BASEPATH') or exit('No direct script access allowed.');
    require APPPATH . '/libraries/REST_Controller.php';
    class Usuarios extends REST_Controller{
        public function  __construct(){
            parent::__construct();
            
            $this->load->database();
            $this->load->helper('url');            
        }
        
        public function obtener_get($id=0){
            $usuarios = [];
            if($id>0)
                $this->db->where('id',$id);
            $usuarios = $this->db->get('usuarios')->result_array();            
            //print_r($usuarios);
            if(!empty($usuarios)){
                $this->set_response([
                    "status"=>TRUE,
                    "message"=>'',
                    "result"=>$usuarios],
                    REST_Controller::HTTP_OK); //OK (200) being the HTTP response code
            }
            else{                             
                $this->set_response([                    
                    "status"=>FALSE,
                    "message"=>'Usuarios no encontrados',
                    "result"=>$usuarios
                    ], REST_Controller::HTTP_NOT_FOUND); //NOT_FOUND (404) being the HTTP response code
            }
        }

        public function eliminar_delete($id){
            //Especificamos que realizamos la acción sobre el registro con el id especificado
            $this->db->where('id',$id);
            //Ejecutamos la acción delte sobre la tabla usuarios
            $this->db->delete('usuarios');
            $this->set_response([
                "id"=>$id,
                "message"=>'Registro Eliminado',
                "result"=>[]],
                REST_Controller::HTTP_NO_CONTENT); 
        }

        public function insertar_post(){
            //Obtenemos la información proveniente del cuerpo del mensaje
            $data = file_get_contents('php://input');
            //Decodificamos a formato JSON
            $usuario = json_decode($data);
            //print_r($usuario);
            //Insertamos el registro
            $this->db->insert('usuarios',$usuario);
            //Obtenemos el último id registrado en la conexión actual
            $usuario->id = $this->db->insert_id();
            //Retornamos el registro insertado junto con su id correspondiente
            $this->set_response($usuario,REST_Controller::HTTP_CREATED);
        }

        public function actualizar_put(){
            //Obtenemos la información proveniente del cuerpo del mensaje
            $data = file_get_contents('php://input');
            //Decodificamos a formato JSON
            $usuario = json_decode($data);
            //Especificamos que realizamos la acción sobre el registro con el id especificado
            $this->db->where('id',$usuario->id);
            //Actualizamos con la información especificada en el registro en la tabla de usuarios
            $this->db->update('usuarios',$usuario);
            $this->set_response([
                "id"=>$id,
                "message"=>'Registro Actualizado',
                "result"=>[]],
                REST_Controller::HTTP_NO_CONTENT); 
        }
    }
?>