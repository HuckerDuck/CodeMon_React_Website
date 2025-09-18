//? Denna interface matchar det som du skickar från intellij 
//? Till din databas 

export interface CodeMon{
    id: string;
    name: string; 
    type: string; 
    codeMonGeneration: number; 
    hp: number; 
    attackdmg: number; 
    createdAt: string; 
}