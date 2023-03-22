import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    try {
        const res = await prisma.patient.findMany(
            {
                // where :{
                //     id : {
                //         gte : 1
                //     }
                // }
            }
        )
        console.log(res)
    } catch (error) {
        console.log(error)
    }finally{
        async()=>{
            await prisma.$disconnect()
        }
    }
}

main()