#  Aplicación con express
### Usar node version 11.10.1
```
nvm use
```
### Instalar paquetes
```
npm install
```
```
npm i -g sequelize-cli
```
### Crear modelos
```
sequelize init
```
```
sequelize model:generate --name User --attributes email:string,password_hash:string
```
```
sequelize db:migrate
```