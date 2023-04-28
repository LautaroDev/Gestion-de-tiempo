//src identifica archivo  y dest la guarda en una carpeta destino
const { src, dest, watch } =  require("gulp");
const sass =  require("gulp-sass") (require('sass'));

function  css (callbak) {
    src('src/scss/**/*.scss')    //Identificar archivo SASS
        .pipe(sass() )              //Compilarlo, para hacerlo usamos el pipe()    
        .pipe(dest('/build/css'));  //Almacenarlo en el disco duro
    callbak();
}

function dev(callbak) {
    watch('src/scss/**/*.scss', css)

    callbak()
}
exports.css = css;  
exports.dev = dev;  