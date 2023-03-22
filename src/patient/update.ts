import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    try {
        const res = await prisma.patient.update({
            where : {
                id : 1
            },
            data : {
                nom : 'dhafer'
            }
                 
        })
      console.log(res)  
    } catch (error) {
        console.log(error)
    }finally{
        async () => {
            await prisma.$disconnect()
        }
    }
}

main()