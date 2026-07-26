
interface CarBody {
    material: string,
    state: string
}

interface Tires {
    airPressure: number,
    condition: string
}

interface Engine {
    horsepower: number,
    oilDensity: number
}

interface AdditinalProps {
    partName: "Engine" | "Car Body" | "Tires";
    runDiagnostics: () => string;
}

function runDiagnostics(this: { partName: string }): string {
    return this.partName
}

function carDiagnostics(
    carBody: CarBody & AdditinalProps,
    tires: Tires & AdditinalProps,
    engine: Engine & AdditinalProps
) {
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}

carDiagnostics(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }

)
