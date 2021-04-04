const termux = termux => {
return `Comandos básicos para usar en termux o cualquier terminal que simule linux

cd = abrir diretórios(pastas)
exemplo = cd /sdcard/

ls = enumera los archivos y directorios presentes

mv = mover archivo o directorio a otra ubicación
exemplo = mv teste.sh(arquivo) $HOME
Obs: el comando $HOME es la carpeta de inicio de termux(por donde empiezas)

cp = copiar archivos y directorio a otra ubicación
exemplo = cp -r teste(directório) $HOME 
Obs: o -r después de cp is, se usó un argumento para mover el directorio con su contenido a otra ubicación

que son los argumentos = Los argumentos son opciones que usas en la terminal para poder ejecutar el comando de una manera diferente

rm = remove arquivos e diretórios
exemplo = rm -r -f teste(diretório)
Obs = Lo mismo que el comando cp, pero -f se usa en caso de que el archivo o directorio tenga dificultades para eliminarse o -f fuerza su exclusión`
}

exports.termux = termux
