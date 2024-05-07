import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { usuarioService } from 'src/usuario/servicios/usuario.services';
import { actualizarUsuarioDto, crearUsuarioDto } from '../dto/usuario.dto';
import { crearLoginDto } from '../dto/login.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';



@Controller('usuario')
@ApiTags('Usuario')
export class UsuarioController {
  constructor(private usuarioService: usuarioService) {}

 

  @Get('prueba')
  findAll(): string {
    return  this.usuarioService.prueba();
  }

  @Post('crearUsuario')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiBody({ type: crearUsuarioDto }) // Especifica el tipo del cuerpo esperado
  @ApiResponse({ status: 201, description: 'Usuario creado con éxito' })
  @ApiResponse({ status: 400, description: 'Datos de usuario inválidos' })
  async crearUsuario(@Body() data: crearUsuarioDto) {
    return await this.usuarioService.crearUsuario(data);
  }

  @Get('consultarUsuario')
  async consultarUsuario(){
    return await this.usuarioService.consultarTodos();
  }

  @Put('actualizarUsuario/:cedula')
  @UsePipes(new ValidationPipe())
  async actualizarUsuario(@Param('cedula', ParseIntPipe) cedula: string, @Body() data: actualizarUsuarioDto) {
    return await this.usuarioService.actualizarUsuario(cedula, data);
  }

  @Delete('eliminarUsuario/:cedula')
  @UsePipes(new ValidationPipe())
  async eliminarUsuario(@Param('cedula', ParseIntPipe) cedula: string) {
    return await this.usuarioService.eliminarUsuario(cedula);
  }


  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() payload: crearLoginDto) {
    return this.usuarioService.login(payload.correo, payload.password);
  }

  @Get('consultarUsuarioCedula/:cedula')
  async consultarUsuarioCedula(@Param('cedula', ParseIntPipe) cedula: string){
    return await this.usuarioService.consultarTodosCedula(cedula);
  }

  
  


}