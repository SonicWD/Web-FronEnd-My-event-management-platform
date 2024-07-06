# React + Vite Portfolio

## (Nota 1) Actualización de Dependencias 

Durante la instalación de dependencias, se encontraron varios mensajes de advertencia. Para resolverlos, se desinstalaron y reemplazaron las dependencias obsoletas.

### Mensajes de Advertencia Solucionados:

- **inflight@1.0.6**: No es compatible y tiene fugas de memoria. Se recomendó usar `lru-cache`.
- **@humanwhocodes/config-array@0.11.14**: Se actualizó a `@eslint/config-array`.
- **rimraf@3.0.2** y **glob@7.2.3**: Se actualizaron a las versiones más recientes.
- **@humanwhocodes/object-schema@2.0.3**: Se actualizó a `@eslint/object-schema`.

### Pasos Realizados:

1. **Actualizar Dependencias Obsoletas:**

   ```sh
   npm uninstall inflight
   npm install lru-cache
   npm uninstall @humanwhocodes/config-array
   npm install @eslint/config-array
   npm uninstall @humanwhocodes/object-schema
   npm install @eslint/object-schema
   npm install rimraf@latest glob@latest

### Verificar Compatibilidad

Se verificaron las actualizaciones para asegurar la compatibilidad con el proyecto.

### Actualizar `package.json`

```json
{
  "dependencies": {
    "@eslint/config-array": "^1.0.0",
    "@eslint/object-schema": "^1.0.0",
    "lru-cache": "^6.0.0",
    "rimraf": "^4.0.0",
    "glob": "^9.0.0"
  }
}

## Se instala tailwin


