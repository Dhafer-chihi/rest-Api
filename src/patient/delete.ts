import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main(){
    try {
        const res = await prisma.patient.delete({
            where : {
                id : 1
            }
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }finally{
        async ()=>{
            await prisma.$disconnect()
        }
    }
}



main()