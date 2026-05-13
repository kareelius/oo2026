class MaterialAmount {

    mass: number;
    specificHeatCapacity: number;
    temperature: number;

    constructor(
        mass: number,
        specificHeatCapacity: number,
        temperature: number
    ){

        this.mass = mass;
        this.specificHeatCapacity = specificHeatCapacity;
        this.temperature = temperature;
    }

    getTemperature(): number {

        return this.temperature;
    }

    addEnergy(energy: number): void {

        const deltaT =
            energy / (this.mass * this.specificHeatCapacity);

        this.temperature += deltaT;
    }

    getHeatCapacity(): number {

        return this.mass * this.specificHeatCapacity;
    }
}


class AirAmount extends MaterialAmount {

    length: number;
    width: number;
    height: number;

    static density = 1.23;

    constructor(
        length: number,
        width: number,
        height: number,
        temperature: number
    ){

        const volume =
            length * width * height;

        const mass =
            volume * AirAmount.density;

        super(
            mass,
            1012,
            temperature
        );

        this.length = length;
        this.width = width;
        this.height = height;
    }
}


function calculateEqualTemperature(
    materials: MaterialAmount[]
): number {

    let total = 0;

    let heatCapacity = 0;

    for(let material of materials){

        total +=
            material.getTemperature()
            * material.getHeatCapacity();

        heatCapacity +=
            material.getHeatCapacity();
    }

    return total / heatCapacity;
}