"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_services_1 = require("../servicios/usuario.services");
const usuario_dto_1 = require("../dto/usuario.dto");
const login_dto_1 = require("../dto/login.dto");
const swagger_1 = require("@nestjs/swagger");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    findAll() {
        return this.usuarioService.prueba();
    }
    async crearUsuario(data) {
        return await this.usuarioService.crearUsuario(data);
    }
    async consultarUsuario() {
        return await this.usuarioService.consultarTodos();
    }
    async actualizarUsuario(cedula, data) {
        return await this.usuarioService.actualizarUsuario(cedula, data);
    }
    async eliminarUsuario(cedula) {
        return await this.usuarioService.eliminarUsuario(cedula);
    }
    login(payload) {
        return this.usuarioService.login(payload.correo, payload.password);
    }
    async consultarUsuarioCedula(cedula) {
        return await this.usuarioService.consultarTodosCedula(cedula);
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Get)('prueba'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UsuarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('crearUsuario'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo usuario' }),
    (0, swagger_1.ApiBody)({ type: usuario_dto_1.crearUsuarioDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario creado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de usuario inválidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.crearUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "crearUsuario", null);
__decorate([
    (0, common_1.Get)('consultarUsuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "consultarUsuario", null);
__decorate([
    (0, common_1.Put)('actualizarUsuario/:cedula'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('cedula', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, usuario_dto_1.actualizarUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "actualizarUsuario", null);
__decorate([
    (0, common_1.Delete)('eliminarUsuario/:cedula'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('cedula', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "eliminarUsuario", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.crearLoginDto]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('consultarUsuarioCedula/:cedula'),
    __param(0, (0, common_1.Param)('cedula', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "consultarUsuarioCedula", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    (0, swagger_1.ApiTags)('Usuario'),
    __metadata("design:paramtypes", [usuario_services_1.usuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map