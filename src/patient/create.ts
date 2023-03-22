import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        const data = [
            {nom : 'lo' , prenom : 'lilo' , age : 32 , sexe : 'F' , email : 'lo@lil.com' , mobile : '000000'},
            {nom : 'll' , prenom : 'lila' , age : 32 , sexe : 'F' , email : 'll@lil.com' , mobile : '000001'},
            {nom : 'ol' , prenom : 'lily' , age : 32 , sexe : 'F' , email : 'ol@lil.com' , mobile : '000002'},
            {nom : 'lool' , prenom : 'lilo' , age : 32 , sexe : 'F' , email : 'lool@lil.com' , mobile : '000003'}
        ];
        const patient ={nom : 'lody' , prenom : 'lemon' , age : 32 , sexe : 'F' , email : 'rody@lemon.com' , mobile : '111111'}

        const res = await prisma.patient.createMany({
            data : patient
            
        });
        console.log(res)
    } catch (error) {
        console.log(error)
    }finally{
        async()=>{
            await prisma.$connect()
        }
    }
}

main()