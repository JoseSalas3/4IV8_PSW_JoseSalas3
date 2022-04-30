<%-- 
    Document   : RegistrarAlumno
    Created on : 14/04/2022, 12:20:02 AM
    Author     : autor
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registrar</title>
    </head>
    <link rel="stylesheet" href="CSS/style1.css"/>
    <script src="./JavaScript/js1.js"></script>
    <body>
        
        <div>

            <header>

               
                <h1 class="text">Registro de Computadoras</h1>
                

            </header>


        </div>
        <div id="cuerpo">
            
            <div class="lateral">
                
            </div>
            <div id="centro" class="text">
                <form action="AceptarRegistro.jsp" id="formulario_ra" name="formulario_ra">
                    
                    <h3 class="sub_registro">INFORMACION PERSONAL</h3>
                    <div class="campos2">
                        <div class="campos"><p>Ingresa el nombre:</p><input type="text" name="nombre"class="input_text"></div>
                        <div class="campos"><p>Ingresa el apellido paterno:</p><input type="text" name="appat" class="input_text"></div>
                        <div class="campos"><p>Ingresa el apellifo materno:</p><input type="text" name="apmat"class="input_text"></div>
                        <div class="campos"><p>Ingresa la fecha de nacimiento:</p><input type="date" name="fecha" class="input_fecha"></div>
                        <div class="campos"><p>Ingresa el sexo:</p>
                        <div>

                            <input type="radio" id="sexo" name="sexo" value="masculion">
                            <label>Masculino</label>
                            <input type="radio" id="sexo" name="sexo" value="femenino">
                            <label>Femenino</label>

                        </div>
                        </div>
                        
                    </div>
                    <h3 class="sub_registro">INFORMACION ACADEMICA</h3>
                    <div class="campos2">
                        <div class="campos"><p>Ingresa la boleta:</p><input type="number" name="boleta" class="input_text"></div>
                        <div class="campos"><p>Ingresa el semestre:</p>
                        <div>

                            <input type="radio" id="semestre" name="semestre" value="1">
                            <label>Primero</label>
                            <input type="radio" id="semestre" name="semestre" value="2">
                            <label>Segundo</label>
                            <input type="radio" id="semestre" name="semestre" value="3">
                            <label>Tercero</label>
                            <input type="radio" id="semestre" name="semestre" value="4">
                            <label>Cuarto</label>
                            <input type="radio" id="semestre" name="semestre" value="5">
                            <label>Quinto</label>
                            <input type="radio" id="semestre" name="semestre" value="6">
                            <label>Sexto</label>
                        </div>
                        </div>

                        <div class="campos"><p>Ingresa el turno:</p><div><input type="radio"name="turno">
                            <label>Vespertino</label>
                            <input type="radio"name="turno">
                            <label>Matutino</label></div></div>
                        <div class="campos"><p>Ingresa el grupo (4IV8 ejemplo):</p><input type="grupo" name="grupo"class="input_text"></div>
                    </div>
                    <h3 class="sub_registro">INFORMACION DE LA CUENTA</h3>
                    <div class="campos2">
                    <div class="campos"><p>Ingresa el nombre de usuario que deseas utilizar:</p><input type="text" name="usuario" class="input_text"></div>
                    <div class="campos"><p>Ingresa la contraseña:</p><input type="password" name="contra" class="input_text"></div>         
                    </div>
                </form>
                <form action="imagen" enctype="multipart/form-data" method="post" target="null" name="formulario_foto" id="formulario_foto">
                    
                    <div class="campos"><p id="parrafo">Ingresa una foto tuya para guardarla en la base de datos:</p><input type="file" id="archivo" accept="image/png,image/jpeg" name="archivo"></div>        
                
                </form>
                <button onclick="registrar()" id="registrar">Registrar Alumno</button>
                <a href="index.html"><button class="boton_aceptar">Regresar</button></a>
            </div>
            <div class="lateral">
                
            </div>
            
        </div>
        <iframe name="null" style="display: none;"></iframe>
        <div>
        
        <footer>
            
            <div>
                
            </div>
            <div class="text" id="pie">
                
    
            </div>
            
        </footer>
        
    </div>
    </body>
</html>
