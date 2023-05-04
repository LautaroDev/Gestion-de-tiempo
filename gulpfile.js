const { src, dest, watch } = require('gulp'); 
const sass =  require('gulp-sass')(require('sass')); 

function css(done) {     
    src('src/scss/**/*.scss')   // identificar el archivos de SASS         
        .pipe(sass()) // Compilarlo         
        .pipe(dest("build/css"))  // Almacenar en el disco duro     
    done(); // callback que avisa a gulp cuando lleguemos al final 
} 

function dev(done) {     
    watch("src/scss/**/*.scss", css)             
    done(); 
} 

exports.css = css; 
exports.dev = dev;