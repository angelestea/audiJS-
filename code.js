class Carro {
    constructor(llantas,color,motor,vidrios,puertas){
        this.llantas=llantas;
        this.color=color;
        this.motor=motor;
        this.videios=vidrios;
        this.puertas=puertas;
        this.encendido=false;
        this.firstMarch=false;
        this.secondMarch=false;
        this.thirdMarch=false;
        this.fourthMarch=false;
        this.fifthMarch=false;
    }
    encendiendoMotor(){
        if(this.encendido==false){
            this.encendido=true;
        alert("Encenciendo motor🚘🚘🚘")
        }
    }
    primeraMarcha(){
        if(this.encendido==true){
            this.firstMarch=true;
            alert("Acelerando en primera marcha⏫🚘")
        };
    }
    segundaMarcha(){
        if(this.encendido==true&&this.firstMarch==true){
            this.secondMarch=true;
            alert("El auto esta andando con la segunda marcha⏫🚘")
        } else if (this.encendido==true&&this.firstMarch==false){
            this.secondMarch=true;
            alert("El auto esta andando en segunda marcha, pero lento")
        };
    }
    terceraMarcha(){
        if(this.encendido==true&&this.firstMarch==true&&this.secondMarch==true){
            this.thirdMarch=true;
            alert("Estamos andando a tercera potencia!⏫⏫")
        }else if(this.encendido==true&&this.firstMarch==true&&this.secondMarch==false){
            this.thirdMarch=true;
            alert("Vamos a tercera potencia pero lento..")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==false){
            this.thirdMarch=true;
            alert("Vamos muy lento")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==true){
            this.thirdMarch=true;
            alert("Estamos andando normal")
        }else if(this.encendido==true&&this.firstMarch==true&&this.secondMarch==false){
            this.thirdMarch=true;
            alert("Estamos andando")
        };
    }
    cuartaMarcha(){
        if(this.encendido==true&&this.firstMarch==true&&this.secondMarch==true&&this.thirdMarch==true){
            this.fourthMarch=true;
            alert("Estamos en la cuarta potencia!!⏫⏫")
        }else if(this.encendido==true&&this.firstMarch==true&&this.secondMarch==false&&this.thirdMarch==false){
            this.fourthMarch=true;
            alert("Vamos a cuarta potencia pero muy lento..")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==true&&this.thirdMarch==false){
            this.fourthMarch=true;
            alert("Vamos a cuarta potencia pero muy lento")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==false&&this.thirdMarch==true){
            this.fourthMarch=true;
            alert("Vamos a cuarta potencia muy muy lento")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==false&&this.thirdMarch==false){
            this.fourthMarch=true;
            alert("Vamos a cuarta potencia muy, muy, muy lento")
        }
    }
    quintaMarcha(){
        if(this.encendido==true&&this.firstMarch==true&&this.secondMarch==true&&this.thirdMarch==true&&this.fourthMarch==true){
            this.fifthMarch=true;
            alert("Estamos en quinta potencia!!⏫⏫💯")
        }else if(this.encendido==true&&this.firstMarch==true&&this.secondMarch==false&&this.thirdMarch==false&&this.fourthMarch==false){
            this.fifthMarch=true;
            alert("Vamos a quinta potencia bastante lento..")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==true&&this.thirdMarch==false&&this.fourthMarch==false){
            this.fifthMarch=true;
            alert("Vamos a quinta potencia pero muy lento")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==false&&this.thirdMarch==true&&this.fourthMarch==false){
            this.fifthMarch=true;
            alert("Vamos a quinta potencia pero muy, muy lento")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==false&&this.thirdMarch==false&&this.fourthMarch==true){
            this.fifthMarch=true;
            alert("Vamos a quinta potencia pero excesivamente lento")
        }else if(this.encendido==true&&this.firstMarch==false&&this.secondMarch==false&&this.thirdMarch==false&&this.fourthMarch==false){
            this.fifthMarch=true;
            alert("Vamos a quinta potencia muuuuy despacio")
        }else {
            alert("")
        }
    };
    apagandoCarro(){
        if(this.encendido==true){
            this.encendido=false;
            this.firstMarch=false;
            this.secondMarch=false;
            this.thirdMarch=false;
            this.fourthMarch=false;
            this.fifthMarch=false;            
            alert("Auto apagado 📴")
        }
    }
}

const audi = new Carro;



const autoFunctions = function(){
    audi.encendiendoMotor();
    audi.primeraMarcha();
    audi.segundaMarcha();
    audi.terceraMarcha();
    audi.cuartaMarcha();
    audi.quintaMarcha();    
};

const manteniendoVelocidad = function (){
alert("Manteniendo velocidad")
alert("350km/h velocidad máxima alcanzada!")
}

const stoptingTheCar = function(){
    alert("Frenando..");
    alert("Bajando a potencias menores..");
    alert("Bajando velocidad..")
    alert("Estacionando audi💯")
    audi.apagandoCarro();
};

setTimeout(autoFunctions,3500);
setTimeout(manteniendoVelocidad,7000);
setTimeout(stoptingTheCar,14000);