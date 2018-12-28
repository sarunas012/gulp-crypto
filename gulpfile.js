// vaztarastis apie registruojamas bibliotekas
// npm init - iniciuoja projekta, sarasa kuriame mes fiksuosim savo biblitoekas

//PASIRASOM COMPAILERI
// pasiemu biblioteka, gulp bus objektas
const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
// uzduotis kuria vykdysiu . gulp test
gulp.task('test', function(done){
    console.log('gulp is working');
    done()
})

// gulp sass po to kai norim kad failas butu kompiliuotas
gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss') // is kur paimsim
      .pipe(sass().on('error', sass.logError)) // kompiliuosim
      .pipe(cleanCSS({compatibility: 'ie8'})) // pavercia css i vienos eilutes koda
      .pipe(autoprefixer({                    // webkit compaileris
        browsers: ['last 2 versions'],
        cascade: false
    }))
      .pipe(gulp.dest('./dist/css')); // kur padesim
});
// automatisaki atnaujins faila kai vyks pasikeitimas
// gulp start
// ATSAUKT NODE KOMANDA CTRL+C
gulp.task('start', function () {
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
});


// instaliuojam globaliai ir manual
// kiekviena karta turim iskviest gulp test
// npm i gulp
// npm i gulp-sass instaliuojam sass

// importuojami failai turi tureti underslasha _
// jeigu sulinkinom naujus failus, tai reikia atsaukti node (ctr+c) ir vel paleist 

// PRIES INSTALIUOJANT NAUJA BIBLIOTEKA REIKIA ATSAUKTI GULPA CTRL+C
// nebutina buti padarius gulp start, kad instaliuotum nauja npm
// norint instaliuoti nauja biblioteka, reikia pvz. npm i gulp-clean-css

// prefixes css webkit


// npm instal, kai istrini node_modules, tai instaliuoji ta papke
// y gita nededama su situo folderi

// git init sukuria package.json

// sass 7 -1 guidline pattern !!!!!!!!!!!

// PO KIEKVIENO NAUJO PROJEKTO IKELTO, PARSISIUSTO Y VSC REIKIA NPM INSTAL, KAD PARSISIUSTU NODE_MODULES